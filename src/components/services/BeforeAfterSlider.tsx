"use client";

import { useState } from "react";
import type { TransformationData } from "@/types/content";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";

// =============================================================================
// BeforeAfterSlider — Image by LUI (Image Consulting)
// =============================================================================
// Phase 1 (this build): Static split layout. Gold-framed container with two
// halves labeled "Before" / "After", vertical gold center line (3px),
// circular drag handle (decorative). Caption below. Three circular thumbnail
// buttons — first is active (champagne/gold), others show "Tap" state.
//
// Thumbnails have onClick + useState to track active item, prepping for
// Phase 2 when real images are wired.
//
// Phase 2 (future): Wire drag-to-reveal and real image swapping.
// =============================================================================

interface BeforeAfterSliderProps {
  label: string;
  subheading: string;
  items: TransformationData[];
}

export default function BeforeAfterSlider({
  label,
  subheading,
  items,
}: BeforeAfterSliderProps) {
  const [activeIndex, setActiveIndex] = useState(
    () => items.findIndex((item) => item.active) ?? 0
  );

  const activeItem = items[activeIndex];

  return (
    <section className="bg-soft-stone px-5 py-8" aria-label="Transformations">
      {/* Section label */}
      <p className="font-body font-semibold text-[10px] tracking-[1.5px] uppercase text-terracotta mb-1.5">
        {label}
      </p>
      <p className="font-body text-[13px] text-warm-taupe leading-[1.5] mb-5">
        {subheading}
      </p>

      {/* Before/After split container */}
      <div className="border border-gold p-0.5 mb-3">
        <div className="relative flex" style={{ aspectRatio: "335/220" }}>
          {/* Before half */}
          <div className="flex-1 bg-champagne flex items-center justify-center relative">
            <ImagePlaceholder alt="Before" width={167} height={220} colorIndex={0} className="w-full h-full" />
            <span className="absolute bottom-2 left-2 bg-espresso/60 text-warm-ivory text-[9px] font-body font-semibold uppercase tracking-[1px] px-2 py-0.5">
              Before
            </span>
          </div>

          {/* Center gold line + drag handle */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-10">
            <div className="w-[3px] flex-1 bg-gold" aria-hidden="true" />
            <div className="w-9 h-9 rounded-full bg-white border-2 border-gold flex items-center justify-center shadow-md my-1" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold">
                <path d="M8 3l-5 9 5 9M16 3l5 9-5 9" />
              </svg>
            </div>
            <div className="w-[3px] flex-1 bg-gold" aria-hidden="true" />
          </div>

          {/* After half */}
          <div className="flex-1 bg-soft-stone flex items-center justify-center relative">
            <ImagePlaceholder alt="After" width={167} height={220} colorIndex={1} className="w-full h-full" />
            <span className="absolute bottom-2 right-2 bg-terracotta text-white text-[9px] font-body font-semibold uppercase tracking-[1px] px-2 py-0.5">
              After
            </span>
          </div>
        </div>
      </div>

      {/* Caption */}
      <p className="font-body italic text-[12px] text-warm-taupe text-center mb-5">
        {activeItem?.caption}
      </p>

      {/* Thumbnail navigation */}
      <div className="flex justify-center gap-3">
        {items.map((item, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 ${
                isActive
                  ? "bg-champagne border-2 border-gold"
                  : "bg-soft-stone border border-champagne hover:border-gold"
              }`}
              aria-label={`View transformation: ${item.caption}`}
              aria-pressed={isActive}
            >
              <span className={`font-body font-semibold text-[11px] ${
                isActive ? "text-espresso" : "text-warm-taupe"
              }`}>
                {item.initials}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
