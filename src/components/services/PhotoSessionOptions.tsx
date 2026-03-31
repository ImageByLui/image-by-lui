import type { PhotoOption } from "@/types/content";

// =============================================================================
// PhotoSessionOptions — Image by LUI (Image Consulting)
// =============================================================================
// Section label → 2 stacked white cards. Each: title + badge on same row →
// description below. Badge styling varies (terracotta or gold). Card border
// varies (champagne or gold).
//
// Used on: Image Consulting page only.
// Part B will provide exact measurements.
// =============================================================================

interface PhotoSessionOptionsProps {
  label: string;
  options: PhotoOption[];
}

export default function PhotoSessionOptions({
  label,
  options,
}: PhotoSessionOptionsProps) {
  return (
    <section className="bg-warm-ivory px-5 py-8" aria-label="Photo session options">
      {/* Section label */}
      <p className="font-body font-semibold text-[10px] tracking-[1.5px] uppercase text-terracotta mb-4">
        {label}
      </p>

      {/* Option cards */}
      <div className="space-y-3">
        {options.map((option, i) => {
          const borderCls = option.borderColor === "gold" ? "border-gold" : "border-champagne";
          const badgeBg = option.badgeVariant === "gold"
            ? "bg-gold/10 text-[#9A7B40]"
            : "bg-terracotta/[0.06] text-terracotta";

          return (
            <div key={i} className={`bg-white border ${borderCls} px-5 py-4`}>
              {/* Title + badge row */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-body font-semibold text-[14px] text-espresso">
                  {option.title}
                </h3>
                <span className={`font-body font-semibold text-[9px] tracking-[1px] uppercase px-2.5 py-1 ${badgeBg}`}>
                  {option.badge}
                </span>
              </div>

              {/* Description */}
              <p className="font-body text-[13px] text-warm-grey leading-[1.55]">
                {option.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
