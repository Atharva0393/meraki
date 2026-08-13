"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

function isLinkActive(pathname: string | null, href: string) {
  return pathname === href || Boolean(pathname?.startsWith(`${href}/`));
}

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileNavId = `mobile-nav-${useId()}`;

  // Navbar remounts on route change (nested inside PageTransition's
  // pathname-keyed wrapper), so menuOpen naturally resets — no effect needed.

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // --- Limelight tracking indicator for the desktop nav ---
  // Glows under whichever link is hovered/focused; falls back to the
  // current page's link so it stays lit until you navigate away.
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const activeIndex = navLinks.findIndex((link) => isLinkActive(pathname, link.href));
  const highlightIndex = hoveredIndex ?? (activeIndex >= 0 ? activeIndex : null);

  useLayoutEffect(() => {
    const container = navRef.current;
    const el = highlightIndex !== null ? linkRefs.current[highlightIndex] : null;
    if (!container || !el) return;

    const measure = () => {
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setIndicator({ left: elRect.left - containerRect.left, width: elRect.width });
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [highlightIndex, pathname]);

  return (
    <header className="relative z-20 flex items-center justify-between">
      <Link
        href="/"
        className="relative z-40 font-sans text-lg tracking-tight text-charcoal transition-colors duration-200 ease-out hover:text-clay focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
      >
        Meraki Designs
      </Link>

      <nav
        ref={navRef}
        aria-label="Primary"
        onMouseLeave={() => setHoveredIndex(null)}
        className="relative hidden items-center gap-10 text-sm font-medium lg:flex"
      >
        {/* Limelight beam + bar — rendered first so it sits behind the link text.
            Tracks the hovered link, or the active page's link at rest. */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 transition-all duration-300 ease-out"
          style={{
            left: indicator.left,
            width: indicator.width,
            opacity: highlightIndex === null ? 0 : 1,
          }}
        >
          <div
            className="absolute top-0 left-1/2 h-10 w-[240%] -translate-x-1/2 bg-gradient-to-b from-clay/25 to-transparent [clip-path:polygon(32%_0,68%_0,94%_100%,6%_100%)]"
          />
          <div
            className="absolute inset-x-0 -top-1 h-px rounded-full bg-clay"
            style={{ boxShadow: "0 0 8px 1px var(--color-clay), 0 0 2px var(--color-clay)" }}
          />
        </div>

        {navLinks.map((link, index) => {
          const isActive = isLinkActive(pathname, link.href);
          const isHighlighted = highlightIndex === index;

          return (
            <Link
              key={link.href}
              href={link.href}
              ref={(el) => {
                linkRefs.current[index] = el;
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
              aria-current={isActive ? "page" : undefined}
              className={`relative py-1 transition-colors duration-200 ease-out ${
                isHighlighted ? "text-charcoal" : "text-charcoal/70"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <Link
        href="/contact"
        className="hidden items-center rounded-full bg-charcoal px-5 py-2.5 text-sm font-medium text-ivory transition-all duration-200 ease-out hover:-translate-y-px hover:bg-clay active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal lg:inline-flex"
      >
        Start a Project
      </Link>

      {/* Mobile: menu toggle + CTA */}
      <div className="relative z-40 flex items-center gap-3 lg:hidden">
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full bg-charcoal px-4 py-2 text-sm font-medium text-ivory transition-colors duration-200 ease-out hover:bg-clay focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
        >
          Start a Project
        </Link>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls={mobileNavId}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-colors duration-200 ease-out hover:border-clay hover:text-clay focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
        >
          <span className="relative block h-3 w-4">
            <span
              aria-hidden
              className={`absolute inset-x-0 top-0 h-px bg-current transition-transform duration-300 ease-out ${
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              aria-hidden
              className={`absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-300 ease-out ${
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile overlay menu */}
      <div
        id={mobileNavId}
        className={`fixed inset-0 z-30 bg-ivory transition-opacity duration-300 ease-out lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="flex h-full flex-col items-start justify-center gap-8 px-8"
        >
          {navLinks.map((link, index) => {
            const isActive = isLinkActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                style={{
                  transitionDelay: menuOpen ? `${index * 60 + 80}ms` : "0ms",
                }}
                className={`font-serif text-4xl transition-all duration-300 ease-out ${
                  isActive ? "text-clay" : "text-charcoal"
                } ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
