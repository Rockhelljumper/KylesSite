"use client";

import React from "react";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
};

export default function SectionHeader({
  title,
  subtitle,
  icon,
}: SectionHeaderProps) {
  return (
    <div className='mb-6'>
      <div className='flex items-center gap-2 mb-1'>
        {icon && <span className='text-brand-primary'>{icon}</span>}
        <h2 className='text-2xl md:text-3xl font-bold text-primary'>{title}</h2>
      </div>
      {subtitle && (
        <p className='text-lg text-secondary mt-2 max-w-3xl'>{subtitle}</p>
      )}
    </div>
  );
}
