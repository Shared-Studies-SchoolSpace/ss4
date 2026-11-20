import React from "react";
import Link from "next/link";
import { SS4Logo } from "./icons";

const PRIMARY_LINKS = [
  { label: "About SS4", href: "#" },
  { label: "theBOARDGAMES", href: "#" },
  { label: "Daily League", href: "#" },
  { label: "Monthly Tournaments", href: "#" },
  { label: "Varsity Championship", href: "#" },
  { label: "Universities", href: "#" },
  { label: "Partners", href: "#partners" },
  { label: "Contact SS4", href: "mailto:ss4.mail.org@gmail.com" },
];

const CHESS_LEAGUE_LINKS = [
  { label: "theBOARDGAMES Championship", href: "#" },
  { label: "Daily League Arenas", href: "#" },
  { label: "Monthly Tournaments", href: "#" },
  { label: "Varsity Championship", href: "#" },
  { label: "Tertiary Institutions", href: "#" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#EBE9E4] text-[#555555] pt-14 pb-10 mt-12 border-t border-[#EAEAEA]">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12 space-y-10">
        {/* Top Row: SS4 Brand & Primary Links */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-[#DDD9D0]">
          <Link href="/" className="inline-flex items-center">
            <SS4Logo />
          </Link>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 font-avenir text-[14px]">
            {PRIMARY_LINKS.map((link) => (
              <li key={link.label}>
                {link.href.startsWith("mailto:") ? (
                  <a
                    href={link.href}
                    className="font-semibold text-[#555555] hover:text-[#1A56C4] hover:underline transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="font-semibold text-[#555555] hover:text-[#1A56C4] hover:underline transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* SS4 Chess League Section */}
        <div className="space-y-3 pb-8 border-b border-[#DDD9D0]">
          <h3 className="font-space font-bold text-[#111111] text-[12px] uppercase tracking-wider">
            SS4 Chess League
          </h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-avenir text-[13px]">
            {CHESS_LEAGUE_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover:text-[#1A56C4] hover:underline transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-avenir text-[13px] text-[#64748B]">
          <a
            href="mailto:ss4.mail.org@gmail.com"
            className="hover:text-[#1A56C4] hover:underline transition-colors"
          >
            ss4.mail.org@gmail.com
          </a>

          <span className="font-space font-bold text-[#111111]">
            © 2026 SS4 Inc.
          </span>
        </div>
      </div>
    </footer>
  );
}
