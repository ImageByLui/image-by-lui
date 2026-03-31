import ImagePlaceholder from "@/components/features/ImagePlaceholder";

// =============================================================================
// PricingTier — Image by LUI (Occasion Styling)
// =============================================================================
// Native <details>/<summary> accordion. Three visual variants:
//   essential: champagne border, champagne CTA, collapsed
//   complete:  1.5px terracotta border, badge, terracotta CTA, expanded
//   vip:       gold border + 3px gold top, gold price, gold CTA, footnote
//
// Chevron rotation handled via CSS: details[open] summary .chevron rotates 180°.
// Content always in DOM (server-rendered) — critical for SEO/AI citability.
// =============================================================================

interface PricingTierProps {
  name: string;
  price: string;
  subtitle: string;
  duration: string;
  description: string;
  inclusions: string[];
  ctaText: string;
  ctaHref: string;
  variant: "essential" | "complete" | "vip";
  badge?: string;
  imageAlt?: string;
  footnote?: string;
  defaultOpen?: boolean;
}

const STYLES = {
  essential: {
    container: "border border-champagne/50",
    summaryPt: "pt-5",
    nameSize: "text-[20px]",
    priceSize: "text-[20px]",
    priceCls: "text-terracotta",
    separator: "bg-gold/40",
    cta: "bg-champagne text-espresso active:opacity-80",
  },
  complete: {
    container: "border-[1.5px] border-terracotta relative",
    summaryPt: "pt-[30px]",
    nameSize: "text-[22px]",
    priceSize: "text-[22px]",
    priceCls: "text-terracotta",
    separator: "bg-terracotta/20",
    cta: "bg-terracotta text-white active:bg-terracotta-dark active:scale-[0.98]",
  },
  vip: {
    container: "border border-gold/50 border-t-[3px] border-t-gold",
    summaryPt: "pt-5",
    nameSize: "text-[20px]",
    priceSize: "text-[20px]",
    priceCls: "text-gold",
    separator: "bg-gold",
    cta: "bg-gold/[0.12] text-espresso border border-gold active:bg-gold/20",
  },
} as const;

export default function PricingTier({
  name,
  price,
  subtitle,
  duration,
  description,
  inclusions,
  ctaText,
  ctaHref,
  variant,
  badge,
  imageAlt,
  footnote,
  defaultOpen = false,
}: PricingTierProps) {
  const s = STYLES[variant];

  return (
    <details
      className={`group bg-white overflow-hidden mb-3 last:mb-0 ${s.container}`}
      open={defaultOpen || undefined}
    >
      <summary
        className={`${s.summaryPt} px-5 pb-[18px] cursor-pointer list-none transition-transform duration-150 active:scale-[0.995] [&::-webkit-details-marker]:hidden`}
      >
        {/* Badge — Complete tier only */}
        {badge && (
          <span className="absolute top-[-1px] left-5 bg-terracotta text-white font-body font-semibold text-[9px] tracking-[1.2px] uppercase px-3 py-1 z-[1]">
            {badge}
          </span>
        )}

        {/* Row 1: Name + Price */}
        <div className="flex justify-between items-start mb-2">
          <h3 className={`font-heading font-medium ${s.nameSize} text-espresso`}>
            {name}
          </h3>
          <span className={`font-body font-semibold ${s.priceSize} ${s.priceCls}`}>
            {price}
          </span>
        </div>

        {/* Row 2: Subtitle + Duration + Chevron */}
        <div className="flex justify-between items-center">
          <p className="font-body text-[12px] text-warm-taupe">{subtitle}</p>
          <div className="flex items-center gap-1.5">
            <span className="font-body text-[11px] text-warm-taupe">{duration}</span>
            {/* Chevron — rotates 180° when open via CSS */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="chevron text-warm-taupe transition-transform duration-200 group-open:rotate-180"
              aria-hidden="true"
            >
              <path d="M5 7.5L10 12.5L15 7.5" />
            </svg>
          </div>
        </div>
      </summary>

      {/* Expanded content */}
      <div className="px-5 pb-6">
        {/* Separator */}
        <div className={`h-px ${s.separator} mb-[18px]`} aria-hidden="true" />

        {/* Image — Complete tier only, before description */}
        {imageAlt && variant === "complete" && (
          <div className="border border-gold p-0.5 mb-[18px]">
            <ImagePlaceholder
              alt={imageAlt}
              width={300}
              height={120}
              colorIndex={1}
              className="w-full"
            />
          </div>
        )}

        {/* Description */}
        <p className="font-body text-[14px] text-warm-grey leading-[1.6] mb-[18px]">
          {description}
        </p>

        {/* Separator */}
        <div className={`h-px ${s.separator} opacity-75 mb-4`} aria-hidden="true" />

        {/* Inclusions with gold dash markers */}
        <div className="mb-0">
          {inclusions.map((item, i) => (
            <p
              key={i}
              className="text-[13px] text-warm-grey leading-[1.7] pl-[18px] mb-[5px] relative"
            >
              <span className="absolute left-0 text-gold font-semibold" aria-hidden="true">
                —
              </span>
              {item}
            </p>
          ))}
        </div>

        {/* Footnote — VIP tier only */}
        {footnote && (
          <p className="font-heading font-light italic text-[12px] text-gold mt-3.5">
            {footnote}
          </p>
        )}

        {/* CTA button */}
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`block text-center font-body font-semibold text-[12px] tracking-[1.5px] uppercase py-[15px] mt-[22px] no-underline hover:no-underline transition-all duration-150 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${s.cta}`}
        >
          {ctaText}
        </a>
      </div>
    </details>
  );
}
