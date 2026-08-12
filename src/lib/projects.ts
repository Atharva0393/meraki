export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  image?: {
    src: string;
    alt: string;
  };
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=1600&h=1600&fit=crop&q=75&auto=format`;

/**
 * Stock architectural photography standing in until Meraki's own project
 * photography is available — same images already used and verified on the
 * Work page, reused here so each project reads as one consistent building
 * across the homepage, /projects and /work rather than a different photo
 * per page.
 */
export const projects: Project[] = [
  {
    slug: "contemporary-residence",
    title: "Contemporary Residence",
    location: "Derby, UK",
    category: "Residential Architecture",
    image: {
      src: unsplash("1523217582562-09d0def993a6"),
      alt: "White rendered modernist house with stacked rectilinear volumes",
    },
  },
  {
    slug: "bespoke-living",
    title: "Bespoke Living",
    location: "Nottingham, UK",
    category: "Residential Design",
    image: {
      src: unsplash("1567767292278-a4f21aa2d36e"),
      alt: "Bright living room with a large window and pale, restrained furnishing",
    },
  },
  {
    slug: "the-modern-extension",
    title: "The Modern Extension",
    location: "Derbyshire, UK",
    category: "Extension & Refurbishment",
    image: {
      src: unsplash("1494526585095-c41746248156"),
      alt: "Contemporary house at dusk with a lit entrance and layered facade",
    },
  },
];
