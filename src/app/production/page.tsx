// =============================================================================
// Production Site — English
// =============================================================================
// Accessible via:
//   - production.imagebylui.com (via middleware rewrite)
//   - imagebylui.com/production (direct path for dev/preview)
// =============================================================================

import type { Metadata } from "next";
import ProductionPage from "@/components/production/ProductionPage";
import content from "@/content/production-en";

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  openGraph: {
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
    type: "website",
    locale: "en_US",
    siteName: "Image by LUI",
    images: [
      {
        url: "/og/og-production.jpg",
        width: 1200,
        height: 630,
        alt: "Production Styling | Image by LUI — Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
    images: ["/og/og-production.jpg"],
  },
  alternates: {
    canonical: "https://production.imagebylui.com",
    languages: {
      en: "https://production.imagebylui.com",
      es: "https://production.imagebylui.com/es",
    },
  },
};

export default function ProductionPageEN() {
  return <ProductionPage content={content} />;
}
