import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import { personal } from "@/content/personal";
import { Hero } from "@/components/personal/Hero";
import { About } from "@/components/personal/About";
import { Stack } from "@/components/personal/Stack";
import { Projects } from "@/components/personal/Projects";
import { Experience } from "@/components/personal/Experience";
import { Certifications } from "@/components/personal/Certifications";
import { KaiserTeaser } from "@/components/personal/KaiserTeaser";
import { Contact } from "@/components/personal/Contact";

export const metadata: Metadata = {
  title: personal.meta.title,
  description: personal.meta.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: personal.meta.title,
    description: personal.meta.description,
    url: "/",
    type: "profile",
  },
};

export default function HomePage() {

  const cvDisponivel = existsSync(join(process.cwd(), "public", "cv-pedro-melo.pdf"));
  const diplomaDisponivel = existsSync(join(process.cwd(), "public", "diploma-pedro-melo.jpg"));

  return (
    <main id="top">
      <Hero hero={personal.hero} cvDisponivel={cvDisponivel} />
      <About about={personal.about} />
      <Stack stack={personal.stack} />
      <Projects projects={personal.projects} />
      <Experience experience={personal.experience} diplomaDisponivel={diplomaDisponivel} />
      <Certifications certifications={personal.certifications} />
      <KaiserTeaser teaser={personal.kaiserTeaser} />
      <Contact contact={personal.contact} />
    </main>
  );
}
