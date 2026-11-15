import React from "react";
import Image from "next/image";
import Link from "next/link";

export function SocialFollowStrip() {
  return (
    <section className="w-full py-6" aria-label="Follow SS4">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12 flex items-center justify-between flex-wrap gap-4">
        <div className="bg-white border border-[#EAEAEA] rounded-full px-6 py-2.5 shadow-xs flex items-center gap-4">
          <span className="font-space font-bold text-[13px] text-[#111111] uppercase tracking-wider">
            Follow SS4
          </span>
          
          <div className="h-4 w-px bg-[#EAEAEA]" />

          {/* X / Twitter */}
          <Link
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform p-1"
            aria-label="Follow SS4 on X"
          >
            <div className="relative w-5 h-5">
              <Image
                src="/images/social-icons/X.svg"
                alt="X"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Instagram */}
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform p-1"
            aria-label="Follow SS4 on Instagram"
          >
            <div className="relative w-5 h-5">
              <Image
                src="/images/social-icons/instagram.svg"
                alt="Instagram"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* TikTok */}
          <Link
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform p-1"
            aria-label="Follow SS4 on TikTok"
          >
            <div className="relative w-5 h-5">
              <Image
                src="/images/social-icons/tiktok.svg"
                alt="TikTok"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Facebook */}
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform p-1"
            aria-label="Follow SS4 on Facebook"
          >
            <div className="relative w-5 h-5">
              <Image
                src="/images/social-icons/facebook.svg"
                alt="Facebook"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* YouTube */}
          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform p-1"
            aria-label="Follow SS4 on YouTube"
          >
            <div className="relative w-5 h-5">
              <Image
                src="/images/social-icons/youtube.svg"
                alt="YouTube"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Community Mobile App CTA badge */}
        <div className="hidden sm:flex items-center gap-3 bg-white border border-[#EAEAEA] rounded-full px-5 py-2 shadow-xs">
          <span className="font-space text-xs font-bold text-[#64748B] uppercase tracking-wider">
            SS4 Mobile
          </span>
          <div className="relative w-28 h-7">
            <Image
              src="/images/app-cta/Get_it_on_Google_play.png"
              alt="Get it on Google Play"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
