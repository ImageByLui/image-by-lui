// =============================================================================
// ENGLISH COPY — Production Site
// =============================================================================
// All website copy for the EN locale. Edit text here — not in components.
// =============================================================================

import type { ProductionContent } from "./production-types";

const en: ProductionContent = {
  locale: "en",
  langToggle: { active: "EN", inactive: "ES", href: "/production/es" },

  hero: {
    headline: "Production\nStyling.",
    headlineItalic: "Concept to Final Frame.",
  },

  services: {
    label: "Services",
    intro:
      "Full styling direction from creative concept through on-set execution. For brands and production teams who need wardrobe handled right.",
    capabilities: [
      {
        number: "01",
        title: "Creative Conceptualization",
        description:
          "Styling concept for your brand, developed with your creative team.",
      },
      {
        number: "02",
        title: "Garment & Accessory Curation",
        description:
          "Wardrobe builds from designers and showrooms. Every look tied to the brief.",
      },
      {
        number: "03",
        title: "On-Set Presence",
        description:
          "Fitting, look changes, real-time adjustments. Visual continuity across every frame.",
      },
      {
        number: "04",
        title: "Post-Production Review",
        description:
          "Aesthetic review of final selects. Ensuring styling holds in the finished product.",
      },
    ],
  },

  beat: "The work speaks.",

  portfolio: { label: "On Set" },
  credits: { label: "Production Credits" },
  industry: { label: "Industry" },

  rates: {
    label: "Rates",
    priceText:
      "Projects start at <strong>$800</strong> for a half-day production. Campaign styling and multi-day work scoped individually.",
    details: [
      "Currently accepting bookings in Miami-Dade.",
      "Travel available for multi-day engagements.",
    ],
    bilingual: "Bilingual: English & Spanish",
  },

  contact: {
    headline: "Discuss your project\nwith <em>Lu.</em>",
    whatsappLabel: "WhatsApp",
    whatsappUrl:
      "https://wa.me/573148137078?text=Hi%20Lu%2C%20I'd%20like%20to%20discuss%20a%20production%20project%20with%20you.",
    emailLabel: "lu@imagebylui.com",
    emailUrl: "mailto:lu@imagebylui.com?subject=Production%20Inquiry",
    instagram: "@imagebylui",
    instagramUrl: "https://instagram.com/imagebylui",
  },

  footer: {
    tagline: "Production Styling · Miami",
    crossLink: "Personal image consulting →",
    crossLinkSite: "imagebylui.com",
    copyright: "© 2026 Image by LUI. All rights reserved.",
  },

  seo: {
    title: "Production Styling Miami | Image by LUI",
    description:
      "Editorial and commercial styling direction in Miami. Concept to final frame. Available for campaigns, fashion shows, and production work.",
    ogTitle: "Production Styling | Image by LUI",
    ogDescription:
      "Editorial and commercial styling direction. Miami-based, available across the Americas.",
  },
};

export default en;
