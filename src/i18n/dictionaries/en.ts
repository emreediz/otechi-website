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
    stores: {
      appStore: {
        lines: ["Download on the", "App Store"],
        label: "Download {app} on the App Store",
      },
      googlePlay: {
        lines: ["Get it on", "Google Play"],
        label: "Get {app} on Google Play",
      },
    },
  },

  nav: {
    skipToContent: "Skip to content",
    home: "Home",
    products: "Products",
    about: "About",
    contact: "Contact",
    cta: "Get in touch",
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
    tagline: "A technology studio building digital products and software.",
    appsTitle: "Our apps",
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
      titleLines: ["From idea", "to product."],
      lead: "We build digital products and software for businesses, startups and individuals.",
      ctaPrimary: "Explore our products",
      ctaSecondary: "Get to know us",
      capsulesLabel: "Our products",
    },
    intro: {
      statement:
        "We bring design, engineering and product thinking together in one process — from the first sketch of an idea to launch, and on to growing the product after it ships.",
    },
    products: {
      kicker: "Products",
      title: "Three products.",
      titleMuted: "One studio.",
      lead: "Apps we build ourselves — all live today.",
      explore: "Explore",
      items: {
        ole: {
          label: "Mobile app",
          title: "From first visit to regular.",
          body: "Digital loyalty for businesses: customers earn tokens with a QR code or NFC, collect rewards and follow campaigns.",
          cta: "Explore Ole",
        },
        panel: {
          label: "Web dashboard",
          title: "The business stays in control.",
          body: "QR codes, reward checks, campaigns, notifications and every branch in one dashboard.",
          cta: "Explore Ole Panel",
        },
        namaz: {
          label: "Mobile app",
          title: "Five prayers at a glance.",
          body: "Mark the prayers you’ve performed, see your progress in statistics and stay motivated with your group.",
          cta: "Explore Namaz Motivasyonu",
        },
      },
      title2: "Our products",
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
    },
    playground: {
      kicker: "Try it",
      title: "Don’t just look.",
      titleMuted: "Try it.",
      lead: "Try the core flows of our products right here.",
      note: "A demo area — nothing real happens.",
      tablist: "Choose a product",
      ole: {
        title: "Collect tokens, get the reward.",
        steps: [
          "Scan the QR code when you order.",
          "Every scan adds a token to your account.",
          "Five tokens and your reward is ready.",
        ],
        scan: "Scan QR",
        redeem: "Redeem reward",
        scanned: "Token added: {n} / 5",
        redeemed: "Reward redeemed. Enjoy!",
      },
      panel: {
        title: "Generate a code, publish a campaign.",
        steps: [
          "Pick the branch and the number of tokens.",
          "Generate the QR code — it’s valid for a short time.",
          "Publish the campaign in one click.",
        ],
        generate: "Generate QR code",
        publish: "Publish campaign",
        unpublish: "Unpublish",
        generated: "QR code generated.",
        published: "Campaign is live.",
        unpublished: "Campaign moved to drafts.",
      },
      namaz: {
        title: "Mark your prayers.",
        steps: [
          "Tap “Prayed” when you’ve performed a prayer.",
          "Your daily progress updates instantly.",
          "Statistics show your weekly and monthly progress.",
        ],
        hint: "Tap the “Prayed” buttons on the right.",
        progress: "{n} / 5 prayers marked.",
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
    faq: {
      kicker: "Frequently asked questions",
      title: "Questions on your mind.",
      body: "What people ask about our studio and our products.",
      ask: "Ask us",
      tabs: [
        {
          label: "General",
          items: [
            {
              q: "What kind of work does Otechi do?",
              a: "We build digital products and software solutions for businesses, startups and individuals, and run the whole process from design to launch.",
            },
            {
              q: "How can I contact you?",
              a: "You can reach us by phone or email — all our contact details are on the Contact page.",
              contactLink: "Go to the Contact page",
            },
          ],
        },
        {
          label: "Products",
          items: [
            {
              q: "Which products are available right now?",
              a: "Ole and Ole Panel for businesses, and Namaz Motivasyonu for individuals, are all live.",
            },
            {
              q: "What’s the difference between Ole and Ole Panel?",
              a: "Ole is the mobile app where customers earn tokens and collect rewards. Ole Panel is the web dashboard where businesses generate QR codes, verify rewards and manage their campaigns.",
            },
            {
              q: "How do I get started with Ole?",
              a: "You can read through the Ole page and get started at oletr.com.",
            },
            {
              q: "Where can I download Namaz Motivasyonu?",
              a: "It’s on the App Store and Google Play.",
            },
          ],
        },
      ],
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

  mock: {
    caption: "Illustrative UI",
    ole: {
      category: "Specialty coffee",
      rewardLabel: "Reward",
      reward: "Free coffee",
      tokensLeft: "{n} tokens to your reward",
      rewardReady: "Your reward is ready!",
      now: "now",
      notifTitle: "We miss you!",
      notifBody: "It’s been a while — your favourite coffee is waiting.",
      open: "Open",
    },
    panel: {
      nav: ["Overview", "QR code", "Campaigns", "Notifications", "Branches", "Reports"],
      kpis: [
        { label: "QR scans today", value: "128" },
        { label: "Rewards redeemed", value: "23" },
        { label: "Active campaigns", value: "3" },
      ],
      chartTitle: "Token activity",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      campaignsTitle: "Campaigns",
      campaigns: [
        "A treat for first visits",
        "Birthday dessert",
        "Weekday coffee offer",
      ],
      live: "Live",
      draft: "Draft",
      qrTitle: "Generate a QR code",
      branch: "Branch",
      branchValue: "Main branch",
      tokens: "Tokens",
      generate: "Generate QR code",
      validFor: "Time left",
      verifyTitle: "Verify a code",
      verify: "Verify",
      verified: "Reward handed over",
    },
    namaz: {
      today: "Today",
      prayers: ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"],
      times: ["05:11", "13:16", "16:52", "19:44", "21:08"],
      done: "{n} / 5 prayers done",
      mark: "Prayed",
      weekTitle: "Weekly log rate",
      periods: ["Week", "Month", "Year"],
      days: ["M", "T", "W", "T", "F", "S", "S"],
      streak: "Current full-day streak",
      groupName: "Circle of Friends",
      groupMeta: "3 members · today’s prayers",
      invite: "Invite code",
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
