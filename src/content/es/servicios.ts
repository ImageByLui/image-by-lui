import type { ServicesContent } from "@/types/content";
import { getCalendlyUrl } from "@/config/site.config";

// =============================================================================
// Services Page Content — Spanish (Natively written, NOT a translation)
// =============================================================================

export const servicesContentEs: ServicesContent = {
  hero: {
    headline: "Estrategia de Imagen para Profesionales que Van en Serio",
    subheadline:
      "Cada compromiso LUI comienza con análisis diagnóstico — no con suposiciones. Ya sea que estés refinando tu presencia para la sala de juntas, la cita con clientes o el escenario, la metodología es la misma: precisa, personalizada y construida para perdurar.",
  },

  tiers: [
    {
      anchor: "power-palette",
      label: "EMPIEZA AQUÍ",
      name: "Tu Power Palette",
      price: "De cortesía",
      description:
        "¿No sabes por dónde empezar? Comienza aquí. En esta sesión de 20 minutos — virtual o presencial — analizaremos tu subtono natural mediante drapeado profesional de color e identificaremos los cinco colores que hacen que tus rasgos cobren vida. Te llevarás una tarjeta de color personalizada y una comprensión clara de cómo las elecciones estratégicas de color elevan tu presencia profesional.",
      inclusions: [
        { text: "Análisis profesional de subtono" },
        { text: "Tus 5 colores de poder identificados" },
        { text: "Tarjeta digital de color personalizada" },
        { text: "Orientación sobre ajustes inmediatos en tu guardarropa" },
      ],
      cta: {
        text: "DESCUBRE TU POWER PALETTE",
        href: getCalendlyUrl("powerPalette"),
        external: true,
      },
    },
    {
      anchor: "primera-impresion",
      name: "Primera Impresión",
      price: "$400",
      positioningLine: "Una inversión profesional en claridad.",
      description:
        "Una sesión diagnóstica de 90 minutos que va más allá del color. Analizamos tu coloración, tus rasgos y tu contexto profesional para construir una dirección de estilo que puedes ejecutar de inmediato. Recibirás estrategias de outfits aplicables con tu guardarropa actual — sin necesidad de compras.",
      inclusions: [
        { text: "Análisis colorimétrico básico (subtono + 10 colores de poder)" },
        { text: "Diagnóstico de estilo basado en tu contexto profesional" },
        { text: "3–5 recomendaciones de outfits con tu guardarropa existente" },
        { text: "Lookbook digital con tu dirección de estilo personalizada" },
        { text: "Resumen de seguimiento entregado en 48 horas" },
      ],
      duration: "~2 horas de compromiso total",
      cta: {
        text: "COMIENZA TU PRIMERA IMPRESIÓN",
        href: getCalendlyUrl("firstImpression"),
        external: true,
      },
    },
    {
      anchor: "transformacion-de-identidad",
      name: "Transformación de Identidad",
      price: "$1,800",
      positioningLine:
        "La reinvención completa de cómo te presentas al mundo.",
      description:
        "Esta es la experiencia LUI completa. Durante 12–15 horas de trabajo dedicado uno a uno, deconstruimos y reconstruimos tu imagen profesional desde los cimientos. Análisis colorimétrico completo con precisión Pantone. Mapeo morfológico para identificar las siluetas, telas y detalles de construcción que honran la arquitectura natural de tu cuerpo. Una auditoría de clóset que separa lo que te sirve de lo que no. Y una experiencia de compras curada — presencial o virtual — para completar los espacios con intención.",
      inclusions: [
        { text: "Cuestionario personal integral y revisión de estilo de vida" },
        { text: "Análisis colorimétrico completo con calibración Pantone" },
        { text: "Análisis morfológico con optimización de silueta" },
        { text: "Auditoría de clóset y detox de guardarropa en casa (2–3 horas)" },
        { text: "Experiencia de compras personalizadas curada (3–4 horas)" },
        { text: "Documento de Perfil de Identidad y Mapeo de Estilo de Vida" },
        { text: "Guía de estilo digital con 15–20 outfits completos" },
      ],
      duration: "~12–15 horas de compromiso total en múltiples sesiones",
      cta: {
        text: "COMIENZA TU TRANSFORMACIÓN",
        href: getCalendlyUrl("identityTransformation"),
        external: true,
      },
    },
  ],

  methodology: {
    heading: "El Método LUI: Cómo Funciona",
    body: "El método LUI comienza con una evaluación diagnóstica integral. Mediante colorimetría profesional con telas calibradas en sistema Pantone, identificamos la paleta de colores que realza tus rasgos naturales. El análisis morfológico mapea las proporciones, líneas y estructura de tu cuerpo para determinar las siluetas, telas y detalles de construcción que trabajan con tu arquitectura natural, no en contra de ella. Finalmente, el mapeo de estilo de vida asegura que cada recomendación se alinee con cómo realmente vives y trabajas: tu industria, tu entorno diario, tus metas y tu contexto cultural.",
    closingLine:
      "Análisis de color + arquitectura corporal + mapeo de estilo de vida = una estrategia de imagen basada en ciencia, no en improvisación.",
  },

  faq: {
    heading: "Preguntas Frecuentes",
  },

  finalCta: {
    heading: "¿No Sabes Por Dónde Empezar?",
    body: "Tu Power Palette es el punto de entrada perfecto. En 20 minutos, descubrirás los colores que transforman tu presencia — y entenderás exactamente por qué la metodología LUI funciona.",
    cta: {
      text: "DESCUBRE TU POWER PALETTE",
      href: getCalendlyUrl("powerPalette"),
      external: true,
    },
  },

  seo: {
    title: "Análisis de Color y Consultoría de Imagen | Image by LUI Miami",
    description:
      "Análisis de color y consultoría de imagen profesional en Miami. Colorimetría, análisis morfológico y mapeo de estilo de vida. Desde $400.",
  },
};
