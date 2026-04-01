import ScrollReveal from "@/components/ui/ScrollReveal";

// =============================================================================
// InvestmentPrestigeCard — Image by LUI (LUI-DESK-004 §4.3)
// =============================================================================
// Desktop-only (hidden below lg:). Centered gold-bordered prestige card
// presenting price with gravity: heading → price → stats → entry point CTA.
// =============================================================================

interface InvestmentPrestigeCardProps {
  heading: string;
  price: string;
  priceStrikethrough: string;
  stats: { value: string; label: string }[];
  entryText: string;
  entryLinkText: string;
  entryLinkHref: string;
}

export default function InvestmentPrestigeCard({
  heading, price, priceStrikethrough, stats, entryText, entryLinkText, entryLinkHref,
}: InvestmentPrestigeCardProps) {
  return (
    <section className="hidden lg:block bg-soft-stone py-12" aria-label="Investment">
      <ScrollReveal>
        <div className="max-w-[720px] mx-auto bg-white border-[1.5px] border-gold py-9 px-12 text-center">
          {/* Heading */}
          <h2 className="font-heading text-[20px] font-normal italic text-espresso mb-2.5">
            {heading}
          </h2>

          {/* Price */}
          <div className="flex items-baseline justify-center gap-2.5 mb-4">
            <span className="font-heading text-[48px] font-medium text-terracotta leading-none">{price}</span>
            <span className="text-[16px] text-warm-taupe line-through">{priceStrikethrough}</span>
          </div>

          {/* Gold rule */}
          <div className="w-12 h-[1px] bg-gold mx-auto mb-4" aria-hidden="true" />

          {/* Stats row */}
          <div className="flex items-center justify-center gap-9 mb-5">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-heading text-[26px] font-medium text-espresso leading-tight">{stat.value}</p>
                <p className="text-[10px] text-warm-taupe tracking-[1.2px] uppercase mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Separator */}
          <div className="h-[1px] bg-champagne/30 mb-[18px]" aria-hidden="true" />

          {/* Entry point */}
          <p className="text-[14px] text-warm-taupe">
            {entryText}
            <a
              href={entryLinkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta font-semibold underline decoration-terracotta/40 hover:decoration-terracotta transition-colors"
              style={{ textUnderlineOffset: "3px" }}
            >
              {entryLinkText}
            </a>
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
