import React, { useRef, useEffect } from 'react';

const IframeBrowser = ({ url, onElementHover } : { url: string, onElementHover: (element: any) => void }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

    const injectStyles = () => {
      const style = iframeDocument.createElement('style');
      style.innerHTML = `
        .hover-highlight {
          outline: 2px solid #00f;
          cursor: pointer;
        }
      `;
      iframeDocument.head.appendChild(style);
    };

    const handleMouseOver = (event) => {
      const target = event.target;
      target.classList.add('hover-highlight');
      onElementHover(target); // Capture l'élément survolé
    };

    const handleMouseOut = (event) => {
      const target = event.target;
      target.classList.remove('hover-highlight');
    };

    iframeDocument.addEventListener('mouseover', handleMouseOver);
    iframeDocument.addEventListener('mouseout', handleMouseOut);

    // Inject styles when iframe is loaded
    iframe.addEventListener('load', injectStyles);

    // Cleanup event listeners on component unmount
    return () => {
      iframeDocument.removeEventListener('mouseover', handleMouseOver);
      iframeDocument.removeEventListener('mouseout', handleMouseOut);
      iframe.removeEventListener('load', injectStyles);
    };
  }, [onElementHover]);

  return (
    <iframe
      ref={iframeRef}
      src={url}
      style={{ width: '100%', height: '80vh', border: '1px solid #ccc', marginTop: '10px' }}
      title="Browser Window"
    />
  );
};

export default IframeBrowser;
