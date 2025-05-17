"use client";

import { useRef, useEffect, useState } from "react";

type PhilosophyProps = {
  title: string;
  description: string;
};

export default function Philosophy({ title, description }: PhilosophyProps) {
  const philosophyRef = useRef<HTMLElement>(null);
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
      { threshold: 0.2 }
    );

    if (philosophyRef.current) {
      observer.observe(philosophyRef.current);
    }

    // Force visibility after a delay in case the observer doesn't trigger
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => {
      if (philosophyRef.current) {
        observer.unobserve(philosophyRef.current);
      }
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      ref={philosophyRef}
      className={`mt-12 md:mt-16 mb-8 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-70"
      }`}
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
