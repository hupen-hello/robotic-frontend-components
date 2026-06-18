"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";

export default function ChooseTemplate() {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(1);
  const [visibleCount, setVisibleCount] = useState(4);
  const [pageType, setPageType] = useState("all");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewData, setPreviewData] = useState<any>(null);
  
  const [isAutoScroll, setIsAutoScroll] = useState(false);
  const screenRef = useRef<HTMLDivElement>(null);

  const templates = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    title: `Premium Template ${i + 1}`,
    url: "https://propliners.in/",
    type: i % 2 === 0 ? "single" : "multiple",
  }));

  const filteredTemplates = useMemo(() => {
    return templates.filter((tmpl) => {
      return pageType === "all" || tmpl.type === pageType;
    });
  }, [pageType, templates]);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const openPreview = (tmpl: any) => {
    setSelectedTemplate(tmpl.id);
    setPreviewData(tmpl);
    setIsPreviewOpen(true);
    setIsAutoScroll(false);
  };

  const filterOptions = [
    { value: "all", label: "All Pages" },
    { value: "single", label: "Single Page Website" },
    { value: "multiple", label: "Multiple Pages Website" },
  ];


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  

  return (
    <div className="flex flex-col h-screen w-full bg-[#fcfafb] font-sans overflow-hidden relative">
      <img src="/texture-left.png" alt="Texture" className="absolute left-0 top-1/2 -translate-y-1/2 h-[85%] max-h-[900px] object-contain opacity-80 pointer-events-none z-0 scale-110" />
      <img src="/texture-right.png" alt="Texture" className="absolute right-0 top-1/2 -translate-y-1/2 h-[85%] max-h-[900px] object-contain opacity-80 pointer-events-none z-0 scale-110" />

      <header className="px-8 py-3 md:py-4 bg-white border-b border-gray-200 flex items-center gap-4 shrink-0 shadow-sm z-20">
        <div className="w-8 h-8 rounded-full bg-[#bf161d] text-white flex items-center justify-center font-bold text-lg shadow-md">3</div>
        <h1 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight">Choose Your Website Template</h1>
      </header>

      <main className="flex-1 w-full overflow-hidden p-4 md:p-6 z-10 flex flex-col justify-center items-center relative">
        <div className="w-full max-w-7xl h-full max-h-full bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col relative z-10 overflow-hidden">
          
          <div className="px-6 pt-6 pb-2 shrink-0">
            <div className="w-full max-w-2xl mx-auto mb-6 flex items-center justify-center relative">
              <div className="flex items-center gap-2 bg-[#bf161d] text-white px-5 sm:px-8 py-2 rounded-full font-bold text-xs shadow-md z-10">
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                <span className="hidden sm:inline">Business Info</span>
              </div>
              <div className="w-10 sm:w-16 h-[2px] bg-[#bf161d] -mx-3 z-0"></div>
              <div className="flex items-center gap-2 bg-[#bf161d] text-white px-5 sm:px-8 py-2 rounded-full font-bold text-xs shadow-md z-10">
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                <span className="hidden sm:inline">Category</span>
              </div>
              <div className="w-10 sm:w-16 h-[2px] bg-red-200 -mx-3 z-0"></div>
              <div className="flex items-center gap-2 bg-[#bf161d] text-white px-5 sm:px-8 py-2 rounded-full font-bold text-xs shadow-md z-10">
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                <span className="hidden sm:inline">Choose Design</span>
              </div>
            </div>

            <div className="text-center mb-2 ">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1.5 tracking-tight">What type of website do you need?</h2>
              <p className="text-gray-500 text-sm">Choose the option that best describes your goal.</p>
            </div>

            <div className="flex justify-end mb-2">
              <div className="relative shrink-0 min-w-[220px]" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-white border border-[#bf161d]/30 hover:border-[#bf161d] rounded-full px-5 py-2.5 flex items-center justify-between text-sm font-bold text-[#bf161d] shadow-sm transition-all outline-none"
                >
                  {filterOptions.find((opt) => opt.value === pageType)?.label}
                  <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-full bg-white border border-gray-100 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] z-50 overflow-hidden py-1.5">
                    {filterOptions.map((opt) => (
                      <div
                        key={opt.value}
                        onClick={() => {
                          setPageType(opt.value);
                          setIsDropdownOpen(false);
                        }}
                        className={`px-5 py-2.5 text-sm cursor-pointer transition-colors ${
                          pageType === opt.value
                            ? "bg-red-50 text-[#bf161d] font-bold"
                            : "text-gray-700 hover:bg-gray-50 font-semibold"
                        }`}
                      >
                        {opt.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-6 pb-6 custom-scrollbar">
            {filteredTemplates.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 p-2">
                {filteredTemplates.slice(0, visibleCount).map((tmpl) => (
                  <div
                    key={tmpl.id}
                    onClick={() => openPreview(tmpl)}
                    className={`bg-white rounded-2xl p-2.5 cursor-pointer transition-all duration-300 border-2 group ${
                      selectedTemplate === tmpl.id
                        ? "border-[#bf161d] shadow-[0_4px_15px_rgba(191,22,29,0.2)] scale-[1.02]"
                        : "border-gray-100 shadow-sm hover:border-[#bf161d]/40 hover:shadow-md"
                    }`}
                  >
                    
                    <div className="w-full h-36 sm:h-40 rounded-xl relative overflow-hidden bg-gray-50 border border-gray-100">
                      {tmpl.id === 1 ? (
                        <iframe
                          src={tmpl.url}
                          title={tmpl.title}
                          loading="lazy"
                          scrolling="no"
                          className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none bg-white"
                          tabIndex={-1}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center text-white p-4">
                          <svg className="w-8 h-8 opacity-30 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                          <span className="text-sm font-bold opacity-50 tracking-wider">PREVIEW {tmpl.id}</span>
                        </div>
                      )}

                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/40 transition-colors z-10 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#bf161d] px-4 py-1.5 rounded-full font-bold shadow-md text-xs transform translate-y-2 group-hover:translate-y-0">
                          Preview Design
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 mt-3 mb-1 px-1.5">
                      <div className={`w-5 h-5 shrink-0 rounded-full flex items-center justify-center transition-colors ${selectedTemplate === tmpl.id ? "bg-[#bf161d] text-white" : "bg-gray-200 text-gray-400 group-hover:bg-[#bf161d]/20 group-hover:text-[#bf161d]"}`}>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span className="text-sm font-bold text-gray-900 truncate">{tmpl.title}</span>
                      <span className={`ml-auto text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${tmpl.type === "single" ? "text-blue-600 bg-blue-50" : "text-[#bf161d] bg-[#bf161d]/10"}`}>
                        {tmpl.type === "single" ? "SINGLE" : "MULTI"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full h-40 flex flex-col items-center justify-center bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl">
                <span className="text-gray-400 font-bold text-sm mb-1">No templates found</span>
                <button onClick={() => setPageType("all")} className="text-[#bf161d] font-semibold text-xs hover:underline">Clear Filters</button>
              </div>
            )}

            {visibleCount < filteredTemplates.length && (
              <div className="flex justify-center mt-8 mb-2">
                <button onClick={handleSeeMore} className="px-8 py-2.5 bg-white border-2 border-gray-200 hover:border-[#bf161d] text-gray-700 hover:text-[#bf161d] font-bold rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2 text-xs">
                  Load More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="px-6 md:px-8 py-1 bg-white border-t border-gray-200 flex justify-between items-center shrink-0 shadow-[0_-4px_10px_rgba(0,0,0,0.02)] z-20 w-full relative">
        <Link href="/WebsiteType" className="px-6 py-2 border border-gray-200 bg-white text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-sm text-sm cursor-pointer flex items-center justify-center">
          Back
        </Link>
        
      </footer>

      {isPreviewOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/40 backdrop-blur-sm transition-all duration-300 animate-fade-in">
          <div className="bg-[#fcfafb] w-full h-[98vh] rounded-t-3xl shadow-2xl relative flex flex-col overflow-hidden animate-slide-up border-t border-gray-200">

            <img src="/texture-left.png" alt="Texture" className="absolute left-0 top-1/2 -translate-y-1/2 h-[85%] max-h-[900px] object-contain opacity-80 pointer-events-none z-0 scale-110" />
      <img src="/texture-right.png" alt="Texture" className="absolute right-0 top-1/2 -translate-y-1/2 h-[85%] max-h-[900px] object-contain opacity-80 pointer-events-none z-0 scale-110" />
            
            <div className="absolute top-5 right-6 z-50">
            <button 
              onClick={() => setIsPreviewOpen(false)} 
              className="w-10 h-10 bg-white border border-gray-200 hover:bg-[#bf161d] hover:text-white hover:border-[#bf161d] text-gray-600 shadow-md rounded-full flex items-center justify-center transition-all cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

            <div className="flex-1 w-full overflow-y-auto custom-scrollbar flex items-center justify-center p-4 py-10 relative">
              <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
                
                <div className="relative w-full max-w-lg lg:max-w-3xl flex flex-col items-center drop-shadow-2xl">
                  <div className="bg-[#1a1a1a] w-full rounded-2xl p-2.5 relative border-[3px] border-gray-700 shadow-inner z-10">
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                    <div ref={screenRef} className="w-full aspect-video bg-white rounded overflow-hidden relative mt-1">
                      <div style={{ width: '1500px', height: '900px', zoom: 0.52 }}>
                          <iframe 
                            src={previewData?.url} 
                            className="w-full h-full border-none pointer-events-auto"
                            scrolling="yes"
                            title="Template Preview"
                          />
                        </div>
                    </div>
                    {/* <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 text-[8px] text-gray-400 font-sans tracking-widest uppercase">MONITOR</div> */}
                  </div>
                  <div className="w-10 h-6 bg-gradient-to-b from-gray-700 to-gray-800 z-0"></div>
                  <div className="w-40 h-3 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-lg shadow-xl border-b-2 border-gray-500 z-0"></div>
                </div>

                <div className="flex flex-col items-center gap-3 shrink-0">
                <span className={`text-xs font-bold tracking-widest transition-colors ${!isAutoScroll ? 'text-gray-900' : 'text-gray-400'}`}>OFF</span>
                
                <button 
                  onClick={() => setIsAutoScroll(!isAutoScroll)}
                  className="relative w-12 h-24 rounded-md bg-[#2a2a2a] border-[3px] border-[#111] shadow-[inset_0_4px_10px_rgba(0,0,0,0.8)] p-1 flex flex-col cursor-pointer outline-none overflow-hidden"
                >
                  <div className={`w-full h-[40px] rounded-sm transition-transform duration-300 ease-in-out absolute left-0 right-1 flex items-center justify-center shadow-lg ${
                    isAutoScroll 
                      ? "translate-y-[40px] bg-gradient-to-b from-red-500 to-[#bf161d] border-b-2 border-red-800" 
                      : "translate-y-0 bg-gradient-to-b from-gray-300 to-gray-500 border-b-2 border-gray-600"
                  }`}>
                    <span className={`text-[11px] font-bold ${isAutoScroll ? 'text-white' : 'text-gray-800'}`}>{isAutoScroll ? 'I' : 'O'}</span>
                  </div>
                </button>

                <span className={`text-xs font-bold tracking-widest transition-colors ${isAutoScroll ? 'text-[#bf161d]' : 'text-gray-400'}`}>ON</span>
              </div>

              </div>
            </div>
            
            <div className="px-8 py-2 bg-white border-t border-gray-200 flex justify-between items-center">
               <span className="text-gray-500 text-sm font-medium">Liked this design?</span>
               <button onClick={() => setIsPreviewOpen(false)} className="px-8 py-2.5 bg-[#bf161d] text-white font-bold rounded-xl hover:bg-[#a01218] transition-all shadow-md text-sm">Select & Continue</button>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #bf161d; }
        
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}}/>
    </div>
  );
}