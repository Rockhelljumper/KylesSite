"use client";

import React from "react";
import type { ProjectCategory } from "@/lib/data/projects";

type ProjectFiltersProps = {
  categories: ProjectCategory[];
  selectedCategory: ProjectCategory["id"];
  onCategoryChange: (category: ProjectCategory["id"]) => void;
};

export default function ProjectFilters({ categories, selectedCategory, onCategoryChange }: ProjectFiltersProps) {
  return (
    <fieldset>
      <legend className="eyebrow">Filter by capability</legend>
      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((category) => {
          const selected = selectedCategory === category.id;
          return (
            <button
              key={category.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onCategoryChange(category.id)}
              className={selected ? "border border-brand-primary bg-brand-primary px-3 py-2 text-sm font-medium text-white" : "border border-card-border px-3 py-2 text-sm font-medium text-secondary hover:border-brand-primary hover:text-primary"}
            >
              {category.name}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
