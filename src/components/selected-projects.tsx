import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/lib/projects";
import { Reveal } from "@/components/reveal";
import { ArrowLink } from "@/components/arrow-link";

function ProjectVisual({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  if (project.image) {
    return (
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
    );
  }

  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-stone transition-transform duration-700 ease-out group-hover:scale-[1.03]">
      <span className="font-serif text-[clamp(3.5rem,9vw,7rem)] leading-none text-charcoal/10">
        {number}
      </span>
      <span className="mt-4 text-[0.65rem] font-medium uppercase tracking-[0.24em] text-warm-grey/70">
        Photography to follow
      </span>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  aspect,
  className = "",
}: {
  project: Project;
  index: number;
  aspect: string;
  className?: string;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal ${className}`}
    >
      <Reveal variant="scale">
        <div className={`relative w-full overflow-hidden ${aspect}`}>
          <ProjectVisual project={project} index={index} />
        </div>
      </Reveal>

      <Reveal delayMs={120}>
        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl text-charcoal transition-transform duration-300 ease-out group-hover:translate-x-1.5 sm:text-2xl">
              {project.title}
            </h3>
            <p className="mt-1.5 text-sm text-warm-grey">{project.location}</p>
          </div>
          <p className="pt-1 text-right text-xs font-medium uppercase tracking-[0.2em] text-warm-grey">
            {project.category}
          </p>
        </div>
      </Reveal>
    </Link>
  );
}

export function SelectedProjects() {
  const [first, second, third] = projects;

  return (
    <section className="bg-ivory px-6 py-24 sm:px-10 sm:py-32 lg:px-8 lg:py-40 xl:px-14 2xl:px-20">
      <div className="mx-auto max-w-[1700px]">
        <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-12">
          <Reveal className="lg:col-span-5">
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-warm-grey">
              <span aria-hidden className="h-px w-8 bg-clay" />
              Selected Work
            </p>

            <h2 className="mt-6 max-w-md font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] tracking-[-0.01em] text-charcoal">
              Spaces with purpose.
            </h2>
          </Reveal>

          <Reveal
            delayMs={120}
            className="lg:col-span-6 lg:col-start-7 lg:pt-2"
          >
            <p className="max-w-lg text-base leading-relaxed text-warm-grey sm:text-lg">
              A selection of architectural projects shaped around context,
              function and the way people live.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:mt-24 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0">
          <ProjectCard
            project={first}
            index={0}
            aspect="aspect-[16/9]"
            className="md:col-span-2 lg:col-span-12"
          />

          <ProjectCard
            project={second}
            index={1}
            aspect="aspect-[3/4]"
            className="lg:col-span-5 lg:mt-20"
          />

          <ProjectCard
            project={third}
            index={2}
            aspect="aspect-[4/3]"
            className="lg:col-span-6 lg:col-start-7"
          />
        </div>

        <Reveal className="mt-16 lg:mt-24">
          <ArrowLink href="/projects">View all projects</ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
