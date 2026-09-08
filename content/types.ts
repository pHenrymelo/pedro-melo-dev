

export type IconName =
  | "github"
  | "linkedin"
  | "mail"
  | "map-pin"
  | "languages"
  | "phone"
  | "lock"
  | "rocket"
  | "cloud"
  | "brain"
  | "graduation-cap"
  | "smartphone"
  | "package"
  | "network"
  | "bar-chart-2"
  | "wind"
  | "layout-template"
  | "user"
  | "users"
  | "calendar"
  | "external-link";

export type RichSegment =
  | string
  | { text: string; strong: true }
  | { text: string; em: true }
  | { text: string; href: string };

export type RichText = readonly RichSegment[];

export interface Link {
  readonly label: string;
  readonly href: string;
}

export interface MetaItem {

  readonly icon?: IconName;
  readonly text: string;
}

export interface TerminalLine {
  readonly kind: "command" | "output";
  readonly text: string;
}

export interface ContactChannel {
  readonly icon: IconName;
  readonly label: string;
  readonly value: string;

  readonly href?: string;
}

export interface StackGroup {
  readonly label: string;
  readonly hint: string;

  readonly items: readonly { readonly name: string; readonly brand?: true }[];
}

export interface PersonalProject {

  readonly mark: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly { readonly label: string; readonly nda?: true }[];

  readonly repo?: Link;
}

export interface TimelineItem {
  readonly date: string;
  readonly title: string;
  readonly org: string;
  readonly description: string;
  readonly tags: readonly string[];

  readonly current?: true;
}

export interface Education {
  readonly title: string;
  readonly org: string;
  readonly date: string;
  readonly honors?: string;
  readonly diplomaHref?: string;
}

export interface Certification {
  readonly icon: IconName;
  readonly title: string;
  readonly org: string;
}

export interface SectionHeading {
  readonly eyebrow: string;
  readonly title: string;
  readonly id: string;
  readonly description?: string;
}

export interface PersonalContent {
  readonly meta: {
    readonly title: string;
    readonly description: string;
  };
  readonly hero: {
    readonly eyebrow: string;
    readonly headlineBefore: string;
    readonly headlineAccent: string;
    readonly headlineAfter: string;
    readonly subtitle: string;
    readonly meta: readonly MetaItem[];
    readonly avatar: { readonly src: string; readonly alt: string };
    readonly profile: { readonly name: string; readonly handle: string };
    readonly terminal: {
      readonly title: string;
      readonly lines: readonly TerminalLine[];
    };
    readonly primaryCta: Link;
    readonly cvCta: Link;
  };
  readonly about: {
    readonly heading: SectionHeading;
    readonly paragraphs: readonly RichText[];
    readonly sidebar: { readonly title: string; readonly description: string; readonly cta: Link };
  };
  readonly stack: {
    readonly heading: SectionHeading;
    readonly groups: readonly StackGroup[];
  };
  readonly projects: {
    readonly heading: SectionHeading;
    readonly items: readonly PersonalProject[];
  };
  readonly experience: {
    readonly heading: SectionHeading;
    readonly timeline: readonly TimelineItem[];
    readonly education: { readonly title: string; readonly items: readonly Education[] };
  };
  readonly certifications: {
    readonly heading: SectionHeading;
    readonly items: readonly Certification[];
  };
  readonly kaiserTeaser: {
    readonly id: string;
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
    readonly primaryCta: Link;
    readonly secondaryCta: Link;
  };
  readonly contact: {
    readonly heading: SectionHeading;
    readonly channels: readonly ContactChannel[];
    readonly form: {
      readonly hint: string;
      readonly successMessage: string;
      readonly fallbackHref: string;
    };
  };
  readonly footer: {
    readonly name: string;
    readonly year: string;
    readonly note: string;
    readonly links: readonly { readonly icon: IconName; readonly href: string; readonly label: string }[];
  };
}

export interface Stat {
  readonly value: string;

  readonly suffix?: string;
  readonly label: string;
}

export interface Principle {
  readonly number: string;
  readonly title: string;
  readonly text: string;
}

export type ProjectStatus = "live" | "dev";

export interface KaiserProject {
  readonly icon: IconName;
  readonly status: ProjectStatus;
  readonly statusLabel: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly repo: Link;
}

export interface KaiserContent {
  readonly meta: {
    readonly title: string;
    readonly description: string;
  };
  readonly hero: {
    readonly eyebrow: string;
    readonly headlineBefore: string;
    readonly headlineAccent: string;
    readonly subtitle: string;
    readonly meta: readonly MetaItem[];
    readonly stats: readonly Stat[];
  };
  readonly about: {
    readonly heading: SectionHeading;
    readonly paragraphs: readonly RichText[];
    readonly principles: { readonly title: string; readonly items: readonly Principle[] };
  };
  readonly projects: {
    readonly heading: SectionHeading;
    readonly items: readonly KaiserProject[];
  };
  readonly backStrip: {
    readonly title: string;
    readonly description: string;
    readonly cta: Link;
  };
  readonly footer: {
    readonly name: string;
    readonly tagline: string;
    readonly year: string;
    readonly links: readonly Link[];
  };
}
