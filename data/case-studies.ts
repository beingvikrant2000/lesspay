export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  status: "published" | "draft";
  route: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "lesspay",
    slug: "lesspay",
    title: "LessPay",
    subtitle: "A Product Owner's Deep Dive into Payments, Loyalty, and Hyperlocal Commerce",
    description: "Analysis of a hyperlocal loyalty platform disguised as a payment app. Exploring the core business model, competitive landscape, and strategic positioning.",
    status: "published",
    route: "/case-studies/lesspay",
  },
];

export const publishedCaseStudies = caseStudies.filter(
  (cs) => cs.status === "published"
);
