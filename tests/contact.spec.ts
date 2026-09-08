import { expect, test, type Page } from "@playwright/test";

const VALIDA = {
  name: "Pedro Teste",
  email: "teste@exemplo.com",
  message: "Mensagem de teste com tamanho mais que suficiente.",
};

async function preencher(page: Page, dados = VALIDA) {
  await page.fill('input[name="name"]', dados.name);
  await page.fill('input[name="email"]', dados.email);
  await page.fill('textarea[name="message"]', dados.message);
}

const status = (page: Page) => page.locator("form p[aria-live]");

test.describe("formulário de contato", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#contato");
  });

  test("bloqueia envio inválido sem chamar a API", async ({ page }) => {
    let chamou = false;
    page.on("request", (r) => {
      if (r.url().includes("/api/contact")) chamou = true;
    });

    await preencher(page, { name: "a", email: "invalido", message: "curto" });
    await page.click('button[type="submit"]');

    await expect(status(page)).toContainText("Informe seu nome");
    expect(chamou).toBe(false);
  });

  test("confirma o envio e limpa o formulário", async ({ page }) => {
    await page.route("**/api/contact", (r) =>
      r.fulfill({ status: 200, contentType: "application/json", body: '{"ok":true}' }),
    );

    await preencher(page);
    await page.click('button[type="submit"]');

    await expect(status(page)).toContainText("Mensagem enviada");
    await expect(page.locator('input[name="name"]')).toHaveValue("");
  });

  test("mostra a falha do servidor e oferece o email", async ({ page }) => {
    await page.route("**/api/contact", (r) =>
      r.fulfill({
        status: 502,
        contentType: "application/json",
        body: '{"error":"Não consegui enviar sua mensagem."}',
      }),
    );

    await preencher(page);
    await page.click('button[type="submit"]');

    await expect(status(page)).toContainText("Não consegui enviar");
    await expect(status(page).locator('a[href^="mailto:"]')).toBeVisible();
  });

  test("trata queda de rede", async ({ page }) => {
    await page.route("**/api/contact", (r) => r.abort());

    await preencher(page);
    await page.click('button[type="submit"]');

    await expect(status(page)).toContainText("Sem conexão");
  });

  test("desabilita o botão durante o envio", async ({ page }) => {
    await page.route("**/api/contact", async (r) => {
      await new Promise((resolve) => setTimeout(resolve, 800));
      await r.fulfill({ status: 200, contentType: "application/json", body: '{"ok":true}' });
    });

    await preencher(page);
    const botao = page.locator('button[type="submit"]');
    await botao.click();

    await expect(botao).toBeDisabled();
    await expect(botao).toContainText("Enviando");
  });
});

test.describe("rota /api/contact", () => {
  test("rejeita payload inválido", async ({ request }) => {
    const r = await request.post("/api/contact", {
      data: { name: "a", email: "nao-eh-email", message: "curto" },
    });
    expect(r.status()).toBe(400);
  });

  test("rejeita método não suportado", async ({ request }) => {
    expect((await request.get("/api/contact")).status()).toBe(405);
  });

  test("falha alto quando não há chave configurada", async ({ request }) => {
    test.skip(!!process.env.RESEND_API_KEY, "há chave configurada — o envio é real");

    // O protótipo respondia "Mensagem registrada" e descartava o texto.
    // Aqui a ausência de canal precisa aparecer como erro, não como sucesso.
    // IP próprio: o rate limit é por IP e os projetos rodam em paralelo.
    const r = await request.post("/api/contact", {
      data: VALIDA,
      headers: { "x-forwarded-for": `203.0.113.${Math.floor(Math.random() * 250) + 1}` },
    });
    expect(r.status()).toBe(503);
    expect((await r.json()).ok).toBeUndefined();
  });
});
