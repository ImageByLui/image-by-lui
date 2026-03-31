import Link from "next/link";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";
import type { ServiceSelectorCardData } from "@/types/content";

export default function ServiceSelectorCard({
  name, badge, accentColor, isPremium, price, priceNote, description, tags, imageAlt, ctaText, ctaHref,
}: ServiceSelectorCardData) {
  const isGold = accentColor === "gold";
  const cardBg = isGold ? "bg-gold/[0.03] border-l-[3px] border-l-gold" : "";
  const topBorder = isGold ? "border-t-[4px] border-t-gold" : "border-t-[3px] border-t-terracotta";
  const badgeCls = isGold ? "bg-gold/10 text-[#9A7B40]" : "bg-terracotta/[0.06] text-terracotta";

  return (
    <div className={`bg-white border border-champagne/50 ${topBorder} ${cardBg} mb-3.5 overflow-hidden`}>
      <div className="p-5">
        <div className="flex items-baseline justify-between mb-2">
          <h3 className={`font-heading font-medium ${isGold ? "text-[26px]" : "text-[24px]"} text-espresso`}>{name}</h3>
          {badge && <span className={`font-body font-semibold text-[11px] tracking-[1px] uppercase px-2.5 py-1 shrink-0 ml-2 ${badgeCls}`}>{badge}</span>}
        </div>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-body font-semibold text-[18px] text-terracotta">{price}</span>
          {priceNote && <span className="font-body text-[13px] text-warm-taupe">{priceNote}</span>}
        </div>
        <div className="w-8 h-[2px] bg-gold my-3" aria-hidden="true" />
        <p className="font-body text-[15px] text-warm-grey leading-[1.6] mb-3">{description}</p>
        <p className="font-body text-[12px] text-warm-taupe mb-4">{tags.join(" · ")}</p>
      </div>
      {imageAlt && (
        <div className="px-3.5 pb-3.5">
          <div className={`border ${isGold ? "border-gold" : "border-champagne"} p-0.5`}>
            <ImagePlaceholder alt={imageAlt} width={300} height={120} colorIndex={1} className="w-full" />
          </div>
        </div>
      )}
      <div className="px-5 pb-5">
        <Link href={ctaHref} className="block text-center font-body font-semibold text-[14px] tracking-[1px] uppercase py-3.5 bg-terracotta text-white no-underline hover:no-underline hover:bg-terracotta-dark transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2">
          {ctaText}
        </Link>
      </div>
    </div>
  );
}
