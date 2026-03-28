import type { AboutContent } from "@/types/content";
import { getCalendlyUrl } from "@/config/site.config";

// =============================================================================
// About Page Content — Spanish (Natively written, NOT a translation)
// =============================================================================

export const aboutContentEs: AboutContent = {
  hero: {
    headline: "La Estratega Detrás del Método",
    subheadline:
      "Consultoría de imagen basada en precisión diagnóstica, fluidez cultural y la convicción de que cómo te presentas nunca debería dejarse al azar.",
  },

  originStory: {
    paragraphs: [
      "El camino de Lu hacia la consultoría de imagen comenzó en un programa de diseño de moda en Colombia — no con tendencias, sino con estructura. Patronaje. Ciencia textil. La ingeniería detrás de cómo las prendas interactúan con el cuerpo humano. Esa base formó todo lo que vino después.",
      "Después de años de formación especializada en colorimetría, estilismo y producción de moda, surgió una metodología clara: la imagen no se trata de seguir tendencias ni de copiar looks. Se trata de entender la ciencia del color, la proporción y el contexto personal — y usar ese entendimiento para construir algo intencional.",
      "Hoy, Image by LUI atiende a profesionales en Miami que necesitan que su apariencia trabaje tan estratégicamente como ellos. Ejecutivas latinoamericanas navegando una nueva cultura corporativa. Agentes de bienes raíces compitiendo en uno de los mercados más visuales del país. Emprendedores cuya marca personal es la primera impresión de su empresa.",
    ],
  },

  credentials: {
    heading: "Formación y Credenciales",
    items: [
      "Licenciatura en Diseño de Moda (Colombia)",
      "Especialista Certificada en Colorimetría",
      "Estilista de Moda Certificada",
      "Formación en Producción de Moda",
      "Certificación en Maquillaje de Efectos Especiales",
      "Ilustración de Moda (formación avanzada)",
      "Práctica bilingüe: Español e Inglés",
    ],
  },

  philosophy: {
    heading: "El Enfoque LUI",
    body: "La consultoría de imagen en LUI no se trata de decirte qué ponerte. Se trata de darte un marco — basado en colorimetría, análisis morfológico y mapeo de estilo de vida — que hace que cada elección sea intencional. Creemos que tu imagen debe reflejar tu ambición, tu cultura y tu realidad. No una portada de revista. No la idea de éxito de otra persona. La tuya.",
  },

  cta: {
    heading: "Experimenta la Metodología por Ti Misma",
    body: "Tu Power Palette es un análisis de color de cortesía de 20 minutos — y el primer paso para entender cómo el método LUI puede trabajar para ti.",
    cta: {
      text: "DESCUBRE TU POWER PALETTE",
      href: getCalendlyUrl("powerPalette"),
      external: true,
    },
  },

  seo: {
    title: "Sobre Lu | Consultora de Imagen Miami | Image by LUI",
    description:
      "Conoce a Lu — consultora de imagen bilingüe en Miami. Formación en diseño de moda, especialista certificada en colorimetría, y metodología diagnóstica para profesionales.",
  },
};
