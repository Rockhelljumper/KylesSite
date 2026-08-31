"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectFilters from "@/components/projects/ProjectFilters";
import { projectCategories, type Project, type ProjectCategory } from "@/lib/data/projects";

type ProjectExplorerProps = {
  projects: Project[];
  showFilters?: boolean;
  primaryActions?: boolean;
};

export default function ProjectExplorer({ projects, showFilters = true, primaryActions = false }: ProjectExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory["id"]>("all");
  const visibleProjects = useMemo(
    () => projects.filter((project) => selectedCategory === "all" || project.capabilities.includes(selectedCategory)),
    [projects, selectedCategory]
  );

  return (
    <div className="mt-10">
      {showFilters ? <ProjectFilters categories={projectCategories} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} /> : null}
      <p aria-live="polite" className="mt-7 font-mono text-xs uppercase tracking-[0.13em] text-tertiary">
        {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"} shown
      </p>
      <div className="mt-3 border-b border-card-border">
        {visibleProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} primaryAction={primaryActions} />)}
      </div>
    </div>
  );
}
