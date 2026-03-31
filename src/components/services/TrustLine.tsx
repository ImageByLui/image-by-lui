import ImagePlaceholder from "@/components/features/ImagePlaceholder";

interface TrustLineProps {
  name: string;
  credentials: string | string[];
  compact?: boolean;
}

export default function TrustLine({ name, credentials, compact = false }: TrustLineProps) {
  const size = compact ? "w-12 h-12" : "w-14 h-14";
  const textSize = compact ? "text-caption" : "text-inclusion";
  const credSize = compact ? "text-badge" : "text-tag";
  const credText = Array.isArray(credentials) ? credentials.join(" · ") : credentials;
  return (
    <section className="bg-warm-ivory py-4 px-5" aria-label="About your consultant">
      <div className="flex items-center gap-3.5">
        <div className={`${size} rounded-full overflow-hidden shrink-0 border border-champagne`}>
          <ImagePlaceholder alt="Lu — Image Consultant" width={56} height={56} colorIndex={0} className="w-full h-full" />
        </div>
        <div>
          <p className={`font-body font-semibold ${textSize} text-espresso`}>{name}</p>
          <p className={`font-body ${credSize} text-warm-taupe leading-[1.4]`}>{credText}</p>
        </div>
      </div>
    </section>
  );
}
