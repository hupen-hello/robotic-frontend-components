"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ChooseTemplate() {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(1);
  const [visibleCount, setVisibleCount] = useState(15);

  const colors = [
    "from-indigo-900 to-purple-900",
    "from-gray-900 to-black",
    "from-blue-500 to-blue-700",
    "from-emerald-700 to-green-900",
    "from-slate-700 to-gray-900",
    "from-red-800 to-red-900",
    "from-teal-700 to-cyan-900",
  ];

  const router = useRouter();

  const templates = Array.from({ length: 25 }).map((_, i) => ({
    id: i + 1,
    title: `Premium Template ${i + 1}`,
    bg: `bg-gradient-to-br ${colors[i % colors.length]}`,
    link: `/preview`,
  }));

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <div className="flex flex-col h-screen w-full bg-[#fcfafb] font-sans overflow-hidden relative">
      {/* Background Textures */}
      <img
        src="/texture-left.png"
        alt="Texture"
        className="absolute left-0 top-1/2 -translate-y-1/2 h-[75%] max-h-[800px] object-contain opacity-80 pointer-events-none z-0"
      />
      <img
        src="/texture-right.png"
        alt="Texture"
        className="absolute right-0 top-1/2 -translate-y-1/2 h-[75%] max-h-[800px] object-contain opacity-80 pointer-events-none z-0"
      />

      {/* HEADER */}
      <header className="px-8 py-5 bg-white border-b border-gray-200 flex items-center gap-4 shrink-0 shadow-sm z-20">
        <div className="w-8 h-8 rounded-full bg-[#bf161d] text-white flex items-center justify-center font-bold text-lg shadow-md">
          3
        </div>
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">
          Choose Your Website Template
        </h1>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 w-full overflow-y-auto p-4 md:p-8 z-10 custom-scrollbar">
        {/* THE MAIN CARD */}
        <div className="mx-auto mb-10 bg-white/95 backdrop-blur-sm w-full max-w-[95%] xl:max-w-7xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-6 md:p-10 shrink-0 relative z-10 flex flex-col">
          {/* STEPPER */}
          <div className="w-full max-w-lg mx-auto mb-8 relative z-10 shrink-0">
            <div className="absolute top-4 left-[15%] right-[15%] h-[2px] bg-gray-200 -z-10"></div>

            <div className="flex justify-between items-start text-sm font-medium text-gray-400">
              <div className="flex flex-col items-center gap-2 text-gray-900 w-24">
                <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-md">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="font-bold text-xs whitespace-nowrap">
                  Business Info
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 text-gray-900 w-24">
                <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-md">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="font-bold text-xs whitespace-nowrap">
                  Type
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 text-[#bf161d] w-24">
                <div className="w-8 h-8 rounded-full bg-[#bf161d] text-white flex items-center justify-center shadow-md shadow-[#bf161d]/30">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="font-bold text-xs whitespace-nowrap">
                  Template
                </span>
              </div>
            </div>
          </div>

          {/* Titles */}
          <div className="text-center mb-12 relative z-10 shrink-0">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
              Choose a design you love
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              We've created these websites for you. You can customize anything
              later.
            </p>
          </div>

          <div className="w-full px-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {templates.slice(0, visibleCount).map((tmpl) => (
                <div
                  key={tmpl.id}
                  onClick={() => {
                    setSelectedTemplate(tmpl.id);
                    router.push(tmpl.link);
                  }}
                  className={`bg-white rounded-2xl p-3.5 cursor-pointer transition-all duration-300 border-2 ${
                    selectedTemplate === tmpl.id
                      ? "border-[#bf161d] shadow-[0_8px_25px_rgba(191,22,29,0.2)] scale-[1.02]"
                      : "border-gray-100 shadow-sm hover:border-gray-300 hover:shadow-lg hover:-translate-y-1.5"
                  }`}
                >
                  <div
                    className={`w-full h-60 md:h-64 rounded-xl ${tmpl.bg} relative overflow-hidden flex items-center justify-center`}
                  >
                    <span className="text-white/50 font-bold text-xl opacity-50">
                      Preview {tmpl.id}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mt-5 mb-2 px-1">
                    <div
                      className={`w-6 h-6 shrink-0 rounded-full flex items-center justify-center transition-colors ${
                        selectedTemplate === tmpl.id
                          ? "bg-[#bf161d] text-white"
                          : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="4"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-base font-bold text-gray-800 truncate">
                      {tmpl.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {visibleCount < templates.length && (
              <div className="flex justify-center mt-12 mb-4">
                <button
                  onClick={handleSeeMore}
                  className="px-10 py-3.5 bg-white border-2 border-gray-200 hover:border-[#bf161d] text-gray-700 hover:text-[#bf161d] font-bold rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2 text-sm"
                >
                  See More Templates
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="px-8 py-5 bg-white border-t border-gray-200 flex justify-between items-center shrink-0 shadow-[0_-4px_10px_rgba(0,0,0,0.02)] z-20 w-full relative z-30">
        <Link
          href="/WebisteType"
          className="px-6 md:px-8 py-2.5 md:py-3 border border-gray-200 bg-white text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-sm text-sm cursor-pointer flex items-center justify-center"
        >
          Back
        </Link>

        <button
          type="button"
          className="px-6 md:px-8 py-2.5 md:py-3 bg-[#bf161d] hover:bg-[#a01218] text-white font-bold rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-[#bf161d]/30 text-sm cursor-pointer"
        >
          Continue
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </footer>

      {/* Main Page Custom Scrollbar */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #fcfafb; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #d1d5db; 
            border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #bf161d; 
        }
      `,
        }}
      />
    </div>
  );
}
