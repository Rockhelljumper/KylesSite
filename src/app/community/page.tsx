import Image from "next/image";
import Link from "next/link";
import { personalData } from "@/lib/data/personal";
import { communityData } from "@/lib/data/community";

function CommunityList({ items }: { items: typeof communityData.speaking }) {
  return (
    <div className="divide-y divide-card-border border-y border-card-border">
      {items.map((item) => (
        <article key={`${item.title}-${item.subtitle}`} className="grid gap-3 py-6 sm:grid-cols-[1fr_auto] sm:gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
            <p className="mt-1 text-sm text-tertiary">{item.subtitle}</p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-secondary">{item.description}</p>
          </div>
          {item.years && <p className="font-mono text-xs text-brand-primary">{item.years}</p>}
        </article>
      ))}
    </div>
  );
}

export default function CommunityPage() {
  return (
    <div className="pt-28 sm:pt-32">
      <section className="site-shell grid gap-10 py-14 lg:grid-cols-[1fr_0.75fr] lg:items-end sm:py-20">
        <div>
          <p className="eyebrow">Community</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl">Teaching, mentoring, and a few good side quests.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary">{communityData.intro}</p>
        </div>
        <figure className="group relative overflow-hidden border border-card-border bg-ink motion-float">
          <Image src={personalData.podcast.image} alt={personalData.podcast.imageAlt} width={1280} height={720} sizes="(max-width: 1024px) calc(100vw - 2rem), 440px" className="aspect-[16/10] w-full object-cover motion-image" />
          <figcaption className="absolute inset-x-0 bottom-0 bg-ink/90 px-5 py-4 text-sm text-white">{personalData.podcast.title} · technology, science, and pop culture</figcaption>
        </figure>
      </section>

      <section aria-labelledby="teaching-heading" className="border-y border-card-border bg-card-alt">
        <div className="site-shell py-14 sm:py-20">
          <p className="eyebrow">Teaching</p>
          <h2 id="teaching-heading" className="mt-3 text-3xl font-semibold tracking-tight text-primary">Practical topics for people who are curious.</h2>
          <div className="mt-10"><CommunityList items={communityData.speaking} /></div>
        </div>
      </section>

      <section className="site-shell grid gap-12 py-14 lg:grid-cols-2 sm:py-20">
        <div>
          <p className="eyebrow">Mentoring</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary">Share the map, not just the answer.</h2>
          <div className="mt-8"><CommunityList items={communityData.mentoring} /></div>
        </div>
        <div>
          <p className="eyebrow">Local involvement</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary">Make the next experiment less intimidating.</h2>
          <div className="mt-8"><CommunityList items={communityData.leadership} /></div>
        </div>
      </section>

      <section className="border-t border-card-border bg-ink py-14 text-white sm:py-16">
        <div className="site-shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-accent-light">Keep in touch</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight">Have a class, a community question, or a good story to share?</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={personalData.podcast.href} target="_blank" rel="noopener noreferrer" className="button-on-dark">Listen to the podcast <span aria-hidden="true">↗</span></a>
            <Link href="/contact" className="button-on-dark">Say hello</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
