"use client";

import { useRef, useEffect } from "react";
import type { ServiceTier } from "@/types/content";
import Link from "next/link";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";
import ScrollReveal from "@/components/ui/ScrollReveal";

// =============================================================================
// ServicesTierCards — Image by LUI (V5)
// =============================================================================
// Renders the two paid tiers side-by-side on desktop, stacked on mobile.
// Linked accordion: opening one "What's included" closes the other.
// Cards use align-items: start so expanding one doesn't create void in other.
// =============================================================================

interface ServicesTierCardsProps {
  tiers: ServiceTier[];
}

export default function ServicesTierCards({ tiers }: ServicesTierCardsProps) {
  const detailsRefs = useRef<(HTMLDetailsElement | null)[]>([]);

  // Linked accordion — only one open at a time
  useEffect(() => {
    const details = detailsRefs.current.filter(Boolean) as HTMLDetailsElement[];
    const handlers = details.map((el, i) => {
      const handler = () => {
        if (el.open) {
          details.forEach((other, j) => {
            if (j !== i) other.removeAttribute("open");
          });
        }
      };
      el.addEventListener("toggle", handler);
      return { el, handler };
    });

    return () => {
      handlers.forEach(({ el, handler }) => {
        el.removeEventListener("toggle", handler);
      });
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-start">
      {tiers.map((tier, i) => {
        const isSignature = i === 1;
        return (
          <ScrollReveal key={tier.anchor} delay={i * 100}>
            <div
              id={tier.anchor}
              className={`lui-card bg-white border border-soft-stone overflow-hidden flex flex-col ${
                isSignature ? "border-t-[3px] border-t-gold" : ""
              }`}
            >
              {/* Image placeholder */}
              <ImagePlaceholder
                alt={tier.imageAlt || tier.name}
                width={800}
                height={350}
                colorIndex={isSignature ? 1 : 0}
                className="w-full aspect-[16/7] object-cover"
              />

              <div className="p-5 md:p-7 flex flex-col flex-1">
                {/* Badge area — fixed height for cross-card alignment */}
                <div className="h-[22px] flex items-end mb-1">
                  {tier.badge && (
                    <span className={`font-body font-semibold text-[10px] md:text-[11px] tracking-[2px] uppercase ${
                      isSignature ? "text-gold" : "text-warm-taupe"
                    }`}>
                      {tier.badge}
                    </span>
                  )}
                </div>

                {/* Name + Price */}
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-heading font-medium text-[20px] md:text-[26px] text-espresso">
                    {tier.name}
                  </h3>
                  <span className="font-body font-semibold text-[18px] md:text-[22px] text-espresso whitespace-nowrap">
                    {tier.price}
                  </span>
                </div>

                {/* Divider */}
                <div className={`w-8 h-[1px] my-3 ${isSignature ? "bg-gold" : "bg-terracotta"}`} />

                {/* Positioning line */}
                {tier.positioningLine && (
                  <p className="font-heading italic text-warm-taupe text-[15px] md:text-[17px] mb-3">
                    {tier.positioningLine}
                  </p>
                )}

                {/* Outcome-led description */}
                <p className="text-warm-grey text-[15px] md:text-[16px] leading-relaxed mb-4">
                  {tier.outcomeText && (
                    <strong className="text-espresso">{tier.outcomeText} </strong>
                  )}
                  {tier.description}
                </p>

                {/* Value callout (signature tier) */}
                {tier.valueCallout && (
                  <div className={`p-3 mb-4 ${
                    isSignature
                      ? "bg-gold/10 border-l-[3px] border-l-gold"
                      : "bg-champagne"
                  }`}>
                    <p className="font-body font-semibold text-espresso text-[13px] md:text-[14px]">
                      {tier.valueCallout}
                    </p>
                  </div>
                )}

                {/* Summary line (always visible) */}
                {tier.summaryLine && (
                  <p className="font-body font-medium text-espresso text-[13px] md:text-[14px] mb-3">
                    {tier.summaryLine}
                  </p>
                )}

                {/* Collapsible inclusions */}
                <details
                  ref={(el) => { detailsRefs.current[i] = el; }}
                  className="group mb-4"
                >
                  <summary className="font-body font-semibold text-terracotta text-[14px] md:text-[15px] flex items-center gap-2 cursor-pointer list-none py-1">
                    <span className="text-[18px] leading-none">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">&minus;</span>
                    </span>
                    What&apos;s included
                  </summary>
                  <div className="pt-3 pl-6">
                    <ul className="space-y-1">
                      {tier.inclusions.map((item, j) => (
                        <li
                          key={j}
                          className="text-warm-grey text-[14px] md:text-[15px] leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-terracotta mt-0.5 shrink-0">&#10003;</span>
                          {item.text}
                        </li>
                      ))}
                    </ul>
                    {tier.duration && (
                      <p className="font-body text-[12px] md:text-[13px] text-warm-taupe mt-2">
                        {tier.duration}
                      </p>
                    )}
                  </div>
                </details>

                {/* CTA — text link on mobile, full button on desktop */}
                <div className="mt-auto">
                  <div className="md:hidden">
                    <Link
                      href={tier.cta.href || "#"}
                      className="font-body font-semibold text-terracotta text-[14px] tracking-[0.5px] no-underline hover:underline"
                    >
                      {tier.cta.text} →
                    </Link>
                  </div>
                  <div className="hidden md:block">
                    <Button
                      href={tier.cta.href}
                      external={tier.cta.external}
                      className="w-full"
                    >
                      {tier.cta.text}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
