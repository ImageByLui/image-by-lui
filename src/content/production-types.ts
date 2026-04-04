// =============================================================================
// Content type definitions — Production site
// =============================================================================

export interface Capability {
  number: string;
  title: string;
  description: string;
}

export interface ProductionContent {
  locale: "en" | "es";
  langToggle: { active: string; inactive: string; href: string };

  hero: {
    headline: string;
    headlineItalic: string;
  };

  services: {
    label: string;
    intro: string;
    capabilities: Capability[];
  };

  beat: string;

  portfolio: { label: string };
  credits: { label: string };
  industry: { label: string };

  rates: {
    label: string;
    /** Supports inline HTML: <strong> for price highlight */
    priceText: string;
    details: string[];
    bilingual: string;
  };

  contact: {
    /** Supports \\n for line breaks and <em> for italic */
    headline: string;
    whatsappLabel: string;
    whatsappUrl: string;
    emailLabel: string;
    emailUrl: string;
    instagram: string;
    instagramUrl: string;
  };

  footer: {
    tagline: string;
    crossLink: string;
    crossLinkSite: string;
    copyright: string;
  };

  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
}
