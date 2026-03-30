import Image from "next/image";

// =============================================================================
// TestimonialCard Component — Image by LUI (V3)
// =============================================================================
// Renders a client testimonial with quote, attribution, optional photo,
// and optional linked Instagram handle.
// When `image` is provided, shows the real photo. Otherwise falls back to
// initials circle.
// =============================================================================

interface TestimonialCardProps {
  quote: string;
  attribution: string;
  initials?: string;
  social?: string;
  socialUrl?: string;
  image?: string;
}

export default function TestimonialCard({
  quote,
  attribution,
  initials,
  social,
  socialUrl,
  image,
}: TestimonialCardProps) {
  return (
    <figure className="bg-white/50 p-5 md:p-7 flex flex-col h-full">
      <blockquote className="mb-4 flex-1">
        <p className="font-heading italic text-espresso text-[15px] md:text-[17px] leading-snug">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>
      <figcaption className="flex items-center gap-3">
        {/* Photo or initials fallback */}
       {image ? (
          <div
            className="w-10 h-10 md:w-11 md:h-11 rounded-full shrink-0 border border-champagne"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "200%",
              backgroundPosition: "center center",
            }}
          />
        ) : initials ? (
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-champagne flex items-center justify-center shrink-0">
            <span className="font-body font-semibold text-[13px] md:text-[14px] text-warm-taupe">
              {initials}
            </span>
          </div>
        ) : null}
        <div>
          <p className="font-body font-semibold text-[13px] md:text-[14px] text-espresso">
            {attribution}
          </p>
          {social && (
            socialUrl ? (
              <a
                href={socialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[11px] text-terracotta hover:underline"
              >
                {social}
              </a>
            ) : (
              <p className="font-body text-[11px] text-terracotta">
                {social}
              </p>
            )
          )}
        </div>
      </figcaption>
    </figure>
  );
}
