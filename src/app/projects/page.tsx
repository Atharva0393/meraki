import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { PageHero } from "@/components/page-hero";
import { ProjectGallery } from "@/components/project-gallery";

export const metadata: Metadata = {
  title: "Projects — Meraki Designs",
  description:
    "Explore a selection of architectural design, refurbishment and property development work by Meraki Designs.",
};

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      <SiteHeader />
      <PageHero
        eyebrow="Selected Work"
        headline="Projects shaped around place."
        supporting="Explore a selection of architectural design, refurbishment and property development work."
      />
      <ProjectGallery />
    </main>
  );
}
