import type { ServiceProcessStep } from "@/types/content";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";

/* V2: Complete visual rebuild. Gold left border per step as connecting thread,
   terracotta number circles, champagne dividers between steps, wider payoff image. */
interface HowItWorksProps {
  label: string;
  steps: ServiceProcessStep[];
  imageAlt: string;
}

export default function HowItWorks({ label, steps, imageAlt }: HowItWorksProps) {
  return (
    <section className="bg-warm-ivory py-7 px-3.5" aria-label="How it works">
      <p className="font-body font-semibold text-[11px] tracking-[1.5px] uppercase text-terracotta px-1.5 mb-5">{label}</p>

      {/* Steps with gold left border thread */}
      <div className="px-1.5">
        {steps.map((step, i) => (
          <div key={i}>
            <div className="border-l-2 border-l-gold pl-5 pb-5 relative">
              {/* Terracotta number circle at top of gold border */}
              <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-terracotta text-white flex items-center justify-center">
                <span className="font-heading font-semibold text-[14px] leading-none">{i + 1}</span>
              </div>
              <div className="pt-0.5">
                <h3 className="font-body font-semibold text-[16px] text-espresso mb-1.5">{step.title}</h3>
                <p className="font-body text-[15px] text-warm-grey leading-[1.55]">{step.description}</p>
              </div>
            </div>
            {/* Champagne divider between steps */}
            {i < steps.length - 1 && <div className="h-px bg-champagne ml-5 mb-3" aria-hidden="true" />}
          </div>
        ))}
      </div>

      {/* V2: Payoff image — wider than step blocks (px-3.5 vs steps px-5) */}
      <div className="mt-4 border border-gold p-0.5">
        <ImagePlaceholder alt={imageAlt} width={347} height={139} colorIndex={1} className="w-full" style={{ aspectRatio: "2.5/1" }} />
      </div>
    </section>
  );
}
