import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Kyle Simmons",
  description:
    "Explore my technical projects and leadership accomplishments in software engineering and community building.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
