import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Eyebrow } from "@/components/eyebrow";
import { ArrowLink } from "@/components/arrow-link";
import { PillButton } from "@/components/pill-button";
import { NumberedList } from "@/components/numbered-list";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "About — Meraki Designs",
  description:
    "Meraki Designs is an architectural design and property development studio based in Derby, UK — creating considered, individual spaces shaped around context and the way people live.",
};

const approach = [
  {
    number: "01",
    title: "Context",
    description:
      "Understanding the site, its surroundings and the people who will use the space.",
  },
  {
    number: "02",
    title: "Clarity",
    description:
      "Developing thoughtful design solutions that balance ambition with practicality.",
  },
  {
    number: "03",
    title: "Craft",
    description:
      "Paying attention to proportion, material, light and the details that shape experience.",
  },
  {
    number: "04",
    title: "Longevity",
    description:
      "Creating spaces designed to remain relevant, useful and considered over time.",
  },
];

const values = [
  {
    number: "01",
    title: "Considered",
    description:
      "Every decision is shaped by context, proportion and purpose — nothing arbitrary.",
  },
  {
    number: "02",
    title: "Bespoke",
    description:
      "Each project is developed around its individual brief, not a one-size-fits-all approach.",
  },
  {
    number: "03",
    title: "Practical",
    description:
      "Ideas are grounded in how a space is actually used, day to day.",
  },
  {
    number: "04",
    title: "Lasting",
    description:
      "Built and specified to remain relevant well beyond the moment it's finished.",
  },
];

const services = [
  "Architectural Design",
  "Property Development",
  "Refurbishments & Extensions",
  "Architectural Advice",
];

