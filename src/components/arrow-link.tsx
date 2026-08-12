import Link from "next/link";

export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-sm font-medium text-charcoal transition-colors duration-200 ease-out hover:text-clay focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal ${className}`}
    >
      <span className="relative pb-0.5">
        {children}
        <span
          aria-hidden
          className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-[0.35] bg-charcoal/40 transition-all duration-300 ease-out group-hover:scale-x-100 group-hover:bg-clay"
        />
      </span>
      <span
        aria-hidden
        className="transition-transform duration-300 ease-out group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
