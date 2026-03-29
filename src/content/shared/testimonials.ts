import type { Testimonial } from "@/types/content";

// =============================================================================
// Testimonials — Shared Bilingual Content (V2 — Revised)
// =============================================================================
// Revised for specificity and outcomes. Each quote references a concrete
// result from the methodology. contextLine displays below section heading.
// =============================================================================

export const testimonialsContextLine = {
  en: "From Lu's image consulting practice",
  es: "De la práctica de consultoría de imagen de Lu",
};

export const testimonials: Testimonial[] = [
  {
    quote: {
      en: "After my color analysis, I stopped buying clothes that sat unworn in my closet. Lu identified 8 colors I'd never considered — and every one of them gets compliments at work.",
      es: "Después de mi análisis de color, dejé de comprar ropa que quedaba sin usar en mi clóset. Lu identificó 8 colores que nunca había considerado — y cada uno de ellos recibe elogios en el trabajo.",
    },
    attribution: {
      en: "A.R., Finance Professional",
      es: "A.R., Profesional de Finanzas",
    },
    initials: "AR",
    social: "@placeholder",
  },
  {
    quote: {
      en: "The morphological analysis changed how I shop. I used to buy based on trends; now I buy based on what actually works with my proportions. My wardrobe is half the size and twice as effective.",
      es: "El análisis morfológico cambió cómo compro. Solía comprar según tendencias; ahora compro según lo que realmente funciona con mis proporciones. Mi guardarropa es la mitad del tamaño y el doble de efectivo.",
    },
    attribution: {
      en: "M.T., Healthcare Executive",
      es: "M.T., Ejecutiva de Salud",
    },
    initials: "MT",
    social: "@placeholder",
  },
  {
    quote: {
      en: "I was preparing for a major client pitch and needed to look the part. Lu's power palette session gave me the confidence that my outfit was working for me, not against me. I won the listing.",
      es: "Me estaba preparando para una presentación importante con clientes y necesitaba lucir a la altura. La sesión de power palette de Lu me dio la confianza de que mi outfit estaba trabajando a mi favor, no en mi contra. Gané el listado.",
    },
    attribution: {
      en: "C.L., Real Estate Agent",
      es: "C.L., Agente de Bienes Raíces",
    },
    initials: "CL",
    social: "@placeholder",
  },
];
