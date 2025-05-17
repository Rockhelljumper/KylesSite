import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Kyle Simmons",
  description:
    "Get in touch with Kyle Simmons. Reach out for collaborations, speaking opportunities, or just to say hello.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
