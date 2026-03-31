// =============================================================================
// ServicesHero — Image by LUI (Services Overview)
// =============================================================================
// Section 1. Text-only hero: h1 + gold line + description. No image, no CTA.
// =============================================================================

interface ServicesHeroProps {
  headline: string;
  description: string;
}

export default function ServicesHero({ headline, description }: ServicesHeroProps) {
  return (
    <section className="bg-warm-ivory pt-8 px-5 pb-7" aria-label="Hero">
      <h1 className="font-heading text-[28px] font-medium text-espresso leading-[1.18]">
        {headline}
      </h1>
      <div className="w-12 h-[1.5px] bg-gold my-3.5" aria-hidden="true" />
      <p className="text-[15px] text-warm-grey leading-[1.65]">
        {description}
      </p>
    </section>
  );
}
