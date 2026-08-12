import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";

const aspects = ["aspect-[21/9]", "aspect-[4/3]", "aspect-[16/9]"];

export function ProjectGallery() {
  return (
    <div className="bg-ivory px-6 pb-24 sm:px-10 sm:pb-32 lg:px-8 lg:pb-40 xl:px-14 2xl:px-20">
      <div className="mx-auto flex max-w-[1700px] flex-col gap-20 lg:gap-28">
        {projects.map((project, index) => {
          const alignEnd = index % 2 === 1;

          return (
            <Link
              href={`/projects/${project.slug}`}
              key={project.slug}
              className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
            >
              <Reveal variant="scale">
                <div
                  className={`relative w-full overflow-hidden ${aspects[index % aspects.length]}`}
                >
                  <ProjectVisual project={project} index={index} />
                </div>
              </Reveal>

              <Reveal delayMs={150}>
                <div
                  className={`mt-6 flex flex-col gap-1 ${
                    alignEnd ? "items-end text-right" : "items-start text-left"
                  }`}
                >
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-warm-grey">
                    {project.category} — {project.location}
                  </p>
                  <h2 className="font-serif text-2xl text-charcoal transition-transform duration-300 ease-out group-hover:translate-x-1.5 sm:text-3xl">
                    {project.title}
                  </h2>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-charcoal opacity-70 transition-all duration-300 ease-out group-hover:text-clay group-hover:opacity-100">
                    <span className="border-b border-charcoal/40 pb-0.5 transition-colors duration-300 ease-out group-hover:border-clay">
                      View project
                    </span>
                    <span
                      aria-hidden
                      className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Reveal>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
