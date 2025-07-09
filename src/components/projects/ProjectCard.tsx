"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import TechBadge from "@/components/ui/TechBadge";
import { Project } from "@/lib/data/projects";
import { trackExternalLinkClick } from "@/lib/utils/googleAnalytics";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
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

  return (
    <div
      ref={cardRef}
      className='opacity-0 translate-y-8 transition-all duration-700 h-full'
    >
      <div className='group h-full rounded-xl bg-card border border-card-border overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col'>
        {project.image && (
          <div className='relative h-48 w-full overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'></div>
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='object-cover group-hover:scale-105 transition-transform duration-500'
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
            {project.featured && (
              <span className='absolute top-3 right-3 bg-brand-gradient text-text-inverted text-xs font-medium px-2 py-1 rounded-md shadow-md z-20'>
                Featured Project
              </span>
            )}
          </div>
        )}

        <div className='flex flex-col flex-grow p-6'>
          <div className='mb-2 flex items-start justify-between'>
            <h3 className='text-xl font-bold text-primary transition-colors group-hover:text-brand-primary'>
              {project.title}
            </h3>
          </div>

          <p className='text-secondary mb-4 transition-colors'>
            {project.description}
          </p>

          <div className='mb-4 mt-auto'>
            <h4 className='text-sm font-semibold text-tertiary mb-2 transition-colors'>
              Technologies
            </h4>
            <div className='flex flex-wrap gap-2'>
              {project.technologies.map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
            </div>
          </div>

          <div className='mb-4'>
            <h4 className='text-sm font-semibold text-tertiary mb-2 transition-colors'>
              Role
            </h4>
            <p className='text-secondary transition-colors'>{project.role}</p>
          </div>

          <div className='mb-4'>
            <h4 className='text-sm font-semibold text-tertiary mb-2 transition-colors'>
              Impact
            </h4>
            <ul className='list-disc list-inside text-secondary space-y-1 transition-colors'>
              {project.impact.map((point, i) => (
                <li key={i} className='text-sm'>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {project.links && (
            <div className='mt-4 pt-4 border-t border-card-border flex flex-wrap gap-3'>
              {project.links.github && (
                <Link
                  href={project.links.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center text-sm text-tertiary hover:text-brand-primary transition-colors'
                  onClick={() =>
                    trackExternalLinkClick(
                      project.links.github!,
                      `${project.title} GitHub`
                    )
                  }
                >
                  <svg
                    className='w-4 h-4 mr-1'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                      clipRule='evenodd'
                    />
                  </svg>
                  GitHub
                </Link>
              )}

              {project.links.demo && (
                <Link
                  href={project.links.demo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center text-sm text-tertiary hover:text-brand-primary transition-colors'
                  onClick={() =>
                    trackExternalLinkClick(
                      project.links.demo!,
                      `${project.title} Demo`
                    )
                  }
                >
                  <svg
                    className='w-4 h-4 mr-1'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                    />
                  </svg>
                  Live Demo
                </Link>
              )}

              {project.links.other?.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center text-sm text-tertiary hover:text-brand-primary transition-colors'
                  onClick={() =>
                    trackExternalLinkClick(
                      link.url,
                      `${project.title} ${link.name}`
                    )
                  }
                >
                  <svg
                    className='w-4 h-4 mr-1'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
                    />
                  </svg>
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
