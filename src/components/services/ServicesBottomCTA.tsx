import type { CTAButton } from "@/types/content";

// =============================================================================
// ServicesBottomCTA Component — Image by LUI
// =============================================================================
// Espresso background, centered layout. Contains:
//   - Heading (Cormorant 22px, ivory)
//   - Description (14px, 65% opacity ivory)
//   - WhatsApp button (white bg, espresso text, WhatsApp green icon)
//   - Secondary gold link text
//
// The WhatsApp icon is inline SVG (WhatsApp brand green #25D366).
//
// Used on: Services Overview page (similar pattern on other pages).
// =============================================================================

interface ServicesBottomCTAProps {
  heading: string;
  description: string;
  primaryCta: CTAButton;
  secondaryText: string;
  secondaryLinkText: string;
  secondaryLinkHref: string;
}

export default function ServicesBottomCTA({
  heading,
  description,
  primaryCta,
  secondaryText,
  secondaryLinkText,
  secondaryLinkHref,
}: ServicesBottomCTAProps) {
  return (
    <section className="bg-espresso text-center px-5 py-9">
      {/* Heading */}
      <h2 className="font-heading font-normal text-[22px] text-warm-ivory mb-2.5">
        {heading}
      </h2>

      {/* Description */}
      <p className="font-body font-normal text-[14px] leading-[1.6] text-warm-ivory/65 mb-6">
        {description}
      </p>

      {/* WhatsApp CTA button — white bg, espresso text */}
      <a
        href={primaryCta.href}
        target={primaryCta.external ? "_blank" : undefined}
        rel={primaryCta.external ? "noopener noreferrer" : undefined}
        className="inline-flex items-center justify-center gap-2.5 bg-white text-espresso font-body font-semibold text-[12px] tracking-[1px] uppercase px-8 py-4 no-underline hover:no-underline transition-colors duration-150 active:bg-warm-ivory"
        aria-label="Message Lu on WhatsApp (opens in new tab)"
      >
        {/* WhatsApp icon — brand green */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="#25D366"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {primaryCta.text}
      </a>

      {/* Secondary link */}
      <p className="font-body font-normal text-[11px] text-warm-ivory/40 mt-3">
        {secondaryText}{" "}
        <a
          href={secondaryLinkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline font-semibold hover:text-gold"
        >
          {secondaryLinkText}
        </a>{" "}
        to get started
      </p>
    </section>
  );
}
