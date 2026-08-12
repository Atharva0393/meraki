import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact — Meraki Designs",
  description:
    "Get in touch with Meraki Designs to discuss a new home, extension, refurbishment or property development.",
};

const contactDetails = [
  { label: "Email", value: "[Add email address]" },
  { label: "Phone", value: "[Add phone number]" },
  { label: "Location", value: "Derby, United Kingdom" },
];

export default function ContactPage() {
  return (
    <main className="flex-1">
      <SiteHeader />
      <PageHero
        eyebrow="Start a Project"
        headline="Let's discuss your project."
        supporting="Whether you're considering a new home, extension, refurbishment or property development, we'd be happy to hear about your plans."
      />

      <div className="bg-ivory px-6 pb-24 sm:px-10 sm:pb-32 lg:px-8 lg:pb-40 xl:px-14 2xl:px-20">
        <div className="mx-auto grid max-w-[1700px] gap-16 lg:grid-cols-12 lg:gap-x-12">
          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="flex flex-col gap-8 border-t border-hairline pt-8 lg:border-t-0 lg:pt-0">
              {contactDetails.map((detail, index) => (
                <Reveal key={detail.label} delayMs={150 + index * 90}>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-warm-grey">
                    {detail.label}
                  </p>
                  <p className="mt-2 font-serif text-xl text-charcoal">
                    {detail.value}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
