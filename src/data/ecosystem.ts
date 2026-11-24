export type EcosystemComponentId = "lyceon" | "scl" | "hanzina";

export interface EcosystemProductSpec {
  id: EcosystemComponentId;
  name: string;
  shortName: string;
  roleLabel: string;
  tagline: string;
  description: string;
  highlights: string[];
  ctaText: string;
  ctaHref: string;
  isExternal: boolean;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  accentHex: string;
}

export const ECOSYSTEM_PRODUCTS: Record<EcosystemComponentId, EcosystemProductSpec> = {
  lyceon: {
    id: "lyceon",
    name: "LYCEON",
    shortName: "LYCEON",
    roleLabel: "SAS + SLM · Flagship Learning & Duel Arena",
    tagline: "Learn it. Then prove it.",
    description:
      "LYCEON brings together the SS4 Assessment Series (SAS) and the SS4 Language Model (SLM) in one unified platform—combining language puzzles and spaced review with academic science and certification assessments in live 1v1 rated duels.",
    highlights: [
      "Unifies SLM languages (English, Chinese, Yorùbá, Spanish, French, Japanese) with SAS assessments (Physics, Chemistry, CompTIA Tech+)",
      "Server-authoritative clocks across Speed (3–5s), Classic (8–12s), and Long (20–90s) paces",
      "Dual Glicko-2 ratings (Mastery and Arena), Campus Leagues, review decks, teams, and LYCEON TV",
    ],
    ctaText: "Explore LYCEON",
    ctaHref: "https://lyceon.ssfour.org",
    isExternal: true,
    secondaryCtaText: "See the Ecosystem",
    secondaryCtaHref: "#ecosystem-cards",
    accentHex: "#F37021",
  },
  scl: {
    id: "scl",
    name: "SS4 Chess League (SCL)",
    shortName: "SCL",
    roleLabel: "Competitive Chess · Many Institutions, One Space",
    tagline: "Many Institutions, One Space.",
    description:
      "Nigeria's collegiate chess network connecting university teams, departments, and players across Daily Leagues, Monthly Tournaments, and the Varsity Championship.",
    highlights: [
      "theBOARDGAMES hub hosting Daily League arenas and Monthly Tournaments",
      "15-university Season 2 Varsity Championship squads competing on Lichess and Chess.com",
      "Verified tertiary institution directories and departmental contender rosters",
    ],
    ctaText: "Explore SCL",
    ctaHref: "https://scl.ssfour.org",
    isExternal: true,
    secondaryCtaText: "Varsity Championship",
    secondaryCtaHref: "https://scl.ssfour.org/chess-league/varsity",
    accentHex: "#1A56C4",
  },
  hanzina: {
    id: "hanzina",
    name: "HanziNA",
    shortName: "HanziNA",
    roleLabel: "Specialist Workspace · Chinese Reading",
    tagline: "Unravel the characters.",
    description:
      "A learner-controlled Chinese reading environment where Hanzi characters come first, Pinyin is toggleable, and word glosses appear only on demand.",
    highlights: [
      "Progressive disclosure: read authentic Chinese text without intrusive forced rubies",
      "Occurrence-order word mapping (Hanzi(pinyin, english)) with instant character popovers",
      "AI-assisted segmentation and full-passage English translation pane",
    ],
    ctaText: "Explore HanziNA",
    ctaHref: "#ecosystem-showcase",
    isExternal: false,
    secondaryCtaText: "Chinese Track on LYCEON",
    secondaryCtaHref: "https://lyceon.ssfour.org/languages",
    accentHex: "#B84D00",
  },
};

export const ECOSYSTEM_SHOWCASE_ORDER: EcosystemComponentId[] = ["lyceon", "scl", "hanzina"];

export interface NavEntry {
  id: string;
  label: string;
  href: string;
  isExternal: boolean;
  componentId?: EcosystemComponentId;
}

export const NAV_ITEMS: NavEntry[] = [
  { id: "lyceon", label: "LYCEON", href: "https://lyceon.ssfour.org", isExternal: true, componentId: "lyceon" },
  { id: "scl", label: "SCL", href: "https://scl.ssfour.org", isExternal: true, componentId: "scl" },
  { id: "hanzina", label: "HanziNA", href: "#ecosystem-showcase", isExternal: false, componentId: "hanzina" },
  { id: "partners", label: "Partners", href: "https://scl.ssfour.org/partners", isExternal: true },
];
