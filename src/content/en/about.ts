import type { AboutContent } from "@/types/content";
import { getCalendlyUrl, getWhatsAppUrl } from "@/config/site.config";

// =============================================================================
// About Page Content — English (V8 — Editorial Narrative, LUI-ABOUT-001)
// =============================================================================
// Copy source: LUI_About_Copy_Final.md (locked).
// Do NOT edit copy — all text was approved by the Web Strategist.
// =============================================================================

export const aboutContent: AboutContent = {
  hero: {
    quoteBefore:
      "If you\u2019ve ever stood in front of your closet before an important day and thought",
    quoteHighlight: "I have nothing to wear",
    connection: "I understand.",
    imageAlt:
      "Lu, bilingual image consultant in Miami, black and white editorial portrait",
  },

  beats: {
    one: "I started my career designing clothes for a fashion house in Colombia. But what fascinated me most wasn\u2019t the garment. It was the moment the right piece reached the right person. That instant where presence clicks into place.",

    twoA:
      "I realized my work wasn\u2019t about creating clothing. It was about building image.",
    twoB:
      "I studied fashion production in Miami and began working with an international fashion magazine, covering fashion weeks and writing about them. I collaborated with photographers and designers across the United States, France, England, and Spain.",

    threeA:
      "In S\u00E3o Paulo, I found it. Colorimetry. Not trends, not intuition. The science of color, silhouette, and presence.",
    threeB:
      "I came back to Miami with everything I\u2019d built. The technical foundation of design. The editorial eye of production. The diagnostic precision of colorimetry. And one clear conviction.",
  },

  pivot: {
    line1: "But something was missing.",
    line2: "The diagnostic framework.",
  },

  statement: {
    text: "Your image should reflect your ambition, your culture, and your reality. Not a magazine cover. Not someone else\u2019s idea of success.",
    closer: "Yours.",
  },

  photoAlts: {
    colombia:
      "Lu during her early career in fashion design in Colombia",
    backstage:
      "Behind the scenes at a fashion production shoot",
    interview:
      "Lu collaborating with designers at an international fashion event",
    closing:
      "Lu in a confident editorial portrait, warm tones",
  },

  cta: {
    heading: "Ready to begin?",
    body: "Your Power Palette is a complimentary 20-minute color analysis. The first step to understanding how the LUI method can work for you.",
    primaryCta: {
      text: "DISCOVER YOUR COLORS",
      href: getCalendlyUrl("powerPalette"),
      external: true,
    },
    secondaryText: "Or message Lu on WhatsApp",
    secondaryHref: getWhatsAppUrl("en"),
  },

  stickyBar: {
    text: "Free color analysis \u00B7 20 min",
    href: getCalendlyUrl("powerPalette"),
  },

  seo: {
    title: "About Lu | Image Consultant Miami | Image by LUI",
    description:
      "Meet Lu \u2014 Miami\u2019s bilingual image consultant. Fashion design foundation, certified colorimetry specialist, and a diagnostic methodology built for professionals.",
  },
};
