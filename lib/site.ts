/**
 * URL canônica do site. Em produção vem de NEXT_PUBLIC_SITE_URL; na Vercel,
 * VERCEL_PROJECT_PRODUCTION_URL já vem preenchida automaticamente.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
