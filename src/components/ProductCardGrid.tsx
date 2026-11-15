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
    id: "card-schools",
    category: "SECONDARY DIRECTORY",
    title: "Nigeria Schools Across 36 States + FCT",
    description:
      "Explore thousands of verified secondary and K-12 schools from Lagos to Abuja with transparent location, type, and community verification.",
    ctaText: "Browse Secondary Schools",
    ctaHref: "#schools",
    imageSrc: "/images/start-student-with-dog.webp",
    imageAlt: "Student exploring Nigerian secondary schools on SS4",
  },
  {
    id: "card-tertiary",
    category: "TERTIARY INSTITUTIONS",
    title: "Premier Federal & Private Universities",
    description:
      "Discover top Nigerian universities including UNIUYO, Covenant, and UNN with verified department profiles, anthems, and academic missions.",
    ctaText: "Explore Universities",
    ctaHref: "#colleges",
    imageSrc: "/images/clay-1.webp",
    imageAlt: "Student exploring Nigerian universities on SS4",
  },
  {
    id: "card-tools",
    category: "SEARCH & COMPARISON",
    title: "Tools to Organize Your School Search",
    description:
      "We give you all the data to filter by state, curriculum, and size so you can build your personal academic shortlist with total confidence.",
    ctaText: "Start Exploring",
    ctaHref: "#search-tools",
    imageSrc: "/images/abby-1.webp",
    imageAlt: "Student using SS4 academic comparison and search tools",
  },
  {
    id: "card-stories",
    category: "STUDENT EXPERIENCES",
    title: "Real Academic Stories & Guidance",
    description:
      "Hear from students and families navigating school choices. Get honest perspectives to find the academic environment where you will thrive.",
    ctaText: "Read Student Stories",
    ctaHref: "#stories",
    imageSrc: "/images/dayna-1.webp",
    imageAlt: "Parent and student sharing their academic journey on SS4",
  },
];

export function ProductCardGrid() {
  return (
    <section id="schools" className="w-full py-8 sm:py-12" aria-label="Featured academic discovery">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="varsity-badge-primary mb-2">
              <span>ACADEMIC DISCOVERY</span>
            </div>
            <h2 className="font-space text-[26px] sm:text-[34px] font-black tracking-tight text-[#111111]">
              Find the School That Fits You Best
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
