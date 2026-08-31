import ExplanatorySections from "@/components/home/ExplanatorySections";
import Hero from "@/components/home/Hero";
import { featuredProjects } from "@/lib/data/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <ExplanatorySections featuredProjects={featuredProjects} />
    </>
  );
}
