import ImagePlaceholder from "@/components/features/ImagePlaceholder";

// =============================================================================
// TransformationCard Component — Image by LUI
// =============================================================================
// Before/after image slots side-by-side with terracotta vertical divider.
// If no image src, uses ImagePlaceholder. Caption below in caption text.
// When Lu provides real photos, add beforeImage/afterImage props — no
// structural change needed.
// =============================================================================

interface TransformationCardProps {
  beforeImage?: string;
  afterImage?: string;
  caption: string;
}

export default function TransformationCard({
  beforeImage,
  afterImage,
  caption,
}: TransformationCardProps) {
  return (
    <div className="bg-white p-4">
      {/* Before / After images */}
      <div className="flex gap-0 items-stretch">
        {/* Before */}
        <div className="flex-1">
          <div className="relative">
            <ImagePlaceholder
              src={beforeImage}
              alt="Before"
              width={400}
              height={500}
              colorIndex={2}
              className="w-full"
            />
            <span className="absolute bottom-2 left-2 bg-espresso/70 text-warm-ivory text-[10px] font-body font-semibold uppercase tracking-[1px] px-2 py-0.5">
              Before
            </span>
          </div>
        </div>

        {/* Terracotta divider */}
        <div className="w-[2px] bg-terracotta shrink-0" aria-hidden="true" />

        {/* After */}
        <div className="flex-1">
          <div className="relative">
            <ImagePlaceholder
              src={afterImage}
              alt="After"
              width={400}
              height={500}
              colorIndex={0}
              className="w-full"
            />
            <span className="absolute bottom-2 right-2 bg-terracotta text-white text-[10px] font-body font-semibold uppercase tracking-[1px] px-2 py-0.5">
              After
            </span>
          </div>
        </div>
      </div>

      {/* Caption */}
      <p className="text-caption mt-3 text-center">
        {caption}
      </p>
    </div>
  );
}
