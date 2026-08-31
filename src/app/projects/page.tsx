import type { Metadata } from "next";
import ProjectExplorer from "@/components/projects/ProjectExplorer";
import PageKinetic from "@/components/layout/PageKinetic";
import { publishedProjects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Leadership Case Studies & Engineering Work",
  description: "NDA-safe leadership case studies in platform engineering, recovery, delivery, reliability, and engineering enablement—plus public products and technical references.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const leadershipCaseStudies = publishedProjects.filter((project) => project.portfolioLane === "leadership-case-study");
  const publicAndCommunityWork = publishedProjects.filter((project) => project.portfolioLane === "public-product" || project.portfolioLane === "community");
  const technicalReferences = publishedProjects.filter((project) => project.portfolioLane === "technical-reference");

  return (
    <div className="page-stage pt-28 sm:pt-32">
      <PageKinetic variant="work" />
      <section className="site-shell py-14 sm:py-20">
        <p className="eyebrow">Leadership case studies</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl">
          How I lead the systems—and the teams—that keep critical work moving.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-secondary">
          These NDA-safe accounts center the choices, operating habits, and résumé-sourced outcomes I can share responsibly. They are the fastest route to the leadership work behind this portfolio.
        </p>
        <ProjectExplorer projects={leadershipCaseStudies} showFilters={false} primaryActions />
      </section>

      <section className="border-y border-card-border bg-card-alt">
        <div className="site-shell py-14 sm:py-20">
          <p className="eyebrow">Public products &amp; community</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary">Things people can actually use, join, and learn from.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-secondary">Public work stays here as a more personal second act: a real product, a community conversation, and evidence that collaboration matters beyond an org chart.</p>
          <ProjectExplorer projects={publicAndCommunityWork} showFilters={false} />
        </div>
      </section>

      <section className="site-shell py-14 sm:py-20">
        <p className="eyebrow">Technical references &amp; labs</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary">How I evaluate patterns before recommending them.</h2>
        <p className="mt-4 max-w-3xl leading-7 text-secondary">These runnable references and learning environments are intentionally labeled as such. They show technical depth without being presented as confidential customer work or primary leadership evidence.</p>
        <ProjectExplorer projects={technicalReferences} />
      </section>

      <aside className="border-t border-card-border bg-card-alt">
        <div className="site-shell py-8 text-sm leading-6 text-secondary">
          <span className="font-semibold text-primary">Evidence boundaries:</span> this site and its small résumé-file API are implementation notes, not featured portfolio work. Confidential professional work is summarized without customer, system, or security-sensitive details; public labs are clearly marked as references.
        </div>
      </aside>
    </div>
  );
}
