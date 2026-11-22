import React from "react";
import { HeaderNav } from "@/components/HeaderNav";
import { HeroBanner } from "@/components/HeroBanner";
import { QuickLinks } from "@/components/QuickLinks";
import { ProductCardGrid } from "@/components/ProductCardGrid";
import { MidPromoBanner } from "@/components/MidPromoBanner";
import { BusinessCardGrid } from "@/components/BusinessCardGrid";
import { LyceonAnnouncements } from "@/components/LyceonAnnouncements";
import { SocialFollowStrip } from "@/components/SocialFollowStrip";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F4F0]">
      <HeaderNav />

      <main className="flex-1 w-full overflow-x-hidden">
        <HeroBanner />
        <QuickLinks />
        <ProductCardGrid />
        <MidPromoBanner />
        <BusinessCardGrid />
        <LyceonAnnouncements />
        <SocialFollowStrip />
      </main>

      <BackToTop />
      <Footer />
    </div>
  );
}
