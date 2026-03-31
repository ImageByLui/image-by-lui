interface BottomCTASectionProps { children: React.ReactNode; }
export default function BottomCTASection({ children }: BottomCTASectionProps) {
  return <section className="bg-espresso text-center py-9 px-5" aria-label="Get started">{children}</section>;
}
