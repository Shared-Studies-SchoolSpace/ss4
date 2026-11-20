import React from "react";
import Image from "next/image";

export function SS4Logo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-lg bg-white px-1.5 py-0.5 border border-[#1A56C4]/15 shadow-xs select-none ${className}`}
    >
      <Image
        src="/images/ss4_logo_without_text.jpg"
        alt="SS4 Logo"
        width={92}
        height={36}
        className="w-[92px] h-[36px] aspect-[948/369] object-contain"
        priority
      />
    </div>
  );
}

export function UserIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="6" r="3.5" />
      <path d="M3.5 17C3.5 13.5 6.5 11.5 10 11.5C13.5 11.5 16.5 13.5 16.5 17" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 4.5L6 8L9.5 4.5" />
    </svg>
  );
}

export function ChevronRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3.5L10.5 8L6 12.5" />
    </svg>
  );
}

export function ArrowUpIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 16V4M10 4L5 9M10 4L15 9" />
    </svg>
  );
}
