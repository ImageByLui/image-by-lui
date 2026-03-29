import type { Metadata } from "next";
import { homeContentEs } from "@/content/es/home";
import { testimonials, testimonialsContextLine } from "@/content/shared/testimonials";
import { buildPageMetadata } from "@/lib/metadata";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import PersonaCard from "@/components/ui/PersonaCard";
import ProcessSteps from "@/components/ui/ProcessSteps";
import TransformationCard from "@/components/ui/TransformationCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";

// =============================================================================
// Homepage — Spanish (/es) — V2-B
// =============================================================================

export const metadata: Metadata = buildPageMetadata(homeContentEs.seo, "es", "home");

export default function HomePageEs() {
  const content = homeContentEs;

  return (
    <>
      {/* 1. Hero — Warm Ivory — reduced mobile padding */}
      <section className="bg-warm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <ScrollReveal>
              <h1 className="text-page-title mb-4 md:mb-6">{content.hero.headline}</h1>
              <p className="text-warm-grey leading-relaxed text-[16px] md:text-[18px] mb-3">
                {content.hero.subheadline}
              </p>
              {content.hero.trustLine && (
                <p className="font-body font-semibold text-warm-taupe text-[13px] md:text-[14px] uppercase tracking-[1.5px] mb-6">
                  {content.hero.trustLine}
                </p>
              )}
              <Button href={content.hero.cta.href} external={content.hero.cta.external}>
                {content.hero.cta.text}
              </Button>
              <p className="text-caption mt-3">{content.hero.ctaSubtext}</p>
            </ScrollReveal>
            <ScrollReveal delay={200} className="hidden md:block">
              <ImagePlaceholder
                alt={content.hero.imageAlt}
                width={1920}
                height={1080}
                colorIndex={0}
                className="w-full"
                priority
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <hr className="lui-divider" />

      {/* 2. Who Is This For? — Soft Stone */}
      <section className="bg-soft-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <ScrollReveal>
            <SectionHeading>{content.whoIsThisFor.sectionHeading}</SectionHeading>
          </ScrollReveal>

          <div className="hidden md:grid grid-cols-2 gap-4 max-w-4xl mx-auto">
            {content.whoIsThisFor.cards.map((card, i) => (
              <ScrollReveal key={card.headline} delay={i * 100}>
                <PersonaCard headline={card.headline} body={card.body} />
              </ScrollReveal>
            ))}
          </div>

          <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
            {content.whoIsThisFor.cards.map((card) => (
              <div key={card.headline} className="min-w-[280px] snap-start shrink-0">
                <PersonaCard headline={card.headline} body={card.body} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works — Warm Ivory */}
      <section className="bg-warm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <ScrollReveal>
            <ProcessSteps
              heading={content.howItWorks.sectionHeading}
              steps={content.howItWorks.steps}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Service Cards — Soft Stone */}
      <section className="bg-soft-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <ScrollReveal>
            <SectionHeading>{content.servicePreview.heading}</SectionHeading>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.servicePreview.cards.map((card, i) => (
              <ScrollReveal key={card.name} delay={i * 100}>
                <ServiceCard
                  name={card.name}
                  price={card.price}
                  description={card.description}
                  ctaText={card.cta.text}
                  ctaHref={card.cta.href}
                  ctaExternal={card.cta.external}
                  featured={i === 0}
                  badge={i === 0 ? "MÁS POPULAR" : i === 2 ? "MÁS COMPLETO" : undefined}
                  badgeColor={i === 2 ? "text-warm-taupe" : undefined}
                  topBorderColor={i === 2 ? "border-t-gold" : undefined}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Transformations — Warm Ivory */}
      <section className="bg-warm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <ScrollReveal>
            <SectionHeading subtitle={content.transformations.sectionSubheading}>
              {content.transformations.sectionHeading}
            </SectionHeading>
          </ScrollReveal>

          <div className="hidden md:grid grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.transformations.cards.map((card, i) => (
              <ScrollReveal key={card.caption} delay={i * 100}>
                <TransformationCard
                  beforeImage={card.beforeImage}
                  afterImage={card.afterImage}
                  caption={card.caption}
                />
              </ScrollReveal>
            ))}
          </div>

          <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
            {content.transformations.cards.map((card) => (
              <div key={card.caption} className="min-w-[300px] snap-start shrink-0">
                <TransformationCard
                  beforeImage={card.beforeImage}
                  afterImage={card.afterImage}
                  caption={card.caption}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="lui-divider" />

      {/* 6. Testimonials — Champagne */}
      <section className="bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <ScrollReveal>
            <SectionHeading>{content.socialProof.heading}</SectionHeading>
            <p className="text-center font-heading italic text-warm-taupe text-[14px] mb-8 -mt-4">
              {testimonialsContextLine.es}
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <TestimonialCard
                  quote={t.quote.es}
                  attribution={t.attribution.es}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. About Preview — Warm Ivory */}
      <section className="bg-warm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <ImagePlaceholder
                alt="Lu — Consultora de Imagen"
                width={1200}
                height={800}
                colorIndex={1}
                className="w-full"
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <SectionHeading centered={false}>
                {content.aboutPreview.heading}
              </SectionHeading>
              <p className="text-warm-grey leading-relaxed mb-6">
                {content.aboutPreview.body}
              </p>
              <Button href={content.aboutPreview.link.href} variant="secondary">
                {content.aboutPreview.link.text}
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 8. Instagram Follow CTA — Soft Stone */}
      <section className="bg-soft-stone">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <ScrollReveal>
            <h2 className="mb-4">{content.instagramCta.heading}</h2>
            <p className="text-warm-grey leading-relaxed mb-8">
              {content.instagramCta.body}
            </p>
            <Button href={content.instagramCta.cta.href} external={content.instagramCta.cta.external}>
              {content.instagramCta.cta.text}
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. Final CTA — Espresso */}
      <section className="bg-espresso">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <ScrollReveal>
            <h2 className="text-warm-ivory mb-4">{content.finalCta.heading}</h2>
            <p className="text-warm-ivory/80 leading-relaxed mb-8">
              {content.finalCta.body}
            </p>
            <Button href={content.finalCta.cta.href} external={content.finalCta.cta.external}>
              {content.finalCta.cta.text}
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
