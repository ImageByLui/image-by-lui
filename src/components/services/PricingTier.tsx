import AccordionCard from "@/components/ui/AccordionCard";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";

/* V2: Supports controlled mode (isOpen/onToggle) for mutual exclusion.
   Falls back to uncontrolled (defaultOpen) if no controlled props. */
interface PricingTierProps {
  name: string; price: string; subtitle: string; duration: string; description: string;
  inclusions: string[]; ctaText: string; ctaHref: string;
  variant: "essential" | "complete" | "vip"; badge?: string; imageAlt?: string;
  footnote?: string; defaultOpen?: boolean;
  isOpen?: boolean; onToggle?: () => void;
}

const STYLES = {
  essential: { border: "border border-champagne/50", summaryPt: "pt-5", nameSize: "text-[22px]", priceSize: "text-[22px]", priceCls: "text-terracotta", separator: "bg-gold/40", cta: "bg-champagne text-espresso active:opacity-80" },
  complete: { border: "border-[1.5px] border-terracotta relative", summaryPt: "pt-[30px]", nameSize: "text-[24px]", priceSize: "text-[24px]", priceCls: "text-terracotta", separator: "bg-terracotta/20", cta: "bg-terracotta text-white active:bg-terracotta-dark active:scale-[0.98]" },
  vip: { border: "border border-gold/50 border-t-[3px] border-t-gold", summaryPt: "pt-5", nameSize: "text-[22px]", priceSize: "text-[22px]", priceCls: "text-gold", separator: "bg-gold", cta: "bg-gold/[0.12] text-espresso border border-gold active:bg-gold/20" },
} as const;

function Chevron() {
  return <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-warm-taupe transition-transform duration-200 group-open:rotate-180" aria-hidden="true"><path d="M5 7.5L10 12.5L15 7.5" /></svg>;
}

export default function PricingTier({
  name, price, subtitle, duration, description, inclusions, ctaText, ctaHref,
  variant, badge, imageAlt, footnote, defaultOpen = false, isOpen, onToggle,
}: PricingTierProps) {
  const s = STYLES[variant];
  const summaryContent = (
    <div className={`${s.summaryPt} px-5 pb-[18px]`}>
      {badge && <span className="absolute top-[-1px] left-5 bg-terracotta text-white font-body font-semibold text-[11px] tracking-[1.2px] uppercase px-3 py-1 z-[1]">{badge}</span>}
      <div className="flex justify-between items-start mb-2">
        <h3 className={`font-heading font-medium ${s.nameSize} text-espresso`}>{name}</h3>
        <span className={`font-body font-semibold ${s.priceSize} ${s.priceCls}`}>{price}</span>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-body text-[13px] text-warm-taupe">{subtitle}</p>
        <div className="flex items-center gap-1.5"><span className="font-body text-[12px] text-warm-taupe">{duration}</span><Chevron /></div>
      </div>
    </div>
  );

  return (
    <AccordionCard summary={summaryContent} defaultOpen={defaultOpen} borderClasses={s.border} className="mb-3 last:mb-0" isOpen={isOpen} onToggle={onToggle}>
      <div className="px-5 pb-6">
        <div className={`h-px ${s.separator} mb-[18px]`} aria-hidden="true" />
        {imageAlt && variant === "complete" && <div className="border border-gold p-0.5 mb-[18px]"><ImagePlaceholder alt={imageAlt} width={300} height={120} colorIndex={1} className="w-full" /></div>}
        <p className="font-body text-[15px] text-warm-grey leading-[1.6] mb-[18px]">{description}</p>
        <div className={`h-px ${s.separator} opacity-75 mb-4`} aria-hidden="true" />
        <div className="mb-0">
          {inclusions.map((item, i) => <p key={i} className="text-[14px] text-warm-grey leading-[1.7] pl-[18px] mb-[5px] relative"><span className="absolute left-0 text-gold font-semibold" aria-hidden="true">—</span>{item}</p>)}
        </div>
        {footnote && <p className="font-heading font-light italic text-[13px] text-gold mt-3.5">{footnote}</p>}
        <a href={ctaHref} target="_blank" rel="noopener noreferrer" className={`block text-center font-body font-semibold text-[14px] tracking-[1.5px] uppercase py-[15px] mt-[22px] no-underline hover:no-underline transition-all duration-150 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${s.cta}`}>{ctaText}</a>
      </div>
    </AccordionCard>
  );
}
