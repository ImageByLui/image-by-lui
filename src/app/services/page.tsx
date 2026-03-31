import type { Metadata } from "next";
import { servicesOverviewContent } from "@/content/en/services-overview";
import { buildPageMetadata } from "@/lib/metadata";

import ServicesHero from "@/components/services/ServicesHero";
import FreeSessionCard from "@/components/services/FreeSessionCard";
import TrustLine from "@/components/services/TrustLine";
import ServiceSelectorCard from "@/components/services/ServiceSelectorCard";
import ServicesTestimonialBlock from "@/components/services/ServicesTestimonialBlock";
import ServicesBottomCTA from "@/components/services/ServicesBottomCTA";
import ServicesStickyBar from "@/components/services/ServicesStickyBar";

// =============================================================================
// Services Overview — English (/services) — V6 Redesign
// =============================================================================
// Replaces the V5 services page. Structure:
//   1. Hero (text only)
//   2. Free Session Card (Power Palette invitation)
//   3. Trust Line (Lu's credentials)
//   4. Service Selector (Occasion Styling + Image Consulting cards)
//   5. Testimonial
//   6. Bottom CTA (WhatsApp + secondary link)
//   7. Sticky Bar (Calendly link)
// =============================================================================

const content = servicesOverviewContent;

export const metadata: Metadata = {
  ...buildPageMetadata(content.seo, "en", "services"),
  alternates: {
    canonical: "/services",
    languages: {
      en: "/services",
      es: "/es/servicios",
      "x-default": "/services",
    },
  },
  openGraph: {
    title: "Image Consulting & Occasion Styling in Miami",
    description:
      "Professional image strategy built on colorimetry and style science. Complimentary color analysis available. Bilingual EN/ES.",
    images: [
      {
        url: "/og/services-overview.jpg",
        width: 1200,
        height: 630,
        alt: "Image by LUI — Image Consulting & Styling in Miami",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

/** Page-specific Service schema (not in root layout — unique to this page) */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Image Consulting & Occasion Styling",
  description: content.hero.description,
  provider: {
    "@type": "LocalBusiness",
    name: "Image by LUI",
    url: "https://imagebylui.com",
  },
  areaServed: "Miami",
  availableLanguage: ["English", "Spanish"],
};

export default function ServicesPage() {
  return (
    <>
      {/* JSON-LD Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* 1. Hero */}
      <ServicesHero
        headline={content.hero.headline}
        description={content.hero.description}
      />

      {/* 2. Free Session Card */}
      <FreeSessionCard
        imageAlt={content.freeSession.imageAlt}
        title={content.freeSession.title}
        subtitle={content.freeSession.subtitle}
        description={content.freeSession.description}
        deliverables={content.freeSession.deliverables}
        cta={content.freeSession.cta}
        footnote={content.freeSession.footnote}
      />

      {/* 3. Trust Line */}
      <TrustLine
        name={content.trustLine.name}
        credentials={content.trustLine.credentials}
      />

      {/* 4. Service Selector */}
      <section className="bg-warm-ivory pt-7 px-3.5 pb-3.5" aria-label="Our services">
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

      {/* 5. Testimonial */}
      <ServicesTestimonialBlock
        quote={content.testimonial.quote}
        name={content.testimonial.name}
        initials={content.testimonial.initials}
        title={content.testimonial.title}
      />

      {/* 6. Bottom CTA */}
      <ServicesBottomCTA
        heading={content.bottomCta.heading}
        description={content.bottomCta.description}
        primaryCta={content.bottomCta.primaryCta}
        secondaryText={content.bottomCta.secondaryText}
        secondaryLinkText={content.bottomCta.secondaryLinkText}
        secondaryLinkHref={content.bottomCta.secondaryLinkHref}
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
