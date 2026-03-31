import Link from "next/link";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";

// =============================================================================
// ServiceSelectorCard Component — Image by LUI
// =============================================================================
// White card with champagne border. Premium variant gets 3px gold top border.
// Contains: badge → title → tags row → description → framed image → footer.
//
// Two instances on Services Overview:
//   1. Occasion Styling — champagne accent, no premium border
//   2. Image Consulting — gold accent, premium border, strikethrough price
//
// Badge styling:
//   - champagne accent: terracotta tint bg + terracotta text
//   - gold accent: gold tint bg + muted gold text
//
// Used on: Services Overview page (×2, EN + ES).
// Part B will provide exact measurements for internal spacing.
// =============================================================================

interface ServiceSelectorCardProps {
  badge: string;
  name: string;
  tags: string[];
  description: string;
  imageAlt: string;
  accentColor: "champagne" | "gold";
  isPremium?: boolean;
  price: string;
  priceStrikethrough?: string;
  priceNote?: string;
  ctaText: string;
  ctaHref: string;
}

export default function ServiceSelectorCard({
  badge,
  name,
  tags,
  description,
  imageAlt,
  accentColor,
  isPremium = false,
  price,
  priceStrikethrough,
  priceNote,
  ctaText,
  ctaHref,
}: ServiceSelectorCardProps) {
  // Badge color variants
  const badgeStyles =
    accentColor === "gold"
      ? "bg-gold/10 text-[#9A7B40]"
      : "bg-terracotta/[0.06] text-terracotta";

  // Image frame border color
  const frameBorderColor =
    accentColor === "gold" ? "border-gold" : "border-champagne";

  // Image placeholder bg
  const placeholderColorIndex = accentColor === "gold" ? 0 : 1;

  // Premium card title is 26px, standard is 24px
  const titleSize = isPremium ? "text-[26px]" : "text-[24px]";

  return (
    <div
      className={`bg-white border border-champagne/50 overflow-hidden transition-transform duration-150 active:scale-[0.99] ${
        isPremium ? "border-t-[3px] border-t-gold" : ""
      }`}
    >
      {/* Card body */}
      <div className={`px-5 pb-4 ${isPremium ? "pt-[26px]" : "pt-6"}`}>
        {/* Badge */}
        <span
          className={`inline-block font-body font-semibold text-[9px] tracking-[1.2px] uppercase px-3 py-[5px] mb-3 ${badgeStyles}`}
        >
          {badge}
        </span>

        {/* Title */}
        <h3
          className={`font-heading font-medium ${titleSize} leading-[1.15] text-espresso mb-2.5`}
        >
          {name}
        </h3>

        {/* Tags row */}
        <div className="flex flex-nowrap gap-[5px] mb-3.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-body font-medium text-[10px] tracking-[0.2px] text-terracotta bg-terracotta/[0.05] px-2 py-1 border-l-2 border-terracotta"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="font-body font-normal text-[13px] leading-[1.55] text-warm-grey">
          {description}
        </p>
      </div>

      {/* Framed image placeholder */}
      <div className="px-2">
        <div className={`border ${frameBorderColor} p-0.5`}>
          <ImagePlaceholder
            alt={imageAlt}
            width={200}
            height={100}
            colorIndex={placeholderColorIndex}
            className="w-full"
          />
        </div>
      </div>

      {/* Card footer — price + CTA */}
      <div className="px-5 py-3.5 flex items-center justify-between">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-body font-semibold text-[16px] text-terracotta">
              {price}
            </span>
            {priceStrikethrough && (
              <span className="font-body font-normal text-[12px] text-warm-taupe line-through">
                {priceStrikethrough}
              </span>
            )}
          </div>
          {priceNote && (
            <p className="font-body font-semibold text-[9px] tracking-[0.8px] uppercase text-gold mt-0.5">
              {priceNote}
            </p>
          )}
        </div>

        <Link
          href={ctaHref}
          className="font-body font-semibold text-[13px] text-terracotta no-underline hover:underline py-2"
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
}
