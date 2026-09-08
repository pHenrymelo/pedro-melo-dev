import { z } from "zod";

/** Schema compartilhado: o cliente valida antes de enviar, o servidor revalida. */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome.").max(120, "Nome muito longo."),
  email: z.email("Email inválido.").max(200, "Email muito longo."),
  message: z
    .string()
    .trim()
    .min(10, "Conte um pouco mais — pelo menos 10 caracteres.")
    .max(5000, "Mensagem muito longa."),
});

export type ContactInput = z.infer<typeof contactSchema>;
