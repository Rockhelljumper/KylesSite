import ExplanatorySections from "@/components/home/ExplanatorySections";
import Hero from "@/components/home/Hero";
import RemoteRolePanel from "@/components/career/RemoteRolePanel";
import { featuredProjects } from "@/lib/data/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="site-shell -mt-px py-8 sm:py-10"><RemoteRolePanel compact /></div>
      <ExplanatorySections featuredProjects={featuredProjects} />
    </>
  );
}
