import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "./icons";

export function MidPromoBanner() {
  return (
    <section className="w-full py-8 sm:py-12" aria-label="OneNote promotion">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <div className="relative w-full rounded-[28px] sm:rounded-[32px] overflow-hidden min-h-[460px] lg:min-h-[500px] flex items-center bg-white border border-[#EAEAEA] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          
          {/* Subtle Varsity top border accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1A56C4] to-[#B84D00] z-20" />

          {/* Background Graphic Asset */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/asset-7.webp"
              alt="OneNote on a tablet device"
              fill
              className="object-cover object-right"
              sizes="100vw"
            />
            {/* Smooth gradient scrim for high readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 sm:via-white/80 to-transparent lg:max-w-[55%]" />
          </div>

          {/* Foreground Content Card in SS4 Varsity Typography */}
          <div className="relative z-10 p-8 sm:p-14 lg:p-18 max-w-[540px] space-y-4">
            <div className="varsity-badge-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B84D00]" />
              <span>NOTEBOOK ARCHITECTURE</span>
            </div>

            <h2 className="font-space text-[28px] sm:text-[38px] lg:text-[44px] font-black text-[#111111] leading-[1.1] tracking-tight">
              Organise your world with OneNote
            </h2>

            <p className="font-avenir text-[16px] sm:text-[17px] text-[#444444] leading-relaxed">
              Capture your thoughts, discoveries, game plans and ideas in your very own versatile digital notebook.
            </p>

            <div className="pt-2">
              <Link href="#" className="varsity-btn-primary">
                <span>Learn more about OneNote</span>
                <ChevronRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
