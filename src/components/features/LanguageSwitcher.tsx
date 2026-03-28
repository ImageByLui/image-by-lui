"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCurrentLanguage } from "@/lib/language";
import { getAlternatePageUrl } from "@/config/site.config";

// =============================================================================
// LanguageSwitcher Component — Image by LUI
// =============================================================================
// Displays "EN | ES" with active language highlighted in Terracotta.
// Clicking the inactive language navigates to the equivalent page.
// =============================================================================

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const currentLang = getCurrentLanguage(pathname);

  const enUrl = getAlternatePageUrl(pathname, "en");
  const esUrl = getAlternatePageUrl(pathname, "es");

  return (
    <div
      className={`flex items-center gap-1 font-body font-semibold text-[13px] uppercase tracking-[1px] ${className}`}
      role="navigation"
      aria-label="Language selection"
    >
      {currentLang === "en" ? (
        <span className="text-terracotta border-b-2 border-terracotta px-2 py-1">
          EN
        </span>
      ) : (
        <Link
          href={enUrl}
          className="text-warm-taupe hover:text-terracotta px-2 py-1 no-underline transition-colors"
        >
          EN
        </Link>
      )}

      <span className="text-champagne select-none" aria-hidden="true">|</span>

      {currentLang === "es" ? (
        <span className="text-terracotta border-b-2 border-terracotta px-2 py-1">
          ES
        </span>
      ) : (
        <Link
          href={esUrl}
          className="text-warm-taupe hover:text-terracotta px-2 py-1 no-underline transition-colors"
        >
          ES
        </Link>
      )}
    </div>
  );
}
