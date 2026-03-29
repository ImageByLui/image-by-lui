import type { Metadata } from "next";
import { homeContent } from "@/content/en/home";
import { testimonials, testimonialsContextLine } from "@/content/shared/testimonials";
import { buildPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import PersonaCard from "@/components/ui/PersonaCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";

// =============================================================================
// Homepage — English (/) — V6 Final
// =============================================================================
// Structure:
//   1. Hero — image left (desktop) / above (mobile), aspirational serif italic subtitle
//   2. Coco Chanel quote — espresso poster with decorative gold quotes
//   3. Where to Begin — Power Palette invitation + transition + editorial paid tiers
//   4. Image break
//   5. Designed for Professionals — espresso, terracotta bars
//   6. Testimonials — champagne, headshots + @handles
//   7. Meet Lu — image + text
//   8. Final CTA — espresso, button
// =============================================================================

export const metadata: Metadata = buildPageMetadata(homeContent.seo, "en", "home");

export default function HomePage() {
  const c = homeContent;
  const freeCard = c.servicePreview.cards[0];
  const paidCards = c.servicePreview.cards.slice(1);

  return (
    <>
      {/* ----------------------------------------------------------------- */}
      {/* 1. HERO                                                          */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-warm-ivory">
        {/* Desktop: image left, text right */}
        <div className="hidden lg:grid grid-cols-[1.2fr_1fr] h-[680px]">
          <div className="overflow-hidden">
            <ImagePlaceholder
              alt={c.hero.imageAlt}
              width={800}
              height={1000}
              colorIndex={0}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="flex items-center px-12 py-16">
            <ScrollReveal>
              <div>
                <div className="w-12 h-[1px] bg-terracotta mb-6" />
                <h1 className="font-heading font-semibold text-[48px] leading-[1.08] text-espresso mb-5">
                  {c.hero.headline}
                </h1>
                <p className="font-heading italic text-[22px] text-warm-grey leading-snug mb-8">
                  {c.hero.subheadline}
                </p>
                <Button href={c.hero.cta.href} external={c.hero.cta.external}>
                  {c.hero.cta.text}
                </Button>
                <p className="font-body text-[13px] text-warm-taupe mt-3">
                  {c.hero.ctaSubtext}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Mobile: image above, text below */}
        <div className="lg:hidden">
          <ImagePlaceholder
            alt={c.hero.imageAlt}
            width={750}
            height={750}
            colorIndex={0}
            className="w-full"
            priority
          />
          <div className="px-6 py-6">
            <h1 className="font-heading font-semibold text-[30px] leading-[1.15] text-espresso mb-3">
              {c.hero.headline}
            </h1>
            <p className="font-heading italic text-[18px] text-warm-grey leading-snug mb-5">
              {c.hero.subheadline}
            </p>
            <Button
              href={c.hero.cta.href}
              external={c.hero.cta.external}
              className="w-full"
            >
              {c.hero.cta.text}
            </Button>
            <p className="font-body text-[12px] text-warm-taupe text-center mt-2">
              {c.hero.ctaSubtext}
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 2. QUOTE — Espresso poster with decorative gold quotes            */}
      {/* ----------------------------------------------------------------- */}
      {c.quote && (
        <section className="bg-espresso relative overflow-hidden py-9 md:py-14">
          <span
            className="font-heading absolute top-2 left-3 md:left-10 text-[120px] md:text-[180px] text-gold/[0.10] leading-none select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <span
            className="font-heading absolute -bottom-6 right-3 md:right-10 text-[120px] md:text-[180px] text-gold/[0.10] leading-none select-none"
            aria-hidden="true"
          >
            &rdquo;
          </span>
          <div className="max-w-[720px] mx-auto px-6 md:px-10 text-center relative z-10">
            <p className="font-heading italic text-warm-ivory text-[20px] md:text-[26px] leading-snug">
              {c.quote.text}
            </p>
            <div className="w-8 h-[1px] bg-gold mx-auto my-4 md:my-5" />
            <p className="font-body font-semibold text-[11px] md:text-[13px] tracking-[1.5px] uppercase text-warm-ivory/35">
              {c.quote.attribution}
            </p>
          </div>
        </section>
      )}

      {/* ----------------------------------------------------------------- */}
      {/* 3. WHERE TO BEGIN                                                 */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-warm-ivory pt-10 md:pt-[72px]">
        <div className="max-w-[960px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <h2 className="font-heading font-medium text-[22px] md:text-[28px] text-espresso text-center mb-2">
              Where to Begin
            </h2>
            <p className="font-body text-[15px] md:text-[16px] text-warm-taupe text-center mb-8 md:mb-12">
              Three levels of transformation — start with a complimentary session
            </p>
          </ScrollReveal>

          {/* Power Palette — invitation card */}
          <ScrollReveal>
            <div className="bg-warm-ivory border border-champagne overflow-hidden md:grid md:grid-cols-2 mb-8 md:mb-10">
              <div className="p-1.5 md:p-0 md:min-h-[300px]">
                <ImagePlaceholder
                  alt="Color draping session"
                  width={800}
                  height={600}
                  colorIndex={1}
                  className="w-full md:h-full md:object-cover"
                />
              </div>
              <div className="px-5 pb-5 pt-3 md:px-10 md:py-9 flex flex-col justify-center">
                <span className="font-body font-semibold text-[11px] md:text-[13px] tracking-[2px] uppercase text-terracotta mb-2">
                  Start here — complimentary
                </span>
                <h3 className="font-heading font-medium text-[22px] md:text-[28px] text-espresso mb-3">
                  {freeCard.name}
                </h3>
                <p className="font-body text-warm-grey text-[15px] md:text-[16px] leading-relaxed mb-5">
                  {freeCard.description}
                </p>
                <div>
                  <Button
                    href={freeCard.cta.href}
                    external={freeCard.cta.external}
                    className="w-full md:w-auto"
                  >
                    {freeCard.cta.text}
                  </Button>
                </div>
                <p className="font-body text-[12px] text-warm-taupe mt-2 text-center md:text-left">
                  No commitment required
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Transition */}
          <div className="text-center mb-8 md:mb-10 py-2">
            <div className="w-16 h-[1px] bg-champagne mx-auto mb-3" />
            <p className="font-heading italic text-[18px] md:text-[18px] text-espresso/50">
              When you&rsquo;re ready for more
            </p>
            <div className="w-16 h-[1px] bg-champagne mx-auto mt-3" />
          </div>

          {/* First Impression — editorial layout */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start mb-10 md:mb-12 pb-10 md:pb-12 border-b border-b-soft-stone">
              <div>
                {/* Mobile: inline price. Desktop: stacked */}
                <div className="flex items-baseline justify-between lg:block">
                  <h3 className="font-heading font-medium text-[20px] lg:text-[26px] text-espresso">
                    {paidCards[0].name}
                  </h3>
                  <p className="font-body font-semibold text-[15px] lg:text-[18px] text-terracotta lg:mt-1">
                    {paidCards[0].price}
                  </p>
                </div>
                <div className="w-8 h-[1px] bg-terracotta my-3 lg:my-4" />
                {paidCards[0].positioningLine && (
                  <p className="font-heading italic text-[14px] lg:text-[17px] text-warm-taupe mb-2 lg:mb-3">
                    {paidCards[0].positioningLine}
                  </p>
                )}
                <p className="font-body text-[15px] lg:text-[16px] text-warm-grey leading-relaxed mb-3">
                  {paidCards[0].outcomeText && (
                    <strong className="text-espresso">{paidCards[0].outcomeText} </strong>
                  )}
                  {paidCards[0].description}
                </p>
                {paidCards[0].detailsLine && (
                  <p className="font-body text-[13px] text-warm-taupe mb-4">
                    {paidCards[0].detailsLine}
                  </p>
                )}
                <Link
                  href={paidCards[0].cta.href || "#"}
                  className="font-body font-semibold text-terracotta text-[14px] lg:text-[15px] tracking-[0.5px] no-underline hover:underline"
                >
                  {paidCards[0].cta.text} →
                </Link>
              </div>
              {/* Desktop-only image */}
              <div className="hidden lg:block border border-champagne p-1.5 bg-warm-ivory">
                <ImagePlaceholder
                  alt="Style diagnostic session"
                  width={600}
                  height={450}
                  colorIndex={1}
                  className="w-full"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Identity Transformation — flagship, image first on desktop */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start pb-10 md:pb-[72px]">
              {/* Desktop-only image — gold frame */}
              <div className="hidden lg:block border border-gold/40 p-1.5 bg-warm-ivory">
                <ImagePlaceholder
                  alt="Complete transformation"
                  width={600}
                  height={450}
                  colorIndex={1}
                  className="w-full"
                />
              </div>
              <div>
                {/* Mobile: gold top border */}
                <div className="border-t-[3px] border-t-gold pt-5 lg:border-t-0 lg:pt-0">
                  <span className="font-body font-semibold text-[10px] tracking-[1.5px] uppercase text-gold mb-2 block">
                    Most Comprehensive
                  </span>
                  <div className="flex items-baseline justify-between lg:block">
                    <h3 className="font-heading font-medium text-[20px] lg:text-[26px] text-espresso">
                      {paidCards[1].name}
                    </h3>
                    <p className="font-body font-semibold text-[15px] lg:text-[18px] text-terracotta lg:mt-1">
                      {paidCards[1].price}
                    </p>
                  </div>
                  <div className="w-8 h-[1px] bg-gold my-3 lg:my-4" />
                  {paidCards[1].positioningLine && (
                    <p className="font-heading italic text-[14px] lg:text-[17px] text-warm-taupe mb-2 lg:mb-3">
                      {paidCards[1].positioningLine}
                    </p>
                  )}
                  <p className="font-body text-[15px] lg:text-[16px] text-warm-grey leading-relaxed mb-3">
                    {paidCards[1].outcomeText && (
                      <strong className="text-espresso">{paidCards[1].outcomeText} </strong>
                    )}
                    {paidCards[1].description}
                  </p>
                  {paidCards[1].detailsLine && (
                    <div className="bg-champagne px-3 py-2 inline-block mb-4">
                      <p className="font-body font-semibold text-[12px] lg:text-[13px] text-espresso">
                        {paidCards[1].detailsLine}
                      </p>
                    </div>
                  )}
                  <div className="block">
                    <Link
                      href={paidCards[1].cta.href || "#"}
                      className="font-body font-semibold text-terracotta text-[14px] lg:text-[15px] tracking-[0.5px] no-underline hover:underline"
                    >
                      {paidCards[1].cta.text} →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 4. IMAGE BREAK                                                    */}
      {/* ----------------------------------------------------------------- */}
      <ImagePlaceholder
        alt="Color draping in action"
        width={1200}
        height={400}
        colorIndex={1}
        className="w-full"
      />

      {/* ----------------------------------------------------------------- */}
      {/* 5. DESIGNED FOR PROFESSIONALS — Espresso                          */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-espresso">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 md:py-16">
          <ScrollReveal>
            <h2 className="font-heading font-medium text-[22px] md:text-[28px] text-warm-ivory text-center mb-1 md:mb-2">
              {c.whoIsThisFor.sectionHeading}
            </h2>
            <div className="w-8 h-[1px] bg-gold mx-auto mb-5 md:mb-9" />
          </ScrollReveal>

          {/* Desktop: 2x2 grid */}
          <div className="hidden md:grid grid-cols-2 gap-6 max-w-[900px] mx-auto">
            {c.whoIsThisFor.cards.map((card, i) => (
              <ScrollReveal key={card.headline} delay={i * 100}>
                <div className="pl-5 border-l-[3px] border-l-terracotta py-2">
                  <p className="font-body font-semibold text-[18px] text-warm-ivory mb-2">
                    {card.headline}
                  </p>
                  <p className="font-body text-[15px] text-warm-ivory/55 leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile: stacked */}
          <div className="md:hidden flex flex-col">
            {c.whoIsThisFor.cards.map((card, i) => (
              <div
                key={card.headline}
                className={`flex items-start gap-3 py-3.5 ${
                  i < c.whoIsThisFor.cards.length - 1
                    ? "border-b border-b-warm-ivory/10"
                    : ""
                }`}
              >
                <div className="w-[3px] min-h-full bg-terracotta shrink-0 mt-1 self-stretch" />
                <div>
                  <p className="font-body font-semibold text-[17px] text-warm-ivory mb-1">
                    {card.headline}
                  </p>
                  <p className="font-body text-[14px] text-warm-ivory/55 leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 6. TESTIMONIALS — Champagne, headshots + @handles                 */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-champagne">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 md:py-16">
          <ScrollReveal>
            <h2 className="font-heading font-medium text-[22px] md:text-[28px] text-espresso text-center mb-1">
              {c.socialProof.heading}
            </h2>
            <p className="text-center font-heading italic text-warm-taupe text-[13px] md:text-[14px] mb-4 md:mb-8">
              {testimonialsContextLine.en}
            </p>
          </ScrollReveal>

          {/* Desktop: 3-column */}
          <div className="hidden md:grid grid-cols-3 gap-5 max-w-[960px] mx-auto">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <TestimonialCard
                  quote={t.quote.en}
                  attribution={t.attribution.en}
                  initials={t.initials}
                  social={t.social}
                />
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile: stacked */}
          <div className="md:hidden flex flex-col gap-3">
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={i}
                quote={t.quote.en}
                attribution={t.attribution.en}
                initials={t.initials}
                social={t.social}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 7. MEET LU                                                        */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-warm-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-start max-w-[960px] mx-auto">
            <ScrollReveal>
              <ImagePlaceholder
                alt="Lu — Image Consultant"
                width={1200}
                height={900}
                colorIndex={1}
                className="w-full"
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 className="font-heading font-medium text-[22px] md:text-[28px] text-espresso mb-3 md:mb-4">
                {c.aboutPreview.heading}
              </h2>
              <p className="font-body text-warm-grey leading-relaxed text-[16px] md:text-[17px] mb-5">
                {c.aboutPreview.body}
              </p>
              <div className="flex items-center gap-10">
                <Link
                  href={c.aboutPreview.link.href}
                  className="font-body font-semibold text-terracotta text-[14px] md:text-[15px] tracking-[0.5px] no-underline hover:underline"
                >
                  {c.aboutPreview.link.text} →
                </Link>
                {c.aboutPreview.instagramLink && (
                  <a
                    href={c.aboutPreview.instagramLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body font-semibold text-terracotta text-[14px] md:text-[15px] tracking-[0.5px] no-underline hover:underline"
                  >
                    {c.aboutPreview.instagramLink.text} →
                  </a>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 8. FINAL CTA                                                      */}
      {/* ----------------------------------------------------------------- */}
      <section className="hidden md:block bg-espresso">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-16 text-center">
          <ScrollReveal>
            <div className="w-8 h-[1px] bg-gold mx-auto mb-6" />
            <h2 className="text-warm-ivory font-heading font-medium text-[28px] mb-3">
              {c.finalCta.heading}
            </h2>
            <p className="text-warm-ivory/70 leading-relaxed text-[17px] mb-8">
              {c.finalCta.body}
            </p>
            {c.finalCta.cta && (
              <Button href={c.finalCta.cta.href} external={c.finalCta.cta.external}>
                {c.finalCta.cta.text}
              </Button>
            )}
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
