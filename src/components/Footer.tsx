import React from "react";
import Link from "next/link";
import { GlobeIcon, PrivacyChoicesIcon } from "./icons";

const FOOTER_SECTIONS = [
  {
    title: "Secondary Schools",
    links: [
      { label: "Lagos State Directory", href: "#schools" },
      { label: "Abuja FCT Schools", href: "#schools" },
      { label: "Rivers State Directory", href: "#schools" },
      { label: "Kaduna State Schools", href: "#schools" },
      { label: "Ogun State Schools", href: "#schools" },
      { label: "Browse 36 States + FCT", href: "#schools" },
    ],
  },
  {
    title: "Tertiary Institutions",
    links: [
      { label: "Federal Universities", href: "#colleges" },
      { label: "State Universities", href: "#colleges" },
      { label: "Private Universities", href: "#colleges" },
      { label: "Polytechnics & Institutes", href: "#colleges" },
      { label: "Colleges of Education", href: "#colleges" },
      { label: "Department Rosters", href: "#colleges" },
    ],
  },
  {
    title: "Direct Admissions",
    links: [
      { label: "How Direct Admissions Works", href: "#admissions" },
      { label: "Zero Application Fee Guide", href: "#admissions" },
      { label: "Cutoff Guidance & Criteria", href: "#admissions" },
      { label: "Partner University Offers", href: "#admissions" },
      { label: "Student Verification", href: "#admissions" },
      { label: "Direct Entry Pathways", href: "#admissions" },
    ],
  },
  {
    title: "Institutional Partners",
    links: [
      { label: "Register School (SS4-PRT)", href: "#partners" },
      { label: "Google Sheet Sync Guide", href: "#partners" },
      { label: "Campus Profile Management", href: "#partners" },
      { label: "Department Bios & Anthems", href: "#partners" },
      { label: "Administrator Guidelines", href: "#partners" },
      { label: "Partner Support Desk", href: "#partners" },
    ],
  },
  {
    title: "Academic Search",
    links: [
      { label: "Filter by State & Location", href: "#search" },
      { label: "Compare School Benchmarks", href: "#search" },
      { label: "Student & Parent Reviews", href: "#search" },
      { label: "Academic Shortlist", href: "#search" },
      { label: "Verified Student Stories", href: "#search" },
      { label: "National Academic Index", href: "#search" },
    ],
  },
  {
    title: "About SS4",
    links: [
      { label: "About the Ecosystem", href: "#about" },
      { label: "Many Institutions, One Space", href: "#about" },
      { label: "Trust & Verification", href: "#about" },
      { label: "Platform Announcements", href: "#about" },
      { label: "Contact SS4 Team", href: "#about" },
      { label: "Privacy & Data Policy", href: "#about" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Contact SS4", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Institutional Verification", href: "#" },
  { label: "Data Integrity", href: "#" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#EBE9E4] text-[#555555] pt-14 pb-10 mt-12 border-t border-[#EAEAEA]">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        
        {/* Sitemap Directory Columns in SS4 Varsity Styling */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12">
          {FOOTER_SECTIONS.map((sec) => (
            <div key={sec.title} className="space-y-4">
              <h3 className="font-space font-bold text-[#111111] text-[13px] sm:text-[14px] uppercase tracking-wider">
                {sec.title}
              </h3>
              <ul className="space-y-2.5 font-avenir text-[13px]">
                {sec.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-[#1A56C4] hover:underline transition-colors block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Legal / Locale Bar */}
        <div className="border-t border-[#DDD9D0] pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 font-avenir text-[13px]">
          
          {/* Locale & Privacy choices */}
          <div className="flex flex-wrap items-center gap-4 text-[#555555]">
            <Link
              href="#"
              className="flex items-center gap-2 hover:text-[#1A56C4] transition-colors"
            >
              <GlobeIcon className="w-4 h-4 text-[#1A56C4]" />
              <span className="font-semibold">Nigeria (English)</span>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-1.5 hover:text-[#1A56C4] transition-colors"
            >
              <PrivacyChoicesIcon className="w-6 h-3" />
              <span>Institutional Verification Protocol</span>
            </Link>

            <Link href="#" className="hover:text-[#1A56C4] transition-colors">
              Student Privacy &amp; Records Safety
            </Link>
          </div>

          {/* Legal Links & Copyright */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[#64748B]">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-[#1A56C4] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <span className="font-space font-bold text-[#111111]">
              © 2026 SS4 — An Ecosystem for Academia. All rights reserved.
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
