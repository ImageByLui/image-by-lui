import type { ServicesOverviewContent } from "@/types/content";
import { getCalendlyUrl, getWhatsAppUrl } from "@/config/site.config";

// =============================================================================
// Services Overview Content — English (V6 — Mockup Redesign)
// =============================================================================
// All copy from the approved A1-DEV spec and locked mockup.
// This file REPLACES the old services.ts for the /services route.
// The old services.ts is kept as services-v5.ts for rollback reference.
// =============================================================================

export const servicesOverviewContent: ServicesOverviewContent = {
  hero: {
    headline: "Your image speaks before you do.",
    description:
      "Whether you have an event ahead or want a complete reinvention of your professional presence — we start with diagnosis, not assumptions.",
  },

  freeSession: {
    imageAlt:
      "Lu performing a color analysis session with Pantone drapes in Miami",
    title: "Your Power Palette",
    subtitle: "Complimentary session",
    description:
      "In 20 minutes, we identify your natural undertone and reveal the colors that make your features come alive.",
    deliverables: [
      { label: "Undertone", sublabel: "analysis" },
      { label: "5 power colors", sublabel: "identified" },
      { label: "Color card", sublabel: "delivered" },
    ],
    cta: {
      text: "DISCOVER YOUR COLORS",
      href: getCalendlyUrl("powerPalette"),
      external: true,
    },
    footnote: "Virtual or in-person · The entry point to both services",
  },

  trustLine: {
    name: "Lu · Image Consultant",
    credentials:
      "Certified colorimetry specialist · Bilingual EN/ES · Miami",
  },

  selector: {
    heading: "Which sounds like you?",
    subheading: "Tap into the service that fits your need",
    cards: [
      {
        badge: "Event-specific",
        name: "Occasion Styling",
        tags: ["Weddings", "Galas", "Keynotes", "Interviews"],
        description:
          "You have something important ahead. We analyze the event, your role, and what you need to communicate — so you walk in without a second thought.",
        imageAlt:
          "Client styled for a professional event by Image by LUI Miami",
        accentColor: "champagne",
        price: "From $250",
        ctaText: "See 3 packages →",
        ctaHref: "/services/occasion-styling",
      },
      {
        badge: "FULL transformation",
        name: "Image Consulting",
        tags: ["Color", "Closet", "Shopping", "Photos"],
        description:
          "Not for one event — for the next chapter. A complete reinvention of your professional image, built on science and delivered across 20+ hours of one-on-one work.",
        imageAlt:
          "Lu reviewing a client diagnostic profile during image consulting",
        accentColor: "gold",
        isPremium: true,
        price: "$1,500",
        priceStrikethrough: "$2,000",
        priceNote: "Introductory rate · limited availability",
        ctaText: "See the full journey →",
        ctaHref: "/services/image-consulting",
      },
    ],
  },

  testimonial: {
    quote:
      "I was preparing for a major listing presentation and needed to look like the agent they'd trust with their home. Lu didn't just find me an outfit — she gave me a strategy. I won the listing.",
    name: "C.L.",
    initials: "CL",
    title: "Real Estate Agent, Miami",
  },

  bottomCta: {
    heading: "Not sure where to begin?",
    description:
      "Your Power Palette is complimentary, takes 20 minutes, and helps you understand which service aligns with where you are right now. No commitment — just clarity.",
    primaryCta: {
      text: "MESSAGE LU ON WHATSAPP",
      href: getWhatsAppUrl("en"),
      external: true,
    },
    secondaryText: "Or",
    secondaryLinkText: "discover your colors",
    secondaryLinkHref: getCalendlyUrl("powerPalette"),
  },

  stickyBar: {
    text: "Free color analysis",
    subtext: "· 20 min",
    href: getCalendlyUrl("powerPalette"),
  },

  seo: {
    title: "Image Consulting & Styling in Miami | Image by LUI",
    description:
      "Diagnostic image consulting and event styling for professionals in Miami. Bilingual EN/ES. Complimentary 20-min color analysis.",
    ogImage: "/og/services-overview.jpg",
  },
};
