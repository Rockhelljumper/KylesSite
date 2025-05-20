"use client";

import { useEffect, useRef } from "react";
import { TechCategory } from "@/lib/data/about";

type TechStackProps = {
  techCategories: TechCategory[];
};

export default function TechStack({ techCategories }: TechStackProps) {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skills = entry.target.querySelectorAll(".skill-badge");
            skills.forEach((skill, idx) => {
              setTimeout(() => {
                skill.classList.add("opacity-100", "translate-y-0");
              }, 100 * idx);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = stackRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={stackRef} className='mt-12 md:mt-16 mb-8'>
      <h2 className='text-2xl md:text-3xl font-bold mb-6 text-primary transition-colors'>
        Technical Skills
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10'>
        {techCategories.map((category) => (
          <div key={category.category} className='overflow-visible mb-8'>
            <h3 className='text-xl font-semibold mb-4 text-brand-primary transition-colors'>
              {category.category}
            </h3>
            <div className='flex flex-wrap gap-3 mb-4'>
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className='skill-badge opacity-0 translate-y-4 transition-all duration-500 inline-flex px-3 py-2 rounded-md text-sm font-medium bg-brand-gradient-muted text-brand-primary hover:opacity-80 shadow-sm'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
