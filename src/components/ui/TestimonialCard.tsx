// =============================================================================
// TestimonialCard Component — Image by LUI (V6)
// =============================================================================
// Renders a client testimonial with headshot initials, attribution, and
// optional social handle. Gold left accent bar.
// =============================================================================

interface TestimonialCardProps {
  quote: string;
  attribution: string;
  initials?: string;
  social?: string;
}

export default function TestimonialCard({
  quote,
  attribution,
  initials,
  social,
}: TestimonialCardProps) {
  return (
    <figure className="bg-warm-ivory/50 p-5 md:p-6 border-l-[3px] border-l-gold flex flex-col h-full">
      <blockquote className="flex-1 mb-4">
        <p className="font-heading italic text-espresso text-[15px] md:text-[17px] leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>
      <figcaption className="flex items-center gap-3">
        {initials && (
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-champagne flex items-center justify-center shrink-0">
            <span className="font-body font-semibold text-[12px] md:text-[13px] text-warm-taupe">
              {initials}
            </span>
          </div>
        )}
        <div>
          <span className="font-body font-semibold text-[13px] text-espresso block leading-snug">
            {attribution}
          </span>
          {social && (
            <span className="font-body text-[11px] text-terracotta block leading-snug">
              {social}
            </span>
          )}
        </div>
      </figcaption>
    </figure>
  );
}
