import type { OccasionStylingContent } from "@/types/content";
import { getCalendlyUrl, getWhatsAppUrl } from "@/config/site.config";

// =============================================================================
// Occasion Styling Content — English
// =============================================================================
// All copy from the approved A1-DEV-OccStyling spec and locked mockup.
// New page: /services/occasion-styling
// =============================================================================

export const occasionStylingContent: OccasionStylingContent = {
  hero: {
    label: "Occasion Styling",
    headline: "Your event. Your look. Handled.",
    description:
      "We analyze the occasion, your role in it, and what you need to communicate through your presence — then take care of everything so you arrive with nothing to second-guess.",
    imageAlt:
      "Lu styling a client for a formal event in Miami",
    tags: ["Weddings", "Galas", "Keynotes", "Corporate"],
  },

  howItWorks: {
    label: "How it works",
    steps: [
      {
        title: "Tell us about your event",
        description:
          "The occasion, your role, the dress code, and what you want to communicate. We build a strategy around your specific moment.",
      },
      {
        title: "We curate your look",
        description:
          "Starting with what you already own. If new pieces are needed, we source them — online or in-person at curated stores.",
      },
      {
        title: "You arrive ready",
        description:
          "Complete look prepared, styling notes included. With VIP, Lu is there on event day for final adjustments and a confidence check.",
      },
    ],
    imageAlt:
      "Lu selecting and coordinating a complete event look",
  },

  pricing: {
    label: "Choose your level",
    subheading:
      "Every level includes a personalized pre-event consultation",
    tiers: [
      {
        name: "Essential",
        price: "$250",
        subtitle: "Virtual curation from your wardrobe",
        duration: "2–3 hrs",
        description:
          "We consult on your event, curate outfit options prioritizing what you already own, and source new pieces virtually if needed.",
        inclusions: [
          "Pre-event strategy consultation",
          "Outfit selection from your wardrobe",
          "Virtual curation if new pieces needed",
          "Styling notes delivered",
        ],
        ctaText: "Book Essential",
        ctaHref: getCalendlyUrl("powerPalette"),
        variant: "essential",
      },
      {
        name: "Complete",
        price: "$450",
        subtitle: "In-person shopping with Lu",
        duration: "5–6 hrs",
        description:
          "Everything in Essential — plus Lu goes with you. In-person accompanied shopping at curated stores with real-time advice on fit, color, and versatility.",
        inclusions: [
          "Everything in Essential",
          "Accompanied in-person shopping",
          "Real-time fit and color advice",
          "Complete event look, ready to wear",
        ],
        ctaText: "Book Complete",
        ctaHref: getCalendlyUrl("powerPalette"),
        variant: "complete",
        badge: "Recommended",
        imageAlt:
          "Lu and client selecting pieces at a curated Miami boutique",
      },
      {
        name: "VIP",
        price: "$750",
        subtitle: "Lu with you on event day",
        duration: "8–12 hrs",
        description:
          "Everything in Complete — plus Lu is present on event day. Final outfit check, last-minute adjustments, accessories coordination, and a confidence check before you walk in.",
        inclusions: [
          "Everything in Complete",
          "Event-day accompaniment by Lu",
          "Final adjustments and coordination",
          "Confidence check before arrival",
        ],
        ctaText: "Book VIP",
        ctaHref: getCalendlyUrl("powerPalette"),
        variant: "vip",
        footnote:
          "Ideal for brides, executives at high-visibility events, and media appearances",
      },
    ],
  },

  testimonial: {
    quote:
      "I was preparing for a gala and had two weeks to pull something together. Lu found pieces in my closet I'd completely forgotten, added two new items, and I received more compliments that night than I have in years.",
    name: "M.R.",
    initials: "MR",
    title: "Marketing Director, Miami",
  },

  gallery: {
    label: "Styled by Lu",
    subheading: "Event looks curated for real clients",
    items: [
      { label: "Gala evening look", caption: "Black-tie gala", background: "stone" },
      { label: "Corporate keynote", caption: "Corporate keynote", background: "ivory" },
      { label: "Wedding guest", caption: "Wedding guest", background: "stone" },
      { label: "Interview look", caption: "Executive interview", background: "ivory" },
    ],
  },

  bottomCta: {
    heading: "Have an event coming up?",
    description:
      "Tell us about it. A complimentary color analysis takes 20 minutes and gives Lu everything she needs to recommend the right level of support for your moment.",
    primaryCta: {
      text: "TELL LU ABOUT YOUR EVENT",
      href: getWhatsAppUrl("en"),
      external: true,
    },
    secondaryText: "Or",
    secondaryLinkText: "book a complimentary color analysis",
    secondaryLinkHref: getCalendlyUrl("powerPalette"),
    faqLinkText: "Have more questions? Visit our FAQ →",
    faqLinkHref: "/faq",
  },

  stickyBar: {
    text: "Free color analysis",
    subtext: "· 20 min",
    href: getCalendlyUrl("powerPalette"),
  },

  seo: {
    title: "Event & Occasion Styling from $250 Miami | Image by LUI",
    description:
      "Styled for weddings, galas, keynotes, interviews. Three tiers from $250. We analyze your event and curate your look. Miami, bilingual.",
    ogImage: "/og/occasion-styling.jpg",
  },
};
