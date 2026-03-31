// =============================================================================
// ServicesHero Component — Image by LUI
// =============================================================================
// Hero section for the Services Overview page.
// Renders: h1 headline + 48px gold decorative line + description paragraph.
// Full-width on warm ivory background.
//
// Mobile: padding 32px top, 20px sides, 28px bottom.
// Desktop: TBD in Part B desktop adaptation spec.
//
// Used on: Services Overview page only (EN + ES).
// =============================================================================

interface ServicesHeroProps {
  headline: string;
  description: string;
}

export default function ServicesHero({ headline, description }: ServicesHeroProps) {
  return (
    <section className="bg-warm-ivory px-5 pt-8 pb-7">
      <h1 className="font-heading font-medium text-[28px] leading-[1.18] text-espresso mb-0">
        {headline}
      </h1>

      {/* Gold decorative line — 48px × 1.5px */}
      <div
        className="bg-gold my-3.5"
        style={{ width: 48, height: 1.5 }}
        aria-hidden="true"
      />

      <p className="font-body font-normal text-[15px] leading-[1.65] text-warm-grey">
        {description}
      </p>
    </section>
  );
}
