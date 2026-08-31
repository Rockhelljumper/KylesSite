type TechBadgeProps = {
  tech: string;
  onClick?: () => void;
  isActive?: boolean;
  isFilter?: boolean;
};

export default function TechBadge({
  tech,
  onClick,
  isActive = false,
  isFilter = false,
}: TechBadgeProps) {
  const baseClasses =
    "inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200";

  const getClasses = () => {
    if (isFilter) {
      return isActive
        ? `${baseClasses} bg-brand-gradient text-text-inverted shadow-sm cursor-pointer`
        : `${baseClasses} bg-card-alt text-tertiary hover:text-primary border border-card-border shadow-sm cursor-pointer hover:shadow-md`;
    }

    return `${baseClasses} bg-brand-gradient-muted text-brand-primary shadow-sm`;
  };

  if (onClick) {
    return <button type="button" className={getClasses()} onClick={onClick} aria-pressed={isActive}>{tech}</button>;
  }

  return <span className={getClasses()}>{tech}</span>;
}
