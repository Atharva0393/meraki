"use client";

import { useState, type FormEvent } from "react";
import { PillButton } from "@/components/pill-button";

const fieldClasses =
  "peer w-full border-b border-hairline bg-transparent py-3 text-base text-charcoal placeholder:text-warm-grey/60 transition-colors duration-300 ease-out focus:outline-none";

const labelClasses =
  "text-xs font-medium uppercase tracking-[0.2em] text-warm-grey transition-colors duration-300 ease-out peer-focus:text-charcoal";

const underlineClasses =
  "pointer-events-none absolute inset-x-0 bottom-0 h-px origin-center scale-x-0 bg-charcoal transition-transform duration-300 ease-out peer-focus:scale-x-100";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className={labelClasses}>{label}</span>
      <div className="relative">
        {children}
        <span aria-hidden className={underlineClasses} />
      </div>
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
      <div className="animate-fade-up border-t border-hairline pt-8">
        <p className="font-serif text-2xl text-charcoal">Thank you.</p>
        <p className="mt-3 max-w-sm text-base leading-relaxed text-warm-grey">
          We&apos;ve received your enquiry and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
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
          <select
            name="projectType"
            defaultValue=""
            className={`${fieldClasses} appearance-none`}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="new-build">New Build</option>
            <option value="extension">Extension</option>
            <option value="refurbishment">Refurbishment</option>
            <option value="property-development">Property Development</option>
            <option value="other">Other</option>
          </select>
        </Field>

        <div className="sm:col-span-2">
          <Field label="Location">
            <input
              type="text"
              name="location"
              className={fieldClasses}
              placeholder="Where is the project located?"
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field label="Tell us about your project">
            <textarea
              name="message"
              required
              rows={5}
              className={`${fieldClasses} resize-none`}
              placeholder="Share a little about what you have in mind"
            />
          </Field>
        </div>
      </div>

      <PillButton type="submit" className="w-fit">
        Send Enquiry →
      </PillButton>
    </form>
  );
}
