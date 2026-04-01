import Link from "next/link";

// =============================================================================
// CrossNavLink — Image by LUI (LUI-DESK-003 §3.8)
// =============================================================================
// Desktop-only Stone background bar. Links between service pages
// (e.g., Occasion Styling → Image Consulting and vice versa).
// =============================================================================

interface CrossNavLinkProps {
  text: string;
  linkText: string;
  linkHref: string;
}

export default function CrossNavLink({ text, linkText, linkHref }: CrossNavLinkProps) {
  return (
    <div className="hidden lg:block bg-soft-stone py-7 text-center">
      <span className="text-[14px] text-warm-taupe">{text} </span>
      <Link
        href={linkHref}
        className="text-[14px] font-medium text-terracotta no-underline hover:no-underline relative inline-block group"
      >
        {linkText}
        <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-terracotta transition-[width] duration-300 group-hover:w-full" aria-hidden="true" />
      </Link>
    </div>
  );
}
