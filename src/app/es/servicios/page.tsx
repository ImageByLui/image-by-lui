import type { Metadata } from "next";
import { serviciosOverviewContent } from "@/content/es/servicios-overview";
import { buildPageMetadata } from "@/lib/metadata";
import type { ServiceSelectorCardData } from "@/types/content";
import ServicesHero from "@/components/services/ServicesHero";
import FreeSessionCard from "@/components/services/FreeSessionCard";
import TrustLine from "@/components/services/TrustLine";
import ServiceSelectorCard from "@/components/services/ServiceSelectorCard";
import DesktopServiceCards from "@/components/services/DesktopServiceCards";
import ServicesTestimonialBlock from "@/components/services/ServicesTestimonialBlock";
import FAQPreview from "@/components/services/FAQPreview";
import BottomCTASection from "@/components/services/BottomCTASection";
import ServicesStickyBar from "@/components/services/ServicesStickyBar";

const content = serviciosOverviewContent;
export const metadata: Metadata = {
  ...buildPageMetadata(content.seo, "es", "services"),
  alternates: { canonical: "/es/servicios", languages: { en: "/services", es: "/es/servicios", "x-default": "/services" } },
  openGraph: { title: "Consultoría de Imagen y Estilismo de Ocasión en Miami", description: "Estrategia de imagen profesional basada en colorimetría.", images: [{ url: "/og/services-overview.jpg", width: 1200, height: 630 }], locale: "es_US", type: "website" },
};
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Consultoría de Imagen y Estilismo de Ocasión", description: content.hero.description, provider: { "@type": "LocalBusiness", name: "Image by LUI", url: "https://imagebylui.com" }, areaServed: "Miami", availableLanguage: ["English", "Spanish"] };

export default function ServiciosPage() {
  const desktop = content.desktop;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* §2.2 Hero */}
      <ServicesHero headline={content.hero.headline} description={content.hero.description} />

      {/* §2.3 Power Palette prestige card */}
      <FreeSessionCard
        imageAlt={content.freeSession.imageAlt}
        title={content.freeSession.title}
        subtitle={content.freeSession.subtitle}
        description={content.freeSession.description}
        deliverables={content.freeSession.deliverables}
        cta={content.freeSession.cta}
        footnote={content.freeSession.footnote}
        trustLine={`Con <strong>Lu</strong> · ${content.trustLine.credentials}`}
      />

      {/* Trust line — mobile only */}
      <div className="lg:hidden">
        <TrustLine name={content.trustLine.name} credentials={content.trustLine.credentials} />
      </div>

      {/* §2.4 Service cards — MOBILE: stacked, DESKTOP: 2-col photography grid */}
      <section className="bg-warm-ivory pt-4 px-3.5 pb-3.5 lg:hidden" aria-label="Nuestros servicios">
        <p className="font-body font-semibold text-caption text-espresso text-center tracking-[1px] uppercase mb-1">{content.selector.heading}</p>
        <p className="font-body text-caption text-warm-taupe text-center leading-[1.5] mb-[22px]">{content.selector.subheading}</p>
        {content.selector.cards.map((card: ServiceSelectorCardData) => <ServiceSelectorCard key={card.name} {...card} />)}
      </section>

      {desktop?.serviceCards && (
        <DesktopServiceCards heading={content.selector.heading} cards={desktop.serviceCards} />
      )}

      {/* §2.5 Testimonial */}
      <ServicesTestimonialBlock
        quote={content.testimonial.quote}
        name={content.testimonial.name}
        initials={content.testimonial.initials}
        title={content.testimonial.title}
        photo={content.testimonial.photo}
        handle={content.testimonial.handle}
      />

      {/* §2.6 FAQ Preview — desktop only */}
      {desktop?.faqPreview && (
        <FAQPreview
          heading={desktop.faqPreview.heading}
          items={desktop.faqPreview.items}
          linkText={desktop.faqPreview.linkText}
          linkHref={desktop.faqPreview.linkHref}
        />
      )}

      {/* §2.7 Bottom CTA — responsive: WhatsApp mobile, Calendly desktop */}
      <BottomCTASection>
        <h2 className="font-heading font-normal text-section text-warm-ivory mb-2.5 lg:text-[30px] lg:italic lg:mb-3">
          {desktop?.bottomCta?.heading ?? content.bottomCta.heading}
        </h2>
        <p className="font-body text-card leading-[1.6] text-warm-ivory/65 mb-6 lg:text-[15px] lg:font-light lg:text-warm-ivory/40 lg:leading-[1.7] lg:mb-8">
          {desktop?.bottomCta?.description ?? content.bottomCta.description}
        </p>

        {/* Mobile CTA: WhatsApp primary */}
        <div className="lg:hidden">
          <a href={content.bottomCta.primaryCta.href} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white font-body font-semibold text-cta tracking-[1px] uppercase px-8 py-4 no-underline hover:no-underline transition-colors duration-150 active:bg-[#1DA851]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            {content.bottomCta.primaryCta.text}
          </a>
          <p className="font-body text-secondary text-warm-ivory/60 mt-3">
            {content.bottomCta.secondaryText}{" "}
            <a href={content.bottomCta.secondaryLinkHref} target="_blank" rel="noopener noreferrer" className="text-gold font-semibold underline hover:text-gold">{content.bottomCta.secondaryLinkText}</a>
          </p>
        </div>

        {/* Desktop CTA: Calendly primary, WhatsApp secondary */}
        {desktop?.bottomCta && (
          <div className="hidden lg:block">
            <a href={desktop.bottomCta.primaryCta.href} target="_blank" rel="noopener noreferrer"
              className="cta-primary">
              {desktop.bottomCta.primaryCta.text}
            </a>
            <p className="font-body text-[13px] text-warm-ivory/30 mt-[18px]">
              {desktop.bottomCta.secondaryText.split("WhatsApp")[0]}
              <a href={desktop.bottomCta.secondaryLinkHref} target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-medium no-underline hover:opacity-80 transition-opacity">
                WhatsApp
              </a>
            </p>
          </div>
        )}
      </BottomCTASection>

      <ServicesStickyBar text={content.stickyBar.text} subtext={content.stickyBar.subtext} href={content.stickyBar.href} />
    </>
  );
}
