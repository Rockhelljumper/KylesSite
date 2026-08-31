import Image from "next/image";
import Link from "next/link";
import CareerProof from "@/components/home/CareerProof";
import { careerData } from "@/lib/data/career";
import { homeData } from "@/lib/data/homeData";
import { profile } from "@/lib/data/profile";

export default function Hero() {
  return (
    <section className="hero-stage border-b border-card-border bg-card pt-28 sm:pt-32">
      <div className="hero-kinetic" aria-hidden="true" data-testid="hero-kinetic">
        <span className="hero-orbit hero-orbit-one" />
        <span className="hero-orbit hero-orbit-two" />
        <span className="hero-orbit hero-orbit-three" />
      </div>
      <div className="site-shell hero-content grid gap-12 py-16 xl:grid-cols-[minmax(0,1.3fr)_minmax(22rem,0.7fr)] xl:items-center xl:py-28">
        <div>
          <p className="eyebrow">Kyle Simmons · {careerData.positioning.eyebrow}</p>
          <h1 className="hero-title mt-5 max-w-5xl font-semibold tracking-[-0.05em] text-primary">
            Engineering that works in the real world.
          </h1>
          <p className="hero-statement mt-8 max-w-4xl font-medium text-primary">
            {homeData.title}
          </p>
          <p className="hero-summary mt-5 max-w-3xl text-secondary">
            {homeData.summary}
          </p>
          <CareerProof />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {homeData.ctaLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={"isPrimary" in link && link.isPrimary ? "button-primary" : "button-secondary"}
                data-cta
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>

        <figure className="hero-portrait-wrap hidden justify-self-start motion-float sm:block xl:justify-self-end" data-testid="hero-portrait">
          <div className="hero-portrait relative aspect-[4/5] overflow-hidden border border-card-border bg-card-alt">
            <Image
              src={profile.headshotUrl}
              alt="Kyle Simmons"
              fill
              sizes="(max-width: 640px) 288px, (max-width: 1280px) 336px, 384px"
              className="object-cover motion-image"
              priority
            />
          </div>
          <span className="hero-note" aria-hidden="true">WORK / MAKE / SHARE</span>
          <figcaption className="mt-3 font-mono text-xs text-tertiary">
            Remote leadership · systems · maker projects
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
