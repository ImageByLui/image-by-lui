import type { CTAButton } from "@/types/content";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";

// =============================================================================
// FreeSessionCard Component — Image by LUI
// =============================================================================
// White prestige card with gold border on stone background. Contains:
//   - Gold-framed image placeholder (2.2:1 aspect ratio)
//   - Centered title (Cormorant 24px 500)
//   - "Complimentary session" subtitle with gold flanking lines
//   - Description paragraph
//   - 3-column deliverable row with gold vertical separators
//   - Terracotta CTA button (full-width)
//   - Footnote caption
//
// Used on: Services Overview page only (EN + ES).
// Part B will provide exact measurements for internal spacing.
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
    <section className="bg-soft-stone p-3.5">
      <div className="bg-white border border-gold overflow-hidden">
        {/* Gold-framed image placeholder */}
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

        {/* Card body — centered content */}
        <div className="px-[18px] pt-5 pb-6 text-center">
          {/* Title */}
          <h2 className="font-heading font-medium text-[24px] text-espresso mb-1.5">
            {title}
          </h2>

          {/* Subtitle with gold flanking lines */}
          <div className="flex items-center justify-center gap-2.5 mb-3.5">
            <div className="w-5 h-px bg-gold" aria-hidden="true" />
            <span className="font-body font-semibold text-[10px] tracking-[1.5px] uppercase text-gold">
              {subtitle}
            </span>
            <div className="w-5 h-px bg-gold" aria-hidden="true" />
          </div>

          {/* Description */}
          <p className="font-body font-normal text-[14px] text-warm-grey leading-[1.6] mb-5">
            {description}
          </p>

          {/* Deliverables row — 3 columns with gold separators */}
          <div className="flex items-start mb-[22px] border-y border-champagne/50 py-3">
            {deliverables.map((item, i) => (
              <div key={i} className="flex items-start flex-1">
                {i > 0 && (
                  <div
                    className="w-px h-6 bg-gold shrink-0 mt-px"
                    aria-hidden="true"
                  />
                )}
                <div className="flex-1 text-center px-1">
                  <p className="font-body font-semibold text-[12px] text-espresso mb-px">
                    {item.label}
                  </p>
                  <p className="font-body font-normal text-[10px] text-warm-taupe">
                    {item.sublabel}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA button — full-width terracotta */}
          <Button href={cta.href} external={cta.external} className="w-full">
            {cta.text}
          </Button>

          {/* Footnote */}
          <p className="font-body font-normal text-[11px] text-warm-taupe mt-2.5">
            {footnote}
          </p>
        </div>
      </div>
    </section>
  );
}
