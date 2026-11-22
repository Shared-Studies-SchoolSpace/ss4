import React from "react";
import Link from "next/link";
import { SS4Logo } from "./icons";

const PRIMARY_LINKS = [
  { label: "About SS4", href: "https://scl.ssfour.org/about" },
  { label: "theBOARDGAMES", href: "https://scl.ssfour.org/theboardgames" },
  { label: "Daily League", href: "https://scl.ssfour.org/theboardgames?tab=daily-league" },
  { label: "Monthly Tournaments", href: "https://scl.ssfour.org/theboardgames?tab=monthly-tournament" },
  { label: "Varsity Championship", href: "https://scl.ssfour.org/chess-league/varsity" },
  { label: "Universities", href: "https://scl.ssfour.org/tertiary" },
  { label: "News", href: "https://scl.ssfour.org/news" },
  { label: "Partners", href: "https://scl.ssfour.org/partners" },
  { label: "Lyceon", href: "https://slm.ssfour.org" },
  { label: "Contact SS4", href: "mailto:ss4.mail.org@gmail.com" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#EBE9E4] text-[#555555] pt-14 pb-10 mt-12">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12 space-y-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <Link href="/" className="inline-flex items-center">
            <SS4Logo />
          </Link>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 font-avenir text-[14px]">
            {PRIMARY_LINKS.map((link) => (
              <li key={link.label}>
                {link.href.startsWith("http") ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#555555] hover:text-[#1A56C4] hover:underline transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    href={link.href}
                    className="font-semibold text-[#555555] hover:text-[#1A56C4] hover:underline transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

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
