import { describe, expect, it } from "vitest";
import { getClaim } from "@/lib/data/claims";
import { featuredProjects, projectCapabilities, projects, publishedProjects } from "@/lib/data/projects";

describe("portfolio project data", () => {
  it("keeps the three flagship leadership projects as detailed case studies", () => {
    expect(featuredProjects.map((project) => project.slug)).toEqual([
      "resilient-platform-recovery",
      "engineering-enablement-operations",
      "regulated-platform-modernization",
    ]);
    expect(featuredProjects.every((project) => project.caseStudy)).toBe(true);
    expect(featuredProjects.every((project) => project.portfolioLane === "leadership-case-study")).toBe(true);
  });

  it("gives every flagship leadership case study a governed visual and keeps public work distinct", () => {
    expect(featuredProjects.map((project) => project.banner?.src)).toEqual([
      "/images/projects/platform-recovery.svg",
      "/images/projects/engineering-enablement.svg",
      "/images/projects/regulated-platform-delivery.svg",
    ]);
    expect(featuredProjects.every((project) => project.banner?.caption)).toBe(true);
    expect(projects.find((project) => project.slug === "bathroom-buddy")?.portfolioLane).toBe("public-product");
    expect(projects.find((project) => project.slug === "reliable-financial-integration")?.banner?.fullSize?.href)
      .toBe("/images/projects/vantaca-runtime-architecture.svg");
  });

  it("uses only declared capabilities and does not expose archives as published work", () => {
    expect(publishedProjects.every((project) => project.classification !== "archive")).toBe(true);
    expect(projects.flatMap((project) => project.capabilities).every((capability) => projectCapabilities.includes(capability))).toBe(true);
  });

  it("backs every displayed outcome claim with the claim registry", () => {
    const claimIds = projects.flatMap((project) => project.outcomes.flatMap((outcome) => outcome.claimId ? [outcome.claimId] : []));
    expect(claimIds).not.toHaveLength(0);
    expect(claimIds.every((claimId) => getClaim(claimId))).toBe(true);
  });

  it("keeps Bathroom Buddy public links limited to verified public product artifacts", () => {
    const project = projects.find((candidate) => candidate.slug === "bathroom-buddy");
    expect(project?.publicLinks?.map((link) => link.href)).toEqual([
      "https://www.bathroombuddy.io/",
      "https://apps.apple.com/us/app/bathroom-buddy-find-restrooms/id6769126149?uo=4",
      "https://play.google.com/store/apps/details?id=com.techneighbors.bathroombuddy",
    ]);
  });
});
