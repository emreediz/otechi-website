import type { Dictionary } from "./tr";

// Natural, professional English — not a word-for-word translation of tr.ts.
// Brand names ("Otechi", "Ole", "Namaz Motivasyonu") are injected by components.

export const en: Dictionary = {
  common: {
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
          a: "Ole for businesses and Namaz Motivasyonu for individuals are both live — and we keep building for new ideas.",
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
      points: ["Tracking the five daily prayers", "Statistics", "Groups and rooms"],
      facts: {
        platform: "iOS · Android",
        audience: "Individuals",
        status: "On the App Store and Google Play",
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
    story: {
      kicker: "For your customers",
      title: "Every visit, one step closer.",
      beats: [
        { title: "Scan.", body: "Your customer scans a QR code or taps Ole NFC." },
        { title: "Collect.", body: "Tokens add up with every visit; at the target, a reward is ready." },
        { title: "Discover.", body: "Your campaigns show up on your business page in Ole." },
        { title: "Come back.", body: "Customers who haven't visited for a while get an automatic reminder." },
      ],
    },
    business: {
      kicker: "For your business",
      title: "You're in control.",
      panel: "Every branch in one dashboard.",
      qr: "Generate a single-use QR code.",
      verify: "Verify rewards with a 6-digit code.",
      campaign: "Publish a campaign.",
      nfc: "Or use Ole NFC — no dashboard needed.",
    },
    closing: {
      kicker: "Let's start",
      title: "Try Ole in your business.",
      supportLabel: "Ole support",
    },
    alt: {
      home: "Ole app home screen",
      loyalty: "Ole app — rewards screen",
      business: "Ole app — business page and campaigns",
      notification: "Ole notification — a “We miss you!” reminder",
      panel: "Ole business dashboard",
      qrForm: "Ole business dashboard — QR code generation",
      verify: "Ole business dashboard — 6-digit code verification",
      campaign: "Ole app — welcome campaign card",
      nfc: "Ole NFC hardware",
    },
  },

  namaz: {
    meta: {
      title: "Namaz Motivasyonu — track the five daily prayers and stay motivated",
      description:
        "Namaz Motivasyonu is a simple app for tracking the five daily prayers, with statistics and group motivation. On the App Store and Google Play.",
    },
    hero: {
      kicker: "An Otechi product",
      tagline:
        "Track your five daily prayers, see your progress, and stay motivated.",
      ctaAppStore: "App Store",
      ctaGooglePlay: "Google Play",
      statement: "Starting again is always possible.",
    },
    story: {
      kicker: "In the app",
      title: "Simple, calm, at your own pace.",
      beats: [
        {
          title: "Mark.",
          body: "Mark the prayers you've done and see how your day went.",
        },
        {
          title: "See.",
          body: "Follow your progress and streak with weekly, monthly and yearly statistics.",
        },
        {
          title: "Together.",
          body: "Start a group or room, join with an invite code, and stay motivated together.",
        },
      ],
    },
    privacy: {
      title: "Privacy",
      body: "What data the app processes, why, and how it is stored is set out in the Privacy Policy, the KVKK Notice and the User Agreement (published in Turkish). You can delete your account in the app; the associated data is then deleted, subject to legal retention obligations.",
    },
    closing: {
      title: "is on the App Store and Google Play.",
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
      groupShotAlt: "Namaz Motivasyonu — group screen",
      statsShotAlt: "Namaz Motivasyonu — statistics screen",
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
