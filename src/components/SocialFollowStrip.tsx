import React from "react";
import Image from "next/image";
import Link from "next/link";

const SOCIAL_LINKS = [
  { label: "Follow SS4 on X", alt: "X", href: "#", icon: "/images/social-icons/X.svg", external: false },
  {
    label: "Follow SS4 on Instagram",
    alt: "Instagram",
    href: "#",
    icon: "/images/social-icons/instagram.svg",
    external: false,
  },
  { label: "Follow SS4 on TikTok", alt: "TikTok", href: "#", icon: "/images/social-icons/tiktok.svg", external: false },
  {
    label: "Follow SS4 on Facebook",
    alt: "Facebook",
    href: "#",
    icon: "/images/social-icons/facebook.svg",
    external: false,
  },
  {
    label: "Follow SS4 on YouTube",
    alt: "YouTube",
    href: "https://youtube.com/@sharedstudyschoolspace",
    icon: "/images/social-icons/youtube.svg",
    external: true,
  },
];

export function SocialFollowStrip() {
  return (
    <section className="w-full py-6" aria-label="Follow SS4">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12 flex items-center justify-start flex-wrap gap-4">
        <div className="bg-white rounded-full px-5 sm:px-6 py-2.5 shadow-[0_2px_12px_rgba(17,17,17,0.04)] flex items-center flex-wrap gap-3 sm:gap-4">
          <span className="font-space font-bold text-[13px] text-[#111111] uppercase tracking-wider mr-1">
            Follow SS4
          </span>

          {SOCIAL_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="w-8 h-8 rounded-full bg-[#111111] hover:bg-[#1A56C4] transition-colors flex items-center justify-center"
              aria-label={item.label}
            >
              <div className="relative w-4 h-4">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
