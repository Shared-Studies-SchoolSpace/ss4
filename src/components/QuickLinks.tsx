import React from "react";
import { Compass, Trophy, BookOpen, Handshake } from "lucide-react";
import { EcosystemComponentId } from "@/data/ecosystem";

interface QuickLinksProps {
  onSelectComponent?: (id: EcosystemComponentId) => void;
}

const QUICK_LINKS = [
  {
    id: "ql-lyceon",
    label: "Launch LYCEON",
    sublabel: "lyceon.ssfour.org · SAS + SLM",
    href: "https://lyceon.ssfour.org",
    isExternal: true,
    icon: Compass,
  },
  {
    id: "ql-scl",
    label: "SS4 Chess League",
    sublabel: "scl.ssfour.org",
    href: "https://scl.ssfour.org",
    isExternal: true,
    icon: Trophy,
  },
  {
    id: "ql-hanzina",
    label: "HanziNA Reader",
    sublabel: "Chinese Reading Workspace",
    href: "#ecosystem-showcase",
    isExternal: false,
    icon: BookOpen,
    componentId: "hanzina" as EcosystemComponentId,
  },
  {
    id: "ql-partners",
    label: "SS4 Partners",
    sublabel: "Institutions & Sponsors",
    href: "https://scl.ssfour.org/partners",
    isExternal: true,
    icon: Handshake,
  },
];

export function QuickLinks({ onSelectComponent }: QuickLinksProps) {
  return (
    <section className="w-full py-4 sm:py-6" aria-label="Quick SS4 Ecosystem Links">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {QUICK_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  if (!item.isExternal && item.componentId && onSelectComponent) {
                    e.preventDefault();
                    onSelectComponent(item.componentId);
                    document
                      .getElementById("ecosystem-showcase")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="group flex flex-col items-center justify-center p-5 sm:p-6 bg-white rounded-[20px] shadow-[0_2px_12px_rgba(17,17,17,0.04)] hover:shadow-[0_10px_28px_rgba(17,17,17,0.08)] transition-all duration-200 text-center"
              >
                <div className="p-3 bg-[#F6F4F0] group-hover:bg-[#E8EFFF] rounded-[16px] transition-colors mb-3">
                  <Icon className="w-6 h-6 text-[#1A56C4]" aria-hidden="true" />
                </div>
                <span className="font-space text-[14px] sm:text-[15px] font-bold text-[#111111] group-hover:text-[#1A56C4] group-hover:underline underline-offset-4 transition-colors leading-snug">
                  {item.label}
                </span>
                <span className="text-[12px] text-[#64748B] mt-0.5">{item.sublabel}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
