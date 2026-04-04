import type { Metadata } from "next";
import { aboutContent } from "@/content/en/about";
import { buildPageMetadata } from "@/lib/metadata";
import AboutPageLayout from "@/components/about/AboutPageLayout";

// =============================================================================
// About Page — English (/about) — V8 Editorial Narrative (LUI-ABOUT-001)
// =============================================================================

export const metadata: Metadata = {
  ...buildPageMetadata(aboutContent.seo, "en", "about"),
  openGraph: {
    title: "About Lu | Image Consultant Miami | Image by LUI",
    description:
      "Meet Lu — Miami's bilingual image consultant. Fashion design foundation, certified colorimetry, diagnostic methodology for professionals.",
    images: [{ url: "/og/og-default.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

/** Person schema — structured data for Lu as the consultant */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lu",
  jobTitle: "Image Consultant",
  worksFor: {
    "@type": "LocalBusiness",
    name: "Image by LUI",
    url: "https://imagebylui.com",
  },
  knowsAbout: [
    "Colorimetry",
    "Image Consulting",
    "Personal Styling",
    "Fashion Production",
  ],
  areaServed: "Miami",
  knowsLanguage: ["English", "Spanish"],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <AboutPageLayout content={aboutContent} lang="en" />
    </>
  );
}
