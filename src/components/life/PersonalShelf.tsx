import { personalData } from "@/lib/data/personal";

export default function PersonalShelf() {
  return (
    <div className="grid gap-px border border-card-border bg-card-border md:grid-cols-3">
      {personalData.shelf.map((item) => (
        <article key={item.label} className="bg-card p-6 sm:p-7 motion-card">
          <p className="eyebrow">{item.label}</p>
          <h3 className="mt-4 text-xl font-semibold leading-7 text-primary">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-secondary">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
