import type { NowSection } from "@/lib/data/now";

export default function SectionBlock({ section }: { section: NowSection }) {
  return (
    <section className="bg-card p-6 md:p-8 motion-card">
      <div className="flex items-center gap-3">
        {section.icon && <span className="font-mono text-xs font-semibold text-brand-primary">{section.icon}</span>}
        <h2 className="text-xl font-semibold text-primary md:text-2xl">{section.title}</h2>
      </div>
      <ul className="mt-5 space-y-3 text-secondary">
        {section.items.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" aria-hidden="true" /><span className="leading-relaxed">{item}</span></li>)}
      </ul>
    </section>
  );
}
