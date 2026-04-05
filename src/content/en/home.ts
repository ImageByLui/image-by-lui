import type { HomeContent } from "@/types/content";
import { getCalendlyUrl, getWhatsAppUrl } from "@/config/site.config";
import { siteConfig } from "@/config/site.config";

// =============================================================================
// Homepage Content — English (V7 — LUI-DESK-007)
// =============================================================================

export const homeContent: HomeContent = {
  hero: {
    label: "Image by LUI",
    headline: "Your Image, Architected.",
    subcopy: "Image strategy for professionals who refuse to leave their presence to chance.",
    cta: {
      text: "DISCOVER YOUR COLORS",
      href: getCalendlyUrl("powerPalette"),
      external: true,
    },
    trustNote: "Complimentary · 20 minutes · No commitment",
    mobileImageAlt: "Lu, image consultant — Image by LUI Miami",
    desktopImageAlt: "Lu, founder of Image by LUI, diagnostic image consulting Miami",
  },

  statement: {
    heading: "We don\u2019t guess. We analyze.",
    body: "Colorimetry. Body architecture. Style science. Every recommendation begins with diagnosis.",
  },

  pullquote: {
    quote: "Every detail was chosen to bring out the best in me. I loved the entire process. The dress was absolutely perfect.",
    name: "Silvia",
    handle: "@silviacastrillon",
    handleUrl: "https://www.instagram.com/silviacastrillon",
  },

  servicesMenu: {
    heading: "Your journey begins here",
    services: [
      {
        name: "Occasion Styling",
        teaser: "For your next event \u2014 wardrobe curation, styling, and event-day accompaniment.",
        price: "From $250",
        linkText: "Explore three packages \u2192",
        linkHref: "/services/occasion-styling",
      },
      {
        name: "Image Consulting",
        teaser: "A complete transformation \u2014 four components, 20+ hours, seven deliverables.",
        price: "$1,500",
        linkText: "See the full journey \u2192",
        linkHref: "/services/image-consulting",
      },
    ],
  },

  powerPalette: {
    question: "Not sure where to begin?",
    name: "Your Power Palette",
    meta: "Free \u00b7 20 min \u00b7 Virtual",
    description: "We identify your natural undertone and reveal the five colors that make your features come alive. The starting point for every LUI engagement.",
    cta: {
      text: "BOOK YOUR FREE SESSION",
      href: getCalendlyUrl("powerPalette"),
      external: true,
    },
    note: "No commitment required",
  },

  meetLu: {
    label: "THE FOUNDER",
    heading: "Meet Lu",
    lead: "Diagnostic precision meets personal warmth.",
    bio: "Born in Colombia. Based in Miami. With a foundation in fashion design and specialized training in colorimetry and styling, Lu built LUI on a simple belief: your image should be as intentional as your ambition.",
    learnMoreText: "Learn more \u2192",
    learnMoreHref: "/about",
    instagramText: "@imagebylui",
    instagramHref: siteConfig.instagram.url,
    imageAlt: "Lu, image consultant and founder of Image by LUI",
  },

moreVoices: {
    heading: "What clients experience",
    testimonials: [
      {
        quote: "Lu understood my style, my body, and what I wanted to project. I walked away with tools I use every day to feel more confident.",
        name: "Valentina",
        handle: "@valentinapachecof_",
        handleUrl: "https://www.instagram.com/valentinapachecof_",
        photo: "/images/testimonials/vp.jpg",
      },
      {
        quote: "She knows exactly how to make you feel comfortable and confident in what you\u2019re wearing. Loved it.",
        name: "Ang\u00e9lica",
        handle: "@angelicagp8",
        handleUrl: "https://www.instagram.com/angelicagp8",
        photo: "/images/testimonials/ap.jpg",
      },
      {
        quote: "I loved the entire experience. From the consultation to the final result, everything was thoughtful and personalized. She brought out the best in me without losing my essence, and that means everything. I felt spectacular in the dress. I\u2019d recommend her a thousand times over.",
        name: "Dafne",
        handle: "@dafneeorduz",
        handleUrl: "https://www.instagram.com/dafneeorduz/",
        photo: "/images/testimonials/do.jpg",
      },
      {
        quote: "Thank you so much for your guidance. You truly understood my style and what I wanted to project. I love talking with you about design and how to elevate my image. You\u2019re genuinely incredible at what you do.",
        name: "Luisa",
        handle: "@luisa_marinc",
        handleUrl: "https://www.instagram.com/luisa_marinc/",
        photo: "/images/testimonials/lm.jpg",
      },
      {
        quote: "I don\u2019t normally write these, but I have to thank you \u2014 since you started styling my looks, I feel so much more confident. Truly, thank you from the bottom of my heart.",
        name: "Yuri",
        handle: "@yurikolondono",
        handleUrl: "https://www.instagram.com/yurikolondono/",
        photo: "/images/testimonials/yo.jpg",
      },
    ],
  },

  bottomCta: {
    heading: "Ready to begin?",
    body: "A complimentary color analysis takes 20 minutes and gives Lu everything she needs to recommend the right path for you.",
    primaryCta: {
      text: "BOOK YOUR FREE COLOR ANALYSIS",
      href: getCalendlyUrl("powerPalette"),
      external: true,
    },
    whatsappText: "Or message Lu on WhatsApp",
    whatsappHref: getWhatsAppUrl("en"),
  },

  stickyBar: {
    text: "Free color analysis \u00b7 20 min",
    href: getCalendlyUrl("powerPalette"),
  },

  seo: {
    title: "Image Consultant Miami \u2014 Diagnostic Styling | Image by LUI",
    description: "Diagnostic image consulting and occasion styling for Miami professionals. Complimentary 20-min color analysis. Bilingual EN/ES.",
    ogImage: "/og/og-default.jpg",
  },
};
