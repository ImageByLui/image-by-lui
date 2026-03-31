// =============================================================================
// BottomCTASection — Image by LUI
// =============================================================================
// Layout wrapper for bottom CTA sections across all service pages.
// Renders: espresso background + centered padding. All heading, description,
// buttons, and links are rendered by the page file as children.
//
// Replaces the old prop-driven ServicesBottomCTA component, which couldn't
// accommodate 3 different CTA patterns (Overview, Occasion, Image Consulting).
//
// Used on: Services Overview, Occasion Styling, Image Consulting.
// =============================================================================

interface BottomCTASectionProps {
  children: React.ReactNode;
}

export default function BottomCTASection({ children }: BottomCTASectionProps) {
  return (
    <section className="bg-espresso text-center py-9 px-5" aria-label="Get started">
      {children}
    </section>
  );
}
