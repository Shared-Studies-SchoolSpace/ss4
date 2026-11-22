"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Trophy, School, Menu, X, User } from "lucide-react";
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
      <nav
        className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-[150] w-full px-3 sm:px-4 flex flex-col items-center pointer-events-none"
        aria-label="Main Navigation"
      >
        <div
          className={`flex items-center justify-between w-full max-w-[calc(100vw-1.5rem)] pointer-events-auto gap-4 backdrop-blur-md transition-all duration-300 ease-out ${
            isScrolled
              ? "lg:max-w-[500px] rounded-full bg-white/95 shadow-[0_14px_32px_-10px_rgba(17,17,17,0.14)] px-4 py-2 translate-y-1.5"
              : "lg:max-w-[720px] rounded-[24px] bg-white/95 shadow-[0_8px_24px_-8px_rgba(17,17,17,0.1)] px-5 py-3 translate-y-0"
          }`}
        >
          <Link
            href="/"
            onClick={() => {
              setMenuOpen(false);
              setActiveTab("scl");
            }}
            className="flex items-center shrink-0 rounded-lg"
          >
            <SS4Logo />
          </Link>

          {!isScrolled && (
            <div className="hidden lg:flex items-center gap-1 p-1 bg-[#F0EEEA] rounded-full shrink-0">
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
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wide transition-colors duration-200 whitespace-nowrap ${
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

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://scl.ssfour.org/partners"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-3.5 py-2 rounded-full bg-[#FFEEDB] text-[#B84D00] text-xs font-black uppercase tracking-wider hover:bg-[#FFE2C2] transition-colors whitespace-nowrap"
            >
              Partner With Us
            </a>

            <a
              href="https://scl.ssfour.org/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-[#1A56C4] hover:bg-[#1545A2] text-white text-xs font-black uppercase tracking-wider shadow-sm transition-colors whitespace-nowrap"
            >
              <User className="w-3.5 h-3.5" />
              <span>Sign in</span>
            </a>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden p-2 rounded-full hover:bg-[#F0EEEA] text-[#111111] transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden mt-2 w-full max-w-[calc(100vw-1.5rem)] sm:max-w-md bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl pointer-events-auto">
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
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-colors mb-1 ${
                    isActive
                      ? "bg-[#1A56C4] text-white"
                      : "text-gray-700 hover:text-[#111111] hover:bg-[#F0EEEA]"
                  }`}
                >
                  <Icon size={16} />
                  <span>{link.label}</span>
                </a>
              );
            })}

            <div className="pt-2 mt-1">
              <a
                href="https://scl.ssfour.org/partners"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-left px-4 py-2.5 text-xs font-bold text-[#B84D00] hover:text-[#1A56C4] uppercase"
              >
                Partner With Us
              </a>
            </div>
          </div>
        )}
      </nav>

      <div className="h-20 sm:h-24" />
    </>
  );
}
