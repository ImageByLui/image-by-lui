import type { ServicesContent } from "@/types/content";
import { getCalendlyUrl } from "@/config/site.config";

// =============================================================================
// Services Page Content — English
// =============================================================================

export const servicesContent: ServicesContent = {
  hero: {
    headline: "Image Strategy for Professionals Who Mean Business",
    subheadline:
      "Every LUI engagement begins with diagnostic analysis — not assumptions. Whether you're refining your presence for the boardroom, the listing appointment, or the stage, the methodology is the same: precise, personalized, and built to last.",
  },

  tiers: [
    {
      anchor: "power-palette",
      label: "START HERE",
      name: "Your Power Palette",
      price: "Complimentary",
      description:
        "Not sure where to begin? Start here. In this 20-minute session — virtual or in-person — we'll analyze your natural undertone using professional color draping and identify the five colors that make your features come alive. You'll leave with a personalized color card and a clear understanding of how strategic color choices elevate your professional presence.",
      inclusions: [
        { text: "Professional undertone analysis" },
        { text: "Your top 5 power colors identified" },
        { text: "Personalized digital color card" },
        { text: "Guidance on immediate wardrobe adjustments" },
      ],
      cta: {
        text: "DISCOVER YOUR POWER PALETTE",
        href: getCalendlyUrl("powerPalette"),
        external: true,
      },
    },
    {
      anchor: "first-impression",
      name: "First Impression",
      price: "$400",
      positioningLine: "A professional investment in clarity.",
      description:
        "A 90-minute diagnostic session that goes beyond color. We analyze your coloring, your features, and your professional context to build a style direction you can execute immediately. You'll receive actionable outfit strategies using your existing wardrobe — no shopping required.",
      inclusions: [
        { text: "Basic colorimetric analysis (undertone + top 10 power colors)" },
        { text: "Style diagnostic based on your professional context" },
        { text: "3–5 outfit recommendations from your existing wardrobe" },
        { text: "Digital lookbook with your personalized style direction" },
        { text: "Follow-up summary delivered within 48 hours" },
      ],
      duration: "~2 hours total engagement",
      cta: {
        text: "BEGIN YOUR FIRST IMPRESSION",
        href: getCalendlyUrl("firstImpression"),
        external: true,
      },
    },
    {
      anchor: "identity-transformation",
      name: "Identity Transformation",
      price: "$1,800",
      positioningLine:
        "The complete reinvention of how you present yourself to the world.",
      description:
        "This is the full LUI experience. Over 12–15 hours of dedicated one-on-one work, we deconstruct and rebuild your professional image from the foundation up. Complete colorimetric analysis with Pantone-matched precision. Morphological mapping to identify the silhouettes, fabrics, and construction details that honor your body's natural architecture. A closet audit that separates what serves you from what doesn't. And a curated shopping experience — in person or virtually — to fill the gaps with intention.",
      valueCallout:
        "12–15 hours of dedicated one-on-one work across 7 distinct deliverables — a strategic investment in how you present yourself for years to come.",
      inclusions: [
        { text: "Comprehensive personal questionnaire and lifestyle review" },
        { text: "Complete colorimetric analysis with Pantone color matching" },
        { text: "Morphological analysis with silhouette optimization" },
        { text: "In-home closet audit and wardrobe detox (2–3 hours)" },
        { text: "Curated personal shopping experience (3–4 hours)" },
        { text: "Identity Profile and Lifestyle Mapping document" },
        { text: "Digital style guide with 15–20 complete outfits" },
      ],
      duration: "~12–15 hours total engagement across multiple sessions",
      cta: {
        text: "BEGIN YOUR TRANSFORMATION",
        href: getCalendlyUrl("identityTransformation"),
        external: true,
      },
    },
  ],

  methodology: {
    heading: "The LUI Method: How It Works",
    steps: [
      {
        number: 1,
        heading: "Colorimetry",
        body: "Using professional Pantone-matched draping, we identify the color palette that makes your natural features come alive. This isn't a seasonal color quiz — it's a precise diagnostic that maps your unique undertone to the colors that project your strongest self.",
      },
      {
        number: 2,
        heading: "Morphological Analysis",
        body: "We map your body's proportions, lines, and structure to determine the silhouettes, fabrics, and construction details that work with your natural architecture — not against it. The goal is harmony between who you are and how your clothing presents you.",
      },
      {
        number: 3,
        heading: "Lifestyle Mapping",
        body: "Every recommendation aligns with how you actually live and work: your industry, your daily environment, your goals, and your cultural context. A strategy that doesn't fit your life won't stick. Ours does.",
      },
    ],
    closingLine:
      "Color analysis + body architecture + lifestyle mapping = an image strategy built on science, not guesswork.",
  },

  faq: {
    heading: "Questions We Hear Often",
  },

  finalCta: {
    heading: "Not Sure Where to Start?",
    body: "Your Power Palette is the perfect entry point. In 20 minutes, you'll discover the colors that transform your presence — and you'll understand exactly why the LUI methodology works.",
    cta: {
      text: "DISCOVER YOUR POWER PALETTE",
      href: getCalendlyUrl("powerPalette"),
      external: true,
    },
  },

  seo: {
    title: "Color Analysis & Image Consulting Services | Image by LUI Miami",
    description:
      "Professional color analysis and image consulting in Miami. Diagnostic methodology including colorimetry, morphological analysis, and lifestyle mapping. From $400.",
  },
};
