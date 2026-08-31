/**
 * Centralized metadata for real Nordgate photographs reused as editorial
 * breaks across secondary pages (source, alt text and focal point kept
 * together so they're easy to audit or swap later).
 */
export const editorialImages = {
  teamCollaboration: {
    src: "/images/editorial/team-collaboration.jpg",
    alt: "Two colleagues discussing work at a desk in a bright office",
    position: "center 35%",
  },
  stockholmSkeppsbron: {
    src: "/images/editorial/stockholm-skeppsbron.jpg",
    alt: "Historic waterfront buildings and boats along Skeppsbron in Stockholm",
    position: "center 60%",
  },
  northernLights: {
    src: "/images/editorial/northern-lights.jpg",
    alt: "The northern lights over a snow-covered landscape in the Nordics",
    position: "center 65%",
  },
  founders: {
    src: "/samuelandanders.jpeg",
    alt: "Samuel and Anders, Co-Founders of Nordgate",
    position: "center 30%",
  },
} as const;
