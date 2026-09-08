import { ArrowDown } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { Container, Rich, SectionHead } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { PersonalContent } from "@/content/types";

export function About({ about }: { about: PersonalContent["about"] }) {
  return (
    <section
      id={about.heading.id}
      aria-labelledby={`${about.heading.id}-h`}
      className="border-t border-line-soft py-16 lg:py-24"
    >
      <Container>
        <Reveal>
          <SectionHead heading={about.heading} />
        </Reveal>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal className="flex flex-col gap-5">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-lg leading-[1.7] text-fg-2">
                <Rich text={paragraph} />
              </p>
            ))}
          </Reveal>

          <Reveal as="aside" delay={100}>
            <div className="flex flex-col gap-4 rounded-xl border border-line-soft bg-surface p-6">
              <h6 className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-fg-4">
                {about.sidebar.title}
              </h6>
              <p className="text-sm text-fg-3">{about.sidebar.description}</p>
              <LinkButton href={about.sidebar.cta.href} variant="ghost" className="self-start">
                {about.sidebar.cta.label}
                <ArrowDown className="size-4" aria-hidden />
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
