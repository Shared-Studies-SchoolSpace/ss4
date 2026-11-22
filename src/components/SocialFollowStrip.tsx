import React from "react";
import Image from "next/image";
import Link from "next/link";

export function SocialFollowStrip() {
  return (
    <section className="w-full py-6" aria-label="Follow SS4">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12 flex items-center justify-start flex-wrap gap-4">
        <div className="bg-white rounded-full px-6 py-2.5 shadow-[0_2px_12px_rgba(17,17,17,0.04)] flex items-center gap-5">
          <span className="font-space font-bold text-[13px] text-[#111111] uppercase tracking-wider">
            Follow SS4
          </span>

          <Link
            href="#"
            className="opacity-80 hover:opacity-100 transition-opacity p-1"
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

          <Link
            href="#"
            className="opacity-80 hover:opacity-100 transition-opacity p-1"
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

          <Link
            href="#"
            className="opacity-80 hover:opacity-100 transition-opacity p-1"
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

          <Link
            href="#"
            className="opacity-80 hover:opacity-100 transition-opacity p-1"
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

          <Link
            href="https://youtube.com/@sharedstudyschoolspace"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition-opacity p-1"
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
