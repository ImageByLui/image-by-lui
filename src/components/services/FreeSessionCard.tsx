import type { FreeSessionDeliverable } from "@/types/content";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";
import ScrollReveal from "@/components/ui/ScrollReveal";

// =============================================================================
// FreeSessionCard — Image by LUI (Mobile + Desktop unified)
// =============================================================================
// Both mobile and desktop: centered text, subtitle bar with flanking gold lines,
// horizontal deliverables with vertical separators, CTA button.
// Mobile: has image on top, full-width card.
// Desktop: 880px max-width, gold border, no image, inline trust line.
// =============================================================================

interface FreeSessionCardProps {
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: FreeSessionDeliverable[];
  cta: { text: string; href: string; external?: boolean };
  footnote: string;
  trustLine?: string;
}

export default function FreeSessionCard({
  imageAlt, title, subtitle, description, deliverables, cta, footnote, trustLine,
}: FreeSessionCardProps) {
  return (
    <section className="bg-soft-stone py-5 px-3.5 lg:py-10" aria-label="Free session">
      <ScrollReveal>
        <div className="bg-white border border-champagne lg:border-gold overflow-hidden lg:max-w-[880px] lg:mx-auto lg:px-12 lg:py-8 text-center">
          {/* Mobile-only image */}
          <div className="p-1.5 lg:hidden">
            <ImagePlaceholder alt={imageAlt} width={340} height={121} colorIndex={0} className="w-full" />
          </div>

          <div className="pt-4 px-5 pb-5 lg:pt-0 lg:px-0 lg:pb-0">
            {/* Title */}
            <h2 className="font-heading font-medium text-card-title text-espresso leading-[1.15] mb-1.5 lg:text-[28px] lg:font-normal lg:italic lg:mb-1.5">
              {title}
            </h2>

            {/* Subtitle bar with flanking gold lines */}
            <div className="flex items-center justify-center gap-3.5 mb-4 lg:mb-5">
              <div className="w-7 h-[1px] bg-gold" aria-hidden="true" />
              <span className="font-body font-semibold text-[11px] tracking-[2px] uppercase text-gold">
                {subtitle}
              </span>
              <div className="w-7 h-[1px] bg-gold" aria-hidden="true" />
            </div>

            {/* Description */}
            <p className="font-body text-card text-warm-grey leading-[1.6] mb-3.5 lg:text-[15px] lg:max-w-[440px] lg:mx-auto lg:mb-5">
              {description}
            </p>

            {/* Deliverables — horizontal row with gold separators */}
            <div className="flex items-center justify-center border-t border-b border-champagne/35 py-3 mb-5 lg:mb-6">
              {deliverables.map((d, i) => (
                <div key={i} className="flex items-center">
                  {i > 0 && <div className="w-[1px] h-8 bg-gold/30 mx-0" aria-hidden="true" />}
                  <div className="w-[110px] lg:w-[150px] text-center px-2 lg:px-3">
                    <p className="text-[13px] lg:text-[14px] font-semibold text-espresso mb-0.5">{d.label}</p>
                    <p className="text-[10px] lg:text-[11px] text-warm-taupe">{d.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href={cta.href}
              target={cta.external ? "_blank" : undefined}
              rel={cta.external ? "noopener noreferrer" : undefined}
              className="block lg:inline-block text-center font-body font-semibold text-cta tracking-[1.5px] uppercase py-4 lg:py-[15px] lg:px-10 bg-terracotta text-white no-underline hover:no-underline hover:bg-terracotta-dark hover:tracking-[2px] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(163,87,65,0.18)] transition-all duration-300"
            >
              {cta.text}
            </a>

            {/* Footnote */}
            <p className="font-body text-caption text-warm-taupe text-center mt-2 lg:hidden">{footnote}</p>

            {/* Desktop trust line (inside card) */}
            {trustLine && (
              <p className="hidden lg:block font-body text-[12px] text-warm-taupe mt-3" dangerouslySetInnerHTML={{ __html: trustLine }} />
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
