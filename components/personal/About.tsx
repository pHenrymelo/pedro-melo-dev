import { Icon } from "@/components/ui/Icon";
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
              <div className="flex flex-col">
                {about.sidebar.rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center gap-3 border-t border-line-soft py-2.5 text-sm text-fg-2 first:border-t-0 first:pt-0"
                  >
                    <Icon name={row.icon} className="size-4 shrink-0 text-purple-400" />
                    <span className="w-[72px] shrink-0 font-mono text-[11px] uppercase tracking-[0.04em] text-fg-4">
                      {row.label}
                    </span>
                    {row.href ? (
                      <a
                        href={row.href}
                        {...(row.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="min-w-0 truncate text-fg-1 no-underline transition-colors duration-200 ease-out hover:text-purple-300 hover:no-underline"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <span className="min-w-0 truncate text-fg-1">{row.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
