import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { PersonalContent } from "@/content/types";

export function KaiserTeaser({ teaser }: { teaser: PersonalContent["kaiserTeaser"] }) {
  return (
    <section
      id={teaser.id}
      aria-labelledby={`${teaser.id}-h`}
      className="border-t border-line-soft py-16 lg:py-24"
    >
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-[radial-gradient(ellipse_600px_360px_at_80%_10%,rgba(130,87,230,0.18),transparent_60%),linear-gradient(180deg,rgba(64,32,144,0.08),transparent_50%),var(--bg-surface)] p-8 lg:p-12">
            <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-12">
              <div>
                <Eyebrow className="text-purple-300">{teaser.eyebrow}</Eyebrow>
                <h3 id={`${teaser.id}-h`} className="mt-3">
                  {teaser.title}
                </h3>
                <p className="mt-4 text-fg-3">{teaser.description}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href={teaser.primaryCta.href} size="lg">
                    {teaser.primaryCta.label}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </LinkButton>
                  <LinkButton href={teaser.secondaryCta.href} variant="ghost" size="lg">
                    {teaser.secondaryCta.label}
                  </LinkButton>
                </div>
              </div>

              <div
                aria-hidden
                className="relative mx-auto grid aspect-square w-full max-w-[240px] place-items-center overflow-hidden rounded-xl border border-line-soft bg-[radial-gradient(circle_at_50%_30%,rgba(130,87,230,0.32),transparent_60%),linear-gradient(135deg,var(--gray-900),var(--gray-950))] lg:ml-auto lg:mr-0 lg:max-w-[320px]"
              >
                <Image
                  src="/logo-kaiser.png"
                  alt=""
                  width={192}
                  height={192}
                  className="w-3/5 opacity-95 drop-shadow-[0_6px_32px_rgba(130,87,230,0.45)]"
                />
                <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(196,196,204,0.06)_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_30%,#000_80%)]" />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
