// =============================================================================
// Language Utilities — Image by LUI
// =============================================================================
// Single source of truth for language detection. All language-aware components
// use these functions instead of implementing their own detection logic.
// =============================================================================

import type { Lang } from "@/types/content";

/**
 * Detect the current language from a URL pathname.
 * Spanish pages live under /es/ or equal /es. Everything else is English.
 */
export function getCurrentLanguage(pathname: string): Lang {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
}

/**
 * Get the html lang attribute value for a given language.
 */
export function getHtmlLang(lang: Lang): string {
  return lang === "es" ? "es" : "en";
}

/**
 * Get the Open Graph locale for a given language.
 */
export function getOgLocale(lang: Lang): string {
  return lang === "es" ? "es_MX" : "en_US";
}

/**
 * Get the alternate Open Graph locale.
 */
export function getAlternateOgLocale(lang: Lang): string {
  return lang === "es" ? "en_US" : "es_MX";
}
