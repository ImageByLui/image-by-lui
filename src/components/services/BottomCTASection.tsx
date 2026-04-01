import ScrollReveal from "@/components/ui/ScrollReveal";

// =============================================================================
// BottomCTASection — Image by LUI (Desktop Overhaul — LUI-DESK-002 §2.7)
// =============================================================================
// Espresso background section wrapper.
// Mobile: py-9 px-5
// Desktop: py-20, content max-width 520px centered within 1200px container
// =============================================================================

interface BottomCTASectionProps {
  children: React.ReactNode;
}

export default function BottomCTASection({ children }: BottomCTASectionProps) {
  return (
    <section className="bg-espresso text-center py-9 px-5 lg:py-20" aria-label="Get started">
      <ScrollReveal>
        <div className="lg:max-w-[520px] lg:mx-auto">
          {children}
        </div>
      </ScrollReveal>
    </section>
  );
}
