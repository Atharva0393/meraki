import type { Metadata } from "next";
import { Fraunces, Jost } from "next/font/google";
import { PageTransition } from "@/components/page-transition";
import { Footer } from "@/components/footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

// Sleek geometric sans for nav/UI/labels/body — Fraunces stays the editorial
// serif for display headlines. Replaces Inter per client feedback ("sleek
// font... Century Gothic k jaisa"): Jost is a true geometric sans from the
// same design lineage as Century Gothic/Futura, without literally using
// Century Gothic (not a web font, licensing aside).
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Meraki Designs — Architectural Design & Property Development, Derby",
  description:
    "Meraki Designs is a premium architectural design and property development practice based in Derby, UK. Spaces designed with intention.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${fraunces.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
