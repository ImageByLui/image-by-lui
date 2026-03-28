// =============================================================================
// SectionHeading Component — Image by LUI
// =============================================================================
// Consistent heading treatment for page sections. Renders an H2 by default
// in Cormorant Garamond with optional subtitle text below.
// =============================================================================

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  /** Center-align the heading (default: true) */
  centered?: boolean;
}

export default function SectionHeading({
  children,
  subtitle,
  as: Tag = "h2",
  className = "",
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 md:mb-10 ${centered ? "text-center" : ""} ${className}`}>
      <Tag>{children}</Tag>
      {subtitle && (
        <p className={`mt-3 max-w-2xl leading-relaxed text-warm-grey ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
