"use client";
import Image from "next/image";
import { useState } from "react";

type HeadshotProps = {
  imageUrl: string;
  name: string;
};

export default function Headshot({ imageUrl, name }: HeadshotProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className='relative'>
      <div className='absolute inset-0 rounded-xl bg-brand-gradient-muted blur-xl opacity-30 transform -rotate-6'></div>
      <div className='relative aspect-square w-full max-w-[320px] mx-auto overflow-hidden rounded-xl bg-card shadow-lg'>
        {imageUrl && !imageError ? (
          <Image
            src={imageUrl}
            alt={`${name} headshot`}
            fill
            sizes='(max-width: 768px) 100vw, 320px'
            className='object-cover'
            priority
            onError={() => setImageError(true)}
          />
        ) : (
          <div className='absolute inset-0 flex items-center justify-center bg-brand-gradient-muted'>
            <span className='text-brand-primary text-6xl font-bold'>
              {name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
