"use client";

import { useState, useMemo } from "react";
import { communityData } from "@/lib/data/community";
import Section from "@/components/community/Section";
import ItemCard from "@/components/community/ItemCard";

export default function CommunityPage() {
  // Calculate total items for the impact counter
  const totalContributions = useMemo(() => {
    return (
      communityData.speaking.length +
      communityData.mentoring.length +
      communityData.openSource.length +
      communityData.leadership.length
    );
  }, []);

  // Calculate years of community involvement
  const yearRange = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const startYear = 2018; // Earliest year from the data
    return `${startYear}-${currentYear}`;
  }, []);

  return (
    <div className='container mx-auto px-4 py-24 md:py-32'>
      {/* Hero Section */}
      <div className='max-w-4xl mx-auto px-4 pt-32 pb-20 sm:pt-40 sm:pb-32'>
        <h1 className='text-4xl sm:text-5xl font-bold mb-6'>
          <span className='text-gradient'>Community Involvement</span>
        </h1>
        <p className='text-xl text-secondary max-w-2xl leading-relaxed transition-colors mb-8'>
          {communityData.intro}
        </p>

        {/* Impact Stats */}
        <div className='mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
          <div className='bg-card-alt rounded-lg p-5 text-center border border-card-border'>
            <div className='text-3xl md:text-4xl font-bold text-brand-primary mb-2'>
              {communityData.speaking.length}+
            </div>
            <div className='text-tertiary text-sm'>Speaking Engagements</div>
          </div>
          <div className='bg-card-alt rounded-lg p-5 text-center border border-card-border'>
            <div className='text-3xl md:text-4xl font-bold text-brand-primary mb-2'>
              {communityData.mentoring.length}+
            </div>
            <div className='text-tertiary text-sm'>Mentorship Programs</div>
          </div>
          <div className='bg-card-alt rounded-lg p-5 text-center border border-card-border'>
            <div className='text-3xl md:text-4xl font-bold text-brand-primary mb-2'>
              {communityData.openSource.length}+
            </div>
            <div className='text-tertiary text-sm'>Open Source Projects</div>
          </div>
          <div className='bg-card-alt rounded-lg p-5 text-center border border-card-border'>
            <div className='text-3xl md:text-4xl font-bold text-brand-primary mb-2'>
              {yearRange}
            </div>
            <div className='text-tertiary text-sm'>Years of Involvement</div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className='max-w-4xl mx-auto mb-16 flex flex-wrap gap-4 justify-center'>
        <a
          href='#speaking'
          className='px-4 py-2 bg-card-alt hover:bg-card border border-card-border rounded-md text-primary transition-colors'
        >
          Speaking
        </a>
        <a
          href='#mentoring'
          className='px-4 py-2 bg-card-alt hover:bg-card border border-card-border rounded-md text-primary transition-colors'
        >
          Mentoring
        </a>
        <a
          href='#opensource'
          className='px-4 py-2 bg-card-alt hover:bg-card border border-card-border rounded-md text-primary transition-colors'
        >
          Open Source
        </a>
        <a
          href='#leadership'
          className='px-4 py-2 bg-card-alt hover:bg-card border border-card-border rounded-md text-primary transition-colors'
        >
          Leadership
        </a>
      </div>

      {/* Speaking Section */}
      <Section
        title='Speaking Engagements'
        description='Sharing knowledge and insights through conference talks, workshops, and panel discussions.'
        anchor='speaking'
        icon={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z'
            />
          </svg>
        }
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {communityData.speaking.map((item, index) => (
            <ItemCard
              key={index}
              title={item.title}
              subtitle={item.event}
              description={item.description}
              years={item.year.toString()}
              link={item.link}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Mentoring Section */}
      <Section
        title='Mentoring & Developer Support'
        description='Helping others grow in their technical careers through structured mentorship and guidance.'
        anchor='mentoring'
        icon={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
            />
          </svg>
        }
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {communityData.mentoring.map((item, index) => (
            <ItemCard
              key={index}
              title={item.programOrOrg}
              subtitle={item.role}
              description={item.description}
              years={item.years}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Open Source Section */}
      <Section
        title='Open Source Contributions'
        description='Contributing to and maintaining open source projects that benefit the broader developer community.'
        anchor='opensource'
        icon={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
            />
          </svg>
        }
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {communityData.openSource.map((item, index) => (
            <ItemCard
              key={index}
              title={item.project}
              subtitle={item.role}
              description={item.description}
              link={item.link}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Leadership Section */}
      <Section
        title='Community Leadership'
        description='Taking on leadership roles to organize and grow tech communities and initiatives.'
        anchor='leadership'
        icon={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M13 10V3L4 14h7v7l9-11h-7z'
            />
          </svg>
        }
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {communityData.leadership.map((item, index) => (
            <ItemCard
              key={index}
              title={item.org}
              subtitle={item.title}
              description={item.description}
              years={item.years}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <div className='max-w-4xl mx-auto mt-16 bg-brand-gradient-muted rounded-xl p-8 text-center border border-card-border'>
        <h2 className='text-2xl font-bold text-primary mb-4'>
          Interested in Collaboration?
        </h2>
        <p className='text-secondary mb-6 max-w-2xl mx-auto'>
          I'm always open to speaking opportunities, mentoring, and
          collaborating on open source projects that make a positive impact.
        </p>
        <a
          href='/contact'
          className='inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium btn-primary shadow-md transition-all'
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}
