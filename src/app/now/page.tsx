import type { Metadata } from "next";
import { nowData } from "@/lib/data/now";
import SectionBlock from "@/components/now/SectionBlock";

export const metadata: Metadata = { title: "Life Lately", description: "A small, human snapshot of what Kyle Simmons is building, reading, making, and sharing.", alternates: { canonical: "/now" } };

export default function NowPage() {
  return (
    <div className="pt-28 sm:pt-32">
      <section className="site-shell py-14 sm:py-20">
        <p className="eyebrow">Life lately</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl">A quiet snapshot, not a status feed.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-secondary">A few things that have my attention beyond the work samples and job titles.</p>
        <p className="mt-5 font-mono text-xs text-tertiary">Last updated: {nowData.updated}</p>
        <div className="mt-10 grid gap-px border border-card-border bg-card-border md:grid-cols-2">{nowData.sections.map((section) => <SectionBlock key={section.title} section={section} />)}</div>
      </section>
    </div>
  );
}
