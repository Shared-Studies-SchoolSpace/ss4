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
    id: "biz-1",
    category: "ENTERPRISE AI",
    title: "Microsoft 365 Copilot",
    description:
      "Save time and focus on the things that matter most with enterprise-grade AI integrated directly into your workplace tools.",
    ctaText: "Discover Copilot",
    ctaHref: "#",
    imageSrc: "/images/asset-8.webp",
    imageAlt: "A copilot interface stating how can I help you",
  },
  {
    id: "biz-2",
    category: "DEVELOPER SUITE",
    title: "Visual Studio 2026",
    description:
      "Get the most comprehensive IDE for .NET and C++ developers on Windows for building across web, cloud, desktop, and mobile.",
    ctaText: "Download Visual Studio",
    ctaHref: "#",
    imageSrc: "/images/asset-9.webp",
    imageAlt: "A close-up of a Visual Studio coding environment",
  },
  {
    id: "biz-3",
    category: "COLLABORATION HUB",
    title: "Get Microsoft Teams for business",
    description:
      "Online meetings, team chat, real-time channels collaboration, and shared cloud storage – all in one unified workspace.",
    ctaText: "Find business plans",
    ctaHref: "#",
    imageSrc: "/images/asset-10.webp",
    imageAlt: "A Microsoft Teams commercial collaboration meeting",
  },
  {
    id: "biz-4",
    category: "CLOUD COMPUTING",
    title: "Welcome to Windows 365 Cloud PC",
    description:
      "Securely stream your complete, personalised Windows experience from the Microsoft Cloud to any device, anywhere.",
    ctaText: "Deploy Cloud PC",
    ctaHref: "#",
    imageSrc: "/images/asset-11.webp",
    imageAlt: "A woman accessing Windows 365 Cloud services on her device",
  },
];

export function BusinessCardGrid() {
  return (
    <section className="w-full py-8 sm:py-12" aria-label="For business">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="varsity-badge-accent mb-2">
              <span>COMMERCIAL DIVISION</span>
            </div>
            <h2 className="font-space text-[26px] sm:text-[34px] font-black tracking-tight text-[#111111]">
              For Business &amp; Enterprise
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
