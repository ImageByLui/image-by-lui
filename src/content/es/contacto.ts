import type { ContactContent } from "@/types/content";
import { getWhatsAppUrl } from "@/config/site.config";

// =============================================================================
// Contact Page Content — Spanish
// =============================================================================

export const contactContentEs: ContactContent = {
  hero: {
    headline: "Reserva Tu Sesión",
    subheadline:
      "Elige la sesión que se ajusta a donde estás — o empieza con Tu Power Palette. Es de cortesía.",
  },

  calendlyWrapper: {
    heading: "Selecciona Tu Sesión",
    introText:
      "Elige el compromiso que se ajusta a donde estás. ¿No estás segura? Empieza con Tu Power Palette — es de cortesía y toma solo 20 minutos.",
    belowEmbedNote:
      "Todas las sesiones están disponibles presencialmente en el condado de Miami-Dade o de forma virtual. Lu confirmará el formato y los detalles de ubicación después de que reserves tu tiempo.",
  },

  postBookingConfirmation: {
    heading: "Todo Listo",
    body: "Tu sesión con Lu ha sido reservada. Recibirás un correo de confirmación en breve con todos los detalles. Si tienes alguna pregunta antes de tu sesión, escríbele a Lu por WhatsApp.",
    link: {
      text: "Escríbele a Lu por WhatsApp →",
      href: getWhatsAppUrl("es", true),
      external: true,
    },
  },

  whatsappAlternative: {
    heading: "¿Prefieres Conversar Primero?",
    body: "¿Tienes preguntas antes de reservar? Escríbele directamente a Lu por WhatsApp. Responde personalmente en menos de 24 horas.",
    cta: {
      text: "ESCRÍBELE A LU POR WHATSAPP",
      href: getWhatsAppUrl("es"),
      external: true,
    },
  },

  locationNote:
    "Atendiendo a profesionales en todo el condado de Miami-Dade. Sesiones disponibles presencialmente en tu ubicación o de forma virtual.",

  seo: {
    title: "Reserva una Consulta | Image by LUI Miami",
    description:
      "Reserva tu sesión de consultoría de imagen con Image by LUI en Miami. Análisis de color gratuito, diagnóstico de estilo personal y transformación completa. Presencial o virtual.",
  },
};
