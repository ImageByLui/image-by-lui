import type { AboutContent } from "@/types/content";
import { getCalendlyUrl } from "@/config/site.config";

// =============================================================================
// About Page Content — Spanish (V5 — Editorial Redesign)
// =============================================================================
// Natively written Spanish, NOT a translation.
// =============================================================================

export const aboutContentEs: AboutContent = {
  hero: {
    headline: "Precisión como base. Calidez como entrega.",
    subheadline:
      "Nacida en Colombia. Basada en Miami. Consultora de imagen diagnóstica para profesionales que necesitan que su apariencia trabaje tan estratégicamente como ellos.",
    pullQuote:
      "Si alguna vez te paraste frente a tu clóset antes de un día importante y pensaste 'no tengo nada que ponerme' — te entiendo.",
    imageAlt:
      "Lu — retrato en luz natural",
  },

  story: {
    part1: [
      "Creciendo en Colombia y luego construyendo una carrera entre culturas, Lu experimentó de primera mano cómo la imagen correcta abre puertas — y la incorrecta las mantiene cerradas.",
      "Su camino comenzó en una escuela de diseño de moda. No con tendencias — con estructura. Patronaje. Ciencia textil. Cómo las prendas realmente interactúan con el cuerpo humano. Esa base formó todo lo que vino después.",
    ],
    part1ImageAlt: "Lu con muestras de color",
    part2: [
      "Después de años de formación especializada — <strong>colorimetría certificada, estilismo profesional, producción de moda</strong> — surgió una metodología clara.",
      "La imagen no se trata de seguir tendencias ni de copiar looks. Se trata de entender la ciencia del <strong>color, la proporción y el contexto personal</strong> — y usar ese entendimiento para construir algo intencional.",
    ],
    part2ImageAlt: "Sesión de drapeado de color",
  },

  clientVoice: {
    quote:
      "Lu no solo cambió mi guardarropa — cambió cómo entro a una habitación. Por fin me veo como la líder que soy.",
    attribution: "C.L., Agente de Bienes Raíces, Miami",
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
