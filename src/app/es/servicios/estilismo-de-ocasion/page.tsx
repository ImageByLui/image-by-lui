import type { Metadata } from "next";
import { estilismoDeOcasionContent } from "@/content/es/estilismo-de-ocasion";
import { buildPageMetadata } from "@/lib/metadata";

import ServicePageHero from "@/components/services/ServicePageHero";
import HowItWorks from "@/components/services/HowItWorks";
import PricingTier from "@/components/services/PricingTier";
import ServicesTestimonialBlock from "@/components/services/ServicesTestimonialBlock";
import StyledLooksGallery from "@/components/services/StyledLooksGallery";
import ServicesBottomCTA from "@/components/services/ServicesBottomCTA";
import ServicesStickyBar from "@/components/services/ServicesStickyBar";

// =============================================================================
// Estilismo de Ocasión — Spanish (/es/servicios/estilismo-de-ocasion)
// =============================================================================

const content = estilismoDeOcasionContent;

export const metadata: Metadata = {
  ...buildPageMetadata(content.seo, "es", "occasionStyling"),
  alternates: {
    canonical: "/es/servicios/estilismo-de-ocasion",
    languages: {
      en: "/services/occasion-styling",
      es: "/es/servicios/estilismo-de-ocasion",
      "x-default": "/services/occasion-styling",
    },
  },
  openGraph: {
    title: "Estilismo de Ocasión — Bodas, Galas, Conferencias | Miami",
    description:
      "Tres niveles desde $250. Analizamos su evento, creamos su look, llega lista. Servicio bilingüe.",
    images: [
      {
        url: "/og/occasion-styling.jpg",
        width: 1200,
        height: 630,
        alt: "Image by LUI — Estilismo de Ocasión en Miami",
      },
    ],
    locale: "es_US",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Estilismo de Ocasión",
  description: content.hero.description,
  provider: {
    "@type": "LocalBusiness",
    name: "Image by LUI",
    url: "https://imagebylui.com",
  },
  areaServed: "Miami",
  availableLanguage: ["English", "Spanish"],
  offers: content.pricing.tiers.map((tier: { name: string; price: string }) => ({
    "@type": "Offer",
    name: tier.name,
    price: tier.price.replace("$", ""),
    priceCurrency: "USD",
  })),
};

export default function EstilismoDeOcasionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <ServicePageHero
        label={content.hero.label}
        headline={content.hero.headline}
        description={content.hero.description}
        imageAlt={content.hero.imageAlt}
        tags={content.hero.tags}
      />

      <HowItWorks
        label={content.howItWorks.label}
        steps={content.howItWorks.steps}
        imageAlt={content.howItWorks.imageAlt}
      />

      <section className="bg-soft-stone pt-7 px-3.5 pb-7" aria-label="Precios">
        <p className="font-body font-semibold text-[10px] tracking-[1.5px] uppercase text-terracotta px-1.5 mb-1.5">
          {content.pricing.label}
        </p>
        <p className="font-body text-[13px] text-warm-taupe leading-[1.5] px-1.5 mb-[22px]">
          {content.pricing.subheading}
        </p>

        {content.pricing.tiers.map((tier) => (
          <PricingTier
            key={tier.name}
            {...tier}
            defaultOpen={tier.variant === "complete"}
          />
        ))}
      </section>

      <ServicesTestimonialBlock
        quote={content.testimonial.quote}
        name={content.testimonial.name}
        initials={content.testimonial.initials}
        title={content.testimonial.title}
        bgColor="warm-ivory"
      />

      <StyledLooksGallery
        label={content.gallery.label}
        subheading={content.gallery.subheading}
        items={content.gallery.items}
      />

      <ServicesBottomCTA
        heading={content.bottomCta.heading}
        description={content.bottomCta.description}
        primaryCta={content.bottomCta.primaryCta}
        secondaryText={content.bottomCta.secondaryText}
        secondaryLinkText={content.bottomCta.secondaryLinkText}
        secondaryLinkHref={content.bottomCta.secondaryLinkHref}
        faqLinkText={content.bottomCta.faqLinkText}
        faqLinkHref={content.bottomCta.faqLinkHref}
      />

      <ServicesStickyBar
        text={content.stickyBar.text}
        subtext={content.stickyBar.subtext}
        href={content.stickyBar.href}
      />
    </>
  );
}
