import React from "react";
import Image from "next/image";

export function SS4Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#1A56C4]/20 shadow-xs">
        <Image
          src="/images/ss4_logo_without_text.jpg"
          alt="SS4 Logo"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-space font-black text-[20px] tracking-tight text-[#111111] leading-none">
          SS<span className="text-[#1A56C4]">4</span>
        </span>
        <span className="font-space text-[9px] font-bold text-[#64748B] tracking-wider uppercase leading-tight">
          Ecosystem for Academia
        </span>
      </div>
    </div>
  );
}

export function MicrosoftLogo({ className = "h-5 w-auto" }: { className?: string }) {
  return <SS4Logo className={className} />;
}

export function WindowsIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6.5L17.5 4.6V18.5H4V6.5Z" fill="#0078D4" />
      <path d="M19.5 4.3L36 2V18.5H19.5V4.3Z" fill="#0078D4" />
      <path d="M4 20.5H17.5V34.5L4 32.6V20.5Z" fill="#0078D4" />
      <path d="M19.5 20.5H36V37L19.5 34.7V20.5Z" fill="#0078D4" />
    </svg>
  );
}

export function SurfaceIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="6" width="26" height="20" rx="1.5" stroke="#0078D4" strokeWidth="2.5" />
      <path d="M14 26L11 33H29L26 26" stroke="#0078D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="16" r="1.5" fill="#0078D4" />
    </svg>
  );
}

export function M365Icon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="7" width="11" height="11" rx="2" fill="#D83B01" />
      <rect x="22" y="7" width="11" height="11" rx="2" fill="#0078D4" />
      <rect x="7" y="22" width="11" height="11" rx="2" fill="#107C41" />
      <rect x="22" y="22" width="11" height="11" rx="2" fill="#80397B" />
    </svg>
  );
}

export function XboxIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="17" stroke="#107C41" strokeWidth="2.5" fill="none" />
      <path d="M11 11C15 17 25 17 29 11C24 16 16 16 11 11Z" fill="#107C41" />
      <path d="M12 28C16 23 20 20 20 16C20 20 24 23 28 28C22 31 18 31 12 28Z" fill="#107C41" />
    </svg>
  );
}

export function SearchIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8.5" cy="8.5" r="5.5" />
      <line x1="12.5" y1="12.5" x2="17" y2="17" />
    </svg>
  );
}

export function CartIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7" cy="17" r="1.2" fill="currentColor" />
      <circle cx="15" cy="17" r="1.2" fill="currentColor" />
      <path d="M2 3H4L6.5 13H16L18 6H5" />
    </svg>
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

export function GlobeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="8" />
      <ellipse cx="10" cy="10" rx="3.5" ry="8" />
      <line x1="2" y1="10" x2="18" y2="10" />
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

export function PrivacyChoicesIcon({ className = "w-7 h-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1H19L27 6L19 11H1V1Z" fill="#005A9C" />
      <path d="M6 3.5L9.5 8.5L13 3.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="21" cy="6" r="2.5" fill="white" />
    </svg>
  );
}
