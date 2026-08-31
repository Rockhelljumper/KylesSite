import type { Metadata } from "next";
import { nowData } from "@/lib/data/now";
import SectionBlock from "@/components/now/SectionBlock";

export const metadata: Metadata = { title: "Now", description: "A current snapshot of Kyle Simmons' professional and community focus.", alternates: { canonical: "/now" } };

export default function NowPage() {
  return (
    <div className="pt-28 sm:pt-32"><section className="site-shell py-14 sm:py-20"><p className="eyebrow">Now</p><h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl">What I&apos;m working on now.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-secondary">A small, current supplement to the portfolio—not a second résumé.</p><p className="mt-5 font-mono text-xs text-tertiary">Last updated: {nowData.updated}</p><div className="mt-10 grid gap-5 md:grid-cols-2">{nowData.sections.map((section) => <SectionBlock key={section.title} section={section} />)}</div></section></div>
  );
}
