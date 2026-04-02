import Link from "next/link";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";
import type { ServiceSelectorCardData } from "@/types/content";

// =============================================================================
// ServiceSelectorCard — Image by LUI (Mobile mockup match)
// =============================================================================
// Badge above name (small label), tags with gold left-border accents,
// price + text link at bottom row. No full-width CTA button.
// =============================================================================

export default function ServiceSelectorCard({
  name, badge, accentColor, isPremium, price, priceStrikethrough, description, tags, imageAlt, image, imageFilter, ctaText, ctaHref,
}: ServiceSelectorCardData) {
  const isGold = accentColor === "gold";
  const topBorder = isGold ? "border-t-[4px] border-t-gold" : "border-t-[3px] border-t-terracotta";
  const cardBg = isGold ? "bg-gold/[0.03] border-l-[3px] border-l-gold" : "";
  const badgeCls = isGold
    ? "text-[#9A7B40] border-[#9A7B40]/30"
    : "text-terracotta border-terracotta/30";

  return (
    <div className={`bg-white border border-champagne/50 ${topBorder} ${cardBg} mb-3.5 overflow-hidden`}>
      <div className="p-5">
        {/* Name + Badge — same line */}
        <div className="flex items-baseline justify-between mb-2.5">
          <h3 className={`font-heading font-medium ${isGold ? "text-premium-title" : "text-card-title"} text-espresso`}>{name}</h3>
          {badge && (
            <span className={`font-body font-semibold text-[9px] tracking-[1px] uppercase px-2 py-[3px] border shrink-0 ml-2 ${badgeCls}`}>
              {badge}
            </span>
          )}
        </div>

        {/* Tags with gold left-border accents */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag, i) => (
            <span key={i} className="font-body text-[11px] text-warm-taupe border-l-[2px] border-l-gold/40 pl-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="font-body text-card text-warm-grey leading-[1.6] mb-3">{description}</p>
      </div>

      {/* Image */}
      {imageAlt && (
        <div className="px-3.5 pb-3.5">
          <div className={`border ${isGold ? "border-gold" : "border-champagne"} p-0.5 overflow-hidden`}>
            {image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image}
                alt={imageAlt}
                className="w-full aspect-[3/2] object-cover"
                style={{ filter: imageFilter || "none", objectPosition: "center 20%" }}
              />
            ) : (
              <ImagePlaceholder alt={imageAlt} width={300} height={120} colorIndex={1} className="w-full" />
            )}
          </div>
        </div>
      )}

      {/* Bottom row: price + text link */}
      <div className="flex items-baseline justify-between px-5 pb-5 pt-1">
        <div className="flex items-baseline gap-2">
          <span className="font-body font-semibold text-[length:var(--lui-fs-card)] text-terracotta">{price}</span>
          {priceStrikethrough && (
            <span className="font-body text-caption text-warm-taupe line-through">{priceStrikethrough}</span>
          )}
        </div>
        <Link href={ctaHref} className="font-body font-semibold text-[13px] text-terracotta no-underline hover:underline">
          {ctaText}
        </Link>
      </div>
    </div>
  );
}
