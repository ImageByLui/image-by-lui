import type { FreeSessionDeliverable } from "@/types/content";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";
import ScrollReveal from "@/components/ui/ScrollReveal";

// =============================================================================
// FreeSessionCard — Image by LUI (Desktop Overhaul — LUI-DESK-002 §2.3)
// =============================================================================
// Mobile: full-width card with image on top, champagne border, vertical deliverables
// Desktop (≥1024px): 880px centered, gold border, no image, centered text,
//   subtitle bar with flanking gold lines, horizontal deliverables separated by
//   gold vertical lines, inline trust line below CTA
// =============================================================================

interface FreeSessionCardProps {
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: FreeSessionDeliverable[];
  cta: { text: string; href: string; external?: boolean };
  footnote: string;
  /** Desktop trust line — rendered inside the card on lg: */
  trustLine?: string;
}

export default function FreeSessionCard({
  imageAlt, title, subtitle, description, deliverables, cta, footnote, trustLine,
}: FreeSessionCardProps) {
  return (
    <section className="bg-soft-stone py-5 px-3.5 lg:py-10" aria-label="Free session">
      <ScrollReveal>
        <div className="bg-white border border-champagne lg:border-gold overflow-hidden lg:max-w-[880px] lg:mx-auto lg:px-12 lg:py-8 lg:text-center">
          {/* Mobile-only image */}
          <div className="p-1.5 lg:hidden">
            <ImagePlaceholder alt={imageAlt} width={340} height={121} colorIndex={0} className="w-full" />
          </div>

          <div className="pt-4 px-5 pb-5 lg:pt-0 lg:px-0 lg:pb-0">
            {/* Mobile subtitle */}
            <p className="font-body font-semibold text-label tracking-[1.5px] uppercase text-terracotta mb-2 lg:hidden">
              {subtitle}
            </p>

            {/* Title */}
            <h2 className="font-heading font-medium text-card-title text-espresso leading-[1.15] mb-1.5 lg:text-[28px] lg:font-normal lg:italic lg:mb-1.5">
              {title}
            </h2>

            {/* Desktop subtitle bar with flanking gold lines */}
            <div className="hidden lg:flex items-center justify-center gap-3.5 mb-5">
              <div className="w-7 h-[1px] bg-gold" aria-hidden="true" />
              <span className="font-body font-semibold text-[11px] tracking-[2px] uppercase text-gold">
                {subtitle}
              </span>
              <div className="w-7 h-[1px] bg-gold" aria-hidden="true" />
            </div>

            {/* Mobile gold rule */}
            <div className="w-8 h-[length:var(--lui-gold-line-h)] bg-gold my-3 lg:hidden" aria-hidden="true" />

            {/* Description */}
            <p className="font-body text-card text-warm-grey leading-[1.6] mb-3.5 lg:text-[15px] lg:max-w-[440px] lg:mx-auto lg:mb-5">
              {description}
            </p>

            {/* Mobile deliverables (vertical) */}
            <div className="mb-4 lg:hidden">
              {deliverables.map((d, i) => (
                <p key={i} className="text-inclusion text-warm-grey leading-[1.7] pl-[18px] mb-[5px] relative">
                  <span className="absolute left-0 text-gold font-semibold" aria-hidden="true">—</span>
                  <span className="font-semibold text-espresso">{d.label}</span> — {d.sublabel}
                </p>
              ))}
            </div>

            {/* Desktop deliverables (horizontal with gold separators) */}
            <div className="hidden lg:flex items-center justify-center border-t border-b border-champagne/35 py-3 mb-6">
              {deliverables.map((d, i) => (
                <div key={i} className="flex items-center">
                  {i > 0 && <div className="w-[1px] h-8 bg-gold/30 mx-0" aria-hidden="true" />}
                  <div className="w-[150px] text-center px-3">
                    <p className="text-[14px] font-semibold text-espresso mb-0.5">{d.label}</p>
                    <p className="text-[11px] text-warm-taupe">{d.sublabel}</p>
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

            {/* Mobile footnote */}
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
