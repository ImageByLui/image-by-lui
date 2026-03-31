"use client";
import { useState } from "react";
import type { PricingTierData } from "@/types/content";
import PricingTier from "@/components/services/PricingTier";
import { getCalendlyTierUrl } from "@/config/site.config";

/* V2 fix 4c: Mutual exclusion — opening one tier closes others.
   V2 fix 4d: Tier-specific Calendly URLs with ?a1= param. */
interface PricingSectionProps {
  label: string;
  subheading: string;
  tiers: PricingTierData[];
  ariaLabel?: string;
}

const TIER_PARAMS: Record<string, "essential" | "complete" | "vip"> = {
  essential: "essential",
  complete: "complete",
  vip: "vip",
};

export default function PricingSection({ label, subheading, tiers, ariaLabel = "Pricing" }: PricingSectionProps) {
  // Complete tier (index 1) open by default
  const [openTier, setOpenTier] = useState<number>(1);

  return (
    <section className="bg-soft-stone pt-7 px-3.5 pb-7" aria-label={ariaLabel}>
      <p className="font-body font-semibold text-label tracking-[1.5px] uppercase text-terracotta px-1.5 mb-1.5">{label}</p>
      <p className="font-body text-inclusion text-warm-taupe leading-[1.5] px-1.5 mb-[22px]">{subheading}</p>
      {tiers.map((tier: PricingTierData, i: number) => {
        const tierKey = TIER_PARAMS[tier.variant] || "essential";
        const tierHref = getCalendlyTierUrl(tierKey);
        return (
          <PricingTier
            key={tier.name}
            {...tier}
            ctaHref={tierHref}
            isOpen={openTier === i}
            onToggle={() => setOpenTier(openTier === i ? -1 : i)}
          />
        );
      })}
    </section>
  );
}
