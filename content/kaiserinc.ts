import type { KaiserContent } from "./types";

/**
 * Portfólio da KaiserInc — conteúdo transcrito de kaiserinc.html do protótipo.
 */
export const kaiserinc = {
  meta: {
    title: "KaiserInc — Knowledge & Tech",
    description:
      "KaiserInc — grupo pessoal de projetos colaborativos. Software que funciona, times pequenos, projetos reais.",
  },

  hero: {
    eyebrow: "Knowledge & Tech",
    headlineBefore: "Projetos reais. Times pequenos. ",
    headlineAccent: "Software que funciona.",
    subtitle:
      "KaiserInc é um grupo pessoal de desenvolvimento onde coordeno projetos colaborativos com colegas, construo produtos próprios e aplico novas tecnologias em contextos reais.",
    meta: [
      { icon: "user", text: "Coordenado por Pedro Melo" },
      { icon: "users", text: "Colaborativo" },
      { icon: "calendar", text: "Desde 2023" },
    ],
    stats: [
      { value: "07", label: "Repositórios públicos" },
      { value: "02", suffix: "+", label: "Anos em atividade" },
      { value: "100", suffix: "%", label: "Open source" },
      { value: "∞", label: "Horas no terminal" },
    ],
  },

  about: {
    heading: {
      id: "sobre",
      eyebrow: "Sobre a KaiserInc",
      title: "Não é uma empresa. É uma estrutura.",
    },
    paragraphs: [
      [
        "A KaiserInc é uma iniciativa pessoal criada por Pedro Melo para coordenar projetos com colegas e construir produtos reais. O nome vem de ",
        {
          text: "Knowledge and Academic Institution of Services about Electronic and Research",
          em: true,
        },
        ".",
      ],
      [
        "Não tem CNPJ, não tem contrato, não tem marketing. Tem código, decisões técnicas e produtos que funcionam, feitos por pessoas que gostam de construir coisas juntas.",
      ],
      [
        "Cada projeto é uma desculpa pra aprender fundo: arquitetura, deploy, testes, banco, integração, observabilidade. A mesma qualidade de um produto pago, numa escala que um time pequeno consegue manter.",
      ],
    ],
    principles: {
      title: "Princípios",
      items: [
        {
          number: "01",
          title: "Ship.",
          text: "Produto rodando vale mais que slide bonito. Deploy primeiro, polimento depois.",
        },
        {
          number: "02",
          title: "Times pequenos.",
          text: "1–3 pessoas por projeto. Decisão rápida, contexto compartilhado.",
        },
        {
          number: "03",
          title: "Tecnologia certa.",
          text: "Usar o que faz sentido para o problema — não a hype da semana.",
        },
        {
          number: "04",
          title: "Aprender em público.",
          text: "Repos abertos, decisões documentadas, falhas registradas.",
        },
      ],
    },
  },

  projects: {
    heading: {
      id: "projetos",
      eyebrow: "Projetos",
      title: "O que está sendo construído.",
      description:
        "Seis repositórios públicos em diferentes estágios: de boilerplates prontos pra produção a produtos locais com usuários reais.",
    },
    items: [
      {
        icon: "smartphone",
        status: "dev",
        statusLabel: "Em desenvolvimento",
        title: "Handly",
        description:
          "App para conectar clientes e prestadores de serviço em Itapajé, CE. Backend em Rust, mobile em React Native.",
        tags: ["React Native", "Rust", "TypeScript"],
        repo: { label: "repo", href: "https://github.com/Kaiser-Inc/Handly-Mobile" },
      },
      {
        icon: "package",
        status: "live",
        statusLabel: "Disponível",
        title: "Kaiser Utils",
        description:
          "Boilerplates de API prontos pra produção: Python/FastAPI, Node/Fastify e Rails 8.1. JWT, Clean Architecture, Docker multi-stage e OpenTelemetry.",
        tags: ["TypeScript", "Python", "Ruby"],
        repo: { label: "repo", href: "https://github.com/Kaiser-Inc/Utils" },
      },
      {
        icon: "network",
        status: "live",
        statusLabel: "Disponível",
        title: "Microservices Workshop",
        description:
          "Projeto didático comparando monolito e microserviços na prática. A mesma feature dos dois jeitos, com Kong, RabbitMQ e OpenTelemetry.",
        tags: ["Python", "FastAPI", "RabbitMQ"],
        repo: { label: "repo", href: "https://github.com/Kaiser-Inc/Microservices-Workshop" },
      },
      {
        icon: "bar-chart-2",
        status: "dev",
        statusLabel: "Em desenvolvimento",
        title: "MetriK",
        description:
          "Dashboard de qualidade de código para Python. Visualiza complexidade ciclomática, cobertura de testes, score Pylint e métricas Halstead.",
        tags: ["Python", "Pytest", "HTML"],
        repo: { label: "repo", href: "https://github.com/Kaiser-Inc/MetriK" },
      },
      {
        icon: "wind",
        status: "live",
        statusLabel: "Em uso",
        title: "Atmus Dashboard",
        description:
          "Dashboard para visualizar dados de monitoramento de qualidade do ar, conectado a sensores em tempo real.",
        tags: ["TypeScript", "React"],
        repo: { label: "repo", href: "https://github.com/Kaiser-Inc/Atmus-Dashboard" },
      },
      {
        icon: "layout-template",
        status: "dev",
        statusLabel: "Em desenvolvimento",
        title: "Design System",
        description:
          "Sistema de design do grupo KaiserInc: tokens, componentes React e documentação visual pra todos os projetos.",
        tags: ["TypeScript", "React", "Tailwind"],
        repo: { label: "repo", href: "https://github.com/Kaiser-Inc/Design-System" },
      },
    ],
  },

  backStrip: {
    title: "Quer conversar sobre algum projeto?",
    description: "Volte ao portfolio principal para canais de contato.",
    cta: { label: "Voltar ao Portfolio", href: "/" },
  },

  footer: {
    name: "KaiserInc",
    tagline: "Knowledge & Tech",
    year: "2025",
    links: [
      { label: "github.com/Kaiser-Inc", href: "https://github.com/Kaiser-Inc" },
      { label: "← Portfolio de Pedro Melo", href: "/" },
    ],
  },
} as const satisfies KaiserContent;
