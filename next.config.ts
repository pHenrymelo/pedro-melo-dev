import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sem isso o Turbopack sobe a árvore procurando lockfile e acha um
  // package-lock.json solto em ~/, fora do repositório.
  turbopack: { root: __dirname },
};

export default nextConfig;
