import { Reveal } from "@/components/reveal";

export function StudioIntro() {
  return (
    <section className="bg-ivory px-6 py-24 sm:px-10 sm:py-32 lg:px-8 lg:py-40 xl:px-14 2xl:px-20">
      <div className="mx-auto grid max-w-[1700px] gap-y-10 lg:grid-cols-12 lg:gap-x-12">
        <Reveal className="lg:col-span-5">
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-warm-grey">
            <span aria-hidden className="h-px w-8 bg-clay" />
            The Studio
          </p>

          <h2 className="mt-6 max-w-md font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] tracking-[-0.01em] text-charcoal">
            A considered approach to architecture.
          </h2>
        </Reveal>

        <Reveal delayMs={120} className="lg:col-span-6 lg:col-start-7 lg:pt-2">
          <p className="max-w-lg text-base leading-relaxed text-warm-grey sm:text-lg">
            Meraki Designs creates thoughtful architectural spaces and
            property developments across Derby and beyond — balancing
            considered design, practical living and lasting value.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
