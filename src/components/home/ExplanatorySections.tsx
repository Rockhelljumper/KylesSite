import Link from "next/link";

type ExplanatorySectionsProps = {
  overview: {
    title: string;
    description: string;
    highlights: string[];
  };
};

export default function ExplanatorySections({
  overview,
}: ExplanatorySectionsProps) {
  return (
    <section className='py-16 bg-background'>
      <div className='container mx-auto px-4 sm:px-6 md:px-8'>
        <div className='max-w-3xl mx-auto'>
          <div className='relative p-8 rounded-xl bg-card transition-all'>
            <div className='absolute top-0 left-0 w-full h-1 bg-brand-gradient rounded-t-xl opacity-80' />
            <h2 className='text-2xl font-bold mb-4 text-primary'>
              {overview.title}
            </h2>
            <p className='text-tertiary mb-6 leading-relaxed'>
              {overview.description}
            </p>
            <div className='space-y-3'>
              {overview.highlights.map((highlight, index) => (
                <div key={index} className='flex items-start'>
                  <div className='flex-shrink-0 h-6 w-6 text-brand-primary'>
                    <svg
                      className='h-6 w-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  </div>
                  <p className='ml-3 text-tertiary'>{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
