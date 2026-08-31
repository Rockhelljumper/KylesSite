import { describe, expect, it } from "vitest";
import { personalData } from "@/lib/data/personal";
import { profile } from "@/lib/data/profile";

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
});
