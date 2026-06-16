"use client";

import React, { useState } from "react";

export default function AboutBusiness() {
  const [selectedType, setSelectedType] = useState("clients");
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const getFormDetails = () => {
    switch (selectedType) {
      case "clients":
        return {
          nameLabel: "Client Name",
          namePlaceholder: "Enter client name",
          descLabel: "Client Description",
          descPlaceholder: "Tell us about your client...",
        };
      case "myself":
        return {
          nameLabel: "Your Full Name",
          namePlaceholder: "Enter your full name",
          descLabel: "Professional Bio",
          descPlaceholder: "Tell us about your skills and experience...",
        };
      case "company":
      default:
        return {
          nameLabel: "Business Name",
          namePlaceholder: "Enter your business name",
          descLabel: "Business Description",
          descPlaceholder: "Tell us what your business does...",
        };
    }
  };

  const { nameLabel, namePlaceholder, descLabel, descPlaceholder } = getFormDetails();

  return (
    <div className="flex flex-col h-screen w-full bg-gray-50 font-sans overflow-hidden">
      
      {/* FIXED TOP HEADER */}
      <header className="px-8 py-5 bg-white border-b border-gray-200 flex items-center gap-4 shrink-0 shadow-sm z-20">
        <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
          2
        </div>
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">
          Tell Us About Your Business
        </h1>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 w-full overflow-y-auto flex flex-col p-4 md:p-8">
        <div className="m-auto bg-white w-full max-w-5xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-6 md:p-10 shrink-0 relative z-0">
          
          <div className="w-full max-w-2xl mx-auto mb-10 relative z-10">
            <div className="absolute top-4 left-[10%] right-[10%] h-[2px] bg-gray-200 -z-10"></div>
            <div className="flex justify-between items-start text-sm font-medium text-gray-400">
              <div className="flex flex-col items-center gap-2 text-red-600 w-20">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md shadow-red-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="font-bold text-xs whitespace-nowrap">Business Info</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-20">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 text-gray-400 flex items-center justify-center font-bold">?</div>
                <span className="text-xs">Type</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-20">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 text-gray-400 flex items-center justify-center"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div>
                <span className="text-xs">Goals</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-20">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 text-gray-400 flex items-center justify-center"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div>
                <span className="text-xs">Details</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-20">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 text-gray-400 flex items-center justify-center"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div>
                <span className="text-xs">Contact</span>
              </div>
            </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Let's start with your business</h2>
            <p className="text-gray-500 text-sm md:text-base">This helps us create a website that fits your needs.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
              <img 
                src="/your-local-image-name.png" 
                alt="Business Illustration" 
                className="w-full max-w-[280px] object-contain drop-shadow-xl" 
              />
            </div>

            <div className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8">
              
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                
                <button 
                  type="button" 
                  onClick={() => { setSelectedType("clients"); setName(""); setDescription(""); }} 
                  className={`relative p-4 md:p-5 rounded-2xl border-2 flex flex-col items-center justify-center transition-all duration-200 ${selectedType === "clients" ? "border-red-500 bg-red-50 text-red-600 shadow-[0_0_15px_rgba(220,38,38,0.1)]" : "border-gray-100 hover:border-gray-300 bg-white"}`}
                >
                  {selectedType === "clients" && (<div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center border-2 border-white shadow-sm"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg></div>)}
                  
                  {selectedType === "clients" ? (
                    <div className="w-8 h-8 md:w-10 md:h-10 mb-2 md:mb-3 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-md">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                  ) : (
                    <svg className="w-7 h-7 md:w-8 md:h-8 mb-2 md:mb-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  )}
                  <span className="text-xs md:text-sm font-bold text-gray-900">Clients</span>
                  <span className="text-[10px] md:text-xs text-gray-500 mt-1">(Agency)</span>
                </button>

                <button 
                  type="button" 
                  onClick={() => { setSelectedType("myself"); setName(""); setDescription(""); }} 
                  className={`relative p-4 md:p-5 rounded-2xl border-2 flex flex-col items-center justify-center transition-all duration-200 ${selectedType === "myself" ? "border-red-500 bg-red-50 text-red-600 shadow-[0_0_15px_rgba(220,38,38,0.1)]" : "border-gray-100 hover:border-gray-300 bg-white"}`}
                >
                  {selectedType === "myself" && (<div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center border-2 border-white shadow-sm"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg></div>)}
                  
                  {selectedType === "myself" ? (
                    <div className="w-8 h-8 md:w-10 md:h-10 mb-2 md:mb-3 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-md">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </div>
                  ) : (
                    <svg className="w-7 h-7 md:w-8 md:h-8 mb-2 md:mb-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  )}
                  <span className="text-xs md:text-sm font-bold text-gray-900">Myself</span>
                  <span className="text-[10px] md:text-xs text-gray-500 mt-1">(Individual)</span>
                </button>

                <button 
                  type="button" 
                  onClick={() => { setSelectedType("company"); setName(""); setDescription(""); }} 
                  className={`relative p-4 md:p-5 rounded-2xl border-2 flex flex-col items-center justify-center transition-all duration-200 ${selectedType === "company" ? "border-red-600 bg-gradient-to-b from-white to-red-50 shadow-[0_0_20px_rgba(220,38,38,0.15)]" : "border-gray-100 hover:border-gray-300 bg-white"}`}
                >
                  {selectedType === "company" && (<div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center border-2 border-white shadow-sm"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg></div>)}
                  
                  {selectedType === "company" ? (
                    <div className="w-8 h-8 md:w-10 md:h-10 mb-2 md:mb-3 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-md">
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                  ) : (
                     <svg className="w-7 h-7 md:w-8 md:h-8 mb-2 md:mb-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  )}
                  <span className="text-xs md:text-sm font-bold text-gray-900">My Company</span>
                  <span className="text-[10px] md:text-xs text-gray-500 mt-1">(Business)</span>
                </button>
              </div>

              <div className="space-y-4 md:space-y-5">
                <div className="flex flex-col gap-1.5 md:gap-2">
                  <label className="text-sm font-bold text-gray-900">{nameLabel}</label>
                  <input
                    type="text"
                    placeholder={namePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all shadow-sm text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1.5 md:gap-2">
                  <label className="text-sm font-bold text-gray-900">{descLabel}</label>
                  <div className="relative">
                    <textarea
                      rows={3}
                      maxLength={300}
                      placeholder={descPlaceholder}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all shadow-sm resize-none text-sm"
                    />
                    <span className="absolute bottom-3 right-4 text-xs font-medium text-gray-400">
                      {description.length}/300
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* FIXED BOTTOM FOOTER */}
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