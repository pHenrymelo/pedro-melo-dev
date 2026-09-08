"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { ArrowLeft, Mail, Menu, X } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/Button";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/cn";

interface NavAnchor {
  readonly label: string;
  readonly id: string;
}

const personalAnchors: readonly NavAnchor[] = [
  { label: "Sobre", id: "sobre" },
  { label: "Stack", id: "stack" },
  { label: "Projetos", id: "projetos" },
  { label: "Experiência", id: "experiencia" },
];

const kaiserAnchors: readonly NavAnchor[] = [
  { label: "Sobre", id: "sobre" },
  { label: "Projetos", id: "projetos" },
];

export function SiteNav() {
  const pathname = usePathname();
  const isKaiser = pathname.startsWith("/kaiserinc");
  const anchors = isKaiser ? kaiserAnchors : personalAnchors;
  const activeId = useScrollSpy(anchors.map((a) => a.id));

  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const anchorLink = (anchor: NavAnchor, onNavigate?: () => void) => (
    <li key={anchor.id}>
      <a
        href={`#${anchor.id}`}
        onClick={onNavigate}

        aria-current={activeId === anchor.id ? "true" : undefined}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium no-underline",
          "transition-colors duration-200 ease-out hover:bg-hover hover:text-fg-1 hover:no-underline",
          activeId === anchor.id
            ? "text-fg-1 before:size-1.5 before:rounded-full before:bg-brand before:shadow-[0_0_8px_var(--brand)] before:content-['']"
            : "text-fg-3",
        )}
      >
        {anchor.label}
      </a>
    </li>
  );

  return (
    <nav
      aria-label="Principal"
      className="sticky top-0 z-50 border-b border-line-soft bg-[rgba(9,9,10,0.72)] backdrop-blur-[16px]"
    >
      <div className="mx-auto flex h-[63px] max-w-[1200px] items-center justify-between px-4 sm:px-6">
        <Link
          href={isKaiser ? "/kaiserinc" : "/"}
          aria-label={isKaiser ? "KaiserInc — início" : "Pedro Melo — início"}
          className="flex items-center gap-3 text-base font-bold tracking-[-0.01em] text-fg-1 no-underline hover:no-underline"
        >
          <span
            className={cn(
              "grid size-8 shrink-0 place-items-center overflow-hidden rounded-md",
              "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]",
              isKaiser
                ? "bg-gradient-to-br from-purple-700 to-purple-400"
                : "bg-gradient-to-br from-purple-600 to-purple-400",
            )}
          >
            <Image src="/logo-kaiser.png" alt="" width={32} height={32} className="size-[70%] object-contain" />
          </span>
          {isKaiser ? (
            <span className="flex flex-col gap-[3px] leading-none">
              <b className="text-sm">KaiserInc</b>
              <small className="font-mono text-[9px] uppercase tracking-[0.18em] text-purple-300">
                Knowledge &amp; Tech
              </small>
            </span>
          ) : (
            <span>Pedro Melo</span>
          )}
        </Link>

        <ul role="list" className="m-0 hidden list-none gap-1 p-0 lg:flex">
          {anchors.map((a) => anchorLink(a))}
          {!isKaiser && (
            <li>
              <Link
                href="/kaiserinc"
                className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-fg-3 no-underline transition-colors duration-200 ease-out hover:bg-hover hover:text-fg-1 hover:no-underline"
              >
                KaiserInc
              </Link>
            </li>
          )}
        </ul>

        <div className="flex items-center gap-2">
          {isKaiser ? (
            <>
              <LinkButton href="https://github.com/Kaiser-Inc" variant="ghost" className="hidden sm:inline-flex">
                <Icon name="github" className="size-3.5" />
                GitHub
              </LinkButton>
              <LinkButton href="/" variant="ghost">
                <ArrowLeft className="size-3.5" aria-hidden />
                Portfolio
              </LinkButton>
            </>
          ) : (
            <LinkButton href="#contato">
              <Mail className="size-3.5" aria-hidden />
              Contato
            </LinkButton>
          )}

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-10 shrink-0 cursor-pointer place-items-center rounded-md border border-line bg-transparent text-fg-1 transition-colors duration-200 ease-out hover:bg-hover lg:hidden"
          >
            {menuOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      <div
        id={menuId}
        hidden={!menuOpen}
        className="border-t border-line-soft bg-canvas lg:hidden"
      >
        <ul role="list" className="m-0 flex list-none flex-col gap-1 p-4">
          {anchors.map((a) => anchorLink(a, () => setMenuOpen(false)))}
          <li>
            <Link
              href={isKaiser ? "/" : "/kaiserinc"}
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-fg-3 no-underline transition-colors duration-200 ease-out hover:bg-hover hover:text-fg-1 hover:no-underline"
            >
              {isKaiser ? "Portfolio de Pedro Melo" : "KaiserInc"}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
