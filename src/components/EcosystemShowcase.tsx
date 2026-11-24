"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRightIcon } from "./icons";
import {
  ECOSYSTEM_PRODUCTS,
  ECOSYSTEM_SHOWCASE_ORDER,
  EcosystemComponentId,
} from "@/data/ecosystem";

interface EcosystemShowcaseProps {
  activeId: EcosystemComponentId;
  onSelect: (id: EcosystemComponentId) => void;
}

const HANZINA_TOKENS = [
  { hanzi: "太初", pinyin: "tàichū", english: "in the beginning" },
  { hanzi: "有", pinyin: "yǒu", english: "there was" },
  { hanzi: "道", pinyin: "dào", english: "the Word / Way" },
  { hanzi: "，", pinyin: "", english: "" },
  { hanzi: "道", pinyin: "dào", english: "the Word / Way" },
  { hanzi: "与", pinyin: "yǔ", english: "with" },
  { hanzi: "神", pinyin: "shén", english: "God" },
  { hanzi: "同在", pinyin: "tóngzài", english: "existed together" },
  { hanzi: "。", pinyin: "", english: "" },
];

const LYCEON_PILLARS = [
  {
    id: "languages",
    label: "Languages (SLM)",
    items: ["English", "Chinese (HSK)", "Yorùbá", "Spanish", "French", "Japanese (JLPT)"],
    note: "FSRS spaced review, tone & reading puzzles, and live rated vocabulary duels inside LYCEON.",
  },
  {
    id: "assessments",
    label: "Assessments (SAS)",
    items: ["Physics", "Chemistry", "CompTIA Tech+", "WAEC / JAMB Prep"],
    note: "Structured academic duels with topic maps, past questions, SURGE streaks, and Long 20–90s clocks.",
  },
];

