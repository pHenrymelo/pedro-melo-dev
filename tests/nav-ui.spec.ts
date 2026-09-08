import { expect, test } from "@playwright/test";

test.describe("navegação da página", () => {
  test("scroll-spy marca a seção em foco", async ({ page }) => {
    await page.goto("/");

    for (const id of ["stack", "projetos", "experiencia"]) {
      await page.evaluate((target) => {
        document.getElementById(target)?.scrollIntoView({ block: "center" });
      }, id);
      await expect(page.locator('nav a[aria-current="true"]').first()).toHaveAttribute(
        "href",
        `#${id}`,
      );
    }
  });

  test("menu recolhível abre, navega e fecha", async ({ page, isMobile }) => {
    test.skip(!isMobile, "o menu recolhível só aparece abaixo de 960px");
    await page.goto("/");

    const toggle = page.locator("nav button[aria-controls]");
    await expect(toggle).toHaveAttribute("aria-expanded", "false");

    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator('nav [id] a[href="#stack"]')).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  test("respeita prefers-reduced-motion", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    const opacity = await page.evaluate(() => {
      const el = document.querySelectorAll(".reveal");
      return getComputedStyle(el[el.length - 1]).opacity;
    });
    expect(opacity).toBe("1");
  });
});
