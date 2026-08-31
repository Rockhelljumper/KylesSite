import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Engineering Work",
  description:
    "Evidence-led platform engineering, SRE, architecture, data integration, and AI engineering case studies from Kyle Simmons.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
