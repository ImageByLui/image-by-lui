import type { HomeContent } from "@/types/content";
import { getCalendlyUrl, getWhatsAppUrl } from "@/config/site.config";
import { siteConfig } from "@/config/site.config";

// =============================================================================
// Homepage Content — Spanish (V7 — LUI-DESK-007 §18)
// =============================================================================
// Natively written Spanish. Uses "tú" for personal/encouraging contexts.
// =============================================================================

export const homeContentEs: HomeContent = {
  hero: {
    label: "Image by LUI",
    headline: "Tu Imagen, Dise\u00f1ada con Intenci\u00f3n.",
    subcopy: "Estrategia de imagen para profesionales que no dejan su presencia al azar.",
    cta: {
      text: "DESCUBRE TUS COLORES",
      href: getCalendlyUrl("powerPalette"),
      external: true,
    },
    trustNote: "De cortes\u00eda \u00b7 20 minutos \u00b7 Sin compromiso",
    mobileImageAlt: "Lu, consultora de imagen \u2014 Image by LUI Miami",
    desktopImageAlt: "Lu, fundadora de Image by LUI, consultor\u00eda de imagen diagn\u00f3stica Miami",
  },

  statement: {
    heading: "No adivinamos. Analizamos.",
    body: "Colorimetr\u00eda. Arquitectura corporal. Ciencia del estilo. Cada recomendaci\u00f3n comienza con un diagn\u00f3stico.",
  },

  pullquote: {
    quote: "Cada detalle fue elegido para resaltar lo mejor de m\u00ed. Me encant\u00f3 todo el proceso. El vestido fue absolutamente perfecto.",
    name: "Silvia",
    handle: "@silviacastrillon",
    handleUrl: "https://www.instagram.com/silviacastrillon",
  },

  servicesMenu: {
    heading: "Tu camino comienza aqu\u00ed",
    services: [
      {
        name: "Estilismo de Ocasi\u00f3n",
        teaser: "Para tu pr\u00f3ximo evento \u2014 curadur\u00eda de vestuario, estilismo y acompa\u00f1amiento el d\u00eda del evento.",
        price: "Desde $250",
        linkText: "Explora tres paquetes \u2192",
        linkHref: "/es/servicios/estilismo-de-ocasion",
      },
      {
        name: "Consultor\u00eda de Imagen",
        teaser: "Una transformaci\u00f3n completa \u2014 cuatro componentes, m\u00e1s de 20 horas, siete entregables.",
        price: "$1,500",
        linkText: "Conoce el proceso completo \u2192",
        linkHref: "/es/servicios/consultoria-de-imagen",
      },
    ],
  },

  powerPalette: {
    question: "\u00bfNo sabes por d\u00f3nde empezar?",
    name: "Tu Paleta de Poder",
    meta: "Gratis \u00b7 20 min \u00b7 Virtual",
    description: "Identificamos tu subtono natural y revelamos los cinco colores que hacen que tus rasgos cobren vida. El punto de partida de cada compromiso LUI.",
    cta: {
      text: "RESERVA TU SESI\u00d3N GRATIS",
      href: getCalendlyUrl("powerPalette"),
      external: true,
    },
    note: "Sin compromiso",
  },

  meetLu: {
    label: "LA FUNDADORA",
    heading: "Conoce a Lu",
    lead: "Precisi\u00f3n diagn\u00f3stica con calidez personal.",
    bio: "Nacida en Colombia. Basada en Miami. Con una base en dise\u00f1o de moda y formaci\u00f3n especializada en colorimetr\u00eda y estilismo, Lu construy\u00f3 LUI sobre una creencia simple: tu imagen debe ser tan intencional como tu ambici\u00f3n.",
    learnMoreText: "Conoce m\u00e1s \u2192",
    learnMoreHref: "/es/sobre-mi",
    instagramText: "@imagebylui",
    instagramHref: siteConfig.instagram.url,
    imageAlt: "Lu, consultora de imagen y fundadora de Image by LUI",
  },

  moreVoices: {
    heading: "Lo que experimentan las clientas",
    testimonials: [
      {
        quote: "Lu entendi\u00f3 mi estilo, mi cuerpo y lo que quer\u00eda proyectar. Sal\u00ed con herramientas que uso todos los d\u00edas para sentirme m\u00e1s segura.",
        name: "Valentina",
        handle: "@valentinapachecof_",
        handleUrl: "https://www.instagram.com/valentinapachecof_",
        photo: "/images/testimonials/vp.jpg",
      },
      {
        quote: "Sabe exactamente c\u00f3mo hacerte sentir c\u00f3moda y segura con lo que llevas puesto. Me encant\u00f3.",
        name: "Ang\u00e9lica",
        handle: "@angelicagp8",
        handleUrl: "https://www.instagram.com/angelicagp8",
        photo: "/images/testimonials/ap.jpg",
      },
    ],
  },

  bottomCta: {
    heading: "\u00bfLista para empezar?",
    body: "Un an\u00e1lisis de color de cortes\u00eda toma 20 minutos y le da a Lu todo lo que necesita para recomendarte el camino correcto.",
    primaryCta: {
      text: "RESERVA TU AN\u00c1LISIS DE COLOR GRATIS",
      href: getCalendlyUrl("powerPalette"),
      external: true,
    },
    whatsappText: "O escr\u00edbele a Lu por WhatsApp",
    whatsappHref: getWhatsAppUrl("es"),
  },

  stickyBar: {
    text: "An\u00e1lisis de color gratis \u00b7 20 min",
    href: getCalendlyUrl("powerPalette"),
  },

  seo: {
    title: "Consultora de Imagen Miami \u2014 Estilismo Diagn\u00f3stico | Image by LUI",
    description: "Consultor\u00eda de imagen diagn\u00f3stica y estilismo de ocasi\u00f3n para profesionales en Miami. An\u00e1lisis de color de cortes\u00eda de 20 min. Biling\u00fce EN/ES.",
    ogImage: "/og/og-default.jpg",
  },
};
