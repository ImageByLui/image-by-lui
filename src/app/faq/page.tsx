import type { Metadata } from "next";
import { faqContent } from "@/content/en/faq";
import { buildPageMetadata } from "@/lib/metadata";
import FAQInteractive from "@/components/faq/FAQInteractive";
const content = faqContent;
export const metadata: Metadata = { ...buildPageMetadata(content.seo, "en", "faq"), alternates: { canonical: "/faq", languages: { en: "/faq", es: "/es/faq", "x-default": "/faq" } }, openGraph: { title: "Frequently Asked Questions | Image by LUI", description: "15 answers about image consulting, styling, pricing, and process. Bilingual service in Miami.", images: [{ url: "/og/faq.jpg", width: 1200, height: 630 }], locale: "en_US", type: "website" } };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: content.categories.flatMap((cat) => cat.items.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer.replace(/<[^>]*>/g, "") } }))) };
export default function FAQPage() { return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><FAQInteractive content={content} lang="en" /></>); }
