"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-40 px-6 py-6 transition-[background-color,border-color,backdrop-filter] duration-300 ease-out sm:px-10 lg:px-8 lg:py-8 xl:px-14 2xl:px-20 ${
        scrolled
          ? "border-b border-hairline bg-ivory/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Navbar />
    </div>
  );
}
