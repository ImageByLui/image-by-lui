"use client";
import { useRef, useEffect } from "react";

/* V2: Supports both uncontrolled (defaultOpen) and controlled (isOpen/onToggle) modes.
   Accordion content wrapper enables smooth CSS grid transition from globals.css. */
interface AccordionCardProps {
  summary: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  borderClasses?: string;
  className?: string;
  /** V2: Controlled mode — external open state */
  isOpen?: boolean;
  /** V2: Controlled mode — toggle callback */
  onToggle?: () => void;
}

export default function AccordionCard({
  summary, children, defaultOpen = false, borderClasses = "border border-champagne/50",
  className = "", isOpen, onToggle,
}: AccordionCardProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const controlled = isOpen !== undefined;

  // Sync controlled state with <details> open attribute
  useEffect(() => {
    if (controlled && detailsRef.current) {
      detailsRef.current.open = isOpen;
    }
  }, [controlled, isOpen]);

  const handleToggle = (e: React.MouseEvent) => {
    if (controlled && onToggle) {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <details
      ref={detailsRef}
      className={`group bg-white overflow-hidden ${borderClasses} ${className}`}
      open={controlled ? isOpen : (defaultOpen || undefined)}
    >
      <summary
        className="list-none cursor-pointer transition-transform duration-150 active:scale-[0.995] [&::-webkit-details-marker]:hidden"
        onClick={controlled ? handleToggle : undefined}
      >
        {summary}
      </summary>
      {/* V2: accordion-content wrapper for smooth CSS grid transition */}
      <div className="accordion-content">
        <div>{children}</div>
      </div>
    </details>
  );
}
