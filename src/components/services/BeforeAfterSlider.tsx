"use client";
import { useState, useRef, useCallback } from "react";
import type { TransformationData } from "@/types/content";

/* V2: Interactive drag-to-reveal slider using touch/mouse events.
   Custom implementation (react-compare-slider fallback per spec 5a). */
interface BeforeAfterSliderProps {
  label: string; subheading: string; items: TransformationData[];
  activeLabel?: string; inactiveLabel?: string;
}

export default function BeforeAfterSlider({ label, subheading, items, activeLabel = "Active", inactiveLabel = "Tap" }: BeforeAfterSliderProps) {
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
    <section className="bg-warm-ivory py-7 px-3.5" aria-label="Real transformations">
      <div className="px-1.5 mb-5">
        <p className="font-body font-semibold text-label tracking-[1.5px] uppercase text-terracotta mb-1.5">{label}</p>
        <p className="font-body text-inclusion text-warm-taupe leading-[1.5]">{subheading}</p>
      </div>
      <div className="px-1.5">
        <div className="border border-gold p-0.5">
          <div ref={containerRef} className="relative overflow-hidden touch-none select-none" style={{ aspectRatio: "3/4" }}
            role="img" aria-label={`Before and after comparison for ${activeItem?.initials}`}
            onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp}>
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
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border-2 border-gold flex items-center justify-center shadow-[0_2px_8px_rgba(44,36,32,0.15)] cursor-grab active:cursor-grabbing"
                title="Drag to compare">
                <span className="text-gold text-tag font-semibold select-none">⟷</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-caption text-warm-taupe italic text-center mt-2.5 px-1">{activeItem?.caption}</p>
      <div className="flex justify-center gap-3.5 mt-[18px] px-1.5" role="group" aria-label="Select transformation">
        {items.map((item, i) => {
          const isActive = i === activeIndex;
          return (
            <div key={i} className="flex flex-col items-center">
              <button onClick={() => setActiveIndex(i)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${isActive ? "bg-champagne border-2 border-gold" : "bg-soft-stone border-[1.5px] border-champagne"}`}
                aria-label={`View transformation for ${item.initials}`} aria-pressed={isActive}>
                <span className="font-body font-semibold text-tag text-warm-taupe">{item.initials}</span>
              </button>
              <span className={`text-badge mt-1 ${isActive ? "text-terracotta font-semibold" : "text-warm-taupe"}`}>{isActive ? activeLabel : inactiveLabel}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
