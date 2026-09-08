import { Lock } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Container, SectionHead, Tag } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { PersonalContent } from "@/content/types";

export function Projects({ projects }: { projects: PersonalContent["projects"] }) {
  return (
    <section
      id={projects.heading.id}
      aria-labelledby={`${projects.heading.id}-h`}
      className="border-t border-line-soft py-16 lg:py-24"
    >
      <Container>
        <Reveal>
          <SectionHead heading={projects.heading} />
        </Reveal>

        <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.items.map((project, i) => (
            <Reveal key={project.title} delay={i * 80} className="h-full">
              <article className="group relative flex h-full min-h-[290px] flex-col overflow-hidden rounded-xl border border-line-soft bg-surface p-6 transition-[border-color,transform,box-shadow] duration-[320ms] ease-out hover:-translate-y-0.5 hover:border-line-strong hover:shadow-md">
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 transition-opacity duration-[320ms] ease-out group-hover:opacity-100"
                />
                <div className="grid size-11 place-items-center rounded-md border border-purple-500/25 bg-[linear-gradient(135deg,rgba(130,87,230,0.16),rgba(64,32,144,0.08))] font-mono text-base font-bold tracking-[-0.02em] text-purple-200">
                  {project.mark}
                </div>

                <div className="flex flex-col gap-2 py-3 pb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-fg-4">
                    {project.eyebrow}
                  </span>
                  <h4 className="text-xl leading-snug">{project.title}</h4>
                </div>

                <div className="flex-1 pb-4">
                  <p className="text-sm leading-relaxed text-fg-3">{project.description}</p>
                </div>

                <div className="mt-auto flex items-start justify-between gap-3 border-t border-line-soft pt-4">
                  <div className="flex min-h-14 flex-wrap content-start gap-1.5">
                    {project.tags.map((tag) => (
                      <Tag key={tag.label} nda={"nda" in tag && tag.nda}>
                        {tag.label}
                      </Tag>
                    ))}
                  </div>
                  {project.repo ? (
                    <a
                      href={project.repo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-1 rounded-sm px-1.5 py-1 font-mono text-xs text-fg-4 no-underline transition-colors duration-200 ease-out hover:text-purple-300 hover:no-underline"
                    >
                      <Icon name="github" className="size-3.5" />
                      {project.repo.label}
                    </a>
                  ) : (
                    <span
                      aria-label="Sem link público"
                      className="inline-flex shrink-0 items-center gap-1 px-1.5 py-1 font-mono text-xs text-fg-5"
                    >
                      <Lock className="size-3.5" aria-hidden />
                      privado
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
