// =============================================================================
// Production Layout
// =============================================================================
// Nested layout for /production routes. Imported alongside the root layout
// (which provides fonts + GA4). This layout:
// - Imports production-specific CSS
// - Wraps content in a dark-themed container
//
// The root layout's Header/Footer/WhatsApp are conditionally excluded
// via the x-production-site middleware header (see root layout.tsx changes).
// =============================================================================

import type { Metadata } from "next";


export const metadata: Metadata = {
  // Default production metadata — overridden per locale in page files
  title: "Production Styling Miami | Image by LUI",
  description:
    "Editorial and commercial styling direction in Miami. Concept to final frame.",
};

export default function ProductionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Override the consumer site's warm-ivory body background */}
      <style>{`
        body {
          background-color: #2C2420 !important;
          color: #F7F3EF !important;
        }
      `}</style>
      {children}
    </>
  );
}
