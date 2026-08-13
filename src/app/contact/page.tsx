import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Eyebrow } from "@/components/eyebrow";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact — Meraki Designs",
  description:
    "Get in touch with Meraki Designs to discuss a new home, extension, refurbishment or property development.",
};

const contactDetails = [
  {
    label: "Email",
    value: "info@merakidesignz.co.uk",
    href: "mailto:info@merakidesignz.co.uk",
  },
  {
    label: "Phone",
    value: "+44 7587 996832",
    href: "tel:+447587996832",
  },
  { label: "Location", value: "Derby, United Kingdom" },
  { label: "Address", value: "[ADD VERIFIED STUDIO ADDRESS]" },
];

export default function ContactPage() {
  return (
    <main className="flex-1">
      <SiteHeader />

      <div className="bg-ivory px-6 pb-24 pt-4 sm:px-10 sm:pb-32 lg:px-8 lg:pb-40 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1700px]">
          <Reveal>
            <div className="rounded-[2rem] bg-stone px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
              <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16">
                {/* Left — editorial statement + contact details */}
                <div className="lg:col-span-5">
                  <Eyebrow>Start a Project</Eyebrow>

                  <h1 className="mt-6 font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.01em] text-charcoal">
                    Let&apos;s discuss
                    <br />
                    <span className="font-normal italic">your project.</span>
                  </h1>

                  <p className="mt-6 max-w-md text-base leading-relaxed text-warm-grey">
                    Whether you&apos;re considering a new home, extension,
                    refurbishment or property development, we&apos;d be happy
                    to hear about your plans.
                  </p>

                  <div className="mt-10 flex flex-col gap-6 border-t border-hairline pt-10">
                    {contactDetails.map((detail) => (
                      <div key={detail.label}>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-warm-grey">
                          {detail.label}
                        </p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="mt-1.5 inline-block font-serif text-xl text-charcoal transition-colors duration-200 ease-out hover:text-clay focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="mt-1.5 font-serif text-xl text-charcoal">
                            {detail.value}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — form card */}
                <div className="lg:col-span-6 lg:col-start-7">
                  <ContactForm />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
