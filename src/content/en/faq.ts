import type { FAQPageContent } from "@/types/content";
import { getCalendlyUrl, getWhatsAppUrl } from "@/config/site.config";

const calendlyUrl = getCalendlyUrl("powerPalette");
const whatsappUrl = getWhatsAppUrl("en");

export const faqContent: FAQPageContent = {
  hero: {
    label: "FAQ",
    headline: "Questions we hear often.",
    description: "Tap a topic below to find your answer. If it's not here, Lu is always a message away.",
  },

  categories: [
    {
      id: "general",
      pillLabel: "General",
      count: 6,
      sectionLabel: "GENERAL",
      sectionTitle: "About our approach",
      items: [
        { question: "How is this different from hiring a personal shopper?", answer: "<strong>A personal shopper helps you buy clothes. We build a complete image system.</strong> Every recommendation is grounded in diagnostic analysis — colorimetry, body architecture, style archetype — not personal taste. The result isn't a bag of new purchases; it's a framework you'll use for years." },
        { question: "Is this only for women?", answer: "<strong>No.</strong> We work with professionals of all genders. The methodology — color analysis, body architecture, style identity — applies universally. If you want a more intentional professional image, we can help." },
        { question: "Where do sessions take place?", answer: "<strong>In-person sessions take place in the Miami area</strong> — at your home for closet work, at curated stores for shopping, and at a professional setting for analysis and photos. Virtual options are available for the initial color analysis and consultations." },
        { question: "I speak Spanish. Can we work in Spanish?", answer: "<strong>Absolutely.</strong> Lu is a native Spanish speaker from Colombia, and every service is available entirely in Spanish — from the initial consultation through all deliverables. You'll never need to switch languages." },
        { question: "What if I'm not sure which service is right for me?", answer: `<strong>Start with Your Power Palette</strong> — a complimentary 20-minute color analysis. It's the entry point for both services and gives Lu everything she needs to recommend the right path for you. <a href="${calendlyUrl}" target="_blank" rel="noopener noreferrer">Discover your colors →</a>` },
        { question: "Do you offer payment plans?", answer: `<strong>We're exploring flexible payment options.</strong> Contact Lu directly to discuss what works for your situation. <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Message Lu on WhatsApp →</a>` },
      ],
      crossLinks: { text: "Looking for something specific?", links: [{ label: "Occasions", categoryId: "occasions" }, { label: "Image Consulting", categoryId: "image" }] },
    },
    {
      id: "occasions",
      pillLabel: "Occasions",
      count: 3,
      sectionLabel: "OCCASION STYLING",
      sectionTitle: "Event preparation",
      items: [
        { question: "How far in advance should I book for an event?", answer: `<strong>Ideally 2–4 weeks before your event.</strong> This gives us time for the consultation, wardrobe review, and any shopping or sourcing needed. For VIP with event-day accompaniment, we recommend 3–4 weeks minimum. Have something sooner? <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Reach out</a> — we'll do our best to accommodate.` },
        { question: "What if I don't have anything in my closet for this event?", answer: '<strong>More common than you\'d think — and not a problem.</strong> The Essential tier includes virtual curation of new pieces. Complete and VIP include in-person accompanied shopping where Lu helps you find everything you need. <a href="/services/occasion-styling">See all three tiers →</a>' },
        { question: "Can you help me find items to rent instead of buy?", answer: "<strong>Yes.</strong> If renting makes more sense for your event — particularly for one-time occasions like a gala or formal wedding — we can incorporate rental options from curated platforms into your styling plan." },
      ],
      crossLinks: { text: "Looking for something else?", links: [{ label: "General", categoryId: "general" }, { label: "Image Consulting", categoryId: "image" }] },
    },
    {
      id: "image",
      pillLabel: "Image Consulting",
      count: 6,
      sectionLabel: "IMAGE CONSULTING",
      sectionTitle: "The full transformation",
      items: [
        { question: "How long does the full process take?", answer: "<strong>4–6 sessions across 4–8 weeks, depending on your schedule.</strong> Total time investment: 20–24 hours of one-on-one work, plus deliverable creation time." },
        { question: "Do I need to buy a new wardrobe?", answer: "<strong>No.</strong> The Closet Detox is specifically designed to maximize what you already own. Most clients discover they have more usable pieces than they realized. The shopping component focuses only on strategic gaps — you buy what's actually missing, nothing more." },
        { question: "What happens after the process is complete?", answer: "<strong>You receive all seven deliverables</strong> (color palette card, style profile, closet guide, shopping list, lookbook, photos), plus 7 days of WhatsApp support where Lu is available for outfit questions and styling checks. After that, your deliverables serve as your ongoing reference system." },
        { question: "Can I do the components separately instead of the full package?", answer: '<strong>The engagement is designed as a complete system</strong> — each component builds on the previous one. The color analysis informs the closet detox, which informs the shopping, which feeds the final styling and photos. Separating them would compromise results. For something more focused, <a href="/services/occasion-styling">Occasion Styling</a> may be the right fit.' },
        { question: "What's included in the photo session?", answer: "<strong>Every client receives a styled session with professional lighting, directed and photographed by Lu</strong> — included in your investment. For premium-quality images, you can upgrade to a 3-hour session with a professional photographer for an additional $300. Both options deliver images ready for LinkedIn, social media, and professional profiles." },
        { question: "Why is the introductory price different from the standard price?", answer: "<strong>The $1,500 introductory rate is available for a limited time</strong> as we establish our Miami practice. The standard rate is $2,000. Clients who begin at the introductory rate are not affected when it changes." },
      ],
      crossLinks: { text: "Looking for something else?", links: [{ label: "General", categoryId: "general" }, { label: "Occasions", categoryId: "occasions" }] },
    },
  ],

  bottomCta: {
    heading: "Didn't find your answer?",
    description: "Lu is happy to help — or you can start with a complimentary consultation and ask everything in person.",
    whatsappCta: { text: "ASK LU", href: whatsappUrl, external: true },
    calendlyCta: { text: "FREE CONSULTATION", href: calendlyUrl, external: true },
  },

  stickyBar: { text: "Free color analysis", subtext: "· 20 min", href: calendlyUrl },

  seo: {
    title: "FAQ — Image Consulting & Styling Questions | Image by LUI",
    description: "Answers about image consulting, occasion styling, pricing, process. How we differ from personal shoppers. Miami, bilingual EN/ES.",
    ogImage: "/og/faq.jpg",
  },
};
