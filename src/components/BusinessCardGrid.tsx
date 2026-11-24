import React from "react";
import Image from "next/image";
import { ChevronRightIcon } from "./icons";

interface HighlightCard {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  fit?: "cover" | "contain";
  frameBg?: string;
}

const HIGHLIGHT_CARDS: HighlightCard[] = [
  {
    id: "highlight-varsity",
    title: "Varsity Championship Season 2",
    description:
      "Fifteen Nigerian university squads of five compete on Lichess and Chess.com in Season 2 of the SS4 Chess League Varsity Tournament.",
    ctaText: "Follow Varsity Season 2",
    ctaHref: "https://scl.ssfour.org/chess-league/varsity",
    imageSrc: "/images/varsity-nov-2026-poster.png",
    imageAlt: "SS4 Chess League Varsity Tournament November 2026 Season 2 poster",
    fit: "contain",
    frameBg: "bg-[#0B193C]",
  },
  {
    id: "highlight-boardgames",
    title: "theBOARDGAMES Tournaments",
    description:
      "Daily League arenas and Monthly Tournaments bring Nigeria's top university chess players together across 3+0, 5+0, and 10+0 time controls.",
    ctaText: "Explore theBOARDGAMES",
    ctaHref: "https://scl.ssfour.org/theboardgames",
    imageSrc: "/images/october-tournament-poster.png",
    imageAlt: "SS4 Chess League theBOARDGAMES tournament poster",
    fit: "contain",
    frameBg: "bg-white",
  },
  {
    id: "highlight-lyceon-play",
    title: "Live Rated Duels on LYCEON",
    description:
      "Experience SAS academic subjects and SLM language tracks together in timed, server-authoritative duels with Glicko-2 ratings on LYCEON.",
    ctaText: "Enter LYCEON Arena",
    ctaHref: "https://lyceon.ssfour.org/play",
    imageSrc: "/images/slm-student-duel.jpg",
    imageAlt: "Students smiling over a live rated duel on LYCEON",
  },
];

export function BusinessCardGrid() {
  return (
    <section
      id="community-highlights"
      className="w-full py-10 sm:py-14"
      aria-label="Across the SS4 Network"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <div className="mb-8">
          <p className="font-space text-[12px] font-bold uppercase tracking-[0.08em] text-[#B84D00] mb-1.5">
            In Action
          </p>
          <h2 className="font-space text-[26px] sm:text-[34px] font-black tracking-tight text-[#111111]">
            Across the SS4 Network
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HIGHLIGHT_CARDS.map((card) => (
            <article
              key={card.id}
              className="varsity-card flex flex-col p-4 sm:p-5 gap-4 h-full group"
            >
              <div
                className={`relative aspect-[16/10] w-full rounded-[14px] overflow-clip shrink-0 ${
                  card.frameBg ?? "bg-[#F0EEEA]"
                }`}
              >
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className={`${
                    card.fit === "contain" ? "object-contain p-1" : "object-cover"
                  } transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.03]`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <h3 className="font-space text-[19px] sm:text-[20px] font-bold tracking-tight text-[#111111] leading-[1.25] group-hover:text-[#1A56C4] transition-colors">
                {card.title}
              </h3>

              <p className="font-avenir text-[15px] text-[#444444] leading-relaxed flex-1">
                {card.description}
              </p>

              <footer className="pt-2">
                <a
                  href={card.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="varsity-btn-primary w-full sm:w-fit"
                >
                  <span>{card.ctaText}</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </a>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
