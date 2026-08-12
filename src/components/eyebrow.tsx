export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-warm-grey">
      <span aria-hidden className="h-px w-8 bg-clay" />
      {children}
    </p>
  );
}
