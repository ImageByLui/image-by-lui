// =============================================================================
// PersonaCard Component — Image by LUI
// =============================================================================
// Used in "Who Is This For?" section. 4px left Terracotta border, white bg,
// hover lift effect (translateY -4px, shadow increase, 200ms transition).
// =============================================================================

interface PersonaCardProps {
  headline: string;
  body: string;
}

export default function PersonaCard({ headline, body }: PersonaCardProps) {
  return (
    <div className="lui-card bg-white border-l-4 border-l-terracotta p-6">
      <h3 className="font-body font-semibold text-[16px] md:text-[18px] text-espresso mb-3">
        {headline}
      </h3>
      <p className="text-warm-grey leading-relaxed text-[15px]">
        {body}
      </p>
    </div>
  );
}
