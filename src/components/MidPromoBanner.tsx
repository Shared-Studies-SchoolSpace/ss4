import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "./icons";

export function MidPromoBanner() {
  return (
    <section id="admissions" className="w-full py-8 sm:py-12" aria-label="SS4 Direct Admissions promotion">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <div className="relative w-full rounded-[28px] sm:rounded-[32px] overflow-hidden min-h-[460px] lg:min-h-[500px] flex items-center bg-white border border-[#EAEAEA] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          
          {/* Subtle Varsity top border accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1A56C4] to-[#B84D00] z-20" />

          {/* Background Graphic Asset */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/bglg.png"
              alt="SS4 Direct Admissions background banner"
              fill
              className="object-cover object-right"
              sizes="100vw"
            />
            {/* Smooth gradient scrim for high readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 sm:via-white/85 to-transparent lg:max-w-[60%]" />
          </div>

          {/* Foreground Content Card in SS4 Varsity Typography */}
          <div className="relative z-10 p-8 sm:p-14 lg:p-18 max-w-[580px] space-y-4">
            <div className="varsity-badge-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B84D00]" />
              <span>DIRECT ADMISSIONS GATEWAY</span>
            </div>

            <h2 className="font-space text-[28px] sm:text-[38px] lg:text-[44px] font-black text-[#111111] leading-[1.1] tracking-tight">
              Get accepted without an application.
            </h2>

            <p className="font-avenir text-[16px] sm:text-[17px] text-[#444444] leading-relaxed">
              No application fee. No endless waiting. Direct Admissions connects qualified students directly with premier Nigerian universities, giving you transparent cutoff requirements and fast-tracked enrollment.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link href="#admissions" className="varsity-btn-primary">
                <span>Explore Direct Admissions</span>
                <ChevronRightIcon className="w-4 h-4" />
              </Link>
              <Link href="#colleges" className="varsity-btn-secondary">
                <span>View Partner Universities</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
