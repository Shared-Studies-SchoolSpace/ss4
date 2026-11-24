import React from "react";
import Image from "next/image";
import { ChevronRightIcon } from "./icons";
import { EcosystemComponentId } from "@/data/ecosystem";

interface ProductCardGridProps {
  onSelectComponent?: (id: EcosystemComponentId) => void;
}

interface EcosystemCardEntry {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  isExternal: boolean;
  componentId?: EcosystemComponentId;
}

const FEATURED_CARDS: EcosystemCardEntry[] = [
  {
    id: "scl",
    title: "SS4 Chess League (SCL)",
    description:
      "Inter-university and scholastic chess arenas connecting Nigerian campuses through Daily Leagues, Monthly Tournaments, and the Varsity Championship.",
    ctaText: "Explore SCL",
    ctaHref: "https://scl.ssfour.org",
    isExternal: true,
    componentId: "scl",
  },
  {
    id: "hanzina",
    title: "HanziNA",
    description:
      "A learner-controlled Chinese reading workspace where Hanzi characters stay front and center, with toggleable Pinyin and instant glosses on demand.",
    ctaText: "Explore HanziNA",
    ctaHref: "#ecosystem-showcase",
    isExternal: false,
    componentId: "hanzina",
  },
  {
    id: "partners",
    title: "SS4 Partners & Schools",
    description:
      "Connect your secondary school, university, or sponsorship team into the SS4 academic ecosystem—powering campus leagues and student recognition.",
    ctaText: "Become a Partner",
    ctaHref: "https://scl.ssfour.org/partners",
    isExternal: true,
  },
];

function CardVisual({ id }: { id: string }) {
  if (id === "scl") {
    return (
      <Image
        src="/images/scholastic_chess_hero.jpg"
        alt="Students competing across wooden chessboards in the SS4 Chess League"
        fill
        className="object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    );
  }

  if (id === "partners") {
    return (
      <Image
        src="/images/tester.webp"
        alt="Academic textbooks, study notebook, and globe representing SS4 partner institutions"
        fill
        className="object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="w-full h-full bg-[linear-gradient(145deg,#131722_0%,#1D2539_100%)] p-3.5 sm:p-4 flex items-center justify-center relative"
    >
      <div className="w-full max-w-[270px] rounded-xl bg-[#1F273B]/95 p-3.5 shadow-[0_12px_28px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.08)] text-white transition-transform duration-300 motion-reduce:transition-none group-hover:-translate-y-0.5">
        <div className="flex items-center justify-between text-[10px] mb-2.5">
          <span className="inline-flex items-center gap-1.5 font-space font-bold text-white/90">
            <span className="w-5 h-5 rounded-md bg-[#2A3A5E] text-[#93C5FD] font-hanzi flex items-center justify-center text-[11px]">
              汉
            </span>
            HanziNA
          </span>
          <span className="px-2 py-0.5 rounded-full bg-white/10 text-white/80 font-medium">
            Pinyin on demand
          </span>
        </div>

        <div className="flex items-center justify-center gap-2.5 py-1.5">
          <span className="font-hanzi text-[22px] font-bold text-white/90">太初</span>
          <span className="font-hanzi text-[22px] font-bold text-white/90">有</span>
          <span className="font-hanzi text-[24px] font-black text-[#FDBA74] px-2 py-0.5 rounded-lg bg-[#F37021]/20">
            道
          </span>
        </div>

        <div className="mt-2 rounded-lg bg-[#10141F] px-2.5 py-1.5 text-[11px] flex items-center justify-between">
          <span className="font-semibold text-[#FDBA74]">dào</span>
          <span className="text-white/80">the Way · Word</span>
        </div>
      </div>
    </div>
  );
}

export function ProductCardGrid({ onSelectComponent }: ProductCardGridProps) {
  return (
    <section
      id="ecosystem-cards"
      className="w-full py-8 sm:py-12"
      aria-label="SS4 Ecosystem Products"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <div className="mb-7 sm:mb-8">
          <p className="font-space text-[12px] font-bold uppercase tracking-[0.08em] text-[#B84D00] mb-1.5">
            Across the SS4 Ecosystem
          </p>
          <h2 className="font-space text-[26px] sm:text-[34px] font-black tracking-tight text-[#111111]">
            Built for competitive play, focused reading, and partner campuses
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_CARDS.map((card) => (
            <article
              key={card.id}
              id={`card-${card.id}`}
              className="varsity-card flex flex-col p-4 sm:p-5 gap-4 h-full group"
            >
              <div className="relative aspect-[16/10] w-full rounded-[14px] overflow-clip bg-[#F3F4F6] shrink-0">
                <CardVisual id={card.id} />
              </div>

              <h3 className="font-space text-[20px] sm:text-[21px] font-bold tracking-tight text-[#111111] leading-[1.25] group-hover:text-[#1A56C4] transition-colors">
                {card.title}
              </h3>

              <p className="font-avenir text-[15px] text-[#444444] leading-relaxed flex-1">
                {card.description}
              </p>

              <footer className="pt-2">
                <a
                  href={card.ctaHref}
                  target={card.isExternal ? "_blank" : undefined}
                  rel={card.isExternal ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    if (!card.isExternal && card.componentId && onSelectComponent) {
                      e.preventDefault();
                      onSelectComponent(card.componentId);
                      document
                        .getElementById("ecosystem-showcase")
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
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
