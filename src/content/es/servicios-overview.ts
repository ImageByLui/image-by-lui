import type { ServicesOverviewContent } from "@/types/content";
import { getCalendlyUrl, getWhatsAppUrl } from "@/config/site.config";

// =============================================================================
// Services Overview Content — Spanish (V6 — Mockup Redesign)
// =============================================================================
// Natively written Spanish, NOT a translation.
// All copy from the approved A1-DEV spec and locked ES mockup.
// This file REPLACES the old servicios.ts for the /es/servicios route.
// =============================================================================

export const serviciosOverviewContent: ServicesOverviewContent = {
  hero: {
    headline: "Tu imagen habla antes que tú.",
    description:
      "Ya sea que tenga un evento importante por delante o desee una reinvención completa de su presencia profesional — comenzamos con diagnóstico, no con suposiciones.",
  },

  freeSession: {
    imageAlt:
      "Lu realizando un análisis de color con telas Pantone en Miami",
    title: "Tu Paleta de Poder",
    subtitle: "Sesión de cortesía",
    description:
      "En 20 minutos, identificamos su tono natural y revelamos los colores que hacen que sus rasgos cobren vida.",
    deliverables: [
      { label: "Subtono", sublabel: "análisis" },
      { label: "5 colores", sublabel: "de poder" },
      { label: "Tarjeta", sublabel: "de color" },
    ],
    cta: {
      text: "DESCUBRE TUS COLORES",
      href: getCalendlyUrl("powerPalette"),
      external: true,
    },
    footnote: "Virtual o presencial · El punto de entrada a ambos servicios",
  },

  trustLine: {
    name: "Lu · Consultora de Imagen",
    credentials:
      "Especialista certificada en colorimetría · Bilingüe EN/ES · Miami",
  },

  selector: {
    heading: "¿Cuál se parece más a usted?",
    subheading: "Explore el servicio que se ajusta a su necesidad",
    cards: [
      {
        badge: "Para eventos",
        name: "Estilismo de Ocasión",
        tags: ["Bodas", "Galas", "Conferencias", "Entrevistas"],
        description:
          "Tiene algo importante por delante. Analizamos el evento, su rol y lo que necesita comunicar — para que llegue con total seguridad y sin dudarlo.",
        imageAlt:
          "Clienta estilizada para un evento profesional por Image by LUI Miami",
        accentColor: "champagne",
        price: "Desde $250",
        ctaText: "Ver 3 paquetes →",
        ctaHref: "/es/servicios/estilismo-de-ocasion",
      },
      {
        badge: "Transformación",
        name: "Consultoría de Imagen",
        tags: ["Color", "Clóset", "Compras", "Fotos"],
        description:
          "No es para una noche — es para su próximo capítulo. Una reinvención completa de su imagen profesional, basada en ciencia y entregada en más de 20 horas de trabajo personalizado.",
        imageAlt:
          "Lu revisando el perfil diagnóstico completo de una clienta",
        accentColor: "gold",
        isPremium: true,
        price: "$1,500",
        priceStrikethrough: "$2,000",
        priceNote: "",
        ctaText: "Ver el proceso completo →",
        ctaHref: "/es/servicios/consultoria-de-imagen",
      },
    ],
  },

  testimonial: {
    quote:
      "Gracias a Luisa por ayudarme con mi outfit. No solo tiene buen gusto, sino que sabe exactamente cómo hacerte sentir cómoda y segura con lo que llevas. ¡Me encantó el resultado!",
    name: "Angélica",
    initials: "AG",
    title: "Clienta, Miami",
    photo: "/images/testimonials/ap.jpg",
    handle: "@angelicagp8",
  },

  bottomCta: {
    heading: "¿No sabes por dónde empezar?",
    description:
      "Tu Paleta de Poder es de cortesía, toma 20 minutos, y te ayuda a entender cuál servicio se alinea con donde estás ahora. Sin compromiso — solo claridad.",
    primaryCta: {
      text: "ESCRÍBELE A LU POR WHATSAPP",
      href: getWhatsAppUrl("es"),
      external: true,
    },
    secondaryText: "O",
    secondaryLinkText: "descubre tus colores",
    secondaryLinkHref: getCalendlyUrl("powerPalette"),
  },

  stickyBar: {
    text: "Análisis de color gratis",
    subtext: "· 20 min",
    href: getCalendlyUrl("powerPalette"),
  },

  seo: {
    title: "Consultoría de Imagen y Estilismo Miami | Image by LUI",
    description:
      "Consultoría de imagen y estilismo de ocasión para profesionales en Miami. Bilingüe EN/ES. Análisis de color de cortesía de 20 min.",
    ogImage: "/og/services-overview.jpg",
  },

  // ===========================================================================
  // Desktop-specific overrides — LUI-DESK-002
  // ===========================================================================
  desktop: {
    serviceCards: [
      {
        variant: "occasion",
        image: "/images/services/occasion-card-shopping.png",
        imagePosition: "center 60%",
        label: "PARA EVENTOS",
        title: "Estilismo de Ocasión",
        description:
          "Tiene algo importante por delante. Analizamos el evento, su rol y lo que necesita comunicar — para que llegue con total seguridad y sin dudarlo.",
        inclusions: [
          "Curaduría de vestuario con lo que ya tiene",
          "Piezas nuevas conseguidas si es necesario",
          "Look completo con notas de estilismo",
        ],
        detailLine: "**Essential** · **Complete** · **VIP** — tres niveles desde $250",
        price: "Desde $250",
        linkText: "Ver 3 paquetes →",
        linkHref: "/es/servicios/estilismo-de-ocasion",
      },
      {
        variant: "premium",
        image: "/images/services/ic-card-consulting.jpg",
        imagePosition: "center 25%",
        label: "TRANSFORMACIÓN COMPLETA",
        title: "Consultoría de Imagen",
        description:
          "No es para una noche — es para su próximo capítulo. Una reinvención completa de su imagen profesional, basada en ciencia y entregada en más de 20 horas de trabajo personalizado.",
        inclusions: [
          "Análisis de color y paleta personal",
          "Detox de clóset y reconstrucción de vestuario",
          "Compras personalizadas con Lu",
          "Sesión de fotos estilizada y lookbook",
        ],
        detailLine: "**20+ horas** · **7 entregables** que conservas para siempre",
        price: "$1,500",
        priceStrikethrough: "$2,000",
        linkText: "Ver el proceso completo →",
        linkHref: "/es/servicios/consultoria-de-imagen",
      },
    ],
    faqPreview: {
      heading: "Preguntas frecuentes",
      items: [
        {
          question: "¿Qué pasa si no sé cuál servicio es el indicado para mí?",
          answer:
            "Empieza con Tu Paleta de Poder — un análisis de color gratuito de 20 minutos. Le da a Lu todo lo que necesita para recomendarte el camino correcto.",
        },
        {
          question: "¿Dónde se realizan las sesiones?",
          answer:
            "Presencial en todo Miami-Dade — en tu hogar para el trabajo de clóset, tiendas curadas para compras, y un entorno profesional para análisis y fotos. Opciones virtuales disponibles.",
        },
        {
          question: "¿Trabajan en español?",
          answer:
            "Cada servicio está disponible completamente en español — desde la consulta inicial hasta todos los entregables. Nunca necesitas cambiar de idioma.",
        },
      ],
      linkText: "Ver todas las preguntas →",
      linkHref: "/es/faq",
    },
    bottomCta: {
      heading: "¿No sabes por dónde empezar?",
      description:
        "Tu Paleta de Poder es de cortesía, toma 20 minutos, y te ayuda a entender cuál servicio es el indicado para ti. Sin compromiso — solo claridad.",
      primaryCta: {
        text: "RESERVA TU ANÁLISIS DE COLOR GRATIS",
        href: getCalendlyUrl("powerPalette"),
        external: true,
      },
      secondaryText: "O escríbele a Lu por WhatsApp",
      secondaryLinkHref: getWhatsAppUrl("es"),
    },
  },
};
