"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import PageKinetic from "@/components/layout/PageKinetic";
import type { MakerspacePresentation } from "@/lib/data/community";

type PresentationViewerProps = {
  presentation: MakerspacePresentation;
};

function getSlideImage(presentation: MakerspacePresentation, index: number) {
  return `${presentation.slideImageDirectory}/Slide${index + 1}.JPG`;
}

export default function PresentationViewer({ presentation }: PresentationViewerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const canGoBack = currentSlide > 0;
  const canGoForward = currentSlide < presentation.slides - 1;
  const documentation = presentation.slideDocumentation[currentSlide];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") setCurrentSlide((current) => Math.max(0, current - 1));
      if (event.key === "ArrowRight") setCurrentSlide((current) => Math.min(presentation.slides - 1, current + 1));
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [presentation.slides]);

  return (
    <div className="page-stage pt-28 sm:pt-32">
      <PageKinetic variant="community" />
      <article>
        <header className="border-b border-card-border bg-card-alt">
          <div className="site-shell py-14 sm:py-20">
            <Link href="/community" className="text-link inline-flex">← Community</Link>
            <p className="eyebrow mt-8">Makerspace presentation</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl">{presentation.title}</h1>
            <p className="mt-4 max-w-3xl text-xl leading-8 text-secondary">{presentation.description}</p>
          </div>
        </header>

        <section className="site-shell py-10 sm:py-16">
          <div className="mx-auto max-w-6xl border-2 border-card-border bg-ink p-3 shadow-[1rem_1rem_0_color-mix(in_srgb,var(--brand-secondary)_18%,transparent)] sm:p-5" data-presentation-viewer>
            <Image
              key={currentSlide}
              src={getSlideImage(presentation, currentSlide)}
              alt={`${presentation.title}, slide ${currentSlide + 1} of ${presentation.slides}`}
              width={1920}
              height={1080}
              priority={currentSlide === 0}
              className="aspect-video w-full object-contain"
              data-presentation-slide
            />
          </div>

          <div className="mx-auto mt-8 grid max-w-6xl gap-5 border-y border-card-border py-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <p className="font-mono text-sm text-brand-primary">Slide {currentSlide + 1} / {presentation.slides}</p>
            <div className="flex gap-3 sm:justify-self-center">
              <button type="button" className="button-secondary button-compact disabled:cursor-not-allowed disabled:opacity-50" onClick={() => setCurrentSlide((current) => Math.max(0, current - 1))} disabled={!canGoBack}>
                ← Previous
              </button>
              <button type="button" className="button-primary button-compact disabled:cursor-not-allowed disabled:opacity-50" onClick={() => setCurrentSlide((current) => Math.min(presentation.slides - 1, current + 1))} disabled={!canGoForward}>
                Next →
              </button>
            </div>
            <label className="flex items-center gap-3 font-mono text-xs text-tertiary sm:justify-self-end">
              Jump to slide
              <input
                type="range"
                min="1"
                max={presentation.slides}
                value={currentSlide + 1}
                onChange={(event) => setCurrentSlide(Number(event.target.value) - 1)}
                aria-label="Jump to slide"
                className="accent-brand-primary"
              />
            </label>
          </div>
          <section
            key={currentSlide}
            className="mx-auto mt-6 max-w-6xl border-2 border-card-border bg-card p-6 sm:p-8"
            data-presentation-documentation
            aria-live="polite"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="eyebrow">Slide guide · {currentSlide + 1}</p>
              <span className="border border-brand-primary px-2 py-1 font-mono text-xs text-brand-primary">
                {documentation.provenance}
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-primary">{documentation.title}</h2>
            <p className="mt-3 max-w-4xl text-lg leading-8 text-secondary">{documentation.summary}</p>
            {documentation.talkingPoints && documentation.talkingPoints.length > 0 ? (
              <ul className="mt-5 grid gap-2 border-t border-card-border pt-5 text-secondary sm:grid-cols-2">
                {documentation.talkingPoints.map((point) => (
                  <li key={point} className="flex gap-3 leading-6"><span className="text-brand-primary" aria-hidden="true">•</span><span>{point}</span></li>
                ))}
              </ul>
            ) : null}
            {documentation.provenance === "Draft notes" ? (
              <p className="mt-5 font-mono text-xs leading-5 text-tertiary">Editable working notes—refine these with the presenter’s preferred examples, timing, and phrasing.</p>
            ) : null}
          </section>
          <p className="mx-auto mt-5 max-w-6xl text-sm leading-6 text-secondary">Use the previous/next controls, the slide picker, or your left and right arrow keys. This is a web viewer—nothing downloads when you open it.</p>
        </section>
      </article>
    </div>
  );
}
