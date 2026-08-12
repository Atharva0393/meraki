import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { PageTransition } from "@/components/page-transition";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
