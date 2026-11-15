import React from "react";
import { HeaderNav } from "@/components/HeaderNav";
import { HeroBanner } from "@/components/HeroBanner";
import { QuickLinks } from "@/components/QuickLinks";
import { ProductCardGrid } from "@/components/ProductCardGrid";
import { MidPromoBanner } from "@/components/MidPromoBanner";
import { BusinessCardGrid } from "@/components/BusinessCardGrid";
import { SocialFollowStrip } from "@/components/SocialFollowStrip";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Header & Navigation */}
      <HeaderNav />

      {/* 2. Main Page Content */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* Hero Banner / Carousel */}
        <HeroBanner />

        {/* Quick Links Navigation Strip */}
        <QuickLinks />

        {/* Consumer Featured Products Grid */}
        <ProductCardGrid />

        {/* Full-width OneNote Promo Banner */}
        <MidPromoBanner />

        {/* Commercial & Business Solutions Grid */}
        <BusinessCardGrid />

        {/* Social Follow Bar */}
        <SocialFollowStrip />
      </main>

      {/* 3. Floating Scroll to Top Button */}
      <BackToTop />

      {/* 4. Enterprise Sitemap Footer */}
      <Footer />
    </div>
  );
}
