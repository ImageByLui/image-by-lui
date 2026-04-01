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
        badge: "Transformation",
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
        priceNote: "",
        ctaText: "See the full journey →",
        ctaHref: "/services/image-consulting",
      },
    ],
  },

  testimonial: {
    quote:
      "Lu helped me with my outfit and the result was perfect. She doesn't just have great taste — she knows exactly how to make you feel comfortable and confident in what you're wearing. Loved it.",
    name: "Angélica",
    initials: "AG",
    title: "Client, Miami",
    photo: "/images/testimonials/ap.jpg",
    handle: "@angelicagp8",
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

  // ===========================================================================
  // Desktop-specific overrides — LUI-DESK-002
  // ===========================================================================
  desktop: {
    serviceCards: [
      {
        variant: "occasion",
        image: "/images/services/occasion-card-shopping.png",
        imagePosition: "center 60%",
        label: "EVENT-SPECIFIC",
        title: "Occasion Styling",
        description:
          "You have something important ahead. We analyze the event, your role, and what you need to communicate — so you walk in without a second thought.",
        inclusions: [
          "Wardrobe curation from what you own",
          "New pieces sourced if needed",
          "Complete look with styling notes",
        ],
        detailLine: "Essential · Complete · VIP — three levels from $250",
        price: "From $250",
        linkText: "See 3 packages →",
        linkHref: "/services/occasion-styling",
      },
      {
        variant: "premium",
        image: "/images/services/ic-card-consulting.jpg",
        imagePosition: "center 25%",
        label: "COMPLETE TRANSFORMATION",
        title: "Image Consulting",
        description:
          "Not for one event — for the next chapter. A complete reinvention of your professional image, built on science and delivered across 20+ hours of one-on-one work.",
        inclusions: [
          "Color analysis & personal palette",
          "Closet detox & wardrobe rebuild",
          "Personal shopping with Lu",
          "Styled photo session & lookbook",
        ],
        detailLine: "20+ hours · 7 deliverables you keep forever",
        price: "$1,500",
        priceStrikethrough: "$2,000",
        linkText: "See the full journey →",
        linkHref: "/services/image-consulting",
      },
    ],
    faqPreview: {
      heading: "Common questions",
      items: [
        {
          question: "What if I'm not sure which service is right for me?",
          answer:
            "Start with Your Power Palette — a free 20-minute color analysis. It gives Lu everything she needs to recommend the right path for you.",
        },
        {
          question: "Where do sessions take place?",
          answer:
            "In-person across Miami-Dade — at your home for closet work, curated stores for shopping, and a professional setting for analysis and photos. Virtual options available.",
        },
        {
          question: "Do you work in Spanish?",
          answer:
            "Every service is available entirely in Spanish — from the initial consultation through all deliverables. You never need to switch languages.",
        },
      ],
      linkText: "See all questions →",
      linkHref: "/faq",
    },
    bottomCta: {
      heading: "Not sure where to begin?",
      description:
        "Your Power Palette is complimentary, takes 20 minutes, and helps you understand which service is right for you. No commitment — just clarity.",
      primaryCta: {
        text: "BOOK YOUR FREE COLOR ANALYSIS",
        href: getCalendlyUrl("powerPalette"),
        external: true,
      },
      secondaryText: "Or message Lu on WhatsApp",
      secondaryLinkHref: getWhatsAppUrl("en"),
    },
  },
};
