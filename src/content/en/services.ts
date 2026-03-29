import type { ServicesContent } from "@/types/content";
import { getCalendlyUrl } from "@/config/site.config";

// =============================================================================
// Services Page Content — English (V5 — Redesign)
// =============================================================================
// All copy from the approved Brand Brief and Web Strategist deliverables.
// New fields added for the approved V5 services page mockup:
// outcomeText, badge, summaryLine, imageAlt, socialProof, transition, visualMoment.
// =============================================================================

export const servicesContent: ServicesContent = {
  hero: {
    headline: "Image Strategy for Professionals Who Mean Business",
    subheadline:
      "Every LUI engagement begins with diagnostic analysis — not assumptions. Whether you're refining your presence for the boardroom, the listing appointment, or the stage, the methodology is the same: precise, personalized, and built to last.",
    imageAlt:
      "Lu working with a client during an image consulting session in natural light",
  },

  tiers: [
    {
      anchor: "power-palette",
      label: "START HERE — COMPLIMENTARY",
      name: "Your Power Palette",
      price: "Complimentary",
      description:
        "In 20 minutes, Lu identifies your natural undertone and reveals the five colors that make you look most commanding. Virtual or in-person. You'll leave with a personalized color card and complete clarity on your next step.",
      imageAlt: "Lu draping color swatches on a client",
      inclusions: [
        { text: "Professional undertone analysis" },
        { text: "Your top 5 power colors identified" },
        { text: "Personalized digital color card" },
        { text: "Guidance on immediate wardrobe adjustments" },
      ],
      cta: {
        text: "BOOK YOUR FREE SESSION",
        href: getCalendlyUrl("powerPalette"),
        external: true,
      },
    },
    {
      anchor: "first-impression",
      name: "First Impression",
      price: "$400",
      positioningLine: "A professional investment in clarity.",
      outcomeText: "You'll walk away knowing",
      description:
        "exactly which colors and silhouettes work for your body and your career — with 3–5 outfits you can wear this week.",
      summaryLine: "~2 hours · Color analysis · Style diagnostic · Lookbook",
      imageAlt: "Client reviewing her digital lookbook with Lu",
      inclusions: [
        { text: "Colorimetric analysis (undertone + top 10 colors)" },
        { text: "Style diagnostic for your professional context" },
        { text: "3–5 outfit recommendations from your wardrobe" },
        { text: "Digital lookbook with personalized direction" },
        { text: "Follow-up summary within 48 hours" },
      ],
      duration: "~2 hours total",
      cta: {
        text: "BOOK FIRST IMPRESSION",
        href: getCalendlyUrl("firstImpression"),
        external: true,
      },
    },
    {
      anchor: "identity-transformation",
      name: "Identity Transformation",
      price: "$1,800",
      badge: "MOST COMPREHENSIVE",
      positioningLine: "The complete reinvention.",
      outcomeText:
        "You'll never stand in front of your closet feeling lost again.",
      description:
        "Full analysis, closet audit, personal shopping, and a style system built around your life.",
      valueCallout:
        "12–15 hours of dedicated one-on-one work across 7 distinct deliverables",
      imageAlt: "Lu curating outfits during a closet audit",
      inclusions: [
        { text: "Comprehensive questionnaire & lifestyle review" },
        { text: "Complete colorimetric analysis with Pantone matching" },
        { text: "Morphological analysis with silhouette optimization" },
        { text: "In-home closet audit & wardrobe detox (2–3 hrs)" },
        { text: "Curated personal shopping (3–4 hrs)" },
        { text: "Identity Profile & Lifestyle Mapping document" },
        { text: "Digital style guide with 15–20 complete outfits" },
      ],
      duration: "~12–15 hours across multiple sessions",
      cta: {
        text: "BOOK IDENTITY TRANSFORMATION",
        href: getCalendlyUrl("identityTransformation"),
        external: true,
      },
    },
  ],

  transition: {
    heading: "When you're ready for more",
    body: "Most clients start with the free session, then choose their path.",
  },

  socialProof: [
    {
      quote:
        "Lu's session gave me confidence my outfit was working for me. I won the listing.",
      name: "C.L.",
      title: "Real Estate Agent, Miami",
      initials: "CL",
      social: "@placeholder",
    },
    {
      quote:
        "I stopped buying clothes that sat unworn. Lu identified 8 colors I'd never considered.",
      name: "A.R.",
      title: "Finance Executive",
      initials: "AR",
      social: "@placeholder",
    },
  ],

  visualMoment: {
    quote: "My wardrobe is half the size and twice as effective.",
    name: "M.T.",
    title: "Healthcare Executive",
    initials: "MT",
  },

  faq: {
    heading: "Questions We Hear Often",
  },

  finalCta: {
    heading: "Have questions? Talk to Lu directly.",
    body: "Book a complimentary 20-minute conversation. No pressure, no commitment.",
    cta: {
      text: "BOOK A FREE CONVERSATION",
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
