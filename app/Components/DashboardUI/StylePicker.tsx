"use client";
import React from "react";

export default function StylePicker({ title }: { title: string }) {
  return (
    <div className="absolute top-4 right-4 md:-right-4 md:top-1/2 md:-translate-y-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-gray-100 p-4 flex flex-col gap-3 scale-95 group-hover:scale-100 origin-right">
      <div className="text-xs font-black text-gray-800 uppercase tracking-wider border-b border-gray-100 pb-2 mb-1">
        {title} Styles
      </div>
      <div className="flex gap-3">
        {/* Style 1 (Active) */}
        <div className="flex flex-col items-center gap-1.5 cursor-pointer group/style">
          <div className="w-16 h-12 bg-gray-50 border-2 border-[#bf161d] rounded-lg shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[#bf161d]/10"></div>
            <div className="absolute top-1 left-1 w-3 h-1 bg-[#bf161d] rounded-full"></div>
            <div className="absolute top-3 left-1 w-10 h-1 bg-gray-200 rounded-full"></div>
            <div className="absolute top-5 left-1 w-8 h-1 bg-gray-200 rounded-full"></div>
          </div>
          <span className="text-[10px] font-bold text-[#bf161d]">Style 1</span>
        </div>
        {/* Style 2 */}
        <div className="flex flex-col items-center gap-1.5 cursor-pointer group/style">
          <div className="w-16 h-12 bg-white border-2 border-gray-200 group-hover/style:border-gray-400 rounded-lg shadow-sm relative overflow-hidden transition-colors">
             <div className="absolute top-1 right-1 w-3 h-1 bg-gray-300 rounded-full"></div>
             <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 h-6 bg-gray-100 rounded-t-md"></div>
          </div>
          <span className="text-[10px] font-bold text-gray-500 group-hover/style:text-gray-800">Style 2</span>
        </div>
      </div>
    </div>
  );
}