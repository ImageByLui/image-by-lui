import { siteConfig } from "@/config/site.config";

// =============================================================================
// SchemaMarkup Component — Image by LUI
// =============================================================================
// Injects ProfessionalService JSON-LD structured data on every page.
// Data sourced from siteConfig.schema. Must validate on Google's Rich
// Results Test (https://search.google.com/test/rich-results).
// =============================================================================

export default function SchemaMarkup() {
  const schema = siteConfig.schema;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": schema.type,
    name: schema.name,
    description: schema.description,
    url: siteConfig.domain,
    areaServed: {
      "@type": "AdministrativeArea",
      name: schema.areaServed,
    },
    serviceType: schema.serviceType,
    priceRange: schema.priceRange,
    availableLanguage: schema.availableLanguage.map((lang) => ({
      "@type": "Language",
      name: lang,
    })),
    ...(schema.telephone ? { telephone: schema.telephone } : {}),
    ...(schema.image ? { image: schema.image } : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Miami",
      addressRegion: "FL",
      addressCountry: "US",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
