"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "./icons";

interface HeroSlideData {
  id: number;
  badge?: string;
  title: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  imageSrc: string;
  imageAlt: string;
}

const SLIDES: HeroSlideData[] = [
  {
    id: 1,
    badge: "ACADEMIC ECOSYSTEM",
    title: "SS4: An Ecosystem for Academia",
    description:
      "Many Institutions, One Space. Connecting Nigerian secondary schools, colleges, direct admissions, and student communities across all 36 states and the FCT.",
    primaryCtaText: "Explore Schools Directory",
    primaryCtaHref: "#schools",
    secondaryCtaText: "Direct Admissions",
    secondaryCtaHref: "#admissions",
    imageSrc: "/images/hero-lg.webp",
    imageAlt: "Students exploring secondary and tertiary institutions on SS4",
  },
  {
    id: 2,
    badge: "DIRECT ADMISSIONS",
    title: "Get Accepted Without an Application",
    description:
      "No application fee. Fast-track your tertiary entry with verified academic records, transparent cutoff guidance, and direct pathways to accredited partner universities.",
    primaryCtaText: "Apply for Direct Admissions",
    primaryCtaHref: "#admissions",
    secondaryCtaText: "View Partner Universities",
    secondaryCtaHref: "#colleges",
    imageSrc: "/images/direct-admissions-logo.webp",
    imageAlt: "SS4 Direct Admissions gateway and partner tertiary institutions",
  },
];

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative w-full py-6 sm:py-8" aria-label="Hero Carousel">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        {/* Main Hero Card Container in SS4 Varsity Card style */}
        <div className="relative w-full bg-white border border-[#EAEAEA] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all">
          
          {/* Subtle Varsity accent gradient header strip */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#1A56C4] via-[#0D9488] to-[#B84D00]" />

          <div className="min-h-[480px] lg:min-h-[520px] flex flex-col-reverse lg:flex-row items-center justify-between p-6 sm:p-12 lg:p-16 gap-8">
            
            {/* Content Box */}
            <div className="w-full lg:w-1/2 max-w-[560px] z-10 space-y-5">
              {slide.badge && (
                <div className="varsity-badge-accent">
                  <span>{slide.badge}</span>
                </div>
              )}

              <h1 className="font-space text-[32px] sm:text-[42px] lg:text-[48px] font-black tracking-tight text-[#111111] leading-[1.08]">
                {slide.title}
              </h1>

              <p className="font-avenir text-[16px] sm:text-[17px] text-[#444444] leading-relaxed">
                {slide.description}
              </p>

              {/* Action Buttons translated to SS4 equivalents */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <Link
                  href={slide.primaryCtaHref}
                  className="varsity-btn-primary"
                >
                  <span>{slide.primaryCtaText}</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>

                {slide.secondaryCtaText && (
                  <Link
                    href={slide.secondaryCtaHref || "#"}
                    className="varsity-btn-secondary"
                  >
                    <span>{slide.secondaryCtaText}</span>
                  </Link>
                )}
              </div>
            </div>

            {/* Hero Image in elevated container */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-2 sm:p-6">
              <div className="relative w-full aspect-[16/9] max-w-[660px]">
                <Image
                  src={slide.imageSrc}
                  alt={slide.imageAlt}
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>

          {/* Carousel Controls in SS4 Segmented Capsule */}
          <div className="bg-[#FAF8F4] border-t border-[#EAEAEA] px-6 sm:px-12 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-space text-xs font-bold text-[#64748B] tracking-wider uppercase">
                FEATURED HIGHLIGHT 0{currentSlide + 1} / 0{SLIDES.length}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Pause/Play Toggle */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
                className="p-2 text-[#111111] hover:bg-[#EAEAEA] rounded-full transition-colors"
              >
                {isPlaying ? (
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                    <rect x="3" y="2" width="3.5" height="12" rx="1" />
                    <rect x="9.5" y="2" width="3.5" height="12" rx="1" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M4 2.5L13.5 8L4 13.5V2.5Z" />
                  </svg>
                )}
              </button>

              {/* Prev */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))}
                className="p-2 text-[#111111] hover:bg-[#EAEAEA] rounded-full transition-colors"
                aria-label="Previous slide"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M10 3.5L5.5 8L10 12.5" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                </svg>
              </button>

              {/* Indicators: Varsity Pill style */}
              <div className="flex items-center gap-1.5">
                {SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? "w-7 bg-[#1A56C4]" : "w-2.5 bg-[#CCCCCC] hover:bg-[#999999]"
                    }`}
                  />
                ))}
              </div>

              {/* Next */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
                className="p-2 text-[#111111] hover:bg-[#EAEAEA] rounded-full transition-colors"
                aria-label="Next slide"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6 3.5L10.5 8L6 12.5" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
