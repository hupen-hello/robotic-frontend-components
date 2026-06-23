"use client";

import React from "react";
import StylePicker from "./StylePicker"; // StylePicker को यहाँ भी इम्पोर्ट किया है

export default function Navbar() {
  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 relative group z-20">
      
      {/* Search & Menu Icon */}
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
        
        <div className="relative w-80">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="text" placeholder="Search or type command..." className="w-full pl-10 pr-12 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#bf161d]/20 focus:border-[#bf161d] transition-all text-sm" />
          <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
            <span className="text-gray-400 text-xs border border-gray-200 rounded px-1.5 py-0.5 bg-white font-mono">⌘K</span>
          </div>
        </div>
      </div>

      {/* Right Actions & Profile */}
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
        </button>
        <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors relative">
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#bf161d] rounded-full border border-white"></span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
        </button>
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1.5 rounded-lg transition-colors border border-transparent hover:border-gray-200">
          <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden border border-gray-300">
            <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-bold text-gray-700 hidden sm:block">Musharof</span>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>

      {/* HOVER TOOLTIP FOR NAVBAR */}
      <StylePicker title="Navbar" />
      
      {/* Hover Highlight Overlay */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#bf161d] pointer-events-none transition-colors z-40 bg-[#bf161d]/5 opacity-0 group-hover:opacity-100"></div>
    </header>
  );
}