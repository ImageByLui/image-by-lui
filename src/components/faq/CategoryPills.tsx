// =============================================================================
// CategoryPills — Image by LUI (FAQ)
// =============================================================================
// Horizontal scroll row of pill buttons. Active pill is terracotta.
// Each pill shows label + count. Scrollbar hidden.
// =============================================================================

interface CategoryPillsProps {
  categories: { id: string; pillLabel: string; count: number }[];
  activeId: string;
  onSelect: (id: string) => void;
}

export default function CategoryPills({ categories, activeId, onSelect }: CategoryPillsProps) {
  return (
    <div
      className="flex gap-2 overflow-x-auto px-5 pb-5"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
    >
      {categories.map((cat) => {
        const isActive = cat.id === activeId;
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`whitespace-nowrap shrink-0 font-body font-semibold text-[12px] tracking-[0.3px] px-4 py-2.5 select-none transition-all duration-150 active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
              isActive
                ? "bg-terracotta text-white border border-terracotta"
                : "bg-transparent text-warm-taupe border border-champagne"
            }`}
            aria-pressed={isActive}
          >
            {cat.pillLabel}
            <span className={isActive ? "opacity-70 font-normal" : "opacity-60 font-normal"}>
              {" "}({cat.count})
            </span>
          </button>
        );
      })}
    </div>
  );
}
