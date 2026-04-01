"use client";
import { useState, useRef, useCallback } from "react";
import type { TransformationData } from "@/types/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

// =============================================================================
// BeforeAfterSlider — Image by LUI (Desktop Overhaul — LUI-DESK-004 §4.7)
// =============================================================================
// Mobile: ivory bg, 3:4 aspect, full-width, label-style heading
// Desktop: Stone bg, 16:9 aspect, 700px centered, gold 1.5px border, 44px handle,
//   italic Cormorant heading, thumbnail selectors below caption
// Mechanism: pointer events for drag, clip-path for reveal. Fully functional
//   with placeholder images — real photos drop in at /images/before-after/.
// =============================================================================

interface BeforeAfterSliderProps {
  label: string;
  subheading: string;
  items: TransformationData[];
  activeLabel?: string;
  inactiveLabel?: string;
  /** Desktop heading override (italic style) */
  desktopHeading?: string;
}

export default function BeforeAfterSlider({
  label, subheading, items, activeLabel = "Active", inactiveLabel = "Tap", desktopHeading,
}: BeforeAfterSliderProps) {
  const [activeIndex, setActiveIndex] = useState(() => Math.max(0, items.findIndex((item) => item.active)));
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const activeItem = items[activeIndex];

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePos(e.clientX);
  }, [updatePos]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (dragging.current) updatePos(e.clientX);
  }, [updatePos]);

  const onPointerUp = useCallback(() => { dragging.current = false; }, []);

  return (
    <section className="bg-warm-ivory py-7 px-3.5 lg:bg-soft-stone lg:py-14 lg:px-0" aria-label="Real transformations">
      <ScrollReveal>
        {/* Mobile heading */}
        <div className="px-1.5 mb-5 lg:hidden">
          <p className="font-body font-semibold text-label tracking-[1.5px] uppercase text-terracotta mb-1.5">{label}</p>
          <p className="font-body text-inclusion text-warm-taupe leading-[1.5]">{subheading}</p>
        </div>

        {/* Desktop heading */}
        {desktopHeading && (
          <h3 className="hidden lg:block font-heading text-[22px] font-normal italic text-espresso text-center mb-7">
            {desktopHeading}
          </h3>
        )}

        {/* Slider container */}
        <div className="px-1.5 lg:px-0 lg:max-w-[700px] lg:mx-auto">
          <div className="border border-gold p-0.5 lg:border-[1.5px] lg:p-0">
            <div
              ref={containerRef}
              className="relative overflow-hidden touch-none select-none cursor-col-resize aspect-[3/4] lg:aspect-video"
              role="img"
              aria-label={`Before and after comparison for ${activeItem?.initials}`}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
            >
              {/* Before (full) */}
              <div className="absolute inset-0 bg-champagne flex items-center justify-center">
                <span className="text-caption text-warm-taupe italic">Before</span>
              </div>
              {/* After (clipped by slider) */}
              <div className="absolute inset-0 bg-warm-ivory flex items-center justify-center" style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}>
                <span className="text-caption text-warm-taupe italic">After</span>
              </div>

              {/* Gold line + drag handle */}
              <div className="absolute top-0 bottom-0 z-10" style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}>
                <div className="w-[3px] h-full bg-gold" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 lg:w-11 lg:h-11 rounded-full bg-white border-2 border-gold flex items-center justify-center shadow-[0_2px_8px_rgba(44,36,32,0.1)] cursor-grab active:cursor-grabbing"
                  title="Drag to compare">
                  <span className="text-gold text-tag lg:text-[14px] font-semibold select-none">⟷</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <p className="text-caption lg:text-[13px] text-warm-taupe italic text-center mt-2.5 lg:mt-3 px-1">{activeItem?.caption}</p>

        {/* Thumbnail selectors */}
        <div className="flex justify-center gap-3.5 lg:gap-3 mt-[18px] lg:mt-4 px-1.5" role="group" aria-label="Select transformation">
          {items.map((item, i) => {
            const isActive = i === activeIndex;
            return (
              <div key={i} className="flex flex-col items-center">
                <button
                  onClick={() => { setActiveIndex(i); setSliderPos(50); }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                    isActive ? "bg-champagne border-2 border-gold" : "bg-soft-stone border-[1.5px] border-champagne"
                  }`}
                  aria-label={`View transformation for ${item.initials}`}
                  aria-pressed={isActive}
                >
                  <span className="font-body font-semibold text-[11px] text-warm-taupe">{item.initials}</span>
                </button>
                <span className={`text-badge mt-1 ${isActive ? "text-terracotta font-semibold" : "text-warm-taupe"}`}>
                  {isActive ? activeLabel : inactiveLabel}
                </span>
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
}
