# Desenvolvimento

Notas de setup para quem for mexer neste repositório. Não faz parte do README porque o README é
vitrine para quem visita o portfólio, não documentação de projeto.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Resend · Zod · Playwright

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em <http://localhost:3000>.

```bash
npm run build   # build de produção
npm run lint    # eslint
npm test        # Playwright (desktop + mobile), sobe o servidor sozinho
```

Os testes precisam do navegador baixado uma vez: `npx playwright install chromium`.

### Variáveis de ambiente

Copie `.env.example` para `.env.local`. Só `RESEND_API_KEY` é obrigatória, e apenas para o
formulário de contato funcionar. Sem ela a rota responde 503 em vez de fingir que enviou.

## Estrutura

```
app/            rotas, layout, estilos, rota do formulário
components/
  layout/       nav e rodapé (variam por rota)
  ui/           primitivos compartilhados pelas duas páginas
  personal/     seções de /
  kaiser/       seções de /kaiserinc
content/        todo o conteúdo do site, tipado
hooks/          scroll-spy da navegação
lib/            utilitários e schema do formulário
tests/          Playwright
```

## Como ajustar o conteúdo

Textos, projetos, experiências, stack e canais de contato vivem em `content/`:

| Arquivo | O que controla |
| --- | --- |
| `content/personal.ts` | tudo da página `/` |
| `content/kaiserinc.ts` | tudo da página `/kaiserinc` |
| `content/types.ts` | o formato desses dados |

Nenhum componente carrega texto fixo. Adicionar um projeto é adicionar um objeto na lista; com o
TypeScript em `strict`, esquecer um campo quebra o build em vez de sumir da página silenciosamente.

Cores, tipografia, espaçamento e sombras vivem em `app/tokens.css`, a fonte de verdade do design.
Mudar uma cor ali repinta o site inteiro. O arquivo já traz um tema claro completo em
`[data-theme="light"]`: para ligar um alternador depois, basta trocar esse atributo no `<html>`
(definido em `app/layout.tsx`).

`app/globals.css` faz a ponte desses tokens para os utilitários do Tailwind e é onde mora a
tipografia base.

Currículo: coloque o PDF em `public/cv-pedro-melo.pdf`. O botão "Download CV" aparece sozinho
quando o arquivo existe e some quando não existe, para não deixar link quebrado.

## Deploy

Vercel, sem configuração extra. O framework é detectado sozinho. Cadastre `RESEND_API_KEY` (e
`NEXT_PUBLIC_SITE_URL`, se houver domínio próprio) nas variáveis de ambiente do projeto. Cada push
vira deploy; PRs ganham preview.
