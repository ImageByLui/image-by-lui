import type { Metadata } from "next";
import type { PricingTierData } from "@/types/content";
import { occasionStylingContent } from "@/content/en/occasion-styling";
import { buildPageMetadata } from "@/lib/metadata";

import ServicePageHero from "@/components/services/ServicePageHero";
import HowItWorks from "@/components/services/HowItWorks";
import PricingTier from "@/components/services/PricingTier";
import ServicesTestimonialBlock from "@/components/services/ServicesTestimonialBlock";
import StyledLooksGallery from "@/components/services/StyledLooksGallery";
import ServicesBottomCTA from "@/components/services/ServicesBottomCTA";
import ServicesStickyBar from "@/components/services/ServicesStickyBar";

// =============================================================================
// Occasion Styling — English (/services/occasion-styling)
// =============================================================================

const content = occasionStylingContent;

export const metadata: Metadata = {
  ...buildPageMetadata(content.seo, "en", "occasionStyling"),
  alternates: {
    canonical: "/services/occasion-styling",
    languages: {
      en: "/services/occasion-styling",
      es: "/es/servicios/estilismo-de-ocasion",
      "x-default": "/services/occasion-styling",
    },
  },
  openGraph: {
    title: "Occasion Styling — Weddings, Galas, Keynotes | Miami",
    description:
      "Three tiers from $250. We analyze your event, curate your look, ensure you arrive ready. Bilingual service.",
    images: [
      {
        url: "/og/occasion-styling.jpg",
        width: 1200,
        height: 630,
        alt: "Image by LUI — Occasion Styling in Miami",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Occasion Styling",
  description: content.hero.description,
  provider: {
    "@type": "LocalBusiness",
    name: "Image by LUI",
    url: "https://imagebylui.com",
  },
  areaServed: "Miami",
  availableLanguage: ["English", "Spanish"],
  offers: content.pricing.tiers.map((tier: PricingTierData) => ({
    "@type": "Offer",
    name: tier.name,
    price: tier.price.replace("$", ""),
    priceCurrency: "USD",
  })),
};

export default function OccasionStylingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* 1. Hero */}
      <ServicePageHero
        label={content.hero.label}
        headline={content.hero.headline}
        description={content.hero.description}
        imageAlt={content.hero.imageAlt}
        tags={content.hero.tags}
      />

      {/* 2. How It Works */}
      <HowItWorks
        label={content.howItWorks.label}
        steps={content.howItWorks.steps}
        imageAlt={content.howItWorks.imageAlt}
      />

      {/* 3. Pricing Tiers */}
      <section className="bg-soft-stone pt-7 px-3.5 pb-7" aria-label="Pricing">
        <p className="font-body font-semibold text-[10px] tracking-[1.5px] uppercase text-terracotta px-1.5 mb-1.5">
          {content.pricing.label}
        </p>
        <p className="font-body text-[13px] text-warm-taupe leading-[1.5] px-1.5 mb-[22px]">
          {content.pricing.subheading}
        </p>

        {content.pricing.tiers.map((tier: PricingTierData) => (
          <PricingTier
            key={tier.name}
            {...tier}
            defaultOpen={tier.variant === "complete"}
          />
        ))}
      </section>

      {/* 4. Testimonial — warm-ivory bg on this page (not soft-stone) */}
      <ServicesTestimonialBlock
        quote={content.testimonial.quote}
        name={content.testimonial.name}
        initials={content.testimonial.initials}
        title={content.testimonial.title}
        bgColor="warm-ivory"
      />

      {/* 5. Gallery */}
      <StyledLooksGallery
        label={content.gallery.label}
        subheading={content.gallery.subheading}
        items={content.gallery.items}
      />

      {/* 6. Bottom CTA — with FAQ link */}
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

      {/* 7. Sticky Bar */}
      <ServicesStickyBar
        text={content.stickyBar.text}
        subtext={content.stickyBar.subtext}
        href={content.stickyBar.href}
      />
    </>
  );
}
