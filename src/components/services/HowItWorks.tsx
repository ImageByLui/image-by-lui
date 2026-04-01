import type { ServiceProcessStep } from "@/types/content";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";
import ScrollReveal from "@/components/ui/ScrollReveal";

// =============================================================================
// HowItWorks — Image by LUI (Desktop Overhaul — LUI-DESK-003 §3.3)
// =============================================================================
// Mobile: vertical steps with gold left border + connecting thread + payoff image
// Desktop (≥1024px): horizontal 3-step layout, centered text, terra number circles
//   with 48px gold connecting lines between them. No image on desktop.
// =============================================================================

interface HowItWorksProps {
  label: string;
  steps: ServiceProcessStep[];
  imageAlt: string;
  /** Desktop overrides — heading text and shorter step descriptions */
  desktopHeading?: string;
  desktopSteps?: ServiceProcessStep[];
}

export default function HowItWorks({ label, steps, imageAlt, desktopHeading, desktopSteps }: HowItWorksProps) {
  const dSteps = desktopSteps ?? steps;
  const hasDesktop = !!desktopHeading;

  return (
    <section className={`bg-warm-ivory py-7 px-3.5 ${hasDesktop ? "lg:bg-soft-stone lg:py-16 lg:px-0" : ""}`} aria-label="How it works">
      {/* Mobile layout */}
      <div className={hasDesktop ? "lg:hidden" : ""}>
        <p className="font-body font-semibold text-label tracking-[1.5px] uppercase text-terracotta px-1.5 mb-5">{label}</p>
        <div className="px-1.5">
          {steps.map((step, i) => (
            <div key={i}>
              <div className="border-l-2 border-l-gold pl-5 pb-5 relative">
                <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-terracotta text-white flex items-center justify-center">
                  <span className="font-heading font-semibold text-inclusion leading-none">{i + 1}</span>
                </div>
                <div className="pt-0.5">
                  <h3 className="font-body font-semibold text-nav text-espresso mb-1.5">{step.title}</h3>
                  <p className="font-body text-card text-warm-grey leading-[1.55]">{step.description}</p>
                </div>
              </div>
              {i < steps.length - 1 && <div className="h-px bg-champagne ml-5 mb-3" aria-hidden="true" />}
            </div>
          ))}
        </div>
        <div className="mt-4 border border-gold p-0.5">
          <ImagePlaceholder alt={imageAlt} width={347} height={139} colorIndex={1} className="w-full" />
        </div>
      </div>

      {/* Desktop layout — horizontal steps */}
      {hasDesktop && (
        <div className="hidden lg:block max-w-[1200px] mx-auto px-12">
          <ScrollReveal>
            <h2 className="font-heading text-[28px] font-normal text-espresso text-center mb-11">{desktopHeading}</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid items-start" style={{ gridTemplateColumns: "1fr auto 1fr auto 1fr", gap: 0 }}>
              {dSteps.map((step, i) => (
                <div key={i} className="contents">
                  {/* Connecting gold line (before steps 2 and 3) */}
                  {i > 0 && (
                    <div className="flex items-start justify-center" style={{ marginTop: 22 }}>
                      <div className="w-12 h-[2px] bg-gold/50" aria-hidden="true" />
                    </div>
                  )}
                  {/* Step */}
                  <div className="text-center px-6">
                    <div className="w-11 h-11 rounded-full bg-terracotta text-white flex items-center justify-center mx-auto mb-3.5">
                      <span className="font-heading text-[20px] font-semibold leading-none">{i + 1}</span>
                    </div>
                    <h3 className="font-heading text-[24px] font-normal italic text-espresso mb-2 leading-[1.2]">{step.title}</h3>
                    <p className="text-[14px] text-warm-grey leading-[1.5]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      )}
    </section>
  );
}
