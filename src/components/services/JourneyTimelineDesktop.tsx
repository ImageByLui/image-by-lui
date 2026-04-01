"use client";

import type { JourneyComponentData } from "@/types/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

// =============================================================================
// JourneyTimelineDesktop — Image by LUI (LUI-DESK-004 §4.4)
// =============================================================================
// Desktop-only (hidden below lg:). Vertical timeline with gold line, numbered
// circles, 3-column grid (48px number | 1fr content | 220px image).
// Component 4 has embedded photo session options inside its content card.
// =============================================================================

interface PhotoEmbedOption {
  title: string;
  price: string;
  description: string;
}

interface JourneyTimelineDesktopProps {
  heading: string;
  subheading: string;
  components: JourneyComponentData[];
  images: string[];
  photoEmbed: {
    label: string;
    options: PhotoEmbedOption[];
  };
}

export default function JourneyTimelineDesktop({
  heading, subheading, components, images, photoEmbed,
}: JourneyTimelineDesktopProps) {
  return (
    <section className="hidden lg:block bg-warm-ivory py-20" aria-label="Your journey">
      <div className="max-w-[1200px] mx-auto px-12">
        <ScrollReveal>
          <h2 className="font-heading text-[28px] font-normal text-espresso text-center mb-1.5">{heading}</h2>
          <p className="text-[14px] text-warm-taupe text-center mb-14">{subheading}</p>
        </ScrollReveal>

        {/* Timeline container with gold vertical line */}
        <div className="relative max-w-[920px] mx-auto" style={{ paddingLeft: 0 }}>
          {/* Gold vertical line — aligned to center of number circles (left: 24px) */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-gold/25"
            style={{ left: 23 }}
            aria-hidden="true"
          />

          {components.map((comp, i) => {
            const isLast = i === components.length - 1;
            return (
              <ScrollReveal key={comp.stepNumber} delay={i * 100} className={isLast ? "" : "mb-10"}>
                <div className="grid gap-5 relative" style={{ gridTemplateColumns: "48px 1fr 220px" }}>
                  {/* Number circle */}
                  <div className="flex justify-center pt-6">
                    <div className="w-12 h-12 rounded-full bg-terracotta text-white flex items-center justify-center relative z-[2] shrink-0">
                      <span className="font-heading text-[22px] font-semibold leading-none">{comp.stepNumber}</span>
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="bg-white border border-champagne p-6 px-7 transition-colors duration-300 hover:border-gold">
                    <h3 className="font-heading text-[22px] font-semibold italic text-espresso mb-1">{comp.name}</h3>
                    <p className="text-[11px] text-warm-taupe mb-2.5">
                      {comp.duration} · {comp.subtitle}
                    </p>
                    <p className="text-[14px] text-warm-grey leading-[1.55] mb-3">{comp.description}</p>

                    {/* Inclusions */}
                    <ul className="list-none p-0 m-0 mb-3">
                      {comp.inclusions.map((item, j) => (
                        <li key={j} className="text-[13px] text-warm-grey leading-[1.45] pl-5 py-[5px] relative">
                          <span className="absolute left-0 text-gold text-[13px] font-semibold" aria-hidden="true">✓</span>
                          {item.key} — {item.detail}
                        </li>
                      ))}
                    </ul>

                    {/* "You receive:" line */}
                    <p className="text-[12px] text-terracotta font-medium italic">{comp.deliverableLine}</p>

                    {/* Photo session options — embedded in Component 4 only */}
                    {isLast && (
                      <div className="mt-4 pt-4 border-t border-champagne/30">
                        <p className="text-[11px] font-semibold tracking-[1.2px] uppercase text-warm-taupe mb-3">
                          {photoEmbed.label}
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                          {photoEmbed.options.map((opt, k) => (
                            <div key={k} className="bg-warm-ivory border border-champagne/25 p-3.5 text-center">
                              <p className="font-heading text-[15px] font-normal italic text-espresso mb-0.5">{opt.title}</p>
                              <p className="text-[13px] font-semibold text-terracotta mb-1">{opt.price}</p>
                              <p className="text-[11px] text-warm-grey">{opt.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Image column */}
                  <div className="overflow-hidden border border-champagne self-stretch min-h-[200px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={images[i] || ""}
                      alt={comp.imageAlt}
                      className="w-full h-full object-cover"
                      style={{ filter: "saturate(0.5) sepia(0.12) brightness(1.0)" }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
