import type { Metadata } from "next";
import Link from "next/link";
import { consultoriaDeImagenContent } from "@/content/es/consultoria-de-imagen";
import { buildPageMetadata } from "@/lib/metadata";
import ServicePageHero from "@/components/services/ServicePageHero";
import TrustLine from "@/components/services/TrustLine";
import CompactPricingCard from "@/components/services/CompactPricingCard";
import InvestmentPrestigeCard from "@/components/services/InvestmentPrestigeCard";
import JourneySection from "@/components/services/JourneySection";
import JourneyTimelineDesktop from "@/components/services/JourneyTimelineDesktop";
import DeliverablesCompact from "@/components/services/DeliverablesCompact";
import DeliverablesPrestigeCard from "@/components/services/DeliverablesPrestigeCard";
import ServicesTestimonialBlock from "@/components/services/ServicesTestimonialBlock";
import BeforeAfterSlider from "@/components/services/BeforeAfterSlider";
import PhotoSessionOptions from "@/components/services/PhotoSessionOptions";
import FAQPreview from "@/components/services/FAQPreview";
import CrossNavLink from "@/components/services/CrossNavLink";
import BottomCTASection from "@/components/services/BottomCTASection";
import ServicesStickyBar from "@/components/services/ServicesStickyBar";

const content = consultoriaDeImagenContent;
const desktop = content.desktop;

export const metadata: Metadata = {
  ...buildPageMetadata(content.seo, "es", "imageConsulting"),
  alternates: { canonical: "/es/servicios/consultoria-de-imagen", languages: { en: "/services/image-consulting", es: "/es/servicios/consultoria-de-imagen", "x-default": "/services/image-consulting" } },
  openGraph: { title: "Consultoría de Imagen Completa — 4 Componentes, 7 Entregables", description: "Reinvención diagnóstica de su imagen profesional. $1,500.", images: [{ url: "/og/image-consulting.jpg", width: 1200, height: 630 }], locale: "es_US", type: "website" },
};
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Consultoría de Imagen", description: content.hero.description, provider: { "@type": "LocalBusiness", name: "Image by LUI", url: "https://imagebylui.com" }, areaServed: "Miami", availableLanguage: ["English", "Spanish"], offers: { "@type": "Offer", price: "1500", priceCurrency: "USD", description: "Tarifa introductoria. Tarifa estándar $2,000." } };

