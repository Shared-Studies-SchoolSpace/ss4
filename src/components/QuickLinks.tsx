import React from "react";

const QUICK_LINKS = [
  {
    label: "theBOARDGAMES Hub",
    href: "https://scl.ssfour.org/theboardgames",
    icon: (
      <svg className="w-7 h-7 text-[#1A56C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm-2 4h4M8 21h8a2 2 0 002-2v-1.5a2.5 2.5 0 00-2.5-2.5h-7A2.5 2.5 0 004 17.5V19a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Varsity Championship",
    href: "https://scl.ssfour.org/chess-league/varsity",
    icon: (
      <svg className="w-7 h-7 text-[#1A56C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Tertiary Institutions",
    href: "https://scl.ssfour.org/tertiary",
    icon: (
      <svg className="w-7 h-7 text-[#1A56C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
  },
  {
    label: "Partner With SS4",
    href: "https://scl.ssfour.org/partners",
    icon: (
      <svg className="w-7 h-7 text-[#1A56C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.684A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
];

export function QuickLinks() {
  return (
    <section className="w-full py-6" aria-label="Quick SS4 links">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {QUICK_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-6 bg-white rounded-[22px] shadow-[0_2px_12px_rgba(17,17,17,0.04)] hover:shadow-[0_10px_28px_rgba(17,17,17,0.08)] transition-shadow duration-200 text-center"
            >
              <div className="p-3.5 bg-[#FAF8F4] group-hover:bg-[#E8EFFF] rounded-[18px] transition-colors mb-3">
                {item.icon}
              </div>

              <span className="font-space text-[14px] sm:text-[15px] font-bold text-[#111111] group-hover:text-[#1A56C4] transition-colors leading-snug">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
