import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { PillButton } from "@/components/pill-button";
import { Reveal } from "@/components/reveal";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const contactDetails = [
  { label: "Email", value: "[Add email address]" },
  { label: "Phone", value: "[Add phone number]" },
  { label: "Location", value: "Derby, United Kingdom" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative bg-charcoal"
      style={{
        clipPath: "polygon(0 40px, 58% 0, 100% 22px, 100% 100%, 0 100%)",
      }}
    >
      <div className="px-6 pt-24 sm:px-10 sm:pt-28 lg:px-8 lg:pt-32 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1700px]">
          {/* Section 1 — signature + primary navigation */}
          <div className="flex flex-col gap-16 pb-20 sm:pb-24 lg:flex-row lg:items-start lg:justify-between lg:pb-28">
            <Reveal className="max-w-md">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-ivory/50">
                Meraki Designs
              </p>
              <p className="mt-5 font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.1] tracking-[-0.01em] text-ivory">
                Thoughtful spaces.
                <br />
                <span className="font-normal italic">Designed to last.</span>
              </p>
            </Reveal>

            <Reveal delayMs={90}>
              <nav aria-label="Footer">
                <ul className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm font-medium text-ivory/70 transition-colors duration-200 ease-out hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivory"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </Reveal>
          </div>

          {/* Section 2 — oversized CTA panel, overlapping the upper field */}
          <Reveal delayMs={150} className="-mt-14 sm:-mt-16 lg:-mt-20">
            <div className="rounded-[2rem] border border-hairline bg-ivory px-8 py-12 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
              <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
                <div className="max-w-xl">
                  <Eyebrow>Start a Project</Eyebrow>
                  <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.01em] text-charcoal">
                    Let&apos;s create something
                    <br />
                    <span className="font-normal italic">considered.</span>
                  </h2>
                  <p className="mt-6 max-w-md text-base leading-relaxed text-warm-grey">
                    Have a project in mind? Tell us what you&apos;re planning
                    and let&apos;s start a conversation.
                  </p>
                  <div className="mt-8">
                    <PillButton href="/contact" variant="black">
                      Start a Project →
                    </PillButton>
                  </div>
                </div>

                {/* Section 3 — contact details */}
                <div className="flex shrink-0 flex-col gap-6 border-t border-hairline pt-8 lg:min-w-[220px] lg:border-t-0 lg:pt-0">
                  {contactDetails.map((detail) => (
                    <div key={detail.label}>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-warm-grey">
                        {detail.label}
                      </p>
                      <p className="mt-1.5 font-serif text-lg text-charcoal">
                        {detail.value}
                      </p>
                    </div>
                  ))}

                  {/* Section 4 — socials */}
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-warm-grey">
                      Follow
                    </p>
                    <a
                      href="https://www.instagram.com/merakidesigns_23?igsh=N3RpcjA0N3oxdGo5&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-1.5 inline-flex items-center gap-1.5 font-serif text-lg text-charcoal transition-colors duration-200 ease-out hover:text-clay focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
                    >
                      Instagram
                      <span
                        aria-hidden
                        className="text-sm transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      >
                        ↗
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Section 5 — bottom bar */}
      <div className="px-6 pb-8 pt-16 sm:px-10 lg:px-8 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1700px] border-t border-ivory/10 pt-8">
          <p className="text-xs text-ivory/40">© {year} Meraki Designs</p>
        </div>
      </div>
    </footer>
  );
}
