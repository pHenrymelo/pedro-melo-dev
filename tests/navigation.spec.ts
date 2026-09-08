import { expect, test } from "@playwright/test";

test.describe("navegação entre os portfólios", () => {
  test("troca de rota sem recarregar a página", async ({ page }) => {
    await page.goto("/");
    // Marca a janela: se houver reload de verdade, a marca some.
    await page.evaluate(() => {
      (window as unknown as { __spa?: string }).__spa = "viva";
    });

    await page.getByRole("link", { name: "KaiserInc", exact: true }).first().click();
    await page.waitForURL("**/kaiserinc");

    await expect(page.locator("h1")).toContainText("Projetos reais");
    expect(await page.evaluate(() => (window as unknown as { __spa?: string }).__spa)).toBe("viva");
  });

  test("histórico do navegador funciona nos dois sentidos", async ({ page }) => {
    await page.goto("/");
    await page.goto("/kaiserinc");

    await page.goBack();
    await expect(page).toHaveURL(/\/$/);

    await page.goForward();
    await expect(page).toHaveURL(/\/kaiserinc$/);
  });

  test("deep link direto em /kaiserinc responde", async ({ page }) => {
    const response = await page.goto("/kaiserinc");
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(/KaiserInc/);
  });

  test("rota inexistente cai no 404", async ({ page }) => {
    const response = await page.goto("/rota-que-nao-existe");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("não existe");
  });
});
