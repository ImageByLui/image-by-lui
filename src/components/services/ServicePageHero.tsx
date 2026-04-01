import ImagePlaceholder from "@/components/features/ImagePlaceholder";

// =============================================================================
// ServicePageHero — Image by LUI (Desktop Overhaul — LUI-DESK-003 §3.2)
// =============================================================================
// Mobile: text + image placeholder + tags (unchanged)
// Desktop (≥1024px, when desktopPhoto is provided): asymmetric photo bleed right.
//   Photo container width, min-height, filter, and position are configurable.
//   If desktopPhoto is NOT provided, renders mobile layout at all breakpoints
//   (backward compat for pages that haven't received desktop specs yet).
// =============================================================================

interface DesktopPhotoConfig {
  image: string;
  imagePosition: string;
  filter?: string;
  minHeight?: number;
  photoWidth?: string;
}

interface ServicePageHeroProps {
  label: string;
  labelColor?: "terracotta" | "gold";
  headline: string;
  description: string;
  imageAlt: string;
  imageBorderColor?: "champagne" | "gold";
  tags: string[];
  tagsPosition?: "above-image" | "below-image";
  /** Desktop photo bleed config — when provided, enables desktop layout */
  desktopPhoto?: DesktopPhotoConfig;
}

export default function ServicePageHero({
  label, labelColor = "terracotta", headline, description, imageAlt,
  imageBorderColor = "champagne", tags, tagsPosition = "below-image",
  desktopPhoto,
}: ServicePageHeroProps) {
  const labelCls = labelColor === "gold" ? "text-gold" : "text-terracotta";
  const borderCls = imageBorderColor === "gold" ? "border-gold" : "border-champagne";
  const hasDesktop = !!desktopPhoto;
  const minH = desktopPhoto?.minHeight ?? 480;
  const photoW = desktopPhoto?.photoWidth ?? "45%";

  const tagsBlock = (
    <div className={`${tagsPosition === "above-image" ? "px-5 pb-5" : "pt-5 px-5 pb-7"} ${hasDesktop ? "lg:hidden" : ""}`}>
      <div className="w-full h-px bg-gold/25 mb-3" aria-hidden="true" />
      <p className="font-body font-medium text-[length:var(--lui-fs-tag)] text-warm-taupe tracking-[0.5px]">
        {tags.join("  ·  ")}
      </p>
    </div>
  );

  const imageBlock = (
    <div className={`${tagsPosition === "above-image" ? "px-3.5 pb-7" : "px-3.5"} ${hasDesktop ? "lg:hidden" : ""}`}>
      <div className={`border ${borderCls} p-0.5`}>
        <ImagePlaceholder alt={imageAlt} width={347} height={174} colorIndex={1} className="w-full" />
      </div>
    </div>
  );

  return (
    <section
      id="hero"
      className={`bg-warm-ivory relative overflow-hidden ${hasDesktop ? `lg:min-h-[${minH}px]` : ""}`}
      style={hasDesktop ? { minHeight: undefined } : undefined}
      aria-label={label}
    >
      {/* Desktop photo bleed */}
      {desktopPhoto && (
        <div
          className="hidden lg:block absolute top-0 right-0 h-full overflow-hidden"
          style={{ width: photoW, opacity: 0, animation: "heroImgIn 0.9s ease 0.3s forwards" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={desktopPhoto.image}
            alt={imageAlt}
            className="w-full h-full object-cover"
            style={{
              objectPosition: desktopPhoto.imagePosition,
              filter: desktopPhoto.filter || "none",
            }}
          />
          {/* Left fade gradient */}
          <div
            className="absolute top-0 left-0 h-full w-[140px]"
            style={{ background: "linear-gradient(to right, #F7F3EF 0%, transparent 100%)" }}
            aria-hidden="true"
          />
        </div>
      )}

      {/* Text content */}
      <div className={`relative z-[2] ${hasDesktop ? "max-w-[1200px] mx-auto" : ""} pt-7 px-5 pb-0 ${hasDesktop ? `lg:px-12 lg:pt-[100px] lg:pb-[80px] lg:flex lg:flex-col lg:justify-center` : ""}`}
        style={hasDesktop ? { minHeight: `${minH}px` } : undefined}
      >
        {/* Label */}
        <p
          className={`font-body font-semibold text-[length:var(--lui-fs-label)] tracking-[2px] uppercase ${labelCls} mb-3 ${hasDesktop ? "lg:text-[11px] lg:tracking-[2px] lg:mb-3" : ""}`}
          style={hasDesktop ? { opacity: 0, animation: "fadeUp 0.5s ease 0.1s forwards" } : undefined}
        >
          {label}
        </p>

        {/* H1 */}
        <h1
          className={`font-heading text-[length:var(--lui-fs-hero)] font-semibold text-espresso leading-[1.18] ${hasDesktop ? "lg:text-[56px] lg:font-normal lg:italic lg:leading-[1.08] lg:max-w-[460px]" : ""}`}
          style={hasDesktop ? { opacity: 0, animation: "fadeUp 0.7s ease 0.15s forwards" } : undefined}
        >
          {headline}
        </h1>

        {/* Gold rule */}
        <div
          className={`w-[length:var(--lui-gold-line-w)] h-[length:var(--lui-gold-line-h)] bg-gold my-3.5 ${hasDesktop ? "lg:w-12 lg:h-[2px] lg:my-5" : ""}`}
          style={hasDesktop ? { transformOrigin: "left", transform: "scaleX(0)", animation: "lineGrow 0.5s ease 0.65s forwards" } : undefined}
          aria-hidden="true"
        />

        {/* Description */}
        <p
          className={`text-[length:var(--lui-fs-body)] text-warm-grey leading-[1.65] mb-3 ${hasDesktop ? "lg:text-[16px] lg:font-light lg:leading-[1.65] lg:max-w-[420px] lg:mb-0" : ""}`}
          style={hasDesktop ? { opacity: 0, animation: "fadeUp 0.5s ease 0.95s forwards" } : undefined}
        >
          {description}
        </p>
      </div>

      {/* Mobile-only image and tags */}
      {tagsPosition === "above-image" ? <>{tagsBlock}{imageBlock}</> : <>{imageBlock}{tagsBlock}</>}
    </section>
  );
}
