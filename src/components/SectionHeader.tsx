type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  gradient?: boolean;
  centered?: boolean;
  icon?: React.ReactNode;
};

export default function SectionHeader({
  title,
  subtitle,
  gradient = true,
  centered = false,
  icon,
}: SectionHeaderProps) {
  return (
    <div className={`mb-8 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-2xl md:text-3xl font-bold ${
          gradient ? "text-gradient" : "text-primary"
        } transition-colors mb-3 flex items-center gap-3`}
      >
        {icon && <span className='text-brand-primary'>{icon}</span>}
        {title}
      </h2>

      {subtitle && (
        <p className='text-secondary text-lg md:text-xl max-w-3xl transition-colors'>
          {subtitle}
        </p>
      )}
    </div>
  );
}
