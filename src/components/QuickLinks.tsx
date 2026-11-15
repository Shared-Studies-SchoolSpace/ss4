import React from "react";
import Link from "next/link";
import { M365Icon, SurfaceIcon, WindowsIcon, XboxIcon } from "./icons";

const QUICK_LINKS = [
  {
    label: "Choose your Microsoft 365",
    tag: "SUITE",
    icon: <M365Icon className="w-9 h-9" />,
    href: "#",
  },
  {
    label: "Shop Surface devices",
    tag: "HARDWARE",
    icon: <SurfaceIcon className="w-9 h-9" />,
    href: "#",
  },
  {
    label: "Buy Windows 11",
    tag: "OPERATING SYSTEM",
    icon: <WindowsIcon className="w-9 h-9" />,
    href: "#",
  },
  {
    label: "Explore Xbox consoles",
    tag: "GAMING",
    icon: <XboxIcon className="w-9 h-9" />,
    href: "#",
  },
];

export function QuickLinks() {
  return (
    <section className="w-full py-6" aria-label="Quick links">
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
                <div className="transition-transform duration-200 group-hover:scale-110">
                  {item.icon}
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
