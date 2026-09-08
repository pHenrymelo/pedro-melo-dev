import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";

/** Destino das mensagens do formulário. */
const TO = process.env.CONTACT_TO_EMAIL ?? "pedrohenriquebmelo25@gmail.com";
/** Remetente. Precisa ser um domínio verificado na Resend em produção. */
const FROM = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

/**
 * Rate limit em memória: segura envios repetidos do mesmo IP.
 * É por instância e some no restart — suficiente contra abuso trivial, não
 * contra um atacante dedicado. Se virar problema, trocar por KV/Upstash.
 */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Impede o Map de crescer sem limite em processos de vida longa.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }

  return recent.length > MAX_PER_WINDOW;
}

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

export async function POST(request: Request) {
  if (isRateLimited(clientIp(request))) {
    return Response.json(
      { error: "Muitas mensagens seguidas. Tente de novo em um minuto." },
      { status: 429 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Requisição inválida." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return Response.json(
      { error: parsed.error.issues[0]?.message ?? "Dados inválidos." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Sem chave configurada o envio não acontece. Falhar alto aqui é melhor do
    // que responder "enviado" e perder a mensagem, que era o bug do protótipo.
    console.error("RESEND_API_KEY não configurada — mensagem não enviada.");
    return Response.json(
      { error: "Canal de email indisponível no momento." },
      { status: 503 },
    );
  }

  const { name, email, message } = parsed.data;

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `Portfolio — mensagem de ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend recusou o envio:", error);
      return Response.json({ error: "Não consegui enviar sua mensagem." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (cause) {
    console.error("Falha ao enviar email:", cause);
    return Response.json({ error: "Não consegui enviar sua mensagem." }, { status: 502 });
  }
}
