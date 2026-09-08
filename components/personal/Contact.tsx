import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Container, SectionHead } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { PersonalContent } from "@/content/types";
import { ContactForm } from "./ContactForm";

export function Contact({ contact }: { contact: PersonalContent["contact"] }) {
  return (
    <section
      id={contact.heading.id}
      aria-labelledby={`${contact.heading.id}-h`}
      className="border-t border-line-soft py-16 lg:py-24"
    >
      <Container>
        <Reveal>
          <SectionHead heading={contact.heading} />
        </Reveal>

        <div className="grid items-start gap-6 lg:grid-cols-2">
          <Reveal>

            <div className="grid gap-0.5 rounded-xl border border-line-soft bg-surface p-2">
              {contact.channels.map((channel) => {
                const inner = (
                  <>
                    <span className="grid size-9 shrink-0 place-items-center rounded-md border border-line-soft bg-elevated">
                      <Icon name={channel.icon} className="size-4 text-purple-300" />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="font-mono text-[11px] uppercase tracking-[0.04em] text-fg-4">
                        {channel.label}
                      </span>
                      <span className="mt-0.5 truncate text-sm text-fg-1">{channel.value}</span>
                    </span>
                  </>
                );

                const shared = "flex items-center gap-4 rounded-lg px-5 py-4";

                return channel.href ? (
                  <a
                    key={channel.label}
                    href={channel.href}
                    {...(channel.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={`group ${shared} no-underline transition-colors duration-[120ms] ease-out hover:bg-hover hover:no-underline`}
                  >
                    {inner}
                    <ArrowUpRight
                      aria-hidden
                      className="ml-auto size-4 shrink-0 text-fg-5 transition-[color,transform] duration-200 ease-out group-hover:translate-x-0.5 group-hover:text-purple-300"
                    />
                  </a>
                ) : (
                  <div key={channel.label} className={shared}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm form={contact.form} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
