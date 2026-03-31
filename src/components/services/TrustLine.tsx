import Image from "next/image";

// =============================================================================
// TrustLine Component — Image by LUI
// =============================================================================
// Horizontal bar showing Lu's circular photo + name + credentials.
// 56px circle: champagne bg, gold 2px border, "Lu" initials as fallback.
// When imageSrc is provided, renders real photo instead of initials.
//
// Used on: Services Overview page. May be reused on other pages.
// =============================================================================

interface TrustLineProps {
  name: string;
  credentials: string;
  /** Optional: image path for Lu's photo. Falls back to initials circle. */
  imageSrc?: string;
}

export default function TrustLine({
  name,
  credentials,
  imageSrc,
}: TrustLineProps) {
  return (
    <div className="bg-warm-ivory px-5 py-[18px] flex items-center gap-3.5 border-b border-champagne/50">
      {/* Circular avatar — 56px */}
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

      {/* Name and credentials */}
      <div className="flex-1 min-w-0">
        <p className="font-body font-semibold text-[13px] text-espresso mb-0.5">
          {name}
        </p>
        <p className="font-body font-normal text-[11px] text-warm-taupe leading-[1.4]">
          {credentials}
        </p>
      </div>
    </div>
  );
}
