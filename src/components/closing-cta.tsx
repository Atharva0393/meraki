import { Eyebrow } from "@/components/eyebrow";
import { PillButton } from "@/components/pill-button";
import { Reveal } from "@/components/reveal";

export function ClosingCta({
  eyebrow,
  headline,
  supporting,
  ctaLabel = "Start a Project",
}: {
  eyebrow?: string;
  headline?: string;
  supporting?: string;
  ctaLabel?: string;
}) {
  const hasText = eyebrow || headline || supporting;

  return (
    <div className="bg-ivory px-6 py-20 sm:px-10 sm:py-28 lg:px-8 lg:py-32 xl:px-14 2xl:px-20">
      <Reveal className="mx-auto flex max-w-[1700px] flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        {hasText ? (
          <div className="max-w-lg">
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            {headline ? (
              <h2
                className={`font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.01em] text-charcoal ${eyebrow ? "mt-4" : ""}`}
              >
                {headline}
              </h2>
            ) : null}
            {supporting ? (
              <p
                className={`text-base leading-relaxed text-warm-grey ${eyebrow || headline ? "mt-4" : ""}`}
              >
                {supporting}
              </p>
            ) : null}
          </div>
        ) : null}
        <PillButton href="/contact">{ctaLabel} →</PillButton>
      </Reveal>
    </div>
  );
}
