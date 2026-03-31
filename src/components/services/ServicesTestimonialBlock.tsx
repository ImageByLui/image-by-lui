// =============================================================================
// ServicesTestimonialBlock — Image by LUI
// =============================================================================
// Testimonial section with gold quotation marks + italic quote + attribution.
// Background is configurable: soft-stone (Overview) or warm-ivory (Occasion).
//
// Used on: Services Overview, Occasion Styling, Image Consulting.
// =============================================================================

interface ServicesTestimonialBlockProps {
  quote: string;
  name: string;
  initials: string;
  title: string;
  /** Background color — defaults to "soft-stone" (Overview). Occasion Styling uses "warm-ivory". */
  bgColor?: "soft-stone" | "warm-ivory";
}

const BG_MAP = {
  "soft-stone": "bg-soft-stone",
  "warm-ivory": "bg-warm-ivory",
} as const;

export default function ServicesTestimonialBlock({
  quote,
  name,
  initials,
  title,
  bgColor = "soft-stone",
}: ServicesTestimonialBlockProps) {
  return (
    <section className={`${BG_MAP[bgColor]} py-8 px-5`} aria-label="Client testimonial">
      <p className="font-heading font-light text-[56px] text-gold leading-[0.5] mb-3.5" aria-hidden="true">
        &ldquo;
      </p>

      <blockquote className="font-heading font-light italic text-[20px] leading-[1.45] text-espresso mb-1">
        {quote}
      </blockquote>

      <p className="font-heading font-light text-[36px] text-gold leading-[0.5] text-right mb-4" aria-hidden="true">
        &rdquo;
      </p>

      <div className="flex items-center gap-3">
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
