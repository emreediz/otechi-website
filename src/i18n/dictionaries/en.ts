import type { Dictionary } from "./tr";

// Natural, professional English — not a word-for-word translation of tr.ts.
// Brand names ("Otechi", "Ole", "Namaz Motivasyonu") are injected by components.

export const en: Dictionary = {
  common: {
    comingSoon: "Coming soon",
    learnMore: "Learn more",
    newTab: "(opens in a new tab)",
    draftNotice: "This text is a draft and will be updated before launch.",
    cta: {
      kicker: "Have an idea?",
      title: "Let's build it together.",
    },
  },

  nav: {
    skipToContent: "Skip to content",
    home: "Home",
    products: "Products",
    about: "About",
    contact: "Contact",
    cta: "Explore products",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    turkish: "Turkish",
    english: "English",
    mainNav: "Main menu",
    menu: "Menu",
    close: "Close",
  },

  footer: {
    tagline: "A software & digital product studio.",
    productsTitle: "Products",
    companyTitle: "Company",
    legalTitle: "Legal",
    rights: "© 2026 Otechi.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    kvkk: "Data Protection Notice (KVKK)",
    contactTitle: "Contact",
    docsLabel: "documents",
    backToTop: "Back to top",
  },
  notFound: {
    title: "Page not found.",
    body: "The page you're looking for may have moved or never existed.",
    pages: "Pages",
  },

  home: {
    meta: {
      title: "Otechi — a software & digital product studio",
      description:
        "Otechi is a technology studio building modern digital products and software solutions for businesses, startups and individuals.",
    },
    hero: {
      kicker: "Software & digital product studio",
      title: "We turn good ideas into strong digital products.",
      subtitle:
        "Otechi builds modern digital products and software solutions for businesses, startups and individuals. From the first sketch of an idea to launch, we treat design, engineering and product experience as one whole.",
      ctaPrimary: "Explore our products",
      ctaSecondary: "Get to know us",
      highlight: "digital products",
      scroll: "Scroll",
    },
    what: {
      kicker: "Studio",
      title: "A product-focused technology studio.",
      items: [
        {
          title: "End-to-end product work",
          body: "From the first sketch of an idea to launch, we handle design, engineering and product experience as one whole.",
        },
        {
          title: "Considered design",
          body: "Simple interfaces, a short learning curve, and no unnecessary complexity.",
        },
        {
          title: "Long-term ownership",
          body: "We keep improving the products we build long after they ship.",
        },
      ],
    },
    products: {
      title: "Our products",
      subtitle: "The digital products we build under Otechi.",
      ole: {
        tagline:
          "A digital loyalty and campaign platform for businesses. Loyalty via QR, campaign management, and customer messaging in a single dashboard.",
      },
      namaz: {
        tagline:
          "An app for tracking the five daily prayers and staying motivated.",
      },
      oleCategory: "Loyalty & campaign platform",
      namazCategory: "Prayer tracking & motivation",
      explore: "Explore",
    },
    work: {
      kicker: "Selected work",
      title: "Products we've built.",
      rows: {
        ole: {
          kind: "Mobile app",
          desc: "Digital loyalty, campaigns and notifications",
        },
        olePanel: {
          suffix: "Dashboard",
          kind: "Web dashboard",
          desc: "A management dashboard for businesses",
        },
        namaz: {
          kind: "Mobile app",
          desc: "Five daily prayers, tracked together",
        },
        next: {
          name: "Your idea next",
          kind: "Studio",
          desc: "Let's turn your idea into a product",
        },
      },
    },
    gallery: {
      kicker: "Inside our products",
      title: "Real people, everyday moments.",
      hint: "Drag to explore",
      label: "Image gallery",
      prev: "Previous images",
      next: "Next images",
      items: {
        ole1: "A café owner welcoming a customer",
        ole2: "Friends chatting at a café",
        ole3: "A café owner smiling behind the counter",
        ole4: "A shop worker handing a coffee to a customer at the door",
        namaz1: "A man praying on his prayer mat at sunset",
        namaz2: "Three friends talking in a mosque courtyard",
        namaz3: "A young woman unrolling her prayer mat",
        namaz4: "A man walking towards a mosque at dusk",
        oleLoyalty: "The app's loyalty and rewards screen",
        olePanel: "The business management dashboard",
        namazToday: "The app's Today screen",
        namazGroup: "The app's group screen",
      },
    },
    approach: {
      kicker: "Approach",
      title: "How we work",
      items: [
        "We start by getting the problem clear.",
        "We ship the smallest thing that works.",
        "We improve it with real user feedback.",
        "We think about accessibility from the start.",
      ],
    },
    aboutStrip: {
      title: "About Otechi",
      body: "We're a technology studio building digital products and software solutions. Ole and Namaz Motivasyonu are two of the products we've built; we also develop digital products and software for other ideas and projects.",
      cta: "About us",
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "What kind of work does Otechi do?",
          a: "We build digital products and software solutions for businesses, startups and individuals.",
        },
        {
          q: "Which products are available right now?",
          a: "Ole for businesses and Namaz Motivasyonu for individuals — and we keep building for new ideas.",
        },
        {
          q: "How do I get started with Ole?",
          a: "You can read through the Ole page and get started at oletr.com.",
        },
        {
          q: "How can I contact you?",
          a: "You can reach us by phone or email — all our contact details are on the Contact page.",
          contactLink: "Go to the Contact page",
        },
      ],
    },
    closing: {
      title: "Take a look at our products.",
      ctaOle: "Explore Ole",
      ctaNamaz: "Explore Namaz Motivasyonu",
    },
  },

  products: {
    meta: {
      title: "Products — Otechi",
      description:
        "The digital products we build under Otechi: Ole for businesses and Namaz Motivasyonu for individuals.",
    },
    title: "Products",
    intro: "The digital products we build under Otechi.",
    detailsKicker: "Details",
    detailsTitle: "A closer look at each product.",
    factLabels: {
      platform: "Platform",
      audience: "For",
      status: "Status",
    },
    ole: {
      tagline: "A digital loyalty and campaign platform for businesses.",
      points: [
        "Digital loyalty via QR code",
        "Create and manage campaigns",
        "Multi-branch management",
      ],
      facts: {
        platform: "iOS · Android · Web dashboard",
        audience: "Businesses and their customers",
        status: "Live since February 2026",
      },
    },
    namaz: {
      tagline: "An app for tracking the five daily prayers and staying motivated.",
      points: ["Five daily prayers tracking", "Reminders", "Progress and motivation"],
      facts: {
        platform: "iOS · Android",
        audience: "Individuals",
        status: "Coming soon",
      },
    },
  },

  ole: {
    meta: {
      title: "Ole — digital customer loyalty for businesses",
      description:
        "Ole is a digital customer-loyalty platform for businesses: tokens via QR and NFC, rewards, campaigns, notifications and multi-branch management in one dashboard. Free for customers.",
    },
    hero: {
      kicker: "An Otechi product",
      statement: "From first visit to regular.",
      lead: "Reward your customers. Announce your campaigns. Give them a reason to come back.",
      ctaDemo: "Request a demo",
      ctaPricing: "See pricing",
      panelLogin: "Dashboard login",
      ctaAppStore: "App Store",
      ctaGooglePlay: "Google Play",
    },
    facts: {
      platformLabel: "Platform",
      platform: "iOS · Android · Web dashboard",
      modelLabel: "Business model",
      model: "Subscription, no commission",
      customersLabel: "For customers",
      customers: "Free",
      statusLabel: "Status",
      status: "Live since February 2026",
    },
    chapters: {
      label: "On this page",
      how: "How it works",
      features: "Features",
      panel: "Dashboard",
      integrations: "Integrations",
      pricing: "Pricing",
      faq: "FAQ",
    },
    anchors: {
      how: "how-it-works",
      features: "features",
      panel: "dashboard",
      integrations: "integrations",
      pricing: "pricing",
      faq: "faq",
    },
    sides: {
      statement: "Your customer on one side. You in control on the other.",
      business: {
        title: "Business",
        items: [
          "Set a reward and a target number of tokens",
          "Generate a QR code in the dashboard to award tokens",
          "Verify rewards and campaigns with a 6-digit code",
          "Run welcome, birthday, student and general campaigns",
          "Send manual notifications and automatic reminders",
          "Follow branches, transactions and reports in one dashboard",
        ],
      },
      customer: {
        title: "Customer",
        items: [
          "Downloads the Ole app for free",
          "Scans the QR code or taps Ole NFC to earn tokens",
          "Redeems the reward with “Ödülü Al” once the target is reached",
          "Discovers campaigns and redeems them with a 6-digit code",
          "Finds businesses by neighbourhood or name",
        ],
      },
    },
    how: {
      kicker: "How it works",
      title: "A loyalty loop in four steps.",
      steps: [
        {
          title: "Set your reward",
          body: "Pick a reward and a target number of tokens — say, a free coffee at 5 tokens.",
        },
        {
          title: "Award tokens by QR",
          body: "Generate a single-use QR code in the dashboard from the amount spent or a number of items/tokens. Your customer scans it and the tokens land in their account.",
        },
        {
          title: "Verify with a code",
          body: "When customers reach the target they tap “Ödülü Al” in the app and get a 6-digit code. Your staff verify it in the dashboard and hand over the reward.",
        },
        {
          title: "Invite them back",
          body: "Customers who haven't visited for a while get an automatic reminder, and you announce campaigns with manual notifications.",
        },
      ],
      nfcNote:
        "Ole NFC instead of QR: customers tap their phone to earn tokens or redeem a reward. The hardware is optional.",
    },
    features: {
      kicker: "Features",
      title: "Everything loyalty needs, in one place.",
      items: {
        loyalty: {
          name: "Loyalty and rewards",
          kind: "Business · Customer",
          desc: "A reward once the target number of tokens is reached.",
        },
        qr: {
          name: "Tokens by QR",
          kind: "Business dashboard",
          desc: "A single-use QR code for every transaction.",
        },
        code: {
          name: "6-digit code verification",
          kind: "Business dashboard",
          desc: "Confirm rewards and campaign use with a code.",
        },
        campaigns: {
          name: "Campaigns",
          kind: "Welcome · Birthday · Student · General",
          desc: "Set conditions and validity; publish or pause.",
        },
        notifications: {
          name: "Notifications",
          kind: "Manual · Automatic",
          desc: "Only to customers who opted in and match the audience; sends are subject to limits.",
        },
        branches: {
          name: "Multiple branches",
          kind: "Business dashboard",
          desc: "Manage every branch from one account.",
        },
        reports: {
          name: "Transactions and reports",
          kind: "Business dashboard",
          desc: "Token and reward activity, campaign usage.",
        },
        businessPage: {
          name: "Your page in the app",
          kind: "Customer app",
          desc: "No separate app needed — customers find you in Ole.",
        },
        nfc: {
          name: "Ole NFC",
          kind: "Optional hardware",
          desc: "Tap, earn, redeem. DNA chip with copy protection.",
        },
        pos: {
          name: "Till integration",
          kind: "Simpra · Roxpos",
          desc: "Tokens are added automatically when the bill closes.",
        },
      },
    },
    panel: {
      kicker: "Business dashboard",
      title: "Run every branch from one account.",
      body: "QR code generation, code verification, the loyalty programme, campaigns, notifications and reports live in the web dashboard, where each branch's transactions are tracked.",
      menu: [
        "Transaction history",
        "Business management",
        "Loyalty programme",
        "Campaign management",
        "Notifications",
        "Customer points",
        "Reports",
      ],
      menuTitle: "Dashboard modules",
    },
    integrations: {
      kicker: "Integrations",
      title: "Works with your till.",
      body: "With an integration you don't need the dashboard at the counter — tokens are added automatically when the bill closes.",
      partners: [
        { name: "Simpra", status: "Integrated" },
        { name: "Roxpos", status: "Integration in progress" },
      ],
      steps: [
        { body: "Your customer shows their personal QR code in the Ole app." },
        { body: "Staff scan it with the till's QR scanner; the customer is matched to the bill." },
        { body: "Tokens are added automatically when the bill closes." },
      ],
      cta: "Request an integration",
    },
    sectors: {
      kicker: "Who it's for",
      title: "For every business with regulars.",
      items: [
        "Cafés",
        "Restaurants",
        "Bakeries & patisseries",
        "Hair & beauty",
        "Retail",
        "Multi-branch businesses",
      ],
    },
    pricing: {
      kicker: "Pricing",
      title: "One plan, simple pricing.",
      plan: {
        name: "Unlimited plan",
        period: "Yearly",
        unit: "+ VAT / per branch",
        included: [
          "Token and reward programme",
          "Awarding tokens by QR code",
          "Reward verification by 6-digit code",
          "Welcome, birthday, student and general campaigns",
          "Manual and automatic notifications",
          "Business dashboard, transaction history and reports",
          "A business page in the Ole customer app",
        ],
      },
      cta: "Request a demo",
      nfc: {
        label: "Optional add-on",
        name: "Ole NFC hardware",
        period: "One-off",
        unit: "+ VAT",
        lead: "Handle everyday transactions in seconds, without opening the dashboard.",
        benefits: [
          "Awarding tokens and redeeming rewards",
          "Fast transactions without the dashboard",
          "DNA chip technology",
          "Security designed to protect against copying",
        ],
        note: "The hardware is optional. You can use the Ole dashboard quickly and easily with QR codes and 6-digit codes, without NFC.",
      },
      calculator: {
        title: "How could {price} pay off in your business?",
        question: "How many customers will join Ole in a year?",
        help: "Not your total number of customers — the number who will join the loyalty programme in the Ole app.",
        unit: "Ole users / year",
        yearly: "Estimated extra revenue per year",
        monthly: "Monthly average:",
        returningLabel: "Customers expected to come more than once",
        returningUnit: "customers",
        audienceLabel: "Remind them with a notification",
        audienceUnit: "people you can reach",
        audienceNote: "Subject to eligibility and notification permissions.",
        disclaimer:
          "An example scenario, not a guaranteed result. Calculated from Ole users' repeat visits after their first visit. Revenue is not profit; subscription and operating costs are not deducted. Amounts exclude VAT.",
        live: "For {members} Ole users, estimated extra revenue is {yearly} a year, about {monthly} a month.",
      },
      source: "Prices exclude VAT; current prices and terms are set by Ole:",
      sourceLink: "oletr.com",
    },
    gallery: {
      kicker: "In the wild",
      title: "Everyday visits, lasting customers.",
    },
    onboarding: {
      kicker: "Getting started",
      title: "The Ole team helps you get set up.",
      steps: [
        { title: "Send the form", body: "Fill in the demo request form." },
        {
          title: "We get in touch",
          body: "The Ole team reaches out to get to know your business.",
        },
        {
          title: "Plan it together",
          body: "Your rewards, campaigns and notifications are set up for your business.",
        },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "Do I need technical knowledge?",
          a: "No. The Ole dashboard runs in the browser, with nothing to install, and the Ole team helps you get started.",
        },
        {
          q: "Do I need a separate app for my business?",
          a: "No. Your business gets its own page inside the Ole customer app.",
        },
        {
          q: "I have several branches — is that a problem?",
          a: "No. You manage every branch from one account; pricing is per branch.",
        },
        {
          q: "Is the NFC hardware required?",
          a: "No. You can use Ole with QR codes and 6-digit codes, without NFC.",
        },
        {
          q: "Does it work with my till?",
          a: "Ole is integrated with Simpra, and the Roxpos integration is in progress. You can request an integration for other systems.",
        },
        {
          q: "Do customers pay?",
          a: "No. The Ole app is free for customers.",
        },
        {
          q: "Do you take a commission?",
          a: "No. Ole takes no commission on your sales; businesses pay a yearly subscription.",
        },
      ],
    },
    docs: {
      title: "Ole documents and support (in Turkish)",
      cookies: "Cookie policy",
      kvkk: "KVKK customer notice",
      membership: "Membership agreement",
      support: "Support centre",
    },
    closing: {
      kicker: "Let's start",
      title: "Try Ole in your business.",
      supportLabel: "Ole support",
    },
    alt: {
      stage: "Ole app home screen",
      loyalty: "Ole app — rewards screen",
      qrForm: "Ole business dashboard — QR code generation form",
      verify: "Ole business dashboard — 6-digit code verification",
      winback: "Ole notification — “Seni Özledik!” reminder",
      nfc: "Ole NFC hardware",
      panel: "Ole business dashboard",
    },
  },

  namaz: {
    meta: {
      title: "Namaz Motivasyonu — five daily prayers tracking and motivation",
      description:
        "Namaz Motivasyonu is a simple app for tracking the five daily prayers, with reminders, progress, and motivation.",
    },
    hero: {
      kicker: "An Otechi product",
      tagline:
        "Track your five daily prayers, keep a steady routine with reminders, see your progress, and stay motivated.",
      ctaAppStore: "App Store",
      ctaGooglePlay: "Google Play",
      statement: "Starting again is always possible.",
    },
    intro: {
      title: "A warm, encouraging approach",
      body: "Sometimes we forget; sometimes motivation dips. Namaz Motivasyonu reminds you, shows your progress, and encourages you. Starting again is always possible.",
    },
    features: {
      title: "What's inside",
      items: [
        {
          title: "Five daily prayers tracking",
          body: "Mark the prayers you've done and see your consistency.",
        },
        {
          title: "Reminders",
          body: "Get reminders at times that work for you.",
        },
        {
          title: "Progress and motivation",
          body: "Follow your progress and streak, and set your own goals.",
        },
        {
          title: "Groups and rooms",
          body: "Create a group or room, or join one with an invite code, and stay motivated with friends. Your display name and progress are visible to the group's members.",
        },
      ],
      note: "Features may change with the current version of the app.",
    },
    how: {
      title: "How it works",
      steps: [
        {
          title: "Choose your city",
          body: "Enter your location or city to see prayer times.",
        },
        {
          title: "Set your reminders",
          body: "Pick how often you're reminded for each prayer.",
        },
        {
          title: "Mark as you go",
          body: "Check off each prayer and grow your streak.",
        },
      ],
    },
    privacy: {
      title: "Privacy",
      body: "What data the app processes, why, and how it is stored is set out in the Privacy Policy, the KVKK Notice and the User Agreement (published in Turkish). You can delete your account and data at any time.",
    },
    closing: {
      title: "Namaz Motivasyonu is coming to the app stores soon.",
      body: "Download links will be shared on this page once they're ready.",
    },
  },

  about: {
    meta: {
      title: "About — Otechi",
      description:
        "Otechi is a technology studio building digital products and software solutions for businesses, startups and individuals.",
    },
    title: "About",
    lead: "Otechi is a technology studio building digital products and software solutions.",
    paragraphs: [
      "For businesses, startups and individuals, we turn ideas into digital experiences that are functional, scalable and well designed.",
      "We treat design, engineering and product thinking as one process: we ship a small working first version, then grow it with data and user feedback.",
      "Ole and Namaz Motivasyonu are two of the products we build today. Alongside them, we also develop digital products and software for other ideas and projects, and we keep improving what we ship long after launch.",
    ],
    approachTitle: "How we work",
    approach: [
      {
        title: "One process",
        body: "Design, engineering and product decisions are handled by one team, not in separate silos.",
      },
      {
        title: "Early and clear",
        body: "We get the problem clear first, then ship the smallest thing that works.",
      },
      {
        title: "Lasting care",
        body: "We keep maintaining and evolving products after they launch.",
      },
    ],
    work: {
      kicker: "What we build",
      title: "Products we've built.",
    },
    valuesTitle: "What we value",
    values: [
      "Simple, clear design",
      "Accessibility considered from the start",
      "Scalable, maintainable software",
    ],
  },

  contact: {
    meta: {
      title: "Contact — Otechi",
      description: "Get in touch with Otechi by phone or email.",
    },
    title: "Contact",
    headline: "Let's talk.",
    body: "For any questions or requests, you can reach us by phone or email.",
    phoneLabel: "Phone",
    phone: "0 (232) 332 18 14",
    phoneHref: "tel:+902323321814",
    emailLabel: "Email",
    email: "info@oletr.com",
    emailHref: "mailto:info@oletr.com",
    secondary: "In the meantime, take a look at our products.",
    cta: "Explore products",
  },

  legal: {
    lastUpdatedLabel: "Last updated",
    lastUpdatedValue: "Soon",
    toc: "Contents",
    related: "Other documents",
    privacy: {
      meta: {
        title: "Privacy Policy — Otechi",
        description: "Otechi Privacy Policy (draft).",
      },
      title: "Privacy Policy",
      intro:
        "This policy is being prepared to explain how personal data is handled across Otechi products. The details will be published once the technical setup of the products is finalized.",
      sections: [
        { heading: "Information we collect", body: "This section is in progress." },
        { heading: "How information is used", body: "This section is in progress." },
        { heading: "Third-party services", body: "This section is in progress." },
        { heading: "Retention", body: "This section is in progress." },
        { heading: "Your rights", body: "This section is in progress." },
        { heading: "Contact", body: "Contact channels will be shared soon." },
      ],
    },
    terms: {
      meta: {
        title: "Terms of Use — Otechi",
        description: "Otechi Terms of Use (draft).",
      },
      title: "Terms of Use",
      intro:
        "This page is being prepared to set out the terms for using the Otechi website and products.",
      sections: [
        { heading: "Scope of the service", body: "This section is in progress." },
        { heading: "Conditions of use", body: "This section is in progress." },
        { heading: "Intellectual property", body: "This section is in progress." },
        { heading: "Limitation of liability", body: "This section is in progress." },
        { heading: "Changes", body: "This section is in progress." },
      ],
    },
    kvkk: {
      meta: {
        title: "Data Protection Notice (KVKK) — Otechi",
        description: "Otechi Data Protection Notice under KVKK (draft).",
      },
      title: "Data Protection Notice (KVKK)",
      intro:
        "The disclosure notice to be prepared under Turkey's Personal Data Protection Law (No. 6698) will appear here before launch.",
      sections: [
        { heading: "Data controller", body: "This section is in progress." },
        { heading: "Personal data processed", body: "This section is in progress." },
        { heading: "Purposes of processing", body: "This section is in progress." },
        { heading: "Transfers", body: "This section is in progress." },
        { heading: "Your rights and how to apply", body: "This section is in progress." },
      ],
    },
  },

  showcase: {
    otherProduct: "Another Otechi product",
    home: {
      studioTitle: "From idea to launch, in one process.",
      studioBody:
        "We treat design, engineering and product thinking as one process, building functional, scalable and well-designed digital experiences for businesses, startups and individuals.",
      namazLogoAlt: "Namaz Motivasyonu key art",
    },
    ole: {
      artAlt: "Ole token key art",
    },
    namaz: {
      artAlt: "Namaz Motivasyonu key art",
      heroShotAlt: "Namaz Motivasyonu — Today screen",
      galleryTitle: "From the app",
      gallery: { today: "Today screen", group: "Group screen" },
      groupShotAlt: "Namaz Motivasyonu — group screen",
      dayTitle: "Through the day.",
      docsTitle: "Legal Documents",
      docsNote: "These documents are published in Turkish only.",
      docs: {
        privacy: "Privacy Policy",
        kvkk: "Data Protection Notice (KVKK)",
        terms: "User Agreement",
        accountDeletion: "Account & data deletion",
      },
    },
  },
};
