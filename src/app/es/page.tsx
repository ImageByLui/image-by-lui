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
import ImagePlaceholder from "@/components/features/ImagePlaceholder";

// =============================================================================
// Homepage — Spanish (/es) — V2 Complete
// =============================================================================

export const metadata: Metadata = buildPageMetadata(homeContentEs.seo, "es", "home");

export default function HomePageEs() {
  const content = homeContentEs;

  return (
    <>
      {/* 1. Hero — Warm Ivory */}
      <section className="bg-warm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h1 className="text-page-title mb-6">{content.hero.headline}</h1>
              <p className="text-warm-grey leading-relaxed text-[16px] md:text-[18px] mb-8">
                {content.hero.subheadline}
              </p>
              <Button href={content.hero.cta.href} external={content.hero.cta.external}>
                {content.hero.cta.text}
              </Button>
              <p className="text-caption mt-3">{content.hero.ctaSubtext}</p>
            </div>
            <div>
              <ImagePlaceholder
                alt={content.hero.imageAlt}
                width={1920}
                height={1080}
                colorIndex={0}
                className="w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="lui-divider" />

      {/* 2. Who Is This For? — Soft Stone */}
      <section className="bg-soft-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <SectionHeading>{content.whoIsThisFor.sectionHeading}</SectionHeading>

          {/* Desktop: 2x2 grid */}
          <div className="hidden md:grid grid-cols-2 gap-4 max-w-4xl mx-auto">
            {content.whoIsThisFor.cards.map((card) => (
              <PersonaCard
                key={card.headline}
                headline={card.headline}
                body={card.body}
              />
            ))}
          </div>

          {/* Mobile: Swipeable carousel */}
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
          <ProcessSteps
            heading={content.howItWorks.sectionHeading}
            steps={content.howItWorks.steps}
          />
        </div>
      </section>

      {/* 4. Service Cards — Soft Stone */}
      <section className="bg-soft-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <SectionHeading>{content.servicePreview.heading}</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.servicePreview.cards.map((card) => (
              <ServiceCard
                key={card.name}
                name={card.name}
                price={card.price}
                description={card.description}
                ctaText={card.cta.text}
                ctaHref={card.cta.href}
                ctaExternal={card.cta.external}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Transformations — Warm Ivory */}
      <section className="bg-warm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <SectionHeading subtitle={content.transformations.sectionSubheading}>
            {content.transformations.sectionHeading}
          </SectionHeading>

          {/* Desktop: 3 columns */}
          <div className="hidden md:grid grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.transformations.cards.map((card) => (
              <TransformationCard
                key={card.caption}
                beforeImage={card.beforeImage}
                afterImage={card.afterImage}
                caption={card.caption}
              />
            ))}
          </div>

          {/* Mobile: Swipeable carousel */}
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
          <SectionHeading>{content.socialProof.heading}</SectionHeading>
          <p className="text-center font-heading italic text-warm-taupe text-[14px] mb-8 -mt-4">
            {testimonialsContextLine.es}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={i}
                quote={t.quote.es}
                attribution={t.attribution.es}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. About Preview — Warm Ivory */}
      <section className="bg-warm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ImagePlaceholder
              alt="Lu — Consultora de Imagen"
              width={1200}
              height={800}
              colorIndex={1}
              className="w-full"
            />
            <div>
              <SectionHeading centered={false}>
                {content.aboutPreview.heading}
              </SectionHeading>
              <p className="text-warm-grey leading-relaxed mb-6">
                {content.aboutPreview.body}
              </p>
              <Button href={content.aboutPreview.link.href} variant="secondary">
                {content.aboutPreview.link.text}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Instagram Follow CTA — Soft Stone */}
      <section className="bg-soft-stone">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2 className="mb-4">{content.instagramCta.heading}</h2>
          <p className="text-warm-grey leading-relaxed mb-8">
            {content.instagramCta.body}
          </p>
          <Button href={content.instagramCta.cta.href} external={content.instagramCta.cta.external}>
            {content.instagramCta.cta.text}
          </Button>
        </div>
      </section>

      {/* 9. Final CTA — Espresso */}
      <section className="bg-espresso">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2 className="text-warm-ivory mb-4">{content.finalCta.heading}</h2>
          <p className="text-warm-ivory/80 leading-relaxed mb-8">
            {content.finalCta.body}
          </p>
          <Button href={content.finalCta.cta.href} external={content.finalCta.cta.external}>
            {content.finalCta.cta.text}
          </Button>
        </div>
      </section>
    </>
  );
}
