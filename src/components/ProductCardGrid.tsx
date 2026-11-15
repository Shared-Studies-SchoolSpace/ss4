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
    id: "card-1",
    category: "OS & GAMING",
    title: "Designed for life today – and tomorrow",
    description:
      "The next generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love.",
    ctaText: "Check PC compatibility",
    ctaHref: "#",
    imageSrc: "/images/asset-3.webp",
    imageAlt: "Windows 11 on a modern laptop device",
  },
  {
    id: "card-2",
    category: "BROWSER & PRIVACY",
    title: "Microsoft Edge",
    description:
      "World-class performance with more privacy, more productivity and more value built right into your daily browsing experience.",
    ctaText: "Download Edge",
    ctaHref: "#",
    imageSrc: "/images/asset-5.webp",
    imageAlt: "A landscape with the Microsoft Edge logo hovering over water",
  },
  {
    id: "card-3",
    category: "CLOUD STORAGE",
    title: "Microsoft OneDrive",
    description:
      "Safely backup and secure your essential files, documents and photos to OneDrive with seamless access across all your devices.",
    ctaText: "Explore OneDrive",
    ctaHref: "#",
    imageSrc: "/images/asset-6.webp",
    imageAlt: "A user accessing cloud storage via OneDrive",
  },
  {
    id: "card-4",
    category: "DESKTOP AMBIENCE",
    title: "Organise with Bing Wallpaper",
    description:
      "Explore the world one breathtaking photograph at a time with automatically updating high-definition imagery on your desktop.",
    ctaText: "Install wallpaper app",
    ctaHref: "#",
    imageSrc: "/images/asset-4.webp",
    imageAlt: "A laptop displaying a colourful seascape from Bing Wallpaper",
  },
];

export function ProductCardGrid() {
  return (
    <section className="w-full py-8 sm:py-12" aria-label="Featured consumer products">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="varsity-badge-primary mb-2">
              <span>CONSUMER ECOSYSTEM</span>
            </div>
            <h2 className="font-space text-[26px] sm:text-[34px] font-black tracking-tight text-[#111111]">
              Engineered for Everyday Excellence
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
