import type { PricingSummaryColumn } from "@/types/content";

// =============================================================================
// CompactPricingCard — Image by LUI (Image Consulting)
// =============================================================================
// White card with gold border on stone bg. Centered: price + strikethrough →
// gold note → gold separator → 3-column summary with gold vertical separators.
//
// Used on: Image Consulting page only.
// Part B will provide exact measurements.
// =============================================================================

interface CompactPricingCardProps {
  price: string;
  priceStrikethrough: string;
  priceNote: string;
  summary: PricingSummaryColumn[];
}

export default function CompactPricingCard({
  price,
  priceStrikethrough,
  priceNote,
  summary,
}: CompactPricingCardProps) {
  return (
    <section className="bg-soft-stone p-3.5" aria-label="Investment">
      <div className="bg-white border border-gold overflow-hidden">
        <div className="py-6 px-5 text-center">
          {/* Price + strikethrough */}
          <div className="flex items-baseline justify-center gap-2 mb-1">
            <span className="font-heading font-semibold text-[32px] text-terracotta">{price}</span>
            <span className="font-body text-[14px] text-warm-taupe line-through">{priceStrikethrough}</span>
          </div>

          {/* Gold note */}
          <p className="font-body font-semibold text-[9px] tracking-[1px] uppercase text-gold mb-4">
            {priceNote}
          </p>

          {/* Gold separator */}
          <div className="h-px bg-gold/40 mb-4" aria-hidden="true" />

          {/* 3-column summary */}
          <div className="flex items-start">
            {summary.map((col, i) => (
              <div key={i} className="flex items-start flex-1">
                {i > 0 && (
                  <div className="w-px h-8 bg-gold/40 shrink-0" aria-hidden="true" />
                )}
                <div className="flex-1 text-center">
                  <p className="font-heading font-semibold text-[22px] text-espresso leading-none mb-1">
                    {col.value}
                  </p>
                  <p className="font-body text-[10px] text-warm-taupe uppercase tracking-[0.5px]">
                    {col.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
