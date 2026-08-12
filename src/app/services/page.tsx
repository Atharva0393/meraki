import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { PageHero } from "@/components/page-hero";
import { NumberedList } from "@/components/numbered-list";

export const metadata: Metadata = {
  title: "Services — Meraki Designs",
  description:
    "Architectural design, property development, refurbishments and extensions, and architectural advice from Meraki Designs.",
};

const services = [
  {
    number: "01",
    title: "Architectural Design",
    description:
      "Thoughtful architectural solutions developed around your site, brief and aspirations.",
  },
  {
    number: "02",
    title: "Property Development",
    description:
      "Design-led development guidance from initial concept through to a considered proposal.",
  },
  {
    number: "03",
    title: "Refurbishments & Extensions",
    description:
      "Transforming existing spaces through carefully considered additions, alterations and improvements.",
  },
  {
    number: "04",
    title: "Architectural Advice",
    description:
      "Professional guidance to help you understand possibilities, planning considerations and the next steps for your project.",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <SiteHeader />
      <PageHero eyebrow="Services" headline="From first idea to finished space." />
      <NumberedList items={services} />
    </main>
  );
}
