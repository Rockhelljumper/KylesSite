"use client";

import { useRef, useEffect } from "react";
import SectionHeader from "@/components/SectionHeader";

type SectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  anchor?: string;
  index: number;
};

export default function Section({ 
  title, 
  description, 
  children, 
  icon,
  anchor,
  index
}: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [index]);

  return (
    <section 
      ref={sectionRef}
      id={anchor}
      className='mb-16 md:mb-24 opacity-0 translate-y-8 transition-all duration-1000'
    >
      <SectionHeader 
        title={title} 
        subtitle={description}
        icon={icon}
      />
      <div className="mt-8">
        {children}
      </div>
    </section>
  );
} 