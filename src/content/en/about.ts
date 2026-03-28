import type { AboutContent } from "@/types/content";
import { getCalendlyUrl } from "@/config/site.config";

// =============================================================================
// About Page Content — English
// =============================================================================

export const aboutContent: AboutContent = {
  hero: {
    headline: "The Strategist Behind the Method",
    subheadline:
      "Image consulting grounded in diagnostic precision, cultural fluency, and the belief that how you present yourself should never be left to chance.",
  },

  originStory: {
    paragraphs: [
      "Lu's path to image consulting started in a fashion design program in Colombia — not with trends, but with structure. Pattern construction. Textile science. The engineering behind how garments interact with the human form. That foundation shaped everything that followed.",
      "After years of specialized training in colorimetry, styling, and fashion production, a clear methodology emerged: image isn't about following trends or copying looks. It's about understanding the science of color, proportion, and personal context — and using that understanding to build something intentional.",
      "Today, Image by LUI serves professionals across Miami who need their appearance to work as strategically as they do. Latin American executives navigating a new corporate culture. Realtors competing in one of the country's most visual markets. Entrepreneurs whose personal brand is their company's first impression.",
    ],
  },

  credentials: {
    heading: "Training and Credentials",
    items: [
      "Fashion Design Bachelor's Degree (Colombia)",
      "Certified Colorimetry Specialist",
      "Certified Fashion Stylist",
      "Fashion Production Training",
      "Special Effects Makeup Certification",
      "Fashion Illustration (advanced coursework)",
      "Bilingual practice: English and Spanish",
    ],
  },

  philosophy: {
    heading: "The LUI Approach",
    body: "Image consulting at LUI is not about telling you what to wear. It's about giving you a framework — grounded in colorimetry, morphological analysis, and lifestyle mapping — that makes every choice intentional. We believe your image should reflect your ambition, your culture, and your reality. Not a magazine cover. Not someone else's idea of success. Yours.",
  },

  cta: {
    heading: "Experience the Methodology for Yourself",
    body: "Your Power Palette is a complimentary 20-minute color analysis — and the first step in understanding how the LUI method can work for you.",
    cta: {
      text: "DISCOVER YOUR POWER PALETTE",
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
