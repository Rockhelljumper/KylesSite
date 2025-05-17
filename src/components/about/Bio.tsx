import React from "react";

export default function Bio({ bioContent }: { bioContent: string }) {
  return (
    <section className='mt-8 mb-12'>
      <h2 className='text-2xl md:text-3xl font-bold mb-4 text-primary transition-colors'>
        Who is Kyle Simmons?
      </h2>

      <div className='space-y-4'>
        <p className='text-secondary leading-relaxed transition-colors'>
          {bioContent}
        </p>
      </div>
    </section>
  );
}
