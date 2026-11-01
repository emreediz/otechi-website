// Turkish copy. This file is the source of truth for the dictionary shape;
// `en.ts` must provide the same keys (enforced by the `Dictionary` type).
// Brand names ("Otechi", "Ole", "Namaz Motivasyonu", "İz") live in src/config/brand.ts
// and are injected by components — never write them into this file.

export const tr = {
  common: {
    learnMore: "İnceleyin",
    // Screen-reader suffix for links that open in a new tab.
    newTab: "(yeni sekmede açılır)",
    draftNotice:
      "Bu metin taslak hâlindedir ve yayın öncesi güncellenecektir.",
    // Closing call to action (links to the Contact page).
    cta: {
      kicker: "Bir fikriniz mi var?",
      title: "Birlikte üretelim.",
    },
    // Store badges. "{app}" is replaced with the product name.
    stores: {
      appStore: {
        lines: ["App Store’dan", "İndir"],
        label: "{app} uygulamasını App Store’dan indir",
      },
      googlePlay: {
        lines: ["Google Play’den", "İndir"],
        label: "{app} uygulamasını Google Play’den indir",
      },
    },
  },

  nav: {
    skipToContent: "İçeriğe geç",
    home: "Ana Sayfa",
    products: "Ürünler",
    about: "Hakkımızda",
    contact: "İletişim",
    cta: "İletişime Geçin",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    language: "Dil",
    turkish: "Türkçe",
    english: "İngilizce",
    mainNav: "Ana menü",
    menu: "Menü",
    close: "Kapat",
    city: "İzmir",
    themeLight: "Açık tema",
    mail: "E-posta gönderin",
    productsTitle: "Ürünlerimiz",
    allProducts: "Tüm ürünler",
    newsTitle: "Duyurular",
    dismiss: "Duyuruyu kapat",
    // Short announcements in the menu (verified facts only).
    news: {
      namaz: "İstatistikler geldi: haftalık, aylık ve yıllık ilerlemeni gör.",
      panel: "QR kod, kampanya ve bildirimler tek panelde.",
      ole: "App Store ve Google Play’de.",
    },
    newLabel: "Yeni",
  },

  footer: {
    tagline: "Dijital ürünler ve yazılım geliştiren teknoloji stüdyosu.",
    appsTitle: "Uygulamalarımız",
    productsTitle: "Ürünler",
    companyTitle: "Kurumsal",
    legalTitle: "Yasal",
    rights: "© 2026 Otechi.",
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Şartları",
    kvkk: "KVKK Aydınlatma Metni",
    contactTitle: "İletişim",
    // Follows the product name: "Namaz Motivasyonu belgeleri".
    docsLabel: "belgeleri",
    backToTop: "Başa dön",
  },
  notFound: {
    title: "Sayfa bulunamadı.",
    body: "Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.",
    pages: "Sayfalar",
  },

  home: {
    meta: {
      title: "Otechi — yazılım ve dijital ürün stüdyosu",
      description:
        "Otechi; işletmeler, girişimler ve bireyler için modern dijital ürünler ve yazılım çözümleri geliştiren bir teknoloji stüdyosudur.",
    },
    hero: {
      kicker: "Yazılım ve dijital ürün stüdyosu",
      titleLines: ["Fikirden", "ürüne."],
      lead: "İşletmeler, girişimler ve bireyler için dijital ürünler ve yazılım geliştiriyoruz.",
      ctaPrimary: "Ürünleri Keşfedin",
      ctaSecondary: "Bizi Tanıyın",
      capsulesLabel: "Ürünlerimiz",
    },
    stage: {
      label: "Ürün vitrini",
      open: "İnceleyin",
      tags: {
        ole: "Mobil uygulama · Sadakat · Kampanyalar",
        panel: "Web paneli · Yönetim · Raporlar",
        namaz: "Mobil uygulama · Takip · İstatistikler",
        iz: "Mobil uygulama · Not · Günlük",
      },
    },
    intro: {
      statement:
        "Tasarımı, yazılımı ve ürün yaklaşımını tek süreçte birleştiriyoruz. Fikrin ilk taslağından yayına kadar her adımı birlikte yürütüyor, yayından sonra da ürünü büyütmeye devam ediyoruz.",
    },
    products: {
      kicker: "Ürünler",
      title: "Üç ürün.",
      titleMuted: "Tek stüdyo.",
      lead: "Kendi geliştirdiğimiz ve bugün yayında olan uygulamalar.",
      explore: "Keşfedin",
      items: {
        ole: {
          label: "Mobil uygulama",
          title: "İlk ziyaretten müdavimliğe.",
          body: "İşletmeler için dijital sadakat: müşteriler QR ya da NFC ile jeton kazanır, ödülünü alır, kampanyaları takip eder.",
          cta: "Ole’yi inceleyin",
        },
        panel: {
          label: "Web paneli",
          title: "Kontrol işletmede.",
          body: "QR kod üretimi, ödül doğrulama, kampanyalar, bildirimler ve tüm şubeler tek panelde.",
          cta: "Ole Panel’i inceleyin",
        },
        namaz: {
          label: "Mobil uygulama",
          title: "Beş vakit, tek bakışta.",
          body: "Kıldığın vakitleri işaretle, istatistiklerle ilerlemeni gör, grubunla birlikte motive ol.",
          cta: "Namaz Motivasyonu’nu inceleyin",
        },
        iz: {
          label: "Mobil uygulama",
          title: "Bugünden bir iz bırak.",
          body: "Notların, günlüğün, fotoğrafların ve sesli notların; iPhone ve iPad’inde tek yerde.",
          cta: "İz’i inceleyin",
        },
      },
      // Older product tiles (product pages) — replaced in the next phase.
      title2: "Ürünlerimiz",
      ole: {
        tagline:
          "İşletmeler için dijital sadakat ve kampanya yönetim platformu. QR ile sadakat, kampanya yönetimi ve müşteri iletişimi tek panelde.",
      },
      namaz: {
        tagline: "Beş vakit namaz takibi ve motivasyon uygulaması.",
      },
      oleCategory: "Sadakat ve kampanya platformu",
      namazCategory: "Namaz takibi ve motivasyon",
    },
    playground: {
      kicker: "Deneme alanı",
      title: "Bakmakla kalmayın.",
      titleMuted: "Deneyin.",
      lead: "Ürünlerimizin temel akışlarını burada deneyebilirsiniz.",
      note: "Temsili deneme alanıdır; gerçek işlem yapılmaz.",
      tablist: "Ürün seçin",
      ole: {
        title: "Jeton biriktir, ödülü al.",
        steps: [
          "Siparişinizi verirken QR kodu okutun.",
          "Her okutmada hesabınıza jeton eklenir.",
          "Beş jetonda ödülünüz hazır.",
        ],
        scan: "QR okut",
        redeem: "Ödülü kullan",
        scanned: "Jeton eklendi: {n} / 5",
        redeemed: "Ödül kullanıldı. Afiyet olsun!",
      },
      panel: {
        title: "Kod üret, kampanyayı yayınla.",
        steps: [
          "Şubeyi ve jeton sayısını seçin.",
          "QR kodu üretin; kod kısa süre geçerlidir.",
          "Kampanyayı tek tıkla yayına alın.",
        ],
        generate: "QR kod üret",
        publish: "Kampanyayı yayınla",
        unpublish: "Yayından kaldır",
        generated: "QR kod üretildi.",
        published: "Kampanya yayında.",
        unpublished: "Kampanya taslağa alındı.",
      },
      namaz: {
        title: "Vakitlerini işaretle.",
        steps: [
          "Kıldığınız vakitte “Kıldım”a dokunun.",
          "Günlük ilerlemeniz anında güncellenir.",
          "İstatistikler haftalık ve aylık ilerlemenizi gösterir.",
        ],
        hint: "Sağdaki “Kıldım” düğmelerine dokunun.",
        progress: "{n} / 5 vakit işaretlendi.",
      },
    },
    approach: {
      kicker: "Yaklaşım",
      title: "Nasıl çalışıyoruz?",
      items: [
        "Önce problemi netleştiririz.",
        "En küçük çalışan çözümü yayınlarız.",
        "Kullanıcı geri bildirimiyle iyileştiririz.",
        "Erişilebilirliği baştan düşünürüz.",
      ],
    },
    faq: {
      kicker: "Sık sorulan sorular",
      title: "Aklınızdaki sorular.",
      body: "Stüdyomuz ve ürünlerimiz hakkında merak edilenler.",
      ask: "Bize sorun",
      tabs: [
        {
          label: "Genel",
          items: [
            {
              q: "Otechi ne tür işler yapıyor?",
              a: "İşletmeler, girişimler ve bireyler için dijital ürünler ve yazılım çözümleri geliştiriyoruz; tasarımdan yayına kadar süreci bir bütün olarak yürütüyoruz.",
            },
            {
              q: "Sizinle nasıl iletişime geçebilirim?",
              a: "Bize telefon veya e-posta ile ulaşabilirsiniz; tüm iletişim bilgilerimiz bu sayfanın başında.",
              contactLink: "İletişim bilgilerine gidin",
            },
          ],
        },
        {
          label: "Ürünler",
          items: [
            {
              q: "Şu anda hangi ürünler var?",
              a: "İşletmeler için Ole ve Ole Panel, bireyler için Namaz Motivasyonu yayında.",
            },
            {
              q: "Ole ile Ole Panel arasındaki fark nedir?",
              a: "Ole, müşterilerin jeton kazanıp ödül aldığı mobil uygulamadır. Ole Panel ise işletmelerin QR kod ürettiği, ödülleri doğruladığı ve kampanyalarını yönettiği web panelidir.",
            },
            {
              q: "Ole’yi nasıl kullanmaya başlarım?",
              a: "Ole sayfasındaki bilgileri inceleyip oletr.com üzerinden başlayabilirsiniz.",
            },
            {
              q: "Namaz Motivasyonu’nu nereden indirebilirim?",
              a: "App Store ve Google Play’den indirebilirsiniz.",
            },
          ],
        },
      ],
    },
    // Legacy rows for the About page (replaced in a later phase).
    work: {
      kicker: "Seçili işler",
      title: "Geliştirdiğimiz ürünler.",
      rows: {
        ole: {
          kind: "Mobil uygulama",
          desc: "Dijital sadakat, kampanyalar ve bildirimler",
        },
        olePanel: {
          suffix: "Panel",
          kind: "Web paneli",
          desc: "İşletmeler için yönetim paneli",
        },
        namaz: {
          kind: "Mobil uygulama",
          desc: "Beş vakit takibi ve grup motivasyonu",
        },
        next: {
          name: "Sıradaki fikir",
          kind: "Stüdyo",
          desc: "Fikrinizi birlikte ürüne dönüştürelim",
        },
      },
    },
  },

  // Labels shared by the product (case study) pages.
  case: {
    howLabel: "Nasıl çalışır?",
    stepLabel: "Adım",
    momentsLabel: "Gerçek anlar",
    introLabel: "Giriş",
    featuresLabel: "Öne çıkanlar",
    startLabel: "Başla",
    nextLabel: "Sonraki ürün",
    supportLabel: "Destek",
    forBusiness: "İşletmeler için",
    forCustomers: "Müşteriler için",
  },

  products: {
    meta: {
      title: "Ürünler — Otechi",
      description:
        "Otechi çatısı altında geliştirdiğimiz dijital ürünler: işletmeler için Ole ve Ole Panel, bireyler için Namaz Motivasyonu ve İz.",
    },
    kicker: "Ürünler",
    titleLines: ["Geliştirdiğimiz", "ürünler."],
    lead: "İşletmeler ve bireyler için geliştirdiğimiz uygulamalar.",
    factLabels: {
      platform: "Platform",
      audience: "Kimin için",
      status: "Durum",
    },
    facts: {
      ole: {
        platform: "iOS · Android",
        audience: "İşletmelerin müşterileri",
        status: "App Store ve Google Play’de",
      },
      panel: {
        platform: "Web",
        audience: "Ole kullanan işletmeler",
        status: "Yayında",
      },
      namaz: {
        platform: "iOS · Android",
        audience: "Bireyler",
        status: "App Store ve Google Play’de",
      },
      iz: {
        platform: "iPhone · iPad",
        audience: "Bireyler",
        status: "Yakında App Store’da",
      },
    },
  },

  ole: {
    meta: {
      title: "Ole — işletmeler için dijital müşteri sadakati",
      description:
        "Ole; işletmeler için dijital müşteri sadakati platformu: QR ve NFC ile jeton, ödüller, kampanyalar, bildirimler ve çoklu şube yönetimi tek panelde. Müşteriler için ücretsiz.",
    },
    hero: {
      kicker: "Bir Otechi ürünü",
      titleLines: ["İlk ziyaretten", "müdavimliğe."],
      lead: "Müşterilerini ödüllendir. Kampanyalarını duyur. Yeniden gelmeleri için bir sebep ver.",
      ctaDemo: "Demo talep et",
      capsules: ["Sadakat", "Bildirimler", "Kampanyalar", "Ödüller", "Çoklu şube", "Raporlar"],
    },
    intro:
      "Ole, sadakat programını, kampanyaları ve bildirimleri tek uygulamada toplar. Müşterin her ziyarette jeton kazanır; sen de onu yeniden ağırlarsın.",
    features: {
      kicker: "Müşteri tarafı",
      title: "Her ziyaret",
      titleMuted: "bir adım daha.",
      reward: {
        title: "Jeton biriktir, ödülü al.",
        body: "Her ziyarette jeton; hedefe ulaşınca ödül hazır.",
      },
      scan: {
        title: "Okut ya da yaklaştır.",
        body: "Müşterin QR’ı okutur ya da telefonunu Ole NFC’ye yaklaştırır.",
      },
      notify: {
        title: "Geri gelmesi için bir sebep.",
        body: "Bir süredir uğramayanlara otomatik hatırlatma gider.",
      },
      campaign: {
        title: "Kampanyaların görünür.",
        body: "Kampanyaların, Ole’deki işletme sayfanda müşterine görünür.",
      },
    },
    steps: [
      { title: "Okut.", body: "Siparişini verirken QR’ı okut ya da telefonunu Ole NFC’ye yaklaştır." },
      { title: "Biriktir.", body: "Her ziyarette jeton kazanırsın; hedefe ulaşınca ödülün hazır." },
      { title: "Ödülünü al.", body: "Kasada kodunu göster, ödülünü al." },
      { title: "Geri gel.", body: "Bir süredir uğramadıysan işletmen seni bir hatırlatmayla bekler." },
    ],
    marquee: ["Jeton", "Ödül", "Kampanya", "Bildirim", "QR", "NFC"],
    free: {
      value: "₺0",
      title: "Müşteriler için ücretsiz.",
      body: "Uygulamayı indirmek ve kullanmak ücretsiz.",
    },
    panelLink: {
      label: "İşletme tarafı",
      title: "Hepsini tek panelden yönet.",
      body: "QR kod üretimi, ödül doğrulama, kampanyalar, bildirimler ve tüm şubeler Ole Panel’de.",
      cta: "Ole Panel’i incele",
    },
    facts: {
      platformLabel: "Platform",
      platform: "iOS · Android",
      modelLabel: "İş modeli",
      model: "Abonelik, komisyon yok",
      customersLabel: "Müşteriler için",
      customers: "Ücretsiz",
      statusLabel: "Durum",
      status: "App Store ve Google Play’de",
    },
    closing: {
      lines: ["Ole’yi", "işletmende dene."],
      supportLabel: "Ole destek",
    },
    alt: {
      nfc: "Ole NFC donanımı",
    },
  },

  olePanel: {
    meta: {
      title: "Ole Panel — işletmeler için sadakat yönetim paneli",
      description:
        "Ole Panel; Ole kullanan işletmelerin QR kod ürettiği, ödülleri doğruladığı, kampanya ve bildirimlerini yönettiği, tüm şubelerini tek yerden izlediği web paneli.",
    },
    hero: {
      kicker: "Bir Otechi ürünü",
      titleLines: ["Kontrol", "sende."],
      lead: "Ödülleri, kampanyaları ve bildirimleri tek panelden yönet. Tüm şubelerin aynı ekranda.",
      ctaPanel: "Panele giriş yap",
      ctaDemo: "Demo talep et",
      capsules: ["QR kod", "Kod doğrulama", "Kampanyalar", "Raporlar"],
    },
    features: {
      kicker: "İşletme tarafı",
      title: "Günlük işler,",
      titleMuted: "birkaç tıkta.",
      qr: {
        title: "QR kodu saniyeler içinde üret.",
        body: "Şubeyi ve jeton sayısını seç; müşterin okuttuğunda jeton hesabına eklenir.",
      },
      verify: {
        title: "Ödülü kodla doğrula.",
        body: "Müşterinin paylaştığı 6 haneli kodu gir, ödülü teslim et.",
      },
      campaigns: {
        title: "Kampanyaların tek ekranda.",
        body: "Hoş geldin, doğum günü ve dönemsel kampanyaları oluştur, düzenle, yayına al.",
      },
      notify: {
        title: "Müşterinle iletişimde kal.",
        body: "Bildirim gönder ya da otomatik hatırlatmaları aç.",
      },
      branches: {
        title: "Çoklu şube.",
        body: "Tüm şubelerini tek hesaptan yönet.",
      },
      reports: {
        title: "Raporlar.",
        body: "Jeton ve ödül hareketlerini takip et.",
      },
    },
    intro:
      "Ole Panel, Ole kullanan işletmelerin günlük işlerini tek ekranda toplar: QR kod üretir, ödülleri doğrular, kampanya ve bildirimleri yönetir, tüm şubeleri izler.",
    steps: [
      { title: "QR üret.", body: "Şubeyi ve jeton sayısını seç, kodu müşterine okut." },
      { title: "Doğrula.", body: "Müşterinin 6 haneli kodunu gir, ödülü teslim et." },
      { title: "Yayınla.", body: "Kampanyanı oluştur, tek tıkla yayına al." },
      { title: "İzle.", body: "Jeton ve ödül hareketlerini tüm şubelerinde takip et." },
    ],
    marquee: ["QR kod", "Doğrulama", "Kampanyalar", "Bildirimler", "Şubeler", "Raporlar"],
    noCommission: {
      value: "%0",
      title: "Komisyon yok.",
      body: "Abonelik modeli; satışlarından pay alınmaz.",
    },
    appLink: {
      label: "Müşteri tarafı",
      title: "Müşterilerin Ole uygulamasında.",
      cta: "Ole’yi incele",
    },
    closing: {
      lines: ["İşletmeni", "tek panelden yönet."],
    },
  },

  namaz: {
    meta: {
      title: "Namaz Motivasyonu — beş vakit namaz takibi ve motivasyon",
      description:
        "Namaz Motivasyonu; beş vakit namaz takibi, istatistikler ve grup motivasyonu için sade bir uygulama. App Store ve Google Play’de.",
    },
    hero: {
      kicker: "Bir Otechi ürünü",
      titleLines: ["Beş vakit,", "tek bakışta."],
      lead: "Beş vakit namazını takip et, ilerlemeni gör, motivasyonunu koru.",
      capsules: ["Beş vakit", "İstatistikler", "Gruplar", "Seri"],
    },
    intro:
      "Namaz Motivasyonu, beş vakti sade bir ekranda takip etmeni sağlar. İstatistiklerle ilerlemeni görür, grubunla birlikte motive olursun.",
    features: {
      kicker: "Uygulamada",
      title: "Sade, sakin,",
      titleMuted: "senin temponda.",
      beats: [
        {
          title: "İşaretle.",
          body: "Kıldığın vakitleri işaretle, günün nasıl geçtiğini gör.",
        },
        {
          title: "Gör.",
          body: "Haftalık, aylık ve yıllık istatistiklerle ilerlemeni ve serini takip et.",
        },
        {
          title: "Birlikte.",
          body: "Grup ya da oda kur, davet koduyla katıl; birlikte motive ol.",
        },
      ],
    },
    steps: [
      { title: "İşaretle.", body: "Kıldığın vakti tek dokunuşla işaretle." },
      { title: "Gör.", body: "Günlük ilerlemen halkada dolar; haftan istatistiklerde." },
      { title: "Sürdür.", body: "Tam günler serini büyütür; motivasyonun görünür olur." },
      { title: "Birlikte.", body: "Grubunu kur, davet koduyla arkadaşlarını çağır." },
    ],
    marquee: ["Beş vakit", "İstatistik", "Seri", "Gruplar", "Odalar", "Motivasyon"],
    bento: {
      stats: {
        title: "İstatistikler.",
        body: "Haftalık, aylık ve yıllık ilerlemeni tek bakışta gör.",
      },
      groups: {
        title: "Gruplar ve odalar.",
        body: "Davet koduyla katıl, birlikte motive ol.",
      },
      five: {
        value: "5",
        title: "Beş vakit, tek ekranda.",
        body: "Günün namazlarını sade bir listede takip et.",
      },
      privacy: {
        title: "Gizlilik.",
        body: "Hesabını ve verilerini uygulamanın içinden silebilirsin.",
      },
    },
    privacy: {
      title: "Gizlilik",
      body: "Uygulamanın hangi verileri hangi amaçlarla işlediği ve nasıl sakladığı; Gizlilik Politikası, KVKK Aydınlatma Metni ve Kullanıcı Sözleşmesi’nde açıklanmıştır. Hesabını uygulama içinden silebilirsin; hesabınla ilişkili veriler, yasal saklama yükümlülükleri saklı kalmak kaydıyla silinir.",
    },
    closing: {
      // Follows the product name: "Namaz Motivasyonu / App Store ve …".
      title: "App Store ve Google Play’de.",
    },
  },

  // İz product page. Every claim is checked against the İz app repo
  // (features, permissions, widgets, sign-in); no prices or user counts.
  iz: {
    meta: {
      title: "İz — not ve günlük uygulaması",
      description:
        "İz; notlarını, günlüğünü, fotoğraflarını, çizimlerini ve sesli notlarını tek yerde tutan, iPhone ve iPad için kişisel not ve günlük uygulaması.",
    },
    hero: {
      lead: "Notların ve günlüğün, iPhone ve iPad’inde seninle.",
    },
    intro:
      "İz, kişisel not ve günlük uygulamasıdır. Aklındakini hızlıca not alır, her güne bir günlük sayfası açar; fotoğrafla, çizimle ve sesle o günden bir iz bırakırsın.",
    steps: [
      {
        title: "Not al.",
        body: "Paragraf, madde ve yapılacak bloklarıyla yaz; etiketle, sabitle, hatırlatıcı kur.",
      },
      {
        title: "Günlüğünü yaz.",
        body: "Her güne bir sayfa. Günün önerisiyle başla, ruh hâlini seç, yazma serini sürdür.",
      },
      {
        title: "Sesle anlat.",
        body: "Basılı tutup sesli not kaydet; konuşma tanıma sesini yazıya döksün.",
      },
      {
        title: "Her cihazda aç.",
        body: "Hesabına bağlı notların ve günlüğün iPhone ile iPad arasında eşitlenir.",
      },
    ],
    marquee: ["Notlar", "Günlük", "Sesli not", "Çizim", "Fotoğraf", "Widget"],
    bento: {
      devices: {
        title: "iPhone ve iPad.",
        body: "Tek uygulama, iki cihaz. iPad’de kenar çubuğu, liste ve düzenleyici yan yana durur.",
      },
      signIn: {
        title: "Apple ile ya da e-postayla.",
        body: "Apple ile giriş yap veya e-postayla hesap oluştur. Şifreni unutursan e-postana gelen bağlantıyla yenile.",
      },
      media: {
        title: "Fotoğraf ve çizim.",
        body: "Kameradan çek ya da galeriden seç, açıklama ekle; parmağınla veya Apple Pencil ile çiz.",
      },
      voice: {
        title: "Ses, yazıya dönsün.",
        body: "Mikrofonla sesli not kaydet; konuşma tanıma notunu yazıya döker. “Yalnızca cihazda” ayarı varsayılan olarak açıktır.",
      },
      widgets: {
        title: "Widget’lar.",
        body: "Notlar, sesli not, bugünün sayfası, son çizim ve kilit ekranında sıradaki hatırlatıcı.",
      },
      lock: {
        title: "Face ID ile kilit.",
        body: "İz’i ve günlüğünü Face ID, Touch ID veya cihaz parolasıyla kilitle.",
      },
    },
    useCases: {
      label: "Kullanım anları",
      items: [
        {
          title: "Gün sonu günlüğü",
          body: "Günün sayfasını aç, ruh hâlini seç, birkaç satır yaz; istersen bir fotoğraf ekle.",
        },
        {
          title: "Aklına geleni kaçırma",
          body: "Ana sayfadan hızlı not al, yapılacakları işaretle, saatli hatırlatıcı kur.",
        },
        {
          title: "Yazmak yerine konuş",
          body: "Yoldayken sesli not kaydet; yazıya dökülen notunu sonra düzenle.",
        },
        {
          title: "iPad’de çiz, iPhone’da gör",
          body: "Apple Pencil ile çizdiğin sayfa, hesabınla diğer cihazında da açılır.",
        },
      ],
    },
    languages: {
      label: "Diller",
      body: "Uygulama arayüzü Türkçe, İngilizce ve İspanyolca; istersen cihazının dilini izler.",
    },
    privacy: {
      title: "Gizlilik",
      body: "İz’de reklam, kullanıcı davranış analitiği veya üçüncü taraf hata raporlama aracı bulunmaz. Kayıtların hesabına bağlı olarak saklanır ve cihazların arasında eşitlenir; hatırlatıcı bildirimleri cihazında planlanır. Hesap ve veri silme taleplerini info@oletr.com adresine iletebilirsin.",
    },
    closing: {
      // Follows the product name: "İz / yakında App Store’da."
      title: "yakında App Store’da.",
      soon: "Yakında App Store’da",
      soonNote: "iPhone ve iPad için",
    },
  },

  about: {
    meta: {
      title: "Hakkımızda — Otechi",
      description:
        "Otechi, işletmeler, girişimler ve bireyler için dijital ürünler ve yazılım çözümleri geliştiren bir teknoloji stüdyosudur.",
    },
    title: "Hakkımızda",
    titleLines: ["Fikirden yayına,", "tek süreçte."],
    lead: "Otechi, dijital ürünler ve yazılım çözümleri geliştiren bir teknoloji stüdyosudur.",
    paragraphs: [
      "İşletmeler, girişimler ve bireyler için fikirleri işlevsel, ölçeklenebilir ve iyi tasarlanmış dijital deneyimlere dönüştürürüz.",
      "Tasarım, yazılım geliştirme ve ürün yaklaşımını aynı süreç içinde ele alır; kısa yoldan çalışan bir ilk sürüm çıkarır, sonra veriyle ve kullanıcı geri bildirimiyle büyütürüz.",
      "Ole ve Namaz Motivasyonu bugün geliştirdiğimiz ürünlerden ikisi. Bunun yanında farklı fikirler ve projeler için de dijital ürün ve yazılım geliştiriyoruz; geliştirdiğimiz ürünleri yayından sonra da uzun vadeli olarak iyileştiririz.",
    ],
    approachTitle: "Çalışma yaklaşımımız",
    approach: [
      {
        title: "Bütünsel süreç",
        body: "Tasarım, geliştirme ve ürün kararlarını birbirinden ayırmadan tek ekip olarak yürütürüz.",
      },
      {
        title: "Erken ve net",
        body: "Önce problemi netleştirir, en küçük çalışan çözümü yayınlarız.",
      },
      {
        title: "Kalıcı ilgi",
        body: "Ürünleri yayınladıktan sonra da bakımını ve gelişimini sürdürürüz.",
      },
    ],
    work: {
      kicker: "Ne üretiyoruz",
      title: "Geliştirdiğimiz ürünler.",
    },
    valuesTitle: "Değerlerimiz",
    values: [
      "Sade ve anlaşılır tasarım",
      "Erişilebilirliği baştan düşünmek",
      "Ölçeklenebilir ve sürdürülebilir yazılım",
    ],
  },

  contact: {
    meta: {
      title: "İletişim — Otechi",
      description: "Otechi ile telefon veya e-posta üzerinden iletişime geçin.",
    },
    title: "İletişim",
    headline: "Konuşalım.",
    body: "Sorularınız ve talepleriniz için bize telefon veya e-posta ile ulaşabilirsiniz.",
    phoneLabel: "Telefon",
    phone: "0 (232) 332 18 14",
    phoneHref: "tel:+902323321814",
    emailLabel: "E-posta",
    email: "info@oletr.com",
    emailHref: "mailto:info@oletr.com",
    secondary: "Bu sırada ürünlerimize göz atabilirsiniz.",
    cta: "Ürünleri Keşfedin",
  },

  legal: {
    lastUpdatedLabel: "Son güncelleme",
    lastUpdatedValue: "Yakında",
    toc: "İçindekiler",
    related: "Diğer belgeler",
    privacy: {
      meta: {
        title: "Gizlilik Politikası — Otechi",
        description: "Otechi Gizlilik Politikası (taslak).",
      },
      title: "Gizlilik Politikası",
      intro:
        "Bu politika, Otechi ürünlerinde kişisel verilerin nasıl işlendiğini açıklamak için hazırlanmaktadır. Ayrıntılar, ürünlerin teknik yapısı kesinleştiğinde yayımlanacaktır.",
      sections: [
        { heading: "Toplanan bilgiler", body: "Bu bölüm hazırlanıyor." },
        { heading: "Bilgilerin kullanımı", body: "Bu bölüm hazırlanıyor." },
        { heading: "Üçüncü taraf hizmetler", body: "Bu bölüm hazırlanıyor." },
        { heading: "Saklama süreleri", body: "Bu bölüm hazırlanıyor." },
        { heading: "Haklarınız", body: "Bu bölüm hazırlanıyor." },
        { heading: "İletişim", body: "İletişim kanalları yakında paylaşılacak." },
      ],
    },
    terms: {
      meta: {
        title: "Kullanım Şartları — Otechi",
        description: "Otechi Kullanım Şartları (taslak).",
      },
      title: "Kullanım Şartları",
      intro:
        "Bu sayfa, Otechi web sitesinin ve ürünlerinin kullanımına ilişkin şartları içerecek şekilde hazırlanmaktadır.",
      sections: [
        { heading: "Hizmetin kapsamı", body: "Bu bölüm hazırlanıyor." },
        { heading: "Kullanım koşulları", body: "Bu bölüm hazırlanıyor." },
        { heading: "Fikri mülkiyet", body: "Bu bölüm hazırlanıyor." },
        { heading: "Sorumluluğun sınırlandırılması", body: "Bu bölüm hazırlanıyor." },
        { heading: "Değişiklikler", body: "Bu bölüm hazırlanıyor." },
      ],
    },
    kvkk: {
      meta: {
        title: "KVKK Aydınlatma Metni — Otechi",
        description: "Otechi KVKK Aydınlatma Metni (taslak).",
      },
      title: "KVKK Aydınlatma Metni",
      intro:
        "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında hazırlanacak aydınlatma metni yayın öncesi burada yer alacaktır.",
      sections: [
        { heading: "Veri sorumlusu", body: "Bu bölüm hazırlanıyor." },
        { heading: "İşlenen kişisel veriler", body: "Bu bölüm hazırlanıyor." },
        { heading: "İşleme amaçları", body: "Bu bölüm hazırlanıyor." },
        { heading: "Aktarım", body: "Bu bölüm hazırlanıyor." },
        { heading: "Haklarınız ve başvuru", body: "Bu bölüm hazırlanıyor." },
      ],
    },
  },

  // Strings inside the coded app mock-ups (illustrative UI, sample data).
  mock: {
    caption: "Temsili arayüz",
    // Percent in the artworks: "%60" in Turkish.
    percent: "%{n}",
    ole: {
      category: "3. nesil kahveci",
      rewardLabel: "Ödül",
      reward: "Kahve ikramı",
      tokensLeft: "Ödüle {n} jeton kaldı",
      rewardReady: "Ödülün hazır!",
      now: "şimdi",
      notifTitle: "Seni özledik!",
      notifBody: "Bir süredir uğramadın; en sevdiğin kahve seni bekliyor.",
      open: "Açık",
      campaignBadge: "Hoş geldin",
      campaignTitle: "İlk kahven bizden",
      campaignBody: "İlk ziyaretine özel; kahveni seç, keyfini çıkar.",
      campaignDays: "30 gün",
      appLabel: "Müşteri uygulaması",
      jeton: "Jeton",
      moreCampaigns: "+1 kampanya daha",
      address: "Bahçelievler Mah., Karşıyaka",
      distance: "0.7 km",
      earned: "+1 jeton",
      codeLabel: "Ödül kodun",
      codeHint: "Kasada göster",
      earlier: "1 sa",
      rewardNotifBody: "5 jetonunu topladın; kahve ikramın kasada seni bekliyor.",
      newCampaignTitle: "Yeni kampanya",
      newCampaignBody: "Doğum gününe tatlı ikramı seni bekliyor.",
      // More sample campaigns for the highlights deck (after the welcome one).
      otherCampaigns: [
        {
          badge: "Doğum günü",
          title: "Doğum gününe tatlı ikramı",
          body: "Doğum gününde tatlın bizden.",
          days: "7 gün",
        },
        {
          badge: "Hafta içi",
          title: "Hafta içi kahve kampanyası",
          body: "Pazartesiden cumaya kahvende sana özel ikram.",
          days: "14 gün",
        },
      ],
    },
    panel: {
      nav: ["Genel bakış", "QR kod", "Kampanyalar", "Bildirimler", "Şubeler", "Raporlar"],
      kpis: [
        { label: "Bugün okutulan QR", value: "128" },
        { label: "Kullanılan ödül", value: "23" },
        { label: "Aktif kampanya", value: "3" },
      ],
      chartTitle: "Jeton hareketleri",
      days: ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"],
      campaignsTitle: "Kampanyalar",
      campaigns: [
        "İlk ziyarete özel ikram",
        "Doğum gününe tatlı ikramı",
        "Hafta içi kahve kampanyası",
      ],
      live: "Yayında",
      draft: "Taslak",
      qrTitle: "QR kod üretimi",
      branch: "Şube",
      branchValue: "Merkez şube",
      tokens: "Jeton sayısı",
      generate: "QR kod üret",
      validFor: "Kalan süre",
      verifyTitle: "Kod doğrulama",
      verify: "Doğrula",
      verified: "Ödül teslim edildi",
      autoTitle: "Otomatik hatırlatma",
      autoRule: "30 gündür uğramayan müşterilere",
      on: "Açık",
      sendTitle: "Bildirim gönder",
      branches: ["Merkez şube", "Kadıköy şubesi", "Beşiktaş şubesi"],
      allBranches: "Tüm şubeler",
      appLabel: "İşletme paneli",
      rewardRate: "Ödül kullanımı",
      branchTitle: "Şubelere göre jeton",
      thisWeek: "Bu hafta",
    },
    namaz: {
      today: "Bugün",
      prayers: ["Sabah", "Öğle", "İkindi", "Akşam", "Yatsı"],
      times: ["05:11", "13:16", "16:52", "19:44", "21:08"],
      done: "{n} / 5 vakit tamamlandı",
      mark: "Kıldım",
      weekTitle: "Haftalık kayıt oranı",
      periods: ["Hafta", "Ay", "Yıl"],
      days: ["Pt", "Sa", "Ça", "Pe", "Cu", "Ct", "Pz"],
      streak: "Mevcut tam gün serisi",
      groupName: "Dostluk Halkası",
      groupMeta: "3 üye · bugünkü namaz durumu",
      invite: "Davet kodu",
      appLabel: "Kişisel uygulama",
      intentLabel: "Bugünün niyeti",
      intent: "Bugün kendin için bir adım at.",
      streakCount: "12",
      percent: "%{n}",
      fullDays: "tam gün",
      monthTitle: "Aylık kayıt oranı",
      yearTitle: "Yıllık kayıt oranı",
      months: ["O", "Ş", "M", "N", "M", "H", "T", "A", "E", "E", "K", "A"],
      prayersLabel: "vakit",
      settingsTitle: "Ayarlar",
      settings: [
        { label: "Dil", value: "Türkçe" },
        { label: "Tema", value: "Açık" },
      ],
      deleteTitle: "Hesabı sil",
      deleteBody: "Hesabın ve hesabınla ilişkili veriler silinir.",
      cancel: "Vazgeç",
      joined: "{name} katıldı",
    },
    // İz mock-ups (sample content; the moods are the app's own five).
    iz: {
      appLabel: "Not ve günlük",
      welcome: "Bugünden bir iz bırak.",
      noteTitle: "Hafta sonu",
      noteText: "Yavaş bir sabah, uzun bir yürüyüş.",
      todos: ["Kitabı bitir", "Annemi ara", "Fotoğrafları seç"],
      tag: "#kişisel",
      reminder: "Cumartesi 10:00",
      pinned: "Sabitlendi",
      dayName: "Cumartesi",
      dayNumber: "1",
      prompt: "Bugün seni ne gülümsetti?",
      journalText: "Sabah erkenden yürüdüm; hava serindi, kafam berrak.",
      moodLabel: "Ruh hâli",
      moods: ["Huzurlu", "Mutlu", "Düşünceli", "Yorgun", "Kaygılı"],
      streak: "{n} gündür yazıyorsun",
      streakCount: "9",
      voiceTitle: "Sesli not",
      voiceDuration: "0:42",
      transcriptLabel: "Yazıya döküldü",
      transcript: "Toplantıdan sonra sunumu düzenle, cumaya kadar gönder.",
      onDevice: "Yalnızca cihazda",
      photoCaption: "Sahilde akşam",
      drawing: "Son çizim",
      widgetNotes: "Notlar",
      widgetToday: "Bugünün sayfası",
      widgetReminder: "Sıradaki hatırlatıcı",
      lockTitle: "İz kilitli",
      lockBody: "Açmak için Face ID kullan",
      apple: "Apple ile giriş yap",
      email: "E-postayla devam et",
      forgot: "Şifremi unuttum",
      synced: "Eşitlendi",
      devices: ["iPhone", "iPad"],
    },
  },

  showcase: {
    otherProduct: "Diğer Otechi ürünleri",
    home: {
      studioTitle: "Fikirden yayına, tek süreçte.",
      studioBody:
        "Tasarım, yazılım geliştirme ve ürün yaklaşımını aynı süreç içinde ele alırız; işletmeler, girişimler ve bireyler için işlevsel, ölçeklenebilir ve iyi tasarlanmış dijital deneyimler kurarız.",
      namazLogoAlt: "Namaz Motivasyonu görseli",
    },
    ole: {
      artAlt: "Ole jetonu görseli",
    },
    namaz: {
      artAlt: "Namaz Motivasyonu görseli",
      heroShotAlt: "Namaz Motivasyonu — Bugün ekranı",
      groupShotAlt: "Namaz Motivasyonu — grup ekranı",
      statsShotAlt: "Namaz Motivasyonu — istatistik ekranı",
      docsTitle: "Yasal Belgeler",
      docsNote: "Bu belgeler yalnızca Türkçe olarak yayımlanmıştır.",
      docs: {
        privacy: "Gizlilik Politikası",
        kvkk: "KVKK Aydınlatma Metni",
        terms: "Kullanıcı Sözleşmesi",
        accountDeletion: "Hesap ve Verileri Silme",
      },
    },
    iz: {
      logoAlt: "İz uygulama simgesi",
      docsTitle: "Yasal Belgeler",
      docsNote: "Bu belgeler yalnızca Türkçe olarak yayımlanmıştır.",
      // Shown while IZ_LEGAL_DRAFT is true (product page and documents).
      draftNote:
        "Bu metin inceleme aşamasındadır ve yayın öncesinde güncellenebilir.",
      docs: {
        privacy: "Gizlilik Politikası",
        kvkk: "KVKK Aydınlatma Metni",
      },
    },
  },
};

// The English dictionary is type-checked against this shape (same keys,
// same value kinds — wording differs). Literal types are intentionally
// widened to `string` so translations are allowed.
export type Dictionary = typeof tr;
