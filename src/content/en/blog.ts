import type { BlogContent } from "@/types/content";
import { siteConfig } from "@/config/site.config";

// =============================================================================
// Blog Placeholder Content — English
// =============================================================================

export const blogContent: BlogContent = {
  heading: "Insights Coming Soon",
  body: "Articles on professional image strategy, color analysis, and personal branding for Miami professionals are on their way. In the meantime, follow @imagebylui on Instagram for daily insights.",
  cta: {
    text: "FOLLOW ON INSTAGRAM",
    href: siteConfig.instagram.url,
    external: true,
  },
  seo: {
    title: "Blog | Image by LUI Miami",
    description:
      "Professional image consulting insights, color analysis guides, and personal branding strategies for Miami professionals. Coming soon from Image by LUI.",
  },
};
