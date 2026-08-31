import type { MetadataRoute } from "next";
import { publishedProjects } from "@/lib/data/projects";
import { profile } from "@/lib/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/about", "/resume", "/contact", "/community", "/now"];
  return [
    ...routes.map((route) => ({ url: new URL(route || "/", profile.siteUrl).toString(), lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.7 })),
    ...publishedProjects.filter((project) => project.caseStudy).map((project) => ({ url: `${profile.siteUrl}/projects/${project.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: project.classification === "featured" ? 0.9 : 0.6 })),
  ];
}
