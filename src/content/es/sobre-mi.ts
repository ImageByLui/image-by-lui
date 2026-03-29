import type { AboutContent } from "@/types/content";
import { getCalendlyUrl } from "@/config/site.config";

// =============================================================================
// About Page Content — Spanish (V7 — Final Approved)
// =============================================================================
// Natively written Spanish, NOT a translation.
// =============================================================================

export const aboutContentEs: AboutContent = {
  hero: {
    headline: "Precisión como base. Calidez como entrega.",
    subheadline:
      "Nacida en Colombia. Basada en Miami. Consultora de imagen diagnóstica que ayuda a profesionales a alinear cómo se ven con hacia dónde van.",
    imageAlt: "Lu — retrato en luz natural",
  },

  pullQuote:
    "Si alguna vez te paraste frente a tu clóset antes de un día importante y pensaste 'no tengo nada que ponerme' — te entiendo.",

  origin: {
    intro: [
      "Lu sabe lo que es navegar entre dos culturas. La imagen correcta abre puertas — la incorrecta las mantiene cerradas.",
      "Su camino comenzó en una escuela de diseño de moda en Colombia. No con tendencias — con estructura:",
    ],
    disciplines: [
      "Patronaje",
      "Ciencia Textil",
      "Ingeniería de Prendas",
    ],
    closing:
      "Esa base llevó a años de formación especializada — colorimetría certificada, estilismo profesional, producción de moda — y una metodología clara: imagen construida sobre ciencia, no tendencias.",
    imageAlt: "Lu con muestras de color",
  },

  sessionImageAlt: "Lu durante una sesión de drapeado de color",

  clientVoice: {
    quote:
      "Lu no solo cambió mi guardarropa — cambió cómo entro a una habitación. Por fin me veo como la líder que soy.",
    name: "C.L.",
    initials: "CL",
    title: "Agente de Bienes Raíces, Miami",
  },

  imageStrip: {
    leftAlt: "Muestras de color",
    rightAlt: "Espacio de trabajo de Lu",
  },

  philosophy: {
    statement:
      "Tu imagen debe reflejar tu ambición, tu cultura y tu realidad.",
    closer:
      "No una portada de revista. No la idea de éxito de otra persona. La tuya.",
  },

  cta: {
    heading: "¿Lista para empezar?",
    body: "Tu Power Palette es un análisis de color de cortesía de 20 minutos — y el primer paso para entender cómo el método LUI puede trabajar para ti.",
    cta: {
      text: "RESERVA TU SESIÓN GRATIS",
      href: getCalendlyUrl("powerPalette"),
      external: true,
    },
  },

  seo: {
    title: "Sobre Lu | Consultora de Imagen Miami | Image by LUI",
    description:
      "Conoce a Lu — consultora de imagen bilingüe en Miami. Formación en diseño de moda, especialista certificada en colorimetría, y metodología diagnóstica para profesionales.",
  },
};
