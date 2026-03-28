"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site.config";

// =============================================================================
// CalendlyEmbed Component — Image by LUI
// =============================================================================
// Inline Calendly embed for the Contact page. Shows all three event types.
// Loads Calendly script only when this component mounts (not site-wide).
// Uses Calendly.initInlineWidget() to manually initialize after script loads.
// Brand colors passed via embed parameters: primaryColor, textColor.
// =============================================================================

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

interface CalendlyEmbedProps {
  /** Callback when a booking is completed (optional enhancement) */
  onEventScheduled?: () => void;
}

export default function CalendlyEmbed({ onEventScheduled }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const calendlyUrl = `${siteConfig.calendly.baseUrl}?hide_gdpr_banner=1&primary_color=A35741&text_color=2C2420`;

    // Load CSS
    if (!document.querySelector('link[href*="calendly.com/assets/external/widget.css"]')) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    const initWidget = () => {
      if (window.Calendly && containerRef.current) {
        containerRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: containerRef.current,
        });
        setLoading(false);
      }
    };

    // Check if script is already loaded
    if (window.Calendly) {
      initWidget();
      return;
    }

    // Load script then initialize
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => initWidget();
    document.head.appendChild(script);
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

  return (
    <div className="w-full min-h-[650px]">
      {/* Container for Calendly widget */}
      <div
        ref={containerRef}
        style={{ minWidth: "320px", height: "700px" }}
      />

      {/* Loading state — hidden once widget initializes */}
      {loading && (
        <div className="flex items-center justify-center h-[200px]">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-terracotta border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-warm-grey text-[14px]">Loading booking calendar...</p>
          </div>
        </div>
      )}
    </div>
  );
}
