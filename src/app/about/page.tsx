import type { Metadata } from "next";
import { aboutContent } from "@/content/en/about";
import { buildPageMetadata } from "@/lib/metadata";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";

// =============================================================================
// About Page — English (/about) — V5 Editorial Redesign
// =============================================================================
// Structure:
//   1. Hero — portrait dominant (60/40 desktop), pull-quote integrated
//   2. Story block 1 — text left, image right (desktop) / stacked (mobile)
//   3. Story block 2 — image left, text right (desktop) / image then text (mobile)
//   4. Client voice — inline quote, gold accents
//   5. Philosophy — espresso contrast, mic drop
//   6. CTA — ivory, button on desktop, text-only on mobile
// =============================================================================

export const metadata: Metadata = buildPageMetadata(aboutContent.seo, "en", "about");

export default function AboutPage() {
  const content = aboutContent;

  return (
    <>
      {/* ----------------------------------------------------------------- */}
      {/* 1. Hero — Portrait dominant                                      */}
      {/* Desktop: 60/40 split, pull-quote in text column                  */}
      {/* Mobile: full-width portrait, text below                          */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-warm-ivory">
        {/* Desktop layout */}
        <div className="hidden lg:grid grid-cols-[1.3fr_1fr] h-[680px]">
          {/* Portrait — dominant, edge-to-edge */}
          <ImagePlaceholder
            alt={content.hero.imageAlt || "Lu — portrait"}
            width={800}
            height={1000}
            colorIndex={1}
            className="w-full h-full object-cover"
            priority
          />
          {/* Copy — centered vertically */}
          <div className="flex items-center px-12 py-16">
            <ScrollReveal>
              <div>
                <p className="font-body font-semibold text-[12px] tracking-[2.5px] uppercase text-terracotta mb-3">
                  Meet Lu
                </p>
                <div className="w-12 h-[1px] bg-terracotta mb-6" />
                <h1 className="font-heading font-semibold text-[42px] leading-[1.12] text-espresso mb-6">
                  {content.hero.headline}
                </h1>
                <p className="font-body text-[18px] text-warm-grey leading-relaxed mb-7">
                  {content.hero.subheadline}
                </p>
                {content.hero.pullQuote && (
                  <div className="border-l-[3px] border-l-terracotta pl-4">
                    <p className="font-heading italic text-[20px] text-espresso leading-snug">
                      &ldquo;{content.hero.pullQuote}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden">
          <ImagePlaceholder
            alt={content.hero.imageAlt || "Lu — portrait"}
            width={750}
            height={1000}
            colorIndex={1}
            className="w-full"
            priority
          />
          <div className="px-6 py-7">
            <p className="font-body font-semibold text-[11px] tracking-[2px] uppercase text-terracotta mb-2">
              Meet Lu
            </p>
            <h1 className="font-heading font-semibold text-[28px] leading-[1.2] text-espresso mb-3">
              {content.hero.headline}
            </h1>
            <p className="font-body text-[15px] text-warm-grey leading-relaxed">
              {content.hero.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* Mobile-only pull-quote — below hero */}
      {content.hero.pullQuote && (
        <section className="lg:hidden px-6 pb-8">
          <div className="border-l-[3px] border-l-terracotta pl-4">
            <p className="font-heading italic text-[19px] text-espresso leading-snug">
              &ldquo;{content.hero.pullQuote}&rdquo;
            </p>
          </div>
        </section>
      )}

      {/* ----------------------------------------------------------------- */}
      {/* 2. Story Block 1 — Text left, image right                        */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-soft-stone">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-10 md:py-[72px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
            <ScrollReveal>
              <div className="lg:pt-4">
                {content.story.part1.map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-body text-[15px] md:text-[18px] text-warm-grey leading-relaxed mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="border border-champagne p-1.5 bg-warm-ivory">
                <ImagePlaceholder
                  alt={content.story.part1ImageAlt || "Lu at work"}
                  width={600}
                  height={400}
                  colorIndex={1}
                  className="w-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 3. Story Block 2 — Image left, text right                        */}
      {/* Mobile: image then text (natural order)                          */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-warm-ivory">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-10 md:py-[72px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
            <ScrollReveal>
              <div className="border border-champagne p-1.5 bg-warm-ivory">
                <ImagePlaceholder
                  alt={content.story.part2ImageAlt || "Color draping session"}
                  width={600}
                  height={450}
                  colorIndex={1}
                  className="w-full"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div>
                {content.story.part2.map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-body text-[15px] md:text-[18px] text-warm-grey leading-relaxed mb-4 last:mb-0"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 4. Client Voice — Inline, centered, gold accents                 */}
      {/* ----------------------------------------------------------------- */}
      {content.clientVoice && (
        <section className="bg-soft-stone">
          <div className="max-w-[680px] mx-auto px-6 lg:px-10 py-10 md:py-14 text-center">
            <ScrollReveal>
              <div className="w-10 h-[1px] bg-gold mx-auto mb-5 md:mb-6" />
              <p className="font-heading italic text-espresso text-[19px] md:text-[26px] leading-snug mb-4 md:mb-5">
                &ldquo;{content.clientVoice.quote}&rdquo;
              </p>
              {/* Headshot + attribution */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-11 h-11 rounded-full bg-champagne flex items-center justify-center shrink-0">
                  <span className="font-body font-semibold text-[13px] text-warm-taupe">CL</span>
                </div>
                <div className="text-left">
                  <p className="font-body font-semibold text-[14px] text-espresso">
                    C.L.
                  </p>
                  <p className="font-body text-[12px] text-warm-taupe">
                    {content.clientVoice.attribution}
                  </p>
                </div>
              </div>
              <div className="w-10 h-[1px] bg-gold mx-auto mt-5 md:mt-6" />
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ----------------------------------------------------------------- */}
      {/* 5. Philosophy — Espresso contrast, the page's defining moment    */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-espresso">
        <div className="max-w-[680px] mx-auto px-6 lg:px-10 py-10 md:py-20 text-center">
          <ScrollReveal>
            <div className="w-12 h-[1px] bg-gold mx-auto mb-6 md:mb-8" />
            <p className="font-heading font-medium text-warm-ivory text-[19px] md:text-[32px] leading-snug mb-4 md:mb-5">
              {content.philosophy.statement}
            </p>
            <p className="font-heading italic text-warm-ivory/50 text-[17px] md:text-[24px] leading-snug">
              {content.philosophy.closer}
            </p>
            <div className="w-12 h-[1px] bg-gold mx-auto mt-6 md:mt-8" />
          </ScrollReveal>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 6. CTA — Ivory. Desktop gets button. Mobile text-only.           */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-warm-ivory">
        <div className="max-w-[680px] mx-auto px-6 lg:px-10 py-10 md:py-14 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-medium text-espresso text-[22px] md:text-[28px] mb-3">
              {content.cta.heading}
            </h2>
            <p className="font-body text-warm-grey text-[14px] md:text-[17px] leading-relaxed mb-0 md:mb-7">
              {content.cta.body}
            </p>
            {/* Desktop-only button */}
            <div className="hidden md:block">
              <Button href={content.cta.cta.href} external={content.cta.cta.external}>
                {content.cta.cta.text}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
