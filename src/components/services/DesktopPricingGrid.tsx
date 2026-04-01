import ScrollReveal from "@/components/ui/ScrollReveal";
import { getCalendlyTierUrl } from "@/config/site.config";

// =============================================================================
// DesktopPricingGrid — Image by LUI (LUI-DESK-003 §3.4)
// =============================================================================
// Desktop-only (hidden below lg:). 3-column comparison grid with equal-height
// cards via flex column + margin-top:auto on CTA. Hover: lift + gold border.
// Complete tier: gold border, floating "Recommended" badge, gold CTA button.
// =============================================================================

interface DesktopPricingTier {
  name: string;
  price: string;
  duration: string;
  description: string;
  inclusions: string[];
  ctaText: string;
  variant: "essential" | "complete" | "vip";
  badge?: string;
  ctaStyle?: "terracotta" | "gold";
}

interface DesktopPricingGridProps {
  heading: string;
  subheading: string;
  tiers: DesktopPricingTier[];
}

const TIER_PARAMS: Record<string, "essential" | "complete" | "vip"> = {
  essential: "essential",
  complete: "complete",
  vip: "vip",
};

export default function DesktopPricingGrid({ heading, subheading, tiers }: DesktopPricingGridProps) {
  return (
    <section className="hidden lg:block bg-warm-ivory py-20" aria-label="Pricing">
      <div className="max-w-[1200px] mx-auto px-12">
        <ScrollReveal>
          <h2 className="font-heading text-[28px] font-normal text-espresso text-center mb-1.5">{heading}</h2>
          <p className="text-[14px] text-warm-taupe text-center mb-12">{subheading}</p>
        </ScrollReveal>

        <div className="grid grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, i) => {
            const isComplete = tier.variant === "complete";
            const tierKey = TIER_PARAMS[tier.variant] || "essential";
            const tierHref = getCalendlyTierUrl(tierKey);
            const ctaBase = "block w-full text-center font-body font-semibold text-[length:var(--lui-fs-cta)] tracking-[1.5px] uppercase py-[15px] no-underline hover:no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)]";
            const ctaCls = tier.ctaStyle === "gold"
              ? `${ctaBase} bg-gold text-white hover:bg-[#B08A4E]`
              : `${ctaBase} bg-terracotta text-white hover:bg-terracotta-dark`;

            return (
              <ScrollReveal key={tier.name} delay={i * 100}>
                <div
                  className={`relative bg-white flex flex-col p-8 pt-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(44,36,32,0.06)] hover:border-gold ${
                    isComplete ? "border-[1.5px] border-gold" : "border border-champagne"
                  }`}
                  style={{ height: "100%" }}
                >
                  {/* Recommended badge */}
                  {tier.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white font-body text-[9px] font-semibold tracking-[1.5px] uppercase px-4 py-1 whitespace-nowrap z-[2]">
                      {tier.badge}
                    </span>
                  )}

                  {/* Tier name */}
                  <h3 className="font-heading text-[22px] font-normal italic text-espresso mb-1">{tier.name}</h3>
                  {/* Price */}
                  <p className="font-heading text-[32px] font-semibold text-terracotta mb-0.5">{tier.price}</p>
                  {/* Duration */}
                  <p className="text-[12px] text-warm-taupe mb-4">{tier.duration}</p>
                  {/* Description */}
                  <p className="text-[14px] text-warm-grey leading-[1.55] mb-5 pb-5 border-b border-champagne/30">{tier.description}</p>
                  {/* Inclusions */}
                  <ul className="list-none p-0 m-0 mb-6 flex-1">
                    {tier.inclusions.map((item, j) => (
                      <li key={j} className="text-[13px] text-warm-grey leading-[1.45] pl-5 py-[5px] relative">
                        <span className="absolute left-0 text-gold text-[13px] font-semibold" aria-hidden="true">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {/* CTA — pushed to bottom via flex-1 on inclusions */}
                  <a
                    href={tierHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ctaCls}
                  >
                    {tier.ctaText}
                  </a>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
