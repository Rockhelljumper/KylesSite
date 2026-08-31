import Image from "next/image";
import Link from "next/link";
import { personalData } from "@/lib/data/personal";

export default function PersonalInterlude() {
  return (
    <section aria-labelledby="outside-heading" className="overflow-hidden border-y border-card-border bg-card-alt">
      <div className="site-shell grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center sm:py-20">
        <div>
          <p className="eyebrow">Outside the backlog</p>
          <h2 id="outside-heading" className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            The rest of the context matters.
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-secondary">{personalData.intro}</p>
          <div className="mt-8 divide-y divide-card-border border-y border-card-border">
            {personalData.interests.map((interest) => (
              <article key={interest.label} className="py-5 first:pt-0 last:pb-0">
                <p className="eyebrow">{interest.label}</p>
                <h3 className="mt-2 text-lg font-semibold text-primary">{interest.title}</h3>
                <p className="mt-2 text-sm leading-6 text-secondary">{interest.description}</p>
              </article>
            ))}
          </div>
          <Link href="/about#outside-the-backlog" className="text-link mt-7 inline-flex">
            More of the human context <span aria-hidden="true">→</span>
          </Link>
        </div>

        <figure className="group relative overflow-hidden border border-card-border bg-ink motion-float">
          <Image
            src={personalData.podcast.image}
            alt={personalData.podcast.imageAlt}
            width={1280}
            height={720}
            sizes="(max-width: 1024px) calc(100vw - 2rem), 620px"
            className="aspect-[16/10] w-full object-cover motion-image"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-ink/90 p-5 text-white backdrop-blur-sm sm:p-6">
            <p className="font-mono text-xs uppercase tracking-[0.13em] text-accent-light">Side project</p>
            <h3 className="mt-2 text-2xl font-semibold">{personalData.podcast.title}</h3>
            <p className="mt-2 max-w-lg text-sm leading-6 text-slate-200">{personalData.podcast.description}</p>
            <a href={personalData.podcast.href} target="_blank" rel="noopener noreferrer" className="button-on-dark mt-5">
              Listen on Spotify <span aria-hidden="true">↗</span>
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
