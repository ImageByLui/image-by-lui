"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site.config";

// =============================================================================
// CalendlyEmbed Component — Image by LUI
// =============================================================================
// Inline Calendly embed for the Contact page. Shows all three event types.
// Loads Calendly script only when this component mounts (not site-wide).
// Brand colors passed via embed parameters: primaryColor, textColor.
//
// Optional: Listens for calendly.event_scheduled postMessage to show
// a custom confirmation. If unreliable, Calendly shows its own confirmation.
// =============================================================================

interface CalendlyEmbedProps {
  /** Callback when a booking is completed (optional enhancement) */
  onEventScheduled?: () => void;
}

export default function CalendlyEmbed({ onEventScheduled }: CalendlyEmbedProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Load Calendly embed script
  useEffect(() => {
    // Check if already loaded
    if (document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.head.appendChild(script);

    // Load Calendly CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      // Don't remove on unmount — script can stay cached
    };
  }, []);

  // Listen for booking confirmation (optional enhancement)
  useEffect(() => {
    if (!onEventScheduled) return;

    const handleMessage = (event: MessageEvent) => {
      if (
        event.origin === "https://calendly.com" &&
        event.data?.event === "calendly.event_scheduled"
      ) {
        onEventScheduled();
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [onEventScheduled]);

  const calendlyUrl = siteConfig.calendly.baseUrl;

  return (
    <div className="w-full min-h-[650px]">
      {scriptLoaded ? (
        <div
          className="calendly-inline-widget"
          data-url={`${calendlyUrl}?hide_gdpr_banner=1&primary_color=A35741&text_color=2C2420`}
          style={{ minWidth: "320px", height: "700px" }}
        />
      ) : (
        // Loading state while script loads
        <div className="flex items-center justify-center h-[650px] bg-soft-stone/30">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-terracotta border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-warm-grey text-[14px]">Loading booking calendar...</p>
          </div>
        </div>
      )}
    </div>
  );
}
