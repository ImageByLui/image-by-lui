// =============================================================================
// ServicesTestimonialBlock Component — Image by LUI
// =============================================================================
// Stone background section with:
//   - Large gold opening quotation mark (Cormorant 56px light)
//   - Italic quote (Cormorant 20px 300 italic)
//   - Small gold closing quotation mark (right-aligned, 36px)
//   - 48px circular avatar (champagne bg, gold border, initials)
//   - Name (14px semibold espresso) + title (13px warm taupe)
//
// Used on: Services Overview page. May be reused with different testimonials.
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
    <section className="bg-soft-stone px-5 py-8">
      {/* Opening quotation mark */}
      <p
        className="font-heading font-light text-[56px] text-gold leading-[0.5] mb-3.5"
        aria-hidden="true"
      >
        &ldquo;
      </p>

      {/* Quote text */}
      <blockquote className="font-heading font-light italic text-[20px] leading-[1.45] text-espresso mb-1">
        {quote}
      </blockquote>

      {/* Closing quotation mark */}
      <p
        className="font-heading font-light text-[36px] text-gold leading-[0.5] text-right mb-4"
        aria-hidden="true"
      >
        &rdquo;
      </p>

      {/* Attribution row */}
      <div className="flex items-center gap-3">
        {/* Circular avatar — 48px */}
        <div className="w-12 h-12 rounded-full bg-champagne border border-gold flex items-center justify-center shrink-0">
          <span className="font-body font-semibold text-[14px] text-warm-taupe">
            {initials}
          </span>
        </div>

        <div>
          <p className="font-body font-semibold text-[14px] text-espresso mb-px">
            {name}
          </p>
          <p className="font-body font-normal text-[13px] text-warm-taupe">
            {title}
          </p>
        </div>
      </div>
    </section>
  );
}
