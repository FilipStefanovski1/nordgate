/**
 * Centralized metadata for real Nordgate photographs reused as editorial
 * breaks across secondary pages (source, alt text and focal point kept
 * together so they're easy to audit or swap later).
 */
export const editorialImages = {
  eventPanelSkopje: {
    src: "/event2.jpeg",
    alt: "A panel discussion in a formal chandelier-lit hall at a Swedish-Macedonian business event",
    position: "center 45%",
  },
  eventAuditorium: {
    src: "/event3.JPG",
    alt: "An audience filling a red-seated auditorium at a Nordgate-connected industry event",
    position: "center 55%",
  },
  eventSpeaker: {
    src: "/event1.jpeg",
    alt: "A speaker addressing an audience beneath a chandelier at a Nordgate-connected business event",
    position: "center 40%",
  },
  founders: {
    src: "/samuelandanders.jpeg",
    alt: "Samuel and Anders, Co-Founders of Nordgate",
    position: "center 30%",
  },
} as const;
