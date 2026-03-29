// =============================================================================
// TestimonialCard Component — Image by LUI
// =============================================================================
// Renders a client testimonial as a blockquote with attribution.
// Styled with Cormorant Garamond italic per brand spec.
// =============================================================================

interface TestimonialCardProps {
  quote: string;
  attribution: string;
}

export default function TestimonialCard({
  quote,
  attribution,
}: TestimonialCardProps) {
  return (
    <figure className="lui-card lui-accent-bar bg-white/50 p-6 md:p-8">
      <blockquote className="mb-4">
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <figcaption className="font-body font-semibold text-[14px] text-espresso tracking-wide">
        &mdash; {attribution}
      </figcaption>
    </figure>
  );
}
