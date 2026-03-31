// =============================================================================
// CategoryCrossLinks — Image by LUI (FAQ)
// =============================================================================
// "Looking for something else?" with button links to other categories.
// Buttons trigger state change, not page navigation.
// =============================================================================

interface CategoryCrossLinksProps {
  text: string;
  links: { label: string; categoryId: string }[];
  onNavigate: (categoryId: string) => void;
}

export default function CategoryCrossLinks({ text, links, onNavigate }: CategoryCrossLinksProps) {
  return (
    <div className="text-center py-3.5 px-1.5">
      <span className="font-body text-[12px] text-warm-taupe">{text} </span>
      {links.map((link, i) => (
        <span key={link.categoryId}>
          {i > 0 && <span className="font-body text-[12px] text-warm-taupe"> · </span>}
          <button
            onClick={() => onNavigate(link.categoryId)}
            className="font-body font-semibold text-[12px] text-terracotta cursor-pointer bg-transparent border-none p-0 hover:underline focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            {link.label}
          </button>
        </span>
      ))}
    </div>
  );
}
