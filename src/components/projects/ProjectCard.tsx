import Link from "next/link";
import type { Project } from "@/lib/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const hasCaseStudy = Boolean(project.caseStudy);

  return (
    <article className="grid gap-4 border-t border-card-border py-7 sm:grid-cols-[3rem_1fr_auto] sm:items-start">
      <p className="font-mono text-sm text-brand-primary">{String(index + 1).padStart(2, "0")}</p>
      <div>
        <p className="eyebrow">{project.status}</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-primary">{project.title}</h2>
        <p className="mt-2 max-w-2xl text-base leading-7 text-secondary">{project.subtitle}</p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-secondary">{project.overview}</p>
        <p className="mt-4 font-mono text-xs leading-5 text-tertiary">
          {project.capabilities.slice(0, 4).join(" · ")}
        </p>
      </div>
      <div className="sm:pt-8">
        {hasCaseStudy ? (
          <Link href={`/projects/${project.slug}`} className="text-link inline-flex whitespace-nowrap">
            Read case study <span aria-hidden="true">→</span>
          </Link>
        ) : project.publicLinks?.[0] ? (
          <a href={project.publicLinks[0].href} target="_blank" rel="noopener noreferrer" className="text-link inline-flex whitespace-nowrap">
            Visit project <span aria-hidden="true">↗</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}
