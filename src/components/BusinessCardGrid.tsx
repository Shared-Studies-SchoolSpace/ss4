import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "./icons";

interface BusinessCard {
  id: string;
  category: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
}

const BUSINESS_CARDS: BusinessCard[] = [
  {
    id: "biz-quarterfinals",
    category: "AUGUST QUARTERFINALS",
    title: "August 2026 Quarterfinals",
    description:
      "Eight contenders from FUTIA, UNIUYO, UNILORIN, Landmark, Babcock, Covenant, UNICAL, and Bells Tech meet across four boards on Wednesday, September 2nd at 8 PM.",
    ctaText: "See Quarterfinal Matchups",
    ctaHref: "#league-feed",
    imageSrc: "/images/august-tournament-quarterfinals.jpg",
    imageAlt: "SS4 Chess League August 2026 Quarterfinals matchup poster",
  },
  {
    id: "biz-semifinals",
    category: "AUGUST SEMIFINALS",
    title: "August 2026 Semifinals",
    description:
      "Emmanuel Michael (FUTIA) plays Kenneth Gilbert (UNILORIN) while James Henshaw (Bells Tech) faces Anuchi Emmanuel (Covenant) on Thursday, September 3rd at 8 PM.",
    ctaText: "See Semifinal Pairings",
    ctaHref: "#league-feed",
    imageSrc: "/images/august-tournament-semifinals.png",
    imageAlt: "SS4 Chess League August 2026 Semifinals matchup poster",
  },
  {
    id: "biz-champion",
    category: "AUGUST CHAMPION",
    title: "Anuchi Emmanuel Wins August 2026",
    description:
      "Covenant University Electrical Engineering student Anuchi Emmanuel (@Robobobobobobob_Emma) won the SS4 Chess League August 2026 championship trophy.",
    ctaText: "Meet the August Champion",
    ctaHref: "#league-feed",
    imageSrc: "/images/august-tournament-champion.png",
    imageAlt: "SS4 Chess League August 2026 Champion poster for Anuchi Emmanuel",
  },
];

export function BusinessCardGrid() {
  return (
    <section id="august-recap" className="w-full py-8 sm:py-12" aria-label="SS4 Chess League August 2026 tournament dispatches">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="varsity-badge-accent mb-2">
              <span>TOURNAMENT DISPATCHES</span>
            </div>
            <h2 className="font-space text-[26px] sm:text-[34px] font-black tracking-tight text-[#111111]">
              August 2026 Tournament Feed
            </h2>
          </div>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_CARDS.map((card) => (
            <div
              key={card.id}
              className="varsity-card flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image Container with category pill */}
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

              {/* Action Button translated to SS4 Primary Button */}
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
