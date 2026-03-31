import Link from "next/link";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";

// =============================================================================
// ServiceSelectorCard — Image by LUI (Services Overview)
// =============================================================================
// Section 4. Reusable card for Occasion Styling and Image Consulting.
// Uses <article> per accessibility spec. Two variants controlled by props:
//   Standard: champagne border, stone bg placeholder
//   Premium (isPremium): 3px gold top border, gold image frame, champagne bg
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
  const badgeStyles =
    accentColor === "gold"
      ? "bg-gold/10 text-[#9A7B40]"
      : "bg-terracotta/[0.06] text-terracotta";

  const frameBorder = accentColor === "gold" ? "border-gold" : "border-champagne";
  const placeholderColor = accentColor === "gold" ? 0 : 1; // 0=champagne, 1=stone
  const titleSize = isPremium ? "text-[26px]" : "text-[24px]";

  return (
    <article
      className={`bg-white border-[0.5px] border-champagne overflow-hidden transition-transform duration-150 active:scale-[0.99] mb-3.5 ${
        isPremium ? "border-t-[3px] border-t-gold" : ""
      }`}
    >
      {/* Card body */}
      <div className={`px-5 pb-4 ${isPremium ? "pt-[26px]" : "pt-6"}`}>
        <span
          className={`inline-block font-body font-semibold text-[9px] tracking-[1.2px] uppercase px-3 py-[5px] mb-3 ${badgeStyles}`}
        >
          {badge}
        </span>

        <p className={`font-heading font-medium ${titleSize} leading-[1.15] text-espresso mb-2.5`}>
          {name}
        </p>

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

        <p className="font-body text-[13px] leading-[1.55] text-warm-grey">
          {description}
        </p>
      </div>

      {/* Image area */}
      <div className="px-2">
        <div className={`border ${frameBorder} p-0.5`}>
          <ImagePlaceholder
            alt={imageAlt}
            width={200}
            height={100}
            colorIndex={placeholderColor}
            className="w-full"
          />
        </div>
      </div>

      {/* Footer — price + CTA link */}
      <div className="py-3.5 px-5 flex items-center justify-between">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-body font-semibold text-[16px] text-terracotta">
              {price}
            </span>
            {priceStrikethrough && (
              <span className="font-body text-[12px] text-warm-taupe line-through">
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
          className="font-body font-semibold text-[13px] text-terracotta no-underline hover:underline py-2 transition-colors duration-150 active:text-terracotta-dark focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          aria-label={`Learn more about ${name}`}
        >
          {ctaText}
        </Link>
      </div>
    </article>
  );
}
