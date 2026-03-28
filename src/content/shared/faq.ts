import type { SharedFAQItem } from "@/types/content";

// =============================================================================
// FAQ — Shared Bilingual Content
// =============================================================================
// 7 questions in English, 6 in Spanish (the "I speak Spanish" question is
// omitted from the ES version as it's redundant for Spanish-speaking visitors).
//
// Components filter by language when rendering.
// =============================================================================

export const faqItems: SharedFAQItem[] = [
  {
    question: {
      en: "How is this different from hiring a personal shopper?",
      es: "¿En qué se diferencia esto de contratar un personal shopper?",
    },
    answer: {
      en: "A personal shopper selects clothing for you. An image consultant diagnoses why certain things work for you and builds a strategic framework you can use for years. We don't pick outfits — we give you the methodology to make every choice intentional.",
      es: "Un personal shopper selecciona ropa para ti. Una consultora de imagen diagnostica por qué ciertas cosas te funcionan y construye un marco estratégico que puedes usar durante años. No elegimos outfits — te damos la metodología para que cada elección sea intencional.",
    },
  },
  {
    question: {
      en: "Do I need to buy a new wardrobe?",
      es: "¿Necesito comprar un guardarropa nuevo?",
    },
    answer: {
      en: "No. The Starter engagement works entirely with your existing wardrobe. Even the Signature tier begins with a closet audit — most clients discover they already own pieces that work beautifully once they understand the system.",
      es: "No. El compromiso Starter funciona completamente con tu guardarropa actual. Incluso el tier Signature comienza con una auditoría de clóset — la mayoría de los clientes descubren que ya tienen piezas que funcionan maravillosamente una vez que entienden el sistema.",
    },
  },
  {
    question: {
      en: "Where do sessions take place?",
      es: "¿Dónde se realizan las sesiones?",
    },
    answer: {
      en: "LUI serves professionals across Miami-Dade County. Sessions can be conducted at your home, a convenient meeting location, or virtually. The free Power Palette session is available both in-person and online.",
      es: "LUI atiende a profesionales en todo el condado de Miami-Dade. Las sesiones pueden realizarse en tu hogar, un lugar de encuentro conveniente o de forma virtual. La sesión gratuita Power Palette está disponible tanto presencial como en línea.",
    },
  },
  {
    question: {
      en: "Is this only for women?",
      es: "¿Esto es solo para mujeres?",
    },
    answer: {
      en: "Not at all. The diagnostic methodology works for any professional, regardless of gender. The analysis is based on your individual coloring, proportions, and goals — not on gendered fashion conventions.",
      es: "Para nada. La metodología diagnóstica funciona para cualquier profesional, independientemente del género. El análisis se basa en tu coloración individual, tus proporciones y tus metas — no en convenciones de moda de género.",
    },
  },
  {
    question: {
      en: "How long before I see results?",
      es: "¿Cuánto tiempo hasta ver resultados?",
    },
    answer: {
      en: "Immediately. Your Power Palette session gives you actionable color guidance in 20 minutes. The Starter engagement delivers a complete style direction in a single session. Signature clients experience a full transformation over 2–4 weeks.",
      es: "De inmediato. Tu sesión Power Palette te da orientación de color aplicable en 20 minutos. El compromiso Starter entrega una dirección de estilo completa en una sola sesión. Los clientes Signature experimentan una transformación completa en 2–4 semanas.",
    },
  },
  {
    // This question only appears in EN — filtered out for ES in components
    question: {
      en: "I speak Spanish. Can we work in Spanish?",
      es: "", // Empty — this Q is omitted from the Spanish version
    },
    answer: {
      en: "Absolutely. Lu is natively bilingual in Spanish and English. Every session, every deliverable, and every interaction can be conducted in whichever language you're most comfortable with.",
      es: "",
    },
  },
  {
    question: {
      en: "What if I'm not sure which tier is right for me?",
      es: "¿Qué pasa si no estoy segura de cuál tier es para mí?",
    },
    answer: {
      en: "Start with Your Power Palette — it's complimentary and takes just 20 minutes. It's the perfect way to experience the methodology before committing to a full engagement.",
      es: "Empieza con Tu Power Palette — es de cortesía y toma solo 20 minutos. Es la forma perfecta de experimentar la metodología antes de comprometerte con un compromiso completo.",
    },
  },
];

/**
 * Get FAQ items filtered by language.
 * Removes items with empty question text for the given language.
 */
export function getFaqByLanguage(lang: "en" | "es") {
  return faqItems
    .filter((item) => item.question[lang] !== "")
    .map((item) => ({
      question: item.question[lang],
      answer: item.answer[lang],
    }));
}
