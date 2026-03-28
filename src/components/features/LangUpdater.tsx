"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getCurrentLanguage } from "@/lib/language";

// =============================================================================
// LangUpdater — Sets <html lang> dynamically based on current URL
// =============================================================================
// Next.js App Router only allows one root layout, so we can't have separate
// <html lang="en"> and <html lang="es"> layouts. This client component
// updates the lang attribute on navigation for accessibility and SEO.
// =============================================================================

export default function LangUpdater() {
  const pathname = usePathname();

  useEffect(() => {
    const lang = getCurrentLanguage(pathname);
    document.documentElement.lang = lang;
  }, [pathname]);

  return null;
}
