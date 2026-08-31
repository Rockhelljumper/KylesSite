import Link from "next/link";
import { careerData } from "@/lib/data/career";

export default function CareerProof() {
  return (
    <section aria-label="Leadership proof" className="mt-10 border-y border-card-border py-5" data-career-proof>
      <div className="grid gap-4 sm:grid-cols-3">
        {careerData.proof.map((item) => (
          <Link key={item.label} href="/projects" className="group border-l-2 border-brand-primary pl-4 transition-colors hover:bg-card-alt">
            <p className="text-2xl font-semibold tracking-tight text-primary group-hover:text-brand-primary">{item.value}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-tertiary">{item.label}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
