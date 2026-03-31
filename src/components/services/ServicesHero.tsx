interface ServicesHeroProps { headline: string; description: string; }
export default function ServicesHero({ headline, description }: ServicesHeroProps) {
  return (
    <section className="bg-warm-ivory pt-8 px-5 pb-6" aria-label="Services hero">
      <p className="font-body font-semibold text-label tracking-[2px] uppercase text-terracotta mb-3">Our Services</p>
      <h1 className="font-heading text-hero font-semibold text-espresso leading-[1.18]">{headline}</h1>
      <div className="w-[length:var(--lui-gold-line-w)] h-[length:var(--lui-gold-line-h)] bg-gold my-3.5" aria-hidden="true" />
      <p className="text-body text-warm-grey leading-[1.6]">{description}</p>
    </section>
  );
}
