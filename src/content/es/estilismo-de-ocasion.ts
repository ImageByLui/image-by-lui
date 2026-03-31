import type { OccasionStylingContent } from "@/types/content";
import { getCalendlyUrl, getWhatsAppUrl } from "@/config/site.config";

// =============================================================================
// Estilismo de Ocasión Content — Spanish
// =============================================================================
// Natively written Spanish, NOT a translation.
// New page: /es/servicios/estilismo-de-ocasion
// =============================================================================

export const estilismoDeOcasionContent: OccasionStylingContent = {
  hero: {
    label: "Estilismo de Ocasión",
    headline: "Tu evento. Tu look. Resuelto.",
    description:
      "Analizamos la ocasión, su rol en ella, y lo que necesita comunicar a través de su presencia — para que llegue sin nada que cuestionar.",
    imageAlt:
      "Lu estilizando a una clienta para un evento formal en Miami",
    tags: ["Bodas", "Galas", "Conferencias", "Entrevistas"],
  },

  howItWorks: {
    label: "Cómo funciona",
    steps: [
      {
        title: "Cuéntenos sobre su evento",
        description:
          "La ocasión, su rol, el código de vestimenta y lo que quiere comunicar. Construimos una estrategia alrededor de su momento.",
      },
      {
        title: "Creamos su look",
        description:
          "Comenzando con lo que ya tiene. Si necesita piezas nuevas, las buscamos — en línea o presencialmente en tiendas seleccionadas.",
      },
      {
        title: "Usted llega lista",
        description:
          "Look completo preparado, notas de estilismo incluidas. Con VIP, Lu está presente el día del evento para ajustes finales.",
      },
    ],
    imageAlt:
      "Lu seleccionando piezas y coordinando un look completo para un evento",
  },

  pricing: {
    label: "Elija su nivel",
    subheading:
      "Cada nivel incluye una consulta personalizada pre-evento",
    tiers: [
      {
        name: "Essential",
        price: "$250",
        subtitle: "Curaduría virtual desde su guardarropa",
        duration: "2–3 hrs",
        description:
          "Consultamos sobre su evento, creamos opciones de outfit priorizando lo que ya tiene, y buscamos piezas nuevas virtualmente si es necesario.",
        inclusions: [
          "Consulta estratégica pre-evento",
          "Selección de outfits de su guardarropa",
          "Curaduría virtual si se necesitan piezas nuevas",
          "Notas de estilismo entregadas",
        ],
        ctaText: "Reservar Essential",
        ctaHref: getCalendlyUrl("powerPalette"),
        variant: "essential",
      },
      {
        name: "Complete",
        price: "$450",
        subtitle: "Compras presenciales con Lu",
        duration: "5–6 hrs",
        description:
          "Todo lo de Essential — más Lu va con usted. Compras acompañadas presenciales en tiendas seleccionadas con asesoría en tiempo real sobre fit, color y versatilidad.",
        inclusions: [
          "Todo lo de Essential",
          "Compras acompañadas presenciales",
          "Asesoría en tiempo real de fit y color",
          "Look completo para el evento, listo para usar",
        ],
        ctaText: "Reservar Complete",
        ctaHref: getCalendlyUrl("powerPalette"),
        variant: "complete",
        badge: "Recomendado",
        imageAlt:
          "Lu y clienta seleccionando piezas en una boutique",
      },
      {
        name: "VIP",
        price: "$750",
        subtitle: "Lu con usted el día del evento",
        duration: "8–12 hrs",
        description:
          "Todo lo de Complete — más Lu está presente el día del evento. Revisión final del outfit, ajustes de último momento, coordinación de accesorios y un chequeo de confianza antes de su entrada.",
        inclusions: [
          "Todo lo de Complete",
          "Acompañamiento el día del evento",
          "Ajustes finales y coordinación",
          "Chequeo de confianza antes de llegar",
        ],
        ctaText: "Reservar VIP",
        ctaHref: getCalendlyUrl("powerPalette"),
        variant: "vip",
        footnote:
          "Ideal para novias, ejecutivas en eventos de alta visibilidad y apariciones en medios",
      },
    ],
  },

  testimonial: {
    quote:
      "Me preparaba para una gala y tenía dos semanas para armar algo. Lu encontró piezas en mi clóset que había olvidado por completo, agregó dos nuevas, y esa noche recibí más cumplidos que en años.",
    name: "M.R.",
    initials: "MR",
    title: "Directora de Marketing, Miami",
  },

  gallery: {
    label: "Estilizada por Lu",
    subheading: "Looks de evento creados para clientas reales",
    items: [
      { label: "Look de gala", caption: "Gala de etiqueta", background: "stone" },
      { label: "Conferencia corporativa", caption: "Conferencia corporativa", background: "ivory" },
      { label: "Invitada de boda", caption: "Invitada de boda", background: "stone" },
      { label: "Entrevista ejecutiva", caption: "Entrevista ejecutiva", background: "ivory" },
    ],
  },

  bottomCta: {
    heading: "¿Tienes un evento pronto?",
    description:
      "Cuéntanos sobre él. Un análisis de color de cortesía toma 20 minutos y le da a Lu todo lo que necesita para recomendarte el nivel de apoyo ideal para tu momento.",
    primaryCta: {
      text: "CUÉNTALE A LU SOBRE TU EVENTO",
      href: getWhatsAppUrl("es"),
      external: true,
    },
    secondaryText: "O",
    secondaryLinkText: "agenda un análisis de color de cortesía",
    secondaryLinkHref: getCalendlyUrl("powerPalette"),
    faqLinkText: "¿Tienes más preguntas? Visita nuestro FAQ →",
    faqLinkHref: "/es/faq",
  },

  stickyBar: {
    text: "Análisis de color gratis",
    subtext: "· 20 min",
    href: getCalendlyUrl("powerPalette"),
  },

  seo: {
    title: "Estilismo de Ocasión desde $250 en Miami | Image by LUI",
    description:
      "Estilismo para bodas, galas, conferencias y entrevistas. Tres niveles desde $250. Analizamos su evento y creamos su look. Miami, bilingüe.",
    ogImage: "/og/occasion-styling.jpg",
  },
};
