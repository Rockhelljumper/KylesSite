import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const hasCaseStudy = Boolean(project.caseStudy);

  return (
    <article className="project-card motion-card grid gap-5 border-t border-card-border py-7 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:items-start">
      <p className="font-mono text-sm text-brand-primary">{String(index + 1).padStart(2, "0")}</p>
      <div>
        <p className="eyebrow">{project.status}</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-primary">{project.title}</h2>
        <p className="mt-2 max-w-2xl text-base leading-7 text-secondary">{project.subtitle}</p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-secondary">{project.overview}</p>
        <p className="mt-4 font-mono text-xs leading-5 text-tertiary">
          {project.capabilities.slice(0, 4).join(" · ")}
        </p>
        {project.banner && (
          <div
            className={`project-card-banner project-card-banner--${project.banner.presentation ?? "cover"} mt-5 relative aspect-[16/10] overflow-hidden border border-card-border bg-ink`}
            data-project-card-visual={project.slug}
          >
            <Image
              src={project.banner.src}
              alt={project.banner.alt}
              fill
              sizes="(max-width: 640px) calc(100vw - 4rem), 720px"
              className={project.banner.presentation === "contain" ? "object-contain" : "object-cover"}
            />
          </div>
        )}
      </div>
      <div className="sm:pt-8">
        {hasCaseStudy ? (
          <Link href={`/projects/${project.slug}`} className="button-secondary button-compact whitespace-nowrap" data-project-action>
            Open case study <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        ) : project.publicLinks?.[0] ? (
          <a href={project.publicLinks[0].href} target="_blank" rel="noopener noreferrer" className="button-secondary button-compact whitespace-nowrap" data-project-action>
            Visit project <span className="ml-2" aria-hidden="true">↗</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}
