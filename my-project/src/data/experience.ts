export type Job = {
  slug: string;
  title: string;
  org: string;
  meta: string;
  bullets: string[];
};

export const EXPERIENCE: Job[] = [
  {
    slug: "fano-labs",
    title: "Software Engineer",
    org: "Fano Labs · Co-op",
    meta: "Jun 2026 – Present · Hong Kong SAR · Hybrid",
    bullets: [],
  },
  {
    slug: "dyna-ai",
    title: "Artificial Intelligence Engineer",
    org: "Dyna.Ai · Internship",
    meta: "Jun 2025 – Jul 2025 · Hong Kong SAR · On-site",
    bullets: [
      "Led the integration of LLMs into business processes such as credit card marketing and HR recruitment to streamline workflows, enable automation and reduce human effort.",
      "Compared and analysed the performance of AI agent studios using Dyna's LLM-based AI Agent Builder Platform, leveraging knowledge management, knowledge space, and character configuration to evaluate effectiveness and optimize outcomes.",
      "Collaborated with a banking client to gather, track, and regularly refine user requirements, ensuring alignment between business needs and AI solution design.",
    ],
  },
];
