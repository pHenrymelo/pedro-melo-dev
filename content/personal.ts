import type { PersonalContent } from "./types";

export const personal = {
  meta: {
    title: "Pedro Melo — Software Engineer & Tech Lead",
    description:
      "Pedro Henrique Braga Melo, engenheiro de software e Tech Lead, com foco em arquitetura de sistemas, qualidade de código e liderança técnica.",
  },

  hero: {
    eyebrow: "Software Engineer & Tech Lead",
    headlineBefore: "Engenharia de software com foco em ",
    headlineAccent: "produto",
    headlineAfter: ": da arquitetura ao deploy, incluindo o time responsável pela entrega.",
    subtitle:
      "Trabalho com desenvolvimento de software há 6 anos e atuo como Tech Lead no GREat, com foco em arquitetura, qualidade de código e na condução do time de desenvolvimento.",
    meta: [
      { text: "Aberto a novas oportunidades" },
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
        { kind: "output", text: '  "years": 6,' },
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
      title: "Engenheiro de software com seis anos de experiência em ambientes de produção e trabalho em time.",
    },
    paragraphs: [
      [
        "Sou Pedro Henrique, engenheiro de software com 6 anos de experiência, formado em Análise e Desenvolvimento de Sistemas pela ",
        { text: "UFC", strong: true },
        " com distinção acadêmica (Summa Cum Laude).",
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
        ", e tenho proficiência em inglês em contextos profissionais.",
      ],
    ],
    sidebar: {
      title: "Onde me encontrar",
      description: "GitHub, LinkedIn, email e telefone estão reunidos na seção de contato.",
      cta: { label: "Ver contato", href: "#contato" },
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
      title: "Trabalhos profissionais e acadêmicos.",
    },
    items: [
      {
        mark: "G.",
        eyebrow: "Profissional · Tech Lead",
        title: "Laboratório GREat e Parceira Multinacional",
        description:
          "Atuo como tech lead em um projeto do GREat em parceiria com uma multinacional. Sou responsável pela arquitetura e decisões tecnicas, conduzo os code reviews e apoio o time nas entregas de um projeto interno da empresa.",
        tags: [{ label: "Stack sob NDA", nda: true }],
      },
      {
        mark: "A.",
        eyebrow: "Acadêmico · UFC / PAIP",
        title: "Alumonitor",
        description:
          "Plataforma da UFC para monitorar dados socioeconômicos e prever evasão acadêmica. Refatorei a infraestrutura para microserviços com Flask, integrei modelos de IA e entreguei as versões web e mobile.",
        tags: [{ label: "Python" }, { label: "Flask" }, { label: "React" }, { label: "RN" }, { label: "Docker" }],
      },
      {
        mark: "H.",
        eyebrow: "Acadêmico · Huawei",
        title: "MVP com a Huawei: Monitoramento de Queimadas",
        description:
          "MVP em parceria com a Huawei para monitorar grilagem e queimadas usando visão computacional com imagens de satélite.",
        tags: [{ label: "Python" }, { label: "React" }, { label: "Computer Vision" }],
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
          "Liderança técnica de projeto em parceria com multinacional. Arquitetura de sistema, decisões de stack, code reviews e orientação do time de desenvolvimento.",
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
          "Coordenação de projetos colaborativos com colegas e desenvolvimento de produtos próprios, aplicando novas tecnologias em projetos reais.",
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
          date: "Mar 2023 — Abr 2026",
          honors: "Summa Cum Laude",
          diplomaHref: "/diploma-pedro-melo.jpg",
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
    title: "Knowledge & Tech: projetos colaborativos desenvolvidos fora do expediente.",
    description:
      "A KaiserInc é meu grupo pessoal de projetos, no qual coordeno iniciativas colaborativas com colegas e desenvolvo produtos próprios com novas tecnologias.",
    primaryCta: { label: "Conheça a KaiserInc", href: "/kaiserinc" },
    secondaryCta: { label: "Ver projetos pessoais aqui", href: "#projetos" },
  },

  contact: {
    heading: {
      id: "contato",
      eyebrow: "Contato",
      title: "Entre em contato.",
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
      hint: "Apenas para contato profissional.",
      successMessage: "Mensagem enviada. Respondo em breve.",
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
