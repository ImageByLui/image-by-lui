import type { NotFoundContent } from "@/types/content";

// =============================================================================
// 404 Page Content — Spanish
// =============================================================================

export const notFoundContentEs: NotFoundContent = {
  headline: "Esta Página No Existe",
  body: "La página que buscas pudo haberse movido o no existe. Pero tu próximo paso es fácil:",
  primaryCta: {
    text: "EXPLORA NUESTROS SERVICIOS",
    href: "/es/servicios",
  },
  secondaryLink: {
    text: "O regresa a la página principal →",
    href: "/es",
  },
};
