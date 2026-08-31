import Image from "next/image";
import type { MakerspacePresentation } from "@/lib/data/community";

type PresentationLibraryProps = {
  presentations: readonly MakerspacePresentation[];
};

export default function PresentationLibrary({ presentations }: PresentationLibraryProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {presentations.map((presentation) => (
        <article key={presentation.href} className="motion-card overflow-hidden border-2 border-card-border bg-card">
          {presentation.thumbnail ? (
            <Image
              src={presentation.thumbnail}
              alt={presentation.thumbnailAlt ?? `${presentation.title} presentation thumbnail`}
              width={640}
              height={360}
              className="aspect-[16/9] w-full object-cover"
            />
          ) : (
            <div className="relative aspect-[16/9] overflow-hidden bg-ink px-6 py-5 text-white">
              <span className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-brand-primary/50 bg-brand-primary/20" aria-hidden="true" />
              <span className="absolute -bottom-16 right-16 h-40 w-40 rounded-full border border-brand-secondary/50 bg-brand-secondary/20" aria-hidden="true" />
              <p className="relative font-mono text-xs tracking-[0.18em] text-accent-light">MAKERSPACE WORKSHOP</p>
              <h3 className="relative mt-6 max-w-[13rem] text-2xl font-semibold leading-tight">AI for Makers</h3>
              <p className="relative mt-2 text-sm text-accent-light">From prompt to prototype</p>
            </div>
          )}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">{presentation.years}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-primary">{presentation.title}</h3>
              </div>
              <span className="shrink-0 border border-brand-primary px-2 py-1 font-mono text-xs text-brand-primary">{presentation.format}</span>
            </div>
            <p className="mt-2 text-sm text-tertiary">{presentation.subtitle}</p>
            <p className="mt-4 text-sm leading-6 text-secondary">{presentation.description}</p>
            <p className="mt-5 font-mono text-xs text-tertiary">{presentation.slides} slides · {presentation.fileSize}</p>
            <div className="mt-6 grid gap-3">
              <a
                href={presentation.pdfHref}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary w-full justify-center"
                data-presentation-open={presentation.format}
              >
                Open slides <span className="ml-2" aria-hidden="true">↗</span>
              </a>
              <a href={presentation.href} download className="text-link mx-auto text-sm" data-presentation-download={presentation.format}>
                Download original {presentation.format} <span className="ml-1" aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
