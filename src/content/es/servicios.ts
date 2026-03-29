import type { ServicesContent } from "@/types/content";
import { getCalendlyUrl } from "@/config/site.config";

// =============================================================================
// Services Page Content — Spanish (V5 — Redesign)
// =============================================================================
// Natively written Spanish, NOT a translation.
// =============================================================================

export const servicesContentEs: ServicesContent = {
  hero: {
    headline: "Estrategia de Imagen para Profesionales que Van en Serio",
    subheadline:
      "Cada compromiso LUI comienza con análisis diagnóstico — no con suposiciones. Ya sea que estés refinando tu presencia para la sala de juntas, la cita con clientes o el escenario, la metodología es la misma: precisa, personalizada y construida para perdurar.",
    imageAlt:
      "Lu trabajando con una clienta durante una sesión de consultoría de imagen",
  },

  tiers: [
    {
      anchor: "power-palette",
      label: "EMPIEZA AQUÍ — DE CORTESÍA",
      name: "Tu Power Palette",
      price: "De cortesía",
      description:
        "En 20 minutos, Lu identifica tu subtono natural y revela los cinco colores que te hacen lucir más segura y poderosa. Virtual o presencial. Te llevarás una tarjeta de color personalizada y total claridad sobre tu próximo paso.",
      imageAlt: "Lu realizando drapeado de color con una clienta",
      inclusions: [
        { text: "Análisis profesional de subtono" },
        { text: "Tus 5 colores de poder identificados" },
        { text: "Tarjeta digital de color personalizada" },
        { text: "Orientación sobre ajustes inmediatos en tu guardarropa" },
      ],
      cta: {
        text: "RESERVA TU SESIÓN GRATIS",
        href: getCalendlyUrl("powerPalette"),
        external: true,
      },
    },
    {
      anchor: "primera-impresion",
      name: "Primera Impresión",
      price: "$400",
      positioningLine: "Una inversión profesional en claridad.",
      outcomeText: "Saldrás sabiendo",
      description:
        "exactamente qué colores y siluetas funcionan para tu cuerpo y tu carrera — con 3–5 outfits que puedes usar esta semana.",
      summaryLine: "~2 horas · Análisis de color · Diagnóstico de estilo · Lookbook",
      imageAlt: "Clienta revisando su lookbook digital con Lu",
      inclusions: [
        { text: "Análisis colorimétrico (subtono + 10 colores de poder)" },
        { text: "Diagnóstico de estilo para tu contexto profesional" },
        { text: "3–5 recomendaciones de outfits con tu guardarropa" },
        { text: "Lookbook digital con dirección personalizada" },
        { text: "Resumen de seguimiento en 48 horas" },
      ],
      duration: "~2 horas en total",
      cta: {
        text: "RESERVA PRIMERA IMPRESIÓN",
        href: getCalendlyUrl("firstImpression"),
        external: true,
      },
    },
    {
      anchor: "transformacion-de-identidad",
      name: "Transformación de Identidad",
      price: "$1,800",
      badge: "MÁS COMPLETO",
      positioningLine: "La reinvención completa.",
      outcomeText:
        "Nunca más te pararás frente a tu clóset sintiéndote perdida.",
      description:
        "Análisis completo, auditoría de clóset, compras personalizadas y un sistema de estilo construido alrededor de tu vida.",
      valueCallout:
        "12–15 horas de trabajo dedicado uno a uno a través de 7 entregables distintos",
      imageAlt: "Lu seleccionando outfits durante una auditoría de clóset",
      inclusions: [
        { text: "Cuestionario integral y revisión de estilo de vida" },
        { text: "Análisis colorimétrico completo con calibración Pantone" },
        { text: "Análisis morfológico con optimización de silueta" },
        { text: "Auditoría de clóset y detox de guardarropa (2–3 hrs)" },
        { text: "Compras personalizadas curadas (3–4 hrs)" },
        { text: "Documento de Perfil de Identidad y Mapeo de Estilo de Vida" },
        { text: "Guía de estilo digital con 15–20 outfits completos" },
      ],
      duration: "~12–15 horas en múltiples sesiones",
      cta: {
        text: "RESERVA TU TRANSFORMACIÓN",
        href: getCalendlyUrl("identityTransformation"),
        external: true,
      },
    },
  ],

  transition: {
    heading: "Cuando estés lista para más",
    body: "La mayoría de las clientas empiezan con la sesión gratis, luego eligen su camino.",
  },

  socialProof: [
    {
      quote:
        "La sesión de Lu me dio la confianza de que mi outfit estaba trabajando a mi favor. Gané el listado.",
      name: "C.L.",
      title: "Agente de Bienes Raíces, Miami",
      initials: "CL",
      social: "@placeholder",
    },
    {
      quote:
        "Dejé de comprar ropa que quedaba sin usar. Lu identificó 8 colores que nunca había considerado.",
      name: "A.R.",
      title: "Ejecutiva de Finanzas",
      initials: "AR",
      social: "@placeholder",
    },
  ],

  visualMoment: {
    quote: "Mi guardarropa es la mitad del tamaño y el doble de efectivo.",
    name: "M.T.",
    title: "Ejecutiva de Salud",
    initials: "MT",
  },

  faq: {
    heading: "Preguntas Que Escuchamos Seguido",
  },

  finalCta: {
    heading: "¿Tienes preguntas? Habla con Lu directamente.",
    body: "Reserva una conversación de cortesía de 20 minutos. Sin presión, sin compromiso.",
    cta: {
      text: "RESERVA TU CONSULTA GRATIS",
      href: getCalendlyUrl("powerPalette"),
      external: true,
    },
  },

  seo: {
    title: "Análisis de Color y Consultoría de Imagen | Image by LUI Miami",
    description:
      "Análisis de color y consultoría de imagen profesional en Miami. Colorimetría, análisis morfológico y mapeo de estilo de vida. Desde $400.",
  },
};
