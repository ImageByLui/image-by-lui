import Image from "next/image";

// =============================================================================
// TrustLine — Image by LUI (Services Overview)
// =============================================================================
// Section 3. Horizontal credentials bar: circle photo + name + credentials.
// Uses <aside> per accessibility spec.
// =============================================================================

interface TrustLineProps {
  name: string;
  credentials: string;
  imageSrc?: string;
}

export default function TrustLine({ name, credentials, imageSrc }: TrustLineProps) {
  return (
    <aside
      className="bg-warm-ivory py-[18px] px-5 flex items-center gap-3.5 border-b-[0.5px] border-champagne"
      aria-label="About Lu"
    >
      {/* 56px circle — champagne bg, 2px gold border */}
      <div className="w-14 h-14 rounded-full bg-champagne border-2 border-gold flex items-center justify-center shrink-0 overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="font-heading font-medium text-[16px] text-warm-taupe">
            Lu
          </span>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-body font-semibold text-[13px] text-espresso mb-0.5">
          {name}
        </p>
        <p className="font-body text-[11px] text-warm-taupe leading-[1.4]">
          {credentials}
        </p>
      </div>
    </aside>
  );
}
