"use client";
import Image from "next/image";
import Sidebar from './../assets/sidebar.svg';
import Arrow from './../assets/arrow.svg';
import Refresh from './../assets/refresh.svg';
import { useState } from "react";
import HoverHighlighter from "./HoverHighlighter";
import IframeBrowser from "./IframeBrowser";

const SafariBrowser = () => {
  const [url, setUrl] = useState('https://example.com');
  const [hoveredElement, setHoveredElement] = useState(null);

  const handleElementHover = (element: any) => {
    setHoveredElement(element);
  };
  return (
    <div>
      <div className="h-12 border rounded-t-lg px-6 flex items-center bg-slate-200 border-slate-200">
        <div className="min-w-[20%] flex">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#FF6359] border border-[#FA463A] rounded-full"></div>
            <div className="w-3 h-3 bg-[#F7BF2B] border border-[#E9B11E] rounded-full"></div>
            <div className="w-3 h-3 bg-[#34C546] border border-[#24BA36] rounded-full"></div>
          </div>
          <div className="pl-8 pr-8">
            <Image src={Sidebar} alt="fe" width={20} height={20} />
          </div>
          <div className="flex gap-5">
            <Image src={Arrow} alt="fe" width={20} height={20} />
            <Image className="rotate-180" src={Arrow} alt="fe" width={20} height={20} />
          </div>
        </div>
        <div className="w-full flex bg-white border rounded h-6 items-center">
          <div className="w-[33%]"></div>
          <div className="w-[33%]">
            <input defaultValue={url} type="text" className="w-full h-full bg-transparent outline-none text-center" />
          </div>
          <div className="w-[33%] flex flex-row-reverse">
            <Image src={Refresh} alt="fe" width={16} height={16} />
          </div>
        </div>
        <div className="min-w-[20%] flex" />
      </div>
      <div className="h-[650px] bg-black">
        <IframeBrowser url={url} onElementHover={handleElementHover} />
      </div>
    </div>
  )
};

export default function Home() {

  return (
    <div className="bg-slate-300 h-screen">
      {/* <h1>Home Page</h1> */}
      <div className="pl-10 pr-10 pt-20">
        <SafariBrowser />
        {/* <HoverHighlighter onElementHover={handleElementHover} /> */}
      </div>
    </div>
  );
}
