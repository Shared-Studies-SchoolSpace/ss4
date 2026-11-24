"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronRightIcon } from "./icons";
import { EcosystemComponentId } from "@/data/ecosystem";

interface HeroBannerProps {
  onSelectComponent?: (id: EcosystemComponentId) => void;
}

const SLIDE_META = [
  { id: "lyceon", label: "LYCEON" },
  { id: "scl", label: "SCL" },
  { id: "hanzina", label: "HanziNA" },
] as const;

export function HeroBanner({ onSelectComponent }: HeroBannerProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [statusMessage, setStatusMessage] = useState("");
  const lastSettledRef = useRef(0);
  const pendingTargetRef = useRef<number | null>(null);
  const userInitiatedRef = useRef(false);

  // Respect prefers-reduced-motion for auto-advancing slides
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsPlaying(false);
    }
  }, []);

  const scrollToSlide = useCallback((index: number, userTriggered = true) => {
    const track = trackRef.current;
    if (!track) return;
    const wrappedIndex = ((index % SLIDE_META.length) + SLIDE_META.length) % SLIDE_META.length;
    const slides = track.children;
    const target = slides[wrappedIndex] as HTMLElement | undefined;
    if (!target) return;

    userInitiatedRef.current = userTriggered;
    pendingTargetRef.current = wrappedIndex;
    lastSettledRef.current = wrappedIndex;
    setCurrentSlide(wrappedIndex);
    track.scrollTo({
      left: target.offsetLeft,
    });
  }, []);

  const stepSlide = useCallback(
    (delta: number, userTriggered = true) => {
      const base = pendingTargetRef.current ?? lastSettledRef.current;
      scrollToSlide(base + delta, userTriggered);
    },
    [scrollToSlide]
  );

  // Autoplay interval when playing
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      stepSlide(1, false);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPlaying, stepSlide]);

  // Sync active slide and polite live announcement when scroll settles
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId: number | null = null;
    let fallbackTimer: ReturnType<typeof setTimeout> | null = null;

    const getNearestIndex = () => {
      const width = track.clientWidth || 1;
      return Math.max(0, Math.min(SLIDE_META.length - 1, Math.round(track.scrollLeft / width)));
    };

    const handleSettle = () => {
      const settled = getNearestIndex();
      // Ignore stale settle events while a new target scroll is still in flight
      if (pendingTargetRef.current !== null && settled !== pendingTargetRef.current) {
        return;
      }
      pendingTargetRef.current = null;
      lastSettledRef.current = settled;
      setCurrentSlide(settled);
      if (userInitiatedRef.current) {
        setStatusMessage(`Slide ${settled + 1} of ${SLIDE_META.length}: ${SLIDE_META[settled].label}`);
      }
      userInitiatedRef.current = false;
    };

    const supportsScrollEnd = "onscrollend" in window;

    const handleScroll = () => {
      if (pendingTargetRef.current === null && rafId === null) {
        rafId = requestAnimationFrame(() => {
          rafId = null;
          if (pendingTargetRef.current === null) {
            setCurrentSlide(getNearestIndex());
          }
        });
      }

      if (!supportsScrollEnd) {
        if (fallbackTimer) clearTimeout(fallbackTimer);
        fallbackTimer = setTimeout(handleSettle, 140);
      }
    };

    const handlePointerDown = () => {
      pendingTargetRef.current = null;
      userInitiatedRef.current = true;
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    track.addEventListener("pointerdown", handlePointerDown, { passive: true });
    if (supportsScrollEnd) {
      track.addEventListener("scrollend", handleSettle);
    }

    return () => {
      track.removeEventListener("scroll", handleScroll);
      track.removeEventListener("pointerdown", handlePointerDown);
      if (supportsScrollEnd) {
        track.removeEventListener("scrollend", handleSettle);
      }
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (fallbackTimer) clearTimeout(fallbackTimer);
    };
  }, []);

  const handleOpenHanziShowcase = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onSelectComponent) {
      event.preventDefault();
      onSelectComponent("hanzina");
      document
        .getElementById("ecosystem-showcase")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="relative w-full py-5 sm:py-8"
      aria-roledescription="carousel"
      aria-label="Featured SS4 Products: LYCEON, SCL, and HanziNA"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <div className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-clip bg-white shadow-[0_8px_32px_rgba(17,17,17,0.06),0_0_0_1px_rgba(17,17,17,0.04)]">
          {/* Scroll-snap Slide Track */}
          <div
            ref={trackRef}
            tabIndex={0}
            role="group"
            aria-label="Featured product slides"
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") {
                e.preventDefault();
                stepSlide(1, true);
              } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                stepSlide(-1, true);
              }
            }}
            className="hero-carousel-track focus-visible:outline-2 focus-visible:outline-[#1A56C4]"
          >
            {/* SLIDE 1: LYCEON (Main Feature: SAS + SLM) */}
            <div
              role="group"
              aria-roledescription="slide"
              aria-label="1 of 3"
              className="hero-carousel-slide bg-[linear-gradient(135deg,#EDF3FC_0%,#FFFFFF_52%,#FFF4EA_100%)]"
            >
              <div className="min-h-[460px] lg:min-h-[520px] flex flex-col-reverse lg:flex-row items-center justify-between p-6 sm:p-10 lg:p-14 xl:p-16 gap-8 lg:gap-12">
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

                <div className="w-full lg:w-[52%] flex items-center justify-center">
                  <div className="relative w-full max-w-[580px] py-6 px-4 sm:aspect-[16/11] sm:p-7 rounded-[20px] sm:rounded-[24px] bg-[radial-gradient(circle_at_35%_30%,rgba(26,86,196,0.14),transparent_55%),radial-gradient(circle_at_75%_75%,rgba(243,112,33,0.16),transparent_55%),linear-gradient(145deg,#F7FAFF_0%,#FFFFFF_55%,#FFF8F2_100%)] flex items-center justify-center shadow-[inset_0_0_0_1px_rgba(17,17,17,0.05)]">
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

            {/* SLIDE 2: SCL (SS4 Chess League) */}
            <div
              role="group"
              aria-roledescription="slide"
              aria-label="2 of 3"
              className="hero-carousel-slide bg-[linear-gradient(135deg,#F3F6FC_0%,#FFFFFF_55%,#F6F2EA_100%)]"
            >
              <div className="min-h-[460px] lg:min-h-[520px] flex flex-col-reverse lg:flex-row items-center justify-between p-6 sm:p-10 lg:p-14 xl:p-16 gap-8 lg:gap-12">
                <div className="w-full lg:w-[48%] max-w-[560px] z-10 space-y-5">
                  <div className="font-space text-[12px] font-bold uppercase tracking-[0.08em] text-[#1A56C4]">
                    SS4 Chess League · SCL
                  </div>

                  <h2 className="font-space text-[34px] sm:text-[44px] lg:text-[52px] font-black tracking-tight text-[#111111] leading-[1.06]">
                    Many Institutions, One Space.
                  </h2>

                  <p className="font-avenir text-[16px] sm:text-[17px] text-[#3B3F46] leading-relaxed">
                    Connecting Nigerian tertiary institutions, departments, and collegiate chess
                    contenders across theBOARDGAMES, Daily Leagues, Monthly Tournaments, and the
                    15-university Varsity Championship.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href="https://scl.ssfour.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="varsity-btn-primary px-6 py-3 text-[15px] min-h-[48px]"
                    >
                      <span>Explore SCL</span>
                      <ChevronRightIcon className="w-4 h-4" />
                    </a>

                    <a
                      href="https://scl.ssfour.org/chess-league/varsity"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="varsity-btn-secondary px-5 py-3 text-[15px] min-h-[48px]"
                    >
                      <span>Varsity Championship</span>
                    </a>
                  </div>
                </div>

                <div className="w-full lg:w-[52%] flex items-center justify-center">
                  <div className="relative w-full max-w-[580px] aspect-[16/10] sm:aspect-[16/11] rounded-[20px] sm:rounded-[24px] overflow-clip bg-[#0B193C] shadow-[0_12px_36px_rgba(17,17,17,0.1)]">
                    <Image
                      src="/images/scholastic_chess_hero.jpg"
                      alt="Students competing across wooden chessboards in the SS4 Chess League"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div
                      aria-hidden="true"
                      className="hidden sm:flex items-center gap-2.5 absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-[0_8px_24px_rgba(17,17,17,0.14)]"
                    >
                      <span className="font-space text-[12px] font-black text-[#1A56C4]">
                        theBOARDGAMES
                      </span>
                      <span className="text-[#CCCCCC]">·</span>
                      <span className="font-space text-[12px] font-bold text-[#111111]">
                        15 Varsity Squads
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SLIDE 3: HanziNA */}
            <div
              role="group"
              aria-roledescription="slide"
              aria-label="3 of 3"
              className="hero-carousel-slide bg-[linear-gradient(135deg,#F6F7FA_0%,#FFFFFF_52%,#FFF3EA_100%)]"
            >
              <div className="min-h-[460px] lg:min-h-[520px] flex flex-col-reverse lg:flex-row items-center justify-between p-6 sm:p-10 lg:p-14 xl:p-16 gap-8 lg:gap-12">
                <div className="w-full lg:w-[48%] max-w-[560px] z-10 space-y-5">
                  <div className="flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className="w-7 h-7 rounded-lg bg-[#141926] text-[#93C5FD] font-hanzi font-bold text-sm flex items-center justify-center"
                    >
                      汉
                    </span>
                    <span className="font-space text-[12px] font-bold uppercase tracking-[0.08em] text-[#B84D00]">
                      HanziNA · Chinese Reading Workspace
                    </span>
                  </div>

                  <h2 className="font-space text-[34px] sm:text-[44px] lg:text-[52px] font-black tracking-tight text-[#111111] leading-[1.06]">
                    Unravel the characters.
                  </h2>

                  <p className="font-avenir text-[16px] sm:text-[17px] text-[#3B3F46] leading-relaxed">
                    A learner-controlled Chinese reading space built around progressive disclosure:
                    Hanzi stays front and center while toggleable Pinyin and word glosses appear only
                    on demand.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href="#ecosystem-showcase"
                      onClick={handleOpenHanziShowcase}
                      className="varsity-btn-primary px-6 py-3 text-[15px] min-h-[48px]"
                    >
                      <span>Explore HanziNA</span>
                      <ChevronRightIcon className="w-4 h-4" />
                    </a>

                    <a
                      href="https://lyceon.ssfour.org/languages"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="varsity-btn-secondary px-5 py-3 text-[15px] min-h-[48px]"
                    >
                      <span>Chinese Track on LYCEON</span>
                    </a>
                  </div>
                </div>

                <div className="w-full lg:w-[52%] flex items-center justify-center">
                  <div
                    aria-hidden="true"
                    className="relative w-full max-w-[580px] py-6 px-4 sm:aspect-[16/11] sm:p-7 rounded-[20px] sm:rounded-[24px] bg-[linear-gradient(145deg,#131722_0%,#1D2539_100%)] flex items-center justify-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                  >
                    <div className="hidden sm:flex items-center gap-2 absolute top-4 left-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl px-3.5 py-2 text-[12px] font-space font-bold">
                      Hanzi First
                    </div>
                    <div className="hidden sm:flex items-center gap-2 absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-[#93C5FD] rounded-2xl px-3.5 py-2 text-[12px] font-space font-bold">
                      Pinyin on Demand
                    </div>
                    <div className="hidden sm:flex items-center gap-2 absolute bottom-4 left-5 bg-white/10 backdrop-blur-sm text-[#FDBA74] rounded-2xl px-3.5 py-2 text-[12px] font-space font-bold">
                      Occurrence Mapping
                    </div>
                    <div className="hidden sm:flex items-center gap-2 absolute bottom-4 right-5 bg-white/10 backdrop-blur-sm text-white/90 rounded-2xl px-3.5 py-2 text-[12px] font-space font-bold">
                      Instant Glosses
                    </div>

                    <div className="relative z-10 w-full max-w-[330px] rounded-2xl bg-[#1F273B]/95 p-5 shadow-[0_18px_46px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.1)] text-white space-y-4">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-space font-bold text-white/90">Reading session</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#1A56C4] text-white font-bold">
                          Pinyin Off
                        </span>
                      </div>

                      <div className="flex items-center justify-center gap-3 py-1">
                        <span className="font-hanzi text-[30px] sm:text-[34px] font-bold text-white/90">
                          太初
                        </span>
                        <span className="font-hanzi text-[30px] sm:text-[34px] font-bold text-white/90">
                          有
                        </span>
                        <span className="font-hanzi text-[32px] sm:text-[36px] font-black text-[#FDBA74] px-2.5 py-0.5 rounded-xl bg-[#F37021]/25">
                          道
                        </span>
                      </div>

                      <div className="rounded-xl bg-[#10141F] px-3.5 py-2.5 text-[12px] flex items-center justify-between">
                        <span className="font-bold text-[#FDBA74]">dào</span>
                        <span className="text-white/80">the Word · Way</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visually hidden polite live region announcing settled slide changes */}
          <p className="sr-only" role="status" aria-live="polite">
            {statusMessage}
          </p>

          {/* Bottom Carousel Control Bar (Microsoft Homepage Style) */}
          <div className="bg-[#FAF8F4] px-5 sm:px-10 py-3 flex items-center justify-end gap-4">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => setIsPlaying((p) => !p)}
                aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
                className="min-w-[36px] min-h-[36px] p-2 text-[#111111] hover:bg-[#EAEAEA] rounded-full transition-colors cursor-pointer flex items-center justify-center touch-manipulation"
              >
                {isPlaying ? (
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <rect x="3" y="2" width="3.5" height="12" rx="1" />
                    <rect x="9.5" y="2" width="3.5" height="12" rx="1" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M4 2.5L13.5 8L4 13.5V2.5Z" />
                  </svg>
                )}
              </button>

              <button
                type="button"
                onClick={() => stepSlide(-1, true)}
                aria-label="Previous slide"
                className="min-w-[36px] min-h-[36px] p-2 text-[#111111] hover:bg-[#EAEAEA] rounded-full transition-colors cursor-pointer flex items-center justify-center touch-manipulation"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" aria-hidden="true">
                  <path d="M10 3.5L5.5 8L10 12.5" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </button>

              <nav className="flex items-center gap-1" aria-label="Choose a featured slide">
                {SLIDE_META.map((slide, idx) => {
                  const isActive = currentSlide === idx;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => scrollToSlide(idx, true)}
                      aria-label={`Go to ${slide.label} slide (${idx + 1} of ${SLIDE_META.length})`}
                      aria-current={isActive ? "true" : undefined}
                      className="min-w-[28px] min-h-[28px] flex items-center justify-center cursor-pointer rounded-full touch-manipulation"
                    >
                      <span
                        className={`block h-2.5 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                          isActive
                            ? "w-7 bg-[#1A56C4]"
                            : "w-2.5 bg-[#BDBDBD] hover:bg-[#888888]"
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>

              <button
                type="button"
                onClick={() => stepSlide(1, true)}
                aria-label="Next slide"
                className="min-w-[36px] min-h-[36px] p-2 text-[#111111] hover:bg-[#EAEAEA] rounded-full transition-colors cursor-pointer flex items-center justify-center touch-manipulation"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" aria-hidden="true">
                  <path d="M6 3.5L10.5 8L6 12.5" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
