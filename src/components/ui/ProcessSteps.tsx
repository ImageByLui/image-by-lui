// =============================================================================
// ProcessSteps Component — Image by LUI
// =============================================================================
// "How It Works" — 3 numbered steps.
// Desktop: 3 columns with thin terracotta connecting line between steps.
// Mobile: Vertical stack with connecting line on the left.
// Step number: Cormorant Garamond 48px, Terracotta.
// =============================================================================

interface Step {
  number: number;
  heading: string;
  body: string;
}

interface ProcessStepsProps {
  heading: string;
  steps: Step[];
}

export default function ProcessSteps({ heading, steps }: ProcessStepsProps) {
  return (
    <div>
      <h2 className="text-center mb-10 md:mb-12">{heading}</h2>

      {/* Desktop: 3 columns */}
      <div className="hidden md:grid grid-cols-3 gap-8 max-w-5xl mx-auto relative">
        {/* Connecting line behind the step numbers */}
        <div
          className="absolute top-[28px] left-[16.67%] right-[16.67%] h-[1px] bg-terracotta/30"
          aria-hidden="true"
        />

        {steps.map((step) => (
          <div key={step.number} className="text-center relative">
            <span className="font-heading text-[48px] text-terracotta leading-none inline-block mb-4 relative bg-warm-ivory px-3">
              {step.number}
            </span>
            <h3 className="mb-3">{step.heading}</h3>
            <p className="text-warm-grey leading-relaxed text-[15px]">
              {step.body}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile: Vertical stack with left line */}
      <div className="md:hidden relative pl-10 max-w-lg mx-auto">
        {/* Vertical connecting line */}
        <div
          className="absolute left-[14px] top-4 bottom-4 w-[1px] bg-terracotta/30"
          aria-hidden="true"
        />

        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              {/* Step number circle */}
              <span className="absolute -left-10 top-0 font-heading text-[36px] text-terracotta leading-none bg-warm-ivory pr-2">
                {step.number}
              </span>
              <h3 className="mb-2">{step.heading}</h3>
              <p className="text-warm-grey leading-relaxed text-[15px]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
