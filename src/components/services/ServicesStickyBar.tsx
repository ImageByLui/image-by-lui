interface ServicesStickyBarProps { text: string; subtext: string; href: string; }
export default function ServicesStickyBar({ text, subtext, href }: ServicesStickyBarProps) {
  return (
    <nav className="sticky bottom-0 z-30 lg:hidden" aria-label="Quick booking" style={{ boxShadow: "0 -2px 8px rgba(0,0,0,0.1)" }}>
      <a href={href} target="_blank" rel="noopener noreferrer"
        className="flex items-center justify-center gap-1 w-full h-[56px] bg-terracotta text-white font-body no-underline hover:no-underline hover:bg-terracotta-dark transition-colors">
        <span className="font-semibold text-[13px] tracking-[1px] uppercase">{text}</span>
        <span className="text-[13px] text-white/70">{subtext}</span>
        <svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/70 ml-1" aria-hidden="true"><path d="M5 10h10M11 6l4 4-4 4" /></svg>
      </a>
    </nav>
  );
}
