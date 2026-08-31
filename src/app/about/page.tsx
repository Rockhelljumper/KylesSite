import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PersonalShelf from "@/components/life/PersonalShelf";
import { personalData } from "@/lib/data/personal";
import { profile } from "@/lib/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: "The person behind Kyle Simmons' work in engineering leadership, systems, community teaching, and maker projects.",
  alternates: { canonical: "/about" },
};

const workModes = [
  ["Make the path clearer", "Turn ambiguous needs and operational risk into a practical plan, useful defaults, and a delivery path people can understand."],
  ["Stay close to the work", "Keep a hand in architecture, code, test design, integration behavior, and the production questions that cannot be answered from a slide deck."],
  ["Leave things easier to operate", "Improve ownership, documentation, tooling, and incident habits so the next person has more context and fewer surprises."],
];

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-32">
      <section className="site-shell grid gap-10 py-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-start sm:py-20">
        <figure className="justify-self-start motion-float lg:sticky lg:top-24">
          <div className="relative aspect-[4/5] w-56 overflow-hidden border border-card-border bg-card-alt sm:w-72">
            <Image src={profile.headshotUrl} alt="Kyle Simmons" fill sizes="(max-width: 640px) 224px, 288px" className="object-cover motion-image" priority />
          </div>
          <figcaption className="mt-3 font-mono text-xs text-tertiary">Austin, Texas · coffee first</figcaption>
        </figure>
        <div>
          <p className="eyebrow">About</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl">The work matters. So does how it feels to do it.</h1>
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-secondary">
            <p>I lead engineering work where reliability, security, and delivery speed all have real consequences. My path moved through operations, support, infrastructure, fintech platform work, and product development—so I tend to look for the human and operational consequence behind a technical decision.</p>
            <p>{profile.summary} I like the moment when a vague problem becomes a clear boundary, a practical plan, an observable system, and a team that can improve it without relying on one person&apos;s memory.</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/projects" className="button-primary">Read selected work</Link>
            <Link href="/now" className="button-secondary">A little life lately</Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="work-heading" className="border-y border-card-border bg-card-alt">
        <div className="site-shell py-14 sm:py-20">
          <p className="eyebrow">How I tend to work</p>
          <h2 id="work-heading" className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-primary">A few habits, not an adjective cloud.</h2>
          <div className="mt-10 grid gap-px border border-card-border bg-card-border md:grid-cols-3">
            {workModes.map(([title, body]) => (
              <article key={title} className="bg-card p-6 sm:p-7 motion-card">
                <h3 className="text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-secondary">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="outside-the-backlog" aria-labelledby="outside-heading" className="site-shell py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
          <div>
            <p className="eyebrow">Outside the backlog</p>
            <h2 id="outside-heading" className="mt-3 text-3xl font-semibold tracking-tight text-primary">A real person has side quests.</h2>
          </div>
          <p className="max-w-2xl leading-7 text-secondary">I make time for maker projects, community teaching, books, games, the outdoors, and an occasional microphone. They are not résumé filler—they are the places I keep learning how to explain, make, and improve things.</p>
        </div>
        <div className="mt-10"><PersonalShelf /></div>
        <div className="mt-8 flex flex-col gap-4 border-t border-card-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-secondary">The community thread runs through all of it: makerspace sessions, practical technology classes, mentoring, and a podcast that makes room for technology and culture in the same conversation.</p>
          <a href={personalData.podcast.href} target="_blank" rel="noopener noreferrer" className="text-link shrink-0 inline-flex">Find Into the Nerdverse <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </div>
  );
}
