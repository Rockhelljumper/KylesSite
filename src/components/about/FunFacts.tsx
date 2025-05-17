"use client";

import { useRef, useEffect } from "react";
import { FunFact } from "@/lib/data/about";

type FunFactsProps = {
  facts: FunFact[];
};

export default function FunFacts({ facts }: FunFactsProps) {
  const factsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const facts = entry.target.querySelectorAll(".fun-fact");
            facts.forEach((fact, index) => {
              setTimeout(() => {
                fact.classList.add("opacity-100", "translate-y-0");
              }, 150 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (factsRef.current) {
      observer.observe(factsRef.current);
    }

    return () => {
      if (factsRef.current) {
        observer.unobserve(factsRef.current);
      }
    };
  }, []);

  return (
    <section ref={factsRef} className='mt-16 md:mt-24 mb-20'>
      <h2 className='text-2xl md:text-3xl font-bold mb-8 text-primary transition-colors'>
        Fun Facts
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {facts.map((fact, index) => (
          <div
            key={index}
            className='fun-fact opacity-0 translate-y-8 transition-all duration-700 bg-card rounded-lg shadow-md hover:shadow-lg p-5 border border-card-border flex items-start gap-5'
          >
            <span className='text-brand-primary text-4xl'>{fact.emoji}</span>
            <p className='text-secondary text-base transition-colors'>
              {fact.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
