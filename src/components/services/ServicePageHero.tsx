import ImagePlaceholder from "@/components/features/ImagePlaceholder";

// =============================================================================
// ServicePageHero — Image by LUI
// =============================================================================
// Hero for individual service pages (Occasion Styling, Image Consulting).
// 3 stacked areas: text → image → tags (or text → tags → image).
//
// tagsPosition controls layout:
//   "below-image" (default) — Occasion Styling: text → image → tags
//   "above-image" — Image Consulting: text → tags → image
// =============================================================================

interface ServicePageHeroProps {
  label: string;
  labelColor?: "terracotta" | "gold";
  headline: string;
  description: string;
  imageAlt: string;
  imageBorderColor?: "champagne" | "gold";
  tags: string[];
  /** Controls tag placement relative to image. Default: "below-image" */
  tagsPosition?: "above-image" | "below-image";
}

export default function ServicePageHero({
  label,
  labelColor = "terracotta",
  headline,
  description,
  imageAlt,
  imageBorderColor = "champagne",
  tags,
  tagsPosition = "below-image",
}: ServicePageHeroProps) {
  const labelCls = labelColor === "gold" ? "text-gold" : "text-terracotta";
  const borderCls = imageBorderColor === "gold" ? "border-gold" : "border-champagne";

  const tagsBlock = (
    <div className={tagsPosition === "above-image" ? "px-3.5 pb-4" : "pt-4 px-3.5 pb-7"}>
      <div className="flex flex-nowrap gap-1.5">
        {tags.map((tag) => (
          <span key={tag} className="font-body font-medium text-[10px] tracking-[0.2px] text-terracotta bg-terracotta/[0.05] py-[5px] px-2 border-l-2 border-terracotta">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  const imageBlock = (
    <div className={tagsPosition === "above-image" ? "px-3.5 pb-7" : "px-3.5"}>
      <div className={`border ${borderCls} p-0.5`}>
        <ImagePlaceholder alt={imageAlt} width={347} height={174} colorIndex={1} className="w-full" />
      </div>
    </div>
  );

  return (
    <section className="bg-warm-ivory" aria-label={label}>
      {/* Text area */}
      <div className="pt-7 px-5 pb-0">
        <p className={`font-body font-semibold text-[10px] tracking-[2px] uppercase ${labelCls} mb-3`}>{label}</p>
        <h1 className="font-heading text-[28px] font-medium text-espresso leading-[1.18]">{headline}</h1>
        <div className="w-12 h-[1.5px] bg-gold my-3.5" aria-hidden="true" />
        <p className="text-[15px] text-warm-grey leading-[1.65] mb-5">{description}</p>
      </div>

      {tagsPosition === "above-image" ? (
        <>
          {tagsBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {tagsBlock}
        </>
      )}
    </section>
  );
}
