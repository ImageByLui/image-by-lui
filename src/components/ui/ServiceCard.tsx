import Button from "@/components/ui/Button";

// =============================================================================
// ServiceCard Component — Image by LUI (V2-B)
// =============================================================================
// Renders one service tier card. Supports visual hierarchy via:
//   - badge: small label above title (e.g., "MOST POPULAR")
//   - badgeColor: text color for badge (default: terracotta)
//   - topBorderColor: colored top border (e.g., gold for premium tier)
//   - featured: champagne background for highlighted card
// =============================================================================

interface ServiceCardProps {
  name: string;
  price: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  ctaExternal?: boolean;
  label?: string;
  featured?: boolean;
  /** Small badge text above the card title */
  badge?: string;
  /** Badge text color — CSS class (default: "text-terracotta") */
  badgeColor?: string;
  /** Top border color — CSS class (e.g., "border-t-gold") */
  topBorderColor?: string;
}

export default function ServiceCard({
  name,
  price,
  description,
  ctaText,
  ctaHref,
  ctaExternal = false,
  label,
  featured = false,
  badge,
  badgeColor = "text-terracotta",
  topBorderColor,
}: ServiceCardProps) {
  const bgClass = featured
    ? "bg-champagne border border-gold/30"
    : "bg-white border border-champagne";

  const topBorder = topBorderColor
    ? `border-t-[3px] ${topBorderColor}`
    : "";

  return (
    <div className={`lui-card flex flex-col p-6 md:p-8 h-full ${bgClass} ${topBorder}`}>
      {/* Badge — small label like "MOST POPULAR" */}
      {badge && (
        <span className={`inline-block font-body font-semibold text-[10px] tracking-[1.5px] uppercase ${badgeColor} mb-2`}>
          {badge}
        </span>
      )}

      {/* Optional label like "START HERE" */}
      {label && (
        <span className="inline-block font-body font-semibold text-[11px] tracking-[1.5px] uppercase text-terracotta mb-3">
          {label}
        </span>
      )}

      {/* Service name + price on same line */}
      <div className="flex items-baseline justify-between gap-3 mb-4">
        <h3 className="font-heading font-medium text-[20px] md:text-[22px] text-espresso">
          {name}
        </h3>
        <span className="font-body font-semibold text-espresso text-[16px] md:text-[18px] whitespace-nowrap">
          {price}
        </span>
      </div>

      {/* Description */}
      <p className="text-warm-grey leading-relaxed mb-6 flex-1">
        {description}
      </p>

      {/* CTA */}
      <div className="mt-auto">
        <Button
          href={ctaHref}
          external={ctaExternal}
          className="w-full"
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
}
