import type { HomeContent } from "@/types/content";
import { getCalendlyUrl } from "@/config/site.config";

// =============================================================================
// Homepage Content — Spanish (Natively written, NOT a translation)
// =============================================================================

export const homeContentEs: HomeContent = {
  hero: {
    headline: "Tu Imagen, Arquitectura de Estilo.",
    subheadline:
      "Image by LUI es una práctica de consultoría de imagen diagnóstica en Miami. Mediante colorimetría, análisis morfológico y mapeo de estilo de vida, ayudamos a profesionales a alinear cómo se ven con hacia dónde van.",
    cta: {
      text: "DESCUBRE TU POWER PALETTE",
      href: getCalendlyUrl("powerPalette"),
      external: true,
    },
    ctaSubtext:
      "Análisis de color de cortesía — 20 minutos, virtual o presencial",
    imageAlt:
      "Mujer profesional con un atuendo a medida revisando muestras de color durante una sesión de consultoría de imagen en un entorno moderno y luminoso",
  },

  methodology: {
    heading: "Una Metodología, No un Cambio de Look",
    body: "La consultoría de imagen en LUI se basa en precisión diagnóstica. No adivinamos qué se ve bien — lo analizamos. Tres pilares definen cada compromiso:",
    items: [
      {
        title: "Colorimetría",
        description:
          "Mediante telas profesionales calibradas en sistema Pantone, identificamos la paleta que realza tus rasgos naturales.",
      },
      {
        title: "Análisis Morfológico",
        description:
          "Mapeamos las proporciones, líneas y estructura de tu cuerpo para determinar las siluetas que trabajan con tu arquitectura natural.",
      },
      {
        title: "Mapeo de Estilo de Vida",
        description:
          "Cada recomendación se alinea con cómo realmente vives y trabajas — tu industria, tu entorno, tus metas.",
      },
    ],
    closingLine:
      "Análisis de color + arquitectura corporal + mapeo de estilo de vida = una estrategia de imagen basada en ciencia, no en improvisación.",
  },

  servicePreview: {
    heading: "Por Dónde Empezar",
    cards: [
      {
        name: "Tu Power Palette",
        price: "Gratis",
        description:
          "Un análisis de color de cortesía de 20 minutos que identifica tu subtono y tus 5 colores de poder. El primer paso para entender cómo el color transforma tu presencia.",
        cta: {
          text: "RESERVA TU SESIÓN",
          href: getCalendlyUrl("powerPalette"),
          external: true,
        },
      },
      {
        name: "Primera Impresión",
        price: "$400",
        description:
          "Una sesión diagnóstica de estilo personal de 90 minutos. Recibe tu análisis de color, 3–5 estrategias de outfits con tu guardarropa actual y un lookbook digital con dirección clara.",
        cta: {
          text: "EXPLORA PRIMERA IMPRESIÓN",
          href: "/es/servicios#primera-impresion",
        },
      },
      {
        name: "Transformación de Identidad",
        price: "$1,800",
        description:
          "La experiencia LUI completa. Análisis colorimétrico y morfológico integral, auditoría de clóset, compras personalizadas y una guía de estilo con 15–20 outfits curados.",
        cta: {
          text: "EXPLORA TRANSFORMACIÓN DE IDENTIDAD",
          href: "/es/servicios#transformacion-de-identidad",
        },
      },
    ],
  },

  socialProof: {
    heading: "Lo Que Experimentan Nuestros Clientes",
  },

  aboutPreview: {
    heading: "Conoce a Lu",
    body: "Con una formación en diseño de moda, certificaciones especializadas en colorimetría y estilismo, y un enfoque diagnóstico refinado a lo largo de años de práctica, Lu aporta precisión y calidez a cada compromiso. Nacida en Colombia, basada en Miami, fluida en los matices culturales que definen cómo los profesionales se presentan en una ciudad global.",
    link: {
      text: "Conoce más sobre Lu y la metodología LUI →",
      href: "/es/sobre-mi",
    },
  },

  instagramFeed: {
    heading: "El Método LUI en Acción",
    subtext: "@imagebylui",
  },

  finalCta: {
    heading: "¿Lista para Descubrir Tus Mejores Colores?",
    body: "Tu Power Palette es una sesión de cortesía de 20 minutos donde identificamos tu subtono y revelamos los cinco colores que te hacen lucir más segura, alineada y poderosa.",
    cta: {
      text: "DESCUBRE TU POWER PALETTE",
      href: getCalendlyUrl("powerPalette"),
      external: true,
    },
  },

  seo: {
    title: "Image by LUI | Consultora de Imagen Diagnóstica Miami",
    description:
      "Consultora de imagen en Miami. Colorimetría, análisis morfológico y mapeo de estilo de vida para profesionales. Reserva tu análisis de color de cortesía.",
  },
};
