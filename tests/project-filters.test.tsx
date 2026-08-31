import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import ProjectFilters from "@/components/projects/ProjectFilters";
import { projectCategories } from "@/lib/data/projects";

describe("ProjectFilters", () => {
  it("exposes the selected filter to keyboard and screen-reader users", async () => {
    const user = userEvent.setup();
    const onCategoryChange = vi.fn();
    render(<ProjectFilters categories={projectCategories} selectedCategory="all" onCategoryChange={onCategoryChange} />);

    const aiButton = screen.getByRole("button", { name: "AI engineering" });
    expect(aiButton).toHaveAttribute("aria-pressed", "false");
    await user.click(aiButton);
    expect(onCategoryChange).toHaveBeenCalledWith("ai");
    expect(screen.getByRole("button", { name: "All work" })).toHaveAttribute("aria-pressed", "true");
  });
});
