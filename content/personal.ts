import type { PersonalContent } from "./types";

export const personal = {
  meta: {
    title: "Pedro Melo — Software Engineer & Tech Lead",
    description:
      "Pedro Henrique Braga Melo — Engenheiro de software e Tech Lead. Arquitetura, qualidade e times de entrega.",
  },

  hero: {
    eyebrow: "Software Engineer & Tech Lead",
    headlineBefore: "Engenharia de software com foco em ",
    headlineAccent: "produto",
    headlineAfter: ": da arquitetura ao deploy, passando pelo time que faz acontecer.",
    subtitle:
      "Tenho 5 anos desenvolvendo software e hoje atuo como Tech Lead no GREat, focado em arquitetura, qualidade de código e times que entregam.",
    meta: [
      { text: "Disponível para conversas" },
      { icon: "map-pin", text: "Itapajé, CE · Brasil" },
      { icon: "languages", text: "PT nativo · EN proficiente" },
    ],
    avatar: { src: "/avatar.jpg", alt: "Pedro Melo" },
    profile: {
      name: "Pedro Henrique Braga Melo",
      handle: "@pHenrymelo  ·  Tech Lead @ GREat",
    },
    terminal: {
      title: "~ pedro@great — zsh",
      lines: [
        { kind: "command", text: "whoami" },
        { kind: "output", text: "pedro_henrique_braga_melo" },
        { kind: "command", text: "cat profile.json" },
        { kind: "output", text: "{" },
        { kind: "output", text: '  "role": "Tech Lead @ GREat",' },
        { kind: "output", text: '  "focus": ["arquitetura", "times", "qualidade"],' },
        { kind: "output", text: '  "years": 5,' },
        { kind: "output", text: '  "stack": "TS · Python · Ruby",' },
        { kind: "output", text: '  "status": "shipping"' },
        { kind: "output", text: "}" },
      ],
    },
    primaryCta: { label: "Ver projetos", href: "#projetos" },
    cvCta: { label: "Download CV", href: "/cv-pedro-melo.pdf" },
  },

  about: {
    heading: {
      id: "sobre",
      eyebrow: "Sobre",
      title: "Engenheiro com cinco anos de prática em produção, em time e em escala.",
    },
    paragraphs: [
      [
        "Me chamo Pedro Henrique, sou engenheiro de software com 5 anos de experiência e estou cursando Análise e Desenvolvimento de Sistemas na ",
        { text: "UFC", strong: true },
        ".",
      ],
      [
        "Atuo como Tech Lead no ",
        { text: "GREat", strong: true },
        ", desenvolvo projetos pessoais na ",
        { text: "KaiserInc", href: "/kaiserinc" },
        " e tenho histórico em projetos acadêmicos com parceiros como a ",
        { text: "Huawei", strong: true },
        ".",
      ],
      [
        "Trabalho principalmente com ",
        { text: "TypeScript", strong: true },
        ", ",
        { text: "Python", strong: true },
        " e ",
        { text: "Ruby", strong: true },
        ", e me viro bem em inglês.",
      ],
    ],
    sidebar: {
      title: "Onde me encontrar",
      rows: [
        { icon: "github", label: "github", value: "pHenrymelo", href: "https://github.com/pHenrymelo" },
        { icon: "linkedin", label: "linkedin", value: "/in/phenrymelo", href: "https://www.linkedin.com/in/phenrymelo" },
        { icon: "mail", label: "email", value: "pedrohenriquebmelo25@gmail.com", href: "mailto:pedrohenriquebmelo25@gmail.com" },
        { icon: "map-pin", label: "local", value: "Itapajé, CE — Brasil" },
      ],
    },
  },

  stack: {
    heading: {
      id: "stack",
      eyebrow: "Stack",
      title: "Linguagens, frameworks e princípios que uso em produção.",
    },
    groups: [
      {
        label: "Principal",
        hint: "linguagens & frameworks core",
        items: [
          { name: "TypeScript", brand: true },
          { name: "Python", brand: true },
          { name: "Ruby", brand: true },
          { name: "Node.js", brand: true },
          { name: "React", brand: true },
          { name: "Angular", brand: true },
          { name: "React Native", brand: true },
        ],
      },
      {
        label: "Backend",
        hint: "frameworks de servidor",
        items: [
          { name: "NestJS" },
          { name: "Fastify" },
          { name: "Flask" },
          { name: "FastAPI" },
          { name: "Ruby on Rails" },
        ],
      },
      {
        label: "Infra & Qualidade",
        hint: "operação e testes",
        items: [
          { name: "Docker" },
          { name: "Git" },
          { name: "Linux" },
          { name: "Vitest" },
          { name: "Jest" },
          { name: "OpenTelemetry" },
        ],
      },
      {
        label: "Conceitos",
        hint: "arquitetura & processo",
        items: [
          { name: "Clean Architecture" },
          { name: "SOLID" },
          { name: "DDD" },
          { name: "Microserviços" },
          { name: "Scrum" },
          { name: "Kanban" },
        ],
      },
    ],
  },

  projects: {
    heading: {
      id: "projetos",
      eyebrow: "Projetos",
      title: "Trabalhos com impacto profissional e acadêmico.",
    },
    items: [
      {
        mark: "G.",
        eyebrow: "Profissional · Tech Lead",
        title: "Plataforma GREat e Parceira Multinacional",
        description:
          "Atuo como tech lead em um projeto do GREat com uma multinacional. Cuido da arquitetura, das decisões de stack, faço code review e ajudo o time a entregar.",
        tags: [{ label: "Stack sob NDA", nda: true }],
      },
      {
        mark: "A.",
        eyebrow: "Acadêmico · UFC / PAIP",
        title: "Alumonitor",
        description:
          "Plataforma da UFC para monitorar dados socioeconômicos e prever evasão acadêmica. Refatorei a infra para microserviços com Flask, integrei modelos de IA e entreguei web e mobile.",
        tags: [{ label: "Python" }, { label: "Flask" }, { label: "React" }, { label: "RN" }, { label: "Docker" }],
        repo: { label: "repo", href: "https://github.com/pHenrymelo" },
      },
      {
        mark: "H.",
        eyebrow: "Acadêmico · Huawei",
        title: "MVP com a Huawei: Monitoramento de Queimadas",
        description:
          "MVP em parceria com a Huawei para monitorar grilagem e queimadas usando visão computacional e drones autônomos.",
        tags: [{ label: "Python" }, { label: "React" }, { label: "Computer Vision" }],
        repo: { label: "repo", href: "https://github.com/pHenrymelo" },
      },
    ],
  },

  experience: {
    heading: {
      id: "experiencia",
      eyebrow: "Experiência",
      title: "Histórico profissional e formação.",
    },
    timeline: [
      {
        date: "Abr 2025 — Presente",
        title: "Tech Lead",
        org: "GREat",
        description:
          "Liderança técnica de projeto em parceria com multinacional. Arquitetura de sistema, decisões de stack, code review e orientação do time de desenvolvimento.",
        tags: ["Arquitetura", "Liderança", "NDA"],
        current: true,
      },
      {
        date: "Abr 2025 — Presente",
        title: "Software Engineer",
        org: "Alumonitor / PAIP",
        description:
          "Refatoração para arquitetura de microserviços, integração com modelos de IA para previsão de evasão e entrega em plataforma web + mobile (UFC).",
        tags: ["Python", "Microserviços", "React Native"],
      },
      {
        date: "Set 2025 — Out 2025",
        title: "Software Engineer",
        org: "MVP Huawei",
        description:
          "Desenvolvimento do MVP em parceria com a Huawei para monitoramento de grilagem e queimadas, utilizando visão computacional e drones autônomos.",
        tags: ["Python", "React", "Computer Vision"],
      },
      {
        date: "Abr 2025 — Dez 2025",
        title: "Software Engineer",
        org: "FOGO / PREX",
        description:
          "Desenvolvimento de plataforma de monitoramento ambiental com pipelines de visão computacional e operação em tempo real.",
        tags: ["Computer Vision", "Python"],
      },
      {
        date: "2023 — Presente",
        title: "Projetos pessoais",
        org: "KaiserInc",
        description:
          "Coordenação de projetos colaborativos com colegas, desenvolvimento de produtos próprios e exploração de novas tecnologias em contextos reais.",
        tags: ["Liderança", "Produto"],
        current: true,
      },
    ],
    education: {
      title: "Formação",
      items: [
        {
          title: "Análise e Desenvolvimento de Sistemas",
          org: "Universidade Federal do Ceará — UFC",
          date: "Mar 2023 — Presente",
        },
      ],
    },
  },

  certifications: {
    heading: {
      id: "certificacoes",
      eyebrow: "Certificações",
      title: "Formações & cursos relevantes.",
    },
    items: [
      { icon: "rocket", title: "Formação Profissionalizante em Desenvolvimento", org: "Rocketseat · Abr 2025" },
      { icon: "cloud", title: "AWS Academy Cloud Foundations", org: "AWS · Jan – Jun 2022" },
      { icon: "brain", title: "Fundamentals of Deep Learning", org: "NVIDIA · Set 2025" },
    ],
  },

  kaiserTeaser: {
    id: "kaiserinc",
    eyebrow: "KaiserInc",
    title: "Knowledge & Tech — projetos colaborativos, fora do horário de expediente.",
    description:
      "KaiserInc é meu grupo pessoal de projetos — onde coordeno iniciativas colaborativas com colegas, desenvolvo produtos próprios e aplico novas tecnologias em contextos reais.",
    primaryCta: { label: "Conheça a KaiserInc", href: "/kaiserinc" },
    secondaryCta: { label: "Ver projetos pessoais aqui", href: "#projetos" },
  },

  contact: {
    heading: {
      id: "contato",
      eyebrow: "Contato",
      title: "Vamos conversar.",
      description:
        "Aberto a oportunidades em arquitetura, liderança técnica e produto. Resposta normalmente em até 48h.",
    },
    channels: [
      { icon: "mail", label: "Email", value: "pedrohenriquebmelo25@gmail.com", href: "mailto:pedrohenriquebmelo25@gmail.com" },
      { icon: "github", label: "GitHub", value: "github.com/pHenrymelo", href: "https://github.com/pHenrymelo" },
      { icon: "linkedin", label: "LinkedIn", value: "/in/phenrymelo", href: "https://www.linkedin.com/in/phenrymelo" },
      { icon: "phone", label: "Telefone", value: "(85) 99281-9850", href: "tel:+5585992819850" },
      { icon: "map-pin", label: "Localização", value: "Itapajé, Ceará — Brasil" },
    ],
    form: {
      hint: "Apenas para conversas. Sem spam.",
      successMessage: "Mensagem enviada — respondo em breve.",
      fallbackHref: "mailto:pedrohenriquebmelo25@gmail.com",
    },
  },

  footer: {
    name: "Pedro Melo",
    year: "2025",
    note: "built with care",
    links: [
      { icon: "github", href: "https://github.com/pHenrymelo", label: "GitHub" },
      { icon: "linkedin", href: "https://www.linkedin.com/in/phenrymelo", label: "LinkedIn" },
      { icon: "mail", href: "mailto:pedrohenriquebmelo25@gmail.com", label: "Email" },
      { icon: "external-link", href: "/kaiserinc", label: "KaiserInc" },
    ],
  },
} as const satisfies PersonalContent;
