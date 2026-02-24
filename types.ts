
export type Language = 'en' | 'ua' | 'it' | 'de';

export interface ServiceRoute {
  id: string;
  title: string;
  oneLiner: string;
  bestFor: string[];
  priceBadge?: string;
  cta: string;
  preset: { route: string; package?: string; options?: string[] };
}

export interface Capability {
  id: string;
  label: string;
}

export interface Industry {
  id: string;
  label: string;
  preset: { route: string; package?: string; options?: string[] };
}

export interface EstimatorPackage {
  id: string;
  label: string;
  priceRange: [number, number];
  timelineRange: [number, number];
  timelineUnit: 'days' | 'weeks';
  deliverables: string[];
}

export interface EstimatorOption {
  id: string;
  label: string;
  priceDelta: [number, number];
  timelineDelta: [number, number];
  deliverables?: string[];
}

export interface EstimatorRoute {
  id: string;
  label: string;
  packages: EstimatorPackage[];
  options: {
    visible: EstimatorOption[];
    more: EstimatorOption[];
  };
}

export interface WorkItem {
  id: string;
  client: string;
  category: string;
  year: string;
  image: string;
  description: string;
  before: string;
  done: string[];
  result: string;
  capabilities: string[];
  stack: string[];
  projectUrl?: string;
  caseStudyUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface DesignSystemSection {
  heading: string;
  subheading: string;
  typography: {
    title: string;
    primary: { name: string; usage: string; description: string };
    secondary: { name: string; usage: string; description: string };
  };
  standards: {
    title: string;
    items: { title: string; desc: string; code: string }[];
  };
}

export interface ProcessSection {
  heading: string;
  subheading: string;
  footerQuote: string;
  pipeline: {
    title: string;
    steps: { title: string; desc: string }[];
  };
  modules: {
    title: string;
    items: { title: string; content: string[] }[];
  }
}

export interface TranslationStructure {
  nav: NavItem[];
  hero: {
    title1: string;
    title2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  trust: {
    stats: { label: string; value: string }[];
    logos: string[];
  };
  marquee: string[];
  services: {
    heading: string;
    subheading: string;
    routes: ServiceRoute[];
    capabilities: {
      heading: string;
      items: Capability[];
      showAllLabel: string;
    };
    industries: {
      heading: string;
      items: Industry[];
      experienceLabel: string;
    };
  };
  estimator: {
    heading: string;
    subheading: string;
    routes: EstimatorRoute[];
    recommend: {
      label: string;
      questions: {
        q1: {
          text: string;
          options: { label: string; value: string }[];
        };
        q2: {
          text: string;
          options: { label: string; value: string }[];
        };
      };
    };
    result: {
      priceLabel: string;
      timelineLabel: string;
      deliverablesLabel: string;
      setupLabel: string;
      monthlyLabel: string;
      disclaimer: string;
      cta: string;
      moreOptions: string;
    };
    form: {
      name: string;
      contact: string;
      comment: string;
      submit: string;
      success: string;
    };
  };
  designSystem: DesignSystemSection;
  process: ProcessSection; 
  works: {
    heading: string;
    subheading: string;
    viewAll: string;
    items: WorkItem[];
    modalLaunch: string;
  };
  faq: {
    heading: string;
    items: { q: string; a: string }[];
  };
  finalCta: {
    heading: string;
    subheading: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    heading: string;
    subheading: string;
    description: string;
    stats: { label: string; value: string }[];
    manifesto: string[];
  };
  contact: {
    heading: string;
    subheading: string;
    desc: string;
    placeholder: string;
    button: string;
    processing: string;
    emailLabel: string;
    locationLabel: string;
    aiTitle: string;
    waiting: string;
    sendButton: string;
  };
  footer: {
    rights: string;
    designedBy: string;
  };
  legal: {
    imprint: { title: string; content: string[] };
    privacy: { title: string; content: string[] };
    terms: { title: string; content: string[] };
  };
}
