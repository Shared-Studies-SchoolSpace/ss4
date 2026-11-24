import React from "react";
import Image from "next/image";
import { ChevronRightIcon } from "./icons";

export function HeroBanner() {
  return (
    <section
      className="relative w-full py-5 sm:py-8"
      aria-label="Main Feature: LYCEON"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <div className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-clip bg-[linear-gradient(135deg,#EDF3FC_0%,#FFFFFF_52%,#FFF4EA_100%)] shadow-[0_8px_32px_rgba(17,17,17,0.06),0_0_0_1px_rgba(17,17,17,0.04)]">
          <div className="min-h-[460px] lg:min-h-[520px] flex flex-col-reverse lg:flex-row items-center justify-between p-6 sm:p-10 lg:p-14 xl:p-16 gap-8 lg:gap-12">
            {/* Left Copy Column (Bottom on mobile) */}
            <div className="w-full lg:w-[48%] max-w-[560px] z-10 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <Image
                  src="/images/lyceon-wordmark.svg"
                  alt="LYCEON"
                  width={132}
                  height={26}
                  priority
                  className="h-[26px] w-auto object-contain"
                />
                <span className="font-space text-[12px] font-bold uppercase tracking-[0.08em] text-[#B84D00]">
                  SAS + SLM · One Platform
                </span>
              </div>

              <h1 className="font-space text-[34px] sm:text-[44px] lg:text-[52px] font-black tracking-tight text-[#111111] leading-[1.06]">
                Learn it. Then prove it.
              </h1>

              <p className="font-avenir text-[16px] sm:text-[17px] text-[#3B3F46] leading-relaxed">
                LYCEON unites the SS4 Assessment Series (SAS) and the SS4 Language Model (SLM) in
                one arena—combining spaced-repetition language mastery with WAEC/JAMB sciences and
                tech certifications through live server-authoritative 1v1 duels.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://lyceon.ssfour.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="varsity-btn-primary px-6 py-3 text-[15px] min-h-[48px]"
                >
                  <span>Explore LYCEON</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </a>

                <a
                  href="#ecosystem-cards"
                  className="varsity-btn-secondary px-5 py-3 text-[15px] min-h-[48px]"
                >
                  <span>Explore the Ecosystem</span>
                </a>
              </div>
            </div>

            {/* Right Visual Showcase (Top on mobile) */}
            <div className="w-full lg:w-[52%] flex items-center justify-center">
              <div className="relative w-full max-w-[580px] py-6 px-4 sm:aspect-[16/11] sm:p-7 rounded-[20px] sm:rounded-[24px] bg-[radial-gradient(circle_at_35%_30%,rgba(26,86,196,0.14),transparent_55%),radial-gradient(circle_at_75%_75%,rgba(243,112,33,0.16),transparent_55%),linear-gradient(145deg,#F7FAFF_0%,#FFFFFF_55%,#FFF8F2_100%)] flex items-center justify-center shadow-[inset_0_0_0_1px_rgba(17,17,17,0.05)]">
                {/* Floating Ecosystem Tiles illustrating Languages + Sciences/Assessments inside LYCEON */}
                <div
                  aria-hidden="true"
                  className="hidden sm:flex items-center gap-2.5 absolute top-4 left-4 bg-white/95 rounded-2xl px-3.5 py-2.5 shadow-[0_8px_24px_rgba(17,17,17,0.08)]"
                >
                  <span className="w-8 h-8 rounded-xl bg-[#FFF2E6] text-[#B84D00] font-hanzi font-black text-base flex items-center justify-center">
                    汉
                  </span>
                  <div className="leading-tight">
                    <div className="font-space text-[12px] font-bold text-[#111111]">6 Languages</div>
                    <div className="text-[11px] text-[#64748B]">HSK · JLPT · Yorùbá</div>
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="hidden sm:flex items-center gap-2.5 absolute top-5 right-4 bg-white/95 rounded-2xl px-3.5 py-2.5 shadow-[0_8px_24px_rgba(17,17,17,0.08)]"
                >
                  <span className="w-8 h-8 rounded-xl bg-[#E8EFFF] text-[#1A56C4] font-space font-black text-xs flex items-center justify-center">
                    E=mc²
                  </span>
                  <div className="leading-tight">
                    <div className="font-space text-[12px] font-bold text-[#111111]">STEM &amp; Certs</div>
                    <div className="text-[11px] text-[#64748B]">Physics · Tech+</div>
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="hidden sm:flex items-center gap-2.5 absolute bottom-4 left-5 bg-white/95 rounded-2xl px-3.5 py-2.5 shadow-[0_8px_24px_rgba(17,17,17,0.08)]"
                >
                  <Image
                    src="/images/lyceon-mark.svg"
                    alt=""
                    width={28}
                    height={28}
                    priority
                    className="rounded-lg"
                  />
                  <div className="leading-tight">
                    <div className="font-space text-[12px] font-bold text-[#111111]">Glicko-2</div>
                    <div className="text-[11px] text-[#64748B]">Mastery &amp; Arena</div>
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="hidden sm:flex items-center gap-2 absolute bottom-5 right-5 bg-[#0B193C] text-white rounded-2xl px-3.5 py-2.5 shadow-[0_8px_24px_rgba(11,25,60,0.22)]"
                >
                  <span className="font-space text-[12px] font-bold">Speed 3s</span>
                  <span className="text-white/40">·</span>
                  <span className="font-space text-[12px] font-bold text-[#F7995F]">Long 90s</span>
                </div>

                {/* Central LYCEON Duel Studio Card */}
                <div
                  aria-hidden="true"
                  className="relative z-10 w-full max-w-[300px] sm:max-w-[320px] bg-white rounded-2xl shadow-[0_16px_44px_rgba(17,17,17,0.12),0_0_0_1px_rgba(17,17,17,0.05)] overflow-clip"
                >
                  <div className="grid grid-cols-3 items-center px-4 py-2.5 bg-[#FAF8F4] text-center">
                    <div className="text-left">
                      <div className="text-[10px] font-semibold uppercase text-[#64748B]">You</div>
                      <div className="font-space text-[17px] font-black text-[#111111]">240</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold text-[#64748B]">Round 4/10</div>
                      <div className="font-space text-[14px] font-black text-[#B84D00]">0:06</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-semibold uppercase text-[#64748B]">Rival</div>
                      <div className="font-space text-[17px] font-black text-[#1A56C4]">220</div>
                    </div>
                  </div>

                  <div className="px-4 py-4 text-center space-y-3">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                      Translate
                    </div>
                    <div>
                      <div className="font-hanzi text-[34px] sm:text-[40px] font-bold leading-none text-[#111111]">
                        谢谢
                      </div>
                      <div className="text-[12px] font-medium text-[#64748B] mt-1">xiè xie</div>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 text-left text-[11px] font-semibold">
                      <div className="rounded-lg bg-[#E8F5EE] text-[#0F6E3D] px-2.5 py-2">
                        Thank you
                      </div>
                      <div className="rounded-lg bg-[#F4F3EF] text-[#555555] px-2.5 py-2">
                        Goodbye
                      </div>
                    </div>
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-[#F37021] via-[#1A56C4] to-[#0B193C]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
