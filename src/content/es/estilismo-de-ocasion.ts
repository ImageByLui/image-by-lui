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
        mobileImage: "/images/mobile/services/occasion-complete.jpg",
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
      "Quedé encantada con el servicio de Styling, cada detalle fue pensado para resaltar lo mejor de mí. Amé todo el proceso desde la asesoría hasta el resultado final. El vestido fue simplemente perfecto! Súper recomendado.",
    name: "Silvia",
    initials: "SC",
    title: "Clienta, Miami",
    photo: "/images/testimonials/st.jpg",
    handle: "@silviacastrillon",
  },

  gallery: {
    label: "Estilizada por Lu",
    subheading: "Looks de evento creados para clientas reales",
    items: [
      { label: "Look de gala", caption: "Gala de etiqueta", background: "stone", image: "/images/mobile/gallery/styled-gala.jpg" },
      { label: "Conferencia corporativa", caption: "Conferencia corporativa", background: "ivory", image: "/images/mobile/gallery/styled-corporate.jpg" },
      { label: "Invitada de boda", caption: "Invitada de boda", background: "stone", image: "/images/mobile/gallery/styled-wedding-1.jpg" },
      { label: "Entrevista ejecutiva", caption: "Entrevista ejecutiva", background: "ivory", image: "/images/mobile/gallery/styled-model.jpg" },
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

  // ===========================================================================
  // Desktop-specific overrides — LUI-DESK-003
  // ===========================================================================
  desktop: {
    hero: {
      image: "/images/heroes/occasion-hero-lu-gala.jpg",
      imagePosition: "center 40%",
      filter: "saturate(0.7) sepia(0.06) brightness(1.0)",
      minHeight: 480,
      photoWidth: "45%",
    },
    howItWorks: {
      heading: "Cómo funciona",
      steps: [
        {
          title: "Cuéntenos sobre su evento",
          description:
            "La ocasión, el código de vestimenta y lo que quiere comunicar. Construimos una estrategia para su momento.",
        },
        {
          title: "Creamos su look",
          description:
            "Comenzando con lo que ya tiene. Si necesita piezas nuevas, las conseguimos en tiendas seleccionadas.",
        },
        {
          title: "Usted llega lista",
          description:
            "Look completo preparado con notas de estilismo. Con VIP, Lu está presente el día del evento.",
        },
      ],
    },
    pricing: {
      heading: "Elija su nivel",
      subheading:
        "Todos los paquetes comienzan con una sesión estratégica para su evento",
      tiers: [
        {
          name: "Essential",
          price: "$250",
          duration: "2–3 horas",
          description:
            "Curaduría virtual desde su guardarropa — ideal cuando tiene piezas pero necesita orientación experta para combinarlas.",
          inclusions: [
            "Consulta estratégica pre-evento",
            "Selección de outfits de su guardarropa",
            "Curaduría virtual si se necesitan piezas nuevas",
            "Notas de estilismo entregadas",
          ],
          ctaText: "RESERVAR ESSENTIAL",
          variant: "essential",
          ctaStyle: "terracotta",
        },
        {
          name: "Complete",
          price: "$450",
          duration: "5–6 horas",
          description:
            "Compras presenciales con Lu — todo lo de Essential más compras acompañadas con asesoría de fit y color en tiempo real.",
          inclusions: [
            "Todo lo de Essential",
            "Compras acompañadas presenciales",
            "Asesoría en tiempo real de fit y color",
            "Look completo para el evento, listo para usar",
          ],
          ctaText: "RESERVAR COMPLETE",
          variant: "complete",
          badge: "Recomendado",
          ctaStyle: "gold",
        },
        {
          name: "VIP",
          price: "$750",
          duration: "8–12 horas",
          description:
            "Lu con usted el día del evento — todo lo de Complete más acompañamiento y coordinación final.",
          inclusions: [
            "Todo lo de Complete",
            "Acompañamiento el día del evento",
            "Ajustes finales y coordinación",
            "Chequeo de confianza antes de llegar",
          ],
          ctaText: "RESERVAR VIP",
          variant: "vip",
          ctaStyle: "terracotta",
        },
      ],
    },
    gallery: {
      heading: "Estilizada por Lu",
      items: [
        { image: "/images/gallery/styled-corporate.jpg", alt: "Estilismo para evento corporativo" },
        { image: "/images/gallery/styled-gala.jpg", alt: "Estilismo para gala de etiqueta" },
        { image: "/images/gallery/styled-model.jpg", alt: "Estilismo editorial" },
        { image: "/images/gallery/styled-wedding-1.jpg", alt: "Estilismo para invitada de boda" },
        { image: "/images/gallery/styled-wedding-2.jpg", alt: "Estilismo para invitada de boda" },
      ],
    },
    faqPreview: {
      heading: "Preguntas frecuentes",
      items: [
        {
          question: "¿Con cuánta anticipación debo reservar?",
          answer:
            "Idealmente 2–4 semanas antes de su evento. Para VIP con acompañamiento el día del evento, mínimo 3–4 semanas. ¿Algo más pronto? Escríbanos — haremos lo posible.",
        },
        {
          question: "¿Qué pasa si no tengo nada que ponerme?",
          answer:
            "No es problema. Complete y VIP incluyen compras acompañadas presenciales donde Lu le ayuda a encontrar todo lo que necesita.",
        },
      ],
      linkText: "Ver todas las preguntas →",
      linkHref: "/es/faq",
    },
    crossNav: {
      text: "¿Buscas una transformación de imagen completa?",
      linkText: "Explora Consultoría de Imagen →",
      linkHref: "/es/servicios/consultoria-de-imagen",
    },
    bottomCta: {
      heading: "¿Tienes un evento pronto?",
      description:
        "Un análisis de color de cortesía toma 20 minutos y le da a Lu todo lo que necesita para recomendarte el nivel ideal para tu momento.",
      primaryCta: {
        text: "CUÉNTALE A LU SOBRE TU EVENTO",
        href: getCalendlyUrl("powerPalette"),
        external: true,
      },
      secondaryText: "O escríbele a Lu por WhatsApp",
      secondaryLinkHref: getWhatsAppUrl("es"),
    },
  },
};
