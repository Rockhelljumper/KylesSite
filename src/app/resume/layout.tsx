import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Kyle Simmons résumé variants for engineering leadership, senior platform and backend engineering, SRE, and DevSecOps roles.",
  alternates: { canonical: "/resume" },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
