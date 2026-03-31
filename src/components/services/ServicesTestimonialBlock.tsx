// =============================================================================
// ServicesTestimonialBlock — Image by LUI (Services Overview)
// =============================================================================
// Section 5. Stone background. Gold quotation marks + italic quote +
// circular attribution with initials.
// =============================================================================

interface ServicesTestimonialBlockProps {
  quote: string;
  name: string;
  initials: string;
  title: string;
}

export default function ServicesTestimonialBlock({
  quote,
  name,
  initials,
  title,
}: ServicesTestimonialBlockProps) {
  return (
    <section className="bg-soft-stone py-8 px-5" aria-label="Client testimonial">
      {/* Opening quotation mark — 56px */}
      <p className="font-heading font-light text-[56px] text-gold leading-[0.5] mb-3.5" aria-hidden="true">
        &ldquo;
      </p>

      {/* Quote — 20px italic */}
      <blockquote className="font-heading font-light italic text-[20px] leading-[1.45] text-espresso mb-1">
        {quote}
      </blockquote>

      {/* Closing quotation mark — 36px, right-aligned */}
      <p className="font-heading font-light text-[36px] text-gold leading-[0.5] text-right mb-4" aria-hidden="true">
        &rdquo;
      </p>

      {/* Attribution row */}
      <div className="flex items-center gap-3">
        {/* 48px circle */}
        <div className="w-12 h-12 rounded-full bg-champagne border border-gold flex items-center justify-center shrink-0">
          <span className="font-body font-semibold text-[14px] text-warm-taupe">
            {initials}
          </span>
        </div>
        <div>
          <p className="font-body font-semibold text-[14px] text-espresso mb-px">
            {name}
          </p>
          <p className="font-body text-[13px] text-warm-taupe">
            {title}
          </p>
        </div>
      </div>
    </section>
  );
}
