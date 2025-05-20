"use client";

import { useRef, useEffect } from "react";

type PhilosophyProps = {
  title: string;
  description: string;
  index: number;
};

export default function Philosophy({ title, description, index }: PhilosophyProps) {
  const philosophyRef = useRef<HTMLElement>(null);

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

    const currentRef = philosophyRef.current;
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
      ref={philosophyRef}
      className='mt-12 md:mt-16 mb-8 opacity-0 translate-y-8 transition-all duration-1000'
    >
      <h2 className='text-2xl md:text-3xl font-bold mb-6 text-primary transition-colors inline-block border-b-2 border-brand-primary pb-2'>
        {title}
      </h2>

      <div className='relative mt-4'>
        <div className='absolute top-0 left-0 w-2 h-full bg-brand-primary rounded-full'></div>
        <blockquote className='pl-6 md:pl-8 py-1'>
          <p className='italic text-lg md:text-xl text-secondary leading-relaxed transition-colors'>
            {description}
          </p>
        </blockquote>
      </div>
    </section>
  );
}
