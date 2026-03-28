import Link from "next/link";

// =============================================================================
// Button Component — Image by LUI
// =============================================================================
// Primary: Terracotta bg, white text, uppercase, no border-radius
// Secondary: Transparent bg, terracotta text, underline on hover
// Renders as <a> (via Next.js Link) for navigation, or <button> for actions.
// =============================================================================

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  external = false,
  onClick,
  className = "",
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-block font-body transition-all duration-200 ease-in-out text-center";

  const variants = {
    primary: [
      "bg-terracotta text-white",
      "font-semibold text-[13px] md:text-[14px] uppercase",
      "tracking-[1.5px] px-8 py-3.5",
      "rounded-none border-none",
      "hover:bg-terracotta-dark",
    ].join(" "),
    secondary: [
      "bg-transparent text-terracotta",
      "font-normal text-[15px] md:text-[16px]",
      "p-0",
      "hover:underline",
    ].join(" "),
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  // If href is provided, render as a link
  if (href) {
    // External links (Calendly, WhatsApp, etc.)
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }

    // Internal links (page navigation)
    return (
      <Link href={href} className={combinedStyles} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  // No href — render as button
  return (
    <button
      type="button"
      onClick={onClick}
      className={combinedStyles}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
