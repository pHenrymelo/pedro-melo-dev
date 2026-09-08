import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md border border-transparent " +
  "font-medium whitespace-nowrap cursor-pointer no-underline hover:no-underline " +
  "transition-[background-color,border-color,box-shadow,color,transform] duration-[320ms] ease-out " +
  "disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-purple-500 text-white hover:bg-purple-400 hover:shadow-glow",
  ghost: "bg-transparent text-fg-1 border-line hover:bg-hover hover:border-line-strong",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-[18px] text-sm",
  lg: "h-12 px-[22px] text-base",
};

function classes(variant: Variant, size: Size, className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

/** Decide entre <Link> (rota interna) e <a> (link externo, mailto, tel, arquivo). */
function isInternal(href: string) {
  return href.startsWith("/") && !href.startsWith("//") && !href.includes(".");
}

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

/**
 * Botão em forma de link. Rotas internas viram <Link> para a navegação
 * client-side — é o que mantém a troca entre os dois portfólios sem reload.
 */
export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: LinkButtonProps) {
  const cls = classes(variant, size, className);

  if (isInternal(href)) {
    return (
      <Link href={href} className={cls} {...props}>
        {children}
      </Link>
    );
  }

  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={cls}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={classes(variant, size, className)} {...props}>
      {children}
    </button>
  );
}
