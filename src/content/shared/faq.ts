import type { SharedFAQItem } from "@/types/content";

// =============================================================================
// FAQ — Shared Bilingual Content (V5 — Bold key phrases)
// =============================================================================
// Answers contain <strong> tags for bold key phrases.
// FaqAccordion renders them via dangerouslySetInnerHTML.
// 7 questions in English, 6 in Spanish (the "I speak Spanish" question is
// omitted from the ES version as it's redundant).
// =============================================================================

export const faqItems: SharedFAQItem[] = [
  {
    question: {
      en: "How is this different from hiring a personal shopper?",
      es: "¿En qué se diferencia esto de contratar un personal shopper?",
    },
    answer: {
      en: "A personal shopper selects clothing for you. An image consultant <strong>diagnoses why certain things work</strong> for you and builds a <strong>strategic framework you can use for years.</strong>",
      es: "Un personal shopper selecciona ropa para ti. Una consultora de imagen <strong>diagnostica por qué ciertas cosas te funcionan</strong> y construye un <strong>marco estratégico que puedes usar durante años.</strong>",
    },
  },
  {
    question: {
      en: "Do I need to buy a new wardrobe?",
      es: "¿Necesito comprar un guardarropa nuevo?",
    },
    answer: {
      en: "<strong>No.</strong> First Impression works <strong>entirely with your existing wardrobe.</strong> Identity Transformation includes shopping, but only to fill strategic gaps.",
      es: "<strong>No.</strong> Primera Impresión funciona <strong>completamente con tu guardarropa actual.</strong> Transformación de Identidad incluye compras, pero solo para llenar vacíos estratégicos.",
    },
  },
  {
    question: {
      en: "Where do sessions take place?",
      es: "¿Dónde se realizan las sesiones?",
    },
    answer: {
      en: "Power Palette can be done <strong>virtually or in-person.</strong> Paid sessions take place at your home or a curated location in Miami-Dade County.",
      es: "Power Palette puede hacerse <strong>virtual o presencialmente.</strong> Las sesiones pagas se realizan en tu hogar o en una ubicación curada en el condado de Miami-Dade.",
    },
  },
  {
    question: {
      en: "Is this only for women?",
      es: "¿Esto es solo para mujeres?",
    },
    answer: {
      en: "<strong>Not at all.</strong> The diagnostic methodology works for <strong>any professional, regardless of gender.</strong>",
      es: "<strong>Para nada.</strong> La metodología diagnóstica funciona para <strong>cualquier profesional, independientemente del género.</strong>",
    },
  },
  {
    question: {
      en: "How long before I see results?",
      es: "¿Cuánto tiempo hasta ver resultados?",
    },
    answer: {
      en: "<strong>Immediately.</strong> Your Power Palette gives you actionable guidance <strong>in 20 minutes.</strong>",
      es: "<strong>De inmediato.</strong> Tu Power Palette te da orientación aplicable <strong>en 20 minutos.</strong>",
    },
  },
  {
    question: {
      en: "I speak Spanish. Can we work in Spanish?",
      es: "",
    },
    answer: {
      en: "<strong>Absolutely.</strong> Lu is a native Spanish speaker from Colombia. All sessions and materials can be delivered <strong>entirely in Spanish.</strong>",
      es: "",
    },
  },
  {
    question: {
      en: "What if I'm not sure which tier is right for me?",
      es: "¿Qué pasa si no estoy segura de cuál tier es para mí?",
    },
    answer: {
      en: "<strong>Start with Your Power Palette.</strong> It's free, takes 20 minutes, and gives you everything you need to decide — with zero pressure.",
      es: "<strong>Empieza con Tu Power Palette.</strong> Es gratis, toma 20 minutos y te da todo lo que necesitas para decidir — sin presión.",
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
