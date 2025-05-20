"use client";

import { useMemo } from "react";
import { communityData } from "@/lib/data/community";
import Section from "@/components/community/Section";
import ItemCard from "@/components/community/ItemCard";
import { MentoringIcon, SpeakingIcon, WritingIcon, OpenSourceIcon, LeadershipIcon } from "@/components/icons/Icons";

export default function CommunityPage() {
  const yearRange = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const startYear = 2018;
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
            <div className='text-tertiary text-sm'>Mentoring Projects</div>
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

      {/* Mentoring Section */}
      <Section
        title='Mentoring & Developer Support'
        description='Helping others grow in their technical careers through structured mentorship and guidance.'
        anchor='mentoring'
        icon={<MentoringIcon />}
        index={0}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {communityData.mentoring.map((item, index) => (
            <ItemCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              years={item.years}
              link={item.link}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Speaking Section */}
      <Section
        title='Speaking & Events'
        description='Sharing knowledge and experiences through public speaking and community events.'
        anchor='speaking'
        icon={<SpeakingIcon />}
        index={1}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {communityData.speaking.map((item, index) => (
            <ItemCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              years={item.years}
              link={item.link}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Writing Section */}
      <Section
        title='Writing & Content'
        description='Creating educational content and sharing insights through various platforms.'
        anchor='writing'
        icon={<WritingIcon />}
        index={2}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {communityData.writing.map((item, index) => (
            <ItemCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              years={item.years}
              link={item.link}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Open Source Section */}
      <Section
        title='Open Source & Projects'
        description='Contributing to and maintaining open source projects that benefit the community.'
        anchor='open-source'
        icon={<OpenSourceIcon />}
        index={3}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {communityData.openSource.map((item, index) => (
            <ItemCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              years={item.years}
              link={item.link}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Leadership Section */}
      <Section
        title='Community Leadership'
        description='Taking on leadership roles to help grow and support developer communities.'
        anchor='leadership'
        icon={<LeadershipIcon />}
        index={4}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {communityData.leadership.map((item, index) => (
            <ItemCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              years={item.years}
              link={item.link}
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
          I&apos;m always open to speaking opportunities, mentoring, and
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
