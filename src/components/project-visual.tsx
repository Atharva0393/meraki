import Image from "next/image";
import type { Project } from "@/lib/projects";

export function ProjectVisual({
  project,
  index,
  className = "",
}: {
  project: Project;
  index: number;
  className?: string;
}) {
  if (project.image) {
    return (
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        sizes="(min-width: 1024px) 80vw, 100vw"
        className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${className}`}
      />
    );
  }

  const number = String(index + 1).padStart(2, "0");

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center bg-stone transition-transform duration-700 ease-out group-hover:scale-[1.03] ${className}`}
    >
      <span className="font-serif text-[clamp(3.5rem,9vw,7rem)] leading-none text-charcoal/10">
        {number}
      </span>
      <span className="mt-4 text-[0.65rem] font-medium uppercase tracking-[0.24em] text-warm-grey/70">
        Photography to follow
      </span>
    </div>
  );
}
