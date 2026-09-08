"use client";

import { useId, useState } from "react";
import { ArrowRight, Check, Loader2, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactSchema } from "@/lib/contact-schema";
import type { PersonalContent } from "@/content/types";

type FormState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "sent" }
  | { status: "error"; message: string };

const fieldClass =
  "w-full rounded-md border border-line bg-canvas px-3 py-2.5 text-sm text-fg-1 " +
  "placeholder:text-fg-5 transition-[border-color,box-shadow] duration-[120ms] ease-out " +
  "focus:border-purple-500 focus:outline-none";

const labelClass = "font-mono text-[11px] font-medium uppercase tracking-[0.04em] text-fg-4";

export function ContactForm({ form }: { form: PersonalContent["contact"]["form"] }) {
  const [state, setState] = useState<FormState>({ status: "idle" });
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formEl = event.currentTarget;
    const data = Object.fromEntries(new FormData(formEl));

    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      setState({
        status: "error",
        message: parsed.error.issues[0]?.message ?? "Confira os campos.",
      });
      return;
    }

    setState({ status: "sending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        setState({
          status: "error",
          message: body?.error ?? "Não foi possível enviar. Tente pelo email.",
        });
        return;
      }

      setState({ status: "sent" });
      formEl.reset();
    } catch {
      setState({ status: "error", message: "Sem conexão com o servidor." });
    }
  }

  const sending = state.status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid h-full auto-rows-min gap-4 rounded-xl border border-line-soft bg-surface p-6"
    >
      <div className="grid gap-2">
        <label htmlFor={nameId} className={labelClass}>
          Nome
        </label>
        <input id={nameId} name="name" type="text" placeholder="Seu nome" className={fieldClass} />
      </div>

      <div className="grid gap-2">
        <label htmlFor={emailId} className={labelClass}>
          Email
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          placeholder="voce@empresa.com"
          className={fieldClass}
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor={messageId} className={labelClass}>
          Mensagem
        </label>
        <textarea
          id={messageId}
          name="message"
          maxLength={1500}
          placeholder="Conte rapidamente sobre o projeto ou oportunidade…"
          className={`${fieldClass} h-[120px] resize-none overflow-y-auto leading-relaxed`}
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">

        <p aria-live="polite" className="flex min-h-5 items-center gap-1.5 text-xs">
          {state.status === "sent" && (
            <span className="inline-flex items-center gap-1.5 text-success-fg">
              <Check className="size-3.5" aria-hidden />
              {form.successMessage}
            </span>
          )}
          {state.status === "error" && (
            <span className="inline-flex items-center gap-1.5 text-danger-fg">
              <TriangleAlert className="size-3.5" aria-hidden />
              {state.message}{" "}
              <a href={form.fallbackHref} className="underline">
                escreva diretamente por email
              </a>
            </span>
          )}
          {(state.status === "idle" || sending) && <span className="text-fg-4">{form.hint}</span>}
        </p>

        <Button type="submit" disabled={sending}>
          {sending ? (
            <>
              <Loader2 className="size-3.5 animate-spin" aria-hidden />
              Enviando
            </>
          ) : (
            <>
              Enviar
              <ArrowRight className="size-3.5" aria-hidden />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
