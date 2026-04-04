// =============================================================================
// SPANISH COPY — Production Site (natively written)
// =============================================================================

import type { ProductionContent } from "./production-types";

const es: ProductionContent = {
  locale: "es",
  langToggle: { active: "ES", inactive: "EN", href: "/production" },

  hero: {
    headline: "Styling de\nProducción.",
    headlineItalic: "Del concepto al cuadro final.",
  },

  services: {
    label: "Servicios",
    intro:
      "Dirección de estilismo completa, del concepto creativo a la ejecución en set. Para marcas y equipos de producción que necesitan vestuario resuelto.",
    capabilities: [
      {
        number: "01",
        title: "Conceptualización Creativa",
        description:
          "Concepto de estilismo para tu marca, desarrollado con tu equipo creativo.",
      },
      {
        number: "02",
        title: "Curaduría de Vestuario y Accesorios",
        description:
          "Vestuario completo desde diseñadores y showrooms. Cada look responde al brief.",
      },
      {
        number: "03",
        title: "Presencia en Set",
        description:
          "Fitting, cambios de look, ajustes en tiempo real. Continuidad visual en cada toma.",
      },
      {
        number: "04",
        title: "Revisión de Post-Producción",
        description:
          "Revisión estética de selecciones finales. El estilismo se sostiene en el producto terminado.",
      },
    ],
  },

  beat: "El trabajo habla.",

  portfolio: { label: "En Set" },
  credits: { label: "Créditos de Producción" },
  industry: { label: "Industria" },

  rates: {
    label: "Tarifas",
    priceText:
      "Los proyectos comienzan en <strong>$800</strong> por media jornada de producción. Estilismo de campaña y producciones de varios días se cotizan individualmente.",
    details: [
      "Aceptando reservas en Miami-Dade.",
      "Disponibilidad de viaje para producciones de varios días.",
    ],
    bilingual: "Bilingüe: Inglés y Español",
  },

  contact: {
    headline: "Hablemos de\ntu proyecto.",
    whatsappLabel: "WhatsApp",
    whatsappUrl:
      "https://wa.me/573148137078?text=Hola%20Lu%2C%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto%20de%20producci%C3%B3n%20contigo.",
    emailLabel: "lu@imagebylui.com",
    emailUrl: "mailto:lu@imagebylui.com?subject=Production%20Inquiry",
    instagram: "@imagebylui",
    instagramUrl: "https://instagram.com/imagebylui",
  },

  footer: {
    tagline: "Styling de Producción · Miami",
    crossLink: "¿Buscas consultoría de imagen personal? Visita",
    crossLinkSite: "imagebylui.com",
    copyright: "© 2026 Image by LUI. Todos los derechos reservados.",
  },

  seo: {
    title: "Styling de Producción Miami | Image by LUI",
    description:
      "Dirección de estilismo editorial y comercial en Miami. Del concepto al resultado final. Disponible para campañas, desfiles y producciones.",
    ogTitle: "Styling de Producción | Image by LUI",
    ogDescription:
      "Dirección de estilismo editorial y comercial. Base en Miami, disponible en las Américas.",
  },
};

export default es;
