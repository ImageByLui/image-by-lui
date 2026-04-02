import type { ImageConsultingContent } from "@/types/content";
import { getCalendlyUrl, getWhatsAppUrl } from "@/config/site.config";

// =============================================================================
// Image Consulting Content — English
// =============================================================================
// New page: /services/image-consulting
// =============================================================================

export const imageConsultingContent: ImageConsultingContent = {
  hero: {
    label: "Image Consulting",
    headline: "Never wonder what to wear again.",
    description:
      "A diagnostic reinvention of your professional image — built on colorimetry, morphological analysis, and personal style science. Four components. 20+ hours. A system you'll use for years.",
    tags: ["Executives", "Entrepreneurs", "Career transitions", "Realtors"],
    imageAlt:
      "Lu conducting a full image consulting diagnostic session in Miami",
  },

  pricing: {
    price: "$1,500",
    priceStrikethrough: "$2,000",
    priceNote: "Introductory rate — limited availability",
    summary: [
      { value: "4", label: "components" },
      { value: "20–24", label: "hours" },
      { value: "7", label: "deliverables" },
    ],
  },

  journey: {
    label: "Your journey",
    subheading:
      "Here's what your transformation looks like — four components across 4–6 sessions",
    components: [
      {
        stepNumber: 1,
        name: "Full Personal Analysis",
        duration: "~4 hours",
        subtitle: "The diagnostic foundation",
        description:
          "Everything that follows is built on what we discover here. A deep analysis of your colors, face shape, body architecture, and personal style — the diagnostic foundation for every recommendation to come.",
        imageAlt: "Lu performing professional Pantone-matched color draping with a client",
        image: "/images/journey/color-analysis.jpg",
        inclusions: [
          { key: "Color analysis", detail: "complete Pantone-matched palette, beyond Your Power Palette" },
          { key: "Facial analysis", detail: "ideal haircuts, necklines, accessories, frames" },
          { key: "Body architecture", detail: "cuts, silhouettes, and fabrics for your natural structure" },
          { key: "Style identity", detail: "your archetype balanced with professional objectives" },
        ],
        deliverableLine: "You receive: Complete color palette card + personal style profile",
      },
      {
        stepNumber: 2,
        name: "Closet Detox",
        duration: "~6 hours",
        subtitle: "Wardrobe transformation",
        description:
          "We transform your wardrobe from overwhelming to functional. You'll discover you own more than you thought — and know exactly what's missing.",
        imageAlt: "Lu evaluating a client's wardrobe — sorting, organizing, discovering new combinations",
        image: "/images/journey/closet-detox.jpg",
        inclusions: [
          { key: "Full wardrobe evaluation", detail: "every piece of clothing, shoes, and accessories assessed" },
          { key: "Strategic filtering", detail: "by condition, style alignment, and versatility" },
          { key: "New combinations", detail: "outfits created from pieces you already own" },
          { key: "Gaps identified", detail: "a precise list of what's needed, nothing more" },
        ],
        deliverableLine: "You receive: Closet organization guide + personalized shopping list",
      },
      {
        stepNumber: 3,
        name: "Personal Shopping",
        duration: "~5 hours",
        subtitle: "Guided purchases",
        description:
          "No impulse purchases. We create a shopping roadmap from your closet detox findings, then Lu goes with you to curated stores where every purchase has a clear purpose.",
        imageAlt: "Lu and client at a curated store — selecting pieces with intention, not impulse",
        image: "/images/journey/personal-shopping.jpg",
        inclusions: [
          { key: "Pre-shopping diagnostic", detail: "priorities defined before entering a store" },
          { key: "Purchase roadmap", detail: "basics, key pieces, and strategic investments mapped" },
          { key: "Accompanied shopping", detail: "Lu with you for real-time fit, color, and versatility advice" },
          { key: "Purpose-driven purchasing", detail: "save money and time by buying with intention" },
        ],
        deliverableLine: "You receive: A wardrobe that works as a complete system",
      },
      {
        stepNumber: 4,
        name: "Styling + Photo Session",
        duration: "~8 hours",
        subtitle: "The final chapter",
        description:
          "The final chapter. Lu builds 15–20 complete outfits for every context in your life, then styles and directs a photo session so your new image has a visual record.",
        imageAlt: "Lu styling a client for their photo session — complete looks for every occasion",
        image: "/images/journey/photo-session.jpg",
        inclusions: [
          { key: "Complete looks built", detail: "work, social, events, and casual from new + existing pieces" },
          { key: "Digital lookbook", detail: "15–20 outfits with styling notes, occasion tags, and guides" },
          { key: "Styled photo session", detail: "directed by Lu, capturing your new professional image" },
          { key: "Professional images", detail: "ready for LinkedIn, social media, headshots, and profiles" },
        ],
        deliverableLine: "You receive: Digital lookbook + professional photos",
      },
    ],
  },

  deliverables: {
    label: "What you receive",
    subheading: "Everything included in your investment",
    items: [
      { title: "Complete color palette card", qualifier: "your full Pantone-matched spectrum" },
      { title: "Personal style profile", qualifier: "body, face shape, archetype, silhouette guide" },
      { title: "Closet organization guide", qualifier: "PDF with your personalized system" },
      { title: "Personalized shopping list", qualifier: "strategic gaps and priorities" },
      { title: "Digital lookbook", qualifier: "15–20 complete outfits with styling notes" },
      { title: "Professional photos", qualifier: "styled session for LinkedIn, social, headshots" },
    ],
    whatsappCallout: {
      title: "Plus: 7 days of WhatsApp support",
      description: "Lu available for questions, outfit checks, and advice",
    },
  },

  transformations: {
    label: "Real transformations",
    subheading: "Drag to reveal the transformation",
    items: [
      { initials: "AV", caption: "A.V. — Entrepreneur, Coral Gables · Complete image transformation", active: true },
      { initials: "MR", caption: "M.R. — Marketing Director, Miami · Professional presence refresh" },
      { initials: "CL", caption: "C.L. — Real Estate Agent, Miami · Career transition styling" },
    ],
  },

  photoOptions: {
    label: "Photo session options",
    options: [
      {
        title: "Lu photographs you",
        badge: "Included",
        badgeVariant: "terracotta",
        borderColor: "champagne",
        description:
          "Styled session with professional lighting, directed and photographed by Lu. Included in your investment — no additional cost.",
      },
      {
        title: "Professional photographer",
        badge: "+$300",
        badgeVariant: "gold",
        borderColor: "gold",
        description:
          "3-hour session with a professional photographer for premium-quality images — visual assets you'll use for years.",
      },
    ],
  },

  testimonial: {
    quote:
      "The styling consultation was an incredible experience. Lu was professional from the start — she understood my style, my body, and what I wanted to project. I walked away with tools I actually use every day to dress better and feel more confident. Thank you for everything!",
    name: "Valentina",
    initials: "VP",
    title: "Client, Miami",
    photo: "/images/testimonials/vp.jpg",
    handle: "@valentinapachecof_",
    isPlaceholder: true,
  },

  bottomCta: {
    heading: "Ready for what's next?",
    description:
      "Every transformation begins with understanding your colors. A complimentary consultation takes 20 minutes and gives us everything we need to determine if this journey is the right fit.",
    primaryCta: {
      text: "SCHEDULE YOUR COMPLIMENTARY CONSULTATION",
      href: getCalendlyUrl("powerPalette"),
      external: true,
    },
    secondaryText: "Prefer to message first?",
    secondaryLinkText: "Reach Lu on WhatsApp",
    secondaryLinkHref: getWhatsAppUrl("en"),
    faqLinkText: "Have more questions? Visit our FAQ →",
    faqLinkHref: "/faq",
  },

  stickyBar: {
    text: "Complimentary consultation",
    subtext: "· 20 min",
    href: getCalendlyUrl("powerPalette"),
  },

  seo: {
    title: "Complete Image Consulting Miami — $1,500 | Image by LUI",
    description:
      "4 components, 20+ hours, 7 deliverables. Diagnostic reinvention of your professional image. Colorimetry and style science. Miami, bilingual.",
    ogImage: "/og/image-consulting.jpg",
  },

  // ===========================================================================
  // Desktop-specific overrides — LUI-DESK-004
  // ===========================================================================
  desktop: {
    hero: {
      image: "/images/heroes/ic-hero-lu-cartier.jpg",
      imagePosition: "40% 25%",
      filter: "saturate(0.45) sepia(0.15) brightness(0.95) contrast(1.05)",
      minHeight: 560,
      photoWidth: "48%",
    },
    investment: {
      heading: "Your complete transformation",
      price: "$1,500",
      priceStrikethrough: "$2,000",
      stats: [
        { value: "4", label: "COMPONENTS" },
        { value: "20–24", label: "HOURS" },
        { value: "7", label: "DELIVERABLES" },
      ],
      entryText: "Every journey begins with a ",
      entryLinkText: "complimentary color analysis",
      entryLinkHref: getCalendlyUrl("powerPalette"),
    },
    journey: {
      heading: "Your journey",
      subheading: "Four components across 4–6 sessions",
      images: [
        "/images/journey/color-analysis.jpg",
        "/images/journey/closet-detox.jpg",
        "/images/journey/personal-shopping.jpg",
        "/images/journey/photo-session.jpg",
      ],
      photoEmbed: {
        label: "PHOTO SESSION OPTIONS",
        options: [
          { title: "Lu photographs you", price: "Included", description: "Styled and directed photo session" },
          { title: "Professional photographer", price: "+$300", description: "3-hour session, visual assets for years" },
        ],
      },
    },
    deliverables: {
      heading: "What you keep",
      subheading: "7 DELIVERABLES INCLUDED IN YOUR INVESTMENT",
      items: [
        { title: "Color palette card", description: "Full Pantone-matched spectrum" },
        { title: "Personal style profile", description: "Body, face, archetype, silhouette guide" },
        { title: "Closet organization guide", description: "Your personalized wardrobe system" },
        { title: "Strategic shopping list", description: "Gaps and priorities identified" },
        { title: "Digital lookbook", description: "15–20 outfits with styling notes" },
        { title: "Professional photos", description: "LinkedIn, social, headshots ready" },
      ],
      bonus:
        "Plus: 7 days of WhatsApp support — Lu available for questions, outfit checks, and advice",
    },
    faqPreview: {
      heading: "Common questions",
      items: [
        {
          question: "How long does the full process take?",
          answer:
            "4–6 sessions across 4–8 weeks, depending on your schedule. Total: 20–24 hours of one-on-one work.",
        },
        {
          question: "Do I need to buy a new wardrobe?",
          answer:
            "No. The Closet Detox maximizes what you own. Shopping focuses only on strategic gaps — you buy what's actually missing.",
        },
      ],
      linkText: "See all questions →",
      linkHref: "/faq",
    },
    crossNav: {
      text: "Looking for event-specific styling instead?",
      linkText: "Explore Occasion Styling →",
      linkHref: "/services/occasion-styling",
    },
    bottomCta: {
      heading: "Ready for what's next?",
      description:
        "Every transformation begins with understanding your colors. A complimentary consultation takes 20 minutes and gives us everything we need to determine if this journey is the right fit.",
      primaryCta: {
        text: "SCHEDULE YOUR COMPLIMENTARY CONSULTATION",
        href: getCalendlyUrl("powerPalette"),
        external: true,
      },
      secondaryText: "Prefer to message first? Reach Lu on WhatsApp",
      secondaryLinkHref: getWhatsAppUrl("en"),
    },
  },
};
