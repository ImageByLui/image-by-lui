import AccordionCard from "@/components/ui/AccordionCard";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";

interface JourneyComponentProps {
  stepNumber: number; name: string; duration: string; subtitle: string;
  description: string; imageAlt: string; image?: string;
  inclusions: { key: string; detail: string }[]; deliverableLine: string;
  defaultOpen?: boolean; isFirst?: boolean;
  isOpen?: boolean; onToggle?: () => void;
}

export default function JourneyComponent({
  stepNumber, name, duration, subtitle, description, imageAlt, image,
  inclusions, deliverableLine, defaultOpen = false, isFirst = false,
  isOpen, onToggle,
}: JourneyComponentProps) {
  const borderClasses = isFirst ? "border border-gold/50 border-t-[3px] border-t-gold" : "border border-gold/50";
  const summaryContent = (
    <div className="pt-5 px-5 pb-[18px] flex items-start gap-3.5">
      <span className="font-heading font-medium text-[length:var(--lui-fs-step-num)] text-terracotta leading-none shrink-0">{stepNumber}</span>
      <div className="flex-1 min-w-0">
        <p className="font-body font-semibold text-[length:var(--lui-fs-nav)] text-espresso mb-[3px]">{name}</p>
        <p className="font-body text-[length:var(--lui-fs-caption)] text-warm-taupe">{duration} · {subtitle}</p>
      </div>
      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-warm-taupe mt-1 shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden="true"><path d="M5 7.5L10 12.5L15 7.5" /></svg>
    </div>
  );

  return (
    <AccordionCard summary={summaryContent} defaultOpen={defaultOpen} borderClasses={borderClasses} className="mb-3 last:mb-0" isOpen={isOpen} onToggle={onToggle}>
      <div className="px-5 pb-[22px]">
        <div className="h-px bg-gold/30 mb-4" aria-hidden="true" />
        <div className="border border-gold p-0.5 mb-4 overflow-hidden">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} alt={imageAlt} className="w-full aspect-[3/2] object-cover" style={{ filter: "saturate(0.5) sepia(0.12) brightness(1.0)", objectPosition: "center 30%" }} />
          ) : (
            <ImagePlaceholder alt={imageAlt} width={300} height={120} colorIndex={1} className="w-full" />
          )}
        </div>
        <p className="font-body text-[length:var(--lui-fs-card)] text-warm-grey leading-[1.6] mb-4">{description}</p>
        <div className="h-px bg-gold/30 mb-3.5" aria-hidden="true" />
        <div>
          {inclusions.map((item, i) => (
            <p key={i} className="text-[length:var(--lui-fs-inclusion)] text-warm-grey leading-[1.7] pl-[18px] mb-[5px] relative">
              <span className="absolute left-0 text-gold font-semibold" aria-hidden="true">—</span>
              <strong className="text-espresso font-semibold">{item.key}</strong> — {item.detail}
            </p>
          ))}
        </div>
        <p className="font-heading font-light italic text-[length:var(--lui-fs-inclusion)] text-gold mt-3.5">{deliverableLine}</p>
      </div>
    </AccordionCard>
  );
}
