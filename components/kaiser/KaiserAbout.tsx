import { Container, Rich, SectionHead } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { KaiserContent } from "@/content/types";

export function KaiserAbout({ about }: { about: KaiserContent["about"] }) {
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
            <div className="rounded-xl border border-line-soft bg-surface p-6">
              <h6 className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-fg-4">
                {about.principles.title}
              </h6>
              {about.principles.items.map((principle) => (
                <div
                  key={principle.number}
                  className="flex gap-3 border-t border-line-soft py-3 first:border-t-0 first:pt-0"
                >
                  <div className="grid size-7 shrink-0 place-items-center rounded-md border border-purple-500/25 bg-brand-subtle font-mono text-[11px] font-bold text-purple-300">
                    {principle.number}
                  </div>
                  <div className="pt-1 text-sm leading-relaxed text-fg-2">
                    <b className="font-semibold text-fg-1">{principle.title}</b> {principle.text}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
