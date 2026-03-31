import AccordionCard from "@/components/ui/AccordionCard";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";

// =============================================================================
// JourneyComponent — Image by LUI (Image Consulting)
// =============================================================================
// A single journey step rendered as an accordion using AccordionCard base.
// Summary: step number + name + subtitle/duration + chevron.
// Body: gold separator + gold-framed image + description + separator +
//       bold-key inclusions with gold dash + italic gold deliverable line.
//
// Used on: Image Consulting page (×4, one per journey component).
// Part B will provide exact measurements.
// =============================================================================

interface JourneyComponentProps {
  stepNumber: number;
  name: string;
  duration: string;
  subtitle: string;
  description: string;
  imageAlt: string;
  inclusions: { key: string; detail: string }[];
  deliverableLine: string;
  defaultOpen?: boolean;
  /** First component gets 3px gold top accent */
  isFirst?: boolean;
}

export default function JourneyComponent({
  stepNumber,
  name,
  duration,
  subtitle,
  description,
  imageAlt,
  inclusions,
  deliverableLine,
  defaultOpen = false,
  isFirst = false,
}: JourneyComponentProps) {
  const borderClasses = isFirst
    ? "border border-gold/50 border-t-[3px] border-t-gold"
    : "border border-champagne/50";

  const summaryContent = (
    <div className="pt-5 px-5 pb-4">
      {/* Step number + name row */}
      <div className="flex items-baseline gap-3 mb-1">
        <span className="font-heading font-medium text-[28px] text-gold leading-none">
          {stepNumber}
        </span>
        <h3 className="font-heading font-medium text-[20px] text-espresso leading-tight">
          {name}
        </h3>
      </div>

      {/* Subtitle + duration + chevron */}
      <div className="flex justify-between items-center pl-[44px]">
        <p className="font-body text-[12px] text-warm-taupe">{subtitle}</p>
        <div className="flex items-center gap-1.5">
          <span className="font-body text-[11px] text-warm-taupe">{duration}</span>
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"
            className="text-warm-taupe transition-transform duration-200 group-open:rotate-180" aria-hidden="true">
            <path d="M5 7.5L10 12.5L15 7.5" />
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <AccordionCard
      summary={summaryContent}
      defaultOpen={defaultOpen}
      borderClasses={borderClasses}
      className="mb-3 last:mb-0"
    >
      <div className="px-5 pb-6">
        {/* Separator */}
        <div className="h-px bg-gold/40 mb-[18px]" aria-hidden="true" />

        {/* Gold-framed image */}
        <div className="border border-gold p-0.5 mb-[18px]">
          <ImagePlaceholder alt={imageAlt} width={300} height={120} colorIndex={1} className="w-full" />
        </div>

        {/* Description */}
        <p className="font-body text-[14px] text-warm-grey leading-[1.6] mb-[18px]">
          {description}
        </p>

        {/* Separator */}
        <div className="h-px bg-gold/30 mb-4" aria-hidden="true" />

        {/* Inclusions with bold key + gold dash */}
        <div className="mb-3">
          {inclusions.map((item, i) => (
            <p key={i} className="text-[13px] text-warm-grey leading-[1.7] pl-[18px] mb-[5px] relative">
              <span className="absolute left-0 text-gold font-semibold" aria-hidden="true">—</span>
              <span className="font-semibold text-espresso">{item.key}</span> — {item.detail}
            </p>
          ))}
        </div>

        {/* Deliverable line — italic gold */}
        <p className="font-heading font-light italic text-[13px] text-gold mt-3">
          {deliverableLine}
        </p>
      </div>
    </AccordionCard>
  );
}
