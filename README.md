# Portfólio — Pedro Melo & KaiserInc

Dois portfólios em uma aplicação Next.js navegável client-side: `/` (Pedro Melo) e
`/kaiserinc` (KaiserInc). Sem backend próprio — a única rota de servidor é o envio
do formulário de contato.

Portado do protótipo do Claude Design e conferido contra ele por estilo computado.

## Rodando

```bash
npm install
npm run dev
```

Abre em <http://localhost:3000>.

```bash
npm run build   # build de produção
npm run lint    # eslint
npm test        # Playwright (desktop + mobile) — sobe o servidor sozinho
```

Os testes precisam do navegador baixado uma vez: `npx playwright install chromium`.

## Variáveis de ambiente

Copie `.env.example` para `.env.local`. Só `RESEND_API_KEY` é obrigatória, e apenas
para o formulário funcionar — sem ela a rota responde 503 e o formulário mostra o
erro, em vez de fingir que enviou.

## Como ajustar o site

**Textos, projetos, experiências, stack, contatos** vivem em `content/`:

| Arquivo | O que controla |
| --- | --- |
| `content/personal.ts` | tudo da página `/` |
| `content/kaiserinc.ts` | tudo da página `/kaiserinc` |
| `content/types.ts` | o formato desses dados |

Nenhum componente carrega texto fixo. Adicionar um projeto é adicionar um objeto na
lista; com o TypeScript em `strict`, esquecer um campo quebra o build em vez de
sumir da página silenciosamente.

**Cores, tipografia, espaçamento, sombras** vivem em `app/tokens.css`, que é a fonte
de verdade do design. Mudar `--purple-500` ali repinta o site inteiro. O arquivo já
traz um tema claro completo em `[data-theme="light"]`: para ligar um alternador
depois, basta trocar esse atributo no `<html>` (definido em `app/layout.tsx`).

`app/globals.css` faz a ponte desses tokens para os utilitários do Tailwind e é onde
mora a tipografia base.

**Currículo:** coloque o PDF em `public/cv-pedro-melo.pdf`. O botão "Download CV"
aparece sozinho quando o arquivo existe e some quando não existe, para não deixar
link quebrado.

## Estrutura

```
app/            rotas, layout, estilos, rota do formulário
components/
  layout/       nav e rodapé (variam por rota)
  ui/           primitivos compartilhados pelas duas páginas
  personal/     seções de /
  kaiser/       seções de /kaiserinc
content/        todo o conteúdo, tipado
hooks/          scroll-spy da navegação
lib/            utilitários e schema do formulário
tests/          Playwright
```

## Deploy

Vercel, sem configuração extra: o framework é detectado sozinho. Cadastre
`RESEND_API_KEY` (e `NEXT_PUBLIC_SITE_URL`, se houver domínio próprio) nas variáveis
de ambiente do projeto. Cada push vira deploy; PRs ganham preview.
