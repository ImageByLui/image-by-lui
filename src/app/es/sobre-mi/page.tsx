import type { Metadata } from "next";
import Image from "next/image";
import { aboutContentEs } from "@/content/es/sobre-mi";
import { buildPageMetadata } from "@/lib/metadata";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";

// =============================================================================
// About Page — Spanish (/es/sobre-mi) — V7 Final
// =============================================================================

export const metadata: Metadata = buildPageMetadata(aboutContentEs.seo, "es", "about");

export default function AboutPageEs() {
  const c = aboutContentEs;

  return (
    <>
      {/* 1. HERO */}
      <section className="bg-warm-ivory">
        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-[1.5fr_1fr] h-[680px]">
          <div className="relative h-full overflow-hidden">
            <Image
              src="/images/about-hero.jpg"
              alt="Lu, consultora de imagen bilingüe en Miami, en un evento profesional"
              fill
              className="object-cover"
              style={{ objectPosition: "32% 47%" }}
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </div>
          <div className="flex items-center px-12 py-16">
            <ScrollReveal>
              <div>
                <p className="font-body font-semibold text-[12px] tracking-[2.5px] uppercase text-terracotta mb-3">
                  Conoce a Lu
                </p>
                <div className="w-12 h-[1px] bg-terracotta mb-6" />
                <h1 className="font-heading font-semibold text-[42px] leading-[1.12] text-espresso mb-6">
                  {c.hero.headline}
                </h1>
                <p className="font-body text-[18px] text-warm-grey leading-relaxed">
                  {c.hero.subheadline}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <div className="relative h-[500px] overflow-hidden">
            <Image
              src="/images/about-hero.jpg"
              alt="Lu, consultora de imagen bilingüe en Miami, en un evento profesional"
              fill
              className="object-cover"
              style={{ objectPosition: "35% 80%" }}
              sizes="100vw"
              priority
            />
          </div>
          <div className="px-6 py-7">
            <p className="font-body font-semibold text-[11px] tracking-[2px] uppercase text-terracotta mb-2">
              Conoce a Lu
            </p>
            <h1 className="font-heading font-semibold text-[26px] leading-[1.2] text-espresso mb-3">
              {c.hero.headline}
            </h1>
            <p className="font-body text-[17px] text-espresso/70 leading-relaxed">
              {c.hero.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* 2. PULL QUOTE */}
      <section className="bg-espresso relative overflow-hidden py-10 md:py-16">
        <span
          className="font-heading absolute top-2 left-4 md:left-10 text-[120px] md:text-[200px] text-gold/[0.12] leading-none select-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <span
          className="font-heading absolute -bottom-5 right-4 md:right-10 text-[120px] md:text-[200px] text-gold/[0.12] leading-none select-none"
          aria-hidden="true"
        >
          &rdquo;
        </span>
        <div className="max-w-[680px] mx-auto px-7 md:px-10 text-center relative z-10">
          <p className="font-heading italic text-warm-ivory text-[21px] md:text-[26px] leading-snug">
            {c.pullQuote}
          </p>
          <div className="w-8 h-[1px] bg-gold mx-auto mt-4 md:mt-5" />
        </div>
      </section>

      {/* 3. ORIGIN */}
      <section className="bg-soft-stone">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-7 md:py-[72px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
            <ScrollReveal>
              <div className="lg:pt-1">
                {c.origin.intro.map((p, i) => (
                  <p
                    key={i}
                    className="font-body text-[17px] md:text-[18px] text-espresso/80 leading-relaxed mb-4"
                  >
                    {p}
                  </p>
                ))}

                <div className="flex flex-col mt-2 mb-4">
                  {c.origin.disciplines.map((d, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 py-3 ${
                        i < c.origin.disciplines.length - 1
                          ? "border-b border-b-champagne"
                          : ""
                      }`}
                    >
                      <div className="w-[3px] h-5 bg-terracotta shrink-0" />
                      <span className="font-body font-semibold text-[16px] md:text-[16px] text-espresso">
                        {d}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="font-body text-[16px] md:text-[15px] text-espresso/60 leading-relaxed">
                  {c.origin.closing}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="hidden lg:block border border-champagne p-1.5 bg-warm-ivory">
                <ImagePlaceholder
                  src="/images/about-story-bw-blazer.jpg"
                  alt="Retrato editorial en blanco y negro de Lu con blazer profesional"
                  width={600}
                  height={800}
                  colorIndex={1}
                  className="w-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. SESSION IMAGE */}
      <ImagePlaceholder
        src="/images/about-story-bw-blazer.jpg"
        alt="Retrato editorial en blanco y negro de Lu con blazer profesional"
        width={1200}
        height={400}
        colorIndex={1}
        className="w-full lg:hidden"
        fill
        objectPosition="center 15%"
      />

      {/* 5. CLIENT VOICE */}
      <section className="bg-champagne relative overflow-hidden">
        <span
          className="font-heading absolute top-2 left-4 md:left-16 text-[80px] md:text-[160px] text-gold/[0.15] leading-none select-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        <div className="relative z-10 max-w-[780px] mx-auto px-6 lg:px-10 py-7 md:py-14">
          <div className="hidden md:block">
            <p className="font-heading italic text-[24px] text-espresso leading-snug mb-6">
              &ldquo;{c.clientVoice.quote}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-warm-ivory flex items-center justify-center border-2 border-gold/30 shrink-0">
                <span className="font-body font-semibold text-[18px] text-warm-taupe">
                  {c.clientVoice.initials}
                </span>
              </div>
              <div>
                <p className="font-body font-semibold text-[15px] text-espresso">
                  {c.clientVoice.name}
                </p>
                <p className="font-body text-[13px] text-warm-grey">
                  {c.clientVoice.title}
                </p>
                {c.clientVoice.instagram && (
                  <p className="font-body text-[13px] text-terracotta">
                    {c.clientVoice.instagram}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <div className="border-l-[3px] border-l-gold pl-4">
              <p className="font-body text-[17px] italic text-espresso leading-relaxed mb-4">
                &ldquo;{c.clientVoice.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-warm-ivory flex items-center justify-center shrink-0">
                  <span className="font-body font-semibold text-[12px] text-warm-taupe">
                    {c.clientVoice.initials}
                  </span>
                </div>
                <div>
                  <p className="font-body font-semibold text-[13px] text-espresso">
                    {c.clientVoice.name}
                  </p>
                  <p className="font-body text-[11px] text-warm-taupe">
                    {c.clientVoice.title}
                  </p>
                  {c.clientVoice.instagram && (
                    <p className="font-body text-[11px] text-terracotta">
                      {c.clientVoice.instagram}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMAGE STRIP */}
      {c.imageStrip && (
        <div className="grid grid-cols-2 gap-[2px] md:gap-[3px]">
          <ImagePlaceholder
            alt={c.imageStrip.leftAlt}
            width={600}
            height={600}
            colorIndex={1}
            className="w-full aspect-square md:aspect-[3/1]"
          />
          <ImagePlaceholder
            alt={c.imageStrip.rightAlt}
            width={600}
            height={600}
            colorIndex={1}
            className="w-full aspect-square md:aspect-[3/1]"
          />
        </div>
      )}

      {/* 7. PHILOSOPHY */}
      <section className="bg-espresso">
        <div className="max-w-[680px] mx-auto px-6 lg:px-10 pt-9 pb-6 md:py-20 text-center">
          <ScrollReveal>
            <div className="w-12 h-[1px] bg-gold mx-auto mb-5 md:mb-8" />
            <p className="font-body font-semibold text-warm-ivory text-[19px] md:text-[28px] leading-snug mb-3 md:mb-4">
              {c.philosophy.statement}
            </p>
            <p className="font-body italic text-warm-ivory/50 text-[17px] md:text-[22px] leading-snug">
              {c.philosophy.closer}
            </p>
            <div className="w-12 h-[1px] bg-gold mx-auto mt-3 md:mt-8" />
          </ScrollReveal>
        </div>
      </section>

      {/* 8. CTA — Desktop only */}
      <section className="hidden md:block bg-warm-ivory">
        <div className="max-w-[680px] mx-auto px-6 lg:px-10 py-14 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-medium text-espresso text-[28px] mb-3">
              {c.cta.heading}
            </h2>
            <p className="font-body text-warm-grey text-[17px] leading-relaxed mb-7">
              {c.cta.body}
            </p>
            <Button href={c.cta.cta.href} external={c.cta.cta.external}>
              {c.cta.cta.text}
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
