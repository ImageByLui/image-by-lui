import type { Metadata } from "next";
import { serviciosOverviewContent } from "@/content/es/servicios-overview";
import { buildPageMetadata } from "@/lib/metadata";

import ServicesHero from "@/components/services/ServicesHero";
import FreeSessionCard from "@/components/services/FreeSessionCard";
import TrustLine from "@/components/services/TrustLine";
import ServiceSelectorCard from "@/components/services/ServiceSelectorCard";
import ServicesTestimonialBlock from "@/components/services/ServicesTestimonialBlock";
import ServicesBottomCTA from "@/components/services/ServicesBottomCTA";
import ServicesStickyBar from "@/components/services/ServicesStickyBar";

// =============================================================================
// Services Overview — Spanish (/es/servicios) — V6 Redesign
// =============================================================================
// Same components as EN page, different content object.
// =============================================================================

const content = serviciosOverviewContent;

export const metadata: Metadata = {
  ...buildPageMetadata(content.seo, "es", "services"),
  alternates: {
    canonical: "/es/servicios",
    languages: {
      en: "/services",
      es: "/es/servicios",
      "x-default": "/services",
    },
  },
  openGraph: {
    title: "Consultoría de Imagen y Estilismo de Ocasión en Miami",
    description:
      "Estrategia de imagen profesional basada en colorimetría y ciencia del estilo. Análisis de color de cortesía disponible. Bilingüe EN/ES.",
    images: [
      {
        url: "/og/services-overview.jpg",
        width: 1200,
        height: 630,
        alt: "Image by LUI — Consultoría de Imagen y Estilismo en Miami",
      },
    ],
    locale: "es_US",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Consultoría de Imagen y Estilismo de Ocasión",
  description: content.hero.description,
  provider: {
    "@type": "LocalBusiness",
    name: "Image by LUI",
    url: "https://imagebylui.com",
  },
  areaServed: "Miami",
  availableLanguage: ["English", "Spanish"],
};

export default function ServiciosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <ServicesHero
        headline={content.hero.headline}
        description={content.hero.description}
      />

      <FreeSessionCard
        imageAlt={content.freeSession.imageAlt}
        title={content.freeSession.title}
        subtitle={content.freeSession.subtitle}
        description={content.freeSession.description}
        deliverables={content.freeSession.deliverables}
        cta={content.freeSession.cta}
        footnote={content.freeSession.footnote}
      />

      <TrustLine
        name={content.trustLine.name}
        credentials={content.trustLine.credentials}
      />

      <section className="bg-warm-ivory pt-7 px-3.5 pb-3.5" aria-label="Nuestros servicios">
        <p className="font-body font-semibold text-[12px] text-espresso text-center tracking-[1px] uppercase mb-1">
          {content.selector.heading}
        </p>
        <p className="font-body text-[12px] text-warm-taupe text-center leading-[1.5] mb-[22px]">
          {content.selector.subheading}
        </p>

        {content.selector.cards.map((card) => (
          <ServiceSelectorCard key={card.name} {...card} />
        ))}
      </section>

      <ServicesTestimonialBlock
        quote={content.testimonial.quote}
        name={content.testimonial.name}
        initials={content.testimonial.initials}
        title={content.testimonial.title}
      />

      <ServicesBottomCTA
        heading={content.bottomCta.heading}
        description={content.bottomCta.description}
        primaryCta={content.bottomCta.primaryCta}
        secondaryText={content.bottomCta.secondaryText}
        secondaryLinkText={content.bottomCta.secondaryLinkText}
        secondaryLinkHref={content.bottomCta.secondaryLinkHref}
      />

      <ServicesStickyBar
        text={content.stickyBar.text}
        subtext={content.stickyBar.subtext}
        href={content.stickyBar.href}
      />
    </>
  );
}
