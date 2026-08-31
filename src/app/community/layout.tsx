import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Community teaching, mentoring, makerspace education, and podcasting from Kyle Simmons.",
  alternates: { canonical: "/community" },
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
