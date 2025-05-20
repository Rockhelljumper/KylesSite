import type { Metadata } from "next";
import { aboutData } from "@/lib/data/about";
import Headshot from "@/components/about/Headshot";
import Bio from "@/components/about/Bio";
import TechStack from "@/components/about/TechStack";
import Philosophy from "@/components/about/Philosophy";
import FunFacts from "@/components/about/FunFacts";

export const metadata: Metadata = {
  title: "About Me | Kyle Simmons",
  description:
    "Learn about my background, skills, and what drives me as a software engineer and community leader.",
};

export default function AboutPage() {
  return (
    <div className='container mx-auto px-4 py-24 md:py-32'>
      <div className='max-w-4xl mx-auto px-4 pt-32 pb-20 sm:pt-40 sm:pb-32'>
        <h1 className='text-4xl sm:text-5xl font-bold mb-6'>
          <span className='text-gradient'>About Me</span>
        </h1>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 mb-16'>
        {/* Left column with headshot */}
        <div className='flex flex-col justify-start'>
          <Headshot imageUrl={aboutData.headshotUrl} name='Kyle Simmons' />
        </div>

        {/* Right column with content */}
        <div className='space-y-12 md:space-y-16'>
          <Bio bioContent={aboutData.bio} />
          <TechStack techCategories={aboutData.techStack} />
          <Philosophy
            title={aboutData.philosophy.title}
            description={aboutData.philosophy.description}
            index={0}
          />
        </div>
      </div>

      {/* Full width fun facts */}
      <div className='mt-16 md:mt-24'>
        <FunFacts facts={aboutData.funFacts} />
      </div>
    </div>
  );
}
