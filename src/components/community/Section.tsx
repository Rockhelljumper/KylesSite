"use client";

import { useRef, useEffect, useState } from "react";
import SectionHeader from "@/components/SectionHeader";

type SectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  anchor?: string;
};

export default function Section({ 
  title, 
  description, 
  children, 
  icon,
  anchor
}: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
  }, []);

  return (
    <section 
      ref={sectionRef}
      id={anchor}
      className={`mb-16 md:mb-24 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
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