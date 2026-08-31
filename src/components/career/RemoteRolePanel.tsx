import Link from "next/link";
import { careerData } from "@/lib/data/career";

type RemoteRolePanelProps = {
  compact?: boolean;
};

export default function RemoteRolePanel({ compact = false }: RemoteRolePanelProps) {
  return (
    <section className={compact ? "border-l-2 border-brand-primary pl-4" : "border-2 border-card-border bg-card-alt p-6 sm:p-8"} aria-label="Current role focus" data-remote-role-panel>
      <p className="eyebrow">Current role focus</p>
      <p className="mt-3 text-xl font-semibold text-primary">{careerData.availability}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {careerData.targetRoles.map((role) => (
          <li key={role} className="border border-brand-primary/50 bg-card px-3 py-2 text-sm font-medium text-primary">{role}</li>
        ))}
      </ul>
      {!compact ? <Link href="/resume" className="button-primary mt-6">View leadership résumé <span className="ml-2" aria-hidden="true">→</span></Link> : null}
    </section>
  );
}
