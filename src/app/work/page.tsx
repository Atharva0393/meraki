import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Eyebrow } from "@/components/eyebrow";
import { ArrowLink } from "@/components/arrow-link";
import { Reveal } from "@/components/reveal";
import {
  CoverflowCarousel,
  type CoverflowSlide,
} from "@/components/ui/coverflow-carousel";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Meraki Designs",
  description:
    "A selection of architectural design, refurbishment and property development projects by Meraki Designs.",
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=900&h=900&fit=crop&q=75&auto=format`;

/**
 * Placeholder imagery only — stock architectural photography standing in until
 * Meraki's own project photography is available. Two views per project, in the
 * same order as `projects`.
 */
const slides: CoverflowSlide[] = [
  {
    src: unsplash("1523217582562-09d0def993a6"),
    alt: "White rendered modernist house with stacked rectilinear volumes",
    title: "Contemporary Residence",
    subtitle: "Residential Architecture — Derby, UK",
  },
  {
    src: unsplash("1503174971373-b1f69850bded"),
    alt: "Open-plan living space opening onto a garden through full-width glazing",
    title: "Contemporary Residence",
    subtitle: "Residential Architecture — Derby, UK",
  },
  {
    src: unsplash("1567767292278-a4f21aa2d36e"),
    alt: "Bright living room with a large window and pale, restrained furnishing",
    title: "Bespoke Living",
    subtitle: "Residential Design — Nottingham, UK",
  },
  {
    src: unsplash("1502005229762-cf1b2da7c5d6"),
    alt: "Timber and steel staircase rising through a double-height interior",
    title: "Bespoke Living",
    subtitle: "Residential Design — Nottingham, UK",
  },
  {
    src: unsplash("1494526585095-c41746248156"),
    alt: "Contemporary house at dusk with a lit entrance and layered facade",
    title: "The Modern Extension",
    subtitle: "Extension & Refurbishment — Derbyshire, UK",
  },
  {
    src: unsplash("1600047509358-9dc75507daeb"),
    alt: "Modern house exterior combining white render with timber cladding",
    title: "The Modern Extension",
    subtitle: "Extension & Refurbishment — Derbyshire, UK",
  },
];

export default function WorkPage() {
  return (
    <main className="flex-1">
      <SiteHeader />

      <div className="bg-ivory px-6 pb-10 pt-4 sm:px-10 lg:px-8 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1700px]">
          <Reveal>
            <Eyebrow>Selected Work</Eyebrow>
          </Reveal>

          <Reveal delayMs={90}>
            <h1 className="mt-6 max-w-2xl font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.01em] text-charcoal">
              Spaces shaped
              <br />
              around place.
            </h1>
          </Reveal>

          <Reveal delayMs={180}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-warm-grey sm:text-lg">
              A selection of architectural design, refurbishment and property
              development projects by Meraki Designs.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="bg-ivory pb-20 sm:pb-24">
        <Reveal>
          <CoverflowCarousel
            slides={slides}
            label="Selected work"
            cardWidth="clamp(210px, 30vw, 400px)"
            showCaption
            showNavigation
            showPagination
            cardClassName="rounded-none shadow-[0_30px_70px_-34px_rgba(33,31,28,0.55)]"
          />
        </Reveal>
      </div>

      <div className="bg-ivory px-6 pb-24 sm:px-10 sm:pb-32 lg:px-8 lg:pb-40 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1700px]">
          <Reveal>
            <span aria-hidden className="block h-px w-full bg-hairline" />
          </Reveal>

          <ul className="mt-10 flex flex-col gap-10 lg:mt-14 lg:flex-row lg:gap-16">
            {projects.map((project, index) => (
              <li key={project.slug} className="flex-1">
                <Reveal delayMs={index * 90}>
                  <span className="font-serif text-lg text-clay">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-2 font-serif text-2xl text-charcoal sm:text-3xl">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-warm-grey">
                    {project.category} — {project.location}
                  </p>
                  <div className="mt-5">
                    <ArrowLink href={`/projects/${project.slug}`}>
                      View project
                    </ArrowLink>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
