import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title About",
  description: "SEO Description About Page",
  keywords: ["About Page", "Rafael", "Informacion"],
};

export default function AboutPage() {
  return <span className="text-5xl">About Page</span>;
}
