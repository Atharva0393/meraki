import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { PageHero } from "@/components/page-hero";
import { NumberedList } from "@/components/numbered-list";
import { ClosingCta } from "@/components/closing-cta";

export const metadata: Metadata = {
  title: "The Studio — Meraki Designs",
  description:
    "Meraki Designs is an architectural design and property development studio based in Derby, creating thoughtful spaces shaped around people, context and everyday life.",
};

const principles = [
  {
    number: "01",
    title: "Considered",
    description:
      "Every project begins with understanding the site, the brief and the people who will use the space.",
  },
  {
    number: "02",
    title: "Bespoke",
    description:
      "We develop individual design solutions rather than applying a one-size-fits-all approach.",
  },
  {
    number: "03",
    title: "Sustainable",
    description:
      "We consider longevity, efficiency and responsible design throughout the process.",
  },
];

export default function StudioPage() {
  return (
    <main className="flex-1">
      <SiteHeader />
      <PageHero
        eyebrow="The Studio"
        headline="Designing with purpose."
        supporting="Meraki Designs is an architectural design and property development studio based in Derby, creating thoughtful spaces shaped around people, context and everyday life."
      />
      <NumberedList items={principles} />
      <ClosingCta />
    </main>
  );
}
