import { Reveal } from "@/components/reveal";

export type NumberedListItem = {
  number: string;
  title: string;
  description: string;
};

export function NumberedList({ items }: { items: NumberedListItem[] }) {
  return (
    <div className="border-t border-hairline">
      <div className="mx-auto max-w-[1700px] divide-y divide-hairline px-6 sm:px-10 lg:px-8 xl:px-14 2xl:px-20">
        {items.map((item, index) => (
          <Reveal key={item.number} delayMs={index * 90}>
            <div className="group grid gap-x-12 gap-y-4 py-12 lg:grid-cols-12 lg:py-16">
              <span className="font-serif text-2xl text-charcoal/25 transition-colors duration-300 ease-out group-hover:text-clay lg:col-span-2">
                {item.number}
              </span>
              <h3 className="font-serif text-2xl text-charcoal transition-transform duration-300 ease-out group-hover:translate-x-1.5 lg:col-span-3">
                {item.title}
              </h3>
              <p className="max-w-md text-base leading-relaxed text-warm-grey transition-colors duration-300 ease-out group-hover:text-charcoal/80 lg:col-span-6 lg:col-start-7">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
