"use client";

import { useState } from "react";
import type { TransformationData } from "@/types/content";

// =============================================================================
// BeforeAfterSlider — Image by LUI (Image Consulting)
// =============================================================================
// Section 5. Phase 1: Static split layout with functional thumbnail nav.
// Gold-framed container, two halves, 3px gold center line, decorative drag
// handle. 3 thumbnail buttons with active/inactive states + labels.
// =============================================================================

interface BeforeAfterSliderProps {
  label: string;
  subheading: string;
  items: TransformationData[];
  /** Label for active thumbnail — "Active" (EN) or "Activo" (ES) */
  activeLabel?: string;
  /** Label for inactive thumbnails — "Tap" for both languages */
  inactiveLabel?: string;
}

export default function BeforeAfterSlider({
  label,
  subheading,
  items,
  activeLabel = "Active",
  inactiveLabel = "Tap",
}: BeforeAfterSliderProps) {
  const [activeIndex, setActiveIndex] = useState(
    () => Math.max(0, items.findIndex((item) => item.active))
  );

  const activeItem = items[activeIndex];

  return (
    <section className="bg-warm-ivory py-7 px-3.5" aria-label="Real transformations">
      {/* 5a. Header */}
      <div className="px-1.5 mb-5">
        <p className="font-body font-semibold text-[10px] tracking-[1.5px] uppercase text-terracotta mb-1.5">
          {label}
        </p>
        <p className="font-body text-[13px] text-warm-taupe leading-[1.5]">
          {subheading}
        </p>
      </div>

      {/* 5b. Slider container */}
      <div className="px-1.5">
        <div className="border border-gold p-0.5">
          <div
            className="relative flex overflow-hidden"
            style={{ aspectRatio: "3/4" }}
            role="img"
            aria-label={`Before and after transformation comparison for ${activeItem?.initials}`}
          >
            {/* Before half */}
            <div className="flex-1 bg-champagne flex items-center justify-center">
              <span className="text-[12px] text-warm-taupe italic">Before</span>
            </div>

            {/* Center gold line */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] bg-gold z-[2]" aria-hidden="true" />

            {/* Drag handle — decorative Phase 1 */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border-2 border-gold z-[3] flex items-center justify-center cursor-grab shadow-[0_2px_8px_rgba(44,36,32,0.15)]"
              aria-hidden="true"
              title="Drag to compare (coming soon)"
            >
              <span className="text-gold text-[12px] font-semibold">⟷</span>
            </div>

            {/* After half */}
            <div className="flex-1 bg-warm-ivory flex items-center justify-center">
              <span className="text-[12px] text-warm-taupe italic">After</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5c. Caption */}
      <p className="text-[12px] text-warm-taupe italic text-center mt-2.5 px-1">
        {activeItem?.caption}
      </p>

      {/* 5d. Thumbnail selectors */}
      <div className="flex justify-center gap-3.5 mt-[18px] px-1.5" role="group" aria-label="Select transformation">
        {items.map((item, i) => {
          const isActive = i === activeIndex;
          return (
            <div key={i} className="flex flex-col items-center">
              <button
                onClick={() => setActiveIndex(i)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                  isActive
                    ? "bg-champagne border-2 border-gold"
                    : "bg-soft-stone border-[1.5px] border-champagne"
                }`}
                aria-label={`View transformation for ${item.initials}`}
                aria-pressed={isActive}
              >
                <span className="font-body font-semibold text-[12px] text-warm-taupe">
                  {item.initials}
                </span>
              </button>
              <span className={`text-[10px] mt-1 ${
                isActive ? "text-terracotta font-semibold" : "text-warm-taupe"
              }`}>
                {isActive ? activeLabel : inactiveLabel}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
