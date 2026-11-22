import React from "react";
import Image from "next/image";
import { ChevronRightIcon } from "./icons";

interface BusinessCard {
  id: string;
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
    title: "August 2026 Quarterfinals",
    description:
      "Eight contenders from FUTIA, UNIUYO, UNILORIN, Landmark, Babcock, Covenant, UNICAL, and Bells Tech meet across four boards on Wednesday, September 2nd at 8 PM.",
    ctaText: "See Quarterfinal Matchups",
    ctaHref: "https://scl.ssfour.org/chess-league/tournament?month=2026-08",
    imageSrc: "/images/august-tournament-quarterfinals.jpg",
    imageAlt: "SS4 Chess League August 2026 Quarterfinals matchup poster",
  },
  {
    id: "biz-semifinals",
    title: "August 2026 Semifinals",
    description:
      "Emmanuel Michael (FUTIA) plays Kenneth Gilbert (UNILORIN) while James Henshaw (Bells Tech) faces Anuchi Emmanuel (Covenant) on Thursday, September 3rd at 8 PM.",
    ctaText: "See Semifinal Pairings",
    ctaHref: "https://scl.ssfour.org/chess-league/tournament?month=2026-08",
    imageSrc: "/images/august-tournament-semifinals.png",
    imageAlt: "SS4 Chess League August 2026 Semifinals matchup poster",
  },
  {
    id: "biz-champion",
    title: "Anuchi Emmanuel Wins August 2026",
    description:
      "Covenant University Electrical Engineering student Anuchi Emmanuel (@Robobobobobobob_Emma) won the SS4 Chess League August 2026 championship trophy.",
    ctaText: "Meet the August Champion",
    ctaHref: "https://scl.ssfour.org/chess-league/tournament?month=2026-08",
    imageSrc: "/images/august-tournament-champion.png",
    imageAlt: "SS4 Chess League August 2026 Champion poster for Anuchi Emmanuel",
  },
];

export function BusinessCardGrid() {
  return (
    <section id="august-recap" className="w-full py-8 sm:py-12" aria-label="SCL August Tournament">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <div className="mb-8">
          <h2 className="font-space text-[26px] sm:text-[34px] font-black tracking-tight text-[#111111]">
            SCL August Tournament
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_CARDS.map((card) => (
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
