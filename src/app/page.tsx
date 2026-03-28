import type { Metadata } from "next";
import { homeContent } from "@/content/en/home";
import { testimonials } from "@/content/shared/testimonials";
import { buildPageMetadata } from "@/lib/metadata";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";
import InstagramFeed from "@/components/features/InstagramFeed";

// =============================================================================
// Homepage — English (/)
// =============================================================================

export const metadata: Metadata = buildPageMetadata(homeContent.seo, "en", "home");

export default function HomePage() {
  const content = homeContent;

  return (
    <>
      {/* ----------------------------------------------------------------- */}
      {/* 1. Hero */}
      {/* ----------------------------------------------------------------- */}
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

      {/* ----------------------------------------------------------------- */}
      {/* 2. Methodology Snapshot */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-soft-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <SectionHeading>{content.methodology.heading}</SectionHeading>
          <p className="text-center max-w-3xl mx-auto text-warm-grey leading-relaxed mb-10">
            {content.methodology.body}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {content.methodology.items.map((item) => (
              <div key={item.title} className="text-center">
                {/* Decorative gold accent */}
                <div className="w-10 h-[2px] bg-gold mx-auto mb-4" />
                <h3 className="mb-3">{item.title}</h3>
                <p className="text-warm-grey leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 font-heading font-medium text-espresso text-[18px] md:text-[20px]">
            {content.methodology.closingLine}
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 3. Service Preview */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-warm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <SectionHeading>{content.servicePreview.heading}</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.servicePreview.cards.map((card, i) => (
              <ServiceCard
                key={card.name}
                name={card.name}
                price={card.price}
                description={card.description}
                ctaText={card.cta.text}
                ctaHref={card.cta.href}
                ctaExternal={card.cta.external}
                featured={i === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 4. Social Proof */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <SectionHeading>{content.socialProof.heading}</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
      {/* 5. About Preview */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-warm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ImagePlaceholder
              alt="Lu — Image Consultant"
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

      {/* ----------------------------------------------------------------- */}
      {/* 6. Instagram Feed */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-soft-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <InstagramFeed
            heading={content.instagramFeed.heading}
            subtext={content.instagramFeed.subtext}
            lang="en"
          />
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 7. Final CTA */}
      {/* ----------------------------------------------------------------- */}
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
