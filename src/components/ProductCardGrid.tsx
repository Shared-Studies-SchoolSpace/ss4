import React from "react";
import Image from "next/image";
import { ChevronRightIcon } from "./icons";

interface CardItem {
  id: string;
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
    title: "Varsity Tournament Nov. '26",
    description:
      "Fifteen Nigerian university teams of five compete on Lichess from November 18th to 30th in Season 2 of the SS4 Chess League Varsity Tournament.",
    ctaText: "Follow Varsity Season 2",
    ctaHref: "https://scl.ssfour.org/chess-league/varsity",
    imageSrc: "/images/varsity-nov-2026-poster.png",
    imageAlt: "SS4 Chess League Varsity Tournament November 2026 Season 2 poster",
  },
  {
    id: "card-october-boardgames",
    title: "October 2026 Championship",
    description:
      "Nigeria's top university chess players clash on Lichess from October 9th to 31st, 2026 across 3+0, 5+0, and 10+0 time controls.",
    ctaText: "Explore theBOARDGAMES",
    ctaHref: "https://scl.ssfour.org/theboardgames",
    imageSrc: "/images/october-tournament-poster.png",
    imageAlt: "SS4 Chess League theBOARDGAMES October 2026 tournament poster",
  },
  {
    id: "card-ss4-space",
    title: "Shared Study School Space",
    description:
      "Connecting Nigerian universities, departments, and student chess communities into one shared arena.",
    ctaText: "Read the SS4 Story",
    ctaHref: "https://scl.ssfour.org/about",
    imageSrc: "/images/varsity-lineups-poster.jpg",
    imageAlt: "SS4 Shared Study School Space wordmark",
  },
  {
    id: "card-varsity-sept",
    title: "Varsity Tournament Sept. '26",
    description:
      "University squads of five compete on Chess.com and Lichess from September 16th to 30th, 2026 for five 1-month Chess.com Premium memberships.",
    ctaText: "See Sept. '26 Squads",
    ctaHref: "https://scl.ssfour.org/chess-league/varsity",
    imageSrc: "/images/varsity-tournament-poster.jpeg",
    imageAlt: "SS4 Chess League Varsity Tournament September 2026 poster",
  },
];

export function ProductCardGrid() {
  return (
    <section id="scl-announcements" className="w-full py-8 sm:py-12" aria-label="SCL Announcements">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <div className="mb-8">
          <h2 className="font-space text-[26px] sm:text-[34px] font-black tracking-tight text-[#111111]">
            SCL Announcements
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="varsity-card flex flex-col justify-between overflow-hidden group"
            >
              <div>
                <div className="relative aspect-[16/9] w-full bg-[#F0EEEA]">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-space text-[19px] sm:text-[20px] font-bold tracking-tight text-[#111111] leading-[1.25] group-hover:text-[#1A56C4] transition-colors">
                    {card.title}
                  </h3>
                  <p className="font-avenir text-[15px] text-[#444444] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={card.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="varsity-btn-primary w-full text-center"
                >
                  <span>{card.ctaText}</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
