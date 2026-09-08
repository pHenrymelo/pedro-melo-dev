import { GraduationCap } from "lucide-react";
import { cn } from "@/lib/cn";
import { Container, SectionHead } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { PersonalContent } from "@/content/types";

export function Experience({ experience }: { experience: PersonalContent["experience"] }) {
  return (
    <section
      id={experience.heading.id}
      aria-labelledby={`${experience.heading.id}-h`}
      className="border-t border-line-soft py-16 lg:py-24"
    >
      <Container>
        <Reveal>
          <SectionHead heading={experience.heading} />
        </Reveal>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>

            <ol className="relative m-0 list-none pl-6 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-gradient-to-b before:from-purple-500 before:to-[var(--border-subtle)] before:content-['']">
              {experience.timeline.map((item) => (
                <li key={`${item.title}-${item.org}`} className="relative pb-8 last:pb-0">
                  <span
                    aria-hidden
                    className={cn(
                      "absolute -left-[22px] top-1.5 size-3.5 rounded-full border-2 border-purple-500",
                      item.current
                        ? "bg-purple-500 shadow-[0_0_0_4px_rgba(130,87,230,0.25),0_0_12px_var(--purple-500)]"
                        : "bg-canvas shadow-[0_0_0_4px_rgba(130,87,230,0.15)]",
                    )}
                  />
                  <div className="font-mono text-[11px] uppercase tracking-[0.04em] text-fg-4">
                    {item.date}
                  </div>
                  <div className="mt-1 text-lg leading-[1.5] font-bold text-fg-1">
                    {item.title} <span className="font-medium text-purple-300">— {item.org}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-fg-3">{item.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border border-purple-500/20 bg-brand-subtle px-2 py-[3px] font-mono text-[10px] text-purple-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal as="aside" delay={100}>
            <div className="rounded-xl border border-line-soft bg-surface p-6 lg:sticky lg:top-[88px]">
              <h6 className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-fg-4">
                {experience.education.title}
              </h6>
              {experience.education.items.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="grid size-9 shrink-0 place-items-center rounded-md border border-line-soft bg-elevated">
                    <GraduationCap className="size-[18px] text-purple-300" aria-hidden />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-base font-bold text-fg-1">{item.title}</div>
                    <div className="text-sm text-fg-3">{item.org}</div>
                    <div className="font-mono text-xs text-fg-4">{item.date}</div>
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
