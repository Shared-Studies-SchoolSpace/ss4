"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Trophy,
  School,
  Menu,
  X,
  User,
} from "lucide-react";
import { SS4Logo } from "./icons";

const NAV_LINKS = [
  { id: "scl", label: "SCL", href: "https://scl.ssfour.org", icon: Trophy },
  { id: "lyceon", label: "Lyceon", href: "https://slm.ssfour.org", icon: School },
];

export function HeaderNav() {
  const [activeTab, setActiveTab] = useState("scl");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Centered Morphing Navbar adapted from SAS to SS4 */}
      <nav
        className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-[150] w-full px-3 sm:px-4 flex flex-col items-center pointer-events-none"
        aria-label="Main Navigation"
      >
        <div
          className={`flex items-center justify-between w-full max-w-[calc(100vw-1.5rem)] pointer-events-auto gap-4 backdrop-blur-md border transition-all duration-300 ease-out ${
            isScrolled
              ? "lg:max-w-[500px] rounded-full bg-white/96 border-[#1A56C4]/25 shadow-[0_16px_36px_-12px_rgba(26,86,196,0.15)] px-4 py-2 translate-y-1.5"
              : "lg:max-w-[720px] rounded-[24px] bg-white/92 border-[#CCCCCC]/80 shadow-[0_8px_24px_-10px_rgba(0,0,0,0.08)] px-5 py-3 translate-y-0"
          }`}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => {
              setMenuOpen(false);
              setActiveTab("scl");
            }}
            className="flex items-center shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#1A56C4] rounded-lg"
          >
            <SS4Logo />
          </Link>

          {/* Desktop Nav Links: Inline Pill Segmented Row (Displayed in Full View) */}
          {!isScrolled && (
            <div className="hidden lg:flex items-center gap-1 px-2 py-1 bg-[#F0EEEA] border border-[#CCCCCC] rounded-full shrink-0">
              {NAV_LINKS.map((link) => {
                const isActive = activeTab === link.id;
                const Icon = link.icon;

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveTab(link.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wide transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? "bg-[#1A56C4] text-white shadow-sm"
                        : "text-gray-600 hover:text-[#111111] hover:bg-white/70"
                    }`}
                  >
                    <Icon
                      size={13}
                      className={isActive ? "text-white" : "text-gray-500"}
                    />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          )}

          {/* Right Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <Link
              href="#about"
              className="hidden sm:inline-flex items-center px-3.5 py-2 rounded-full border border-[#B84D00] text-[#B84D00] text-xs font-black uppercase tracking-wider hover:bg-[#B84D00]/5 transition-colors whitespace-nowrap"
            >
              Partner With Us
            </Link>

            <Link
              href="#login"
              className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-[#1A56C4] hover:bg-[#1545A2] text-white text-xs font-black uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
            >
              <User className="w-3.5 h-3.5" />
              <span>Sign in</span>
            </Link>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 text-[#111111] transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Expandable Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-2 w-full max-w-[calc(100vw-1.5rem)] sm:max-w-md bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-gray-200 pointer-events-auto">
            {NAV_LINKS.map((link) => {
              const isActive = activeTab === link.id;
              const Icon = link.icon;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setActiveTab(link.id);
                    setMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all mb-1 ${
                    isActive
                      ? "bg-[#1A56C4] text-white"
                      : "text-gray-700 hover:text-[#111111] hover:bg-gray-100"
                  }`}
                >
                  <Icon size={16} />
                  <span>{link.label}</span>
                </a>
              );
            })}

            <div className="pt-2 mt-1 border-t border-gray-200">
              <Link
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-left px-4 py-2.5 text-xs font-bold text-[#B84D00] hover:text-[#1A56C4] uppercase"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Top spacing placeholder so page content isn't covered by fixed floating navbar */}
      <div className="h-20 sm:h-24" />
    </>
  );
}
