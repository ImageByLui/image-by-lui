import type { Metadata } from "next";
import { aboutContent } from "@/content/en/about";
import { buildPageMetadata } from "@/lib/metadata";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";

// =============================================================================
// About Page — English (/about)
// =============================================================================

export const metadata: Metadata = buildPageMetadata(aboutContent.seo, "en", "about");

export default function AboutPage() {
  const content = aboutContent;

  return (
    <>
      {/* 1. Hero */}
      <section className="bg-warm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h1 className="text-page-title mb-6">{content.hero.headline}</h1>
              <p className="text-warm-grey leading-relaxed text-[16px] md:text-[18px]">
                {content.hero.subheadline}
              </p>
            </div>
            <ImagePlaceholder
              alt="Lu — Image Consultant and founder of Image by LUI"
              width={1200}
              height={800}
              colorIndex={1}
              className="w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. Origin Story */}
      <section className="bg-soft-stone">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="space-y-6">
            {content.originStory.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-warm-grey leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Credentials */}
      <section className="bg-warm-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <SectionHeading>{content.credentials.heading}</SectionHeading>
          <ul className="space-y-3 max-w-xl mx-auto">
            {content.credentials.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-warm-grey">
                <span className="text-gold mt-1.5 shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                    <circle cx="7" cy="7" r="3" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Philosophy */}
      <section className="bg-soft-stone">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <SectionHeading>{content.philosophy.heading}</SectionHeading>
          <p className="text-warm-grey leading-relaxed text-center">
            {content.philosophy.body}
          </p>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="bg-espresso">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2 className="text-warm-ivory mb-4">{content.cta.heading}</h2>
          <p className="text-warm-ivory/80 leading-relaxed mb-8">
            {content.cta.body}
          </p>
          <Button href={content.cta.cta.href} external={content.cta.cta.external}>
            {content.cta.cta.text}
          </Button>
        </div>
      </section>
    </>
  );
}
