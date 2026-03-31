interface ServicesHeroProps { headline: string; description: string; }
export default function ServicesHero({ headline, description }: ServicesHeroProps) {
  return (
    <section className="bg-warm-ivory pt-8 px-5 pb-6" aria-label="Services hero">
      <p className="font-body font-semibold text-[11px] tracking-[2px] uppercase text-terracotta mb-3">Our Services</p>
      <h1 className="font-heading text-[32px] font-semibold text-espresso leading-[1.18]">{headline}</h1>
      <div className="w-12 h-[2px] bg-gold my-3.5" aria-hidden="true" />
      <p className="text-[17px] text-warm-grey leading-[1.6]">{description}</p>
    </section>
  );
}
