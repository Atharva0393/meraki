import Link from "next/link";

export function PillButton({
  href,
  children,
  className = "",
  type,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "submit" | "button";
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full bg-clay px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-200 ease-out hover:-translate-y-px hover:bg-charcoal active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes}>
      {children}
    </button>
  );
}
