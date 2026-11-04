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
    city: "Izmir",
    themeLight: "Light theme",
    mail: "Send us an email",
    productsTitle: "Our products",
    allProducts: "All products",
    newsTitle: "News",
    dismiss: "Dismiss",
    news: {
      namaz: "Statistics are here: see your weekly, monthly and yearly progress.",
      panel: "QR codes, campaigns and notifications in one dashboard.",
      ole: "On the App Store and Google Play.",
    },
    newLabel: "New",
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
    cookies: "Cookie Policy",
    contactTitle: "Contact",
    docsLabel: "documents",
    backToTop: "Back to top",
  },
  cookieNotice: {
    label: "Cookie notice",
    text: "This site does not use cookies. Aggregate visits are measured with cookieless Cloudflare Web Analytics.",
    policy: "Cookie Policy",
    dismiss: "Got it",
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
    stage: {
      label: "Product showcase",
      open: "Explore",
      tags: {
        ole: "Mobile app · Loyalty · Campaigns",
        panel: "Web dashboard · Management · Reports",
        namaz: "Mobile app · Tracking · Statistics",
        iz: "Mobile app · Notes · Journal",
      },
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
        iz: {
          label: "Mobile app",
          title: "Leave a trace of today.",
          body: "Your notes, journal, photos and voice notes, in one place on iPhone and iPad.",
          cta: "Explore İz",
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
              a: "You can reach us by phone or email — all our contact details are at the top of this page.",
              contactLink: "Go to our contact details",
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

  case: {
    howLabel: "How it works",
    stepLabel: "Step",
    momentsLabel: "Real moments",
    introLabel: "Introduction",
    featuresLabel: "Highlights",
    startLabel: "Get started",
    nextLabel: "Next product",
    supportLabel: "Support",
    forBusiness: "For businesses",
    forCustomers: "For customers",
  },

  products: {
    meta: {
      title: "Products — Otechi",
      description:
        "The digital products we build under Otechi: Ole and Ole Panel for businesses, Namaz Motivasyonu and İz for individuals.",
    },
    kicker: "Products",
    titleLines: ["Products", "we’ve built."],
    lead: "Apps we build for businesses and individuals.",
    factLabels: {
      platform: "Platform",
      audience: "Who it's for",
      status: "Status",
    },
    facts: {
      ole: {
        platform: "iOS · Android",
        audience: "Businesses’ customers",
        status: "On the App Store and Google Play",
      },
      panel: {
        platform: "Web",
        audience: "Businesses using Ole",
        status: "Live",
      },
      namaz: {
        platform: "iOS · Android",
        audience: "Individuals",
        status: "On the App Store and Google Play",
      },
      iz: {
        platform: "iPhone · iPad",
        audience: "Individuals",
        status: "Coming soon to the App Store",
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
      titleLines: ["From first visit", "to regular."],
      lead: "Reward your customers. Announce your campaigns. Give them a reason to come back.",
      ctaDemo: "Request a demo",
      capsules: ["Loyalty", "Notifications", "Campaigns", "Rewards", "Branches", "Reports"],
    },
    intro:
      "Ole brings your loyalty programme, campaigns and notifications together in one app. Customers earn tokens on every visit — and you get to welcome them back.",
    features: {
      kicker: "For customers",
      title: "Every visit,",
      titleMuted: "one step closer.",
      reward: {
        title: "Collect tokens, get the reward.",
        body: "Tokens on every visit; at the target, a reward is ready.",
      },
      scan: {
        title: "Scan or tap.",
        body: "Your customer scans a QR code or taps their phone on Ole NFC.",
      },
      notify: {
        title: "A reason to come back.",
        body: "Customers who haven’t visited for a while get an automatic reminder.",
      },
      campaign: {
        title: "Campaigns in plain sight.",
        body: "Your campaigns show up on your business page in Ole.",
      },
    },
    steps: [
      { title: "Scan.", body: "Scan the QR code when you order, or tap your phone on Ole NFC." },
      { title: "Collect.", body: "Every visit earns tokens; at the target, your reward is ready." },
      { title: "Redeem.", body: "Show your code at the till and collect your reward." },
      { title: "Come back.", body: "Haven’t visited for a while? The business welcomes you back with a reminder." },
    ],
    marquee: ["Tokens", "Rewards", "Campaigns", "Notifications", "QR", "NFC"],
    free: {
      value: "₺0",
      title: "Free for customers.",
      body: "Downloading and using the app is free.",
    },
    panelLink: {
      label: "For businesses",
      title: "Run it all from one dashboard.",
      body: "QR codes, reward checks, campaigns, notifications and every branch, in Ole Panel.",
      cta: "Explore Ole Panel",
    },
    facts: {
      platformLabel: "Platform",
      platform: "iOS · Android",
      modelLabel: "Business model",
      model: "Subscription, no commission",
      customersLabel: "For customers",
      customers: "Free",
      statusLabel: "Status",
      status: "On the App Store and Google Play",
    },
    closing: {
      lines: ["Try Ole", "in your business."],
      supportLabel: "Ole support",
    },
    alt: {
      nfc: "Ole NFC hardware",
    },
  },

  olePanel: {
    meta: {
      title: "Ole Panel — the loyalty dashboard for businesses",
      description:
        "Ole Panel is the web dashboard where businesses using Ole generate QR codes, verify rewards, manage campaigns and notifications, and follow every branch in one place.",
    },
    hero: {
      kicker: "An Otechi product",
      titleLines: ["You’re in", "control."],
      lead: "Manage rewards, campaigns and notifications from one dashboard — every branch on the same screen.",
      ctaPanel: "Log in to the dashboard",
      ctaDemo: "Request a demo",
      capsules: ["QR codes", "Code check", "Campaigns", "Reports"],
    },
    features: {
      kicker: "For businesses",
      title: "Everyday tasks,",
      titleMuted: "a few clicks away.",
      qr: {
        title: "Generate a QR code in seconds.",
        body: "Pick the branch and the number of tokens; when your customer scans it, the tokens land in their account.",
      },
      verify: {
        title: "Verify rewards with a code.",
        body: "Enter the 6-digit code your customer shares and hand over the reward.",
      },
      campaigns: {
        title: "All your campaigns on one screen.",
        body: "Create, edit and publish welcome, birthday and seasonal campaigns.",
      },
      notify: {
        title: "Stay in touch with customers.",
        body: "Send a notification or switch on automatic reminders.",
      },
      branches: {
        title: "Multiple branches.",
        body: "Manage every branch from a single account.",
      },
      reports: {
        title: "Reports.",
        body: "Follow token and reward activity.",
      },
    },
    intro:
      "Ole Panel brings a business’s everyday Ole tasks onto one screen: generate QR codes, verify rewards, manage campaigns and notifications, and follow every branch.",
    steps: [
      { title: "Generate a QR.", body: "Pick the branch and the tokens, and let your customer scan it." },
      { title: "Verify.", body: "Enter the customer’s 6-digit code and hand over the reward." },
      { title: "Publish.", body: "Create a campaign and put it live in one click." },
      { title: "Follow.", body: "Track token and reward activity across all your branches." },
    ],
    marquee: ["QR codes", "Verification", "Campaigns", "Notifications", "Branches", "Reports"],
    noCommission: {
      value: "0%",
      title: "No commission.",
      body: "A subscription — no cut of your sales.",
    },
    appLink: {
      label: "For customers",
      title: "Your customers use the Ole app.",
      cta: "Explore Ole",
    },
    closing: {
      lines: ["Run your business", "from one dashboard."],
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
      titleLines: ["Five prayers,", "at a glance."],
      lead: "Track your five daily prayers, see your progress and keep your motivation.",
      capsules: ["Five prayers", "Statistics", "Groups", "Streak"],
    },
    intro:
      "Namaz Motivasyonu lets you follow the five daily prayers on one calm screen. See your progress in statistics and stay motivated with your group.",
    features: {
      kicker: "In the app",
      title: "Simple, calm,",
      titleMuted: "at your own pace.",
      beats: [
        {
          title: "Mark.",
          body: "Mark the prayers you’ve performed and see how your day went.",
        },
        {
          title: "See.",
          body: "Follow your progress and streak with weekly, monthly and yearly statistics.",
        },
        {
          title: "Together.",
          body: "Create a group or room, join with an invite code, and keep each other motivated.",
        },
      ],
    },
    steps: [
      { title: "Mark.", body: "Mark a prayer with a single tap once you’ve performed it." },
      { title: "See.", body: "Your day fills the ring; your week shows in the statistics." },
      { title: "Keep going.", body: "Full days grow your streak, so your motivation stays visible." },
      { title: "Together.", body: "Start a group and invite friends with a code." },
    ],
    marquee: ["Five prayers", "Statistics", "Streaks", "Groups", "Rooms", "Motivation"],
    bento: {
      stats: {
        title: "Statistics.",
        body: "See your weekly, monthly and yearly progress at a glance.",
      },
      groups: {
        title: "Groups and rooms.",
        body: "Join with an invite code and keep each other going.",
      },
      five: {
        value: "5",
        title: "Five prayers, one screen.",
        body: "Follow the day’s prayers in a simple list.",
      },
      privacy: {
        title: "Privacy.",
        body: "You can delete your account and data from within the app.",
      },
    },
    privacy: {
      title: "Privacy",
      body: "What data the app processes, why, and how it is stored is set out in the Privacy Policy, the KVKK Notice and the User Agreement (published in Turkish). You can delete your account in the app; the associated data is then deleted, subject to legal retention obligations.",
    },
    closing: {
      title: "is on the App Store and Google Play.",
    },
  },

  iz: {
    meta: {
      title: "İz — notes and journal app",
      description:
        "İz is a personal notes and journal app for iPhone and iPad that keeps your notes, journal, photos, drawings and voice notes in one place.",
    },
    hero: {
      lead: "Your notes and journal, with you on iPhone and iPad.",
    },
    intro:
      "İz is a personal notes and journal app. Jot down what’s on your mind, open a journal page for every day, and leave a trace of it with photos, drawings and your voice.",
    steps: [
      {
        title: "Take notes.",
        body: "Write in paragraph, bullet and to-do blocks; tag, pin and set reminders.",
      },
      {
        title: "Keep a journal.",
        body: "One page for every day. Start from the day’s prompt, pick your mood, keep your writing streak going.",
      },
      {
        title: "Say it out loud.",
        body: "Press and hold to record a voice note; speech recognition turns it into text.",
      },
      {
        title: "Open it anywhere.",
        body: "Your notes and journal stay with your account and sync between iPhone and iPad.",
      },
    ],
    marquee: ["Notes", "Journal", "Voice notes", "Drawing", "Photos", "Widgets"],
    bento: {
      devices: {
        title: "iPhone and iPad.",
        body: "One app, two devices. On iPad the sidebar, list and editor sit side by side.",
      },
      signIn: {
        title: "With Apple or with email.",
        body: "Sign in with Apple or create an account with your email. Forgot your password? Reset it with a link sent to your inbox.",
      },
      media: {
        title: "Photos and drawings.",
        body: "Take a photo or pick one from your library and add a caption; draw with your finger or Apple Pencil.",
      },
      voice: {
        title: "Voice, turned into text.",
        body: "Record voice notes with the microphone; speech recognition transcribes them. “On device only” is on by default.",
      },
      widgets: {
        title: "Widgets.",
        body: "Notes, voice note, today’s page, latest drawing and your next reminder on the Lock Screen.",
      },
      lock: {
        title: "Locked with Face ID.",
        body: "Lock İz and your journal with Face ID, Touch ID or your device passcode.",
      },
    },
    useCases: {
      label: "When to use it",
      items: [
        {
          title: "End-of-day journal",
          body: "Open today’s page, pick your mood, write a few lines — add a photo if you like.",
        },
        {
          title: "Never lose a thought",
          body: "Take a quick note from Home, tick off to-dos, set a timed reminder.",
        },
        {
          title: "Talk instead of typing",
          body: "Record a voice note on the go and edit the transcript later.",
        },
        {
          title: "Draw on iPad, see it on iPhone",
          body: "A page you draw with Apple Pencil opens on your other device too, through your account.",
        },
      ],
    },
    languages: {
      label: "Languages",
      body: "The app is in Turkish, English and Spanish, and can follow your device’s language.",
    },
    privacy: {
      title: "Privacy",
      body: "İz has no ads, user behaviour analytics or third-party crash reporting tools. Your entries are stored with your account and synced between your devices; reminder notifications are scheduled on your device. You can permanently delete your account from the app’s Settings; if you can’t access the app, write to info@oletr.com.",
    },
    closing: {
      // Follows the product name: "İz / is coming soon to the App Store."
      title: "is coming soon to the App Store.",
      soon: "Coming soon to the App Store",
      soonNote: "For iPhone and iPad",
    },
  },

  about: {
    meta: {
      title: "About — Otechi",
      description:
        "Otechi is a technology studio building digital products and software solutions for businesses, startups and individuals.",
    },
    title: "About",
    titleLines: ["From idea to launch,", "in one process."],
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
    cookies: {
      meta: {
        title: "Cookie Policy — Otechi",
        description:
          "How the otechi.com website uses cookies, local storage and similar technologies.",
      },
      draftNote:
        "This text is under review and may change before it is finalised.",
    },
  },

  mock: {
    caption: "Illustrative UI",
    percent: "{n}%",
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
      campaignBadge: "Welcome",
      campaignTitle: "Your first coffee’s on us",
      campaignBody: "For your first visit — pick a coffee and enjoy.",
      campaignDays: "30 days",
      appLabel: "Customer app",
      jeton: "Tokens",
      moreCampaigns: "+1 more campaign",
      address: "Bahçelievler, Karşıyaka",
      distance: "0.7 km",
      earned: "+1 token",
      codeLabel: "Your reward code",
      codeHint: "Show it at the till",
      earlier: "1h",
      rewardNotifBody: "You’ve collected 5 tokens — your free coffee is waiting at the till.",
      newCampaignTitle: "New campaign",
      newCampaignBody: "A birthday dessert is waiting for you.",
      otherCampaigns: [
        {
          badge: "Birthday",
          title: "A birthday dessert",
          body: "Your dessert’s on us on your birthday.",
          days: "7 days",
        },
        {
          badge: "Weekdays",
          title: "Weekday coffee offer",
          body: "A treat with your coffee, Monday to Friday.",
          days: "14 days",
        },
      ],
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
      autoTitle: "Automatic reminder",
      autoRule: "To customers who haven’t visited in 30 days",
      on: "On",
      sendTitle: "Send a notification",
      branches: ["Main branch", "Kadıköy branch", "Beşiktaş branch"],
      allBranches: "All branches",
      appLabel: "Business dashboard",
      rewardRate: "Rewards redeemed",
      branchTitle: "Tokens by branch",
      thisWeek: "This week",
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
      appLabel: "Personal app",
      intentLabel: "Today’s intention",
      intent: "Take a step for yourself today.",
      streakCount: "12",
      percent: "{n}%",
      fullDays: "full days",
      monthTitle: "Monthly log rate",
      yearTitle: "Yearly log rate",
      months: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
      prayersLabel: "prayers",
      settingsTitle: "Settings",
      settings: [
        { label: "Language", value: "English" },
        { label: "Theme", value: "Light" },
      ],
      deleteTitle: "Delete account",
      deleteBody: "Your account and its associated data will be deleted.",
      cancel: "Cancel",
      joined: "{name} joined",
    },
    iz: {
      appLabel: "Notes & journal",
      welcome: "Leave a trace of today.",
      noteTitle: "Weekend",
      noteText: "A slow morning, a long walk.",
      todos: ["Finish the book", "Call Mum", "Pick the photos"],
      tag: "#personal",
      reminder: "Saturday 10:00",
      pinned: "Pinned",
      dayName: "Saturday",
      dayNumber: "1",
      prompt: "What made you smile today?",
      journalText: "Went for an early walk; the air was cool and my head was clear.",
      moodLabel: "Mood",
      moods: ["Calm", "Happy", "Thoughtful", "Tired", "Anxious"],
      streak: "{n}-day writing streak",
      streakCount: "9",
      voiceTitle: "Voice note",
      voiceDuration: "0:42",
      transcriptLabel: "Transcribed",
      transcript: "After the meeting, rework the deck and send it by Friday.",
      onDevice: "On device only",
      photoCaption: "Evening at the beach",
      drawing: "Latest drawing",
      widgetNotes: "Notes",
      widgetToday: "Today’s page",
      widgetReminder: "Next reminder",
      lockTitle: "İz is locked",
      lockBody: "Use Face ID to unlock",
      apple: "Sign in with Apple",
      email: "Continue with email",
      forgot: "Forgot password",
      synced: "Synced",
      devices: ["iPhone", "iPad"],
    },
  },

  showcase: {
    otherProduct: "Other Otechi products",
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
    iz: {
      logoAlt: "İz app icon",
      docsTitle: "Legal Documents",
      docsNote: "These documents are published in Turkish only.",
      draftNote:
        "These documents are under review and may change before release.",
      docs: {
        privacy: "Privacy Policy",
        kvkk: "Data Protection Notice (KVKK)",
        terms: "User Agreement",
        accountDeletion: "Account & data deletion",
      },
    },
  },
};
