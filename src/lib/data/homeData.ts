import { profile } from "@/lib/data/profile";

export const homeData = {
  name: profile.name,
  title: "I build dependable platforms—and care about the people who have to live with them.",
  summary: "The work is part engineering leadership, part hands-on systems work, and part making complicated things a little easier for the next person.",
  ctaLinks: [
    { text: "View selected work", href: "/projects", isPrimary: true },
    { text: "Meet the human", href: "/about" },
  ],
} as const;
