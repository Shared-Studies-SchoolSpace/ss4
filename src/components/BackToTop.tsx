"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "./icons";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={scrollToTop}
        className={`flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-[#FAF8F4] text-[#111111] hover:text-[#1A56C4] rounded-full shadow-[0_6px_20px_rgba(17,17,17,0.12)] font-space text-[13px] font-bold transition-all duration-300 cursor-pointer ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUpIcon className="w-4 h-4 text-[#1A56C4]" />
        <span className="hidden sm:inline">Back to top</span>
      </button>
    </div>
  );
}
