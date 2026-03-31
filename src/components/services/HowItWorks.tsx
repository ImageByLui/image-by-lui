import type { ServiceProcessStep } from "@/types/content";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";

// =============================================================================
// HowItWorks — Image by LUI (Occasion Styling)
// =============================================================================
// Two-column layout: number track (left) + step text (right).
// Numbers connected by gold lines that stretch via flex-1.
// CRITICAL: numbers must vertically align with step titles.
// =============================================================================

interface HowItWorksProps {
  label: string;
  steps: ServiceProcessStep[];
  imageAlt: string;
}

export default function HowItWorks({ label, steps, imageAlt }: HowItWorksProps) {
  return (
    <section
      className="bg-warm-ivory border-t border-champagne/50 px-5 pb-8"
      aria-label="How it works"
    >
      {/* 2a. Section label */}
      <p className="pt-7 font-body font-semibold text-[10px] tracking-[1.5px] uppercase text-terracotta mb-[26px]">
        {label}
      </p>

      {/* 2b. Steps — two-column flex */}
      <div className="flex gap-[18px]">
        {/* Left column — number track */}
        <div className="flex flex-col items-center w-9 shrink-0">
          {steps.map((_, i) => (
            <div key={i} className="flex flex-col items-center flex-1">
              <span className="font-heading font-medium text-[36px] text-terracotta leading-none">
                {i + 1}
              </span>
              {i < steps.length - 1 && (
                <div className="w-[1.5px] flex-1 bg-gold/40 my-2.5" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        {/* Right column — step text */}
        <div className="flex-1 flex flex-col justify-between">
          {steps.map((step, i) => (
            <div key={i} className={i < steps.length - 1 ? "pb-[26px]" : ""}>
              <p className="font-body font-semibold text-[15px] text-espresso mb-1">
                {step.title}
              </p>
              <p className="font-body text-[13px] text-warm-taupe leading-[1.5]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2c. Image below steps */}
      <div className="mt-[26px] border border-gold p-0.5">
        <ImagePlaceholder
          alt={imageAlt}
          width={335}
          height={134}
          colorIndex={1}
          className="w-full"
        />
      </div>
    </section>
  );
}
