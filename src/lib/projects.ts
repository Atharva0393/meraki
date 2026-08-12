export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  /** Populate once real project photography is available. */
  image?: {
    src: string;
    alt: string;
  };
};

export const projects: Project[] = [
  {
    slug: "contemporary-residence",
    title: "Contemporary Residence",
    location: "Derby, UK",
    category: "Residential Architecture",
  },
  {
    slug: "bespoke-living",
    title: "Bespoke Living",
    location: "Nottingham, UK",
    category: "Residential Design",
  },
  {
    slug: "the-modern-extension",
    title: "The Modern Extension",
    location: "Derbyshire, UK",
    category: "Extension & Refurbishment",
  },
];
