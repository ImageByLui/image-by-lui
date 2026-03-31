import type { Metadata } from "next";
import { faqEsContent } from "@/content/es/faq-es";
import { buildPageMetadata } from "@/lib/metadata";
import FAQInteractive from "@/components/faq/FAQInteractive";

// =============================================================================
// FAQ — Spanish (/es/faq)
// =============================================================================

const content = faqEsContent;

export const metadata: Metadata = {
  ...buildPageMetadata(content.seo, "es", "faq"),
  alternates: {
    canonical: "/es/faq",
    languages: { en: "/faq", es: "/es/faq", "x-default": "/faq" },
  },
  openGraph: {
    title: "Preguntas Frecuentes | Image by LUI",
    description: "15 respuestas sobre consultoría de imagen, estilismo, precios y proceso. Servicio bilingüe en Miami.",
    images: [{ url: "/og/faq.jpg", width: 1200, height: 630 }],
    locale: "es_US",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: content.categories.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.replace(/<[^>]*>/g, ""),
      },
    }))
  ),
};

export default function FAQEsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FAQInteractive content={content} lang="es" />
    </>
  );
}
