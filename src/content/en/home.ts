import type { HomeContent } from "@/types/content";
import { getCalendlyUrl } from "@/config/site.config";
import { siteConfig } from "@/config/site.config";

// =============================================================================
// Homepage Content — English (V6 — Final Approved)
// =============================================================================
// Changes from V4:
//   - Hero subtitle: aspirational serif italic, not informational
//   - CTA: "DISCOVER YOUR COLORS" not "DISCOVER YOUR POWER PALETTE"
//   - Coco Chanel quote added as poster moment
//   - Three Steps section removed (lives on Services page)
//   - Transformations section removed
//   - About preview: warmer copy
//   - Final CTA: personal, different from Power Palette pitch
// =============================================================================

export const homeContent: HomeContent = {
  hero: {
    headline: "Your Image, Architected.",
    subheadline:
      "When you walk into a room, your image speaks before you do. We make sure it says exactly what you intend.",
    cta: {
      text: "DISCOVER YOUR COLORS",
      href: getCalendlyUrl("powerPalette"),
      external: true,
    },
    ctaSubtext:
      "Complimentary 20-minute session — virtual or in-person",
    imageAlt:
      "Lu consulting with a client during an image strategy session",
  },

  quote: {
    text: "Dress shabbily and they remember the dress; dress impeccably and they remember the woman.",
    attribution: "Coco Chanel",
  },

  whoIsThisFor: {
    sectionHeading: "Designed for Professionals Who...",
    cards: [
      {
        headline: "Navigate two cultures",
        body: "You moved to the U.S. for your career. LUI helps you bridge both worlds — strategically.",
      },
      {
        headline: "Stand out in a crowded market",
        body: "In a city with 61,000 real estate agents, your image is your first listing presentation.",
      },
      {
        headline: "Upgrade without the guesswork",
        body: "You know image matters but don't have time to figure it out. LUI delivers a clear, actionable system.",
      },
      {
        headline: "Prepare for what's next",
        body: "A promotion. A career pivot. When the stakes are high, your image should be as intentional as your strategy.",
      },
    ],
  },

  servicePreview: {
    heading: "Where to Begin",
    cards: [
      {
        name: "Your Power Palette",
        price: "Complimentary",
        description:
          "A 20-minute color analysis that identifies your undertone and reveals your top 5 power colors.",
        cta: {
          text: "DISCOVER YOUR COLORS",
          href: getCalendlyUrl("powerPalette"),
          external: true,
        },
      },
      {
        name: "First Impression",
        price: "$400",
        positioningLine: "A professional investment in clarity.",
        outcomeText: "You'll walk away knowing",
        description:
          "exactly which colors and silhouettes work for your body and your career — with 3–5 outfits you can wear this week.",
        detailsLine: "~2 hours · Color analysis · Style diagnostic · Digital lookbook",
        cta: {
          text: "Explore First Impression",
          href: "/services#first-impression",
        },
      },
      {
        name: "Identity Transformation",
        price: "$1,800",
        positioningLine: "The complete reinvention.",
        outcomeText: "You'll never stand in front of your closet feeling lost again.",
        description:
          "Full colorimetric and morphological analysis, closet audit, personal shopping, and a complete style system built around your life.",
        detailsLine: "12–15 hours across 7 distinct deliverables",
        cta: {
          text: "Explore Identity Transformation",
          href: "/services#identity-transformation",
        },
      },
    ],
  },

  socialProof: {
    heading: "What Clients Experience",
  },

  aboutPreview: {
    heading: "Meet Lu",
    body: "Born in Colombia. Based in Miami. With a foundation in fashion design and specialized training in colorimetry and styling, Lu brings diagnostic precision and personal warmth to every engagement.",
    link: {
      text: "Learn more about Lu",
      href: "/about",
    },
    instagramLink: {
      text: "@imagebylui",
      href: siteConfig.instagram.url,
      external: true,
    },
  },

  finalCta: {
    heading: "Have questions? Talk to Lu directly.",
    body: "Whether you're ready to book or just want to learn more, Lu is happy to chat — no pressure, no commitment.",
    cta: {
      text: "BOOK A FREE CONVERSATION",
      href: getCalendlyUrl("powerPalette"),
      external: true,
    },
  },

  seo: {
    title: "Image by LUI | Diagnostic Image Consulting Miami",
    description:
      "Diagnostic image consulting in Miami. Colorimetry, morphological analysis, and lifestyle mapping for professionals. Book your complimentary color analysis.",
  },
};
