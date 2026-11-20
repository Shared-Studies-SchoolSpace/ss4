import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "./icons";

interface CardItem {
  id: string;
  category: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
}

const CARDS: CardItem[] = [
  {
    id: "card-varsity-nov",
    category: "VARSITY SEASON 2",
    title: "Varsity Tournament Nov. '26",
    description:
      "Fifteen top Nigerian university teams of five compete on Lichess from November 18th to 30th in Season 2 of the SS4 Chess League Varsity Tournament.",
    ctaText: "Follow Varsity Season 2",
    ctaHref: "#august-recap",
    imageSrc: "/images/varsity-nov-2026-poster.png",
    imageAlt: "SS4 Chess League Varsity Tournament November 2026 Season 2 poster",
  },
  {
    id: "card-october-boardgames",
    category: "THEBOARDGAMES",
    title: "October 2026 Championship",
    description:
      "Nigeria's top university chess players clash on Lichess from October 9th to 31st, 2026 across 3+0, 5+0, and 10+0 time controls.",
    ctaText: "Explore theBOARDGAMES",
    ctaHref: "#august-recap",
    imageSrc: "/images/october-tournament-poster.png",
    imageAlt: "SS4 Chess League theBOARDGAMES October 2026 tournament poster",
  },
  {
    id: "card-ss4-space",
    category: "SHARED STUDY SCHOOL SPACE",
    title: "SS4 — Shared Study School Space",
    description:
      "SS4 (Shared Study School Space) connects Nigerian universities, departments, and student chess communities into one shared arena.",
    ctaText: "Read the SS4 Story",
    ctaHref: "#about",
    imageSrc: "/images/varsity-lineups-poster.jpg",
    imageAlt: "SS4 Shared Study School Space logo banner",
  },
  {
    id: "card-varsity-sept",
    category: "VARSITY SEPT. '26",
    title: "Varsity Tournament Sept. '26",
    description:
      "University squads of five compete on Chess.com and Lichess from September 16th to 30th, 2026 for five 1-month Chess.com Premium memberships.",
    ctaText: "See Sept. '26 Squads",
    ctaHref: "#august-recap",
    imageSrc: "/images/varsity-tournament-poster.jpeg",
    imageAlt: "SS4 Chess League Varsity Tournament September 2026 poster",
  },
];

export function ProductCardGrid() {
  return (
    <section id="league-feed" className="w-full py-8 sm:py-12" aria-label="League and community feed">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="varsity-badge-primary mb-2">
              <span>SS4 FEED</span>
            </div>
            <h2 className="font-space text-[26px] sm:text-[34px] font-black tracking-tight text-[#111111]">
              League &amp; Community Feed
            </h2>
          </div>
        </div>

        {/* 4-Card Varsity Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="varsity-card flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image Container with subtle border separator */}
                <div className="relative aspect-[16/9] w-full bg-[#F0EEEA] border-b border-[#EAEAEA]">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs font-space text-[10px] font-bold text-[#111111] px-2.5 py-1 rounded-full border border-[#EAEAEA] uppercase tracking-wider">
                    {card.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-space text-[19px] sm:text-[20px] font-bold tracking-tight text-[#111111] leading-[1.25] group-hover:text-[#1A56C4] transition-colors">
                    {card.title}
                  </h3>
                  <p className="font-avenir text-[15px] text-[#444444] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Action Button translated to SS4 Primary/Secondary Button */}
              <div className="p-6 pt-0">
                <Link
                  href={card.ctaHref}
                  className="varsity-btn-primary w-full text-center"
                >
                  <span>{card.ctaText}</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
