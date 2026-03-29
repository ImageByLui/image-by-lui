import type { Metadata } from "next";
import { homeContent } from "@/content/en/home";
import { testimonials, testimonialsContextLine } from "@/content/shared/testimonials";
import { buildPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import PersonaCard from "@/components/ui/PersonaCard";
import ProcessSteps from "@/components/ui/ProcessSteps";
import TransformationCard from "@/components/ui/TransformationCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";

// =============================================================================
// Homepage — English (/) — V3 Redesign
// =============================================================================
// Structure (8 sections):
//   1. Hero (warm ivory)
//   2. Who Is This For (soft stone)
//   3. How It Works (warm ivory)
//   4. Where to Begin — tiered journey (soft stone)
//   5. Transformations (warm ivory)
//   6. Testimonials (champagne)
//   7. Meet Lu + Instagram (warm ivory)
//   8. Final CTA — text only (espresso)
// =============================================================================

export const metadata: Metadata = buildPageMetadata(homeContent.seo, "en", "home");

export default function HomePage() {
  const content = homeContent;
  const freeCard = content.servicePreview.cards[0];
  const paidCards = content.servicePreview.cards.slice(1);

  return (
    <>
      {/* ----------------------------------------------------------------- */}
      {/* 1. Hero — Warm Ivory                                             */}
      {/* Mobile: image first (trust), then headline + CTA above fold      */}
      {/* Desktop: text left, image right                                  */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-warm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-24">
          {/* Mobile-only hero image — shown above headline */}
          <div className="md:hidden mb-4">
            <ImagePlaceholder
              alt={content.hero.imageAlt}
              width={1920}
              height={1080}
              colorIndex={0}
              className="w-full"
              priority
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <ScrollReveal>
              <h1 className="text-page-title mb-4 md:mb-6">{content.hero.headline}</h1>
              <p className="text-warm-grey leading-relaxed text-[14px] md:text-[18px] mb-4">
                {content.hero.subheadline}
              </p>
              {content.hero.trustLine && (
                <p className="font-body font-semibold text-warm-taupe text-[11px] md:text-[14px] uppercase tracking-[1.5px] mb-5 md:mb-6">
                  {content.hero.trustLine}
                </p>
              )}
              <Button
                href={content.hero.cta.href}
                external={content.hero.cta.external}
                className="w-full md:w-auto"
              >
                {content.hero.cta.text}
              </Button>
              <p className="text-caption mt-2 text-center md:text-left">{content.hero.ctaSubtext}</p>
            </ScrollReveal>

            {/* Desktop-only hero image */}
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

      {/* ----------------------------------------------------------------- */}
      {/* 2. Who Is This For? — Soft Stone                                 */}
      {/* Mobile: vertical stack. Desktop: 2x2 grid.                       */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-soft-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <ScrollReveal>
            <SectionHeading>{content.whoIsThisFor.sectionHeading}</SectionHeading>
          </ScrollReveal>

          {/* Desktop: 2x2 grid */}
          <div className="hidden md:grid grid-cols-2 gap-4 max-w-4xl mx-auto">
            {content.whoIsThisFor.cards.map((card, i) => (
              <ScrollReveal key={card.headline} delay={i * 100}>
                <PersonaCard headline={card.headline} body={card.body} />
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile: vertical stack — no carousel */}
          <div className="md:hidden flex flex-col gap-3">
            {content.whoIsThisFor.cards.map((card) => (
              <PersonaCard
                key={card.headline}
                headline={card.headline}
                body={card.body}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 3. How It Works — Warm Ivory                                     */}
      {/* ProcessSteps handles its own mobile/desktop layout                */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-warm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <ScrollReveal>
            <ProcessSteps
              heading={content.howItWorks.sectionHeading}
              steps={content.howItWorks.steps}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 4. Where to Begin — Soft Stone — Tiered Journey                  */}
      {/* Free: horizontal banner (desktop) / full card (mobile)           */}
      {/* Paid: side-by-side (desktop) / stacked (mobile)                  */}
      {/* Badge alignment: min-height reserve on both cards                */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-soft-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <ScrollReveal>
            <SectionHeading>{content.servicePreview.heading}</SectionHeading>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            {/* Free session banner */}
            <ScrollReveal>
              <div className="bg-champagne p-4 md:p-5 mb-2 md:flex md:items-center md:justify-between md:gap-6">
                <div>
                  <span className="font-body font-semibold text-[10px] md:text-[11px] tracking-[1.5px] uppercase text-terracotta">
                    Start here — complimentary
                  </span>
                  <p className="font-heading font-medium text-[18px] md:text-[20px] text-espresso mt-1 mb-1">
                    {freeCard.name}
                  </p>
                  <p className="text-warm-grey text-[13px] md:text-[14px] leading-relaxed">
                    {freeCard.description}
                  </p>
                </div>
                {/* Mobile: full-width button. Desktop: inline button */}
                <div className="mt-3 md:mt-0 md:shrink-0">
                  <Button
                    href={freeCard.cta.href}
                    external={freeCard.cta.external}
                    className="w-full md:w-auto text-[12px]"
                  >
                    {freeCard.cta.text}
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            {/* Paid tiers — side-by-side desktop, stacked mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {paidCards.map((card, i) => (
                <ScrollReveal key={card.name} delay={i * 100}>
                  <div
                    className={`bg-white p-5 md:p-6 flex flex-col h-full ${
                      i === 1 ? "border-t-[3px] border-t-gold" : ""
                    }`}
                  >
                    {/* Badge area — reserved height for alignment */}
                    <div className="min-h-[20px] mb-1">
                      {i === 1 && (
                        <span className="font-body font-semibold text-[10px] tracking-[1.5px] uppercase text-warm-taupe">
                          Most Comprehensive
                        </span>
                      )}
                    </div>

                    {/* Name + price on same line on mobile, stacked on desktop */}
                    <div className="flex items-baseline justify-between gap-3 md:block">
                      <h3 className="font-heading font-medium text-[19px] md:text-[22px] text-espresso">
                        {card.name}
                      </h3>
                      <span className="font-body font-semibold text-[17px] md:text-[20px] text-espresso md:mt-1 md:block whitespace-nowrap">
                        {card.price}
                      </span>
                    </div>

                    {/* Terracotta / gold divider */}
                    <div
                      className={`w-8 h-[1px] my-3 ${
                        i === 1 ? "bg-gold" : "bg-terracotta"
                      }`}
                    />

                    {/* Positioning line */}
                    {card.positioningLine && (
                      <p className="font-heading italic text-warm-taupe text-[14px] md:text-[16px] mb-2">
                        {card.positioningLine}
                      </p>
                    )}

                    {/* Outcome-led description */}
                    <p className="text-warm-grey text-[13px] md:text-[14px] leading-relaxed mb-3 flex-1">
                      {card.outcomeText && (
                        <strong className="text-espresso">{card.outcomeText} </strong>
                      )}
                      {card.description}
                    </p>

                    {/* Value callout for signature tier */}
                    {card.detailsLine && i === 1 && (
                      <div className="bg-champagne p-2 mb-3">
                        <p className="font-body font-semibold text-espresso text-[11px] md:text-[12px] text-center">
                          {card.detailsLine}
                        </p>
                      </div>
                    )}

                    {/* Details line for starter tier */}
                    {card.detailsLine && i === 0 && (
                      <p className="text-warm-taupe text-[11px] md:text-[12px] mb-3">
                        {card.detailsLine}
                      </p>
                    )}

                    {/* CTA — text link on mobile, full button on desktop */}
                    <div className="mt-auto">
                      {/* Mobile: text link */}
                      <div className="md:hidden">
                        <Link
                          href={card.cta.href || "#"}
                          className="font-body font-semibold text-terracotta text-[13px] tracking-[0.5px] no-underline hover:underline"
                        >
                          {card.cta.text} →
                        </Link>
                      </div>
                      {/* Desktop: full button */}
                      <div className="hidden md:block">
                        <Button
                          href={card.cta.href}
                          external={card.cta.external}
                          className="w-full text-[12px]"
                        >
                          {card.cta.text}
                        </Button>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 5. Transformations — Warm Ivory                                  */}
      {/* Mobile: vertical stack. Desktop: 3 columns.                      */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-warm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <ScrollReveal>
            <SectionHeading subtitle={content.transformations.sectionSubheading}>
              {content.transformations.sectionHeading}
            </SectionHeading>
          </ScrollReveal>

          {/* Desktop: 3 columns */}
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

          {/* Mobile: vertical stack */}
          <div className="md:hidden flex flex-col gap-3">
            {content.transformations.cards.map((card) => (
              <TransformationCard
                key={card.caption}
                beforeImage={card.beforeImage}
                afterImage={card.afterImage}
                caption={card.caption}
              />
            ))}
          </div>
        </div>
      </section>

      <hr className="lui-divider" />

      {/* ----------------------------------------------------------------- */}
      {/* 6. Testimonials — Champagne                                      */}
      {/* Mobile: vertical stack. Desktop: 3 columns.                      */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <ScrollReveal>
            <SectionHeading>{content.socialProof.heading}</SectionHeading>
            <p className="text-center font-heading italic text-warm-taupe text-[13px] md:text-[14px] mb-6 md:mb-8 -mt-4">
              {testimonialsContextLine.en}
            </p>
          </ScrollReveal>

          {/* Desktop: 3 columns */}
          <div className="hidden md:grid grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <TestimonialCard
                  quote={t.quote.en}
                  attribution={t.attribution.en}
                />
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile: vertical stack */}
          <div className="md:hidden flex flex-col gap-3">
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={i}
                quote={t.quote.en}
                attribution={t.attribution.en}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 7. Meet Lu + Instagram — Warm Ivory                              */}
      {/* Mobile: image top, text below, links side-by-side                */}
      {/* Desktop: image left, text right                                  */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-warm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-5xl mx-auto">
            <ScrollReveal>
              <ImagePlaceholder
                alt="Lu — Image Consultant"
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
              <p className="text-warm-grey leading-relaxed text-[14px] md:text-[15px] mb-4">
                {content.aboutPreview.body}
              </p>
              <div className="flex items-center justify-between md:justify-start md:gap-6">
                <Link
                  href={content.aboutPreview.link.href}
                  className="font-body font-semibold text-terracotta text-[13px] tracking-[0.5px] no-underline hover:underline"
                >
                  {content.aboutPreview.link.text} →
                </Link>
                {content.aboutPreview.instagramLink && (
                  <a
                    href={content.aboutPreview.instagramLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body font-semibold text-terracotta text-[13px] tracking-[0.5px] no-underline hover:underline"
                  >
                    {content.aboutPreview.instagramLink.text} →
                  </a>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 8. Final CTA — Espresso — Text only, no button                   */}
      {/* The sticky bar (mobile) and footer CTA handle conversion         */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-espresso">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
          <ScrollReveal>
            <h2 className="text-warm-ivory mb-3 md:mb-4">{content.finalCta.heading}</h2>
            <p className="text-warm-ivory/60 leading-relaxed text-[13px] md:text-[15px]">
              {content.finalCta.body}
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
