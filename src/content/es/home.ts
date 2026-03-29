import type { HomeContent } from "@/types/content";
import { getCalendlyUrl } from "@/config/site.config";
import { siteConfig } from "@/config/site.config";

// =============================================================================
// Homepage Content — Spanish (V2 — Natively written, NOT a translation)
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

  whoIsThisFor: {
    sectionHeading: "Diseñado para Profesionales Que...",
    cards: [
      {
        headline: "Navega dos culturas con confianza",
        body: "Te mudaste a EE.UU. por tu carrera. Ahora navegas los códigos de vestimenta corporativos americanos mientras mantienes la identidad que te hace ser tú. LUI te ayuda a conectar ambos mundos — estratégicamente.",
      },
      {
        headline: "Destaca en un mercado saturado",
        body: "En una ciudad con 61,000 agentes de bienes raíces, tu imagen es tu primera presentación de listado. Un look estratégico y cohesivo genera confianza antes de que digas una palabra.",
      },
      {
        headline: "Eleva tu imagen sin improvisación",
        body: "Sabes que tu imagen profesional importa pero no tienes tiempo para resolverlo solo. La metodología diagnóstica de LUI entrega un sistema claro y ejecutable — resuelto por ti.",
      },
      {
        headline: "Prepárate para lo que viene",
        body: "Un ascenso. Un cambio de carrera. Un rol público. Una transición importante. Cuando lo que está en juego es alto, tu imagen debe ser tan intencional como tu estrategia.",
      },
    ],
  },

  howItWorks: {
    sectionHeading: "Tres Pasos Hacia una Imagen Estratégica",
    steps: [
      {
        number: 1,
        heading: "Descubre Tus Colores",
        body: "Reserva tu sesión Power Palette de cortesía. En 20 minutos, identificamos tu subtono y revelamos los cinco colores que te hacen lucir más poderosa.",
      },
      {
        number: 2,
        heading: "Recibe Tu Perfil Diagnóstico",
        body: "Mediante colorimetría, análisis morfológico y mapeo de estilo de vida, construimos una estrategia de imagen personalizada basada en tus rasgos y metas.",
      },
      {
        number: 3,
        heading: "Transforma Tu Presencia",
        body: "Con tu marco personalizado en mano, cada elección de outfit se vuelve intencional. Tu guardarropa trabaja para ti — y el mundo responde diferente.",
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

  transformations: {
    sectionHeading: "Transformaciones Reales",
    sectionSubheading: "Mira cómo la metodología LUI genera cambios medibles.",
    cards: [
      {
        caption: "Profesional corporativa — Realineación de guardarropa para un nuevo rol ejecutivo",
      },
      {
        caption: "Agente de bienes raíces — Identidad visual cohesiva para presencia con clientes",
      },
      {
        caption: "Emprendedora — Refinamiento de marca personal para presentaciones públicas",
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

  instagramCta: {
    heading: "Sigue el Proceso",
    body: "Mira el método LUI en acción — sesiones de análisis de color, transformaciones de estilo e ideas diarias de estrategia de imagen.",
    cta: {
      text: "SIGUE A @IMAGEBYLUI EN INSTAGRAM",
      href: siteConfig.instagram.url,
      external: true,
    },
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
