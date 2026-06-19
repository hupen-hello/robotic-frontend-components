"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";

export default function ChooseTemplate() {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(1);
  const [visibleCount, setVisibleCount] = useState(6);
  const [pageType, setPageType] = useState("all");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [previewData, setPreviewData] = useState<any>(null);
  const [showIframe, setShowIframe] = useState(false);
  
  const [isAutoScroll, setIsAutoScroll] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const screenRef = useRef<HTMLDivElement>(null);

  const templates = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    title: `Premium Template ${i + 1}`,
    url: "https://html.themehour.net/piller/demo/home-2.html",
    type: i % 2 === 0 ? "single" : "multiple",
  }));

  const filteredTemplates = useMemo(() => {
    return templates.filter((tmpl) => {
      return pageType === "all" || tmpl.type === pageType;
    });
  }, [pageType, templates]);

  // const handleSeeMore = () => {
  //   setVisibleCount((prev) => prev + 3);
  // };

  const openPreview = (tmpl: any) => {
    setSelectedTemplate(tmpl.id);
    setPreviewData(tmpl);
    setIsPreviewOpen(true);
    setIsAutoScroll(false);
    setIsHovering(false);
    setShowIframe(false);
  };

  const closePreview = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsPreviewOpen(false);
      setIsAnimatingOut(false);
    }, 450);   
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

  useEffect(() => {
    if (isPreviewOpen && !isAnimatingOut) {
      const timer = setTimeout(() => setShowIframe(true), 800);
      return () => clearTimeout(timer);
    }
  }, [isPreviewOpen, isAnimatingOut]);

  useEffect(() => {
    let animationFrameId: number;
    const autoScroll = () => {
      if (screenRef.current && isAutoScroll && isPreviewOpen && !isHovering) {
        screenRef.current.scrollTop += 5.5;
        if (
          screenRef.current.scrollTop >=
          screenRef.current.scrollHeight - screenRef.current.clientHeight
        ) {
          screenRef.current.scrollTop = 0;
        }
        animationFrameId = requestAnimationFrame(autoScroll);
      }
    };

    if (isAutoScroll && isPreviewOpen && !isHovering && showIframe) {
      animationFrameId = requestAnimationFrame(autoScroll);
    }
    return () => cancelAnimationFrame(animationFrameId);
  }, [isAutoScroll, isPreviewOpen, isHovering, showIframe]);

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#fcfafb] font-sans overflow-x-hidden relative">
      <img src="/texture-left.png" alt="Texture" className="absolute left-0 top-1/2 -translate-y-1/2 h-[85%] max-h-[900px] object-contain opacity-80 pointer-events-none z-0 scale-110 fixed" />
      <img src="/texture-right.png" alt="Texture" className="absolute right-0 top-1/2 -translate-y-1/2 h-[85%] max-h-[900px] object-contain opacity-80 pointer-events-none z-0 scale-110 fixed" />

      <header className="px-8 py-3 md:py-4 bg-white border-b border-gray-200 flex items-center gap-4 shrink-0 shadow-sm z-20 sticky top-0">
        <div className="w-8 h-8 rounded-full bg-[#bf161d] text-white flex items-center justify-center font-bold text-lg shadow-md">3</div>
        <h1 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight">Choose Your Website Template</h1>
      </header>

      <main className="flex-1 w-full p-4 md:p-8 z-10 flex flex-col items-center relative">
        <div className="w-full max-w-7xl bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col relative z-10 mb-8 p-6 md:p-8">
          
          <div className="shrink-0">
            <div className="w-full max-w-2xl mx-auto mb-8 flex items-center justify-center relative">
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

            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1.5 tracking-tight">Choose a design you love</h2>
              <p className="text-gray-500 text-sm">We've created these websites for you. You can customize anything later.</p>
            </div>

            <div className="flex justify-end mb-6">
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

          <div className="w-full pb-6">
            {filteredTemplates.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
                {filteredTemplates.slice(0, visibleCount).map((tmpl) => (
                  <div
                    key={tmpl.id}
                    onClick={() => openPreview(tmpl)}
                    className={`bg-white rounded-3xl p-3 cursor-pointer transition-all duration-300 border-2 group ${
                      selectedTemplate === tmpl.id
                        ? "border-[#bf161d] shadow-[0_8px_25px_rgba(191,22,29,0.15)] scale-[1.02]"
                        : "border-gray-100 shadow-sm hover:border-[#bf161d]/40 hover:shadow-xl"
                    }`}
                  >
                    
                    <div className="w-full h-56 md:h-64 rounded-2xl relative overflow-hidden bg-gray-50 border border-gray-100">
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
                        <div className="w-full h-full bg-gradient-to-br from-[#1c2237] to-[#121626] flex flex-col items-center justify-center text-white p-4">
                          <svg className="w-10 h-10 opacity-30 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                          <span className="text-sm font-bold opacity-50 tracking-widest uppercase">PREVIEW {tmpl.id}</span>
                        </div>
                      )}

                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/30 transition-colors z-10 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#bf161d] px-5 py-2 rounded-full font-bold shadow-lg text-sm transform translate-y-4 group-hover:translate-y-0">
                          Preview Design
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mt-4 mb-2 px-2">
                      <div className={`w-6 h-6 shrink-0 rounded-full flex items-center justify-center transition-colors ${selectedTemplate === tmpl.id ? "bg-[#bf161d] text-white" : "bg-gray-200 text-gray-400 group-hover:bg-[#bf161d]/20 group-hover:text-[#bf161d]"}`}>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span className="text-base font-bold text-gray-900 truncate">{tmpl.title}</span>
                      <span className={`ml-auto text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md ${tmpl.type === "single" ? "text-[#3f31ff] bg-[#3f31ff]/10" : "text-[#bf161d] bg-[#bf161d]/10"}`}>
                        {tmpl.type === "single" ? "SINGLE" : "MULTI"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full h-64 flex flex-col items-center justify-center bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl">
                <span className="text-gray-400 font-bold text-lg mb-2">No templates found</span>
                <button onClick={() => setPageType("all")} className="text-[#bf161d] font-semibold hover:underline">Clear Filters</button>
              </div>
            )}

            {/* {visibleCount < filteredTemplates.length && (
              <div className="flex justify-center mt-12 mb-4">
                <button onClick={handleSeeMore} className="px-10 py-3.5 bg-white border-2 border-gray-200 hover:border-[#bf161d] text-gray-800 hover:text-[#bf161d] font-bold rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2 text-sm">
                  Load More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                </button>
              </div>
            )} */}
          </div>
        </div>
      </main>

 
      <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-500 ${isPreviewOpen || isAnimatingOut ? 'visible' : 'invisible'}`}>
        
        <div 
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-500 ${isAnimatingOut ? 'opacity-0' : 'opacity-100'}`} 
          onClick={closePreview}
        ></div>
        
        <div className={`bg-[#f4f7fe] w-full h-[100vh] shadow-2xl relative flex flex-col overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isAnimatingOut || !isPreviewOpen ? 'translate-y-full' : 'translate-y-0'}`}>

          <img src="/texture-left.png" alt="Texture" className="absolute left-0 top-1/2 -translate-y-1/2 h-[85%] max-h-[900px] object-contain opacity-80 pointer-events-none z-0 scale-110 fixed" />
      <img src="/texture-right.png" alt="Texture" className="absolute right-0 top-1/2 -translate-y-1/2 h-[85%] max-h-[900px] object-contain opacity-80 pointer-events-none z-0 scale-110 fixed" />

          <div className="flex justify-between items-center px-6 md:px-10 py-2  shrink-0">
            <div className="flex items-center gap-4">
              <h2 className="text-xl md:text-2xl font-black text-gray-900">{previewData?.title || 'Template'}</h2>
              <span className="hidden md:flex bg-blue-100 text-[#3f31ff] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                {previewData?.type === "single" ? "Single Page" : "Multiple Pages"}
              </span>
            </div>
            
            <button 
              onClick={closePreview} 
              className="w-10 h-10 bg-white shadow-sm hover:shadow-md border border-gray-100 hover:bg-gray-100 text-gray-600 rounded-full flex items-center justify-center transition-all cursor-pointer z-50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <div className="flex-1 w-full overflow-y-auto px-2 md:px-10 pb-2 pt-2 flex flex-col lg:flex-row gap-10 custom-scrollbar">
            
            <div className="flex-1 flex flex-col items-center justify-center">
              
              <div className="w-full max-w-2xl relative drop-shadow-2xl">
                <div className="bg-[#111111] border-[10px] md:border-[16px] border-[#111111] rounded-[1.5rem] md:rounded-[2rem] w-full aspect-[16/10] relative shadow-inner flex flex-col">
                  <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-600 rounded-full z-20"></div>
                  
                  <div 
                    ref={screenRef}
                    className="flex-1 w-full bg-white relative overflow-y-auto overflow-x-hidden rounded-md md:rounded-lg custom-scrollbar"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)} 
                  >
                    {!showIframe ? (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 text-gray-400">
                         <div className="w-8 h-8 border-4 border-gray-200 border-t-[#3f31ff] rounded-full animate-spin mb-3"></div>
                         <span className="font-bold tracking-widest text-xs">LOADING...</span>
                      </div>
                    ) : (
                      <div style={{ width: '1440px', height: '4000px', transform: 'scale(0.60)', transformOrigin: 'top left' }} className="md:scale-[0.70] lg:scale-[0.60] xl:scale-[0.75]">
                        <iframe 
                          src={previewData?.url} 
                          className="w-full h-full border-none pointer-events-auto"
                          scrolling="no"
                          title="Template Preview"
                        />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="w-[110%] -ml-[5%] h-3 md:h-4 bg-[#111111] rounded-b-[1rem] border-t border-gray-700 shadow-xl flex justify-center">
                   <div className="w-1/4 h-1 md:h-1.5 bg-gray-700 rounded-b-md"></div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-sm">
                <span className="font-bold text-lg text-gray-900 tracking-wide">Scroll</span>
                <button 
                  onClick={() => setIsAutoScroll(!isAutoScroll)}
                  className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 shadow-inner cursor-pointer ${isAutoScroll ? 'bg-[#3f31ff]' : 'bg-gray-200'}`}
                >
                  <div className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${isAutoScroll ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </button>
              </div>

            </div>

            <div className="relative w-full lg:w-[430px] bg-white rounded-[2rem] p-4 shadow-[0_15px_50px_rgba(0,0,0,0.04)] h-fit shrink-0">
              <h3 className="text-xl text-center font-black text-gray-900 mb-3">{previewData?.title || 'Template Name'}</h3>
              <p className="text-gray-500 font-medium leading-relaxed mb-6">
                A modern and professional template designed to help you build a stunning online presence quickly and easily.
              </p>
              
              <hr className="border-gray-100 mb-6" />
              
              <h4 className="font-extrabold text-lg text-gray-900 mb-5">What's included:</h4>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3f31ff] text-white flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-gray-700 font-bold text-sm">Responsive Design</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3f31ff] text-white flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-gray-700 font-bold text-sm">Modern & Clean Layout</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3f31ff] text-white flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-gray-700 font-bold text-sm">SEO Optimized</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3f31ff] text-white flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-gray-700 font-bold text-sm">Easy to Customize</span>
                </li>
              </ul>

              <button className="w-full py-4 bg-[#3f31ff] text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-[0_8px_20px_rgba(63,49,255,0.3)] hover:-translate-y-1">
                Use This Template &rarr;
              </button>
            </div>

          </div>
        </div>
      </div>

      <footer className="px-8 py-4 bg-white border-t border-gray-200 flex justify-between items-center shrink-0 shadow-[0_-4px_10px_rgba(0,0,0,0.02)] z-20 w-full">
        <Link 
          href="/DemoTemplates" 
          className="px-6 md:px-8 py-2.5 md:py-3 border border-gray-200 bg-white text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-sm text-sm cursor-pointer flex items-center justify-center"
        >
          Back
        </Link>
        
        
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #bf161d; }
      `}}/>
    </div>
  );
}