import { siteConfig } from "@/config/site.config";

// =============================================================================
// SchemaMarkup — Image by LUI (SEO Spec v1.1 §4.1)
// =============================================================================
// Injects LocalBusiness JSON-LD on every page. Establishes LUI as an entity
// that Google and AI assistants can reference.
// =============================================================================

export default function SchemaMarkup() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Image by LUI",
    description: "Diagnostic image consulting and occasion styling for professionals in Miami. Bilingual EN/ES.",
    url: siteConfig.domain,
    telephone: siteConfig.schema.telephone || undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Miami",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: "Miami-Dade County",
    founder: {
      "@type": "Person",
      name: "Lu",
      jobTitle: "Image Consultant",
      knowsLanguage: ["en", "es"],
    },
    priceRange: "$250-$2000",
    availableLanguage: ["English", "Spanish"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