function ShowcaseStage({ id }: { id: EcosystemComponentId }) {
  const [lyceonPillarIdx, setLyceonPillarIdx] = useState(0);
  const [pinyinOn, setPinyinOn] = useState(false);
  const [selectedTokenIdx, setSelectedTokenIdx] = useState<number>(2);
  const [showTranslation, setShowTranslation] = useState(true);

  if (id === "lyceon") {
    const pillar = LYCEON_PILLARS[lyceonPillarIdx];
    return (
      <div className="rounded-[20px] bg-[#F7F9FD] p-5 sm:p-6 space-y-5 shadow-[inset_0_0_0_1px_rgba(17,17,17,0.05)]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Image
            src="/images/lyceon-wordmark.svg"
            alt="LYCEON"
            width={116}
            height={24}
            className="h-6 w-auto"
          />
          <span className="font-space text-[12px] font-bold text-[#1A56C4]">
            SAS + SLM · Learn · Duel · Review
          </span>
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="LYCEON unified tracks">
          {LYCEON_PILLARS.map((g, idx) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setLyceonPillarIdx(idx)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                lyceonPillarIdx === idx
                  ? "bg-[#1A56C4] text-white"
                  : "bg-white text-[#444444] hover:text-[#111111]"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 space-y-3 shadow-[0_4px_16px_rgba(17,17,17,0.05)]">
          <div className="flex flex-wrap gap-2">
            {pillar.items.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-lg bg-[#F6F4F0] text-[13px] font-semibold text-[#111111]"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-[14px] text-[#444444] leading-relaxed">{pillar.note}</p>
        </div>

        <div className="grid grid-cols-3 gap-2.5 text-center">
          <div className="rounded-xl bg-white p-3 shadow-[0_2px_8px_rgba(17,17,17,0.04)]">
            <div className="font-space text-[13px] font-bold text-[#111111]">Speed</div>
            <div className="text-[12px] text-[#64748B]">3–5s clock</div>
          </div>
          <div className="rounded-xl bg-white p-3 shadow-[0_2px_8px_rgba(17,17,17,0.04)]">
            <div className="font-space text-[13px] font-bold text-[#111111]">Classic</div>
            <div className="text-[12px] text-[#64748B]">8–12s clock</div>
          </div>
          <div className="rounded-xl bg-white p-3 shadow-[0_2px_8px_rgba(17,17,17,0.04)]">
            <div className="font-space text-[13px] font-bold text-[#111111]">Long</div>
            <div className="text-[12px] text-[#64748B]">20–90s clock</div>
          </div>
        </div>
      </div>
    );
  }

  if (id === "scl") {
    return (
      <div className="rounded-[20px] bg-[#F7F6F2] p-5 sm:p-6 space-y-4 shadow-[inset_0_0_0_1px_rgba(17,17,17,0.05)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="relative aspect-[16/10] rounded-xl overflow-clip bg-[#0B193C] shadow-sm">
            <Image
              src="/images/varsity-nov-2026-poster.png"
              alt="SS4 Chess League Varsity Championship Season 2 poster"
              fill
              className="object-contain p-1"
              sizes="(max-width: 1024px) 100vw, 25vw"
            />
          </div>
          <div className="relative aspect-[16/10] rounded-xl overflow-clip bg-white shadow-sm">
            <Image
              src="/images/october-tournament-poster.png"
              alt="SS4 Chess League theBOARDGAMES tournament poster"
              fill
              className="object-contain p-1"
              sizes="(max-width: 1024px) 100vw, 25vw"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          <a
            href="https://scl.ssfour.org/theboardgames"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white p-3 hover:bg-[#E8EFFF] transition-colors text-center"
          >
            <div className="font-space text-[13px] font-bold text-[#111111]">theBOARDGAMES</div>
            <div className="text-[11px] text-[#1A56C4] font-semibold mt-0.5">Daily &amp; Monthly</div>
          </a>
          <a
            href="https://scl.ssfour.org/chess-league/varsity"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white p-3 hover:bg-[#E8EFFF] transition-colors text-center"
          >
            <div className="font-space text-[13px] font-bold text-[#111111]">Varsity</div>
            <div className="text-[11px] text-[#1A56C4] font-semibold mt-0.5">15 Squads</div>
          </a>
          <a
            href="https://scl.ssfour.org/tertiary"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white p-3 hover:bg-[#E8EFFF] transition-colors text-center"
          >
            <div className="font-space text-[13px] font-bold text-[#111111]">Universities</div>
            <div className="text-[11px] text-[#1A56C4] font-semibold mt-0.5">Campus Network</div>
          </a>
        </div>
      </div>
    );
  }

  const activeToken = HANZINA_TOKENS[selectedTokenIdx] ?? HANZINA_TOKENS[2];

  return (
    <div className="rounded-[20px] bg-[#141926] text-white p-5 sm:p-6 space-y-4 shadow-[0_12px_32px_rgba(17,17,17,0.2)]">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-[#273352] text-[#93C5FD] font-hanzi font-bold text-sm flex items-center justify-center">
            汉
          </span>
          <span className="font-space text-[14px] font-bold">HanziNA Interactive Reader</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-pressed={pinyinOn}
            onClick={() => setPinyinOn((v) => !v)}
            className={`px-3 py-1.5 rounded-full text-[11px] font-bold cursor-pointer transition-colors ${
              pinyinOn ? "bg-[#1A56C4] text-white" : "bg-white/10 text-white/80 hover:bg-white/20"
            }`}
          >
            {pinyinOn ? "Pinyin On" : "Pinyin Off"}
          </button>
          <button
            type="button"
            aria-pressed={showTranslation}
            onClick={() => setShowTranslation((v) => !v)}
            className={`px-3 py-1.5 rounded-full text-[11px] font-bold cursor-pointer transition-colors ${
              showTranslation
                ? "bg-[#2A3754] text-[#FDBA74]"
                : "bg-white/10 text-white/75 hover:bg-white/20"
            }`}
          >
            {showTranslation ? "English On" : "English Off"}
          </button>
        </div>
      </div>

      <div className="rounded-2xl bg-[#1C2336] p-5 text-center space-y-3">
        <div className="flex flex-wrap items-center justify-center gap-1.5 leading-loose">
          {HANZINA_TOKENS.map((tok, idx) => {
            if (!tok.pinyin) {
              return (
                <span key={`${tok.hanzi}-${idx}`} className="font-hanzi text-[26px] text-white/70">
                  {tok.hanzi}
                </span>
              );
            }
            const isSelected = selectedTokenIdx === idx;
            return (
              <button
                key={`${tok.hanzi}-${idx}`}
                type="button"
                onClick={() => setSelectedTokenIdx(idx)}
                className={`inline-flex flex-col items-center px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-[#F37021]/25 text-[#FDBA74]"
                    : "hover:bg-white/10 text-white"
                }`}
              >
                {pinyinOn && (
                  <span className="text-[11px] font-medium text-[#93C5FD] leading-none mb-1">
                    {tok.pinyin}
                  </span>
                )}
                <span className="font-hanzi text-[26px] sm:text-[30px] font-bold leading-none">
                  {tok.hanzi}
                </span>
              </button>
            );
          })}
        </div>

        {activeToken.pinyin && (
          <div className="inline-flex items-center gap-2.5 rounded-xl bg-[#10141F] px-3.5 py-2 text-[13px]">
            <span className="font-hanzi font-bold text-white">{activeToken.hanzi}</span>
            <span className="font-semibold text-[#FDBA74]">{activeToken.pinyin}</span>
            <span className="text-white/75">{activeToken.english}</span>
          </div>
        )}
      </div>

      {showTranslation && (
        <p className="text-[13px] text-white/80 bg-white/5 rounded-xl px-4 py-2.5">
          &ldquo;In the beginning was the Word, and the Word was with God.&rdquo; — Click any
          character above to toggle its gloss.
        </p>
      )}
    </div>
  );
}

export function EcosystemShowcase({ activeId, onSelect }: EcosystemShowcaseProps) {
  const activeProduct = ECOSYSTEM_PRODUCTS[activeId];

  const handleTabKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = ECOSYSTEM_SHOWCASE_ORDER[(idx + 1) % ECOSYSTEM_SHOWCASE_ORDER.length];
      onSelect(next);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev =
        ECOSYSTEM_SHOWCASE_ORDER[
          (idx - 1 + ECOSYSTEM_SHOWCASE_ORDER.length) % ECOSYSTEM_SHOWCASE_ORDER.length
        ];
      onSelect(prev);
    }
  };

  return (
    <section
      id="ecosystem-showcase"
      className="w-full py-12 sm:py-16 bg-[#EBF1F8]"
      aria-label="SS4 Ecosystem Architecture Explorer"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12 space-y-8">
        <div className="max-w-[780px] space-y-2">
          <p className="font-space text-[12px] font-bold uppercase tracking-[0.08em] text-[#1A56C4]">
            LYCEON · SCL · HanziNA
          </p>
          <h2 className="font-space text-[26px] sm:text-[36px] font-black tracking-tight text-[#111111] leading-[1.12]">
            Inside the SS4 Ecosystem
          </h2>
          <p className="font-avenir text-[16px] text-[#444444] leading-relaxed">
            Explore how LYCEON (uniting SAS and SLM), SS4 Chess League (SCL), and HanziNA work
            together across competitive play, academic mastery, and focused reading.
          </p>
        </div>

        {/* Ecosystem Selector */}
        <div
          role="tablist"
          aria-label="Select SS4 ecosystem component"
          className="flex flex-wrap items-center gap-2 sm:gap-2.5"
        >
          {ECOSYSTEM_SHOWCASE_ORDER.map((id, idx) => {
            const item = ECOSYSTEM_PRODUCTS[id];
            const selected = activeId === id;

            return (
              <button
                key={id}
                id={`tab-${id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => onSelect(id)}
                onKeyDown={(e) => handleTabKeyDown(e, idx)}
                className={`px-4 py-2.5 rounded-full font-space text-[13px] sm:text-[14px] font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  selected
                    ? "bg-[#1A56C4] text-white shadow-[0_4px_14px_rgba(26,86,196,0.28)]"
                    : "bg-white text-[#222222] hover:bg-[#DCE6FF] hover:text-[#1A56C4]"
                }`}
              >
                <span>{item.shortName}</span>
                {id === "lyceon" && (
                  <span
                    className={`text-[11px] font-semibold hidden sm:inline ${
                      selected ? "text-white/85" : "text-[#64748B]"
                    }`}
                  >
                    · SAS + SLM
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Component Panel */}
        <div
          id={`panel-${activeProduct.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeProduct.id}`}
          className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-10 lg:p-12 shadow-[0_8px_32px_rgba(17,17,17,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
        >
          <div className="lg:col-span-5 space-y-5">
            <div className="font-space text-[12px] font-bold uppercase tracking-[0.08em] text-[#B84D00]">
              {activeProduct.roleLabel}
            </div>

            <div className="space-y-2">
              <h3 className="font-space text-[26px] sm:text-[32px] font-black text-[#111111] leading-[1.12]">
                {activeProduct.name}
              </h3>
              <p className="font-space text-[16px] font-bold text-[#1A56C4]">
                {activeProduct.tagline}
              </p>
            </div>

            <p className="font-avenir text-[15px] sm:text-[16px] text-[#444444] leading-relaxed">
              {activeProduct.description}
            </p>

            <ul className="space-y-2.5 text-[14px] text-[#333333] list-none p-0 m-0">
              {activeProduct.highlights.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 w-2 h-2 rounded-full bg-[#1A56C4] shrink-0"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {activeProduct.isExternal ? (
                <a
                  href={activeProduct.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="varsity-btn-primary"
                >
                  <span>{activeProduct.ctaText}</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </a>
              ) : (
                activeProduct.secondaryCtaHref &&
                activeProduct.secondaryCtaText && (
                  <a
                    href={activeProduct.secondaryCtaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="varsity-btn-primary"
                  >
                    <span>{activeProduct.secondaryCtaText}</span>
                    <ChevronRightIcon className="w-4 h-4" />
                  </a>
                )
              )}

              {activeProduct.isExternal &&
                activeProduct.secondaryCtaHref &&
                activeProduct.secondaryCtaText && (
                  <a
                    href={activeProduct.secondaryCtaHref}
                    target={activeProduct.secondaryCtaHref.startsWith("http") ? "_blank" : undefined}
                    rel={
                      activeProduct.secondaryCtaHref.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="varsity-btn-secondary"
                  >
                    <span>{activeProduct.secondaryCtaText}</span>
                  </a>
                )}
            </div>
          </div>

          <div className="lg:col-span-7">
            <ShowcaseStage id={activeProduct.id} />
          </div>
        </div>
      </div>
    </section>
  );
}
