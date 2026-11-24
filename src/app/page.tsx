"use client";

import React, { useState } from "react";
import { HeaderNav } from "@/components/HeaderNav";
import { HeroBanner } from "@/components/HeroBanner";
import { QuickLinks } from "@/components/QuickLinks";
import { ProductCardGrid } from "@/components/ProductCardGrid";
import { MidPromoBanner } from "@/components/MidPromoBanner";
import { EcosystemShowcase } from "@/components/EcosystemShowcase";
import { BusinessCardGrid } from "@/components/BusinessCardGrid";
import { SocialFollowStrip } from "@/components/SocialFollowStrip";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";
import { EcosystemComponentId } from "@/data/ecosystem";

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState<EcosystemComponentId>("lyceon");

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F4F0]">
      <HeaderNav
        activeComponent={selectedComponent}
        onSelectComponent={setSelectedComponent}
      />

      <main className="flex-1 w-full overflow-x-clip">
        <HeroBanner />
        <QuickLinks onSelectComponent={setSelectedComponent} />
        <ProductCardGrid onSelectComponent={setSelectedComponent} />
        <MidPromoBanner />
        <EcosystemShowcase
          activeId={selectedComponent}
          onSelect={setSelectedComponent}
        />
        <BusinessCardGrid />
        <SocialFollowStrip />
      </main>

      <BackToTop />
      <Footer onSelectComponent={setSelectedComponent} />
    </div>
  );
}
