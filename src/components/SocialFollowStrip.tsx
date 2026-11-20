import React from "react";
import Image from "next/image";
import Link from "next/link";

export function SocialFollowStrip() {
  return (
    <section className="w-full py-6" aria-label="Follow SS4">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12 flex items-center justify-start flex-wrap gap-4">
        <div className="bg-white border border-[#EAEAEA] rounded-full px-6 py-2.5 shadow-xs flex items-center gap-4">
          <span className="font-space font-bold text-[13px] text-[#111111] uppercase tracking-wider">
            Follow SS4
          </span>

          <div className="h-4 w-px bg-[#EAEAEA]" />

          {/* X / Twitter */}
          <Link
            href="#"
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
            href="#"
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
            href="#"
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
            href="#"
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
            href="https://youtube.com/@sharedstudyschoolspace"
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
      </div>
    </section>
  );
}
