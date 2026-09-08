import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { ProjectStatus, RichText, SectionHeading } from "@/content/types";

/** Wrapper de largura máxima usado por todas as seções — .container do protótipo. */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-4 sm:px-6", className)}>{children}</div>;
}

/** Rótulo em caixa alta com o traço roxo à esquerda. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.08em] text-purple-400",
        "before:h-px before:w-6 before:bg-purple-400 before:opacity-60 before:content-['']",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHead({ heading }: { heading: SectionHeading }) {
  return (
    <div className="mb-12 max-w-[720px]">
      <Eyebrow>{heading.eyebrow}</Eyebrow>
      <h2 id={`${heading.id}-h`} className="mt-3">
        {heading.title}
      </h2>
      {heading.description ? <p className="mt-4 text-fg-3">{heading.description}</p> : null}
    </div>
  );
}

export function Tag({ children, nda }: { children: ReactNode; nda?: boolean }) {
  return (
    <span
      className={cn(
        "rounded-sm border px-2 py-1 font-mono text-[10px]",
        nda
          ? "border-purple-500/25 bg-brand-subtle text-purple-200"
          : "border-line-soft bg-elevated text-fg-3",
      )}
    >
      {children}
    </span>
  );
}

const statusStyles: Record<ProjectStatus, { pill: string; dot: string }> = {
  live: {
    pill: "border-[rgba(0,179,126,0.25)] bg-success-bg text-success-fg",
    dot: "bg-success-fg shadow-[0_0_6px_var(--success-300)]",
  },
  dev: {
    pill: "border-purple-500/25 bg-brand-subtle text-purple-200",
    dot: "bg-purple-400 shadow-[0_0_6px_var(--purple-400)]",
  },
};

export function StatusPill({ status, children }: { status: ProjectStatus; children: ReactNode }) {
  const style = statusStyles[status];
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1.5 rounded-pill border px-2.5 py-[3px]",
        "font-mono text-[10px] uppercase tracking-[0.06em]",
        style.pill,
      )}
    >
      <span className={cn("size-1.5 rounded-full", style.dot)} />
      {children}
    </span>
  );
}

/**
 * Renderiza um parágrafo do conteúdo, que vem como lista de trechos em vez de
 * HTML — assim o texto continua sendo dado puro, sem dangerouslySetInnerHTML.
 */
export function Rich({ text }: { text: RichText }) {
  return (
    <>
      {text.map((segment, i) => {
        if (typeof segment === "string") return segment;
        if ("href" in segment) {
          // Sublinhado e roxo mais claro: dentro de um parágrafo, cor sozinha
          // não distingue o link (WCAG 1.4.1) e o roxo-500 fica em 4.22:1,
          // abaixo do mínimo de 4.5:1 sobre o fundo escuro.
          const cls = "text-purple-400 underline underline-offset-[3px] hover:text-purple-300";
          // Rota interna precisa virar <Link>: um <a> puro recarregaria a
          // página inteira e quebraria a navegação client-side.
          if (segment.href.startsWith("/") && !segment.href.startsWith("//")) {
            return (
              <Link key={i} href={segment.href} className={cls}>
                {segment.text}
              </Link>
            );
          }
          return (
            <a
              key={i}
              href={segment.href}
              {...(segment.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={cls}
            >
              {segment.text}
            </a>
          );
        }
        if ("em" in segment) {
          return (
            <em key={i} className="text-fg-3">
              {segment.text}
            </em>
          );
        }
        return (
          <strong key={i} className="font-semibold text-fg-1">
            {segment.text}
          </strong>
        );
      })}
    </>
  );
}
