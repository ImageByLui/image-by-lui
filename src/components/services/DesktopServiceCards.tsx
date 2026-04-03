"use client";

import Link from "next/link";
import type { DesktopServiceCardData } from "@/types/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

// =============================================================================
// DesktopServiceCards — Image by LUI (LUI-DESK-002 §2.4)
// =============================================================================
// Desktop-only (hidden below lg:). Two side-by-side photography cards:
//   - Occasion Styling (left): champagne border, white inner frame
//   - Image Consulting (right): gold border, gold inner frame, top accent bar
//
// Each card: clickable, aspect-ratio 3:2 visual with overlay + inner frame +
// hover zoom. Below: context paragraph, ✦ inclusions list, price/link row.
// =============================================================================

interface DesktopServiceCardsProps {
  heading: string;
  cards: DesktopServiceCardData[];
}

function OccasionCard({ card }: { card: DesktopServiceCardData }) {
  return (
    <Link href={card.linkHref} className="group/card no-underline hover:no-underline block h-full">
      <div className="bg-white border border-champagne transition-all duration-[450ms] ease-out cursor-pointer hover:-translate-y-2 hover:border-gold hover:shadow-[0_24px_56px_rgba(44,36,32,0.08)] overflow-hidden flex flex-col h-full">
        {/* Visual area */}
        <div className="relative aspect-[3/2] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover/card:scale-105"
            style={{ objectPosition: card.imagePosition, filter: "saturate(0.75) sepia(0.04) brightness(1.02)" }}
          />
          {/* Dark gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-[55%] pointer-events-none" style={{ background: "linear-gradient(to top, rgba(44,36,32,0.55) 0%, rgba(44,36,32,0.1) 60%, transparent 100%)" }} aria-hidden="true" />
          {/* Inner frame */}
          <div className="absolute inset-3 border border-white/20 z-[2] transition-all duration-[400ms] group-hover/card:inset-2 group-hover/card:border-white/40 pointer-events-none" aria-hidden="true" />
          {/* Category label */}
          <span className="absolute top-[22px] left-[22px] z-[3] font-body text-[9px] font-semibold tracking-[1.8px] uppercase px-3 py-[5px] text-white/85" style={{ background: "rgba(44,36,32,0.45)", backdropFilter: "blur(4px)" }}>
            {card.label}
          </span>
          {/* Title overlay */}
          <span className="absolute bottom-7 left-6 right-6 z-[3] font-heading font-normal italic text-[36px] text-white leading-[1.1]" style={{ textShadow: "0 2px 8px rgba(44,36,32,0.2)" }}>
            {card.title}
          </span>
        </div>

        {/* Info area */}
        <div className="p-6 pt-6 flex-1 flex flex-col">
          <p className="text-[14px] text-warm-grey leading-[1.6] mb-3">{card.description}</p>
          <ul className="list-none p-0 m-0 mb-3">
            {card.inclusions.map((item, i) => (
              <li key={i} className="text-[13px] text-warm-grey leading-[1.45] pl-4 py-1 relative">
                <span className="absolute left-0 top-[6px] text-gold text-[10px]" aria-hidden="true">✦</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[12px] text-warm-taupe tracking-[0.2px] mb-auto pb-4" dangerouslySetInnerHTML={{ __html: card.detailLine.replace(/\*\*(.*?)\*\*/g, '<strong class="text-espresso font-semibold">$1</strong>') }} />
          <div className="flex items-start justify-between border-t border-champagne/30 pt-4">
            <span className="text-[16px] font-medium text-terracotta">{card.price}</span>
            <span className="text-[13px] font-medium text-terracotta relative group-hover/card:after:w-full after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-terracotta after:transition-[width] after:duration-300">
              {card.linkText}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function PremiumCard({ card }: { card: DesktopServiceCardData }) {
  return (
    <Link href={card.linkHref} className="group/card no-underline hover:no-underline block h-full">
      <div className="relative border-[1.5px] border-gold transition-all duration-[450ms] ease-out cursor-pointer hover:-translate-y-2 hover:shadow-[0_24px_56px_rgba(196,154,92,0.12)] overflow-hidden flex flex-col h-full" style={{ background: "linear-gradient(180deg, rgba(196,154,92,0.04) 0%, white 30%)" }}>
        {/* Gold top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold z-[5]" aria-hidden="true" />

        {/* Visual area */}
        <div className="relative aspect-[3/2] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover/card:scale-105"
            style={{ objectPosition: card.imagePosition, filter: "saturate(0.75) sepia(0.04) brightness(1.02)" }}
          />
          {/* Dark gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-[55%] pointer-events-none" style={{ background: "linear-gradient(to top, rgba(44,36,32,0.6) 0%, rgba(44,36,32,0.15) 60%, transparent 100%)" }} aria-hidden="true" />
          {/* Gold inner frame */}
          <div className="absolute inset-3 border border-gold/30 z-[2] transition-all duration-[400ms] group-hover/card:inset-2 group-hover/card:border-gold/60 pointer-events-none" aria-hidden="true" />
          {/* Gold corner accent */}
          <div className="absolute top-3 right-3 w-9 h-9 border-t-[1.5px] border-r-[1.5px] border-gold z-[3] opacity-50 transition-opacity duration-[400ms] group-hover/card:opacity-100 pointer-events-none" aria-hidden="true" />
          {/* Category label */}
          <span className="absolute top-[22px] left-[22px] z-[3] font-body text-[9px] font-semibold tracking-[1.8px] uppercase px-3 py-[5px] text-white/85" style={{ background: "rgba(44,36,32,0.45)", backdropFilter: "blur(4px)" }}>
            {card.label}
          </span>
          {/* Title overlay */}
          <span className="absolute bottom-7 left-6 right-6 z-[3] font-heading font-medium italic text-[40px] text-white leading-[1.1]" style={{ textShadow: "0 2px 12px rgba(44,36,32,0.3)" }}>
            {card.title}
          </span>
        </div>

        {/* Info area */}
        <div className="p-6 pt-6 flex-1 flex flex-col">
          <p className="text-[14px] text-warm-grey leading-[1.6] mb-3">{card.description}</p>
          <ul className="list-none p-0 m-0 mb-3">
            {card.inclusions.map((item, i) => (
              <li key={i} className="text-[13px] text-warm-grey leading-[1.45] pl-4 py-1 relative">
                <span className="absolute left-0 top-[6px] text-gold text-[10px]" aria-hidden="true">✦</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[12px] text-warm-taupe tracking-[0.2px] mb-auto pb-4" dangerouslySetInnerHTML={{ __html: card.detailLine.replace(/\*\*(.*?)\*\*/g, '<strong class="text-espresso font-semibold">$1</strong>') }} />
          <div className="flex items-start justify-between border-t border-champagne/30 pt-4">
            <div className="flex items-baseline gap-2">
              <span className="text-[16px] font-medium text-terracotta">{card.price}</span>
              {card.priceStrikethrough && (
                <span className="text-[12px] text-warm-taupe line-through">{card.priceStrikethrough}</span>
              )}
            </div>
            <span className="text-[13px] font-medium text-terracotta relative group-hover/card:after:w-full after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-terracotta after:transition-[width] after:duration-300">
              {card.linkText}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function DesktopServiceCards({ heading, cards }: DesktopServiceCardsProps) {
  const occasionCard = cards.find((c) => c.variant === "occasion");
  const premiumCard = cards.find((c) => c.variant === "premium");

  return (
    <section className="hidden lg:block bg-warm-ivory pt-16 pb-16" aria-label="Our services">
      <div className="max-w-[1200px] mx-auto px-12">
        <ScrollReveal>
          <h2 className="font-heading text-[32px] font-normal text-espresso text-center mb-[52px]">{heading}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-10 items-stretch">
          {occasionCard && (
            <ScrollReveal className="h-full">
              <OccasionCard card={occasionCard} />
            </ScrollReveal>
          )}
          {premiumCard && (
            <ScrollReveal delay={150} className="h-full">
              <PremiumCard card={premiumCard} />
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
