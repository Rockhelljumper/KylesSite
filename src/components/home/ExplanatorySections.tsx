import Link from "next/link";
import PersonalInterlude from "@/components/life/PersonalInterlude";
import type { Project } from "@/lib/data/projects";

type ExplanatorySectionsProps = {
  featuredProjects: Project[];
};

export default function ExplanatorySections({
  featuredProjects,
}: ExplanatorySectionsProps) {
  return (
    <div>
      <section aria-labelledby="work-heading" className="site-shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="work-heading" className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              A few things I&apos;m proud to put my name next to.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-secondary">
              A public product, a deliberately conservative integration reference, and a workflow lab. The details live one click away; this page keeps the introduction short.
            </p>
            <Link href="/projects" className="button-secondary button-compact mt-6">
              See all work <span aria-hidden="true">→</span>
            </Link>
          </div>

          <ol className="border-t border-card-border">
            {featuredProjects.map((project, index) => (
              <li key={project.slug} className="border-b border-card-border py-6 first:pt-0">
                <Link href={`/projects/${project.slug}`} className="group grid gap-3 sm:grid-cols-[3rem_1fr_auto] sm:items-start">
                  <span className="font-mono text-sm text-brand-primary">0{index + 1}</span>
                  <span>
                    <span className="block text-xl font-semibold text-primary group-hover:text-brand-primary">
                      {project.title}
                    </span>
                    <span className="mt-2 block max-w-2xl leading-6 text-secondary">{project.subtitle}</span>
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-tertiary">
                    {project.status}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PersonalInterlude />

      <section className="border-t border-card-border bg-ink py-14 text-white sm:py-16">
        <div className="site-shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-accent-light">A note is always welcome</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
              Have a problem worth talking through, or just a good recommendation to share?
            </h2>
          </div>
          <Link href="/contact" className="button-on-dark shrink-0">
            Say hello
          </Link>
        </div>
      </section>
    </div>
  );
}
