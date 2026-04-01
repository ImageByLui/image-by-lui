"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCurrentLanguage } from "@/lib/language";
import { getAlternatePageUrl } from "@/config/site.config";

// =============================================================================
// LanguageSwitcher Component — Image by LUI
// =============================================================================
// Displays "EN | ES" with active language highlighted.
//
// Variants:
//   - default (mobile menu): terracotta active, warm-taupe inactive, 13px
//   - desktop (nav bar): terracotta active, champagne inactive, 12px/600/1px ls
// =============================================================================

interface LanguageSwitcherProps {
  className?: string;
  /** "desktop" applies nav bar styling per LUI-DESK-001 §1.2 */
  variant?: "default" | "desktop";
}

export default function LanguageSwitcher({ className = "", variant = "default" }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const currentLang = getCurrentLanguage(pathname);

  const enUrl = getAlternatePageUrl(pathname, "en");
  const esUrl = getAlternatePageUrl(pathname, "es");

  const isDesktop = variant === "desktop";

  // Style tokens by variant
  const containerClass = isDesktop
    ? "flex items-center gap-1 font-body font-semibold text-[12px] uppercase tracking-[1px]"
    : "flex items-center gap-1 font-body font-semibold text-[13px] uppercase tracking-[1px]";

  const activeClass = "text-terracotta";
  const inactiveClass = isDesktop ? "text-champagne" : "text-warm-taupe";

  return (
    <div
      className={`${containerClass} ${className}`}
      role="navigation"
      aria-label="Language selection"
    >
      {currentLang === "en" ? (
        <span className={`${activeClass} px-2 py-1`}>EN</span>
      ) : (
        <Link
          href={enUrl}
          className={`${inactiveClass} hover:text-terracotta px-2 py-1 no-underline transition-colors`}
        >
          EN
        </Link>
      )}

      <span className="text-champagne select-none" aria-hidden="true">|</span>

      {currentLang === "es" ? (
        <span className={`${activeClass} px-2 py-1`}>ES</span>
      ) : (
        <Link
          href={esUrl}
          className={`${inactiveClass} hover:text-terracotta px-2 py-1 no-underline transition-colors`}
        >
          ES
        </Link>
      )}
    </div>
  );
}
