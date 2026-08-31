"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProjectScreenshot } from "@/lib/data/projects";

type AppScreenshotCarouselProps = {
  title: string;
  introduction: string;
  screenshots: readonly ProjectScreenshot[];
};

export default function AppScreenshotCarousel({
  title,
  introduction,
  screenshots,
}: AppScreenshotCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreenshot = screenshots[activeIndex];

  if (screenshots.length === 0) return null;

  const showSlide = (index: number) => {
    setActiveIndex((index + screenshots.length) % screenshots.length);
  };

  return (
    <section aria-labelledby="app-preview-heading" className="project-gallery" data-project-gallery>
      <div className="max-w-2xl">
        <p className="eyebrow">Product walkthrough</p>
        <h2 id="app-preview-heading" className="mt-3 text-3xl font-semibold tracking-tight text-primary">
          {title}
        </h2>
        <p className="mt-4 text-lg leading-8 text-secondary">{introduction}</p>
      </div>

      <div className="carousel-shell mt-10">
        <div className="carousel-frame" aria-live="polite">
          <div className="carousel-slide" key={activeScreenshot.src}>
            <div className="relative mx-auto aspect-[9/20] w-full max-w-[19rem] overflow-hidden rounded-[2rem] border-2 border-brand-primary/60 bg-ink shadow-2xl">
              <Image
                src={activeScreenshot.src}
                alt={activeScreenshot.alt}
                fill
                sizes="(max-width: 640px) calc(100vw - 5rem), 304px"
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="carousel-copy">
            <p className="eyebrow">Screen {String(activeIndex + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 text-2xl font-semibold text-primary">{activeScreenshot.title}</h3>
            <p className="mt-3 text-secondary">{activeScreenshot.description}</p>
            <p className="mt-6 font-mono text-sm text-tertiary">
              {activeIndex + 1} / {screenshots.length}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-3">
            <button type="button" className="carousel-control" onClick={() => showSlide(activeIndex - 1)} aria-label="Show previous app screen">
              ← Previous
            </button>
            <button type="button" className="button-primary button-compact" onClick={() => showSlide(activeIndex + 1)} aria-label="Show next app screen">
              Next screen →
            </button>
          </div>
          <div className="flex gap-2" aria-label="Choose an app screen">
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.src}
                type="button"
                className={index === activeIndex ? "carousel-indicator is-active" : "carousel-indicator"}
                onClick={() => showSlide(index)}
                aria-label={`Show ${screenshot.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
