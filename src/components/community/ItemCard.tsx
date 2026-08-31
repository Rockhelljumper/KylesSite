import Link from "next/link";

type ItemCardProps = {
  title: string;
  subtitle: string;
  description: string;
  years?: string;
  link?: string;
  icon?: React.ReactNode;
};

export default function ItemCard({ title, subtitle, description, years, link, icon }: ItemCardProps) {
  const content = <><div className="flex justify-between gap-4"><div><h3 className="flex items-center gap-2 text-lg font-semibold text-primary">{icon && <span className="text-brand-primary">{icon}</span>}{title}</h3><p className="mt-1 text-sm text-tertiary">{subtitle}</p></div>{years && <span className="shrink-0 font-mono text-xs text-brand-primary">{years}</span>}</div><p className="mt-4 text-sm leading-6 text-secondary">{description}</p>{link && <span className="text-link mt-5 inline-flex">View details <span aria-hidden="true">↗</span></span>}</>;
  const className = "block h-full border border-card-border bg-card p-5 hover:border-brand-primary";
  return link ? <Link href={link} target="_blank" rel="noopener noreferrer" className={className}>{content}</Link> : <article className={className}>{content}</article>;
}
