"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MicrosoftLogo,
  SearchIcon,
  CartIcon,
  UserIcon,
  ChevronDownIcon,
} from "./icons";

const NAV_LINKS = [
  { label: "Microsoft 365", href: "#" },
  { label: "Teams", href: "#" },
  { label: "Copilot", href: "#" },
  { label: "Windows", href: "#" },
  { label: "Surface", href: "#" },
  { label: "Xbox", href: "#" },
  { label: "Support", href: "#" },
];

const ALL_MICROSOFT_CATEGORIES = [
  {
    category: "Software",
    items: ["Windows Apps", "AI & Copilot", "OneDrive", "Outlook", "OneNote", "Microsoft Teams"],
  },
  {
    category: "PCs & Devices",
    items: ["Shop Surface", "Computers", "Accessories", "Xbox & Games"],
  },
  {
    category: "Entertainment",
    items: ["Xbox Game Pass Ultimate", "Xbox Live Gold", "Xbox games", "PC games"],
  },
  {
    category: "Business",
    items: ["Microsoft Cloud", "Microsoft Security", "Azure", "Dynamics 365", "Microsoft 365 for business"],
  },
  {
    category: "Developer & IT",
    items: ["Microsoft Developer", "Documentation", "Microsoft Learn", "Visual Studio"],
  },
];

export function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [allMsOpen, setAllMsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#EAEAEA] transition-all">
      <div className="mx-auto flex h-[64px] max-w-[1600px] items-center justify-between px-4 sm:px-8 lg:px-12 text-[14px] text-[#111111]">
        
        {/* Left: Mobile Toggle & Logo */}
        <div className="flex items-center gap-4 lg:gap-8">
          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#111111] hover:bg-[#F0EEEA] rounded-xl transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2">
              {mobileMenuOpen ? (
                <path d="M4 4L16 16M4 16L16 4" strokeLinecap="round" />
              ) : (
                <path d="M3 5H17M3 10H17M3 15H17" strokeLinecap="round" />
              )}
            </svg>
          </button>

          {/* Microsoft Brand Logo with Varsity styling */}
          <Link href="/" className="flex items-center outline-none focus-visible:ring-2 focus-visible:ring-[#1A56C4] rounded-lg">
            <MicrosoftLogo />
          </Link>

          {/* Desktop Primary Nav */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-[14px] font-semibold text-[#111111] hover:text-[#1A56C4] hover:bg-[#1A56C4]/5 rounded-xl transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Actions: All Microsoft, Search, Cart, Sign In */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* All Microsoft Mega-menu trigger */}
          <div className="relative hidden xl:block">
            <button
              onClick={() => {
                setAllMsOpen(!allMsOpen);
                setSearchOpen(false);
              }}
              className="flex items-center gap-2 px-3.5 py-2 text-[14px] font-semibold text-[#111111] hover:text-[#1A56C4] hover:bg-[#1A56C4]/5 rounded-xl transition-all focus:outline-none"
            >
              <span>All Microsoft</span>
              <ChevronDownIcon className={`w-3 h-3 text-[#1A56C4] transition-transform duration-200 ${allMsOpen ? "rotate-180" : ""}`} />
            </button>

            {/* SS4 Varsity Mega Menu Dropdown */}
            {allMsOpen && (
              <div className="absolute right-0 top-[60px] w-[940px] bg-white border border-[#EAEAEA] rounded-[24px] shadow-[0_12px_36px_rgba(0,0,0,0.08)] p-8 grid grid-cols-5 gap-6 z-50 text-[13px]">
                {ALL_MICROSOFT_CATEGORIES.map((cat) => (
                  <div key={cat.category} className="space-y-3">
                    <h4 className="font-space font-bold text-[14px] text-[#111111] uppercase tracking-wider pb-1 border-b border-[#F0EEEA]">
                      {cat.category}
                    </h4>
                    <ul className="space-y-2 text-[#64748B]">
                      {cat.items.map((item) => (
                        <li key={item}>
                          <Link href="#" className="hover:text-[#1A56C4] hover:font-semibold transition-colors block py-0.5">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="col-span-5 border-t border-[#EAEAEA] pt-4 mt-2 flex items-center justify-between">
                  <span className="text-xs text-[#64748B]">SS4 Varsity Navigation Grid</span>
                  <Link href="#" className="text-[13px] font-space font-bold text-[#1A56C4] hover:text-[#B84D00] hover:underline flex items-center gap-1">
                    VIEW SITEMAP &gt;
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Search Toggle / Varsity Outlined Input */}
          <div className="relative">
            {searchOpen ? (
              <div className="flex items-center bg-white border-2 border-[#1A56C4] rounded-[16px] px-3 py-1 shadow-sm">
                <input
                  type="text"
                  placeholder="Search products, services, apps..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-48 sm:w-64 text-[13px] outline-none text-[#111111] font-avenir"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-neutral-400 hover:text-black ml-2 text-xs font-bold"
                  aria-label="Close search"
                >
                  ✕
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setSearchOpen(true);
                  setAllMsOpen(false);
                }}
                className="flex items-center gap-1.5 px-3 py-2 text-[14px] font-semibold text-[#111111] hover:text-[#1A56C4] hover:bg-[#1A56C4]/5 rounded-xl transition-all"
                aria-label="Search Microsoft.com"
              >
                <span className="hidden sm:inline">Search</span>
                <SearchIcon className="w-4 h-4 text-[#111111]" />
              </button>
            )}
          </div>

          {/* Cart Icon */}
          <Link
            href="#"
            className="flex items-center gap-1.5 px-3 py-2 text-[14px] font-semibold text-[#111111] hover:text-[#1A56C4] hover:bg-[#1A56C4]/5 rounded-xl transition-all"
            aria-label="0 items in shopping cart"
          >
            <span className="hidden sm:inline">Cart</span>
            <CartIcon className="w-4 h-4 text-[#111111]" />
          </Link>

          {/* Sign In CTA - SS4 Outlined Pill */}
          <Link
            href="#"
            className="flex items-center gap-1.5 px-4 py-2 border border-[#CCCCCC] hover:border-[#1A56C4] hover:text-[#1A56C4] bg-white rounded-full text-[13px] font-bold text-[#111111] transition-all shadow-xs"
            aria-label="Sign in to your account"
          >
            <UserIcon className="w-4 h-4 text-[#1A56C4]" />
            <span className="hidden sm:inline">Sign in</span>
          </Link>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EAEAEA] bg-white px-6 py-6 space-y-4 shadow-lg animate-slide-in">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-[15px] font-semibold text-[#111111] border-b border-[#F0EEEA] hover:text-[#1A56C4] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 font-space font-bold text-[14px] text-[#1A56C4]">
              ALL MICROSOFT
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
