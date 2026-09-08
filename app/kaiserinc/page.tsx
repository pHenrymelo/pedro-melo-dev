import type { Metadata } from "next";
import { kaiserinc } from "@/content/kaiserinc";
import { KaiserHero } from "@/components/kaiser/KaiserHero";
import { KaiserAbout } from "@/components/kaiser/KaiserAbout";
import { KaiserProjects } from "@/components/kaiser/KaiserProjects";

export const metadata: Metadata = {
  title: kaiserinc.meta.title,
  description: kaiserinc.meta.description,
  alternates: { canonical: "/kaiserinc" },
  openGraph: {
    title: kaiserinc.meta.title,
    description: kaiserinc.meta.description,
    url: "/kaiserinc",
    type: "website",
  },
};

export default function KaiserIncPage() {
  return (
    <main id="top">
      <KaiserHero hero={kaiserinc.hero} />
      <KaiserAbout about={kaiserinc.about} />
      <KaiserProjects projects={kaiserinc.projects} backStrip={kaiserinc.backStrip} />
    </main>
  );
}
