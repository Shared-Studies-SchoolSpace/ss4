export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface QuickLinkItem {
  id: string;
  label: string;
  icon: "windows" | "surface" | "m365" | "xbox";
  href: string;
}

export interface ProductCard {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  imageUrl: string;
  imageAlt: string;
  badge?: string;
}

export interface HeroSlide {
  id: string;
  badge?: string;
  title: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  imageUrl: string;
  imageAlt: string;
}

export interface FooterColumn {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}
