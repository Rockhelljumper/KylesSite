import Image from "next/image";
import Link from "next/link";
import { homeData } from "@/lib/data/homeData";
import { profile } from "@/lib/data/profile";

export default function Hero() {
  return (
    <section className="border-b border-card-border bg-card pt-28 sm:pt-32">
      <div className="site-shell grid gap-12 py-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(240px,0.55fr)] lg:items-end lg:py-24">
        <div>
          <p className="eyebrow">Kyle Simmons · {profile.location} · Engineer, maker, mentor</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl lg:text-6xl">
            Engineering that works in the real world.
          </h1>
          <p className="mt-6 max-w-3xl text-xl font-medium leading-8 text-primary sm:text-2xl">
            {homeData.title}
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-secondary">
            {homeData.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {homeData.ctaLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={"isPrimary" in link && link.isPrimary ? "button-primary" : "button-secondary"}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>

        <figure className="justify-self-start lg:justify-self-end motion-float">
          <div className="relative aspect-[4/5] w-52 overflow-hidden border border-card-border bg-card-alt sm:w-60">
            <Image
              src={profile.homePortraitUrl}
              alt="Kyle Simmons"
              fill
              sizes="(max-width: 640px) 208px, 240px"
              className="object-cover motion-image"
              priority
            />
          </div>
          <figcaption className="mt-3 font-mono text-xs text-tertiary">
            Systems, side projects, and a good trail.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
