interface ServicesTestimonialBlockProps { quote: string; name: string; initials: string; title: string; bgColor?: "soft-stone" | "warm-ivory"; }
const BG_MAP = { "soft-stone": "bg-soft-stone", "warm-ivory": "bg-warm-ivory" } as const;
export default function ServicesTestimonialBlock({ quote, name, initials, title, bgColor = "soft-stone" }: ServicesTestimonialBlockProps) {
  return (
    <section className={`${BG_MAP[bgColor]} py-8 px-5`} aria-label="Client testimonial">
      <div className="flex gap-3.5 items-start">
        <div className="w-11 h-11 rounded-full bg-champagne border border-gold flex items-center justify-center shrink-0">
          <span className="font-body font-semibold text-[12px] text-warm-taupe">{initials}</span>
        </div>
        <div>
          <p className="font-heading font-light italic text-[20px] text-espresso leading-[1.4] mb-2">"{quote}"</p>
          <p className="font-body font-semibold text-[14px] text-espresso">{name}</p>
          <p className="font-body text-[13px] text-warm-taupe">{title}</p>
        </div>
      </div>
    </section>
  );
}
