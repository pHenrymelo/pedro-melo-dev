import type { KaiserContent } from "./types";

export const kaiserinc = {
  meta: {
    title: "KaiserInc — Knowledge & Tech",
    description:
      "KaiserInc: grupo pessoal de projetos colaborativos. Software que funciona, times pequenos, projetos reais.",
  },

  hero: {
    eyebrow: "Knowledge & Tech",
    headlineBefore: "Projetos reais. Times pequenos. ",
    headlineAccent: "Software que funciona.",
    subtitle:
      "A KaiserInc é um grupo pessoal de desenvolvimento no qual coordeno projetos colaborativos com colegas e construo produtos próprios usando novas tecnologias.",
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
      title: "Não é uma empresa, é uma estrutura de trabalho.",
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
        "Não tem CNPJ, contrato nem marketing. Tem código, decisões técnicas e produtos que funcionam, feitos por pessoas que gostam de construir software em conjunto.",
      ],
      [
        "Cada projeto é uma oportunidade de aprender a fundo: arquitetura, deploy, testes, banco de dados, integração e observabilidade. A mesma qualidade de um produto pago, numa escala que um time pequeno consegue manter.",
      ],
    ],
    principles: {
      title: "Princípios",
      items: [
        {
          number: "01",
          title: "Entregar.",
          text: "Um produto rodando vale mais que uma apresentação. Primeiro o deploy, depois o polimento.",
        },
        {
          number: "02",
          title: "Times pequenos.",
          text: "De 1 a 3 pessoas por projeto. Decisões rápidas e contexto compartilhado.",
        },
        {
          number: "03",
          title: "Tecnologia certa.",
          text: "Usar o que faz sentido para o problema, não a tendência do momento.",
        },
        {
          number: "04",
          title: "Aprender em público.",
          text: "Repositórios abertos, com decisões e falhas documentadas.",
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
        "Seis projetos em diferentes estágios, de boilerplates prontos para produção a produtos com usuários reais.",
    },
    items: [
      {
        icon: "rocket",
        status: "dev",
        statusLabel: "Em desenvolvimento",
        title: "Levelify",
        description:
          "Sistema de gerenciamento de tarefas e hábitos com ferramentas de produtividade baseadas em IA e gamificação.",
        tags: ["Next.js", "TypeScript", "React"],
      },
      {
        icon: "package",
        status: "live",
        statusLabel: "Disponível",
        title: "Kaiser Utils",
        description:
          "Boilerplates de API prontos para produção: Python/FastAPI, Node/Fastify e Rails 8.1. JWT, Clean Architecture, Docker multi-stage e OpenTelemetry.",
        tags: ["TypeScript", "Python", "Ruby"],
        repo: { label: "repo", href: "https://github.com/Kaiser-Inc/Utils" },
      },
      {
        icon: "network",
        status: "live",
        statusLabel: "Disponível",
        title: "Microservices Workshop",
        description:
          "Projeto didático que compara monolito e microserviços na prática: a mesma funcionalidade implementada das duas formas, com Kong, RabbitMQ e OpenTelemetry.",
        tags: ["Python", "FastAPI", "RabbitMQ"],
        repo: { label: "repo", href: "https://github.com/Kaiser-Inc/Microservices-Workshop" },
      },
      {
        icon: "bar-chart-2",
        status: "live",
        statusLabel: "Em uso",
        title: "MetriK",
        description:
          "Dashboard de qualidade de código para Python. Visualiza complexidade ciclomática, cobertura de testes, score Pylint e métricas Halstead.",
        tags: ["Python", "Pytest", "HTML"],
        repo: { label: "app", href: "https://metri-k.vercel.app" },
      },
      {
        icon: "graduation-cap",
        status: "dev",
        statusLabel: "Em desenvolvimento",
        title: "Angel of The Dices",
        description: "Sistema de gerenciamento de fichas de RPG.",
        tags: ["React", "TypeScript"],
        repo: { label: "app", href: "https://angel-of-the-dices.vercel.app" },
      },
      {
        icon: "layout-template",
        status: "dev",
        statusLabel: "Em desenvolvimento",
        title: "Design System",
        description:
          "Sistema de design do grupo KaiserInc: tokens, componentes React e documentação visual para todos os projetos.",
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
