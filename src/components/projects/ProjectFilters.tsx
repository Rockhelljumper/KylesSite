"use client";

import TechBadge from "@/components/ui/TechBadge";
import { ProjectCategory } from "@/lib/data/projects";
import { trackButtonClick } from "@/lib/utils/googleAnalytics";

type ProjectFiltersProps = {
  categories: ProjectCategory[];
  technologies: string[];
  selectedCategory: string;
  selectedTech: string | null;
  onCategoryChange: (category: string) => void;
  onTechChange: (tech: string | null) => void;
};

export default function ProjectFilters({
  categories,
  technologies,
  selectedCategory,
  selectedTech,
  onCategoryChange,
  onTechChange,
}: ProjectFiltersProps) {
  return (
    <div className='mb-10'>
      <div className='flex flex-col space-y-6'>
        {/* Category filters */}
        <div>
          <h3 className='text-sm font-semibold uppercase tracking-wider mb-3 text-tertiary'>
            Categories
          </h3>
          <div className='flex flex-wrap gap-2'>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  trackButtonClick(
                    `filter_category_${category.id}`,
                    "projects"
                  );
                  onCategoryChange(category.id);
                }}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-brand-gradient text-text-inverted shadow-sm"
                    : "bg-card-alt text-tertiary hover:text-primary border border-card-border shadow-sm"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tech filters */}
        <div>
          <h3 className='text-sm font-semibold uppercase tracking-wider mb-3 text-tertiary flex justify-between'>
            <span>Technologies</span>
            {selectedTech && (
              <button
                onClick={() => {
                  trackButtonClick("filter_tech_clear", "projects");
                  onTechChange(null);
                }}
                className='text-xs text-brand-primary hover:underline normal-case font-normal'
              >
                Clear filter
              </button>
            )}
          </h3>
          <div className='flex flex-wrap gap-2'>
            {technologies.map((tech) => (
              <TechBadge
                key={tech}
                tech={tech}
                isActive={selectedTech === tech}
                isFilter={true}
                onClick={() => {
                  const newTech = selectedTech === tech ? null : tech;
                  trackButtonClick(
                    `filter_tech_${
                      newTech
                        ? newTech.toLowerCase().replace(/\s+/g, "_")
                        : "clear"
                    }`,
                    "projects"
                  );
                  onTechChange(newTech);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
