import type { Metadata } from "next";
import { servicesContentEs } from "@/content/es/servicios";
import { getFaqByLanguage } from "@/content/shared/faq";
import { buildPageMetadata } from "@/lib/metadata";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqAccordion from "@/components/ui/FaqAccordion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";
import ServicesTierCards from "@/components/ui/ServicesTierCards";

// =============================================================================
// Services Page — Spanish (/es/servicios) — V5 Redesign
// =============================================================================

export const metadata: Metadata = buildPageMetadata(servicesContentEs.seo, "es", "services");

export default function ServicesPageEs() {
  const content = servicesContentEs;
  const faqItems = getFaqByLanguage("es");
  const powerPalette = content.tiers[0];
  const paidTiers = content.tiers.slice(1);

  return (
    <>
      {/* 1. Hero */}
      <section className="bg-gradient-to-b from-warm-ivory to-[#F0EAE3]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <ScrollReveal className="hidden lg:block">
              <div className="border border-champagne p-1.5 bg-warm-ivory">
                <ImagePlaceholder
                  alt={content.hero.imageAlt || "Lu trabajando con una clienta"}
                  width={800}
                  height={1000}
                  colorIndex={1}
                  className="w-full"
                  priority
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="w-12 h-[1px] bg-terracotta mb-6 hidden lg:block" />
              <h1 className="text-page-title mb-5 text-center lg:text-left">
                {content.hero.headline}
              </h1>
              <p className="text-warm-grey leading-relaxed text-[15px] md:text-[17px] text-center lg:text-left max-w-[600px] mx-auto lg:mx-0">
                {content.hero.subheadline}
              </p>
              <div className="w-12 h-[1px] bg-terracotta mt-6 mx-auto lg:hidden" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Power Palette */}
      <section className="bg-warm-ivory" id={powerPalette.anchor}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-2 md:py-16">
          <ScrollReveal>
            <div className="lui-card border border-champagne overflow-hidden md:grid md:grid-cols-2">
              <div className="md:min-h-[380px]">
                <div className="p-2 md:p-0 md:h-full">
                  <ImagePlaceholder
                    alt={powerPalette.imageAlt || "Lu realizando drapeado de color"}
                    width={800}
                    height={600}
                    colorIndex={1}
                    className="w-full md:h-full md:object-cover"
                  />
                </div>
              </div>
              <div className="px-5 pb-6 pt-4 md:px-11 md:py-12 flex flex-col justify-center">
                <span className="font-body font-semibold text-[11px] tracking-[2px] uppercase text-terracotta mb-2">
                  {powerPalette.label}
                </span>
                <h2 className="font-heading font-medium text-[22px] md:text-[32px] text-espresso mb-3 md:mb-4">
                  {powerPalette.name}
                </h2>
                <p className="text-warm-grey text-[15px] md:text-[17px] leading-relaxed mb-5 md:mb-7">
                  {powerPalette.description}
                </p>
                <div>
                  <Button
                    href={powerPalette.cta.href}
                    external={powerPalette.cta.external}
                    className="w-full md:w-auto"
                  >
                    {powerPalette.cta.text}
                  </Button>
                </div>
                <p className="font-body text-[12px] md:text-[13px] text-warm-taupe mt-2 text-center md:text-left">
                  Sin compromiso
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Social Proof */}
      {content.socialProof && content.socialProof.length > 0 && (
        <section className="bg-soft-stone">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-8 md:py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {content.socialProof.map((t, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="bg-warm-ivory border-l-[3px] border-l-gold p-5 md:p-7 flex flex-col h-full">
                    <p className="font-heading italic text-espresso text-[15px] md:text-[19px] leading-snug mb-4 flex-1">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-champagne flex items-center justify-center shrink-0">
                        <span className="font-body font-semibold text-[13px] md:text-[14px] text-warm-taupe">
                          {t.initials}
                        </span>
                      </div>
                      <div>
                        <p className="font-body font-semibold text-[13px] md:text-[14px] text-espresso">
                          {t.name}
                        </p>
                        <p className="font-body text-[11px] md:text-[12px] text-warm-taupe">
                          {t.title}
                        </p>
                        {t.social && (
                          <p className="font-body text-[11px] text-terracotta">{t.social}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Transition */}
      {content.transition && (
        <section className="bg-champagne">
          <div className="max-w-3xl mx-auto px-6 lg:px-10 py-10 md:py-12 text-center">
            <ScrollReveal>
              <h2 className="font-heading font-medium text-[20px] md:text-[30px] text-espresso mb-2">
                {content.transition.heading}
              </h2>
              <p className="text-warm-grey text-[14px] md:text-[16px]">
                {content.transition.body}
              </p>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* 5. Paid Tier Cards */}
      <section className="bg-warm-ivory">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-10 md:py-14">
          <ServicesTierCards tiers={paidTiers} />
        </div>
      </section>

      {/* 6. Visual Moment */}
      {content.visualMoment && (
        <section className="bg-espresso">
          <div className="md:grid md:grid-cols-[1.1fr_1fr] min-h-[280px] md:min-h-[420px]">
            <div className="hidden md:block">
              <ImagePlaceholder
                alt="Resultado de transformación"
                width={800}
                height={600}
                colorIndex={2}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-center px-6 py-10 md:px-14 md:py-16">
              <div>
                <div className="w-10 h-[1px] bg-gold mb-6" />
                <p className="font-heading italic text-warm-ivory text-[20px] md:text-[30px] leading-snug mb-5">
                  &ldquo;{content.visualMoment.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-warm-ivory/10 flex items-center justify-center shrink-0">
                    <span className="font-body font-semibold text-[13px] text-warm-ivory/50">
                      {content.visualMoment.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-body font-semibold text-[14px] text-warm-ivory/70">
                      {content.visualMoment.name}
                    </p>
                    <p className="font-body text-[12px] text-warm-ivory/40">
                      {content.visualMoment.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7. FAQ */}
      <section className="bg-warm-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-10 md:py-16">
          <ScrollReveal>
            <SectionHeading>{content.faq.heading}</SectionHeading>
            <FaqAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="bg-espresso">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-10 md:py-[72px] text-center">
          <ScrollReveal>
            <h2 className="text-warm-ivory font-heading font-medium text-[22px] md:text-[32px] mb-3 md:mb-4">
              {content.finalCta.heading}
            </h2>
            <p className="text-warm-ivory/70 leading-relaxed text-[14px] md:text-[17px] mb-0 md:mb-8">
              {content.finalCta.body}
            </p>
            {content.finalCta.cta && (
              <div className="hidden md:block">
                <Button href={content.finalCta.cta.href} external={content.finalCta.cta.external}>
                  {content.finalCta.cta.text}
                </Button>
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
