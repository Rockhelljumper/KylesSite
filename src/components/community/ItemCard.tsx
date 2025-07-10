"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { trackExternalLinkClick } from "@/lib/utils/googleAnalytics";

type ItemCardProps = {
  title: string;
  subtitle: string;
  description: string;
  years?: string;
  link?: string;
  index: number;
  icon?: React.ReactNode;
};

export default function ItemCard({
  title,
  subtitle,
  description,
  years,
  link,
  index,
  icon,
}: ItemCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

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

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [index]);

  const content = (
    <div
      ref={cardRef}
      className='opacity-0 translate-y-4 transition-all duration-500 bg-card hover:bg-card-alt border border-card-border rounded-lg shadow-sm hover:shadow-md p-5 flex flex-col h-full'
    >
      <div className='flex justify-between items-start mb-3'>
        <div className='flex-grow'>
          <h3 className='text-lg font-semibold text-primary group-hover:text-brand-primary transition-colors flex items-center gap-2'>
            {icon && <span className='text-brand-primary'>{icon}</span>}
            {title}
          </h3>
          <p className='text-tertiary transition-colors'>{subtitle}</p>
        </div>
        {years && (
          <span className='text-sm font-medium text-brand-primary bg-brand-gradient-muted px-2 py-1 rounded'>
            {years}
          </span>
        )}
      </div>
      <p className='text-secondary mt-2 transition-colors flex-grow'>
        {description}
      </p>
      {link && (
        <div className='mt-4 pt-3 border-t border-card-border'>
          <Link
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm text-brand-primary hover:underline flex items-center gap-1'
            onClick={() => trackExternalLinkClick(link, `Community: ${title}`)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
              />
            </svg>
            View details
          </Link>
        </div>
      )}
    </div>
  );

  if (link) {
    return <div className='group h-full'>{content}</div>;
  }

  return content;
}
