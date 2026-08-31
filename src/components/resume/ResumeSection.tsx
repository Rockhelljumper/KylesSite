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
}: ResumeSectionProps<T>) {
  return (
    <section className="mb-12 border-y border-card-border py-8">
      <h2 className='text-2xl font-bold text-primary mb-6 transition-colors'>
        {title}
      </h2>
      <div className='space-y-6'>
        {items.map((item, index) => (
          <div key={index}>{renderItem(item, index)}</div>
        ))}
      </div>
    </section>
  );
}
