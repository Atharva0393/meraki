import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { Eyebrow } from "@/components/eyebrow";
import { ArrowLink } from "@/components/arrow-link";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project ? `${project.title} — Meraki Designs` : "Project — Meraki Designs",
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  if (!project) {
    notFound();
  }

  return (
    <main className="flex-1">
      <SiteHeader />

      <div className="bg-ivory px-6 pb-10 pt-4 sm:px-10 lg:px-8 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1700px]">
          <Reveal>
            <Eyebrow>
              {project.category} — {project.location}
            </Eyebrow>
            <h1 className="mt-6 max-w-2xl font-serif text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.05] tracking-[-0.01em] text-charcoal">
              {project.title}
            </h1>
          </Reveal>
        </div>
      </div>

      <div className="bg-ivory px-6 pb-24 sm:px-10 sm:pb-32 lg:px-8 lg:pb-40 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1700px]">
          <Reveal variant="scale">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <ProjectVisual project={project} index={index} />
            </div>
          </Reveal>

          <Reveal delayMs={150}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-warm-grey">
              The full case study for this project is being prepared and will
              be published here shortly, including project photography,
              drawings and background on the brief.
            </p>

            <ArrowLink href="/projects" className="mt-8">
              Back to all projects
            </ArrowLink>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
