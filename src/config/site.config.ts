// =============================================================================
// Site Configuration — Image by LUI
// =============================================================================
// Every value that might change lives here. Components reference this file —
// nothing is hardcoded elsewhere. [REPLACE: ...] markers indicate values
// that Lu needs to provide before launch.
// =============================================================================

export const siteConfig = {
  // ---------------------------------------------------------------------------
  // Brand
  // ---------------------------------------------------------------------------
  name: "Image by LUI",
  tagline: {
    en: "Your image, architected.",
    es: "Tu imagen, arquitectura de estilo.",
  },
  domain: "https://imagebylui.com",

  // ---------------------------------------------------------------------------
  // Contact
  // ---------------------------------------------------------------------------
  whatsapp: {
    number: "573158137078", // [REPLACE: Lu's WhatsApp Business number, no dashes or spaces, include country code]
    message: {
      en: "Hi Lu! I'm interested in learning more about Image by LUI and your services.",
      es: "¡Hola Lu! Me interesa conocer más sobre Image by LUI y tus servicios.",
    },
    postBookingMessage: {
      en: "Hi Lu! I just booked a session and had a quick question.",
      es: "¡Hola Lu! Acabo de reservar una sesión y tenía una pregunta.",
    },
  },

  // ---------------------------------------------------------------------------
  // Calendly
  // ---------------------------------------------------------------------------
  calendly: {
    baseUrl: "https://calendly.com/imagebylui", // [REPLACE: Lu's actual Calendly base URL]
    events: {
      powerPalette: "/power-palette",
      firstImpression: "/first-impression",
      identityTransformation: "/identity-transformation",
    },
  },

  // ---------------------------------------------------------------------------
  // Social
  // ---------------------------------------------------------------------------
  instagram: {
    handle: "@imagebylui",
    url: "https://instagram.com/imagebylui",
  },
  tiktok: {
    handle: "@imagebylui",
    url: "https://tiktok.com/@imagebylui",
  },

  // ---------------------------------------------------------------------------
  // Analytics
  // ---------------------------------------------------------------------------
  ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "", // [REPLACE: Set in .env.local and Vercel dashboard]

  // ---------------------------------------------------------------------------
  // Schema Markup (JSON-LD)
  // ---------------------------------------------------------------------------
  schema: {
    type: "ProfessionalService" as const,
    name: "Image by LUI",
    description:
      "Diagnostic image consulting in Miami. Colorimetry, morphological analysis, and lifestyle mapping for professionals. Bilingual: English and Spanish.",
    areaServed: "Miami-Dade County, FL",
    serviceType: ["Image Consulting", "Color Analysis", "Personal Styling"],
    priceRange: "$$",
    availableLanguage: ["English", "Spanish"],
    telephone: "", // [REPLACE: Lu's business phone number]
    image: "", // [REPLACE: URL to Lu's professional headshot, e.g. https://imagebylui.com/images/lu-headshot.jpg]
  },

  // ---------------------------------------------------------------------------
  // Pages — URL mapping for language switcher, hreflang, and navigation
  // ---------------------------------------------------------------------------
  pages: {
    home: { en: "/", es: "/es" },
    services: { en: "/services", es: "/es/servicios" },
    about: { en: "/about", es: "/es/sobre-mi" },
    contact: { en: "/contact", es: "/es/contacto" },
    blog: { en: "/blog", es: "/es/blog" },
  },
} as const;

// =============================================================================
// Derived helpers
// =============================================================================

/** Build a full WhatsApp click-to-chat URL */
export function getWhatsAppUrl(lang: "en" | "es", postBooking = false): string {
  const message = postBooking
    ? siteConfig.whatsapp.postBookingMessage[lang]
    : siteConfig.whatsapp.message[lang];
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/** Build a full Calendly event URL */
export function getCalendlyUrl(
  event: keyof typeof siteConfig.calendly.events
): string {
  return `${siteConfig.calendly.baseUrl}${siteConfig.calendly.events[event]}`;
}

/** Get the equivalent page URL in the other language */
export function getAlternatePageUrl(
  currentPath: string,
  targetLang: "en" | "es"
): string {
  for (const page of Object.values(siteConfig.pages)) {
    if (page.en === currentPath || page.es === currentPath) {
      return page[targetLang];
    }
  }
  // Fallback: return homepage for target language
  return targetLang === "es" ? "/es" : "/";
}
