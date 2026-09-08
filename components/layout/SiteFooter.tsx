"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { personal } from "@/content/personal";
import { kaiserinc } from "@/content/kaiserinc";

const linkClass =
  "text-fg-3 no-underline transition-colors duration-200 ease-out hover:text-purple-300 hover:no-underline";

function isInternal(href: string) {
  return href.startsWith("/") && !href.includes(".");
}

export function SiteFooter() {
  const pathname = usePathname();
  const isKaiser = pathname.startsWith("/kaiserinc");

  if (isKaiser) {
    const { footer } = kaiserinc;
    return (
      <footer className="border-t border-line-soft bg-gray-950 py-12">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-4 text-sm text-fg-4 sm:px-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-fg-2">{footer.name}</span>
            <span className="text-fg-5">·</span>
            <span>{footer.tagline}</span>
            <span className="text-fg-5">·</span>
            <span>{footer.year}</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {footer.links.map((link, i) => (
              <span key={link.href} className="flex items-center gap-4">
                {i > 0 && <span className="text-fg-5">·</span>}
                {isInternal(link.href) ? (
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {link.label}
                  </a>
                )}
              </span>
            ))}
          </div>
        </div>
      </footer>
    );
  }

  const { footer } = personal;
  return (
    <footer className="border-t border-line-soft bg-gray-950 py-12">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-4 text-sm text-fg-4 sm:px-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="text-fg-2">{footer.name}</span>
          <span className="text-fg-5">·</span>
          <span>{footer.year}</span>
          <span className="text-fg-5">·</span>
          <span>{footer.note}</span>
        </div>
        <div className="flex items-center gap-4">
          {footer.links.map((link) =>
            isInternal(link.href) ? (
              <Link key={link.href} href={link.href} aria-label={link.label} className={linkClass}>
                <Icon name={link.icon} className="size-4" />
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                aria-label={link.label}
                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={linkClass}
              >
                <Icon name={link.icon} className="size-4" />
              </a>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
