"use client";

import { useState, useMemo } from "react";
import { projects, projectCategories } from "@/lib/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectFilters from "@/components/projects/ProjectFilters";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Extract unique technologies from all projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => {
        techSet.add(tech);
      });
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects based on selected category and technology
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter (engineering, leadership, etc.)
      if (selectedCategory !== "all") {
        const categoryMatches =
          // Engineering projects typically have many technical skills
          (selectedCategory === "engineering" &&
            project.technologies.length > 3) ||
          // Leadership projects typically have roles like Manager, Lead, Director
          (selectedCategory === "leadership" &&
            (project.role.includes("Manager") ||
              project.role.includes("Lead") ||
              project.role.includes("Director"))) ||
          // Community projects are those involving community building
          (selectedCategory === "community" &&
            (project.technologies.includes("Community Building") ||
              project.description.toLowerCase().includes("community")));

        if (!categoryMatches) return false;
      }

      // Technology filter
      if (selectedTech !== null) {
        return project.technologies.includes(selectedTech);
      }

      return true;
    });
  }, [selectedCategory, selectedTech]);

  return (
    <div className='container mx-auto px-4 py-24 md:py-32'>
      <div className='max-w-4xl mx-auto px-4 pt-32 pb-20 sm:pt-40 sm:pb-32'>
        <h1 className='text-4xl sm:text-5xl font-bold mb-6'>
          <span className='text-gradient'>Projects</span>
        </h1>
        <p className='text-xl text-secondary max-w-2xl leading-relaxed transition-colors mb-8'>
          A collection of technical projects and leadership accomplishments I've
          contributed to throughout my career. Each represents a unique
          challenge and learning opportunity.
          <br />
          <br />
          *** Please Note! Not all projects are listed here. Most are private
          Repos and I am in the process of converting them slowly to public
          projects/demos. ***
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
        {/* Sidebar with filters */}
        <div className='lg:col-span-1'>
          <div className='lg:sticky lg:top-24'>
            <ProjectFilters
              categories={projectCategories}
              technologies={allTechnologies}
              selectedCategory={selectedCategory}
              selectedTech={selectedTech}
              onCategoryChange={setSelectedCategory}
              onTechChange={setSelectedTech}
            />
          </div>
        </div>

        {/* Projects grid */}
        <div className='lg:col-span-3'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))
            ) : (
              <div className='col-span-full bg-card-alt rounded-xl p-8 text-center'>
                <h3 className='text-lg font-medium text-secondary mb-2'>
                  No projects found
                </h3>
                <p className='text-tertiary'>
                  Try adjusting your filters to see more projects.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
