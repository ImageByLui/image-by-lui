import Button from "@/components/ui/Button";

// =============================================================================
// ServiceCard Component — Image by LUI
// =============================================================================
// Renders one service tier card. Used on Homepage (preview) and Services page.
// Accepts all data via props — no hardcoded content.
// =============================================================================

interface ServiceCardProps {
  name: string;
  price: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  /** If true, CTA opens in new tab (Calendly links) */
  ctaExternal?: boolean;
  /** Optional label like "START HERE" above the name */
  label?: string;
  /** Highlight the card (e.g., for the free session) */
  featured?: boolean;
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
}: ServiceCardProps) {
  return (
    <div
      className={`lui-card flex flex-col p-6 md:p-8 h-full ${
        featured
          ? "bg-champagne border border-gold/30"
          : "bg-white border border-champagne"
      }`}
    >
      {/* Optional label */}
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
