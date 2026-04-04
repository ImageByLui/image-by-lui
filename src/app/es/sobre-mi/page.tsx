import type { Metadata } from "next";
import { aboutContentEs } from "@/content/es/sobre-mi";
import { buildPageMetadata } from "@/lib/metadata";
import AboutPageLayout from "@/components/about/AboutPageLayout";

// =============================================================================
// About Page — Spanish (/es/sobre-mi) — V8 Editorial Narrative (LUI-ABOUT-001)
// =============================================================================

export const metadata: Metadata = {
  ...buildPageMetadata(aboutContentEs.seo, "es", "about"),
  openGraph: {
    title: "Sobre Lu | Consultora de Imagen Miami | Image by LUI",
    description:
      "Conoce a Lu — consultora de imagen bilingüe en Miami. Colorimetría certificada, metodología diagnóstica para profesionales.",
    images: [{ url: "/og/og-default.jpg", width: 1200, height: 630 }],
    locale: "es_US",
    type: "website",
  },
};

/** Person schema — structured data for Lu */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lu",
  jobTitle: "Consultora de Imagen",
  worksFor: {
    "@type": "LocalBusiness",
    name: "Image by LUI",
    url: "https://imagebylui.com",
  },
  knowsAbout: [
    "Colorimetría",
    "Consultoría de Imagen",
    "Estilismo Personal",
    "Producción de Moda",
  ],
  areaServed: "Miami",
  knowsLanguage: ["English", "Spanish"],
};

export default function AboutPageEs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <AboutPageLayout content={aboutContentEs} lang="es" />
    </>
  );
}
