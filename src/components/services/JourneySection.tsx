"use client";
import { useState } from "react";
import type { JourneyComponentData } from "@/types/content";
import JourneyComponent from "@/components/services/JourneyComponent";

interface JourneySectionProps {
  label: string;
  subheading: string;
  components: JourneyComponentData[];
}

export default function JourneySection({ label, subheading, components }: JourneySectionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);
  return (
    <section className="bg-warm-ivory py-7 px-3.5" aria-label="Your journey">
      <p className="font-body font-semibold text-[length:var(--lui-fs-label)] tracking-[1.5px] uppercase text-terracotta px-1.5 mb-1.5">{label}</p>
      {/* V2: subheading bumped to 15px (card size) — was 13px caption, too small */}
      <p className="font-body text-[length:var(--lui-fs-card)] text-warm-taupe leading-[1.5] px-1.5 mb-[22px]">{subheading}</p>
      {components.map((comp, i) => (
        <JourneyComponent key={comp.stepNumber} {...comp} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} isFirst={i === 0} />
      ))}
    </section>
  );
}
