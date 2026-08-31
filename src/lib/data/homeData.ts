import { careerData } from "@/lib/data/career";
import { profile } from "@/lib/data/profile";

export const homeData = {
  name: profile.name,
  title: careerData.positioning.title,
  summary: careerData.positioning.summary,
  ctaLinks: [
    { text: "Read leadership case studies", href: "/projects", isPrimary: true },
    { text: "View leadership résumé", href: "/resume" },
  ],
} as const;
