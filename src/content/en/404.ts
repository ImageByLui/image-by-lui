import type { NotFoundContent } from "@/types/content";

// =============================================================================
// 404 Page Content — English
// =============================================================================

export const notFoundContent: NotFoundContent = {
  headline: "This Page Doesn't Exist",
  body: "The page you're looking for may have moved or doesn't exist. But your next step is easy:",
  primaryCta: {
    text: "EXPLORE OUR SERVICES",
    href: "/services",
  },
  secondaryLink: {
    text: "Or return to the homepage →",
    href: "/",
  },
};
