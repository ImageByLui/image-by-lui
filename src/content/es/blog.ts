import type { BlogContent } from "@/types/content";
import { siteConfig } from "@/config/site.config";

// =============================================================================
// Blog Placeholder Content — Spanish
// =============================================================================

export const blogContentEs: BlogContent = {
  heading: "Artículos Próximamente",
  body: "Artículos sobre estrategia de imagen profesional, análisis de color y marca personal para profesionales en Miami están en camino. Mientras tanto, sigue a @imagebylui en Instagram para inspiración diaria.",
  cta: {
    text: "SIGUE EN INSTAGRAM",
    href: siteConfig.instagram.url,
    external: true,
  },
  seo: {
    title: "Blog | Image by LUI Consultora de Imagen Miami",
    description:
      "Estrategias de imagen profesional, guías de análisis de color y marca personal para profesionales en Miami. Próximamente en Image by LUI.",
  },
};
