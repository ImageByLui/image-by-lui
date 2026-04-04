import type { AboutContent } from "@/types/content";
import { getCalendlyUrl, getWhatsAppUrl } from "@/config/site.config";

// =============================================================================
// About Page Content — Spanish (V8 — Editorial Narrative, LUI-ABOUT-001)
// =============================================================================
// Natively written Spanish, NOT a translation. Uses "tú" form.
// Copy source: LUI_About_Copy_Final.md (locked).
// Do NOT edit copy — all text was approved by the Web Strategist.
// =============================================================================

export const aboutContentEs: AboutContent = {
  hero: {
    quoteBefore:
      "Si alguna vez abriste tu cl\u00F3set antes de un d\u00EDa importante y pensaste",
    quoteHighlight: "no tengo nada que ponerme",
    connection: "Te entiendo.",
    imageAlt:
      "Lu, consultora de imagen bilingüe en Miami, retrato editorial en blanco y negro",
  },

  beats: {
    one: "Comenc\u00E9 mi carrera dise\u00F1ando ropa en una casa de moda en Colombia. Pero lo que realmente me fascinaba no era la prenda. Era el momento en que la pieza correcta llegaba a la persona correcta. Ese instante en el que la presencia encaja.",

    twoA:
      "Entend\u00ED que mi trabajo no era crear ropa. Era construir imagen.",
    twoB:
      "Estudi\u00E9 producci\u00F3n de moda en Miami y comenc\u00E9 a trabajar con una revista de moda internacional, cubriendo semanas de la moda y escribiendo sobre ellas. Colabor\u00E9 con fot\u00F3grafos y dise\u00F1adores en Estados Unidos, Francia, Inglaterra y Espa\u00F1a.",

    threeA:
      "En S\u00E3o Paulo, lo encontr\u00E9. Colorimetr\u00EDa. No tendencias, no intuici\u00F3n. La ciencia del color, la silueta y la presencia.",
    threeB:
      "Volv\u00ED a Miami con todo lo que hab\u00EDa construido. La base t\u00E9cnica del dise\u00F1o. La mirada editorial de la producci\u00F3n. La precisi\u00F3n diagn\u00F3stica de la colorimetr\u00EDa. Y una convicci\u00F3n clara.",
  },

  pivot: {
    line1: "Pero faltaba algo.",
    line2: "El marco diagn\u00F3stico.",
  },

  statement: {
    text: "Tu imagen debe reflejar tu ambici\u00F3n, tu cultura y tu realidad. No una portada de revista. No la idea de \u00E9xito de alguien m\u00E1s.",
    closer: "Tuya.",
  },

  photoAlts: {
    colombia:
      "Lu durante sus inicios en dise\u00F1o de moda en Colombia",
    backstage:
      "Detr\u00E1s de c\u00E1maras en una producci\u00F3n de moda",
    interview:
      "Lu colaborando con dise\u00F1adores en un evento de moda internacional",
    closing:
      "Lu en un retrato editorial con tonos c\u00E1lidos y confianza",
  },

  cta: {
    heading: "\u00BFLista para comenzar?",
    body: "Tu Power Palette es un an\u00E1lisis de color gratuito de 20 minutos. El primer paso para descubrir c\u00F3mo el m\u00E9todo LUI puede funcionar para ti.",
    primaryCta: {
      text: "DESCUBRE TUS COLORES",
      href: getCalendlyUrl("powerPalette"),
      external: true,
    },
    secondaryText: "O escr\u00EDbele a Lu por WhatsApp",
    secondaryHref: getWhatsAppUrl("es"),
  },

  stickyBar: {
    text: "An\u00E1lisis de color gratis \u00B7 20 min",
    href: getCalendlyUrl("powerPalette"),
  },

  seo: {
    title: "Sobre Lu | Consultora de Imagen Miami | Image by LUI",
    description:
      "Conoce a Lu \u2014 consultora de imagen biling\u00FCe en Miami. Formaci\u00F3n en dise\u00F1o de moda, especialista certificada en colorimetr\u00EDa, y metodolog\u00EDa diagn\u00F3stica para profesionales.",
  },
};
