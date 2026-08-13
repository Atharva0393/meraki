"use client";

import { useState, type FormEvent } from "react";
import { PillButton } from "@/components/pill-button";

/**
 * Filled fields sitting on the ivory form card — the tonal ladder is
 * stone panel → ivory card → stone fields, which is how this reads as a
 * distinct input surface without borders doing the work.
 */
const fieldClasses =
  "w-full rounded-xl border border-transparent bg-stone px-4 py-3 text-base text-charcoal placeholder:text-warm-grey/60 transition-colors duration-200 ease-out focus:border-charcoal/25 focus:outline-none";

const labelClasses =
  "text-xs font-medium uppercase tracking-[0.2em] text-warm-grey";

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-2.5 ${className}`}>
      <span className={labelClasses}>{label}</span>
      {children}
    </label>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="animate-fade-up rounded-2xl border border-hairline bg-ivory px-8 py-12 sm:px-10 sm:py-14">
        <p className="font-serif text-2xl text-charcoal">Thank you.</p>
        <p className="mt-3 max-w-sm text-base leading-relaxed text-warm-grey">
          We&apos;ve received your enquiry and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-hairline bg-ivory px-6 py-8 sm:px-8 sm:py-10"
    >
      <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
        <Field label="Name">
          <input
            type="text"
            name="name"
            required
            className={fieldClasses}
            placeholder="Your full name"
          />
        </Field>

        <Field label="Email">
          <input
            type="email"
            name="email"
            required
            className={fieldClasses}
            placeholder="you@example.com"
          />
        </Field>

        <Field label="Phone">
          <input
            type="tel"
            name="phone"
            className={fieldClasses}
            placeholder="Optional"
          />
        </Field>

        <Field label="Project Type">
          <div className="relative">
            <select
              name="projectType"
              defaultValue=""
              className={`${fieldClasses} appearance-none pr-10`}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="new-build">New Build</option>
              <option value="extension">Extension</option>
              <option value="refurbishment">Refurbishment</option>
              <option value="property-development">
                Property Development
              </option>
              <option value="other">Other</option>
            </select>
            <svg
              aria-hidden
              viewBox="0 0 12 8"
              className="pointer-events-none absolute right-4 top-1/2 h-2 w-3 -translate-y-1/2 text-warm-grey"
            >
              <path
                d="M1 1.5 6 6.5 11 1.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Field>

        <Field label="Location" className="sm:col-span-2">
          <input
            type="text"
            name="location"
            className={fieldClasses}
            placeholder="Where is the project located?"
          />
        </Field>

        <Field label="Tell us about your project" className="sm:col-span-2">
          <textarea
            name="message"
            required
            rows={5}
            className={`${fieldClasses} resize-none`}
            placeholder="Share a little about what you have in mind"
          />
        </Field>
      </div>

      <PillButton type="submit" className="mt-8 w-full sm:w-fit">
        Send Enquiry →
      </PillButton>
    </form>
  );
}
