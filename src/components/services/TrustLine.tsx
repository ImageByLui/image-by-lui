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
        <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border border-champagne">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/mobile/heroes/lu-image-consultant-profile.JPG" alt="Lu — Image Consultant" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="font-body font-semibold text-[length:var(--lui-fs-card)] text-espresso leading-tight">{name}</p>
          <p className="font-body text-[length:var(--lui-fs-caption)] text-warm-taupe leading-[1.4] mt-0.5">{credText}</p>
        </div>
      </div>
      <div className="h-[1px] mt-4" style={{ backgroundColor: "rgba(196,154,92,0.3)" }} aria-hidden="true" />
    </section>
  );
}
