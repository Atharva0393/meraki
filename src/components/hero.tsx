import Image from "next/image";
import { heroImage } from "@/lib/media";
import { Navbar } from "@/components/navbar";

export function Hero() {
  return (
    <section className="bg-stone px-3 py-3 sm:px-5 sm:py-5 lg:px-8 lg:py-8">
      <div className="relative mx-auto max-w-[1700px] overflow-hidden rounded-[2rem] bg-ivory">
        {/* Desktop / large screens — card composition with the image overlapping the headline */}
        <div className="hidden px-8 pb-10 pt-6 lg:block xl:px-14 xl:pt-8 2xl:px-20">
          <Navbar />

          <div className="mt-8 flex flex-col items-center text-center">
            <p className="animate-fade-up flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-warm-grey">
              <span aria-hidden className="h-px w-8 bg-clay" />
              Meraki Designs — Derby, UK
              <span aria-hidden className="h-px w-8 bg-clay" />
            </p>

            <h1 className="animate-fade-up mt-5 font-serif text-[clamp(3rem,7vw,6.25rem)] leading-[0.98] tracking-[-0.01em] text-charcoal [animation-delay:90ms]">
              Spaces designed
              <br />
              <span className="font-normal italic">with intention.</span>
            </h1>
          </div>

          <div className="animate-reveal-image relative z-20 mx-auto -mt-14 aspect-[2800/1942] h-[clamp(460px,62vh,740px)] max-w-full self-center [animation-delay:160ms]">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="100vw"
              className="object-contain object-center"
            />
          </div>

          <div className="animate-fade-up relative z-10 mt-6 flex items-end [animation-delay:280ms]">
            <div className="max-w-xs">
              <p className="text-base leading-relaxed text-warm-grey">
                Architectural design, property development and thoughtful
                spaces created around the way you live.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-clay px-7 py-3.5 text-sm font-medium text-ivory transition-colors duration-200 ease-out hover:bg-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>

        {/* Mobile / tablet — rethought as a stacked composition, no overlap */}
        <div className="flex flex-col px-6 pb-10 pt-5 sm:px-8 lg:hidden">
          <Navbar />

          <p className="animate-fade-up mt-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-warm-grey">
            <span aria-hidden className="h-px w-8 bg-clay" />
            Meraki Designs — Derby, UK
          </p>

          <h1 className="animate-fade-up mt-6 font-serif text-[clamp(2.5rem,10vw,3.75rem)] leading-[1.05] tracking-[-0.01em] text-charcoal [animation-delay:90ms]">
            Spaces designed
            <br />
            <span className="font-normal italic">with intention.</span>
          </h1>

          <p className="animate-fade-up mt-6 max-w-md text-base leading-relaxed text-warm-grey [animation-delay:180ms]">
            Architectural design, property development and thoughtful spaces
            created around the way you live.
          </p>

          <div className="animate-fade-up mt-8 [animation-delay:270ms]">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-clay px-7 py-3.5 text-sm font-medium text-ivory transition-colors duration-200 ease-out hover:bg-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
            >
              Start a Project
            </a>
          </div>

          <div className="animate-reveal-image relative mt-10 [animation-delay:160ms]">
            <div className="relative aspect-[2800/1942] w-full">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                priority
                sizes="100vw"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
