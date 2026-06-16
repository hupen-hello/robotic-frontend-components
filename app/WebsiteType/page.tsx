"use client";

import React, { useState } from "react";

export default function WebsiteType() {
  const [selectedCategory, setSelectedCategory] = useState("business");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      id: "business",
      title: "Business",
      desc: "Corporate, company or organization",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
    },
    {
      id: "portfolio",
      title: "Portfolio",
      desc: "Showcase your work and projects",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      ),
    },
    {
      id: "ecommerce",
      title: "Ecommerce",
      desc: "Sell products online",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
    },
    {
      id: "blog",
      title: "Blog",
      desc: "Share your ideas and stories",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
        </svg>
      ),
    },
    {
      id: "landing",
      title: "Landing Page",
      desc: "Promote a product or service",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      ),
    },
    {
      id: "other",
      title: "Other",
      desc: "Something else",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
      ),
    },
  ];

  const popularTypes = ["Realestate", "Education", "Hospitals", "Fashion", "Games", "Financial"];

  return (
    <div className="flex flex-col h-screen w-full bg-[#fcfafb] font-sans overflow-hidden relative">
      
      {/* Background Textures */}
      <img src="/texture-left.png" alt="Background Left Texture" className="absolute left-0 top-1/2 -translate-y-1/2 h-[75%] max-h-[800px] object-contain opacity-80 pointer-events-none z-0" />
      <img src="/texture-right.png" alt="Background Right Texture" className="absolute right-0 top-1/2 -translate-y-1/2 h-[75%] max-h-[800px] object-contain opacity-80 pointer-events-none z-0" />

      {/* 1. FIXED TOP HEADER */}
      <header className="px-8 py-5 bg-white border-b border-gray-200 flex items-center gap-4 shrink-0 shadow-sm z-20">
        <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
          3
        </div>
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">
          Choose Your Website Type
        </h1>
      </header>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 w-full overflow-y-auto flex flex-col p-4 md:p-8 z-10">
        
        {/* THE MAIN CARD */}
        <div className="m-auto bg-white/95 backdrop-blur-sm w-full max-w-5xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-6 md:p-10 shrink-0 relative z-10">
          
          {/* Stepper Timeline */}
          <div className="w-full max-w-2xl mx-auto mb-10 relative z-10">
            <div className="absolute top-4 left-[10%] right-[10%] h-[2px] bg-gray-200 -z-10"></div>
            <div className="flex justify-between items-start text-sm font-medium text-gray-400">
              
              {/* Step 1 - Completed (Black) */}
              <div className="flex flex-col items-center gap-2 text-gray-900 w-20">
                <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-md">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="font-bold text-xs whitespace-nowrap text-gray-900">Business Info</span>
              </div>
              
              {/* Step 2 - Active (Red) */}
              <div className="flex flex-col items-center gap-2 text-red-600 w-20">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md shadow-red-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="font-bold text-xs whitespace-nowrap">Type</span>
              </div>
              
              {/* Step 3 - Upcoming */}
              <div className="flex flex-col items-center gap-2 w-20">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 text-gray-400 flex items-center justify-center"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div>
                <span className="text-xs">Goals</span>
              </div>

              {/* Step 4 - Upcoming */}
              <div className="flex flex-col items-center gap-2 w-20">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 text-gray-400 flex items-center justify-center"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div>
                <span className="text-xs">Details</span>
              </div>

              {/* Step 5 - Upcoming */}
              <div className="flex flex-col items-center gap-2 w-20">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 text-gray-400 flex items-center justify-center"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div>
                <span className="text-xs">Contact</span>
              </div>
            </div>
          </div>

          {/* Titles */}
          <div className="text-center mb-10 relative z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">What type of website do you need?</h2>
            <p className="text-gray-500 text-sm md:text-base">Choose the option that best describes your goal.</p>
          </div>

          {/* Form Content Flex Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10">
            
            {/* Left Side: Search & Category Grid */}
            <div className="flex-1 flex flex-col space-y-6">
              
              {/* Search Category Input */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-900">Search Category</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search for a category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:bg-white transition-all text-sm"
                  />
                </div>
              </div>

              {/* 3x2 Grid Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`relative p-5 rounded-2xl border-2 flex flex-col items-start text-left transition-all duration-200 ${
                      selectedCategory === cat.id
                        ? "border-red-500 bg-red-50/30 text-red-600 shadow-[0_0_15px_rgba(220,38,38,0.1)]"
                        : "border-gray-100 hover:border-gray-300 bg-white"
                    }`}
                  >
                    {/* Icon Box */}
                    <div className={`w-10 h-10 mb-3 rounded-xl flex items-center justify-center transition-colors ${
                      selectedCategory === cat.id ? "bg-red-600 text-white shadow-md" : "bg-gray-100 text-gray-600"
                    }`}>
                      {cat.icon}
                    </div>

                    <span className="text-sm font-bold text-gray-900">{cat.title}</span>
                    <span className="text-xs text-gray-500 mt-1 leading-relaxed">{cat.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side: Popular Types Sidebar */}
            <div className="w-full lg:w-64 shrink-0 flex flex-col gap-3">
              <label className="text-sm font-bold text-gray-900 pb-1">Popular Types</label>
              <div className="bg-gray-50 rounded-3xl p-6 md:p-8 flex flex-col gap-5 border border-gray-100">
                {popularTypes.map((type, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(type.toLowerCase())} // Optional: makes it clickable
                    className="text-left font-semibold text-gray-700 hover:text-red-600 transition-colors text-sm"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* 3. FIXED BOTTOM FOOTER */}
      <footer className="px-8 py-5 bg-white border-t border-gray-200 flex justify-between items-center shrink-0 shadow-[0_-4px_10px_rgba(0,0,0,0.02)] z-20 w-full">
        <button 
          type="button" 
          className="px-6 md:px-8 py-2.5 md:py-3 border border-gray-200 bg-white text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-sm text-sm"
        >
          Back
        </button>
        
        <button 
          type="button" 
          className="px-6 md:px-8 py-2.5 md:py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-red-600/30 text-sm"
        >
          Continue 
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
      </footer>

    </div>
  );
}