"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Compass,
  Trophy,
  BookOpen,
  Handshake,
  Menu,
  X,
  User,
} from "lucide-react";
import { SS4Logo } from "./icons";
import { NAV_ITEMS, EcosystemComponentId } from "@/data/ecosystem";

interface HeaderNavProps {
  activeComponent?: EcosystemComponentId;
  onSelectComponent?: (id: EcosystemComponentId) => void;
}

const NAV_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  lyceon: Compass,
  scl: Trophy,
  hanzina: BookOpen,
  partners: Handshake,
};

export function HeaderNav({ activeComponent = "lyceon", onSelectComponent }: HeaderNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleBtnRef.current?.focus();
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [menuOpen]);

  const handleNavClick = (
    item: (typeof NAV_ITEMS)[number],
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    setMenuOpen(false);
    if (!item.isExternal && item.componentId && onSelectComponent) {
      event.preventDefault();
      onSelectComponent(item.componentId);
      const target = document.getElementById("ecosystem-showcase");
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-[150] w-full px-3 sm:px-6 flex justify-center pointer-events-none">
        <nav
          ref={navRef}
          className="relative w-full max-w-[calc(100vw-1.5rem)] lg:max-w-[860px] pointer-events-auto"
          aria-label="Main Navigation"
        >
          <div
            className={`flex items-center justify-between gap-3 sm:gap-4 backdrop-blur-md transition-all duration-300 ease-out motion-reduce:transition-none ${
              isScrolled
                ? "rounded-full bg-white/95 shadow-[0_14px_32px_-10px_rgba(17,17,17,0.16)] px-4 sm:px-5 py-2 translate-y-1"
                : "rounded-[22px] bg-white/95 shadow-[0_8px_24px_-8px_rgba(17,17,17,0.1)] px-4 sm:px-6 py-2.5 sm:py-3 translate-y-0"
            }`}
          >
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center shrink-0 rounded-lg"
              aria-current="page"
            >
              <SS4Logo />
            </Link>

            {/* Single semantic navigation tree: inline bar on lg+, floating popover menu on < lg */}
            <ul
              id="site-menu"
              className={`${
                menuOpen
                  ? "flex flex-col absolute top-[calc(100%+0.5rem)] inset-x-0 bg-white/98 backdrop-blur-md rounded-2xl p-3 shadow-[0_16px_40px_rgba(17,17,17,0.16)]"
                  : "hidden"
              } lg:static lg:flex lg:flex-row lg:items-center lg:gap-1 lg:p-1 lg:bg-[#F0EEEA] lg:rounded-full lg:shadow-none list-none m-0`}
            >
              {NAV_ITEMS.map((item) => {
                const Icon = NAV_ICONS[item.id] ?? Compass;
                const isActive = item.componentId ? activeComponent === item.componentId : false;
                const isPartners = item.id === "partners";

                return (
                  <li key={item.id} className="w-full lg:w-auto">
                    <a
                      href={item.href}
                      target={item.isExternal ? "_blank" : undefined}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                      onClick={(e) => handleNavClick(item, e)}
                      className={`w-full lg:w-auto flex items-center gap-2.5 lg:gap-1.5 px-4 lg:px-3.5 py-3 lg:py-1.5 rounded-xl lg:rounded-full text-[13px] lg:text-xs font-bold tracking-wide transition-colors duration-150 whitespace-nowrap ${
                        isPartners
                          ? "text-[#B84D00] hover:bg-[#FFEEDB] lg:hover:bg-white/80"
                          : isActive
                          ? "bg-[#1A56C4] text-white shadow-sm"
                          : "text-[#333333] hover:text-[#111111] hover:bg-[#F0EEEA] lg:hover:bg-white/80"
                      }`}
                    >
                      <Icon
                        size={15}
                        className={
                          isPartners
                            ? "text-[#B84D00]"
                            : isActive
                            ? "text-white"
                            : "text-[#64748B]"
                        }
                      />
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href="https://scl.ssfour.org/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-[#1A56C4] hover:bg-[#1545A2] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-colors whitespace-nowrap min-h-[38px]"
              >
                <User className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Sign in</span>
              </a>

              <button
                ref={toggleBtnRef}
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-controls="site-menu"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                className="lg:hidden p-2.5 rounded-full hover:bg-[#F0EEEA] text-[#111111] transition-colors cursor-pointer min-w-[42px] min-h-[42px] flex items-center justify-center"
              >
                {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div className="h-20 sm:h-24" aria-hidden="true" />
    </>
  );
}
