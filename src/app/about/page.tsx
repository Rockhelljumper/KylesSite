import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/lib/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: "How Kyle Simmons approaches engineering leadership, production systems, data integrations, mentoring, and AI-assisted delivery.",
  alternates: { canonical: "/about" },
};

const leadershipPractices = [
  ["Set technical direction", "Turn ambiguous business needs, production risk, and technical debt into a sequenced plan engineers can challenge and execute."],
  ["Remove engineering blockers", "Improve the delivery paths, ownership boundaries, documentation, and tools that turn routine work into a queue."],
  ["Lead incidents without heroics", "Make the response calm, blameless, accountable, and useful for the next person who has to operate the system."],
  ["Keep the work close", "Stay technically engaged through architecture, code, test design, integration behavior, and production troubleshooting."],
];

const workingDomains = [
  ["Platform & SRE", "CI/CD, observability, incident response, recovery planning, cloud cost, containers, operational automation, and developer experience."],
  ["Software architecture", "Backend services, APIs, data models, AuthN/AuthZ boundaries, distributed integration behavior, and realistic failure states."],
  ["Data & integration engineering", "SQL performance, reconciliation, normalization, partner adapters, reporting, lifecycle design, and safe asynchronous processing."],
  ["AI engineering", "Requirements-first agent workflows, task decomposition, implementation assistance, tests, review gates, and human accountability."],
];

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-32">
      <section className="site-shell grid gap-10 py-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start sm:py-20">
        <figure className="lg:sticky lg:top-24">
          <div className="relative aspect-[4/5] max-w-xs overflow-hidden border border-card-border bg-card-alt">
            <Image src={profile.headshotUrl} alt="Kyle Simmons" fill sizes="(max-width: 1024px) 320px, 300px" className="object-cover" priority />
          </div>
          <figcaption className="mt-3 font-mono text-xs text-tertiary">Austin, Texas</figcaption>
        </figure>
        <div>
          <p className="eyebrow">About</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl">Builder first. Leader by making the system around the work better.</h1>
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-secondary">
            <p>I lead engineering work where reliability, security, and delivery speed all have real consequences. My path moved through operations, software support, infrastructure, fintech platform work, and product development—so I tend to look for the human and operational consequence behind a technical decision.</p>
            <p>{profile.summary} I like the part where a vague problem becomes a clear boundary, a practical plan, an observable system, and a team that can improve it without relying on one person&apos;s memory.</p>
            <p>That makes platform engineering a natural home: it is technical strategy expressed through useful tooling, credible defaults, and better day-to-day engineering experience.</p>
          </div>
          <Link href="/projects" className="button-primary mt-8">Read selected work</Link>
        </div>
      </section>

      <section aria-labelledby="leadership-heading" className="border-y border-card-border bg-card-alt">
        <div className="site-shell py-14 sm:py-20">
          <p className="eyebrow">Leadership in practice</p>
          <h2 id="leadership-heading" className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-primary">Specific behaviors, not a leadership adjective cloud.</h2>
          <div className="mt-10 grid divide-y divide-card-border border-y border-card-border md:grid-cols-2 md:divide-x md:divide-y-0">
            {leadershipPractices.map(([title, body], index) => (
              <article key={title} className="p-6 first:pl-0 even:md:pr-0 md:[&:nth-child(n+3)]:border-t md:[&:nth-child(n+3)]:border-card-border">
                <p className="font-mono text-xs text-brand-primary">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-secondary">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="domains-heading" className="site-shell py-14 sm:py-20">
        <p className="eyebrow">Working domains</p>
        <h2 id="domains-heading" className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-primary">Enough technical range to connect the seams.</h2>
        <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {workingDomains.map(([title, body]) => (
            <article key={title} className="border-t border-card-border pt-5">
              <h3 className="text-xl font-semibold text-primary">{title}</h3>
              <p className="mt-3 leading-7 text-secondary">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="outside-heading" className="border-t border-card-border bg-card-alt">
        <div className="site-shell grid gap-8 py-14 lg:grid-cols-[0.75fr_1.25fr] sm:py-20">
          <div><p className="eyebrow">Outside the backlog</p><h2 id="outside-heading" className="mt-3 text-3xl font-semibold tracking-tight text-primary">A maker&apos;s curiosity is useful at work, too.</h2></div>
          <div className="space-y-4 leading-7 text-secondary"><p>I volunteer at a makerspace, work with 3D printers and laser cutters, build and learn in a homelab, and enjoy the practical puzzle of making imperfect systems behave better.</p><p>I also host a podcast and participate in community work. Those experiences make technical communication, mentoring, and a bit of personality part of the portfolio—not the center of it.</p><Link href="/community" className="text-link inline-flex">Community involvement <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>
    </div>
  );
}
