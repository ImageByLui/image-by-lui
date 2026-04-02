import type { GalleryItem, DesktopGalleryItem } from "@/types/content";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";
import ScrollReveal from "@/components/ui/ScrollReveal";

// =============================================================================
// StyledLooksGallery — Image by LUI (Desktop Overhaul — LUI-DESK-003 §3.6)
// =============================================================================
// Mobile: horizontal-scroll gallery with image placeholders (4 items)
// Desktop (≥1024px, when desktopItems provided): 5-column grid with real photos,
//   warm brand filter, 3:4 aspect-ratio, hover zoom + gold border.
// =============================================================================

interface StyledLooksGalleryProps {
  label: string;
  subheading: string;
  items: GalleryItem[];
  /** Desktop heading (often shorter/different style) */
  desktopHeading?: string;
  /** Real photography items for desktop grid */
  desktopItems?: DesktopGalleryItem[];
}

export default function StyledLooksGallery({
  label, subheading, items, desktopHeading, desktopItems,
}: StyledLooksGalleryProps) {
  const hasDesktop = !!desktopItems;

  return (
    <section className={`bg-champagne pt-7 pb-7 ${hasDesktop ? "lg:bg-warm-ivory lg:py-16" : ""}`} aria-label="Styled looks gallery">
      {/* Mobile layout */}
      <div className={hasDesktop ? "lg:hidden" : ""}>
        <div className="px-5 mb-[18px]">
          <p className="font-body font-semibold text-label tracking-[1.5px] uppercase text-terracotta mb-1.5">{label}</p>
          <p className="font-body text-inclusion text-warm-taupe leading-[1.5]">{subheading}</p>
        </div>
        <div
          className="flex gap-2.5 overflow-x-auto snap-x snap-mandatory pb-3"
          role="region" aria-label="Gallery" tabIndex={0}
          style={{ padding: "0 14px 12px", scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
        >
          {items.map((item, i) => (
            <div key={i} className="shrink-0 snap-start" style={{ width: 200 }}>
              <div className="border border-gold p-0.5 overflow-hidden">
                {item.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full aspect-[3/4] object-cover"
                    style={{ filter: "saturate(0.65) sepia(0.08) brightness(1.02)", objectPosition: "center 20%" }}
                  />
                ) : (
                  <ImagePlaceholder alt={item.label} width={200} height={267} colorIndex={item.background === "stone" ? 1 : 2} className="w-full" />
                )}
              </div>
              <p className="font-body italic text-caption text-warm-taupe mt-1.5">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout — 5-column grid */}
      {hasDesktop && (
        <div className="hidden lg:block max-w-[1400px] mx-auto px-8">
          <ScrollReveal>
            <h3 className="font-heading text-[24px] font-normal italic text-espresso text-center mb-7">
              {desktopHeading ?? label}
            </h3>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-5 gap-3.5">
              {desktopItems.map((item, i) => (
                <div
                  key={i}
                  className="group/img aspect-[3/4] overflow-hidden border border-champagne transition-colors duration-300 hover:border-gold"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover/img:scale-105"
                    style={{ filter: "saturate(0.65) sepia(0.08) brightness(1.02)" }}
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      )}
    </section>
  );
}
