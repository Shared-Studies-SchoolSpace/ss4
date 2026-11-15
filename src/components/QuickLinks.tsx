import React from "react";
import Image from "next/image";
import Link from "next/link";

const QUICK_LINKS = [
  {
    label: "Find Secondary Schools",
    tag: "36 STATES + FCT",
    iconSrc: "/images/why-icon-1.svg",
    iconAlt: "Secondary schools search icon",
    href: "#schools",
  },
  {
    label: "Colleges & Universities",
    tag: "TERTIARY PROGRAMS",
    iconSrc: "/images/why-icon-2.svg",
    iconAlt: "Tertiary programs icon",
    href: "#colleges",
  },
  {
    label: "Direct Admissions",
    tag: "NO APPLICATION FEE",
    iconSrc: "/images/why-icon-3.svg",
    iconAlt: "Direct admissions icon",
    href: "#admissions",
  },
  {
    label: "Institutional Onboarding",
    tag: "PARTNER CODE SS4-PRT",
    iconSrc: "/images/stamp-claim.svg",
    iconAlt: "Institutional partner onboarding stamp",
    href: "#partners",
  },
];

export function QuickLinks() {
  return (
    <section className="w-full py-6" aria-label="Quick institutional links">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {QUICK_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex flex-col items-center justify-between p-6 bg-white border border-[#EAEAEA] rounded-[22px] shadow-[0_2px_8px_rgba(0,0,0,0.015)] hover:border-[#1A56C4] hover:shadow-[0_6px_20px_rgba(26,86,196,0.07)] hover:-translate-y-1 transition-all duration-200 text-center"
            >
              {/* Top Category Badge */}
              <span className="font-space text-[10px] font-bold text-[#64748B] tracking-wider uppercase mb-3">
                {item.tag}
              </span>

              {/* Icon Container with subtle background */}
              <div className="p-3.5 bg-[#FAF8F4] group-hover:bg-[#E8EFFF] rounded-[18px] transition-colors mb-3">
                <div className="relative w-9 h-9 transition-transform duration-200 group-hover:scale-110">
                  <Image
                    src={item.iconSrc}
                    alt={item.iconAlt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Label */}
              <span className="font-space text-[14px] sm:text-[15px] font-bold text-[#111111] group-hover:text-[#1A56C4] transition-colors leading-snug">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
