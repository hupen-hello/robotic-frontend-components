"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function TemplatePreview() {
  const [isAutoScroll, setIsAutoScroll] = useState(false);
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const autoScroll = () => {
      if (screenRef.current && isAutoScroll) {
        screenRef.current.scrollTop += 1;

        if (
          screenRef.current.scrollTop >=
          screenRef.current.scrollHeight - screenRef.current.clientHeight
        ) {
          screenRef.current.scrollTop = 0;
        }

        animationFrameId = requestAnimationFrame(autoScroll);
      }
    };

    if (isAutoScroll) {
      animationFrameId = requestAnimationFrame(autoScroll);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [isAutoScroll]);

  return (
    <div className="flex flex-col h-screen w-full bg-[#fcfafb] font-sans overflow-hidden relative">
      <img src="/texture-left.png" alt="" className="absolute left-0 top-1/2 -translate-y-1/2 h-[75%] max-h-[800px] object-contain opacity-80 pointer-events-none z-0" />
      <img src="/texture-right.png" alt="" className="absolute right-0 top-1/2 -translate-y-1/2 h-[75%] max-h-[800px] object-contain opacity-80 pointer-events-none z-0" />

      <header className="px-8 py-4 bg-white border-b border-gray-200 flex items-center gap-4 shrink-0 shadow-sm z-20">
        <div className="w-8 h-8 rounded-full bg-[#bf161d] text-white flex items-center justify-center font-bold text-lg shadow-md">
          3
        </div>
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">
          Preview Website Template
        </h1>
      </header>

      {/* Main Container: overflow-y-auto लगा दिया ताकि कुछ भी कटे नहीं */}
      <main className="flex-1 w-full overflow-y-auto custom-scrollbar flex items-center justify-center p-4 py-8 relative z-10">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 my-auto">
          
          {/* Monitor को थोड़ा छोटा कर दिया (max-w-lg lg:max-w-xl) */}
          <div className="relative w-full max-w-lg lg:max-w-xl flex flex-col items-center drop-shadow-2xl">
            <div className="bg-[#1a1a1a] w-full rounded-2xl p-2.5 relative border-[3px] border-gray-700 shadow-inner z-10">
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
              
              <div 
                ref={screenRef} 
                className="w-full aspect-video bg-white rounded overflow-y-auto custom-scrollbar relative mt-1"
              >
                <div className="w-full min-h-[2000px] bg-gray-50 flex flex-col">
                  <div className="h-[300px] md:h-[350px] bg-gradient-to-br from-gray-900 to-[#bf161d] flex flex-col items-center justify-center text-center p-6 text-white">
                    <h1 className="text-2xl md:text-3xl font-serif mb-3">TURNING DREAMS INTO REALTY</h1>
                    <p className="text-xs opacity-80 max-w-lg">Step into a world of unparalleled comfort, where every detail is designed with your well-being in mind.</p>
                  </div>
                  <div className="py-8 px-6 grid grid-cols-3 gap-4">
                    <div className="h-24 bg-gray-200 rounded-lg"></div>
                    <div className="h-24 bg-gray-200 rounded-lg"></div>
                    <div className="h-24 bg-gray-200 rounded-lg"></div>
                  </div>
                  <div className="h-[200px] bg-gray-800 my-4 mx-6 rounded-xl flex items-center justify-center">
                     <span className="text-white text-lg opacity-20 font-bold">Image Gallery</span>
                  </div>
                  <div className="py-8 px-6 grid grid-cols-2 gap-6">
                    <div className="h-40 bg-gray-200 rounded-xl"></div>
                    <div className="flex flex-col gap-3">
                      <div className="h-5 w-3/4 bg-gray-300 rounded-md"></div>
                      <div className="h-2 w-full bg-gray-200 rounded"></div>
                      <div className="h-2 w-full bg-gray-200 rounded"></div>
                      <div className="h-2 w-5/6 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 text-[8px] text-gray-400 font-sans tracking-widest uppercase">
                MONITOR
              </div>
            </div>

            <div className="w-10 h-6 bg-gradient-to-b from-gray-700 to-gray-800 z-0"></div>
            <div className="w-40 h-3 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-lg shadow-xl border-b-2 border-gray-500 z-0"></div>
            
            {/* यहाँ से Copy URL वाला हिस्सा हटा दिया गया है */}
          </div>

          <div className="flex flex-col items-center gap-3 shrink-0">
            <span className={`text-xs font-bold tracking-widest transition-colors ${!isAutoScroll ? 'text-gray-900' : 'text-gray-400'}`}>OFF</span>
            
            <button 
              onClick={() => setIsAutoScroll(!isAutoScroll)}
              className="relative w-10 h-24 rounded-full border-[3px] border-gray-200 bg-white shadow-inner p-1 flex flex-col items-center cursor-pointer outline-none transition-all"
            >
              <div 
                className={`w-7 h-7 rounded-full shadow-md transition-all duration-300 ease-in-out absolute left-[3px] ${
                  isAutoScroll 
                    ? "translate-y-[56px] bg-[#bf161d] shadow-[#bf161d]/40"
                    : "translate-y-0 bg-gray-300"
                }`}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white/30"></div>
              </div>
            </button>

            <span className={`text-xs font-bold tracking-widest transition-colors ${isAutoScroll ? 'text-[#bf161d]' : 'text-gray-400'}`}>ON</span>
          </div>
        </div>
      </main>

      <footer className="px-8 py-4 bg-white border-t border-gray-200 flex justify-between items-center shrink-0 shadow-[0_-4px_10px_rgba(0,0,0,0.02)] z-20 w-full">
        <Link 
          href="/template" 
          className="px-6 md:px-8 py-2.5 md:py-3 border border-gray-200 bg-white text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-sm text-sm cursor-pointer flex items-center justify-center"
        >
          Back
        </Link>
        
        <button 
          type="button" 
          className="px-6 md:px-8 py-2.5 md:py-3 bg-[#bf161d] hover:bg-[#a01218] text-white font-bold rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-[#bf161d]/30 text-sm cursor-pointer"
        >
          Continue 
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
            width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #888; 
            border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #bf161d; 
        }
      `}} />
    </div>
  );
}