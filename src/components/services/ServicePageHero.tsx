import ImagePlaceholder from "@/components/features/ImagePlaceholder";

// =============================================================================
// ServicePageHero — Image by LUI
// =============================================================================
// Hero for individual service pages (Occasion Styling, Image Consulting).
// 3 stacked areas: text (label+h1+line+desc) → image → tags.
// Each area has distinct padding per Part B spec.
//
// Image Consulting reuses with labelColor="gold", imageBorderColor="gold".
// =============================================================================

interface ServicePageHeroProps {
  label: string;
  labelColor?: "terracotta" | "gold";
  headline: string;
  description: string;
  imageAlt: string;
  imageBorderColor?: "champagne" | "gold";
  tags: string[];
}

export default function ServicePageHero({
  label,
  labelColor = "terracotta",
  headline,
  description,
  imageAlt,
  imageBorderColor = "champagne",
  tags,
}: ServicePageHeroProps) {
  const labelCls = labelColor === "gold" ? "text-gold" : "text-terracotta";
  const borderCls = imageBorderColor === "gold" ? "border-gold" : "border-champagne";

  return (
    <section className="bg-warm-ivory" aria-label={label}>
      {/* 1a. Text area */}
      <div className="pt-7 px-5 pb-0">
        <p className={`font-body font-semibold text-[10px] tracking-[2px] uppercase ${labelCls} mb-3`}>
          {label}
        </p>
        <h1 className="font-heading text-[28px] font-medium text-espresso leading-[1.18]">
          {headline}
        </h1>
        <div className="w-12 h-[1.5px] bg-gold my-3.5" aria-hidden="true" />
        <p className="text-[15px] text-warm-grey leading-[1.65] mb-5">
          {description}
        </p>
      </div>

      {/* 1b. Image area */}
      <div className="px-3.5">
        <div className={`border ${borderCls} p-0.5`}>
          <ImagePlaceholder
            alt={imageAlt}
            width={347}
            height={174}
            colorIndex={1}
            className="w-full"
          />
        </div>
      </div>

      {/* 1c. Tags area */}
      <div className="pt-4 px-3.5 pb-7">
        <div className="flex flex-nowrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-body font-medium text-[10px] tracking-[0.2px] text-terracotta bg-terracotta/[0.05] py-[5px] px-2 border-l-2 border-terracotta"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
