import type { Dictionary } from "./tr";

// Natural, professional English — not a word-for-word translation of tr.ts.
// Brand names ("Otechi", "Ole", "Namaz Motivasyonu") are injected by components.

export const en: Dictionary = {
  common: {
    comingSoon: "Coming soon",
    learnMore: "Learn more",
    backToProducts: "Back to products",
    draftNotice: "This text is a draft and will be updated before launch.",
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
    },
    what: {
      title: "A product-focused technology studio.",
      intro:
        "Otechi is a technology studio building digital products and software solutions.",
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
    },
    approach: {
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
          a: "Our contact channels will be on the site very soon.",
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
    ole: {
      tagline: "A digital loyalty and campaign platform for businesses.",
      points: [
        "Digital loyalty via QR code",
        "Create and manage campaigns",
        "Multi-branch management",
      ],
    },
    namaz: {
      tagline: "An app for tracking the five daily prayers and staying motivated.",
      points: ["Five daily prayers tracking", "Reminders", "Progress and motivation"],
    },
  },

  ole: {
    meta: {
      title: "Ole — a digital loyalty and campaign platform for businesses",
      description:
        "Ole is a digital loyalty and campaign platform for businesses: loyalty via QR, a points and rewards system, campaign management, multi-branch support, and customer notifications in one dashboard. Available since February 2026.",
    },
    hero: {
      kicker: "An Otechi product",
      tagline:
        "A digital loyalty and campaign platform for businesses. Launch your own business page in about 15 minutes — no technical setup required.",
      launched: "Available since February 2026.",
      ctaDemo: "Request a demo",
      ctaDownload: "Download the app",
    },
    benefit: {
      title: "What Ole gives you",
      body: "Businesses create their own digital business page in about 15 minutes with no technical setup, and manage their loyalty program, campaigns, and customer communication from a single dashboard.",
    },
    features: {
      title: "Key features",
      items: [
        {
          title: "Digital loyalty via QR code",
          body: "Customers join the loyalty program by scanning a QR code, and cards are tracked digitally.",
        },
        {
          title: "Points and rewards system",
          body: "Points on every visit, with rewards unlocked at thresholds you set.",
        },
        {
          title: "Create and manage campaigns",
          body: "Build and run discounts and seasonal campaigns from the dashboard.",
        },
        {
          title: "Send customer notifications",
          body: "Share campaigns and announcements with customers through the app.",
        },
        {
          title: "Build a business page",
          body: "Publish your own digital business page in about 15 minutes.",
        },
        {
          title: "Multi-branch management",
          body: "Run every branch from a single account.",
        },
        {
          title: "Visit and engagement tracking",
          body: "See visit frequency, return rates, and campaign performance in the dashboard.",
        },
      ],
    },
    how: {
      title: "How it works",
      steps: [
        {
          title: "Create your business page",
          body: "Enter the basics and publish in about 15 minutes.",
        },
        {
          title: "Define your loyalty rules and campaigns",
          body: "Set your points and reward thresholds and create campaigns.",
        },
        {
          title: "Customers join via QR",
          body: "You use the dashboard; Ole handles visit and reward tracking.",
        },
      ],
    },
    audience: {
      title: "Who it's for",
      items: [
        "Cafés and restaurants",
        "Beauty salons",
        "Hairdressers",
        "Delicatessens",
        "Businesses across other sectors",
      ],
    },
    pricing: {
      title: "Business model",
      items: [
        "Paid subscription for businesses",
        "Free for customers",
        "No commission",
      ],
      note: "Pricing details will be shared soon.",
    },
    platforms: {
      title: "Platforms",
      items: [
        "iOS and Android app (for customers)",
        "Web-based management dashboard (for businesses)",
      ],
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "How long does setup take?",
          a: "A basic business page can be ready in about 15 minutes.",
        },
        {
          q: "Do I need technical knowledge?",
          a: "No. Ole runs in the browser — there's no separate infrastructure to set up.",
        },
        {
          q: "I have multiple branches — is that a problem?",
          a: "No. Multi-branch management works from a single account.",
        },
        {
          q: "Do customers pay anything?",
          a: "No. Customers use Ole for free.",
        },
        {
          q: "Do you take a commission?",
          a: "No. There is no commission; businesses pay a subscription.",
        },
      ],
    },
    closing: {
      title: "Consider Ole for your business.",
      body: "For more about Ole and to get started, visit oletr.com.",
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
      body: "What data the app processes and how it's stored will be stated clearly in our privacy policy before launch.",
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
      oleLogoAlt: "Ole logo",
      namazLogoAlt: "Namaz Motivasyonu key art",
    },
    ole: {
      artAlt: "Ole token key art",
      heroShotAlt: "Ole app — loyalty screen",
      homeShotAlt: "Ole app — home screen",
      loyaltyShotAlt: "Ole app — rewards screen",
      notificationShotAlt: "Ole app — notification screen",
      businessShotAlt: "Ole app — business page",
      panelShotAlt: "Ole business management panel",
      flowTitle: "Loyalty, campaigns and messaging — one flow",
      flow: [
        {
          title: "Digital loyalty via QR",
          body: "A customer scans the business's QR code; tokens and rewards are handled automatically in the app.",
        },
        {
          title: "Announce your campaigns",
          body: "Campaigns and offers appear on the business page in the customer's app.",
        },
        {
          title: "Send customer notifications",
          body: "Push new campaigns and reminders straight to customers as app notifications.",
        },
        {
          title: "Manage it all from one panel",
          body: "QR generation, loyalty rules, branches and reports live in the web management panel.",
        },
      ],
      panelTitle: "Business management panel",
      panelBody:
        "QR code generation, code verification, the loyalty program, campaigns, multiple branches and reports are all managed from one web panel.",
      panelCaption: "Ole business management panel",
      galleryTitle: "From the app",
      gallery: ["Home", "Loyalty & rewards", "Notifications", "Business page"],
      docsTitle: "Documents",
      docsNote:
        "Ole's contracts and legal documents will be available in this area soon.",
      docs: [
        "Privacy Policy",
        "Terms of Use",
        "Data Protection Notice (KVKK)",
        "Subscription & Payment Terms",
      ],
    },
    namaz: {
      artAlt: "Namaz Motivasyonu key art",
      heroShotAlt: "Namaz Motivasyonu — Today screen",
      galleryTitle: "From the app",
      gallery: ["Today screen", "Group screen"],
      docsTitle: "Legal Documents",
      docsNote: "These documents are published in Turkish only.",
      docs: [
        "Privacy Policy",
        "Data Protection Notice (KVKK)",
        "User Agreement",
      ],
    },
  },
};
