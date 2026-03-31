// =============================================================================
// ServicesStickyBar — Image by LUI (Services Overview)
// =============================================================================
// Section 7. Terracotta sticky bar at bottom of page content.
// Uses CSS `sticky bottom-0` — stays visible while scrolling through page,
// naturally disappears when footer scrolls into view.
//
// Rendered as <nav> per accessibility spec. The entire bar is a link.
// No JavaScript needed — pure CSS positioning.
//
// NOTE: The global MobileCTABar (fixed bottom-0 in layout.tsx) will overlap
// this bar on /services and /es/servicios. The page files add
// data-hide-mobile-cta to signal MobileCTABar to hide. See DEPLOYMENT-GUIDE.
// =============================================================================

interface ServicesStickyBarProps {
  text: string;
  subtext: string;
  href: string;
}

export default function ServicesStickyBar({ text, subtext, href }: ServicesStickyBarProps) {
  return (
    <nav
      className="sticky bottom-0 z-20 bg-terracotta py-3.5 px-5 flex items-center justify-between shadow-[0_-4px_16px_rgba(44,36,32,0.12)] lg:hidden transition-colors duration-150 active:bg-terracotta-dark"
      aria-label="Quick booking"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between w-full no-underline hover:no-underline focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        aria-label="Book free color analysis on Calendly (opens in new tab)"
      >
        <span className="text-white font-body font-semibold text-[11px] tracking-[1.2px] uppercase">
          {text}
          <span className="text-white/55 font-normal text-[10px] tracking-normal normal-case ml-1.5">
            {subtext}
          </span>
        </span>
        <span className="text-white/80 text-[18px]" aria-hidden="true">→</span>
      </a>
    </nav>
  );
}
