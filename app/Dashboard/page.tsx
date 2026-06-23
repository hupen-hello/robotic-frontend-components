"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function TemplateEditorDashboard() {
  const [activeNav, setActiveNav] = useState("dashboard");

  // Reusable Style Picker Tooltip (Hover on Website Sections)
  const StylePicker = ({ title }: { title: string }) => (
    <div className="absolute top-4 right-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-gray-100 p-4 flex flex-col gap-3 scale-95 group-hover:scale-100 origin-top-right">
      <div className="text-xs font-black text-gray-800 uppercase tracking-wider border-b border-gray-100 pb-2 mb-1">
        Change {title}
      </div>
      <div className="flex gap-3">
        {/* Style 1 (Active) */}
        <div className="flex flex-col items-center gap-1.5 cursor-pointer group/style">
          <div className="w-16 h-12 bg-gray-50 border-2 border-[#bf161d] rounded-lg shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[#bf161d]/10"></div>
            <div className="absolute top-2 left-0 w-full h-2 bg-[#bf161d]/20"></div>
          </div>
          <span className="text-[10px] font-bold text-[#bf161d]">Style 1</span>
        </div>
        {/* Style 2 */}
        <div className="flex flex-col items-center gap-1.5 cursor-pointer group/style">
          <div className="w-16 h-12 bg-white border-2 border-gray-200 hover:border-gray-400 rounded-lg shadow-sm relative overflow-hidden transition-colors">
             <div className="absolute top-2 left-2 w-4 h-2 bg-gray-300 rounded"></div>
             <div className="absolute top-2 right-2 w-6 h-2 bg-gray-200 rounded"></div>
          </div>
          <span className="text-[10px] font-bold text-gray-500 group-hover/style:text-gray-800">Style 2</span>
        </div>
        {/* Style 3 */}
        <div className="flex flex-col items-center gap-1.5 cursor-pointer group/style">
          <div className="w-16 h-12 bg-white border-2 border-gray-200 hover:border-gray-400 rounded-lg shadow-sm relative overflow-hidden transition-colors">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-2 bg-gray-300 rounded"></div>
          </div>
          <span className="text-[10px] font-bold text-gray-500 group-hover/style:text-gray-800">Style 3</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen w-full bg-[#f4f7fe] font-sans overflow-hidden">
      
      {/* ============================================================== */}
      {/* 1. STATIC DASHBOARD SIDEBAR (No Hover Tooltip Here)            */}
      {/* ============================================================== */}
      <aside className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-6 gap-6 shrink-0 z-30 shadow-sm">
        
        {/* Logo */}
        <Link href="/" className="w-10 h-10 bg-[#bf161d] rounded-xl flex items-center justify-center shadow-lg shadow-[#bf161d]/30 mb-4 hover:scale-105 transition-transform">
          <div className="flex gap-1 items-end h-5">
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-5 bg-white rounded-full"></div>
            <div className="w-1 h-4 bg-white rounded-full"></div>
          </div>
        </Link>

        {/* Nav Items */}
        <div className="flex flex-col gap-3 w-full px-3">
          {[
            { id: 'dashboard', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path> },
            { id: 'edit', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path> },
            { id: 'pages', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path> },
            { id: 'settings', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path> },
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
      </aside>

      {/* ============================================================== */}
      {/* MAIN RIGHT CONTENT                                               */}
      {/* ============================================================== */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* 2. STATIC DASHBOARD NAVBAR (No Hover Tooltip Here) */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 z-20 shadow-sm">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-black text-gray-800">Website Customizer</h1>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Auto-saving</span>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-gray-100 text-gray-700 font-bold text-sm rounded-lg hover:bg-gray-200 transition-colors">Preview</button>
            <button className="px-6 py-2 bg-[#bf161d] text-white font-bold text-sm rounded-lg hover:bg-[#a01218] transition-colors shadow-md shadow-[#bf161d]/20">Publish</button>
          </div>
        </header>

        {/* ============================================================== */}
        {/* 3. WEBSITE BUILDER CANVAS (Here sections are hoverable)        */}
        {/* ============================================================== */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#eef1f9] custom-scrollbar flex justify-center">
          
          {/* Virtual Website Container (Looks like a page) */}
          <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col min-h-full border border-gray-200">
            
            {/* ----------------------------------------------------- */}
            {/* TEMPLATE SECTION 1: WEBSITE NAVBAR (HOVERABLE)        */}
            {/* ----------------------------------------------------- */}
            <div className="relative group border-b-2 border-transparent hover:border-[#bf161d] transition-colors duration-300">
              
              {/* Dummy Website Navbar UI */}
              <nav className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8">
                <div className="text-2xl font-black tracking-tighter text-gray-900">YOUR<span className="text-[#bf161d]">LOGO</span></div>
                <div className="hidden md:flex gap-6 text-sm font-bold text-gray-600">
                  <span className="text-[#bf161d]">Home</span>
                  <span className="hover:text-gray-900 cursor-pointer">About Us</span>
                  <span className="hover:text-gray-900 cursor-pointer">Services</span>
                  <span className="hover:text-gray-900 cursor-pointer">Contact</span>
                </div>
                <button className="px-5 py-2.5 bg-gray-900 text-white text-xs font-bold rounded-full">Get Quote</button>
              </nav>

              {/* Hover Highlight & Tooltip specifically for Website Navbar */}
              <div className="absolute inset-0 bg-[#bf161d]/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
              <StylePicker title="Navbar Design" />
            </div>

            {/* ----------------------------------------------------- */}
            {/* TEMPLATE SECTION 2: HERO SECTION (HOVERABLE)          */}
            {/* ----------------------------------------------------- */}
            <div className="relative group border-b-2 border-transparent hover:border-[#bf161d] transition-colors duration-300">
              
              {/* Dummy Website Hero UI */}
              <section className="py-20 px-8 bg-gray-50 flex flex-col items-center text-center">
                <span className="text-[#bf161d] font-bold text-sm tracking-widest uppercase mb-3">Welcome to the future</span>
                <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 max-w-3xl leading-tight">
                  Build Your Dream Website <br/> With Perfect Design.
                </h1>
                <p className="text-gray-500 mb-8 max-w-xl">
                  This is a sample hero section of the template. Hover over this section to see the magic of changing its layout instantly.
                </p>
                <div className="flex gap-4">
                  <button className="px-8 py-3.5 bg-[#bf161d] text-white font-bold rounded-full shadow-lg">Start Now</button>
                  <button className="px-8 py-3.5 bg-white text-gray-900 font-bold border border-gray-200 rounded-full shadow-sm">Learn More</button>
                </div>
              </section>

              {/* Hover Highlight & Tooltip specifically for Hero Section */}
              <div className="absolute inset-0 bg-[#bf161d]/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
              <StylePicker title="Hero Section" />
            </div>

            {/* ----------------------------------------------------- */}
            {/* TEMPLATE SECTION 3: ABOUT / FEATURES (HOVERABLE)      */}
            {/* ----------------------------------------------------- */}
            <div className="relative group border-b-2 border-transparent hover:border-[#bf161d] transition-colors duration-300 flex-1">
              
              {/* Dummy Website About UI */}
              <section className="py-16 px-8 bg-white grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="w-12 h-12 bg-[#bf161d]/10 text-[#bf161d] rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <h3 className="text-lg font-black text-gray-900 mb-2">Premium Feature {item}</h3>
                    <p className="text-sm text-gray-500">Customize this section easily using the style picker that appears when you hover here.</p>
                  </div>
                ))}
              </section>

              {/* Hover Highlight & Tooltip specifically for About Section */}
              <div className="absolute inset-0 bg-[#bf161d]/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
              <StylePicker title="Features Section" />
            </div>

          </div>
        </div>
      </main>

      {/* Global CSS for Custom Scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #bf161d; }
      `}}/>
    </div>
  );
}