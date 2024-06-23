import React, { useEffect, useState } from 'react';

const HoverHighlighter = ({ onElementHover }: { onElementHover: (element: any) => void }) => {
  useEffect(() => {
    const handleMouseOver = (event: any) => {
      const target = event.target;
      target.classList.add('hover-highlight');
      onElementHover(target); // Capture l'élément survolé
    };

    const handleMouseOut = (event: any) => {
      const target = event.target;
      target.classList.remove('hover-highlight');
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [onElementHover]);

  return null;
};

export default HoverHighlighter;
