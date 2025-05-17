import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Involvement | Kyle Simmons",
  description:
    "Explore my community contributions, speaking engagements, mentoring, and open source projects that give back to the tech community.",
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
