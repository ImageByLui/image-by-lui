import Image from "next/image";

// =============================================================================
// ImagePlaceholder Component — Image by LUI
// =============================================================================
// Shows a brand-colored placeholder until real photography is ready.
// If `src` prop is provided, renders a real Next.js <Image> instead.
// This makes the swap from placeholder to real photo a one-prop change.
//
// Colors rotate: Champagne → Soft Stone → Warm Ivory
// =============================================================================

const placeholderColors = [
  "bg-champagne",
  "bg-soft-stone",
  "bg-warm-ivory",
] as const;

interface ImagePlaceholderProps {
  /** If provided, renders a real image instead of placeholder */
  src?: string;
  alt: string;
  width: number;
  height: number;
  /** Index to pick a placeholder color (0, 1, or 2). Defaults to 0 */
  colorIndex?: number;
  className?: string;
  /** Make the image fill its container (for responsive layouts) */
  fill?: boolean;
  priority?: boolean;
}

export default function ImagePlaceholder({
  src,
  alt,
  width,
  height,
  colorIndex = 0,
  className = "",
  fill = false,
  priority = false,
}: ImagePlaceholderProps) {
  // If a real image src is provided, render Next.js Image
  if (src) {
    if (fill) {
      return (
        <div className={`relative ${className}`} style={{ aspectRatio: `${width}/${height}` }}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={priority}
          />
        </div>
      );
    }

    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
      />
    );
  }

  // Placeholder: brand-colored div with LUI badge
  const bgColor = placeholderColors[colorIndex % placeholderColors.length];

  return (
    <div
      className={`${bgColor} flex items-center justify-center ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
      role="img"
      aria-label={alt}
    >
      {/* LUI Badge — subtle brand mark */}
      <div className="bg-espresso rounded-full px-4 py-1.5 opacity-20">
        <span className="font-body font-semibold text-warm-ivory text-[11px] tracking-[2px] uppercase">
          LUI
        </span>
      </div>
    </div>
  );
}
