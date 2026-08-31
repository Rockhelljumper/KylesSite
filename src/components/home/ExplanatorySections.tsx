import Link from "next/link";
import { homeData } from "@/lib/data/homeData";
import type { Project } from "@/lib/data/projects";

type ExplanatorySectionsProps = {
  featuredProjects: Project[];
};

export default function ExplanatorySections({
  featuredProjects,
}: ExplanatorySectionsProps) {
  return (
    <div>
      <section aria-labelledby="proof-heading" className="border-b border-card-border bg-card-alt">
        <div className="site-shell py-10 sm:py-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Selected impact</p>
              <h2 id="proof-heading" className="mt-3 text-2xl font-semibold tracking-tight text-primary">
                Evidence from platform work
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-secondary">
              Quantified experience is traceable to the current résumé content and marked for final source-PDF confirmation in the project documentation.
            </p>
          </div>
          <dl className="mt-8 grid divide-y divide-card-border border-y border-card-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {homeData.proofPoints.map((proof) => (
              <div key={proof.claimId} className="py-5 sm:px-6 sm:first:pl-0 sm:last:pr-0">
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-tertiary">
                  {proof.label}
                </dt>
                <dd className="mt-2 text-3xl font-semibold tracking-tight text-primary">{proof.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="work-heading" className="site-shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="work-heading" className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              Product, integration, and workflow evidence.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-secondary">
              These are the projects I would use in a technical conversation: a public product, a deliberately conservative integration reference, and an AI workflow lab that keeps people accountable for the important decisions.
            </p>
            <Link href="/projects" className="text-link mt-6 inline-flex">
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

      <section aria-labelledby="capabilities-heading" className="border-y border-card-border bg-card-alt">
        <div className="site-shell py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow">How I work</p>
            <h2 id="capabilities-heading" className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              The capability matters only when it is connected to real work.
            </h2>
          </div>
          <div className="mt-10 divide-y divide-card-border border-y border-card-border">
            {homeData.capabilities.map((capability, index) => (
              <article key={capability.eyebrow} className="grid gap-5 py-8 lg:grid-cols-[4rem_0.8fr_1.2fr]">
                <p className="font-mono text-sm text-brand-primary">0{index + 1}</p>
                <div>
                  <p className="eyebrow">{capability.eyebrow}</p>
                  <h3 className="mt-3 text-xl font-semibold leading-7 text-primary">{capability.title}</h3>
                </div>
                <div>
                  <p className="leading-7 text-secondary">{capability.body}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-secondary">
                    {capability.evidence.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="ai-heading" className="site-shell py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="eyebrow">AI engineering</p>
            <h2 id="ai-heading" className="mt-3 text-3xl font-semibold tracking-tight text-primary">
              {homeData.aiPractice.title}
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-secondary">{homeData.aiPractice.body}</p>
            <Link href="/projects/ai-engineering-workflow-lab" className="text-link mt-6 inline-flex">
              Read the workflow lab <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ol className="grid gap-px border border-card-border bg-card-border sm:grid-cols-2">
            {homeData.aiPractice.loop.map((step, index) => (
              <li key={step} className="bg-card px-5 py-4">
                <span className="font-mono text-xs text-brand-primary">{String(index + 1).padStart(2, "0")}</span>
                <span className="ml-3 font-medium text-primary">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-card-border bg-ink py-14 text-white sm:py-16">
        <div className="site-shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-accent-light">Recruiting & collaboration</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
              Looking for an engineering leader who can still get close to the implementation?
            </h2>
          </div>
          <Link href="/contact" className="button-on-dark shrink-0">
            Start a conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
