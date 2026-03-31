import type { Metadata } from "next";
import type { JourneyComponentData } from "@/types/content";
import Link from "next/link";
import { consultoriaDeImagenContent } from "@/content/es/consultoria-de-imagen";
import { buildPageMetadata } from "@/lib/metadata";

import ServicePageHero from "@/components/services/ServicePageHero";
import CompactPricingCard from "@/components/services/CompactPricingCard";
import JourneyComponent from "@/components/services/JourneyComponent";
import DeliverablesCompact from "@/components/services/DeliverablesCompact";
import BeforeAfterSlider from "@/components/services/BeforeAfterSlider";
import PhotoSessionOptions from "@/components/services/PhotoSessionOptions";
import BottomCTASection from "@/components/services/BottomCTASection";
import ServicesStickyBar from "@/components/services/ServicesStickyBar";

const content = consultoriaDeImagenContent;

export const metadata: Metadata = {
  ...buildPageMetadata(content.seo, "es", "imageConsulting"),
  alternates: {
    canonical: "/es/servicios/consultoria-de-imagen",
    languages: {
      en: "/services/image-consulting",
      es: "/es/servicios/consultoria-de-imagen",
      "x-default": "/services/image-consulting",
    },
  },
  openGraph: {
    title: "Consultoría de Imagen Completa — 4 Componentes, 7 Entregables",
    description: "Reinvención diagnóstica de su imagen profesional. Tarifa introductoria $1,500. Colorimetría, detox de clóset, compras, fotos estilizadas.",
    images: [{ url: "/og/image-consulting.jpg", width: 1200, height: 630, alt: "Image by LUI — Consultoría de Imagen en Miami" }],
    locale: "es_US",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Consultoría de Imagen",
  description: content.hero.description,
  provider: { "@type": "LocalBusiness", name: "Image by LUI", url: "https://imagebylui.com" },
  areaServed: "Miami",
  availableLanguage: ["English", "Spanish"],
  offers: { "@type": "Offer", price: "1500", priceCurrency: "USD", description: "Tarifa introductoria. Tarifa estándar $2,000." },
};

export default function ConsultoriaDeImagenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <ServicePageHero
        label={content.hero.label}
        labelColor="gold"
        headline={content.hero.headline}
        description={content.hero.description}
        imageAlt={content.hero.imageAlt}
        imageBorderColor="gold"
        tags={content.hero.tags}
        tagsPosition="above-image"
      />

      <CompactPricingCard
        price={content.pricing.price}
        priceStrikethrough={content.pricing.priceStrikethrough}
        priceNote={content.pricing.priceNote}
        summary={content.pricing.summary}
      />

      <section className="bg-warm-ivory py-7 px-3.5" aria-label="Su proceso">
        <p className="font-body font-semibold text-[10px] tracking-[1.5px] uppercase text-terracotta px-1.5 mb-1.5">{content.journey.label}</p>
        <p className="font-body text-[13px] text-warm-taupe leading-[1.5] px-1.5 mb-[22px]">{content.journey.subheading}</p>
        {content.journey.components.map((comp: JourneyComponentData, i: number) => (
          <JourneyComponent key={comp.stepNumber} {...comp} defaultOpen={i === 0} isFirst={i === 0} />
        ))}
      </section>

      <DeliverablesCompact
        label={content.deliverables.label}
        subheading={content.deliverables.subheading}
        items={content.deliverables.items}
        whatsappCallout={content.deliverables.whatsappCallout}
      />

      <BeforeAfterSlider
        label={content.transformations.label}
        subheading={content.transformations.subheading}
        items={content.transformations.items}
        activeLabel="Activo"
        inactiveLabel="Tap"
      />

      <PhotoSessionOptions label={content.photoOptions.label} options={content.photoOptions.options} />

      <BottomCTASection>
        <h2 className="font-heading font-normal text-[22px] text-warm-ivory mb-2.5">{content.bottomCta.heading}</h2>
        <p className="font-body text-[15px] leading-[1.6] text-warm-ivory/65 mb-6">{content.bottomCta.description}</p>
        <a href={content.bottomCta.primaryCta.href} target="_blank" rel="noopener noreferrer"
          className="inline-block bg-terracotta text-white font-body font-semibold text-[12px] tracking-[1.5px] uppercase px-9 py-4 no-underline hover:no-underline transition-all duration-150 active:bg-terracotta-dark active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          aria-label="Agenda tu consulta de cortesía en Calendly (abre en nueva pestaña)">
          {content.bottomCta.primaryCta.text}
        </a>
        <p className="font-body text-[12px] text-warm-ivory/50 mt-3.5">
          {content.bottomCta.secondaryText}{" "}
          <a href={content.bottomCta.secondaryLinkHref} target="_blank" rel="noopener noreferrer" className="text-gold font-semibold underline hover:text-gold hover:opacity-80 transition-opacity duration-150">{content.bottomCta.secondaryLinkText}</a>
        </p>
        <p className="font-body text-[12px] text-warm-ivory/40 mt-2.5">
          <Link href={content.bottomCta.faqLinkHref} className="text-warm-ivory/55 hover:text-warm-ivory transition-colors duration-150 no-underline hover:underline">{content.bottomCta.faqLinkText}</Link>
        </p>
      </BottomCTASection>

      <ServicesStickyBar text={content.stickyBar.text} subtext={content.stickyBar.subtext} href={content.stickyBar.href} />
    </>
  );
}
