
import { TranslationStructure, Language } from './types';

export const CONTENT: Record<Language, TranslationStructure> = {
  en: {
    nav: [
      { label: 'Work', href: '#work' },
      { label: 'Services', href: '#services' },
      { label: 'Estimate', href: '#estimate' },
    ],
    hero: {
      title1: 'High-Impact',
      title2: 'Digital Design',
      subtitle: 'We build high-converting brutalist experiences for forward-thinking brands. Fast, bold, and technically superior.',
      ctaPrimary: 'Get an Estimate',
      ctaSecondary: 'View Work'
    },
    trust: {
      stats: [
        { label: 'PROJECTS', value: '40+' },
        { label: 'YEARS', value: '5+' },
        { label: 'GEO', value: 'GLOBAL' },
        { label: 'NICHE', value: 'TECH/ART' }
      ],
      logos: ['ARTFLANEUR', 'EPRIS', 'HELPUSUA', 'AM PUBLISHING', 'TECHCORE', 'NEXUS']
    },
    marquee: ["HIGH CONVERSION", "BRUTALIST DESIGN", "WEB ENGINEERING", "PERFORMANCE FIRST", "SEO OPTIMIZED", "SCALABLE SYSTEMS"],
    services: {
      heading: 'Services',
      subheading: '[WHAT WE DO]',
      routes: [
        {
          id: 'turnkey',
          title: 'Turnkey Websites',
          oneLiner: 'Turnkey websites — fast, neat, with launch.',
          bestFor: [
            'To have a normal website and leads',
            'When you need to launch quickly',
            'When you need a fixed starting budget'
          ],
          priceBadge: '€300–€500 turnkey',
          cta: 'Estimate website',
          preset: { route: 'turnkey', package: 'starter' }
        },
        {
          id: 'platform',
          title: 'WEEGO Platform (hosted by us)',
          oneLiner: 'We launch your business on our platform. We deploy, support, and evolve it.',
          bestFor: [
            'When you need a system, not just a website',
            'When support and development are important',
            'When you want to start faster on a ready-made basis'
          ],
          priceBadge: 'Setup €500–€900 + €100/month',
          cta: 'Estimate platform',
          preset: { route: 'platform', package: 'setup' }
        },
        {
          id: 'custom',
          title: 'Custom Build',
          oneLiner: 'Individual development: web + backend + admin panels + integrations.',
          bestFor: [
            'When non-standard logic is needed',
            'When there are integrations/automations',
            'When modules/cabinets/panels are needed'
          ],
          cta: 'Estimate custom',
          preset: { route: 'custom', package: 'mvp' }
        }
      ],
      capabilities: {
        heading: 'Also we can help with',
        showAllLabel: 'Show all capabilities',
        items: [
          { id: 'backend', label: 'Backend / API' },
          { id: 'admin', label: 'Admin panels / dashboards' },
          { id: 'payments', label: 'Payments & webhooks' },
          { id: 'pos', label: 'POS / CRM integrations' },
          { id: 'devops', label: 'DevOps / Cloud' },
          { id: 'mobile', label: 'Mobile / PWA' },
          { id: 'bi', label: 'Data / BI dashboards' },
          { id: 'automation', label: 'Automation / integrations' },
          { id: 'performance', label: 'Performance optimization' },
          { id: 'seo', label: 'SEO setup' },
          { id: 'analytics', label: 'Analytics events' },
          { id: 'migration', label: 'Content migration' },
          { id: 'notifications', label: 'Notifications (email/SMS)' },
          { id: 'security', label: 'Security hardening' },
          { id: 'audit', label: 'Technical audit' },
          { id: 'consulting', label: 'Architectural consulting' }
        ]
      },
      industries: {
        heading: 'Industries (experience)',
        experienceLabel: 'Experience, not a one-size-fits-all template.',
        items: [
          { id: 'horeca', label: 'HoReCa', preset: { route: 'platform', options: ['pos', 'payments', 'admin'] } },
          { id: 'retail', label: 'Retail', preset: { route: 'custom', options: ['payments', 'automation'] } },
          { id: 'services', label: 'Services', preset: { route: 'turnkey', options: ['seo', 'analytics'] } },
          { id: 'ngo', label: 'NGOs', preset: { route: 'turnkey', options: ['multilang'] } }
        ]
      }
    },
    estimator: {
      heading: 'Project Estimator',
      subheading: '[CALCULATE VALUE]',
      routes: [
        {
          id: 'turnkey',
          label: 'Turnkey Website',
          packages: [
            { id: 'starter', label: 'Starter (Turnkey)', priceRange: [300, 500], timelineRange: [3, 7], timelineUnit: 'days', deliverables: ['Responsive layout', 'Contact form', 'Basic SEO structure', 'Deployment'] },
            { id: 'standard', label: 'Standard', priceRange: [500, 900], timelineRange: [1, 2], timelineUnit: 'weeks', deliverables: ['Up to 10 Pages', 'CMS Integration', 'Analytics Setup', 'Speed Optimization'] },
            { id: 'pro', label: 'Pro', priceRange: [900, 1500], timelineRange: [2, 4], timelineUnit: 'weeks', deliverables: ['Custom Design System', 'Advanced Animations', 'Content Strategy', 'Full SEO Setup'] }
          ],
          options: {
            visible: [
              { id: 'cms', label: 'CMS / Content editor', priceDelta: [100, 250], timelineDelta: [2, 5], deliverables: ['Admin content management'] },
              { id: 'multilang', label: 'Multilanguage', priceDelta: [80, 200], timelineDelta: [2, 7], deliverables: ['i18n infrastructure'] },
              { id: 'analytics', label: 'Analytics events', priceDelta: [40, 120], timelineDelta: [1, 2], deliverables: ['Custom event tracking'] },
              { id: 'seo', label: 'SEO setup (basic)', priceDelta: [60, 150], timelineDelta: [1, 3], deliverables: ['Meta tags & sitemap'] },
              { id: 'payments', label: 'Payments setup', priceDelta: [120, 300], timelineDelta: [3, 7], deliverables: ['Stripe/PayPal integration'] },
              { id: 'pos', label: 'CRM/POS integration', priceDelta: [150, 400], timelineDelta: [3, 10], deliverables: ['Third-party data sync'] }
            ],
            more: [
              { id: 'admin', label: 'Admin panel (basic)', priceDelta: [250, 600], timelineDelta: [7, 21], deliverables: ['Custom dashboard'] },
              { id: 'notifications', label: 'Notifications (email/SMS)', priceDelta: [80, 250], timelineDelta: [2, 5], deliverables: ['Automated alerts'] },
              { id: 'performance', label: 'Performance pass', priceDelta: [60, 180], timelineDelta: [2, 4], deliverables: ['90+ Lighthouse score'] },
              { id: 'devops', label: 'DevOps hardening', priceDelta: [100, 300], timelineDelta: [3, 7], deliverables: ['CI/CD & Monitoring'] },
              { id: 'bi', label: 'BI dashboard (basic)', priceDelta: [250, 700], timelineDelta: [10, 25], deliverables: ['Data visualization'] },
              { id: 'migration', label: 'Content migration', priceDelta: [60, 250], timelineDelta: [2, 7], deliverables: ['Legacy data import'] },
              { id: 'booking', label: 'Booking/reservations', priceDelta: [120, 350], timelineDelta: [5, 12], deliverables: ['Calendar system'] },
              { id: 'roles', label: 'Roles & permissions', priceDelta: [120, 400], timelineDelta: [5, 14], deliverables: ['Advanced access control'] }
            ]
          }
        },
        {
          id: 'platform',
          label: 'WEEGO Platform',
          packages: [
            { id: 'setup', label: 'Platform Setup', priceRange: [500, 900], timelineRange: [1, 3], timelineUnit: 'weeks', deliverables: ['White-label theme', 'Deployment & environments', 'Base modules enabled', 'Maintenance included'] }
          ],
          options: {
            visible: [
              { id: 'cms', label: 'CMS / Content editor', priceDelta: [100, 250], timelineDelta: [2, 5] },
              { id: 'multilang', label: 'Multilanguage', priceDelta: [80, 200], timelineDelta: [2, 7] },
              { id: 'analytics', label: 'Analytics events', priceDelta: [40, 120], timelineDelta: [1, 2] },
              { id: 'seo', label: 'SEO setup (basic)', priceDelta: [60, 150], timelineDelta: [1, 3] },
              { id: 'payments', label: 'Payments setup', priceDelta: [120, 300], timelineDelta: [3, 7] },
              { id: 'pos', label: 'CRM/POS integration', priceDelta: [150, 400], timelineDelta: [3, 10] }
            ],
            more: [
              { id: 'admin', label: 'Admin panel (basic)', priceDelta: [250, 600], timelineDelta: [7, 21] },
              { id: 'notifications', label: 'Notifications (email/SMS)', priceDelta: [80, 250], timelineDelta: [2, 5] }
            ]
          }
        },
        {
          id: 'custom',
          label: 'Custom Build',
          packages: [
            { id: 'mvp', label: 'MVP', priceRange: [700, 1500], timelineRange: [2, 4], timelineUnit: 'weeks', deliverables: ['Core functionality', 'Essential UI', 'Basic Backend', 'Initial Launch'] },
            { id: 'business', label: 'Business', priceRange: [1500, 3000], timelineRange: [4, 8], timelineUnit: 'weeks', deliverables: ['Full feature set', 'Advanced UI/UX', 'Scalable Backend', 'Admin Dashboard'] },
            { id: 'full', label: 'Full Enterprise', priceRange: [3000, 6000], timelineRange: [8, 16], timelineUnit: 'weeks', deliverables: ['Complex ecosystem', 'High availability', 'Custom integrations', 'Full support'] }
          ],
          options: {
            visible: [
              { id: 'cms', label: 'CMS / Content editor', priceDelta: [100, 250], timelineDelta: [2, 5] },
              { id: 'multilang', label: 'Multilanguage', priceDelta: [80, 200], timelineDelta: [2, 7] },
              { id: 'analytics', label: 'Analytics events', priceDelta: [40, 120], timelineDelta: [1, 2] },
              { id: 'seo', label: 'SEO setup (basic)', priceDelta: [60, 150], timelineDelta: [1, 3] },
              { id: 'payments', label: 'Payments setup', priceDelta: [120, 300], timelineDelta: [3, 7] },
              { id: 'pos', label: 'CRM/POS integration', priceDelta: [150, 400], timelineDelta: [3, 10] }
            ],
            more: [
              { id: 'admin', label: 'Admin panel (basic)', priceDelta: [250, 600], timelineDelta: [7, 21] },
              { id: 'notifications', label: 'Notifications (email/SMS)', priceDelta: [80, 250], timelineDelta: [2, 5] },
              { id: 'performance', label: 'Performance pass', priceDelta: [60, 180], timelineDelta: [2, 4] },
              { id: 'devops', label: 'DevOps hardening', priceDelta: [100, 300], timelineDelta: [3, 7] },
              { id: 'bi', label: 'BI dashboard (basic)', priceDelta: [250, 700], timelineDelta: [10, 25] },
              { id: 'migration', label: 'Content migration', priceDelta: [60, 250], timelineDelta: [2, 7] },
              { id: 'booking', label: 'Booking/reservations', priceDelta: [120, 350], timelineDelta: [5, 12] },
              { id: 'roles', label: 'Roles & permissions', priceDelta: [120, 400], timelineDelta: [5, 14] }
            ]
          }
        }
      ],
      recommend: {
        label: 'Not sure? Recommend',
        questions: {
          q1: {
            text: 'What do you need most?',
            options: [
              { label: 'Website', value: 'website' },
              { label: 'System / admin', value: 'system' },
              { label: 'Integrations', value: 'integrations' },
              { label: 'Ongoing support', value: 'support' }
            ]
          },
          q2: {
            text: 'Do you want us to host & maintain it?',
            options: [
              { label: 'Yes', value: 'yes' },
              { label: 'No', value: 'no' }
            ]
          }
        }
      },
      result: {
        priceLabel: 'Estimated Price',
        timelineLabel: 'Timeline',
        deliverablesLabel: 'What you get',
        setupLabel: 'Setup',
        monthlyLabel: 'Monthly',
        disclaimer: 'Estimate is approximate. Final scope and price are confirmed after a short call.',
        cta: 'Send Estimate',
        moreOptions: 'More options'
      },
      form: {
        name: 'Name',
        contact: 'Telegram / Email',
        comment: 'Project details (optional)',
        submit: 'Submit Request',
        success: 'Data transmitted. We will contact you soon.'
      }
    },
    designSystem: {
        heading: "System",
        subheading: "Standards",
        typography: {
            title: "Typography",
            primary: {
                name: "Archivo",
                usage: "Display / Headlines",
                description: "Grotesque sans-serif with high impact weight variance. Used for shouting."
            },
            secondary: {
                name: "Inter",
                usage: "Body / UI",
                description: "Optimized for screen legibility. Neutral, objective, purely functional."
            }
        },
        standards: {
            title: "Methodology",
            items: [
                { title: "Atomic Design", desc: "We build systems, not pages. Every component is molecular.", code: "SYS_ATOMIC" },
                { title: "Swiss Grid", desc: "Mathematical precision. 12-column layouts with rigid vertical rhythm.", code: "SYS_GRID" },
                { title: "A11Y Core", desc: "WCAG 2.1 compliance is not optional. It is the baseline.", code: "SYS_ACCESS" },
                { title: "Dark Patterns", desc: "Zero tolerance. We design for user agency, not manipulation.", code: "SYS_ETHICS" }
            ]
        }
    },
    process: {
      heading: "DELIVERY SYSTEM",
      subheading: "END-TO-END CAPABILITIES",
      footerQuote: "We don’t deliver pages. We deliver systems that ship.",
      pipeline: {
        title: "EXECUTION PIPELINE",
        steps: [
          { title: "CALL & BRIEF", desc: "defining goals, scope, and success metrics" },
          { title: "PROTOTYPE", desc: "wireframes, user flows, and core logic" },
          { title: "DESIGN & DEV", desc: "visual identity and technical build" },
          { title: "LAUNCH & SUPPORT", desc: "QA, deployment, and continuous growth" }
        ]
      },
      modules: {
        title: "TECHNICAL SCHEMATIC",
        items: [
            {
                title: "DESIGN SYSTEM (VISUAL OS)",
                content: ["Typography", "Grid", "Tokens", "Components", "Motion rules"]
            },
            {
                title: "PRODUCT & WEB ENGINEERING",
                content: ["Frontend", "Backend", "CMS", "APIs", "Automations", "Integrations"]
            },
            {
                title: "CONTENT & BRAND EXECUTION",
                content: ["Copy", "Art direction", "Guidelines", "Assets", "Packaging"]
            },
            {
                title: "DEPLOYMENT & OPTIMIZATION",
                content: ["Performance", "SEO", "Monitoring", "A/B", "Analytics"]
            }
        ]
      }
    },
    works: {
      heading: 'Recent Work',
      subheading: '[SELECTED PROJECTS 2025-2026]',
      viewAll: '',
      modalLaunch: 'Launch System',
      items: [
        {
          id: 'w1',
          client: 'ARTFLANEUR',
          category: 'Art Tech Platform',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1545989253-02cc26577f88?q=80&w=2000&auto=format&fit=crop',
          description: 'A revolutionary digital platform connecting physical galleries with digital wanderers.',
          before: 'Fragmented gallery presence with no unified digital sales channel.',
          done: ['Custom UI/UX', 'Platform Architecture', 'Partner Integration'],
          result: 'Unified 40+ galleries into a single high-performance art marketplace.',
          capabilities: ['UX/UI Design', 'Platform Architecture', 'Partner Integration', 'Brand Identity'],
          stack: ['Next.js', 'React', 'Mapbox', 'Vercel'],
          projectUrl: 'https://www.artflaneur.com.au/',
          caseStudyUrl: '#'
        },
        {
          id: 'w2',
          client: 'EPRIS MATERIA',
          category: 'Educational Interface',
          year: '2024',
          image: 'https://raw.githubusercontent.com/weego-web/weego-web.github.io/refs/heads/main/img/epris.png',
          description: 'An immersive educational stand for aesthetic decomposition.',
          before: 'Static educational content with low engagement.',
          done: ['HUD Interface', 'Real-time Data Viz', 'Motion Design'],
          result: 'Increased student engagement by 300% through interactive HUD.',
          capabilities: ['HUD Interface', 'Real-time Data Viz', 'Motion Design', 'Creative Coding'],
          stack: ['WebGL', 'Three.js', 'React', 'GLSL Shaders'],
          projectUrl: 'https://eprisj.github.io/',
          caseStudyUrl: '#'
        },
        {
          id: 'w3',
          client: 'HELP US HELP UA',
          category: 'Humanitarian Platform',
          year: '2024',
          image: 'https://raw.githubusercontent.com/weego-web/weego-web.github.io/refs/heads/main/img/helpusua.png',
          description: 'Critical digital infrastructure for humanitarian aid.',
          before: 'Manual donation processing and slow logistics tracking.',
          done: ['Platform Architecture', 'Donation Systems', 'Secure Payments'],
          result: 'Processed $1M+ in donations with zero downtime during peak loads.',
          capabilities: ['Platform Architecture', 'Donation Systems', 'Secure Payments', 'Global Logistics'],
          stack: ['Next.js', 'Stripe API', 'React', 'Node.js'],
          projectUrl: 'https://helpushelpua.com/',
          caseStudyUrl: '#'
        }
      ]
    },
    faq: {
      heading: 'FAQ',
      items: [
        { q: 'How long does a project take?', a: 'Typical landing pages take 2-3 weeks. Complex platforms take 2-4 months.' },
        { q: 'What is your pricing model?', a: 'We work with fixed-price projects based on defined scope or monthly retainers for support.' },
        { q: 'Do you provide maintenance?', a: 'Yes, we offer SLA-based support and continuous development packages.' },
        { q: 'What do you need from me to start?', a: 'A clear goal, existing brand assets (if any), and a 30-minute discovery call.' },
        { q: 'Do you work with startups?', a: 'Yes, we specialize in building MVPs and scaling digital products for tech startups.' },
        { q: 'Is SEO included?', a: 'Basic technical SEO is included in every build. Advanced strategy is an add-on.' }
      ]
    },
    finalCta: {
      heading: 'Ready to Scale?',
      subheading: 'Get a precise estimate or book a discovery call today.',
      ctaPrimary: 'Get Estimate',
      ctaSecondary: 'Book a Call'
    },
    about: {
        heading: "We Are Not",
        subheading: "For Everyone.",
        description: "We are a collective of digital natives, designers, and engineers obsessed with the edge. We don't do templates. We don't do safe. We build digital cathedrals.",
        stats: [
            { label: 'EST.', value: '2024' },
            { label: 'PROJECTS', value: '11+' },
            { label: 'CLIENTS', value: '8+' },
            { label: 'HQ', value: 'LVI' }
        ],
        manifesto: [
            "We believe in silence over noise.",
            "Function is the ultimate decoration.",
            "Code is poetry, design is law.",
            "If it's not fast, it's broken."
        ]
    },
    contact: {
      heading: "Start",
      subheading: "Project",
      desc: "Establish a direct line to the core. Input your parameters below.",
      placeholder: "> Initialize project sequence...\n> Defining aesthetic parameters...\n> Seeking architectural consultation...",
      button: "Transmit Data",
      processing: "Encrypting...",
      emailLabel: "SECURE_MAIL",
      locationLabel: "COORDS",
      aiTitle: "Core Response // Brief_v1.0",
      waiting: "Awaiting Transmission...",
      sendButton: "Execute Protocol"
    },
    footer: {
      rights: "ALL RIGHTS RESERVED.",
      designedBy: "DESIGNED BY WEEGO"
    },
    legal: {
        imprint: {
            title: "IMPRINT // LEGAL_DATA",
            content: [
                "ENTITY: WEEGO CREATIVE STUDIO",
                "LOCATION: LVIV, UKRAINE",
                "CONTACT: MUNISTER@OUTLOOK.COM",
                "JURISDICTION: UKRAINE",
                "CONTENT RESPONSIBILITY: WEEGO STUDIO TEAM",
                "COPYRIGHT: © 2024-2026 WEEGO CREATIVE STUDIO. ALL RIGHTS RESERVED."
            ]
        },
        privacy: {
            title: "PRIVACY POLICY",
            content: [
                "1. DATA COLLECTION: We collect minimal technical data necessary for system performance and security monitoring.",
                "2. COOKIES: This website uses essential session tokens for functionality. We do not use third-party tracking or advertising cookies.",
                "3. ANALYTICS: Anonymized telemetry is used solely to improve site architecture.",
                "4. EXTERNAL SERVICES: Data processing may involve Vercel (Infrastructure) and Google Cloud (AI Services).",
                "5. USER RIGHTS: Users may request data review or deletion via official contact channels."
            ]
        },
        terms: {
            title: "TERMS OF SERVICE",
            content: [
                "1. GENERAL: By accessing this interface, you agree to these terms.",
                "2. INTELLECTUAL PROPERTY: All code, visual assets, and design methodologies are the exclusive property of WEEGO CREATIVE STUDIO.",
                "3. LIABILITY: The studio provides this digital experience 'as is'. We accept no liability for external links or third-party content.",
                "4. GOVERNING LAW: These terms are governed by the laws of Ukraine.",
                "5. UNAUTHORIZED ACCESS: Any attempt to breach system security will result in immediate termination of access."
            ]
        }
    }
  },
  ua: {
    nav: [
      { label: 'Роботи', href: '#work' },
      { label: 'Послуги', href: '#services' },
      { label: 'Оцінка', href: '#estimate' },
    ],
    hero: {
      title1: 'Високий',
      title2: 'Результат',
      subtitle: 'Ми створюємо брутальні інтерфейси з високою конверсією для брендів, що дивляться в майбутнє. Швидко, сміливо та технічно досконало.',
      ctaPrimary: 'Отримати оцінку',
      ctaSecondary: 'Наші роботи'
    },
    trust: {
      stats: [
        { label: 'ПРОЄКТІВ', value: '40+' },
        { label: 'РОКІВ', value: '5+' },
        { label: 'ГЕО', value: 'GLOBAL' },
        { label: 'НІША', value: 'TECH/ART' }
      ],
      logos: ['ARTFLANEUR', 'EPRIS', 'HELPUSUA', 'AM PUBLISHING', 'TECHCORE', 'NEXUS']
    },
    marquee: ["ВИСОКА КОНВЕРСІЯ", "БРУТАЛЬНИЙ ДИЗАЙН", "ВЕБ-ІНЖЕНЕРІЯ", "ШВИДКІСТЬ ПЕРЕДУСІМ", "SEO ОПТИМІЗАЦІЯ", "МАСШТАБОВАНІ СИСТЕМИ"],
    services: {
      heading: 'Послуги',
      subheading: '[ЩО МИ РОБИМО]',
      routes: [
        {
          id: 'turnkey',
          title: 'Turnkey Websites',
          oneLiner: 'Сайти під ключ — швидко, акуратно, з запуском.',
          bestFor: [
            'Щоб мати нормальний сайт і заявки',
            'Коли треба швидко запуститись',
            'Коли потрібен фіксований стартовий бюджет'
          ],
          priceBadge: '€300–€500 turnkey',
          cta: 'Estimate website',
          preset: { route: 'turnkey', package: 'starter' }
        },
        {
          id: 'platform',
          title: 'WEEGO Platform (hosted by us)',
          oneLiner: 'Запускаємо ваш бізнес на нашій платформі. Ми деплоїмо, підтримуємо і дописуємо.',
          bestFor: [
            'Коли потрібна система, а не тільки сайт',
            'Коли важлива підтримка і розвиток',
            'Коли хочете швидше стартувати на готовій основі'
          ],
          priceBadge: 'Setup €500–€900 + €100/month',
          cta: 'Estimate platform',
          preset: { route: 'platform', package: 'setup' }
        },
        {
          id: 'custom',
          title: 'Custom Build',
          oneLiner: 'Індивідуальна розробка: web + backend + адмінки + інтеграції.',
          bestFor: [
            'Коли потрібна нестандартна логіка',
            'Коли є інтеграції/автоматизації',
            'Коли потрібні модулі/кабінети/панелі'
          ],
          cta: 'Estimate custom',
          preset: { route: 'custom', package: 'mvp' }
        }
      ],
      capabilities: {
        heading: 'Також ми допомагаємо з',
        showAllLabel: 'Показати всі можливості',
        items: [
          { id: 'backend', label: 'Backend / API' },
          { id: 'admin', label: 'Admin panels / dashboards' },
          { id: 'payments', label: 'Payments & webhooks' },
          { id: 'pos', label: 'POS / CRM integrations' },
          { id: 'devops', label: 'DevOps / Cloud' },
          { id: 'mobile', label: 'Mobile / PWA' },
          { id: 'bi', label: 'Data / BI dashboards' },
          { id: 'automation', label: 'Automation / integrations' },
          { id: 'performance', label: 'Performance optimization' },
          { id: 'seo', label: 'SEO setup' },
          { id: 'analytics', label: 'Analytics events' },
          { id: 'migration', label: 'Content migration' },
          { id: 'notifications', label: 'Notifications (email/SMS)' },
          { id: 'security', label: 'Security hardening' },
          { id: 'audit', label: 'Technical audit' },
          { id: 'consulting', label: 'Architectural consulting' }
        ]
      },
      industries: {
        heading: 'Industries (experience)',
        experienceLabel: 'Досвід, а не шаблон для всіх.',
        items: [
          { id: 'horeca', label: 'HoReCa', preset: { route: 'platform', options: ['pos', 'payments', 'admin'] } },
          { id: 'retail', label: 'Retail', preset: { route: 'custom', options: ['payments', 'automation'] } },
          { id: 'services', label: 'Services', preset: { route: 'turnkey', options: ['seo', 'analytics'] } },
          { id: 'ngo', label: 'NGOs', preset: { route: 'turnkey', options: ['multilang'] } }
        ]
      }
    },
    estimator: {
      heading: 'Калькулятор проекту',
      subheading: '[РОЗРАХУНОК ВАРТОСТІ]',
      routes: [
        {
          id: 'turnkey',
          label: 'Turnkey Website',
          packages: [
            { id: 'starter', label: 'Starter (Turnkey)', priceRange: [300, 500], timelineRange: [3, 7], timelineUnit: 'days', deliverables: ['Адаптивна верстка', 'Контактна форма', 'Базова SEO структура', 'Деплой'] },
            { id: 'standard', label: 'Standard', priceRange: [500, 900], timelineRange: [1, 2], timelineUnit: 'weeks', deliverables: ['До 10 сторінок', 'Інтеграція CMS', 'Налаштування аналітики', 'Оптимізація швидкості'] },
            { id: 'pro', label: 'Pro', priceRange: [900, 1500], timelineRange: [2, 4], timelineUnit: 'weeks', deliverables: ['Кастомна дизайн-система', 'Складна анімація', 'Контент-стратегія', 'Повне SEO налаштування'] }
          ],
          options: {
            visible: [
              { id: 'cms', label: 'CMS / Редактор контенту', priceDelta: [100, 250], timelineDelta: [2, 5], deliverables: ['Адмін-панель керування контентом'] },
              { id: 'multilang', label: 'Мультимовність', priceDelta: [80, 200], timelineDelta: [2, 7], deliverables: ['Інфраструктура i18n'] },
              { id: 'analytics', label: 'Події аналітики', priceDelta: [40, 120], timelineDelta: [1, 2], deliverables: ['Відстеження кастомних подій'] },
              { id: 'seo', label: 'SEO налаштування (базове)', priceDelta: [60, 150], timelineDelta: [1, 3], deliverables: ['Мета-теги та sitemap'] },
              { id: 'payments', label: 'Налаштування оплат', priceDelta: [120, 300], timelineDelta: [3, 7], deliverables: ['Інтеграція Stripe/PayPal'] },
              { id: 'pos', label: 'CRM/POS інтеграція', priceDelta: [150, 400], timelineDelta: [3, 10], deliverables: ['Синхронізація даних'] }
            ],
            more: [
              { id: 'admin', label: 'Адмін-панель (базова)', priceDelta: [250, 600], timelineDelta: [7, 21], deliverables: ['Кастомний дашборд'] },
              { id: 'notifications', label: 'Сповіщення (email/SMS)', priceDelta: [80, 250], timelineDelta: [2, 5], deliverables: ['Автоматичні сповіщення'] },
              { id: 'performance', label: 'Оптимізація швидкості', priceDelta: [60, 180], timelineDelta: [2, 4], deliverables: ['90+ Lighthouse score'] },
              { id: 'devops', label: 'DevOps hardening', priceDelta: [100, 300], timelineDelta: [3, 7], deliverables: ['CI/CD та моніторинг'] },
              { id: 'bi', label: 'BI дашборд (базовий)', priceDelta: [250, 700], timelineDelta: [10, 25], deliverables: ['Візуалізація даних'] },
              { id: 'migration', label: 'Міграція контенту', priceDelta: [60, 250], timelineDelta: [2, 7], deliverables: ['Імпорт старих даних'] },
              { id: 'booking', label: 'Бронювання', priceDelta: [120, 350], timelineDelta: [5, 12], deliverables: ['Система календаря'] },
              { id: 'roles', label: 'Ролі та права доступу', priceDelta: [120, 400], timelineDelta: [5, 14], deliverables: ['Розширений контроль доступу'] }
            ]
          }
        },
        {
          id: 'platform',
          label: 'WEEGO Platform',
          packages: [
            { id: 'setup', label: 'Platform Setup', priceRange: [500, 900], timelineRange: [1, 3], timelineUnit: 'weeks', deliverables: ['White-label тема', 'Деплой та середовища', 'Базові модулі активовані', 'Підтримка включена'] }
          ],
          options: {
            visible: [
              { id: 'cms', label: 'CMS / Редактор контенту', priceDelta: [100, 250], timelineDelta: [2, 5] },
              { id: 'multilang', label: 'Мультимовність', priceDelta: [80, 200], timelineDelta: [2, 7] },
              { id: 'analytics', label: 'Події аналітики', priceDelta: [40, 120], timelineDelta: [1, 2] },
              { id: 'seo', label: 'SEO налаштування (базове)', priceDelta: [60, 150], timelineDelta: [1, 3] },
              { id: 'payments', label: 'Налаштування оплат', priceDelta: [120, 300], timelineDelta: [3, 7] },
              { id: 'pos', label: 'CRM/POS інтеграція', priceDelta: [150, 400], timelineDelta: [3, 10] }
            ],
            more: [
              { id: 'admin', label: 'Адмін-панель (базова)', priceDelta: [250, 600], timelineDelta: [7, 21] },
              { id: 'notifications', label: 'Сповіщення (email/SMS)', priceDelta: [80, 250], timelineDelta: [2, 5] }
            ]
          }
        },
        {
          id: 'custom',
          label: 'Custom Build',
          packages: [
            { id: 'mvp', label: 'MVP', priceRange: [700, 1500], timelineRange: [2, 4], timelineUnit: 'weeks', deliverables: ['Основний функціонал', 'Базовий UI', 'Backend', 'Початковий запуск'] },
            { id: 'business', label: 'Business', priceRange: [1500, 3000], timelineRange: [4, 8], timelineUnit: 'weeks', deliverables: ['Повний набір функцій', 'Просунутий UI/UX', 'Масштабований Backend', 'Адмін-дашборд'] },
            { id: 'full', label: 'Full Enterprise', priceRange: [3000, 6000], timelineRange: [8, 16], timelineUnit: 'weeks', deliverables: ['Складна екосистема', 'Висока доступність', 'Кастомні інтеграції', 'Повна підтримка'] }
          ],
          options: {
            visible: [
              { id: 'cms', label: 'CMS / Редактор контенту', priceDelta: [100, 250], timelineDelta: [2, 5] },
              { id: 'multilang', label: 'Мультимовність', priceDelta: [80, 200], timelineDelta: [2, 7] },
              { id: 'analytics', label: 'Події аналітики', priceDelta: [40, 120], timelineDelta: [1, 2] },
              { id: 'seo', label: 'SEO налаштування (базове)', priceDelta: [60, 150], timelineDelta: [1, 3] },
              { id: 'payments', label: 'Налаштування оплат', priceDelta: [120, 300], timelineDelta: [3, 7] },
              { id: 'pos', label: 'CRM/POS інтеграція', priceDelta: [150, 400], timelineDelta: [3, 10] }
            ],
            more: [
              { id: 'admin', label: 'Адмін-панель (базова)', priceDelta: [250, 600], timelineDelta: [7, 21] },
              { id: 'notifications', label: 'Сповіщення (email/SMS)', priceDelta: [80, 250], timelineDelta: [2, 5] },
              { id: 'performance', label: 'Оптимізація швидкості', priceDelta: [60, 180], timelineDelta: [2, 4] },
              { id: 'devops', label: 'DevOps hardening', priceDelta: [100, 300], timelineDelta: [3, 7] },
              { id: 'bi', label: 'BI дашборд (базовий)', priceDelta: [250, 700], timelineDelta: [10, 25] },
              { id: 'migration', label: 'Міграція контенту', priceDelta: [60, 250], timelineDelta: [2, 7] },
              { id: 'booking', label: 'Бронювання', priceDelta: [120, 350], timelineDelta: [5, 12] },
              { id: 'roles', label: 'Ролі та права доступу', priceDelta: [120, 400], timelineDelta: [5, 14] }
            ]
          }
        }
      ],
      recommend: {
        label: 'Не впевнені? Рекомендуємо',
        questions: {
          q1: {
            text: 'Що вам потрібно найбільше?',
            options: [
              { label: 'Сайт', value: 'website' },
              { label: 'Система / адмінка', value: 'system' },
              { label: 'Інтеграції', value: 'integrations' },
              { label: 'Постійна підтримка', value: 'support' }
            ]
          },
          q2: {
            text: 'Ви хочете, щоб ми хостили та підтримували це?',
            options: [
              { label: 'Так', value: 'yes' },
              { label: 'Ні', value: 'no' }
            ]
          }
        }
      },
      result: {
        priceLabel: 'Орієнтовна ціна',
        timelineLabel: 'Терміни',
        deliverablesLabel: 'Що ви отримуєте',
        setupLabel: 'Setup',
        monthlyLabel: 'Щомісяця',
        disclaimer: 'Розрахунок є приблизним. Фінальний обсяг та ціна підтверджуються після короткого дзвінка.',
        cta: 'Надіслати запит',
        moreOptions: 'Більше опцій'
      },
      form: {
        name: 'Ім’я',
        contact: 'Telegram / Email',
        comment: 'Деталі проєкту (необов’язково)',
        submit: 'Надіслати запит',
        success: 'Дані передано. Ми зв’яжемося з вами найближчим часом.'
      }
    },
    designSystem: {
        heading: "Система",
        subheading: "Стандарти",
        typography: {
            title: "Типографія",
            primary: {
                name: "Archivo",
                usage: "Display / Заголовки",
                description: "Гротескний санс-сериф із варіативною вагою. Використовується для акцентів."
            },
            secondary: {
                name: "Inter",
                usage: "Body / Інтерфейс",
                description: "Оптимізовано для екранів. Нейтральний, об'єктивний, суто функціональний."
            }
        },
        standards: {
            title: "Методологія",
            items: [
                { title: "Atomic Design", desc: "Ми будуємо системи, а не сторінки. Кожен компонент — молекула.", code: "SYS_ATOMIC" },
                { title: "Швейцарська Сітка", desc: "Математична точність. 12-колонкова верстка з жорстким ритмом.", code: "SYS_GRID" },
                { title: "A11Y Core", desc: "Відповідність WCAG 2.1 не є опцією. Це базовий стандарт.", code: "SYS_ACCESS" },
                { title: "Dark Patterns", desc: "Нульова толерантність. Ми проектуємо для людей, а не маніпуляцій.", code: "SYS_ETHICS" }
            ]
        }
    },
    process: {
      heading: "СИСТЕМА ДОСТАВКИ",
      subheading: "END-TO-END МОЖЛИВОСТІ",
      footerQuote: "Ми не робимо сторінки. Ми створюємо системи, що працюють.",
      pipeline: {
        title: "ПАЙПЛАЙН ВИКОНАННЯ",
        steps: [
          { title: "ДЗВІНОК ТА БРИФ", desc: "визначення цілей, обсягу та метрик успіху" },
          { title: "ПРОТОТИП", desc: "вайрфрейми, логіка користувача та ядро системи" },
          { title: "ДИЗАЙН ТА РОЗРОБКА", desc: "візуальна айдентика та технічна збірка" },
          { title: "ЗАПУСК ТА ПІДТРИМКА", desc: "QA, розгортання та безперервний розвиток" }
        ]
      },
      modules: {
        title: "ТЕХНІЧНА СХЕМА",
        items: [
            {
                title: "ДИЗАЙН СИСТЕМА (VISUAL OS)",
                content: ["Типографія", "Сітка", "Токени", "Компоненти", "Моушн правила"]
            },
            {
                title: "ПРОДУКТ & WEB ENGINEERING",
                content: ["Frontend", "Backend", "CMS", "API", "Автоматизація", "Інтеграції"]
            },
            {
                title: "КОНТЕНТ & БРЕНД",
                content: ["Копірайтинг", "Арт-дирекшн", "Гайдлайни", "Ассети", "Пакування"]
            },
            {
                title: "РОЗГОРТАННЯ & ОПТИМІЗАЦІЯ",
                content: ["Продуктивність", "SEO", "Моніторинг", "A/B", "Аналітика"]
            }
        ]
      }
    },
    works: {
      heading: 'Останні Роботи',
      subheading: '[ВИБРАНІ ПРОЕКТИ 2025-2026]',
      viewAll: '',
      modalLaunch: 'Запустити Систему',
      items: [
        {
          id: 'w1',
          client: 'ARTFLANEUR',
          category: 'Арт-Тех Платформа',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1545989253-02cc26577f88?q=80&w=2000&auto=format&fit=crop',
          description: 'Революційна цифрова платформа, що з’єднує фізичні галереї з цифровими мандрівниками.',
          before: 'Фрагментована присутність галерей без єдиного каналу цифрових продажів.',
          done: ['Кастомний UI/UX', 'Архітектура платформи', 'Інтеграція партнерів'],
          result: 'Об’єднано 40+ галерей у єдиний високопродуктивний арт-маркетплейс.',
          capabilities: ['UX/UI Дизайн', 'Архітектура Платформи', 'Інтеграція Партнерів', 'Айдентика'],
          stack: ['Next.js', 'React', 'Mapbox', 'Vercel'],
          projectUrl: 'https://www.artflaneur.com.au/',
          caseStudyUrl: '#'
        },
        {
          id: 'w2',
          client: 'EPRIS MATERIA',
          category: 'Освітній Інтерфейс',
          year: '2024',
          image: 'https://raw.githubusercontent.com/weego-web/weego-web.github.io/refs/heads/main/img/epris.png',
          description: 'Імерсивний навчальний стенд естетичної декомпозиції.',
          before: 'Статичний навчальний контент з низьким рівнем залучення.',
          done: ['HUD інтерфейс', 'Візуалізація даних', 'Моушн дизайн'],
          result: 'Залучення студентів зросло на 300% завдяки інтерактивному HUD.',
          capabilities: ['HUD Інтерфейс', 'Візуалізація Даних', 'Моушн Дизайн', 'Креативний Кодинг'],
          stack: ['WebGL', 'Three.js', 'React', 'GLSL Shaders'],
          projectUrl: 'https://eprisj.github.io/',
          caseStudyUrl: '#'
        },
        {
          id: 'w3',
          client: 'HELP US HELP UA',
          category: 'Гуманітарна Платформа',
          year: '2024',
          image: 'https://raw.githubusercontent.com/weego-web/weego-web.github.io/refs/heads/main/img/helpusua.png',
          description: 'Критична цифрова інфраструктура для гуманітарної допомоги.',
          before: 'Ручна обробка донатів та повільне відстеження логістики.',
          done: ['Архітектура платформи', 'Системи донатів', 'Безпечні платежі'],
          result: 'Оброблено понад $1 млн донатів без жодних збоїв під час пікових навантажень.',
          capabilities: ['Архітектура Платформи', 'Платіжні Системи', 'Безпека', 'Глобальна Логістика'],
          stack: ['Next.js', 'Stripe API', 'React', 'Node.js'],
          projectUrl: 'https://helpushelpua.com/',
          caseStudyUrl: '#'
        }
      ]
    },
    faq: {
      heading: 'FAQ',
      items: [
        { q: 'Скільки часу займає проєкт?', a: 'Типові лендинги займають 2-3 тижні. Складні платформи — 2-4 місяці.' },
        { q: 'Яка ваша модель ціноутворення?', a: 'Ми працюємо за фіксованою ціною на основі обсягу робіт або за щомісячною підтримкою.' },
        { q: 'Чи надаєте ви підтримку?', a: 'Так, ми пропонуємо SLA-підтримку та пакети безперервного розвитку.' },
        { q: 'Що потрібно від мене для старту?', a: 'Чітка мета, існуючі активи бренду (якщо є) та 30-хвилинний дзвінок.' },
        { q: 'Чи працюєте ви зі стартапами?', a: 'Так, ми спеціалізуємося на створенні MVP та масштабуванні цифрових продуктів.' },
        { q: 'Чи входить SEO у вартість?', a: 'Базове технічне SEO входить у кожну розробку. Просунута стратегія — додаткова опція.' }
      ]
    },
    finalCta: {
      heading: 'Готові масштабуватися?',
      subheading: 'Отримайте точну оцінку або забронюйте дзвінок вже сьогодні.',
      ctaPrimary: 'Отримати оцінку',
      ctaSecondary: 'Забронювати дзвінок'
    },
    about: {
        heading: "Ми Не Для",
        subheading: "Всіх.",
        description: "Ми колектив цифрових аборигенів, дизайнерів та інженерів, одержимих межею можливого. Ми не робимо шаблони. Ми не робимо безпечно. Ми будуємо цифрові собори.",
        stats: [
            { label: 'EST.', value: '2024' },
            { label: 'ПРОЕКТИ', value: '11+' },
            { label: 'КЛІЄНТИ', value: '8+' },
            { label: 'ШТАБ', value: 'LVI' }
        ],
        manifesto: [
            "Ми віримо в тишу замість шуму.",
            "Функція - це найвища прикраса.",
            "Код - це поезія, дизайн - це закон.",
            "Якщо це не швидко, це зламано."
        ]
    },
    contact: {
      heading: "Розпочати",
      subheading: "Проект",
      desc: "Встановіть прямий зв'язок з ядром. Введіть параметри нижче.",
      placeholder: "> Ініціалізація послідовності проекту...\n> Визначення естетичних параметрів...\n> Запит на архітектурну консультацію...",
      button: "Транслювати Дані",
      processing: "Шифрування...",
      emailLabel: "ЗАХИЩЕНА_ПОШТА",
      locationLabel: "КООРДИНАТИ",
      aiTitle: "Відповідь Ядра // Бриф_v1.0",
      waiting: "Очікування Передачі...",
      sendButton: "Виконати Протокол"
    },
    footer: {
      rights: "ВСІ ПРАВА ЗАХИЩЕНО.",
      designedBy: "DESIGNED BY WEEGO"
    },
    legal: {
        imprint: {
            title: "ВИХІДНІ ДАНІ // IMPRINT",
            content: [
                "СУБ'ЄКТ: WEEGO CREATIVE STUDIO",
                "ЛОКАЦІЯ: ЛЬВІВ, УКРАЇНА",
                "КОНТАКТ: MUNISTER@OUTLOOK.COM",
                "ЮРИСДИКЦІЯ: УКРАЇНА",
                "ВІДПОВІДАЛЬНІСТЬ: КОМАНДА WEEGO STUDIO",
                "АВТОРСЬКЕ ПРАВО: © 2024-2026 WEEGO CREATIVE STUDIO. ВСІ ПРАВА ЗАХИЩЕНО."
            ]
        },
        privacy: {
            title: "ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ",
            content: [
                "1. ЗБІР ДАНИХ: Ми збираємо лише необхідні технічні дані для забезпечення стабільності та безпеки системи.",
                "2. COOKIES: Веб-сайт використовує сесійні токени для функціонування. Ми не використовуємо сторонні рекламні трекери.",
                "3. АНАЛІТИКА: Анонімізована телеметрія використовується виключно для покращення архітектури сайту.",
                "4. ЗОВНІШНІ СЕРВІСИ: Обробка даних може включати Vercel (інфраструктура) та Google Cloud (AI сервіси).",
                "5. ПРАВА КОРИСТУВАЧІВ: Ви маєте право запросити перегляд або видалення даних через офіційні канали зв'язку."
            ]
        },
        terms: {
            title: "УМОВИ КОРИСТУВАННЯ",
            content: [
                "1. ЗАГАЛЬНІ ПОЛОЖЕННЯ: Використовуючи цей інтерфейс, ви погоджуєтесь з цими умовами.",
                "2. ІНТЕЛЕКТУАЛЬНА ВЛАСНІСТЬ: Весь код, візуальні активи та методології дизайну є виключною власністю WEEGO CREATIVE STUDIO.",
                "3. ВІДПОВІДАЛЬНІСТЬ: Студія надає цей цифровий досвід «як є». Ми не несемо відповідальності за зовнішні посилання.",
                "4. ЗАКОНОДАВСТВО: Ці умови регулюються законодавством України.",
                "5. НЕСАНКЦІОНОВАНИЙ ДОСТУП: Будь-яка спроба порушення безпеки системи призведе до негайного блокування доступу."
            ]
        }
    }
  },
  it: {
    nav: [
      { label: 'Lavori', href: '#work' },
      { label: 'Servizi', href: '#services' },
      { label: 'Studio', href: '#studio' },
    ],
    hero: {
      title1: 'Andiamo',
      title2: 'Oltre',
      subtitle: 'Studio di design digitale che crea esperienze brutaliste per brand che osano essere diversi.',
      ctaPrimary: 'Ottieni un preventivo',
      ctaSecondary: 'Vedi i lavori'
    },
    trust: {
      stats: [
        { label: 'PROGETTI', value: '40+' },
        { label: 'ANNI', value: '5+' },
        { label: 'GEO', value: 'GLOBAL' },
        { label: 'NICCHIA', value: 'TECH/ART' }
      ],
      logos: ['ARTFLANEUR', 'EPRIS', 'HELPUSUA', 'AM PUBLISHING', 'TECHCORE', 'NEXUS']
    },
    marquee: ["ALTA CONVERSIONE", "DESIGN BRUTALISTA", "WEB ENGINEERING", "VELOCITÀ PRIMA DI TUTTO", "OTTIMIZZAZIONE SEO", "SISTEMI SCALABILI"],
    services: {
      heading: 'Servizi',
      subheading: '[COSA FACCIAMO]',
      routes: [
        {
          id: 'turnkey',
          title: 'Siti Chiavi in Mano',
          oneLiner: 'Presenza professionale in 3-7 giorni.',
          bestFor: [
            'Landing page e siti vetrina',
            'Startup che necessitano di velocità',
            'Budget ottimizzati (€300–€500)'
          ],
          priceBadge: 'da €300',
          cta: 'Configura',
          preset: { route: 'turnkey', package: 'standard' }
        },
        {
          id: 'platform',
          title: 'Piattaforma WEEGO',
          oneLiner: 'Il tuo ecosistema digitale, gestito da noi.',
          bestFor: [
            'Business in crescita',
            'Nessun mal di testa tecnico',
            'Supporto e aggiornamenti inclusi'
          ],
          priceBadge: '€400 + €40/mese',
          cta: 'Inizia',
          preset: { route: 'platform', package: 'standard' }
        },
        {
          id: 'custom',
          title: 'Sviluppo su Misura',
          oneLiner: 'Sistemi complessi per sfide uniche.',
          bestFor: [
            'E-commerce e Web App',
            'Integrazioni Backend/API',
            'Soluzioni Enterprise scalabili'
          ],
          cta: 'Calcola',
          preset: { route: 'custom', package: 'standard' }
        }
      ],
      capabilities: {
        heading: 'Inoltre possiamo aiutarti con',
        showAllLabel: 'Mostra tutte le capacità',
        items: [
          { id: 'web', label: 'Web Engineering' },
          { id: 'design', label: 'Brutalist Design' },
          { id: 'backend', label: 'Backend Systems' },
          { id: 'ecommerce', label: 'E-commerce' },
          { id: 'devops', label: 'DevOps & Cloud' },
          { id: 'integrations', label: 'Integrazioni API' },
          { id: 'audit', label: 'Audit & Redesign' },
          { id: 'support', label: 'Supporto SLA' }
        ]
      },
      industries: {
        heading: 'Settori (esperienza)',
        experienceLabel: 'Esperienza, non un modello unico per tutti.',
        items: [
          { id: 'horeca', label: 'HoReCa', preset: { route: 'custom', package: 'pro', options: ['booking', 'menu'] } },
          { id: 'tech', label: 'Tech & SaaS', preset: { route: 'custom', package: 'standard', options: ['api'] } },
          { id: 'art', label: 'Art & Culture', preset: { route: 'turnkey', package: 'pro', options: ['branding'] } }
        ]
      }
    },
    estimator: {
      heading: 'Calcolatore di Progetto',
      subheading: '[CALCOLO COSTI]',
      routes: [
        {
          id: 'turnkey',
          label: 'Siti Chiavi in Mano',
          packages: [
            { id: 'standard', label: 'Standard Turnkey', priceRange: [300, 500], timelineRange: [3, 7], timelineUnit: 'days', deliverables: ['Design Brutalista', 'Sviluppo Responsive', 'Base SEO', 'Modulo Contatti', 'Hosting Setup'] },
            { id: 'pro', label: 'Premium Turnkey', priceRange: [500, 800], timelineRange: [5, 10], timelineUnit: 'days', deliverables: ['Design Avanzato', 'Copywriting Base', 'Animazioni Motion', 'Integrazione Analytics'] }
          ],
          options: {
            visible: [
              { id: 'branding', label: 'Identità Visiva', priceDelta: [150, 400], timelineDelta: [2, 4] },
              { id: 'copy', label: 'Copywriting Prof.', priceDelta: [100, 300], timelineDelta: [2, 3] }
            ],
            more: [
              { id: 'multilang', label: 'Multilingua', priceDelta: [100, 250], timelineDelta: [1, 2] }
            ]
          }
        },
        {
          id: 'platform',
          label: 'Piattaforma WEEGO',
          packages: [
            { id: 'standard', label: 'Setup Piattaforma', priceRange: [400, 400], timelineRange: [1, 1], timelineUnit: 'weeks', deliverables: ['Core Platform Setup', 'Configurazione Dominio', 'Formazione Team', 'Monitoraggio 24/7', 'Aggiornamenti Mensili'] }
          ],
          options: {
            visible: [
              { id: 'customization', label: 'Personalizzazione UI', priceDelta: [200, 500], timelineDelta: [1, 2] }
            ],
            more: []
          }
        },
        {
          id: 'custom',
          label: 'Sviluppo su Misura',
          packages: [
            { id: 'standard', label: 'Business Custom', priceRange: [1000, 2500], timelineRange: [3, 6], timelineUnit: 'weeks', deliverables: ['Architettura Scalabile', 'Integrazione CMS', 'Dashboard Admin', 'Test di Carico'] },
            { id: 'pro', label: 'Enterprise / HoReCa', priceRange: [2500, 6000], timelineRange: [6, 12], timelineUnit: 'weeks', deliverables: ['Sistemi Complessi', 'Integrazioni ERP/CRM', 'Soluzioni Multicanale', 'Supporto Prioritario'] }
          ],
          options: {
            visible: [
              { id: 'api', label: 'Sviluppo API/Backend', priceDelta: [500, 1500], timelineDelta: [2, 4] },
              { id: 'ecommerce', label: 'Motore E-commerce', priceDelta: [600, 2000], timelineDelta: [3, 5] }
            ],
            more: [
              { id: 'booking', label: 'Sistema Prenotazioni', priceDelta: [400, 1200], timelineDelta: [2, 4] },
              { id: 'menu', label: 'Menu Digitale Dinamico', priceDelta: [200, 600], timelineDelta: [1, 2] }
            ]
          }
        }
      ],
      recommend: {
        label: 'Non sei sicuro? Consigliami',
        questions: {
          q1: {
            text: 'Qual è il tuo obiettivo principale?',
            options: [
              { label: 'Lancio veloce (Sito)', value: 'fast' },
              { label: 'Soluzione gestita (Platform)', value: 'managed' },
              { label: 'Sistema complesso (Custom)', value: 'complex' }
            ]
          },
          q2: {
            text: 'Qual è il tuo budget indicativo?',
            options: [
              { label: '€300 - €800', value: 'low' },
              { label: '€800 - €2500', value: 'mid' },
              { label: '€2500+', value: 'high' }
            ]
          }
        }
      },
      result: {
        priceLabel: 'Prezzo stimato',
        timelineLabel: 'Timeline',
        deliverablesLabel: 'Cosa ottieni',
        setupLabel: 'Setup',
        monthlyLabel: 'Mensile',
        disclaimer: 'La stima è indicativa. L\'ambito finale e il prezzo vengono confermati dopo una breve chiamata.',
        cta: 'Invia Richiesta',
        moreOptions: 'Altre opzioni'
      },
      form: {
        name: 'Nome',
        contact: 'Telegram / Email',
        comment: 'Dettagli progetto (opzionale)',
        submit: 'Invia Richiesta',
        success: 'Dati ricevuti. Ti contatteremo a breve.'
      }
    },
    designSystem: {
        heading: "Sistema",
        subheading: "Standard",
        typography: {
            title: "Tipografia",
            primary: {
                name: "Archivo",
                usage: "Display / Titoli",
                description: "Sans-serif grottesco con varianza di peso ad alto impatto. Usato per gridare."
            },
            secondary: {
                name: "Inter",
                usage: "Body / UI",
                description: "Ottimizzato per la leggibilità su schermo. Neutro, oggettivo, puramente funzionale."
            }
        },
        standards: {
            title: "Metodologia",
            items: [
                { title: "Atomic Design", desc: "Costruiamo sistemi, non pagine. Ogni componente è molecolare.", code: "SYS_ATOMIC" },
                { title: "Griglia Svizzera", desc: "Precisione matematica. Layout a 12 colonne con ritmo verticale rigido.", code: "SYS_GRID" },
                { title: "A11Y Core", desc: "La conformità WCAG 2.1 non è facoltativa. È lo standard di base.", code: "SYS_ACCESS" },
                { title: "Dark Patterns", desc: "Tolleranza zero. Progettiamo per l'agenzia dell'utente, non per la manipolazione.", code: "SYS_ETHICS" }
            ]
        }
    },
    process: {
      heading: "DELIVERY SYSTEM",
      subheading: "CAPACITÀ END-TO-END",
      footerQuote: "Non consegniamo pagine. Consegniamo sistemi che funzionano.",
      pipeline: {
        title: "PIPELINE DI ESECUZIONE",
        steps: [
          { title: "DISCOVERY & AUDIT", desc: "scopo, rischi, chiarezza, vincoli" },
          { title: "BRAND & IDENTITY", desc: "naming, linguaggio visivo, sistemi" },
          { title: "EXPERIENCE DESIGN", desc: "UX/UI, logica motion, prototipi" },
          { title: "ENGINEERING BUILD", desc: "web/app, integrazioni, performance" },
          { title: "LAUNCH & HARDENING", desc: "QA, analitica, SEO, affidabilità" },
          { title: "EVOLVE & SUPPORT", desc: "iterazioni, nuovi moduli, scaling" }
        ]
      },
      modules: {
        title: "SCHEMA TECNICO",
        items: [
            {
                title: "DESIGN SYSTEM (VISUAL OS)",
                content: ["Tipografia", "Griglia", "Token", "Componenti", "Regole Motion"]
            },
            {
                title: "PRODUCT & WEB ENGINEERING",
                content: ["Frontend", "Backend", "CMS", "API", "Automazioni", "Integrazioni"]
            },
            {
                title: "CONTENT & BRAND EXECUTION",
                content: ["Copy", "Art direction", "Linee guida", "Asset", "Packaging"]
            },
            {
                title: "DEPLOYMENT & OPTIMIZATION",
                content: ["Performance", "SEO", "Monitoraggio", "A/B", "Analitica"]
            }
        ]
      }
    },
    works: {
      heading: 'Lavori Recenti',
      subheading: '[PROGETTI SELEZIONATI 2025-2026]',
      viewAll: '',
      modalLaunch: 'Avvia Sistema',
      items: [
        {
          id: 'w1',
          client: 'ARTFLANEUR',
          category: 'Piattaforma Art Tech',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1545989253-02cc26577f88?q=80&w=2000&auto=format&fit=crop',
          description: 'Una piattaforma digitale rivoluzionaria che connette gallerie fisiche con vagabondi digitali.',
          before: 'Presenza frammentata delle gallerie senza un unico canale di vendita digitale.',
          done: ['UI/UX Personalizzato', 'Architettura Piattaforma', 'Integrazione Partner'],
          result: 'Unite oltre 40 gallerie in un unico marketplace d\'arte ad alte prestazioni.',
          capabilities: ['UX/UI Design', 'Architettura Piattaforma', 'Integrazione Partner', 'Identità Brand'],
          stack: ['Next.js', 'React', 'Mapbox', 'Vercel'],
          projectUrl: 'https://www.artflaneur.com.au/',
          caseStudyUrl: '#'
        },
        {
          id: 'w2',
          client: 'EPRIS MATERIA',
          category: 'Interfaccia Educativa',
          year: '2024',
          image: 'https://raw.githubusercontent.com/weego-web/weego-web.github.io/refs/heads/main/img/epris.png',
          description: 'Uno stand educativo immersivo per la decomposizione estetica.',
          before: 'Contenuti educativi statici con basso livello di coinvolgimento.',
          done: ['Interfaccia HUD', 'Visualizzazione Dati', 'Motion Design'],
          result: 'Coinvolgimento degli studenti aumentato del 300% grazie all\'HUD interattivo.',
          capabilities: ['Interfaccia HUD', 'Visualizzazione Dati', 'Motion Design', 'Creative Coding'],
          stack: ['WebGL', 'Three.js', 'React', 'GLSL Shaders'],
          projectUrl: 'https://eprisj.github.io/',
          caseStudyUrl: '#'
        },
        {
          id: 'w3',
          client: 'HELP US HELP UA',
          category: 'Piattaforma Umanitaria',
          year: '2024',
          image: 'https://raw.githubusercontent.com/weego-web/weego-web.github.io/refs/heads/main/img/helpusua.png',
          description: 'Un\'infrastruttura digitale critica per gli aiuti umanitari.',
          before: 'Elaborazione manuale delle donazioni e tracciamento logistico lento.',
          done: ['Architettura Piattaforma', 'Sistemi di Donazione', 'Pagamenti Sicuri'],
          result: 'Elaborati oltre 1 milione di dollari in donazioni senza interruzioni durante i picchi.',
          capabilities: ['Architettura Piattaforma', 'Sistemi di Donazione', 'Pagamenti Sicuri', 'Logistica Globale'],
          stack: ['Next.js', 'Stripe API', 'React', 'Node.js'],
          projectUrl: 'https://helpushelpua.com/',
          caseStudyUrl: '#'
        }
      ]
    },
    faq: {
      heading: 'FAQ',
      items: [
        { q: 'Quanto tempo richiede un progetto?', a: 'Le landing page tipiche richiedono 2-3 settimane. Le piattaforme complesse 2-4 mesi.' },
        { q: 'Qual è il vostro modello di prezzo?', a: 'Lavoriamo a prezzo fisso basato sullo scopo o con un canone mensile di supporto.' },
        { q: 'Fornite supporto post-lancio?', a: 'Sì, offriamo supporto SLA e pacchetti di sviluppo continuo.' },
        { q: 'Cosa vi serve per iniziare?', a: 'Un obiettivo chiaro, eventuali asset esistenti e una chiamata di 30 minuti.' },
        { q: 'Lavorate con le startup?', a: 'Sì, siamo specializzati nel costruire MVP e scalare prodotti digitali.' },
        { q: 'La SEO è inclusa?', a: 'La SEO tecnica di base è inclusa. La strategia avanzata è un addon.' }
      ]
    },
    finalCta: {
      heading: 'Pronto a scalare?',
      subheading: 'Ottieni un preventivo accurato o prenota una chiamata oggi stesso.',
      ctaPrimary: 'Ottieni un preventivo',
      ctaSecondary: 'Prenota una chiamata'
    },
    about: {
        heading: "Non Siamo",
        subheading: "Per Tutti.",
        description: "Siamo un collettivo di nativi digitali, designer e ingegneri ossessionati dal limite. Non facciamo template. Non giochiamo sul sicuro. Costruiamo cattedrali digitali.",
        stats: [
            { label: 'EST.', value: '2024' },
            { label: 'PROGETTI', value: '11+' },
            { label: 'CLIENTS', value: '8+' },
            { label: 'HQ', value: 'LVI' }
        ],
        manifesto: [
            "Crediamo nel silenzio sopra il rumore.",
            "La funzione è la decorazione suprema.",
            "Il codice è poesia, il design è legge.",
            "Se non è veloce, è rotto."
        ]
    },
    contact: {
      heading: "Avvia",
      subheading: "Progetto",
      desc: "Stabilisci una linea diretta con il core. Inserisci i tuoi parametri qui sotto.",
      placeholder: "> Inizializzazione sequenza progetto...\n> Definizione parametri estetici...\n> Richiesta consulenza architettonica...",
      button: "Trasmetti Dati",
      processing: "Criptazione...",
      emailLabel: "SECURE_MAIL",
      locationLabel: "COORDINATE",
      aiTitle: "Risposta Core // Brief_v1.0",
      waiting: "In attesa di trasmissione...",
      sendButton: "Esegui Protocollo"
    },
    footer: {
      rights: "TUTTI I DIRITTI RISERVATI.",
      designedBy: "DESIGNED BY WEEGO"
    },
    legal: {
        imprint: {
            title: "DATI AZIENDALI // IMPRINT",
            content: [
                "ENTITÀ: WEEGO CREATIVE STUDIO",
                "SEDE: LEOPOLI, UCRAINA",
                "CONTATTO: MUNISTER@OUTLOOK.COM",
                "GIURISDIZIONE: UCRAINA",
                "RESPONSABILITÀ CONTENUTO: TEAM WEEGO STUDIO",
                "COPYRIGHT: © 2024-2026 WEEGO CREATIVE STUDIO. TUTTI I DIRITTI RISERVATI."
            ]
        },
        privacy: {
            title: "PRIVACY POLICY",
            content: [
                "1. RACCOLTA DATI: Raccogliamo solo dati tecnici minimi necessari per la stabilità del sistema e il monitoraggio della sicurezza.",
                "2. COOKIES: Questo sito web utilizza token di sessione essenziali per la funzionalità. Non utilizziamo cookie di tracciamento o pubblicitari di terze parti.",
                "3. ANALITICA: La telemetria anonimizzata viene utilizzata esclusivamente per migliorare l'architettura del sito.",
                "4. SERVIZI ESTERNI: L'elaborazione dei dati può coinvolgere Vercel (Infrastruktur) e Google Cloud (Servizi AI).",
                "5. DIRITTI DELL'UTENTE: Gli utenti possono richiedere la revisione o la cancellazione dei dati tramite i canali di contatto ufficiali."
            ]
        },
        terms: {
            title: "TERMINI DI SERVIZIO",
            content: [
                "1. GENERALE: Accedendo a questa interfaccia, accetti questi termini.",
                "2. PROPRIETÀ INTELLETTUALE: Tutto il codice, le risorse visive e le metodologie di progettazione sono proprietà esclusiva di WEEGO CREATIVE STUDIO.",
                "3. RESPONSABILITÀ: Lo studio fornisce questa esperienza digitale 'così com'è'. Non accettiamo alcuna responsabilità per link esterni o contenuti di terze parti.",
                "4. LEGGE APPLICABILE: Questi termini sono regolati dalle leggi dell'Ucraina.",
                "5. ACCESSO NON AUTORIZZATO: Qualsiasi tentativo di violare la sicurezza del sistema comporterà l'immediata cessazione dell'accesso."
            ]
        }
    }
  },
  de: {
    nav: [
      { label: 'Arbeiten', href: '#work' },
      { label: 'Leistungen', href: '#services' },
      { label: 'Studio', href: '#studio' },
    ],
    hero: {
      title1: 'Wir Gehen',
      title2: 'Weiter',
      subtitle: 'Digitales Designstudio für brutalistische Erlebnisse und Marken, die anders sein wollen.',
      ctaPrimary: 'Angebot anfordern',
      ctaSecondary: 'Arbeiten ansehen'
    },
    trust: {
      stats: [
        { label: 'PROJEKTE', value: '40+' },
        { label: 'JAHRE', value: '5+' },
        { label: 'GEO', value: 'GLOBAL' },
        { label: 'NISCHE', value: 'TECH/ART' }
      ],
      logos: ['ARTFLANEUR', 'EPRIS', 'HELPUSUA', 'AM PUBLISHING', 'TECHCORE', 'NEXUS']
    },
    marquee: ["HOHE KONVERSION", "BRUTALIST DESIGN", "WEB ENGINEERING", "SPEED FIRST", "SEO OPTIMIERUNG", "SKALIERBARE SYSTEME"],
    services: {
      heading: 'Leistungen',
      subheading: '[WAS WIR TUN]',
      routes: [
        {
          id: 'turnkey',
          title: 'Schlüsselfertige Websites',
          oneLiner: 'Professionelle Präsenz in 3-7 Tagen.',
          bestFor: [
            'Landingpages und Visitenkarten',
            'Startups, die Geschwindigkeit brauchen',
            'Optimierte Budgets (€300–€500)'
          ],
          priceBadge: 'ab €300',
          cta: 'Konfigurieren',
          preset: { route: 'turnkey', package: 'standard' }
        },
        {
          id: 'platform',
          title: 'WEEGO Plattform',
          oneLiner: 'Ihr digitales Ökosystem, von uns verwaltet.',
          bestFor: [
            'Wachsende Unternehmen',
            'Keine technischen Kopfschmerzen',
            'Support und Updates inklusive'
          ],
          priceBadge: '€400 + €40/Monat',
          cta: 'Starten',
          preset: { route: 'platform', package: 'standard' }
        },
        {
          id: 'custom',
          title: 'Individuelle Entwicklung',
          oneLiner: 'Komplexe Systeme für einzigartige Herausforderungen.',
          bestFor: [
            'E-Commerce und Web-Apps',
            'Backend/API Integrationen',
            'Skalierbare Enterprise-Lösungen'
          ],
          cta: 'Berechnen',
          preset: { route: 'custom', package: 'standard' }
        }
      ],
      capabilities: {
        heading: 'Außerdem helfen wir bei',
        showAllLabel: 'Alle Fähigkeiten anzeigen',
        items: [
          { id: 'web', label: 'Web Engineering' },
          { id: 'design', label: 'Brutalist Design' },
          { id: 'backend', label: 'Backend Systems' },
          { id: 'ecommerce', label: 'E-Commerce' },
          { id: 'devops', label: 'DevOps & Cloud' },
          { id: 'integrations', label: 'API Integrationen' },
          { id: 'audit', label: 'Audit & Redesign' },
          { id: 'support', label: 'SLA Support' }
        ]
      },
      industries: {
        heading: 'Branchen (Erfahrung)',
        experienceLabel: 'Erfahrung, keine Einheitslösung.',
        items: [
          { id: 'horeca', label: 'HoReCa', preset: { route: 'custom', package: 'pro', options: ['booking', 'menu'] } },
          { id: 'tech', label: 'Tech & SaaS', preset: { route: 'custom', package: 'standard', options: ['api'] } },
          { id: 'art', label: 'Art & Culture', preset: { route: 'turnkey', package: 'pro', options: ['branding'] } }
        ]
      }
    },
    estimator: {
      heading: 'Kostenschätzer',
      subheading: '[KOSTENBERECHNUNG]',
      routes: [
        {
          id: 'turnkey',
          label: 'Schlüsselfertige Websites',
          packages: [
            { id: 'standard', label: 'Standard Turnkey', priceRange: [300, 500], timelineRange: [3, 7], timelineUnit: 'days', deliverables: ['Brutalist Design', 'Responsive Build', 'SEO Basis', 'Kontaktformular', 'Hosting Setup'] },
            { id: 'pro', label: 'Premium Turnkey', priceRange: [500, 800], timelineRange: [5, 10], timelineUnit: 'days', deliverables: ['Advanced Design', 'Basis Copywriting', 'Motion Animationen', 'Analytics Integration'] }
          ],
          options: {
            visible: [
              { id: 'branding', label: 'Visuelle Identität', priceDelta: [150, 400], timelineDelta: [2, 4] },
              { id: 'copy', label: 'Prof. Copywriting', priceDelta: [100, 300], timelineDelta: [2, 3] }
            ],
            more: [
              { id: 'multilang', label: 'Mehrsprachigkeit', priceDelta: [100, 250], timelineDelta: [1, 2] }
            ]
          }
        },
        {
          id: 'platform',
          label: 'WEEGO Plattform',
          packages: [
            { id: 'standard', label: 'Plattform Setup', priceRange: [400, 400], timelineRange: [1, 1], timelineUnit: 'weeks', deliverables: ['Core Plattform Setup', 'Domain Konfiguration', 'Team Schulung', '24/7 Monitoring', 'Monatliche Updates'] }
          ],
          options: {
            visible: [
              { id: 'customization', label: 'UI Anpassung', priceDelta: [200, 500], timelineDelta: [1, 2] }
            ],
            more: []
          }
        },
        {
          id: 'custom',
          label: 'Individuelle Entwicklung',
          packages: [
            { id: 'standard', label: 'Business Custom', priceRange: [1000, 2500], timelineRange: [3, 6], timelineUnit: 'weeks', deliverables: ['Skalierbare Architektur', 'CMS Integration', 'Admin Dashboard', 'Lasttests'] },
            { id: 'pro', label: 'Enterprise / HoReCa', priceRange: [2500, 6000], timelineRange: [6, 12], timelineUnit: 'weeks', deliverables: ['Komplexe Systeme', 'ERP/CRM Integrationen', 'Multichannel Lösungen', 'Priorisierter Support'] }
          ],
          options: {
            visible: [
              { id: 'api', label: 'API/Backend Entwicklung', priceDelta: [500, 1500], timelineDelta: [2, 4] },
              { id: 'ecommerce', label: 'E-Commerce Engine', priceDelta: [600, 2000], timelineDelta: [3, 5] }
            ],
            more: [
              { id: 'booking', label: 'Buchungssystem', priceDelta: [400, 1200], timelineDelta: [2, 4] },
              { id: 'menu', label: 'Dynamisches Digitales Menü', priceDelta: [200, 600], timelineDelta: [1, 2] }
            ]
          }
        }
      ],
      recommend: {
        label: 'Empfehlung',
        questions: {
          q1: {
            text: 'Was ist Ihr Hauptziel?',
            options: [
              { label: 'Schneller Start (Website)', value: 'fast' },
              { label: 'Verwaltete Lösung (Plattform)', value: 'managed' },
              { label: 'Komplexes System (Custom)', value: 'complex' }
            ]
          },
          q2: {
            text: 'Wie hoch ist Ihr ungefähres Budget?',
            options: [
              { label: '€300 - €800', value: 'low' },
              { label: '€800 - €2500', value: 'mid' },
              { label: '€2500+', value: 'high' }
            ]
          }
        }
      },
      result: {
        priceLabel: 'Geschätzter Preis',
        timelineLabel: 'Zeitrahmen',
        deliverablesLabel: 'Was Sie erhalten',
        setupLabel: 'Setup-Gebühr',
        monthlyLabel: 'Monatliche Gebühr',
        disclaimer: 'Die Schätzung ist unverbindlich. Der endgültige Umfang und Preis werden nach einem kurzen Gespräch bestätigt.',
        cta: 'Anfrage senden',
        moreOptions: 'Mehr Optionen anzeigen'
      },
      form: {
        name: 'Name',
        contact: 'Telegram / Email',
        comment: 'Projektdetails (optional)',
        submit: 'Anfrage senden',
        success: 'Daten empfangen. Wir melden uns in Kürze.'
      }
    },
    designSystem: {
        heading: "System",
        subheading: "Standards",
        typography: {
            title: "Typografie",
            primary: {
                name: "Archivo",
                usage: "Display / Überschriften",
                description: "Groteske Sans-Serif mit hoher Gewichtsvarianz. Wird zum Schreien verwendet."
            },
            secondary: {
                name: "Inter",
                usage: "Body / UI",
                description: "Optimiert für Bildschirmlesbarkeit. Neutral, objektiv, rein funktional."
            }
        },
        standards: {
            title: "Methodik",
            items: [
                { title: "Atomic Design", desc: "Wir bauen Systeme, keine Seiten. Jede Komponente ist molekular.", code: "SYS_ATOMIC" },
                { title: "Schweizer Raster", desc: "Mathematische Präzision. 12-Spalten-Layouts mit starrem vertikalen Rhythmus.", code: "SYS_GRID" },
                { title: "A11Y Core", desc: "WCAG 2.1-Konformität ist nicht optional. Es ist der Standard.", code: "SYS_ACCESS" },
                { title: "Dark Patterns", desc: "Null Toleranz. Wir gestalten für die Nutzer, nicht zur Manipulation.", code: "SYS_ETHICS" }
            ]
        }
    },
    process: {
      heading: "LIEFER SYSTEM",
      subheading: "END-TO-END FÄHIGKEITEN",
      footerQuote: "Wir liefern keine Seiten. Wir liefern Systeme, die funktionieren.",
      pipeline: {
        title: "AUSFÜHRUNGSPIPELINE",
        steps: [
          { title: "DISCOVERY & AUDIT", desc: "Umfang, Risiken, Klarheit, Einschränkungen" },
          { title: "BRAND & IDENTITY", desc: "Naming, Bildsprache, Systeme" },
          { title: "EXPERIENCE DESIGN", desc: "UX/UI, Motion-Logik, Prototypen" },
          { title: "ENGINEERING BUILD", desc: "Web/Apps, Integrationen, Leistung" },
          { title: "LAUNCH & HARDENING", desc: "QA, Analytik, SEO, Zuverlässigkeit" },
          { title: "EVOLVE & SUPPORT", desc: "Iterationen, neue Module, Skalierung" }
        ]
      },
      modules: {
        title: "TECHNISCHES SCHEMA",
        items: [
            {
                title: "DESIGN SYSTEM (VISUAL OS)",
                content: ["Typografie", "Raster", "Tokens", "Komponenten", "Motion-Regeln"]
            },
            {
                title: "PRODUKT & WEB ENGINEERING",
                content: ["Frontend", "Backend", "CMS", "APIs", "Automatisierungen", "Integrationen"]
            },
            {
                title: "INHALT & MARKENAUSFÜHRUNG",
                content: ["Text", "Art Direction", "Guidelines", "Assets", "Verpackung"]
            },
            {
                title: "DEPLOYMENT & OPTIMIERUNG",
                content: ["Leistung", "SEO", "Monitoring", "A/B", "Analytik"]
            }
        ]
      }
    },
    works: {
      heading: 'Aktuelle Arbeiten',
      subheading: '[AUSGEWÄHLTE PROJEKTE 2025-2026]',
      viewAll: '',
      modalLaunch: 'System Starten',
      items: [
        {
          id: 'w1',
          client: 'ARTFLANEUR',
          category: 'Art Tech Plattform',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1545989253-02cc26577f88?q=80&w=2000&auto=format&fit=crop',
          description: 'Eine revolutionäre digitale Plattform, die physische Galerien mit digitalen Wanderern verbindet.',
          before: 'Fragmentierte Präsenz von Galerien ohne einheitlichen digitalen Verkaufskanal.',
          done: ['Custom UI/UX', 'Plattformarchitektur', 'Partnerintegration'],
          result: 'Über 40 Galerien in einem einzigen Hochleistungs-Kunstmarktplatz vereint.',
          capabilities: ['UX/UI Design', 'Plattformarchitektur', 'Partnerintegration', 'Markenidentität'],
          stack: ['Next.js', 'React', 'Mapbox', 'Vercel'],
          projectUrl: 'https://www.artflaneur.com.au/',
          caseStudyUrl: '#'
        },
        {
          id: 'w2',
          client: 'EPRIS MATERIA',
          category: 'Bildungsschnittstelle',
          year: '2024',
          image: 'https://raw.githubusercontent.com/weego-web/weego-web.github.io/refs/heads/main/img/epris.png',
          description: 'Ein immersiver Bildungsstand zur ästhetischen Dekonstruktion.',
          before: 'Statischer Bildungsinhalt mit geringem Engagement.',
          done: ['HUD Interface', 'Datenvisualisierung', 'Motion Design'],
          result: 'Studenten-Engagement um 300% gesteigert dank interaktivem HUD.',
          capabilities: ['HUD Interface', 'Echtzeit-Datenviz', 'Motion Design', 'Creative Coding'],
          stack: ['WebGL', 'Three.js', 'React', 'GLSL Shaders'],
          projectUrl: 'https://eprisj.github.io/',
          caseStudyUrl: '#'
        },
        {
          id: 'w3',
          client: 'HELP US HELP UA',
          category: 'Humanitäre Plattform',
          year: '2024',
          image: 'https://raw.githubusercontent.com/weego-web/weego-web.github.io/refs/heads/main/img/helpusua.png',
          description: 'Kritische digitale Infrastruktur für humanitäre Hilfe.',
          before: 'Manuelle Spendenverarbeitung und langsames Logistik-Tracking.',
          done: ['Plattformarchitektur', 'Spendensysteme', 'Sichere Zahlungen'],
          result: 'Über 1 Mio. $ an Spenden ohne Ausfälle während der Spitzenzeiten verarbeitet.',
          capabilities: ['Plattformarchitektur', 'Spendensysteme', 'Sichere Zahlungen', 'Globale Logistik'],
          stack: ['Next.js', 'Stripe API', 'React', 'Node.js'],
          projectUrl: 'https://helpushelpua.com/',
          caseStudyUrl: '#'
        }
      ]
    },
    faq: {
      heading: 'FAQ',
      items: [
        { q: 'Wie lange dauert ein Projekt?', a: 'Typische Landing Pages dauern 2-3 Wochen. Komplexe Plattformen 2-4 Monate.' },
        { q: 'Wie sieht Ihr Preismodell aus?', a: 'Wir arbeiten zum Festpreis basierend auf dem Umfang oder mit monatlichem Support.' },
        { q: 'Bieten Sie Support nach dem Launch?', a: 'Ja, wir bieten SLA-Support und Pakete für die kontinuierliche Entwicklung an.' },
        { q: 'Was benötigen Sie für den Start?', a: 'Ein klares Ziel, vorhandene Marken-Assets und einen 30-minütigen Call.' },
        { q: 'Arbeiten Sie mit Startups?', a: 'Ja, wir sind darauf spezialisiert, MVPs zu bauen und digitale Produkte zu skalieren.' },
        { q: 'Ist SEO inklusive?', a: 'Basis-Technik-SEO ist bei jeder Entwicklung dabei. Fortgeschrittene Strategie ist ein Addon.' }
      ]
    },
    finalCta: {
      heading: 'Bereit zu skalieren?',
      subheading: 'Holen Sie sich heute eine genaue Schätzung oder buchen Sie einen Call.',
      ctaPrimary: 'Schätzung anfordern',
      ctaSecondary: 'Call buchen'
    },
    about: {
        heading: "Wir Sind Nicht",
        subheading: "Für Jeden.",
        description: "Wir sind ein Kollektiv digitaler Ureinwohner, Designer und Ingenieure, besessen von der Grenze des Machbaren. Wir machen keine Vorlagen. Wir spielen nicht sicher. Wir bauen digitale Kathedralen.",
        stats: [
            { label: 'EST.', value: '2024' },
            { label: 'PROJEKTE', value: '11+' },
            { label: 'KUNDEN', value: '8+' },
            { label: 'HQ', value: 'LVI' }
        ],
        manifesto: [
            "Wir glauben an Stille statt Lärm.",
            "Funktion ist die ultimative Dekoration.",
            "Code ist Poesie, Design ist Gesetz.",
            "Wenn es nicht schnell ist, ist es kaputt."
        ]
    },
    contact: {
      heading: "Projekt",
      subheading: "Starten",
      desc: "Stellen Sie eine direkte Verbindung zum Kern her. Geben Sie Ihre Parameter unten ein.",
      placeholder: "> Projektsequenz initialisieren...\n> Ästhetische Parameter definieren...\n> Architekturanfrage...",
      button: "Daten Senden",
      processing: "Verschlüsselung...",
      emailLabel: "SICHERE_MAIL",
      locationLabel: "KOORDINATEN",
      aiTitle: "Kernantwort // Briefing_v1.0",
      waiting: "Warte auf Übertragung...",
      sendButton: "Protokoll Ausführen"
    },
    footer: {
      rights: "ALLE RECHTE VORBEHALTEN.",
      designedBy: "DESIGNED BY WEEGO"
    },
    legal: {
        imprint: {
            title: "IMPRESSUM // DATEN",
            content: [
                "GESELLSCHAFT: WEEGO CREATIVE STUDIO",
                "STANDORT: LVIW, UKRAINE",
                "KONTAKT: MUNISTER@OUTLOOK.COM",
                "GERICHTSSTAND: UKRAINE",
                "VERANTWORTLICH: WEEGO STUDIO TEAM",
                "COPYRIGHT: © 2024-2026 WEEGO CREATIVE STUDIO. ALLE RECHTE VORBEHALTEN."
            ]
        },
        privacy: {
            title: "DATENSCHUTZRICHTLINIE",
            content: [
                "1. DATENERFASSUNG: Wir sammeln nur minimale technische Daten, die für die Systemstabilität und Sicherheitsüberwachung erforderlich sind.",
                "2. COOKIES: Diese Website verwendet wesentliche Session-Token für die Funktionalität. Wir verwenden keine Tracking- oder Werbe-Cookies von Drittanbietern.",
                "3. ANALYTIK: Anonymisierte Telemetrie wird ausschließlich zur Verbesserung der Website-Architektur verwendet.",
                "4. EXTERNE DIENSTE: Die Datenverarbeitung kann Vercel (Infrastruktur) und Google Cloud (AI-Dienste) umfassen.",
                "5. BENUTZERRECHTE: Benutzer können die Überprüfung oder Löschung von Daten über die offiziellen Kontaktkanäle anfordern."
            ]
        },
        terms: {
            title: "NUTZUNGSBEDINGUNGEN",
            content: [
                "1. ALLGEMEINES: Durch den Zugriff auf diese Schnittstelle erklären Sie sich mit diesen Bedingungen einverstanden.",
                "2. GEISTIGES EIGENTUM: Alle Codes, visuellen Assets und Designmethoden sind das ausschließliche Eigentum von WEEGO CREATIVE STUDIO.",
                "3. HAFTUNG: Das Studio stellt dieses digitale Erlebnis 'wie besehen' zur Verfügung. Wir übernehmen keine Haftung für externe Links oder Inhalte Dritter.",
                "4. ANWENDBARES RECHT: Diese Bedingungen unterliegen den Gesetzen der Ukraine.",
                "5. UNBEFUGTER ZUGRIFF: Jeder Versuch, die Systemsicherheit zu verletzen, führt zur sofortigen Sperrung des Zugriffs."
            ]
        }
    }
  }
};
