import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data/projects";

type CaseStudyProps = { project: Project };

export default function CaseStudy({ project }: CaseStudyProps) {
  const study = project.caseStudy;
  if (!study) return null;

  return (
    <article className="pt-28 sm:pt-32">
      <header className="border-b border-card-border bg-card-alt">
        <div className="site-shell grid gap-10 py-14 lg:grid-cols-[1fr_0.7fr] lg:items-end sm:py-20">
          <div>
            <Link href="/projects" className="text-link inline-flex">← All work</Link>
            <p className="eyebrow mt-8">{project.status}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl">{project.title}</h1>
            <p className="mt-4 max-w-3xl text-xl leading-8 text-secondary">{project.subtitle}</p>
            <p className="mt-6 max-w-3xl leading-7 text-secondary">{project.overview}</p>
          </div>
          {project.image && (
            <figure className="justify-self-start lg:justify-self-end">
              <div className="relative aspect-[9/16] w-48 overflow-hidden border border-card-border bg-ink sm:w-56">
                <Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 640px) 192px, 224px" className="object-cover" priority />
              </div>
              <figcaption className="mt-2 max-w-56 text-xs leading-5 text-tertiary">Public product UI, shown as product evidence rather than a mockup.</figcaption>
            </figure>
          )}
        </div>
      </header>

      <div className="site-shell py-14 sm:py-20">
        <dl className="grid border-y border-card-border sm:grid-cols-3">
          <div className="py-5 sm:pr-6"><dt className="eyebrow">Role</dt><dd className="mt-2 text-sm leading-6 text-primary">{project.role}</dd></div>
          <div className="border-t border-card-border py-5 sm:border-l sm:border-t-0 sm:px-6"><dt className="eyebrow">Scope</dt><dd className="mt-2 text-sm leading-6 text-primary">{project.capabilities.join(" · ")}</dd></div>
          <div className="border-t border-card-border py-5 sm:border-l sm:border-t-0 sm:pl-6"><dt className="eyebrow">Status</dt><dd className="mt-2 text-sm leading-6 text-primary">{project.status}</dd></div>
        </dl>

        {project.publicLinks && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.publicLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="button-secondary">
                {link.label} <span className="ml-2" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}

        {project.confidentialityNote && (
          <aside aria-label="Disclosure note" className="mt-8 border-l-2 border-brand-secondary bg-card-alt px-5 py-4 text-sm leading-6 text-secondary">
            <span className="font-semibold text-primary">Disclosure note. </span>{project.confidentialityNote}
          </aside>
        )}
      </div>

      <section aria-labelledby="problem-heading" className="border-y border-card-border bg-card-alt">
        <div className="site-shell grid gap-10 py-14 lg:grid-cols-[0.75fr_1.25fr] sm:py-20">
          <div><p className="eyebrow">The problem</p><h2 id="problem-heading" className="mt-3 text-3xl font-semibold tracking-tight text-primary">Start with the constraint.</h2></div>
          <div><p className="text-lg leading-8 text-secondary">{study.problem}</p><h3 className="mt-8 font-semibold text-primary">What I contributed</h3><ul className="mt-3 space-y-3 text-sm leading-6 text-secondary">{study.responsibilities.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" aria-hidden="true" />{item}</li>)}</ul></div>
        </div>
      </section>

      <section aria-labelledby="architecture-heading" className="site-shell py-14 sm:py-20">
        <p className="eyebrow">Sanitized architecture</p>
        <h2 id="architecture-heading" className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-primary">{study.architecture.summary}</h2>
        <div className="mt-10 grid gap-px border border-card-border bg-card-border md:grid-cols-4">
          {study.architecture.layers.map((layer, index) => (
            <div key={layer.label} className="relative bg-card p-5">
              <span className="font-mono text-xs text-brand-primary">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 font-semibold text-primary">{layer.label}</h3>
              <p className="mt-3 text-sm leading-6 text-secondary">{layer.detail}</p>
              {index < study.architecture.layers.length - 1 && <span className="absolute -right-2 top-1/2 z-10 hidden rounded-full bg-brand-primary px-1 text-xs text-white md:block" aria-hidden="true">→</span>}
            </div>
          ))}
        </div>
      </section>

      {study.decisions.length > 0 && (
        <section aria-labelledby="decisions-heading" className="border-y border-card-border bg-card-alt">
          <div className="site-shell py-14 sm:py-20">
            <p className="eyebrow">Engineering decisions</p>
            <h2 id="decisions-heading" className="mt-3 text-3xl font-semibold tracking-tight text-primary">Context, choice, and tradeoff.</h2>
            <div className="mt-10 divide-y divide-card-border border-y border-card-border">
              {study.decisions.map((decision, index) => (
                <article key={decision.title} className="grid gap-5 py-8 lg:grid-cols-[4rem_1fr_1.1fr]">
                  <span className="font-mono text-sm text-brand-primary">{String(index + 1).padStart(2, "0")}</span>
                  <div><h3 className="text-xl font-semibold text-primary">{decision.title}</h3><p className="mt-3 text-sm leading-6 text-secondary"><strong className="text-primary">Context: </strong>{decision.context}</p><p className="mt-3 text-sm leading-6 text-secondary"><strong className="text-primary">Options: </strong>{decision.options}</p></div>
                  <div className="space-y-3 text-sm leading-6 text-secondary"><p><strong className="text-primary">Decision: </strong>{decision.decision}</p><p><strong className="text-primary">Tradeoff: </strong>{decision.tradeoff}</p><p><strong className="text-primary">Result: </strong>{decision.result}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section aria-labelledby="quality-heading" className="site-shell py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div><p className="eyebrow">Quality & operations</p><h2 id="quality-heading" className="mt-3 text-3xl font-semibold tracking-tight text-primary">How the work is made operable.</h2><ul className="mt-6 space-y-3 text-sm leading-6 text-secondary">{study.operatingModel.map((item) => <li key={item} className="border-l-2 border-brand-primary pl-4">{item}</li>)}</ul></div>
          <div><p className="eyebrow">Lessons</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary">What carries forward.</h2><ul className="mt-6 space-y-3 text-sm leading-6 text-secondary">{study.lessons.map((item) => <li key={item} className="border-l-2 border-brand-secondary pl-4">{item}</li>)}</ul></div>
        </div>
      </section>

      <section className="border-t border-card-border bg-ink py-14 text-white">
        <div className="site-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-2xl text-lg leading-7">Want to discuss the technical decision-making behind this work?</p><Link href="/contact" className="button-on-dark">Contact Kyle</Link></div>
      </section>
    </article>
  );
}
