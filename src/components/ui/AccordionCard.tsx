// =============================================================================
// AccordionCard — Image by LUI
// =============================================================================
// Shared base for all expandable card components (PricingTier, JourneyComponent).
// Handles: <details>/<summary> wrapper, marker removal, chevron rotation via
// group-open, :active scale feedback, bg-white, overflow-hidden.
//
// Summary and children are passed through — calling components control visuals.
// =============================================================================

interface AccordionCardProps {
  summary: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  /** Tailwind border classes, e.g. "border border-champagne/50" */
  borderClasses?: string;
  className?: string;
}

export default function AccordionCard({
  summary,
  children,
  defaultOpen = false,
  borderClasses = "border border-champagne/50",
  className = "",
}: AccordionCardProps) {
  return (
    <details
      className={`group bg-white overflow-hidden ${borderClasses} ${className}`}
      open={defaultOpen || undefined}
    >
      <summary className="list-none cursor-pointer transition-transform duration-150 active:scale-[0.995] [&::-webkit-details-marker]:hidden">
        {summary}
      </summary>
      {children}
    </details>
  );
}
