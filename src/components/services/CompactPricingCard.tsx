import type { PricingSummaryColumn } from "@/types/content";
interface CompactPricingCardProps { price: string; priceStrikethrough: string; priceNote: string; summary: PricingSummaryColumn[]; }
export default function CompactPricingCard({ price, priceStrikethrough, priceNote, summary }: CompactPricingCardProps) {
  return (
    <section className="bg-soft-stone py-7 px-5" aria-label="Pricing">
      <div className="bg-white border border-gold py-6 px-5 text-center">
        <div className="flex items-baseline justify-center gap-2.5 mb-1.5">
          <span className="font-heading font-medium text-[34px] text-terracotta">{price}</span>
          <span className="font-body text-[16px] text-warm-taupe line-through">{priceStrikethrough}</span>
        </div>
        <p className="font-body font-semibold text-[12px] tracking-[1.2px] uppercase text-gold mb-[18px]">{priceNote}</p>
        <div className="h-px bg-gold/30 mb-4" aria-hidden="true" />
        <div className="flex items-start">
          {summary.map((col, i) => (
            <div key={i} className="flex items-start flex-1">
              {i > 0 && <div className="w-px h-10 bg-gold/30 shrink-0" aria-hidden="true" />}
              <div className="flex-1 text-center px-1.5">
                <p className="font-heading font-medium text-[22px] text-espresso leading-tight">{col.value}</p>
                <p className="font-body text-[13px] text-warm-taupe">{col.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
