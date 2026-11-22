"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRightIcon } from "./icons";

interface HeroSlideData {
  id: number;
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
    title: "Many Institutions, One Space",
    description:
      "Connecting Nigerian tertiary institutions, departments, and collegiate chess players in one shared arena.",
    primaryCtaText: "Enter theBOARDGAMES",
    primaryCtaHref: "https://scl.ssfour.org/theboardgames",
    secondaryCtaText: "About SS4",
    secondaryCtaHref: "https://scl.ssfour.org/about",
    imageSrc: "/images/scholastic_chess_hero.jpg",
    imageAlt: "Students competing in the SS4 Chess League",
  },
  {
    id: 2,
    title: "Connected University Communities",
    description:
      "Discover participating Nigerian universities, departmental talent, and inter-school competition across the network.",
    primaryCtaText: "Explore Universities",
    primaryCtaHref: "https://scl.ssfour.org/tertiary",
    secondaryCtaText: "Partner With Us",
    secondaryCtaHref: "https://scl.ssfour.org/partners",
    imageSrc: "/images/tester.webp",
    imageAlt: "Textbooks, study notebook, and globe on a classroom desk",
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
        <div className="relative w-full bg-white rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-[0_4px_24px_rgba(17,17,17,0.05)]">
          <div className="min-h-[480px] lg:min-h-[520px] flex flex-col-reverse lg:flex-row items-center justify-between p-6 sm:p-12 lg:p-16 gap-8">
            <div className="w-full lg:w-1/2 max-w-[560px] z-10 space-y-5">
              <h1 className="font-space text-[32px] sm:text-[42px] lg:text-[48px] font-black tracking-tight text-[#111111] leading-[1.08]">
                {slide.title}
              </h1>

              <p className="font-avenir text-[16px] sm:text-[17px] text-[#444444] leading-relaxed">
                {slide.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href={slide.primaryCtaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="varsity-btn-primary"
                >
                  <span>{slide.primaryCtaText}</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </a>

                {slide.secondaryCtaText && slide.secondaryCtaHref && (
                  <a
                    href={slide.secondaryCtaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="varsity-btn-secondary"
                  >
                    <span>{slide.secondaryCtaText}</span>
                  </a>
                )}
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center p-2 sm:p-6">
              <div className="relative w-full aspect-[16/9] max-w-[660px] rounded-2xl overflow-hidden">
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

          <div className="bg-[#FAF8F4] px-6 sm:px-12 py-3 flex items-center justify-end">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
                className="p-2 text-[#111111] hover:bg-[#EAEAEA] rounded-full transition-colors cursor-pointer"
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

              <button
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))}
                className="p-2 text-[#111111] hover:bg-[#EAEAEA] rounded-full transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M10 3.5L5.5 8L10 12.5" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                </svg>
              </button>

              <div className="flex items-center gap-1.5">
                {SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === idx ? "w-7 bg-[#1A56C4]" : "w-2.5 bg-[#CCCCCC] hover:bg-[#999999]"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
                className="p-2 text-[#111111] hover:bg-[#EAEAEA] rounded-full transition-colors cursor-pointer"
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
