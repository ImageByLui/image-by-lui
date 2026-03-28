import type { SharedServiceTier } from "@/types/content";

// =============================================================================
// Service Tiers — Shared Bilingual Data
// =============================================================================
// Core service tier data used across pages. Full descriptions and inclusions
// live in the page-specific content files (en/services.ts, es/servicios.ts).
// This file provides the canonical names and prices for components that
// need to reference multiple tiers (e.g., Schema markup, Calendly labels).
// =============================================================================

export const serviceTiers: SharedServiceTier[] = [
  {
    id: "power-palette",
    name: {
      en: "Your Power Palette",
      es: "Tu Power Palette",
    },
    price: "Complimentary",
    inclusions: {
      en: [
        "Professional undertone analysis",
        "Your top 5 power colors identified",
        "Personalized digital color card",
        "Guidance on immediate wardrobe adjustments",
      ],
      es: [
        "Análisis profesional de subtono",
        "Tus 5 colores de poder identificados",
        "Tarjeta digital de color personalizada",
        "Orientación sobre ajustes inmediatos en tu guardarropa",
      ],
    },
  },
  {
    id: "first-impression",
    name: {
      en: "First Impression",
      es: "Primera Impresión",
    },
    price: "$400",
    inclusions: {
      en: [
        "Basic colorimetric analysis (undertone + top 10 power colors)",
        "Style diagnostic based on your professional context",
        "3–5 outfit recommendations from your existing wardrobe",
        "Digital lookbook with your personalized style direction",
        "Follow-up summary delivered within 48 hours",
      ],
      es: [
        "Análisis colorimétrico básico (subtono + 10 colores de poder)",
        "Diagnóstico de estilo basado en tu contexto profesional",
        "3–5 recomendaciones de outfits con tu guardarropa existente",
        "Lookbook digital con tu dirección de estilo personalizada",
        "Resumen de seguimiento entregado en 48 horas",
      ],
    },
  },
  {
    id: "identity-transformation",
    name: {
      en: "Identity Transformation",
      es: "Transformación de Identidad",
    },
    price: "$1,800",
    inclusions: {
      en: [
        "Comprehensive personal questionnaire and lifestyle review",
        "Complete colorimetric analysis with Pantone color matching",
        "Morphological analysis with silhouette optimization",
        "In-home closet audit and wardrobe detox (2–3 hours)",
        "Curated personal shopping experience (3–4 hours)",
        "Identity Profile and Lifestyle Mapping document",
        "Digital style guide with 15–20 complete outfits",
      ],
      es: [
        "Cuestionario personal integral y revisión de estilo de vida",
        "Análisis colorimétrico completo con calibración Pantone",
        "Análisis morfológico con optimización de silueta",
        "Auditoría de clóset y detox de guardarropa en casa (2–3 horas)",
        "Experiencia de compras personalizadas curada (3–4 horas)",
        "Documento de Perfil de Identidad y Mapeo de Estilo de Vida",
        "Guía de estilo digital con 15–20 outfits completos",
      ],
    },
  },
];
