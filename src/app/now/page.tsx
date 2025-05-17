"use client";

import { nowData } from "@/lib/data/now";
import SectionBlock from "@/components/now/SectionBlock";
import { useState, useEffect } from "react";

export default function NowPage() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  return (
    <div className='container mx-auto px-4 py-24 md:py-32'>
      <div className='max-w-4xl mx-auto px-4 pt-32 pb-12 sm:pt-40 sm:pb-16'>
        <h1 className='text-4xl sm:text-5xl font-bold mb-6'>
          <span className='text-gradient'>Now</span>
        </h1>

        <p className='text-xl text-secondary max-w-2xl leading-relaxed transition-colors mb-6'>
          This is what I'm focused on right now — a snapshot of my current work,
          interests, and priorities.
        </p>

        <div
          className={`
          inline-flex items-center text-tertiary text-sm border-t border-card-border pt-3
          transition-all duration-700 
          ${isPageLoaded ? "opacity-100" : "opacity-0"}
        `}
        >
          <svg
            className='w-4 h-4 mr-2'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
            />
          </svg>
          Last updated:{" "}
          <span className='ml-1 font-medium'>{nowData.updated}</span>
        </div>
      </div>

      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
          {nowData.sections.map((section, index) => (
            <SectionBlock key={section.title} section={section} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
