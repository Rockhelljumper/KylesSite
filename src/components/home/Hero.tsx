"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { trackButtonClick } from "@/lib/utils/googleAnalytics";

type HeroProps = {
  name: string;
  tagline: string;
  shortBio: string;
  ctaLinks: Array<{
    text: string;
    href: string;
    isPrimary?: boolean;
  }>;
};

export default function Hero({ name, tagline, shortBio, ctaLinks }: HeroProps) {
  const [imageError, setImageError] = useState(false);
  const headshotUrl = "/images/HomeHeadshot.jpeg";

  return (
    <section className='relative pt-32 pb-20 md:pt-40 md:pb-32'>
      {/* Decorative background */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute left-[10%] top-[15%] h-64 w-64 rounded-full bg-brand-gradient-muted blur-3xl opacity-40' />
        <div className='absolute -right-[5%] bottom-[5%] h-72 w-72 rounded-full bg-brand-gradient-muted blur-3xl opacity-30' />
      </div>

      <div className='container mx-auto px-4 sm:px-6 md:px-8'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
          <div className='md:max-w-[60%] animate-fade-in'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight'>
              <span className='text-gradient'>{name}</span>
            </h1>
            <h2 className='mt-2 md:mt-4 text-xl md:text-2xl lg:text-3xl font-medium text-secondary transition-colors'>
              {tagline}
            </h2>
            <p className='mt-6 text-lg leading-relaxed text-tertiary max-w-2xl transition-colors'>
              {shortBio}
            </p>

            <div className='mt-8 flex flex-col sm:flex-row gap-4'>
              {ctaLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`
                    inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium shadow-sm transition-all
                    ${link.isPrimary ? "btn-primary" : "btn-secondary"}
                  `}
                  onClick={() => trackButtonClick(link.text, "hero")}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          <div className='hidden md:block md:w-[35%] lg:w-[30%] animate-slide-up'>
            <div className='relative'>
              <div className='absolute inset-0 rounded-xl bg-brand-gradient-muted blur-xl opacity-30 transform -rotate-6 transition-colors'></div>
              <div className='relative aspect-square overflow-hidden rounded-xl bg-card shadow-lg transition-colors'>
                {headshotUrl && !imageError ? (
                  <Image
                    src={headshotUrl}
                    alt={`${name} headshot`}
                    fill
                    sizes='(max-width: 768px) 100vw, 400px'
                    className='object-cover'
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className='absolute inset-0 flex items-center justify-center text-brand-primary text-2xl font-bold transition-colors'>
                    <span>
                      {name
                        .split(" ")
                        .map((part: string) => part[0])
                        .join("")}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
