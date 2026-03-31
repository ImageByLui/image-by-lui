import type { CTAButton } from "@/types/content";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";

// =============================================================================
// FreeSessionCard — Image by LUI (Services Overview)
// =============================================================================
// Section 2. White prestige card on stone background with gold border.
// Contains: framed image → title → subtitle with gold lines → description →
// 3-col deliverables → full-width CTA → footnote.
// =============================================================================

interface FreeSessionCardProps {
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: { label: string; sublabel: string }[];
  cta: CTAButton;
  footnote: string;
}

export default function FreeSessionCard({
  imageAlt,
  title,
  subtitle,
  description,
  deliverables,
  cta,
  footnote,
}: FreeSessionCardProps) {
  return (
    <section className="bg-soft-stone p-3.5" aria-label="Free color analysis">
      <div className="bg-white border border-gold overflow-hidden">

        {/* 2a. Image area — gold-framed placeholder */}
        <div className="p-2 pb-0">
          <div className="border border-gold p-0.5">
            <ImagePlaceholder
              alt={imageAlt}
              width={220}
              height={100}
              colorIndex={1}
              className="w-full"
            />
          </div>
        </div>

        {/* 2b. Content area — centered */}
        <div className="pt-5 px-[18px] pb-6 text-center">

          {/* 2c. Title */}
          <p className="font-heading font-medium text-[24px] text-espresso mb-1.5">
            {title}
          </p>

          {/* 2d. Subtitle with gold flanking lines */}
          <div className="flex items-center justify-center gap-2.5 mb-3.5">
            <div className="w-5 h-px bg-gold" aria-hidden="true" />
            <span className="font-body font-semibold text-[10px] tracking-[1.5px] uppercase text-gold">
              {subtitle}
            </span>
            <div className="w-5 h-px bg-gold" aria-hidden="true" />
          </div>

          {/* 2e. Description */}
          <p className="text-[14px] text-warm-grey leading-[1.6] mb-5">
            {description}
          </p>

          {/* 2f. Deliverables row — 3 columns with gold separators */}
          <div className="flex items-start mb-[22px] border-y-[0.5px] border-champagne py-3">
            {deliverables.map((item, i) => (
              <div key={i} className="flex items-start flex-1">
                {i > 0 && (
                  <div className="w-px h-6 bg-gold shrink-0 mt-px" aria-hidden="true" />
                )}
                <div className="flex-1 text-center px-1">
                  <p className="font-body font-semibold text-[12px] text-espresso mb-px">
                    {item.label}
                  </p>
                  <p className="font-body text-[10px] text-warm-taupe">
                    {item.sublabel}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 2g. CTA — full-width terracotta, 12px/16px per spec */}
          <a
            href={cta.href}
            target={cta.external ? "_blank" : undefined}
            rel={cta.external ? "noopener noreferrer" : undefined}
            className="block bg-terracotta text-white font-body font-semibold text-[12px] tracking-[1.5px] uppercase py-4 text-center no-underline hover:no-underline transition-all duration-150 active:bg-terracotta-dark active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            {cta.text}
          </a>

          {/* 2h. Footnote */}
          <p className="text-[11px] text-warm-taupe mt-2.5">
            {footnote}
          </p>
        </div>
      </div>
    </section>
  );
}
