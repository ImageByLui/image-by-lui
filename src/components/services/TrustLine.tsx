import ImagePlaceholder from "@/components/features/ImagePlaceholder";

interface TrustLineProps {
  name: string;
  credentials: string | string[];
  compact?: boolean;
}

export default function TrustLine({ name, credentials, compact = false }: TrustLineProps) {
  const credText = Array.isArray(credentials) ? credentials.join(" · ") : credentials;
  return (
    <section className="bg-warm-ivory py-4 px-5" aria-label="About your consultant">
      <div className="flex items-center gap-3.5">
        {/* V2: 56px circle for both modes — compact was too small at 48px */}
        <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border border-champagne">
          <ImagePlaceholder alt="Lu — Image Consultant" width={56} height={56} colorIndex={0} className="w-full h-full" />
        </div>
        <div>
          {/* V2: Name at 15px (card size), credentials at 13px (caption) — consistent pair */}
          <p className="font-body font-semibold text-[length:var(--lui-fs-card)] text-espresso leading-tight">{name}</p>
          <p className="font-body text-[length:var(--lui-fs-caption)] text-warm-taupe leading-[1.4] mt-0.5">{credText}</p>
        </div>
      </div>
    </section>
  );
}
