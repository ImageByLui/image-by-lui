import type { AboutContent } from "@/types/content";
import { getCalendlyUrl } from "@/config/site.config";

// =============================================================================
// About Page Content — English (V5 — Editorial Redesign)
// =============================================================================
// All copy from the approved Brand Brief. Restructured for editorial layout:
// hero with pull-quote, two-part story with image breaks, inline client voice,
// philosophy as statement/closer pair.
// =============================================================================

export const aboutContent: AboutContent = {
  hero: {
    headline: "Built on precision. Delivered with warmth.",
    subheadline:
      "Born in Colombia. Based in Miami. Diagnostic image consultant for professionals who need their appearance to work as strategically as they do.",
    pullQuote:
      "If you've ever stood in front of your closet before an important day and thought 'I have nothing to wear' — I understand.",
    imageAlt:
      "Lu — portrait in natural light",
  },

  story: {
    part1: [
      "Growing up in Colombia, then building a career across cultures, Lu experienced firsthand how the right image opens doors — and the wrong one keeps them closed.",
      "Her path started in fashion design school. Not with trends — with structure. Pattern construction. Textile science. How garments actually interact with the human body. That foundation shaped everything that followed.",
    ],
    part1ImageAlt: "Lu with color swatches",
    part2: [
      "After years of specialized training — <strong>certified colorimetry, professional styling, fashion production</strong> — a clear methodology emerged.",
      "Image isn't about following trends or copying looks. It's about understanding the science of <strong>color, proportion, and personal context</strong> — and using that understanding to build something intentional.",
    ],
    part2ImageAlt: "Color draping session",
  },

  clientVoice: {
    quote:
      "Lu didn't just change my wardrobe — she changed how I walk into a room. I finally look like the leader I am.",
    attribution: "C.L., Real Estate Agent, Miami",
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
