import type { Metadata } from "next";
import { servicesContent } from "@/content/en/services";
import { getFaqByLanguage } from "@/content/shared/faq";
import { buildPageMetadata } from "@/lib/metadata";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqAccordion from "@/components/ui/FaqAccordion";
import ProcessSteps from "@/components/ui/ProcessSteps";
import ScrollReveal from "@/components/ui/ScrollReveal";

// =============================================================================
// Services Page — English (/services)
// =============================================================================

export const metadata: Metadata = buildPageMetadata(servicesContent.seo, "en", "services");

export default function ServicesPage() {
  const content = servicesContent;
  const faqItems = getFaqByLanguage("en");

  return (
    <>
      {/* 1. Hero */}
      <section className="bg-warm-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <ScrollReveal>
            <h1 className="text-page-title mb-6">{content.hero.headline}</h1>
            <p className="text-warm-grey leading-relaxed text-[16px] md:text-[18px]">
              {content.hero.subheadline}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <hr className="lui-divider" />

      {/* 2–4. Service Tiers */}
      {content.tiers.map((tier, index) => (
        <section
          key={tier.anchor}
          id={tier.anchor}
          className={index % 2 === 0 ? "bg-warm-ivory" : "bg-soft-stone"}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            {/* Label */}
            {tier.label && (
              <span className="block text-center font-body font-semibold text-[11px] tracking-[1.5px] uppercase text-terracotta mb-3">
                {tier.label}
              </span>
            )}

            {/* Name + Price */}
            <h2 className="text-center font-heading font-medium text-[32px] md:text-[36px] text-espresso mb-2">
              {tier.name}
            </h2>
            <p className="text-center font-body font-semibold text-espresso text-[20px] mb-2">
              {tier.price}
            </p>

            {/* Positioning line */}
            {tier.positioningLine && (
              <p className="text-center font-heading italic text-warm-taupe text-[18px] md:text-[20px] mb-8">
                {tier.positioningLine}
              </p>
            )}

            {/* Description */}
            <p className="text-warm-grey leading-relaxed max-w-3xl mx-auto mb-8">
              {tier.description}
            </p>

            {/* Value callout (Signature tier) */}
            {tier.valueCallout && (
              <div className="bg-champagne p-4 max-w-3xl mx-auto mb-8">
                <p className="font-body font-semibold text-espresso text-[15px] text-center">
                  {tier.valueCallout}
                </p>
              </div>
            )}

            {/* Inclusions */}
            <div className="max-w-2xl mx-auto mb-8">
              <h3 className="mb-4">What{tier.label ? " you receive" : "'s included"}:</h3>
              <ul className="space-y-2">
                {tier.inclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-warm-grey">
                    <span className="text-terracotta mt-1.5 shrink-0">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                        <path d="M5.5 10.5L2 7l1-1 2.5 2.5L11 3l1 1-6.5 6.5z" />
                      </svg>
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Duration */}
            {tier.duration && (
              <p className="text-center text-caption mb-8">{tier.duration}</p>
            )}

            {/* CTA */}
            <div className="text-center">
              <Button href={tier.cta.href} external={tier.cta.external}>
                {tier.cta.text}
              </Button>
            </div>
          </div>
        </section>
      ))}

      <hr className="lui-divider" />

      {/* 5. Methodology — Visual Pillars */}
      <section className="bg-soft-stone">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <ScrollReveal>
            <ProcessSteps
              heading={content.methodology.heading}
              steps={content.methodology.steps}
            />
            <p className="text-center font-heading font-medium text-espresso text-[18px] md:text-[20px] mt-10">
              {content.methodology.closingLine}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="bg-warm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <ScrollReveal>
            <SectionHeading>{content.faq.heading}</SectionHeading>
            <FaqAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="bg-espresso">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <ScrollReveal>
            <h2 className="text-warm-ivory mb-4">{content.finalCta.heading}</h2>
            <p className="text-warm-ivory/80 leading-relaxed mb-8">
              {content.finalCta.body}
            </p>
            <Button href={content.finalCta.cta?.href || "#"} external={content.finalCta.cta?.external}>
              {content.finalCta.cta?.text}
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
