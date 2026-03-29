import type { HomeContent } from "@/types/content";
import { getCalendlyUrl } from "@/config/site.config";
import { siteConfig } from "@/config/site.config";

// =============================================================================
// Homepage Content — Spanish (V6 — Final Approved)
// =============================================================================
// Natively written Spanish, NOT a translation.
// =============================================================================

export const homeContentEs: HomeContent = {
  hero: {
    headline: "Tu Imagen, Arquitectura de Estilo.",
    subheadline:
      "Cuando entras a una habitación, tu imagen habla antes que tú. Nos aseguramos de que diga exactamente lo que tú quieres.",
    cta: {
      text: "DESCUBRE TUS COLORES",
      href: getCalendlyUrl("powerPalette"),
      external: true,
    },
    ctaSubtext:
      "Sesión de cortesía de 20 minutos — virtual o presencial",
    imageAlt:
      "Lu consultando con una clienta durante una sesión de estrategia de imagen",
  },

  quote: {
    text: "Viste mal y notarán el vestido; viste impecable y notarán a la mujer.",
    attribution: "Coco Chanel",
  },

  whoIsThisFor: {
    sectionHeading: "Diseñado para Profesionales Que...",
    cards: [
      {
        headline: "Navegan dos culturas",
        body: "Te mudaste a EE.UU. por tu carrera. LUI te ayuda a conectar ambos mundos — estratégicamente.",
      },
      {
        headline: "Destacan en un mercado saturado",
        body: "En una ciudad con 61,000 agentes de bienes raíces, tu imagen es tu primera presentación.",
      },
      {
        headline: "Elevan su imagen sin improvisación",
        body: "Sabes que tu imagen importa pero no tienes tiempo para resolverlo. LUI entrega un sistema claro y ejecutable.",
      },
      {
        headline: "Se preparan para lo que viene",
        body: "Un ascenso. Un cambio de carrera. Cuando lo que está en juego es alto, tu imagen debe ser tan intencional como tu estrategia.",
      },
    ],
  },

  servicePreview: {
    heading: "Por Dónde Empezar",
    cards: [
      {
        name: "Tu Power Palette",
        price: "Gratis",
        description:
          "Un análisis de color de 20 minutos que identifica tu subtono y revela tus 5 colores de poder.",
        cta: {
          text: "DESCUBRE TUS COLORES",
          href: getCalendlyUrl("powerPalette"),
          external: true,
        },
      },
      {
        name: "Primera Impresión",
        price: "$400",
        positioningLine: "Una inversión profesional en claridad.",
        outcomeText: "Saldrás sabiendo",
        description:
          "exactamente qué colores y siluetas funcionan para tu cuerpo y tu carrera — con 3–5 outfits que puedes usar esta semana.",
        detailsLine: "~2 horas · Análisis de color · Diagnóstico de estilo · Lookbook digital",
        cta: {
          text: "Explora Primera Impresión",
          href: "/es/servicios#primera-impresion",
        },
      },
      {
        name: "Transformación de Identidad",
        price: "$1,800",
        positioningLine: "La reinvención completa.",
        outcomeText: "Nunca más te pararás frente a tu clóset sintiéndote perdida.",
        description:
          "Análisis colorimétrico y morfológico completo, auditoría de clóset, compras personalizadas y un sistema de estilo construido alrededor de tu vida.",
        detailsLine: "12–15 horas a través de 7 entregables distintos",
        cta: {
          text: "Explora Transformación",
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
    body: "Nacida en Colombia. Basada en Miami. Con formación en diseño de moda y entrenamiento especializado en colorimetría y estilismo, Lu aporta precisión diagnóstica y calidez personal a cada compromiso.",
    link: {
      text: "Más sobre Lu",
      href: "/es/sobre-mi",
    },
    instagramLink: {
      text: "@imagebylui",
      href: siteConfig.instagram.url,
      external: true,
    },
  },

  finalCta: {
    heading: "¿Tienes preguntas? Habla con Lu directamente.",
    body: "Ya sea que estés lista para reservar o simplemente quieras saber más, Lu estará encantada de conversar — sin presión, sin compromiso.",
    cta: {
      text: "RESERVA UNA CONVERSACIÓN GRATIS",
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
