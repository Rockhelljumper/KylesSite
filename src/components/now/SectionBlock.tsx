"use client";

import { useRef, useEffect } from "react";
import { NowSection } from "@/lib/data/now";

type SectionBlockProps = {
  section: NowSection;
  index: number;
};

export default function SectionBlock({ section, index }: SectionBlockProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100", "translate-y-0");
              entry.target.classList.remove("opacity-0", "translate-y-8");
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [index]);

  // Format text with markdown-like italics (*text*)
  const formatText = (text: string) => {
    return text.split("*").map((part, i) =>
      i % 2 === 0 ? (
        <span key={i}>{part}</span>
      ) : (
        <em key={i} className='italic font-medium'>
          {part}
        </em>
      )
    );
  };

  return (
    <div
      ref={sectionRef}
      className='opacity-0 translate-y-8 transition-all duration-700 ease-out'
    >
      <div className='bg-card border border-card-border rounded-xl p-6 md:p-8 shadow-sm h-full'>
        <div className='flex items-center mb-5'>
          {section.icon && (
            <span className='text-2xl mr-3' aria-hidden='true'>
              {section.icon}
            </span>
          )}
          <h2 className='text-xl md:text-2xl font-bold text-primary'>
            {section.title}
          </h2>
        </div>

        <ul className='space-y-3 text-secondary'>
          {section.items.map((item, idx) => (
            <li key={idx} className='flex items-start'>
              <span className='text-brand-primary mr-2 mt-1.5 flex-shrink-0'>
                •
              </span>
              <span className='leading-relaxed'>{formatText(item)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
