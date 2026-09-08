"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  /** Atraso em cascata, em ms — reproduz os transition-delay do protótipo. */
  delay?: number;
  as?: ElementType;
  className?: string;
}

/**
 * Anima o conteúdo ao entrar na viewport, reproduzindo o IntersectionObserver
 * do protótipo.
 *
 * A classe é alternada direto no nó em vez de via estado: a revelação é um
 * efeito visual no DOM, não dado que a UI derive. Isso evita um re-render por
 * elemento revelado (são dezenas na página) e mantém o estado inicial no CSS,
 * então nada pisca antes da hidratação. `prefers-reduced-motion` já neutraliza
 * a animação em globals.css.
 */
export function Reveal({ children, delay = 0, as: Tag = "div", className }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Sem suporte a IntersectionObserver, mostra tudo em vez de esconder.
    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
