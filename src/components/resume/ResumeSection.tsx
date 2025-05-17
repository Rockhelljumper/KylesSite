import { ReactNode } from "react";

type ResumeSectionProps<T> = {
  title: string;
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  isVisible: boolean;
  delay: number;
};

export default function ResumeSection<T>({
  title,
  items,
  renderItem,
  isVisible,
  delay,
}: ResumeSectionProps<T>) {
  return (
    <div
      className={`
      bg-card border border-card-border rounded-xl shadow-sm p-8 mb-12
      transition-all duration-700 transform
      ${
        isVisible
          ? `translate-y-0 opacity-100 delay-${delay}`
          : "translate-y-8 opacity-0"
      }
    `}
    >
      <h2 className='text-2xl font-bold text-primary mb-6 transition-colors'>
        {title}
      </h2>
      <div className='space-y-6'>
        {items.map((item, index) => (
          <div key={index}>{renderItem(item, index)}</div>
        ))}
      </div>
    </div>
  );
}
