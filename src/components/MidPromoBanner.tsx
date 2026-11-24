import React from "react";
import Image from "next/image";
import { ChevronRightIcon } from "./icons";

export function MidPromoBanner() {
  return (
    <section id="about" className="w-full py-8 sm:py-12" aria-label="SS4 Ecosystem overview">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <div className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-clip bg-white shadow-[0_6px_28px_rgba(17,17,17,0.06)] lg:min-h-[480px] flex flex-col lg:flex-row lg:items-center">
          <div className="relative w-full aspect-[16/10] lg:aspect-auto lg:absolute lg:inset-0 z-0">
            <Image
              src="/images/bglg.png"
              alt="Students collaborating on a tablet in the SS4 academic network"
              fill
              className="object-cover object-center lg:object-right"
              sizes="100vw"
            />
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-white/92 to-transparent max-w-[64%]" />
          </div>

          <div className="relative z-10 p-6 sm:p-10 lg:p-16 max-w-[590px] space-y-4">
            <p className="font-space text-[12px] font-bold uppercase tracking-[0.08em] text-[#B84D00]">
              Shared Study School Space
            </p>

            <h2 className="font-space text-[28px] sm:text-[38px] lg:text-[44px] font-black text-[#111111] leading-[1.08] tracking-tight">
              Many Institutions, One Space.
            </h2>

            <p className="font-avenir text-[16px] sm:text-[17px] text-[#3B3F46] leading-relaxed">
              SS4 unites Nigerian secondary schools, tertiary institutions, academic departments, and
              contenders across LYCEON (combining SAS assessments and SLM language duels), SS4 Chess
              League, and HanziNA—supported by institutional partners and sponsors.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://scl.ssfour.org/partners"
                target="_blank"
                rel="noopener noreferrer"
                className="varsity-btn-primary"
              >
                <span>Become an SS4 Partner</span>
                <ChevronRightIcon className="w-4 h-4" />
              </a>
              <a
                href="https://scl.ssfour.org/news"
                target="_blank"
                rel="noopener noreferrer"
                className="varsity-btn-secondary"
              >
                <span>Explore SS4 News</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