export default function ConsultoriaDeImagenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* §4.2 Hero */}
      <ServicePageHero
        label={content.hero.label}
        labelColor="gold"
        headline={content.hero.headline}
        description={content.hero.description}
        imageAlt={content.hero.imageAlt}
        imageBorderColor="gold"
        tags={content.hero.tags}
        tagsPosition="above-image"
        desktopPhoto={desktop?.hero}
        desktopH1Size={52}
      />

      {/* Trust line — mobile only */}
      <div className="lg:hidden">
        <TrustLine name="Lu · Consultora de Imagen" credentials={["Especialista certificada en colorimetría", "Bilingüe EN/ES", "Miami"]} compact />
      </div>

      {/* §4.3 Investment */}
      <div className="lg:hidden">
        <CompactPricingCard price={content.pricing.price} priceStrikethrough={content.pricing.priceStrikethrough} priceNote={content.pricing.priceNote} summary={content.pricing.summary} />
      </div>
      {desktop?.investment && (
        <InvestmentPrestigeCard {...desktop.investment} />
      )}

      {/* §4.4 Journey */}
      <div className="lg:hidden">
        <JourneySection label={content.journey.label} subheading={content.journey.subheading} components={content.journey.components} />
      </div>
      {desktop?.journey && (
        <JourneyTimelineDesktop
          heading={desktop.journey.heading}
          subheading={desktop.journey.subheading}
          components={content.journey.components}
          images={desktop.journey.images}
          photoEmbed={desktop.journey.photoEmbed}
        />
      )}

      {/* §4.5 Deliverables */}
      <div className="lg:hidden">
        <DeliverablesCompact label={content.deliverables.label} subheading={content.deliverables.subheading} items={content.deliverables.items} whatsappCallout={content.deliverables.whatsappCallout} />
      </div>
      {desktop?.deliverables && (
        <DeliverablesPrestigeCard {...desktop.deliverables} />
      )}

      {/* §4.6 Testimonial — Valentina (placeholder) */}
      {content.testimonial && (
        <ServicesTestimonialBlock
          quote={content.testimonial.quote}
          name={content.testimonial.name}
          initials={content.testimonial.initials}
          title={content.testimonial.title}
          photo={content.testimonial.photo}
          handle={content.testimonial.handle}
          bgColor="warm-ivory"
        />
      )}

      {/* §4.7 Before/After slider */}
      <BeforeAfterSlider
        label={content.transformations.label}
        subheading={content.transformations.subheading}
        items={content.transformations.items}
        activeLabel="Activo"
        inactiveLabel="Tap"
        desktopHeading="Transformaciones reales"
      />

      {/* Photo options — mobile only */}
      <div className="lg:hidden">
        <PhotoSessionOptions label={content.photoOptions.label} options={content.photoOptions.options} />
      </div>

      {/* §4.8 FAQ Preview — desktop only */}
      {desktop?.faqPreview && (
        <FAQPreview
          heading={desktop.faqPreview.heading}
          items={desktop.faqPreview.items}
          linkText={desktop.faqPreview.linkText}
          linkHref={desktop.faqPreview.linkHref}
          columns={2}
          maxWidth="880px"
        />
      )}

      {/* §4.9 Cross-nav — desktop only */}
      {desktop?.crossNav && (
        <CrossNavLink
          text={desktop.crossNav.text}
          linkText={desktop.crossNav.linkText}
          linkHref={desktop.crossNav.linkHref}
        />
      )}

      {/* §4.10 Bottom CTA */}
      <BottomCTASection>
        <h2 className="font-heading font-normal text-[length:var(--lui-fs-section)] text-warm-ivory mb-2.5 lg:text-[28px] lg:italic lg:mb-3">
          {desktop?.bottomCta?.heading ?? content.bottomCta.heading}
        </h2>
        <p className="font-body text-[length:var(--lui-fs-card)] leading-[1.6] text-warm-ivory/65 mb-6 lg:text-[14px] lg:font-light lg:text-warm-ivory/40 lg:leading-[1.7] lg:mb-8">
          {desktop?.bottomCta?.description ?? content.bottomCta.description}
        </p>

        {/* Mobile CTA */}
        <div className="lg:hidden">
          <a href={content.bottomCta.primaryCta.href} target="_blank" rel="noopener noreferrer" className="inline-block bg-terracotta text-white font-body font-semibold text-[length:var(--lui-fs-cta)] tracking-[1.5px] uppercase px-9 py-4 no-underline hover:no-underline transition-all duration-150 active:bg-terracotta-dark">
            {content.bottomCta.primaryCta.text}
          </a>
          <p className="font-body text-[length:var(--lui-fs-secondary)] text-warm-ivory/60 mt-3.5">
            {content.bottomCta.secondaryText}{" "}
            <a href={content.bottomCta.secondaryLinkHref} target="_blank" rel="noopener noreferrer" className="text-gold font-semibold underline hover:text-gold">{content.bottomCta.secondaryLinkText}</a>
          </p>
          <p className="font-body text-[length:var(--lui-fs-secondary)] text-warm-ivory/60 mt-2.5">
            <Link href={content.bottomCta.faqLinkHref} className="text-warm-ivory/60 hover:text-warm-ivory transition-colors duration-150 no-underline hover:underline">{content.bottomCta.faqLinkText}</Link>
          </p>
        </div>

        {/* Desktop CTA */}
        {desktop?.bottomCta && (
          <div className="hidden lg:block">
            <a href={desktop.bottomCta.primaryCta.href} target="_blank" rel="noopener noreferrer" className="cta-primary">
              {desktop.bottomCta.primaryCta.text}
            </a>
            <p className="font-body text-[13px] text-warm-ivory/30 mt-[18px]">
              {desktop.bottomCta.secondaryText.split("WhatsApp")[0]}
              <a href={desktop.bottomCta.secondaryLinkHref} target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-medium no-underline hover:opacity-80 transition-opacity">WhatsApp</a>
            </p>
          </div>
        )}
      </BottomCTASection>

      <ServicesStickyBar text={content.stickyBar.text} subtext={content.stickyBar.subtext} href={content.stickyBar.href} />
    </>
  );
}
