"use client";

import React, { useState } from "react";
import StylePicker from "./StylePicker"; // StylePicker को यहाँ इम्पोर्ट किया है

export default function Sidebar() {
  const [activeNav, setActiveNav] = useState("dashboard");

  return (
    <aside className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-6 gap-6 shrink-0 relative group z-30">
      
      {/* Logo */}
      <div className="w-10 h-10 bg-[#bf161d] rounded-xl flex items-center justify-center shadow-lg shadow-[#bf161d]/30 mb-4 cursor-pointer hover:scale-105 transition-transform">
        <div className="flex gap-1 items-end h-5">
          <div className="w-1 h-3 bg-white rounded-full"></div>
          <div className="w-1 h-5 bg-white rounded-full"></div>
          <div className="w-1 h-4 bg-white rounded-full"></div>
        </div>
      </div>

      {/* More icon */}
      <div className="text-gray-300 mb-2">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8a2 2 0 100-4 2 2 0 000 4zm0 6a2 2 0 100-4 2 2 0 000 4zm0 6a2 2 0 100-4 2 2 0 000 4z"></path></svg>
      </div>

      {/* Nav Items */}
      <div className="flex flex-col gap-3 w-full px-3">
        {[
          { id: 'dashboard', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path> },
          { id: 'users', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> },
          { id: 'cart', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path> },
          { id: 'calendar', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> },
          { id: 'profile', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> },
          { id: 'files', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path> },
          { id: 'list', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path> },
          { id: 'calculator', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path> },
        ].map((item) => (
          <div 
            key={item.id}
            onClick={() => setActiveNav(item.id)}
            className={`w-full aspect-square rounded-xl flex items-center justify-center cursor-pointer transition-all ${
              activeNav === item.id ? 'bg-[#bf161d]/10 text-[#bf161d]' : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {item.icon}
            </svg>
          </div>
        ))}
      </div>

      {/* HOVER TOOLTIP FOR SIDEBAR */}
      <StylePicker title="Sidebar" />
      
      {/* Hover Highlight Overlay */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#bf161d] rounded-r-xl pointer-events-none transition-colors z-40 bg-[#bf161d]/5 opacity-0 group-hover:opacity-100"></div>
    </aside>
  );
}