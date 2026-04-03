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
      "Lu in burgundy evening dress at formal venue — occasion styling Miami",
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
        mobileImage: "/images/mobile/services/occasion-complete.jpg",
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
      "I was thrilled with the styling service — every detail was chosen to bring out the best in me. I loved the entire process from consultation to final look. The dress was absolutely perfect. Highly recommend.",
    name: "Silvia",
    initials: "SC",
    title: "Client, Miami",
    photo: "/images/testimonials/st.jpg",
    handle: "@silviacastrillon",
  },

  gallery: {
    label: "Styled by Lu",
    subheading: "Event looks curated for real clients",
    items: [
      { label: "Gala evening look", caption: "Black-tie gala", background: "stone", image: "/images/mobile/gallery/styled-gala.jpg" },
      { label: "Corporate keynote", caption: "Corporate keynote", background: "ivory", image: "/images/mobile/gallery/styled-corporate.jpg" },
      { label: "Wedding guest", caption: "Wedding guest", background: "stone", image: "/images/mobile/gallery/styled-wedding-1.jpg" },
      { label: "Interview look", caption: "Executive interview", background: "ivory", image: "/images/mobile/gallery/styled-model.jpg" },
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

  // ===========================================================================
  // Desktop-specific overrides — LUI-DESK-003
  // ===========================================================================
  desktop: {
    hero: {
      image: "/images/heroes/occasion-hero-lu-gala.jpg",
      imagePosition: "center 40%",
      filter: "saturate(0.7) sepia(0.06) brightness(1.0)",
      minHeight: 480,
      photoWidth: "45%",
    },
    howItWorks: {
      heading: "How it works",
      steps: [
        {
          title: "Tell us about your event",
          description:
            "The occasion, dress code, and what you want to communicate. We build a strategy around your moment.",
        },
        {
          title: "We curate your look",
          description:
            "Starting with what you own. If new pieces are needed, we source them at curated stores.",
        },
        {
          title: "You arrive ready",
          description:
            "Complete look prepared with styling notes. With VIP, Lu is there on event day.",
        },
      ],
    },
    pricing: {
      heading: "Choose your level",
      subheading:
        "All packages begin with a strategy session for your specific event",
      tiers: [
        {
          name: "Essential",
          price: "$250",
          duration: "2–3 hours",
          description:
            "Virtual curation from your wardrobe — ideal when you have pieces but need expert guidance pulling them together.",
          inclusions: [
            "Pre-event strategy consultation",
            "Outfit selection from your wardrobe",
            "Virtual curation if new pieces needed",
            "Styling notes delivered",
          ],
          ctaText: "BOOK ESSENTIAL",
          variant: "essential",
          ctaStyle: "terracotta",
        },
        {
          name: "Complete",
          price: "$450",
          duration: "5–6 hours",
          description:
            "In-person shopping with Lu — everything in Essential plus accompanied shopping with real-time fit and color advice.",
          inclusions: [
            "Everything in Essential",
            "Accompanied in-person shopping",
            "Real-time fit and color advice",
            "Complete event look, ready to wear",
          ],
          ctaText: "BOOK COMPLETE",
          variant: "complete",
          badge: "Recommended",
          ctaStyle: "gold",
        },
        {
          name: "VIP",
          price: "$750",
          duration: "8–12 hours",
          description:
            "Lu with you on event day — everything in Complete plus event-day accompaniment and final coordination.",
          inclusions: [
            "Everything in Complete",
            "Event-day accompaniment by Lu",
            "Final adjustments and coordination",
            "Confidence check before arrival",
          ],
          ctaText: "BOOK VIP",
          variant: "vip",
          ctaStyle: "terracotta",
        },
      ],
    },
    gallery: {
      heading: "Styled by Lu",
      items: [
        { image: "/images/gallery/styled-corporate.jpg", alt: "Corporate event styling by Image by LUI — professional look Miami" },
        { image: "/images/gallery/styled-gala.jpg", alt: "Black-tie gala styling by Image by LUI Miami" },
        { image: "/images/gallery/styled-model.jpg", alt: "Editorial styling by image consultant Lu in Miami" },
        { image: "/images/gallery/styled-wedding-1.jpg", alt: "Wedding guest styling by Image by LUI — event look Miami" },
        { image: "/images/gallery/styled-wedding-2.jpg", alt: "Wedding guest occasion styling by Image by LUI Miami" },
      ],
    },
    faqPreview: {
      heading: "Common questions",
      items: [
        {
          question: "How far in advance should I book?",
          answer:
            "Ideally 2–4 weeks before your event. For VIP with event-day accompaniment, 3–4 weeks minimum. Have something sooner? Reach out — we'll do our best.",
        },
        {
          question: "What if I don't have anything to wear?",
          answer:
            "Not a problem. Complete and VIP include in-person accompanied shopping where Lu helps you find everything you need.",
        },
      ],
      linkText: "See all questions →",
      linkHref: "/faq",
    },
    crossNav: {
      text: "Looking for a complete image transformation?",
      linkText: "Explore Image Consulting →",
      linkHref: "/services/image-consulting",
    },
    bottomCta: {
      heading: "Have an event coming up?",
      description:
        "A complimentary color analysis takes 20 minutes and gives Lu everything she needs to recommend the right level for your moment.",
      primaryCta: {
        text: "TELL LU ABOUT YOUR EVENT",
        href: getCalendlyUrl("powerPalette"),
        external: true,
      },
      secondaryText: "Or message Lu on WhatsApp",
      secondaryLinkHref: getWhatsAppUrl("en"),
    },
  },
};
