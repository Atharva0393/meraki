import { Eyebrow } from "@/components/eyebrow";
import { Reveal } from "@/components/reveal";

export function PageHero({
  eyebrow,
  headline,
  supporting,
}: {
  eyebrow: string;
  headline: string;
  supporting?: string;
}) {
  return (
    <div className="bg-ivory px-6 pb-16 pt-4 sm:px-10 sm:pb-20 lg:px-8 lg:pb-24 xl:px-14 2xl:px-20">
      <div className="mx-auto max-w-[1700px]">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>

        <Reveal delayMs={90}>
          <h1 className="mt-6 max-w-2xl font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.01em] text-charcoal">
            {headline}
          </h1>
        </Reveal>

        {supporting ? (
          <Reveal delayMs={180}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-warm-grey sm:text-lg">
              {supporting}
            </p>
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}
