import type { Metadata } from "next";
import ProjectExplorer from "@/components/projects/ProjectExplorer";
import { publishedProjects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Selected Engineering Work",
  description: "Evidence-led case studies in product engineering, financial integrations, AI workflow design, platform reliability, and data operations.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 sm:pt-32">
      <section className="site-shell py-14 sm:py-20">
        <p className="eyebrow">Selected work</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl">
          A small collection of work worth exploring.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-secondary">
          These are the stories I can share with useful detail: product delivery, careful integration design, platform experiments, and the engineering habits behind them.
        </p>
        <ProjectExplorer projects={publishedProjects} />
      </section>

      <aside className="border-t border-card-border bg-card-alt">
        <div className="site-shell py-8 text-sm leading-6 text-secondary">
          <span className="font-semibold text-primary">Archive:</span> this site and its small résumé-file API are implementation notes, not featured portfolio work. Confidential professional work is summarized without customer, system, or security-sensitive details.
        </div>
      </aside>
    </div>
  );
}
