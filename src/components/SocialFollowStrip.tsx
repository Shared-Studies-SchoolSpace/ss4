import React from "react";
import Image from "next/image";
import Link from "next/link";

export function SocialFollowStrip() {
  return (
    <section className="w-full py-6" aria-label="Follow Microsoft">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12 flex items-center">
        <div className="bg-white border border-[#EAEAEA] rounded-full px-6 py-2.5 shadow-xs flex items-center gap-4">
          <span className="font-space font-bold text-[13px] text-[#111111] uppercase tracking-wider">
            Follow Microsoft
          </span>
          
          <div className="h-4 w-px bg-[#EAEAEA]" />

          {/* Facebook */}
          <Link
            href="https://www.facebook.com/Microsoft"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform p-1"
            aria-label="Follow Microsoft on Facebook"
          >
            <svg width="22" height="22" viewBox="0 0 32 32" fill="#1877F2">
              <circle cx="16" cy="16" r="16" />
              <path
                d="M18.5 16.5H21L21.5 13H18.5V11C18.5 10.1 18.9 9.5 20.3 9.5H21.5V6.3C20.8 6.2 19.8 6 18.8 6C16.2 6 14.5 7.6 14.5 10.6V13H11.5V16.5H14.5V25H18.5V16.5Z"
                fill="white"
              />
            </svg>
          </Link>

          {/* X */}
          <Link
            href="https://twitter.com/Microsoft"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform p-1"
            aria-label="Follow Microsoft on X"
          >
            <div className="relative w-5 h-5">
              <Image
                src="/images/asset-12.webp"
                alt="X"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/company/microsoft"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform p-1"
            aria-label="Follow Microsoft on LinkedIn"
          >
            <div className="relative w-5 h-5">
              <Image
                src="/images/asset-13.webp"
                alt="LinkedIn"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* YouTube */}
          <Link
            href="https://www.youtube.com/user/Microsoft"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform p-1"
            aria-label="Follow Microsoft on YouTube"
          >
            <svg width="22" height="22" viewBox="0 0 32 32" fill="#FF0000">
              <circle cx="16" cy="16" r="16" />
              <path d="M13 11.5L21 16L13 20.5V11.5Z" fill="white" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
