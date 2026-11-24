import React from "react";
import Link from "next/link";
import { SS4Logo } from "./icons";
import { EcosystemComponentId } from "@/data/ecosystem";

interface FooterProps {
  onSelectComponent?: (id: EcosystemComponentId) => void;
}

interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
  componentId?: EcosystemComponentId;
}

const FOOTER_COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "SS4 Ecosystem",
    links: [
      { label: "LYCEON (SAS + SLM)", href: "https://lyceon.ssfour.org", isExternal: true },
      { label: "SS4 Chess League (SCL)", href: "https://scl.ssfour.org", isExternal: true },
      { label: "HanziNA", href: "#ecosystem-showcase", componentId: "hanzina" },
    ],
  },
  {
    title: "Chess & Campuses",
    links: [
      { label: "theBOARDGAMES", href: "https://scl.ssfour.org/theboardgames", isExternal: true },
      {
        label: "Daily League",
        href: "https://scl.ssfour.org/theboardgames?tab=daily-league",
        isExternal: true,
      },
      {
        label: "Monthly Tournaments",
        href: "https://scl.ssfour.org/theboardgames?tab=monthly-tournament",
        isExternal: true,
      },
      {
        label: "Varsity Championship",
        href: "https://scl.ssfour.org/chess-league/varsity",
        isExternal: true,
      },
      { label: "Universities", href: "https://scl.ssfour.org/tertiary", isExternal: true },
    ],
  },
  {
    title: "Partners & SS4",
    links: [
      { label: "Partners", href: "https://scl.ssfour.org/partners", isExternal: true },
      { label: "About SS4", href: "https://scl.ssfour.org/about", isExternal: true },
      { label: "News & Updates", href: "https://scl.ssfour.org/news", isExternal: true },
      { label: "Sign in", href: "https://scl.ssfour.org/dashboard", isExternal: true },
      { label: "Contact SS4", href: "mailto:ss4.mail.org@gmail.com" },
    ],
  },
];

export function Footer({ onSelectComponent }: FooterProps) {
  return (
    <footer className="w-full bg-[#EBE9E4] text-[#555555] pt-14 pb-10 mt-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4 space-y-3">
            <Link href="/" className="inline-flex items-center">
              <SS4Logo />
            </Link>
            <p className="font-avenir text-[14px] text-[#444444] leading-relaxed max-w-[34ch]">
              Shared Study School Space — an academic ecosystem uniting LYCEON (SAS + SLM), SS4
              Chess League, and HanziNA across institutions.
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className="space-y-3">
                <h2 className="font-space text-[13px] font-bold uppercase tracking-wider text-[#111111]">
                  {col.title}
                </h2>
                <ul className="space-y-2.5 list-none p-0 m-0 font-avenir text-[14px]">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.isExternal ? "_blank" : undefined}
                        rel={link.isExternal ? "noopener noreferrer" : undefined}
                        onClick={(e) => {
                          if (!link.isExternal && link.componentId && onSelectComponent) {
                            e.preventDefault();
                            onSelectComponent(link.componentId);
                            document
                              .getElementById("ecosystem-showcase")
                              ?.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }}
                        className="font-medium text-[#444444] hover:text-[#1A56C4] hover:underline transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-[#DCD8CF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-avenir text-[13px] text-[#555555]">
          <a
            href="mailto:ss4.mail.org@gmail.com"
            className="hover:text-[#1A56C4] hover:underline transition-colors"
          >
            ss4.mail.org@gmail.com
          </a>

          <span className="font-space font-bold text-[#111111]">
            © 2026 SS4 Inc. · Many Institutions, One Space.
          </span>
        </div>
      </div>
    </footer>
  );
}
