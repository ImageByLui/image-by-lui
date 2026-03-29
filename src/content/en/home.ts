import type { HomeContent } from "@/types/content";
import { getCalendlyUrl } from "@/config/site.config";
import { siteConfig } from "@/config/site.config";

// =============================================================================
// Homepage Content — English (V2)
// =============================================================================
// Methodology section removed — replaced by "How It Works" in Batch B.
// Instagram grid replaced with text CTA.
// =============================================================================

export const homeContent: HomeContent = {
  hero: {
    headline: "Your Image, Architected.",
    subheadline:
      "Image by LUI is a diagnostic image consulting practice in Miami. Using colorimetry, morphological analysis, and lifestyle mapping, we help professionals align how they look with where they're going.",
    trustLine: "Bilingual practice serving professionals across Miami-Dade County.",
    cta: {
      text: "DISCOVER YOUR POWER PALETTE",
      href: getCalendlyUrl("powerPalette"),
      external: true,
    },
    ctaSubtext:
      "Complimentary 20-minute color analysis — virtual or in-person",
    imageAlt:
      "Professional woman in a tailored outfit reviewing color swatches during an image consulting session in a bright, modern setting",
  },

  whoIsThisFor: {
    sectionHeading: "Designed for Professionals Who...",
    cards: [
      {
        headline: "Navigate two cultures with confidence",
        body: "You moved to the U.S. for your career. Now you're navigating American corporate dress codes while holding on to the identity that makes you, you. LUI helps you bridge both — strategically.",
      },
      {
        headline: "Stand out in a crowded market",
        body: "In a city with 61,000 real estate agents, your image is your first listing presentation. A strategic, cohesive look builds trust before you say a word.",
      },
      {
        headline: "Upgrade your image without the guesswork",
        body: "You know your professional image matters but you don't have time to figure it out alone. LUI's diagnostic methodology delivers a clear, actionable system — handled for you.",
      },
      {
        headline: "Prepare for what's next",
        body: "A promotion. A career pivot. A public-facing role. A major life transition. When the stakes are high, your image should be as intentional as your strategy.",
      },
    ],
  },

  howItWorks: {
    sectionHeading: "Three Steps to a Strategic Image",
    steps: [
      {
        number: 1,
        heading: "Discover Your Colors",
        body: "Book your complimentary Power Palette session. In 20 minutes, we identify your undertone and reveal the five colors that make you look most commanding.",
      },
      {
        number: 2,
        heading: "Receive Your Diagnostic Profile",
        body: "Through colorimetry, morphological analysis, and lifestyle mapping, we build a personalized image strategy based on your unique features and goals.",
      },
      {
        number: 3,
        heading: "Transform Your Presence",
        body: "With your personalized framework in hand, every outfit choice becomes intentional. Your wardrobe works for you — and the world responds differently.",
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
          "A complimentary 20-minute color analysis that identifies your undertone and top 5 power colors. The first step in understanding how color transforms your presence.",
        cta: {
          text: "CLAIM YOUR SESSION",
          href: getCalendlyUrl("powerPalette"),
          external: true,
        },
      },
      {
        name: "First Impression",
        price: "$400",
        description:
          "A 90-minute personal style diagnostic. Receive your color analysis, 3–5 outfit strategies from your existing wardrobe, and a digital lookbook with clear direction.",
        cta: {
          text: "EXPLORE FIRST IMPRESSION",
          href: "/services#first-impression",
        },
      },
      {
        name: "Identity Transformation",
        price: "$1,800",
        description:
          "The complete LUI experience. Full colorimetric and morphological analysis, closet audit, personal shopping, and a comprehensive style guide with 15–20 curated outfits.",
        cta: {
          text: "EXPLORE IDENTITY TRANSFORMATION",
          href: "/services#identity-transformation",
        },
      },
    ],
  },

  transformations: {
    sectionHeading: "Real Transformations",
    sectionSubheading: "See how the LUI methodology creates measurable change.",
    cards: [
      {
        caption: "Corporate professional — Wardrobe realignment for a new executive role",
      },
      {
        caption: "Real estate agent — Cohesive visual identity for client-facing presence",
      },
      {
        caption: "Entrepreneur — Personal brand refinement for public speaking engagements",
      },
    ],
  },

  socialProof: {
    heading: "What Clients Experience",
  },

  aboutPreview: {
    heading: "Meet Lu",
    body: "With a foundation in fashion design, specialized certifications in colorimetry and styling, and a diagnostic approach refined across years of practice, Lu brings precision and warmth to every engagement. Born in Colombia, based in Miami, fluent in the cultural nuances that shape how professionals present themselves in a global city.",
    link: {
      text: "Learn more about Lu and the LUI methodology →",
      href: "/about",
    },
  },

  instagramCta: {
    heading: "Follow the Journey",
    body: "See the LUI method in action — color analysis sessions, style transformations, and daily image strategy insights.",
    cta: {
      text: "FOLLOW @IMAGEBYLUI ON INSTAGRAM",
      href: siteConfig.instagram.url,
      external: true,
    },
  },

  finalCta: {
    heading: "Ready to See Your Best Colors?",
    body: "Your Power Palette is a complimentary 20-minute session where we identify your undertone and reveal the five colors that make you look most commanding, confident, and aligned.",
    cta: {
      text: "DISCOVER YOUR POWER PALETTE",
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
