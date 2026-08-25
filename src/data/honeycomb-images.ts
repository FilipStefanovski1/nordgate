export type HoneycombImage = {
  src: string;
  alt: string;
  /** CSS object-position, e.g. "center 30%". Defaults to "center". */
  position?: string;
};

/**
 * Six real Nordgate photographs for the "What we do" honeycomb gallery.
 * Ordered column-by-column: the first three fill the left hex column,
 * the last three fill the right (offset) hex column.
 */
export const whatWeDoGalleryImages: [
  HoneycombImage,
  HoneycombImage,
  HoneycombImage,
  HoneycombImage,
  HoneycombImage,
  HoneycombImage,
] = [
  {
    src: "/event1.jpeg",
    alt: "A speaker presenting to an audience beneath a chandelier at a Nordgate-connected business event",
    position: "center 40%",
  },
  {
    src: "/team/anders-hansen.jpg",
    alt: "Anders Hansen, Co-Founder & Head of Partnerships at Nordgate",
    position: "center 15%",
  },
  {
    src: "/event3.JPG",
    alt: "An audience filling a red-seated auditorium at a Nordgate-connected industry event",
    position: "center 60%",
  },
  {
    src: "/event2.jpeg",
    alt: "A panel discussion in a formal chandelier-lit hall at a Swedish-Macedonian business event",
    position: "center 45%",
  },
  {
    src: "/team/samuel-vickius.jpg",
    alt: "Samuel N. Vickius, Co-Founder & Head of Sales at Nordgate",
    position: "center 20%",
  },
  {
    src: "/samuelandanders.jpeg",
    alt: "Samuel and Anders, Co-Founders of Nordgate",
    position: "center 30%",
  },
];
