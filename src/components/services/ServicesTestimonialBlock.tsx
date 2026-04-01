import ScrollReveal from "@/components/ui/ScrollReveal";

// =============================================================================
// ServicesTestimonialBlock — Image by LUI (Desktop Overhaul — LUI-DESK-002 §2.5)
// =============================================================================
// Mobile: horizontal flex with avatar circle + quote text
// Desktop (≥1024px): max-width container, grid 1fr/auto, Stone bg card with
//   3px gold left border. Attribution in right sidebar with champagne divider.
// =============================================================================

interface ServicesTestimonialBlockProps {
  quote: string;
  name: string;
  initials: string;
  title: string;
  /** Real photo path — replaces initials circle when provided */
  photo?: string;
  /** Social handle */
  handle?: string;
  bgColor?: "soft-stone" | "warm-ivory";
}

const BG_MAP = { "soft-stone": "bg-soft-stone", "warm-ivory": "bg-warm-ivory" } as const;

export default function ServicesTestimonialBlock({
  quote, name, initials, title, photo, handle, bgColor = "soft-stone",
}: ServicesTestimonialBlockProps) {
  // Build Instagram URL from handle
  const igUrl = handle ? `https://instagram.com/${handle.replace("@", "")}` : null;

  return (
    <section className={`${BG_MAP[bgColor]} py-8 px-5 lg:py-0 lg:px-0 lg:bg-soft-stone`} aria-label="Client testimonial">
      <ScrollReveal>
        {/* Mobile layout */}
        <div className="flex gap-3.5 items-start lg:hidden">
          <div className="w-11 h-11 rounded-full bg-champagne border border-gold flex items-center justify-center shrink-0 overflow-hidden">
            {photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photo} alt={name} className="w-full h-full object-cover" />
            ) : (
              <span className="font-body font-semibold text-tag text-warm-taupe">{initials}</span>
            )}
          </div>
          <div>
            <p className="font-heading font-light italic text-testimonial text-espresso leading-[1.4] mb-2">&ldquo;{quote}&rdquo;</p>
            <p className="font-body font-semibold text-inclusion text-espresso">{name}</p>
            <p className="font-body text-caption text-warm-taupe">{title}</p>
            {handle && igUrl && (
              <a href={igUrl} target="_blank" rel="noopener noreferrer" className="font-body text-caption text-warm-taupe hover:text-terracotta transition-colors no-underline">{handle}</a>
            )}
          </div>
        </div>

        {/* Desktop layout — white card on stone bg */}
        <div className="hidden lg:block max-w-[1200px] mx-auto px-12 py-12">
          <div className="grid grid-cols-[1fr_auto] gap-12 items-center bg-white p-10 pl-12 border-l-[3px] border-l-gold shadow-[0_1px_6px_rgba(44,36,32,0.04)]">
            {/* Quote */}
            <p className="font-heading text-[21px] font-light italic text-espresso leading-[1.55]">
              <span className="font-heading text-[48px] font-light text-gold/50 leading-[0.5] align-top mr-1" aria-hidden="true">&ldquo;</span>
              {quote}
              <span className="font-heading text-[48px] font-light text-gold/50 leading-[0] align-bottom ml-0.5" aria-hidden="true">&rdquo;</span>
            </p>

            {/* Attribution sidebar */}
            <div className="pl-8 border-l border-champagne flex flex-col items-center gap-2 min-w-[100px]">
              <div className="w-12 h-12 rounded-full bg-champagne border-[1.5px] border-gold flex items-center justify-center overflow-hidden">
                {photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={photo} alt={name} className="w-full h-full object-cover" />
                ) : (
                  <span className="font-body text-[14px] font-semibold text-warm-taupe">{initials}</span>
                )}
              </div>
              <p className="font-body text-[13px] font-semibold text-espresso text-center">{name}</p>
              <p className="font-body text-[11px] text-warm-taupe text-center leading-[1.4]">
                {title}
                {handle && igUrl && (
                  <>
                    <br />
                    <a href={igUrl} target="_blank" rel="noopener noreferrer" className="text-warm-taupe hover:text-terracotta transition-colors no-underline">{handle}</a>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
