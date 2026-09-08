import { Icon } from "@/components/ui/Icon";
import { Container, SectionHead } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { PersonalContent } from "@/content/types";

export function Certifications({
  certifications,
}: {
  certifications: PersonalContent["certifications"];
}) {
  return (
    <section
      id={certifications.heading.id}
      aria-labelledby={`${certifications.heading.id}-h`}
      className="border-t border-line-soft py-16 lg:py-24"
    >
      <Container>
        <Reveal>
          <SectionHead heading={certifications.heading} />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {certifications.items.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 80} className="h-full">
              <div className="flex h-full items-start gap-4 rounded-lg border border-line-soft bg-surface p-5 transition-colors duration-200 ease-out hover:border-line">
                <div className="grid size-9 shrink-0 place-items-center rounded-md border border-line-soft bg-elevated">
                  <Icon name={cert.icon} className="size-[18px] text-purple-300" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-base font-bold leading-snug text-fg-1">{cert.title}</div>
                  <div className="font-mono text-xs text-fg-4">{cert.org}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
