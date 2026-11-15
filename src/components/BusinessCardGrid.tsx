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
    id: "biz-partner",
    category: "PARTNER ONBOARDING",
    title: "Official Institutional Registration",
    description:
      "Register your secondary or tertiary institution with an official SS4 partner code (SS4-PRT) synchronized directly via Google Sheets.",
    ctaText: "Register Your School",
    ctaHref: "#partners",
    imageSrc: "/images/asset-8.webp",
    imageAlt: "School administrator onboarding an institution on SS4",
  },
  {
    id: "biz-directory",
    category: "DIRECTORY MANAGEMENT",
    title: "Verified Campus Profiles & Anthems",
    description:
      "Maintain official school bios, faculties, departments, and admissions criteria directly accessible to thousands of prospective students.",
    ctaText: "Manage School Profile",
    ctaHref: "#partners",
    imageSrc: "/images/asset-10.webp",
    imageAlt: "Educators managing campus directories and departmental profiles",
  },
  {
    id: "biz-intake",
    category: "ADMISSIONS GATEWAY",
    title: "Direct Enrollment & Cutoff Benchmark",
    description:
      "Set minimum academic cutoffs, review qualified applicants without paper bottlenecks, and connect with motivated students across Nigeria.",
    ctaText: "Explore Admissions Portal",
    ctaHref: "#admissions",
    imageSrc: "/images/asset-11.webp",
    imageAlt: "Academic administrator reviewing student admissions cutoffs",
  },
  {
    id: "biz-states",
    category: "36 STATES NETWORK",
    title: "Nationwide Educational Visibility",
    description:
      "Expand your institution's presence across all 36 states and the Federal Capital Territory with indexed, searchable scholastic records.",
    ctaText: "View State Coverage",
    ctaHref: "#states",
    imageSrc: "/images/asset-9.webp",
    imageAlt: "Interactive map and analytics of academic institutions across Nigeria",
  },
];

export function BusinessCardGrid() {
  return (
    <section id="partners" className="w-full py-8 sm:py-12" aria-label="For institutional partners and educators">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="varsity-badge-accent mb-2">
              <span>INSTITUTIONAL NETWORK</span>
            </div>
            <h2 className="font-space text-[26px] sm:text-[34px] font-black tracking-tight text-[#111111]">
              For Schools, Colleges &amp; Educators
            </h2>
          </div>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
