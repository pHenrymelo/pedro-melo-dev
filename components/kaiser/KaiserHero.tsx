import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { KaiserContent } from "@/content/types";

export function KaiserHero({ hero }: { hero: KaiserContent["hero"] }) {
  return (
    <section aria-label="KaiserInc" className="relative overflow-hidden py-16 lg:py-24">
      {/* Duas camadas do protótipo: os brilhos radiais e a grade pontilhada
          recortada por máscara. Tudo CSS — nenhuma imagem de fundo. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_900px_600px_at_50%_0%,rgba(130,87,230,0.20),transparent_60%),radial-gradient(ellipse_600px_360px_at_20%_80%,rgba(64,32,144,0.16),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(196,196,204,0.05)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_30%,transparent_75%)]"
      />

      <Container className="relative z-10 text-center">
        <Reveal>
          <div className="mx-auto grid size-24 place-items-center rounded-2xl border border-purple-500/30 bg-[radial-gradient(circle_at_50%_30%,rgba(130,87,230,0.45),transparent_65%),linear-gradient(135deg,var(--gray-900),var(--gray-800))] shadow-[0_12px_64px_rgba(130,87,230,0.18)]">
            <Image src="/logo-kaiser.png" alt="KaiserInc" width={96} height={96} priority className="w-[70%]" />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="hero-title-kaiser mx-auto mt-5 max-w-[16ch]">
            {hero.headlineBefore}
            <span className="text-purple-400">{hero.headlineAccent}</span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mx-auto mt-6 max-w-[60ch] text-lg leading-relaxed text-fg-3 text-pretty">
            {hero.subtitle}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-6 font-mono text-xs text-fg-4">
            {hero.meta.map((item) => (
              <span key={item.text} className="inline-flex items-center gap-1.5">
                {item.icon ? <Icon name={item.icon} className="size-3" /> : null}
                {item.text}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-16 grid overflow-hidden rounded-xl border border-line-soft bg-surface sm:grid-cols-2 lg:grid-cols-4">
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="border-t border-line-soft p-6 text-left first:border-t-0 sm:border-t-0 sm:odd:border-l-0 sm:[&:nth-child(n+3)]:border-t lg:border-l lg:border-t-0 lg:first:border-l-0 lg:[&:nth-child(n+3)]:border-t-0 sm:border-l"
              >
                <div className="font-display text-[2rem] font-black leading-none tracking-[-0.02em] text-fg-1">
                  {stat.value}
                  {stat.suffix ? (
                    <small className="ml-0.5 text-[0.55em] font-bold text-purple-400">{stat.suffix}</small>
                  ) : null}
                </div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.04em] text-fg-4">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
