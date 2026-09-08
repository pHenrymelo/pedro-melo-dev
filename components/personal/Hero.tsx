import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { PersonalContent } from "@/content/types";
import { Terminal } from "./Terminal";

export function Hero({ hero, cvDisponivel }: { hero: PersonalContent["hero"]; cvDisponivel: boolean }) {
  return (
    <section aria-label="Apresentação" className="relative overflow-hidden py-16 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_900px_600px_at_15%_0%,rgba(130,87,230,0.18),transparent_60%)]"
      />
      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="hero-title mt-5">
              {hero.headlineBefore}
              <span className="text-purple-400">{hero.headlineAccent}</span>
              {hero.headlineAfter}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-fg-3 text-pretty">{hero.subtitle}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href={hero.primaryCta.href} size="lg">
                {hero.primaryCta.label}
                <ArrowRight className="size-4" aria-hidden />
              </LinkButton>

              {cvDisponivel && (
                <LinkButton href={hero.cvCta.href} variant="ghost" size="lg" download>
                  <Download className="size-4" aria-hidden />
                  {hero.cvCta.label}
                </LinkButton>
              )}
            </div>

            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6 font-mono text-xs text-fg-4">
              {hero.meta.map((item) => (
                <span key={item.text} className="inline-flex items-center gap-1.5">
                  {item.icon ? (
                    <Icon name={item.icon} className="size-3" />
                  ) : (
                    <span className="size-1.5 rounded-full bg-success-fg shadow-[0_0_8px_var(--success-300)]" />
                  )}
                  {item.text}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mb-5 flex flex-col items-center gap-3">
              <Image
                src={hero.avatar.src}
                alt={hero.avatar.alt}
                width={208}
                height={208}
                priority
                className="size-40 rounded-full border-[3px] border-purple-500/50 object-cover shadow-[0_0_0_6px_rgba(130,87,230,0.10),0_8px_32px_rgba(130,87,230,0.2)] lg:size-52 lg:shadow-[0_0_0_8px_rgba(130,87,230,0.10),0_12px_40px_rgba(130,87,230,0.22)]"
              />
              <div className="text-center">
                <span className="block text-base font-bold text-fg-1">{hero.profile.name}</span>
                <span className="mt-[3px] block font-mono text-[11px] tracking-[0.04em] text-purple-300">
                  {hero.profile.handle}
                </span>
              </div>
            </div>
            <Terminal terminal={hero.terminal} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
