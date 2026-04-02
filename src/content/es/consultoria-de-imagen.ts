import type { ImageConsultingContent } from "@/types/content";
import { getCalendlyUrl, getWhatsAppUrl } from "@/config/site.config";

// =============================================================================
// Consultoría de Imagen Content — Spanish
// =============================================================================
// New page: /es/servicios/consultoria-de-imagen
// =============================================================================

export const consultoriaDeImagenContent: ImageConsultingContent = {
  hero: {
    label: "Consultoría de Imagen",
    headline: "Nunca más dudar frente a tu clóset.",
    description:
      "Una reinvención diagnóstica de su imagen profesional — basada en colorimetría, análisis morfológico y ciencia del estilo personal. Cuatro componentes. Más de 20 horas. Un sistema que usará por años.",
    tags: ["Ejecutivas", "Emprendedoras", "Transiciones", "Agentes inmobiliarias"],
    imageAlt:
      "Lu realizando una sesión diagnóstica completa de consultoría de imagen en Miami",
  },

  pricing: {
    price: "$1,500",
    priceStrikethrough: "$2,000",
    priceNote: "Tarifa introductoria — disponibilidad limitada",
    summary: [
      { value: "4", label: "componentes" },
      { value: "20–24", label: "horas" },
      { value: "7", label: "entregables" },
    ],
  },

  journey: {
    label: "Su proceso",
    subheading:
      "Así se ve su transformación — cuatro componentes a lo largo de 4 a 6 sesiones",
    components: [
      {
        stepNumber: 1,
        name: "Análisis Personal Completo",
        duration: "~4 horas",
        subtitle: "La base diagnóstica",
        description:
          "Todo lo que sigue se construye sobre lo que descubrimos aquí. Un análisis profundo de sus colores, forma de rostro, arquitectura corporal y estilo personal — la base diagnóstica de cada recomendación.",
        imageAlt: "Lu realizando análisis profesional de color con telas Pantone calibradas",
        image: "/images/journey/color-analysis.jpg",
        inclusions: [
          { key: "Análisis de color", detail: "paleta completa calibrada con Pantone, más allá de Tu Paleta de Poder" },
          { key: "Análisis facial", detail: "cortes de cabello, escotes, accesorios y marcos ideales" },
          { key: "Arquitectura corporal", detail: "cortes, siluetas y telas para su estructura natural" },
          { key: "Identidad de estilo", detail: "su arquetipo equilibrado con objetivos profesionales" },
        ],
        deliverableLine: "Usted recibe: Tarjeta de paleta de color completa + perfil de estilo personal",
      },
      {
        stepNumber: 2,
        name: "Detox de Clóset",
        duration: "~6 horas",
        subtitle: "Transformación de guardarropa",
        description:
          "Transformamos su guardarropa de abrumador a funcional. Descubrirá que tiene más de lo que pensaba — y sabrá exactamente qué falta.",
        imageAlt: "Lu evaluando el guardarropa de una clienta — clasificando, organizando, descubriendo combinaciones",
        image: "/images/journey/closet-detox.jpg",
        inclusions: [
          { key: "Evaluación completa", detail: "cada prenda, zapatos y accesorios evaluados" },
          { key: "Filtrado estratégico", detail: "por condición, alineación de estilo y versatilidad" },
          { key: "Nuevas combinaciones", detail: "outfits creados con piezas que ya tiene" },
          { key: "Brechas identificadas", detail: "lista precisa de lo que necesita, nada más" },
        ],
        deliverableLine: "Usted recibe: Guía de organización de clóset + lista de compras personalizada",
      },
      {
        stepNumber: 3,
        name: "Compras Personalizadas",
        duration: "~5 horas",
        subtitle: "Compras y guiadas",
        description:
          "Sin compras impulsivas. Creamos un plan de compras basado en los hallazgos del detox, y Lu va con usted a tiendas seleccionadas donde cada compra tiene un propósito claro.",
        imageAlt: "Lu y clienta en una tienda seleccionada — eligiendo piezas con intención",
        image: "/images/journey/personal-shopping.jpg",
        inclusions: [
          { key: "Diagnóstico pre-compra", detail: "prioridades definidas antes de entrar a una tienda" },
          { key: "Plan de compras", detail: "básicos, piezas clave e inversiones estratégicas mapeadas" },
          { key: "Compras acompañadas", detail: "Lu con usted para asesoría en tiempo real de fit, color y versatilidad" },
          { key: "Compras con propósito", detail: "ahorre dinero y tiempo comprando con intención" },
        ],
        deliverableLine: "Usted recibe: Un guardarropa que funciona como sistema completo",
      },
      {
        stepNumber: 4,
        name: "Estilismo + Sesión de Fotos",
        duration: "~8 horas",
        subtitle: "El capítulo final",
        description:
          "El capítulo final. Lu arma 15–20 outfits completos para cada contexto de su vida, luego estiliza y dirige una sesión de fotos para que su nueva imagen tenga un registro visual.",
        imageAlt: "Lu estilizando a una clienta para su sesión de fotos — looks completos para cada ocasión",
        image: "/images/journey/photo-session.jpg",
        inclusions: [
          { key: "Looks completos armados", detail: "trabajo, social, eventos y casual con piezas nuevas y existentes" },
          { key: "Lookbook digital", detail: "15–20 outfits con notas de estilismo, etiquetas de ocasión y guías" },
          { key: "Sesión de fotos estilizada", detail: "dirigida por Lu, capturando su nueva imagen profesional" },
          { key: "Imágenes profesionales", detail: "listas para LinkedIn, redes sociales, headshots y perfiles" },
        ],
        deliverableLine: "Usted recibe: Lookbook digital + fotos profesionales",
      },
    ],
  },

  deliverables: {
    label: "Lo que recibe",
    subheading: "Todo incluido en su inversión",
    items: [
      { title: "Tarjeta de paleta de color completa", qualifier: "su espectro completo calibrado con Pantone" },
      { title: "Perfil de estilo personal", qualifier: "cuerpo, forma de rostro, arquetipo, guía de siluetas" },
      { title: "Guía de organización de clóset", qualifier: "PDF con su sistema personalizado" },
      { title: "Lista de compras personalizada", qualifier: "brechas estratégicas y prioridades" },
      { title: "Lookbook digital", qualifier: "15–20 outfits completos con notas de estilismo" },
      { title: "Fotos profesionales", qualifier: "sesión estilizada para LinkedIn, redes, headshots" },
    ],
    whatsappCallout: {
      title: "Además: 7 días de soporte por WhatsApp",
      description: "Lu disponible para preguntas, revisión de outfits y consejos",
    },
  },

  transformations: {
    label: "Transformaciones reales",
    subheading: "Deslice para revelar la transformación",
    items: [
      { initials: "AV", caption: "A.V. — Emprendedora, Coral Gables · Transformación de imagen completa", active: true },
      { initials: "MR", caption: "M.R. — Directora de Marketing, Miami · Renovación de presencia profesional" },
      { initials: "CL", caption: "C.L. — Agente Inmobiliaria, Miami · Estilismo de transición de carrera" },
    ],
  },

  photoOptions: {
    label: "Opciones de sesión de fotos",
    options: [
      {
        title: "Lu te fotografía",
        badge: "Incluido",
        badgeVariant: "terracotta",
        borderColor: "champagne",
        description:
          "Sesión estilizada con iluminación profesional, dirigida y fotografiada por Lu. Incluida en su inversión — sin costo adicional.",
      },
      {
        title: "Fotógrafo profesional",
        badge: "+$300",
        badgeVariant: "gold",
        borderColor: "gold",
        description:
          "Sesión de 3 horas con un fotógrafo profesional para imágenes de calidad premium — activos visuales que usará por años.",
      },
    ],
  },

  testimonial: {
    quote:
      "Tuve una experiencia maravillosa en esta asesoría de styling. Desde el inicio fue muy profesional, ella entendió mi estilo, mi cuerpo y lo que quería proyectar. Me llevo herramientas súper útiles para vestir mejor y sentirme más segura en mi día a día. ¡Gracias por tanto!",
    name: "Valentina",
    initials: "VP",
    title: "Clienta, Miami",
    photo: "/images/testimonials/vp.jpg",
    handle: "@valentinapachecof_",
    isPlaceholder: true,
  },

  bottomCta: {
    heading: "¿Lista para lo que sigue?",
    description:
      "Toda transformación comienza con entender tus colores. Una consulta de cortesía toma 20 minutos y nos da todo lo que necesitamos para determinar si este proceso es el indicado.",
    primaryCta: {
      text: "AGENDA TU CONSULTA DE CORTESÍA",
      href: getCalendlyUrl("powerPalette"),
      external: true,
    },
    secondaryText: "¿Prefieres escribir primero?",
    secondaryLinkText: "Escríbele a Lu por WhatsApp",
    secondaryLinkHref: getWhatsAppUrl("es"),
    faqLinkText: "¿Tienes más preguntas? Visita nuestro FAQ →",
    faqLinkHref: "/es/faq",
  },

  stickyBar: {
    text: "Consulta de cortesía",
    subtext: "· 20 min",
    href: getCalendlyUrl("powerPalette"),
  },

  seo: {
    title: "Consultoría de Imagen Completa Miami — $1,500 | Image by LUI",
    description:
      "4 componentes, +20 horas, 7 entregables. Reinvención diagnóstica de su imagen profesional. Colorimetría y ciencia del estilo. Miami, bilingüe.",
    ogImage: "/og/image-consulting.jpg",
  },

  // ===========================================================================
  // Desktop-specific overrides — LUI-DESK-004
  // ===========================================================================
  desktop: {
    hero: {
      image: "/images/heroes/ic-hero-lu-cartier.jpg",
      imagePosition: "40% 25%",
      filter: "saturate(0.45) sepia(0.15) brightness(0.95) contrast(1.05)",
      minHeight: 560,
      photoWidth: "48%",
    },
    investment: {
      heading: "Tu transformación completa",
      price: "$1,500",
      priceStrikethrough: "$2,000",
      stats: [
        { value: "4", label: "COMPONENTES" },
        { value: "20–24", label: "HORAS" },
        { value: "7", label: "ENTREGABLES" },
      ],
      entryText: "Todo proceso comienza con un ",
      entryLinkText: "análisis de color de cortesía",
      entryLinkHref: getCalendlyUrl("powerPalette"),
    },
    journey: {
      heading: "Tu proceso",
      subheading: "Cuatro componentes en 4–6 sesiones",
      images: [
        "/images/journey/color-analysis.jpg",
        "/images/journey/closet-detox.jpg",
        "/images/journey/personal-shopping.jpg",
        "/images/journey/photo-session.jpg",
      ],
      photoEmbed: {
        label: "OPCIONES DE SESIÓN DE FOTOS",
        options: [
          { title: "Lu te fotografía", price: "Incluido", description: "Sesión estilizada y dirigida por Lu" },
          { title: "Fotógrafo profesional", price: "+$300", description: "Sesión de 3 horas, activos visuales por años" },
        ],
      },
    },
    deliverables: {
      heading: "Lo que conservas",
      subheading: "7 ENTREGABLES INCLUIDOS EN TU INVERSIÓN",
      items: [
        { title: "Tarjeta de paleta de color", description: "Espectro completo Pantone" },
        { title: "Perfil de estilo personal", description: "Cuerpo, rostro, arquetipo, guía de silueta" },
        { title: "Guía de organización de clóset", description: "Tu sistema de guardarropa personalizado" },
        { title: "Lista de compras estratégica", description: "Brechas y prioridades identificadas" },
        { title: "Lookbook digital", description: "15–20 outfits con notas de estilismo" },
        { title: "Fotos profesionales", description: "LinkedIn, redes sociales, headshots" },
      ],
      bonus:
        "Más: 7 días de soporte por WhatsApp — Lu disponible para preguntas, revisiones de outfits y asesoría",
    },
    faqPreview: {
      heading: "Preguntas frecuentes",
      items: [
        {
          question: "¿Cuánto dura el proceso completo?",
          answer:
            "4–6 sesiones en 4–8 semanas, según tu agenda. Total: 20–24 horas de trabajo personalizado.",
        },
        {
          question: "¿Necesito comprar un guardarropa nuevo?",
          answer:
            "No. El Detox de Clóset maximiza lo que ya tienes. Las compras se enfocan solo en brechas estratégicas — compras lo que realmente falta.",
        },
      ],
      linkText: "Ver todas las preguntas →",
      linkHref: "/es/faq",
    },
    crossNav: {
      text: "¿Buscas estilismo para un evento específico?",
      linkText: "Explora Estilismo de Ocasión →",
      linkHref: "/es/servicios/estilismo-de-ocasion",
    },
    bottomCta: {
      heading: "¿Lista para lo que sigue?",
      description:
        "Toda transformación comienza con entender tus colores. Una consulta de cortesía toma 20 minutos y nos da todo lo que necesitamos para determinar si este proceso es el indicado.",
      primaryCta: {
        text: "AGENDA TU CONSULTA DE CORTESÍA",
        href: getCalendlyUrl("powerPalette"),
        external: true,
      },
      secondaryText: "¿Prefieres escribir primero? Escríbele a Lu por WhatsApp",
      secondaryLinkHref: getWhatsAppUrl("es"),
    },
  },
};
