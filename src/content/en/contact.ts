import type { ContactContent } from "@/types/content";
import { getWhatsAppUrl } from "@/config/site.config";

// =============================================================================
// Contact Page Content — English
// =============================================================================

export const contactContent: ContactContent = {
  hero: {
    headline: "Let's Begin",
    subheadline:
      "Select a session below to reserve your time with Lu. Not ready to commit? Start with Your Power Palette — it's complimentary.",
  },

  calendlyWrapper: {
    heading: "Select Your Session",
    introText:
      "Choose the engagement that fits where you are. Not sure? Start with Your Power Palette — it's complimentary and takes just 20 minutes.",
    belowEmbedNote:
      "All sessions are available in-person across Miami-Dade County or virtually. Lu will confirm the format and location details after you reserve your time.",
  },

  postBookingConfirmation: {
    heading: "You're All Set",
    body: "Your session with Lu has been reserved. You'll receive a confirmation email shortly with all the details. If you have any questions before your session, feel free to reach out via WhatsApp.",
    link: {
      text: "Message Lu on WhatsApp →",
      href: getWhatsAppUrl("en", true),
      external: true,
    },
  },

  whatsappAlternative: {
    heading: "Prefer to Chat First?",
    body: "Have questions before you book? Reach out directly via WhatsApp. Lu responds personally within 24 hours.",
    cta: {
      text: "MESSAGE LU ON WHATSAPP",
      href: getWhatsAppUrl("en"),
      external: true,
    },
  },

  locationNote:
    "Serving professionals across Miami-Dade County. Sessions available in-person at your location or virtually.",

  seo: {
    title: "Book a Consultation | Image by LUI Miami",
    description:
      "Book your image consulting session with Image by LUI in Miami. Free color analysis, personal style diagnostics, and full identity transformation. In-person or virtual.",
  },
};