export default function AboutPage() {
  const featureProject = projects.find(
    (p) => p.slug === "contemporary-residence",
  )!;
  const wideProject = projects.find(
    (p) => p.slug === "the-modern-extension",
  )!;

  return (
    <main className="flex-1">
      <SiteHeader />

      {/* Section 1 — Introduction */}
      <div className="bg-ivory px-6 pb-16 pt-4 sm:px-10 sm:pb-20 lg:px-8 lg:pb-24 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1700px]">
          <Reveal>
            <Eyebrow>About the Studio</Eyebrow>
          </Reveal>

          <Reveal delayMs={90}>
            <h1 className="mt-6 max-w-2xl font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.01em] text-charcoal">
              Architecture shaped
              <br />
              around how people live.
            </h1>
          </Reveal>

          <Reveal delayMs={180}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-warm-grey sm:text-lg">
              Meraki Designs is an architectural design and property
              development studio based in Derby, creating thoughtful spaces
              shaped around people, context and everyday life.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Section 2 — Visual studio statement */}
      <div className="border-t border-hairline bg-ivory px-6 py-20 sm:px-10 sm:py-24 lg:px-8 lg:py-28 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1700px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Card 01 — large feature */}
            <Reveal variant="scale" className="lg:col-span-7 lg:row-span-2">
              <Link
                href="/work"
                className="group flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
              >
                <div className="relative aspect-[4/5] w-full flex-1 overflow-hidden rounded-2xl lg:aspect-auto">
                  <Image
                    src={featureProject.image!.src}
                    alt={featureProject.image!.alt}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="font-serif text-2xl text-charcoal transition-transform duration-300 ease-out group-hover:translate-x-1.5 sm:text-3xl">
                    Designed with intention.
                  </h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-warm-grey">
                    Every project begins with an understanding of its place,
                    its purpose and the people who will use it.
                  </p>
                </div>
              </Link>
            </Reveal>

            {/* Card 02 — small */}
            <Reveal delayMs={90} className="lg:col-span-5">
              <div className="flex h-full flex-col justify-center rounded-2xl bg-stone px-8 py-10 sm:px-10 sm:py-12">
                <h3 className="font-serif text-2xl text-charcoal sm:text-3xl">
                  Considered
                </h3>
                <p className="mt-4 max-w-sm text-base leading-relaxed text-warm-grey">
                  Design decisions are shaped by context, proportion,
                  material and the way a space is experienced.
                </p>
              </div>
            </Reveal>

            {/* Card 03 — small */}
            <Reveal delayMs={150} className="lg:col-span-5">
              <div className="flex h-full flex-col justify-center rounded-2xl border border-hairline px-8 py-10 sm:px-10 sm:py-12">
                <h3 className="font-serif text-2xl text-charcoal sm:text-3xl">
                  Bespoke
                </h3>
                <p className="mt-4 max-w-sm text-base leading-relaxed text-warm-grey">
                  Each project is developed around its individual brief
                  rather than a one-size-fits-all approach.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Card 04 — wide feature */}
          <Reveal variant="scale" delayMs={100} className="mt-8 lg:mt-10">
            <Link
              href="/work"
              className="group grid gap-6 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal lg:grid-cols-2 lg:items-center lg:gap-12"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                <Image
                  src={wideProject.image!.src}
                  alt={wideProject.image!.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div>
                <h3 className="font-serif text-3xl text-charcoal transition-transform duration-300 ease-out group-hover:translate-x-1.5 sm:text-4xl">
                  Spaces made for living.
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-warm-grey">
                  We believe good architecture should feel natural to live
                  in — considered in detail, practical in use and lasting in
                  value.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-charcoal opacity-80 transition-all duration-300 ease-out group-hover:text-clay group-hover:opacity-100">
                  <span className="border-b border-charcoal/40 pb-0.5 transition-colors duration-300 ease-out group-hover:border-clay">
                    View our work
                  </span>
                  <span
                    aria-hidden
                    className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>

      {/* Section 3 — The studio approach */}
      <div className="border-t border-hairline bg-ivory px-6 py-20 sm:px-10 sm:py-24 lg:px-8 lg:py-28 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1700px]">
          <Reveal>
            <Eyebrow>Our Approach</Eyebrow>
          </Reveal>
          <Reveal delayMs={90}>
            <h2 className="mt-6 max-w-xl font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] tracking-[-0.01em] text-charcoal">
              Good architecture begins
              <br />
              with understanding.
            </h2>
          </Reveal>
        </div>
      </div>
      <NumberedList items={approach} />

      {/* Section 4 — The person behind the studio */}
      <div className="border-t border-hairline bg-ivory px-6 py-20 sm:px-10 sm:py-24 lg:px-8 lg:py-28 xl:px-14 2xl:px-20">
        <div className="mx-auto grid max-w-[1700px] gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal variant="scale" className="lg:col-span-5">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-hairline bg-stone" />
          </Reveal>

          <Reveal delayMs={120} className="lg:col-span-6 lg:col-start-7 lg:self-center">
            <Eyebrow>Founded By</Eyebrow>
            <h2 className="mt-6 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] tracking-[-0.01em] text-charcoal">
              Aatif Shaikh
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-warm-grey sm:text-lg">
              Meraki Designs is built around a considered approach to
              architecture, property development and the way people
              experience space.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Section 5 — What we value */}
      <div className="border-t border-hairline bg-ivory px-6 py-20 sm:px-10 sm:py-24 lg:px-8 lg:py-28 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1700px]">
          <Reveal>
            <Eyebrow>What We Value</Eyebrow>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.number} delayMs={index * 100}>
                <span className="font-serif text-[clamp(3rem,6vw,4.5rem)] leading-none text-charcoal/10">
                  {value.number}
                </span>
                <h3 className="mt-2 font-serif text-2xl text-charcoal">
                  {value.title}
                </h3>
                <p className="mt-3 max-w-xs text-base leading-relaxed text-warm-grey">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Section 6 — Trust */}
      <div className="border-t border-hairline bg-stone px-6 py-20 sm:px-10 sm:py-24 lg:px-8 lg:py-28 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1700px]">
          <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-12">
            <Reveal className="lg:col-span-5">
              <Eyebrow>Built On</Eyebrow>
              <h2 className="mt-6 max-w-md font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] tracking-[-0.01em] text-charcoal">
                Built around thoughtful design.
              </h2>
            </Reveal>

            <Reveal delayMs={120} className="lg:col-span-6 lg:col-start-7 lg:pt-2">
              <p className="max-w-lg text-base leading-relaxed text-warm-grey sm:text-lg">
                Every project draws on the same considered approach — from
                first sketch through to a finished space.
              </p>
              <ul className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-4">
                {services.map((service) => (
                  <li
                    key={service}
                    className="text-sm font-medium uppercase tracking-[0.15em] text-charcoal"
                  >
                    {service}
                  </li>
                ))}
              </ul>
              <ArrowLink href="/services" className="mt-8">
                Explore our services
              </ArrowLink>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Section 7 — Final CTA */}
      <div className="border-t border-hairline bg-ivory px-6 py-20 sm:px-10 sm:py-24 lg:px-8 lg:py-28 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1700px]">
          <Reveal>
            <Eyebrow>Start a Project</Eyebrow>
          </Reveal>

          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal delayMs={90} className="max-w-xl">
              <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] tracking-[-0.01em] text-charcoal">
                Let&apos;s create something
                <br />
                worth living in.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-warm-grey sm:text-lg">
                Whether you&apos;re considering a new home, extension,
                refurbishment or property development, we&apos;d be happy to
                hear about your plans.
              </p>
            </Reveal>

            <Reveal delayMs={180}>
              <PillButton href="/contact" variant="black">
                Start a Project →
              </PillButton>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
