import { describe, expect, it } from "vitest";
import { personalData } from "@/lib/data/personal";
import { profile } from "@/lib/data/profile";
import { communityData } from "@/lib/data/community";

describe("person-first portfolio content", () => {
  it("keeps every public route discoverable without framing contact as a business funnel", () => {
    expect(profile.navigation).toContainEqual({ label: "Life", href: "/now" });
    expect(profile.navigation).toContainEqual({ label: "Contact", href: "/contact" });
    expect(profile.navigation.map((link) => link.label)).toEqual([
      "Home",
      "Work",
      "About",
      "Life",
      "Community",
      "Résumé",
      "Contact",
      "GitHub",
    ]);
  });

  it("uses the verified public podcast surface and keeps hobbies descriptive rather than fabricated", () => {
    expect(personalData.podcast.href).toBe("https://open.spotify.com/show/3CwC4tH9Yix6RIPuEo640u");
    expect(personalData.shelf.map((item) => item.label)).toEqual(["Reading", "Listen", "Watch & play"]);
    expect(personalData.interests).toHaveLength(3);
  });

  it("publishes the three Makerspace presentations as explicit PowerPoint downloads", () => {
    expect(communityData.presentations.map((presentation) => presentation.href)).toEqual([
      "/presentations/makerspace/computer-building-2023.pptx",
      "/presentations/makerspace/what-is-docker.pptm",
      "/presentations/makerspace/ai-for-makers-workshop-2026-08-17.pptx",
    ]);
    expect(communityData.presentations.map((presentation) => presentation.slides)).toEqual([16, 10, 27]);
  });
});
