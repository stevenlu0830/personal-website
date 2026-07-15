export type Certification = {
  slug: string;
  name: string;
  org: string;
  meta: string;
  pdf?: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    slug: "google-ai-professional-certificate",
    name: "Google AI Professional Certificate",
    org: "Coursera",
    meta: "Issued Jun 2026",
    pdf: "/cert-attachments/google-ai-professional-cert.pdf",
  },
  {
    slug: "mathematics-gifted-programme",
    name: "Mathematics Gifted Programme",
    org: "The Hong Kong Polytechnic University",
    meta: "Issued Aug 2021",
    pdf: "/cert-attachments/math-gifted-programme.pdf",
  },
];
