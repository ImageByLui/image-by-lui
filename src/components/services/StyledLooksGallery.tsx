import type { GalleryItem } from "@/types/content";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";

// =============================================================================
// StyledLooksGallery — Image by LUI (Occasion Styling)
// =============================================================================
// Champagne bg. Horizontal scroll with scroll-snap, no visible scrollbar.
// Shows ~1.75 cards at 375px to signal scrollability.
// 200px wide gold-framed portrait cards (3:4) with captions.
//
// Scrollbar hidden via global CSS class .hide-scrollbar (added to globals.css)
// or inline styles as fallback.
// =============================================================================

interface StyledLooksGalleryProps {
  label: string;
  subheading: string;
  items: GalleryItem[];
}

export default function StyledLooksGallery({
  label,
  subheading,
  items,
}: StyledLooksGalleryProps) {
  return (
    <section className="bg-champagne pt-7 pb-7" aria-label="Styled looks gallery">
      {/* 5a. Header — has side padding */}
      <div className="px-5 mb-[18px]">
        <p className="font-body font-semibold text-[10px] tracking-[1.5px] uppercase text-terracotta mb-1.5">
          {label}
        </p>
        <p className="font-body text-[13px] text-warm-taupe leading-[1.5]">
          {subheading}
        </p>
      </div>

      {/* 5b. Scroll container — no section side padding, container has its own */}
      <div
        className="flex gap-2.5 overflow-x-auto snap-x snap-mandatory pb-3"
        role="region"
        aria-label="Gallery"
        tabIndex={0}
        style={{
          padding: "0 14px 12px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {items.map((item, i) => {
          const colorIdx = item.background === "stone" ? 1 : 2;
          return (
            <div
              key={i}
              className="shrink-0 snap-start"
              style={{ width: 200 }}
            >
              {/* Gold-framed portrait placeholder — 3:4 */}
              <div className="border border-gold p-0.5">
                <ImagePlaceholder
                  alt={item.label}
                  width={200}
                  height={267}
                  colorIndex={colorIdx}
                  className="w-full"
                />
              </div>

              {/* Caption */}
              <p className="font-body italic text-[12px] text-warm-taupe mt-1.5">
                {item.caption}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
