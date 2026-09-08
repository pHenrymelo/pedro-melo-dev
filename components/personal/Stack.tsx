import { cn } from "@/lib/cn";
import { Container, SectionHead } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { PersonalContent } from "@/content/types";

export function Stack({ stack }: { stack: PersonalContent["stack"] }) {
  return (
    <section
      id={stack.heading.id}
      aria-labelledby={`${stack.heading.id}-h`}
      className="border-t border-line-soft py-16 lg:py-24"
    >
      <Container>
        <Reveal>
          <SectionHead heading={stack.heading} />
        </Reveal>

        <div className="grid gap-8">
          {stack.groups.map((group) => (
            <Reveal key={group.label}>
              <div className="grid gap-3 border-t border-line-soft py-5 first:border-t-0 lg:grid-cols-[200px_1fr] lg:gap-8 lg:py-6">
                <div className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-purple-400">
                  {group.label}
                  <small className="mt-1 block text-[10px] tracking-[0.04em] text-fg-5">
                    {group.hint}
                  </small>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item.name}
                      className={cn(
                        "inline-flex items-center rounded-pill border px-3 py-1.5 text-sm font-medium",
                        "transition-[color,border-color,transform] duration-200 ease-out hover:-translate-y-px",
                        "brand" in item && item.brand
                          ? "border-purple-500/30 bg-brand-subtle text-purple-200 hover:text-fg-1"
                          : "border-line bg-surface text-fg-2 hover:border-purple-500 hover:text-fg-1",
                      )}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
