import React from "react";
import { ChevronRightIcon } from "./icons";

interface LyceonCard {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

const LYCEON_CARDS: LyceonCard[] = [
  {
    id: "lyceon-play",
    title: "Live Rated Language & Subject Duels",
    description:
      "Compete head-to-head on timed questions with server-authoritative clocks and Glicko-2 ratings on Lyceon.",
    ctaText: "Enter Play Arena",
    ctaHref: "https://slm.ssfour.org/play",
  },
  {
    id: "lyceon-learn",
    title: "Short Guided Puzzles & Spaced Review",
    description:
      "Study English, Chinese, Yoruba, Spanish, French, Japanese, Physics, Chemistry, and CompTIA Tech+ through focused lessons.",
    ctaText: "Start Learning",
    ctaHref: "https://slm.ssfour.org/learn",
  },
  {
    id: "lyceon-languages",
    title: "Subjects, Levels & Proficiency Tracks",
    description:
      "Browse all active languages, academic subjects, and certification tracks available across Lyceon.",
    ctaText: "Browse Subjects",
    ctaHref: "https://slm.ssfour.org/languages",
  },
];

export function LyceonAnnouncements() {
  return (
    <section id="lyceon-announcements" className="w-full py-8 sm:py-12" aria-label="Lyceon Announcements">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <div className="mb-8">
          <h2 className="font-space text-[26px] sm:text-[34px] font-black tracking-tight text-[#111111]">
            Lyceon Announcements
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LYCEON_CARDS.map((card) => (
            <div
              key={card.id}
              className="varsity-card flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 space-y-3">
                <h3 className="font-space text-[19px] sm:text-[20px] font-bold tracking-tight text-[#111111] leading-[1.25] group-hover:text-[#1A56C4] transition-colors">
                  {card.title}
                </h3>
                <p className="font-avenir text-[15px] text-[#444444] leading-relaxed">
                  {card.description}
                </p>
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
