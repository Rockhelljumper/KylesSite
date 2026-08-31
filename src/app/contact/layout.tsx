import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Say hello to Kyle Simmons about engineering, maker projects, community work, or a good recommendation.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
