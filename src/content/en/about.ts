import type { AboutContent } from "@/types/content";
import { getCalendlyUrl } from "@/config/site.config";

// =============================================================================
// About Page Content — English (V7 — Final Approved)
// =============================================================================

export const aboutContent: AboutContent = {
  hero: {
    headline: "Built on precision. Delivered with warmth.",
    subheadline:
      "Born in Colombia. Based in Miami. Diagnostic image consultant who helps professionals align how they look with where they're going.",
    imageAlt: "Lu — portrait in natural light",
  },

  pullQuote:
    "If you've ever stood in front of your closet before an important day and thought 'I have nothing to wear' — I understand.",

  origin: {
    intro: [
      "Lu knows what it's like to navigate two cultures. The right image opens doors — the wrong one keeps them closed.",
      "Her path started in fashion design school in Colombia. Not with trends — with structure:",
    ],
    disciplines: [
      "Pattern Construction",
      "Textile Science",
      "Garment Engineering",
    ],
    closing:
      "That foundation led to years of specialized training — certified colorimetry, professional styling, fashion production — and a clear methodology: image built on science, not trends.",
    imageAlt: "Lu with color swatches",
  },

  sessionImageAlt: "Lu during a color draping session",

  clientVoice: {
    quote:
      "Lu didn't just change my wardrobe — she changed how I walk into a room. I finally look like the leader I am.",
    name: "C.L.",
    initials: "CL",
    title: "Real Estate Agent, Miami",
    instagram: "@placeholder",
  },

  imageStrip: {
    leftAlt: "Color swatches",
    rightAlt: "Lu's workspace",
  },

  philosophy: {
    statement:
      "Your image should reflect your ambition, your culture, and your reality.",
    closer:
      "Not a magazine cover. Not someone else's idea of success. Yours.",
  },

  cta: {
    heading: "Ready to start?",
    body: "Your Power Palette is a complimentary 20-minute color analysis — and the first step in understanding how the LUI method can work for you.",
    cta: {
      text: "BOOK YOUR FREE SESSION",
      href: getCalendlyUrl("powerPalette"),
      external: true,
    },
  },

  seo: {
    title: "About Lu | Image Consultant Miami | Image by LUI",
    description:
      "Meet Lu — Miami's bilingual image consultant. Fashion design foundation, certified colorimetry specialist, and a diagnostic methodology built for professionals.",
  },
};
