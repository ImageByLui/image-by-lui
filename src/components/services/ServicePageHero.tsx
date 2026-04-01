import ImagePlaceholder from "@/components/features/ImagePlaceholder";

interface ServicePageHeroProps {
  label: string;
  labelColor?: "terracotta" | "gold";
  headline: string;
  description: string;
  imageAlt: string;
  imageBorderColor?: "champagne" | "gold";
  tags: string[];
  tagsPosition?: "above-image" | "below-image";
}

export default function ServicePageHero({
  label, labelColor = "terracotta", headline, description, imageAlt,
  imageBorderColor = "champagne", tags, tagsPosition = "below-image",
}: ServicePageHeroProps) {
  const labelCls = labelColor === "gold" ? "text-gold" : "text-terracotta";
  const borderCls = imageBorderColor === "gold" ? "border-gold" : "border-champagne";

  const tagsBlock = (
    <div className={tagsPosition === "above-image" ? "px-5 pb-5" : "pt-5 px-5 pb-7"}>
      {/* Gold separator line above tags */}
      <div className="w-full h-px bg-gold/25 mb-3" aria-hidden="true" />
      <p className="font-body font-medium text-[length:var(--lui-fs-tag)] text-warm-taupe tracking-[0.5px]">
        {tags.join("  ·  ")}
      </p>
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
      <div className="pt-7 px-5 pb-0">
        <p className={`font-body font-semibold text-[length:var(--lui-fs-label)] tracking-[2px] uppercase ${labelCls} mb-3`}>{label}</p>
        <h1 className="font-heading text-[length:var(--lui-fs-hero)] font-semibold text-espresso leading-[1.18]">{headline}</h1>
        <div className="w-[length:var(--lui-gold-line-w)] h-[length:var(--lui-gold-line-h)] bg-gold my-3.5" aria-hidden="true" />
        <p className="text-[length:var(--lui-fs-body)] text-warm-grey leading-[1.65] mb-3">{description}</p>
      </div>
      {tagsPosition === "above-image" ? <>{tagsBlock}{imageBlock}</> : <>{imageBlock}{tagsBlock}</>}
    </section>
  );
}
