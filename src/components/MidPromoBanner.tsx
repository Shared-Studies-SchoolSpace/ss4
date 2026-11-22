import React from "react";
import Image from "next/image";
import { ChevronRightIcon } from "./icons";

export function MidPromoBanner() {
  return (
    <section id="about" className="w-full py-8 sm:py-12" aria-label="SS4 Ecosystem overview">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <div className="relative w-full rounded-[28px] sm:rounded-[32px] overflow-hidden min-h-[460px] lg:min-h-[500px] flex items-center bg-white shadow-[0_4px_24px_rgba(17,17,17,0.05)]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/bglg.png"
              alt="Students in the SS4 network"
              fill
              className="object-cover object-right"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 sm:via-white/85 to-transparent lg:max-w-[60%]" />
          </div>

          <div className="relative z-10 p-8 sm:p-14 lg:p-18 max-w-[580px] space-y-4">
            <h2 className="font-space text-[28px] sm:text-[38px] lg:text-[44px] font-black text-[#111111] leading-[1.1] tracking-tight">
              Many Institutions, One Space.
            </h2>

            <p className="font-avenir text-[16px] sm:text-[17px] text-[#444444] leading-relaxed">
              SS4 connects Nigerian institutions, departments, and collegiate chess contenders into one shared community.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://scl.ssfour.org/news"
                target="_blank"
                rel="noopener noreferrer"
                className="varsity-btn-primary"
              >
                <span>Explore SCL News</span>
                <ChevronRightIcon className="w-4 h-4" />
              </a>
              <a
                href="https://scl.ssfour.org/partners"
                target="_blank"
                rel="noopener noreferrer"
                className="varsity-btn-secondary"
              >
                <span>Become an SS4 Partner</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
