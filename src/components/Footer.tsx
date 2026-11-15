import React from "react";
import Link from "next/link";
import { GlobeIcon, PrivacyChoicesIcon } from "./icons";

const FOOTER_SECTIONS = [
  {
    title: "What's new",
    links: [
      { label: "Microsoft 365", href: "#" },
      { label: "Games", href: "#" },
      { label: "Surface Pro", href: "#" },
      { label: "Surface Laptop", href: "#" },
      { label: "Microsoft Copilot", href: "#" },
      { label: "Windows 11 apps", href: "#" },
    ],
  },
  {
    title: "Microsoft Store",
    links: [
      { label: "Account profile", href: "#" },
      { label: "Download Center", href: "#" },
      { label: "Microsoft Store Support", href: "#" },
      { label: "Returns", href: "#" },
      { label: "Order tracking", href: "#" },
    ],
  },
  {
    title: "Education",
    links: [
      { label: "Microsoft in education", href: "#" },
      { label: "Devices for education", href: "#" },
      { label: "Microsoft Teams for Education", href: "#" },
      { label: "Microsoft 365 Education", href: "#" },
      { label: "Office Education", href: "#" },
      { label: "Educator training", href: "#" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "Microsoft Cloud", href: "#" },
      { label: "Microsoft Security", href: "#" },
      { label: "Azure", href: "#" },
      { label: "Dynamics 365", href: "#" },
      { label: "Microsoft 365 for business", href: "#" },
      { label: "Copilot for Work", href: "#" },
    ],
  },
  {
    title: "Developer & IT",
    links: [
      { label: "Microsoft Developer", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Microsoft Learn", href: "#" },
      { label: "Microsoft Tech Community", href: "#" },
      { label: "Azure Marketplace", href: "#" },
      { label: "Visual Studio 2026", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Careers", href: "#" },
      { label: "About Microsoft", href: "#" },
      { label: "Company news", href: "#" },
      { label: "Privacy at Microsoft", href: "#" },
      { label: "Investors", href: "#" },
      { label: "Sustainability", href: "#" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Contact Microsoft", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Terms of use", href: "#" },
  { label: "Trademarks", href: "#" },
  { label: "About our ads", href: "#" },
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
              <span className="font-semibold">English (United States)</span>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-1.5 hover:text-[#1A56C4] transition-colors"
            >
              <PrivacyChoicesIcon className="w-6 h-3" />
              <span>Your Privacy Choices</span>
            </Link>

            <Link href="#" className="hover:text-[#1A56C4] transition-colors">
              Consumer Health Privacy
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
            <span className="font-space font-bold text-[#111111]">© Microsoft 2026 (SS4 Redesign)</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
