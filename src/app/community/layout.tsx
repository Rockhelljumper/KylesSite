import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Community speaking, mentoring, makerspace education, and developer support work from Kyle Simmons.",
  alternates: { canonical: "/community" },
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
