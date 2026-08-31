import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PresentationViewer from "@/components/community/PresentationViewer";
import { communityData, getMakerspacePresentation } from "@/lib/data/community";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return communityData.presentations.map((presentation) => ({ slug: presentation.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const presentation = getMakerspacePresentation(slug);
  if (!presentation) return {};
  return {
    title: presentation.title,
    description: presentation.description,
    alternates: { canonical: `/community/presentations/${presentation.slug}` },
  };
}

export default async function MakerspacePresentationPage({ params }: PageProps) {
  const { slug } = await params;
  const presentation = getMakerspacePresentation(slug);
  if (!presentation) notFound();

  return <PresentationViewer presentation={presentation} />;
}
