import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/projects/CaseStudy";
import { getProjectBySlug, publishedProjects } from "@/lib/data/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publishedProjects.filter((project) => project.caseStudy).map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project?.caseStudy) return {};
  return {
    title: project.title,
    description: project.subtitle,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: project.title, description: project.subtitle, type: "article" },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project?.caseStudy) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.subtitle,
    author: { "@type": "Person", name: "Kyle Simmons" },
  };

  return <><CaseStudy project={project} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></>;
}
