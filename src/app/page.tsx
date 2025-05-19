import Hero from "@/components/home/Hero";
import ExplanatorySections from "@/components/home/ExplanatorySections";
import { homeData } from "@/lib/data/homeData";

export default function Home() {
  return (
    <>
      <Hero
        name={homeData.name}
        tagline={homeData.tagline}
        shortBio={homeData.shortBio}
        ctaLinks={homeData.ctaLinks}
      />
      <ExplanatorySections overview={homeData.siteOverview} />
    </>
  );
}
