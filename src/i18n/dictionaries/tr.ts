// Turkish copy. This file is the source of truth for the dictionary shape;
// `en.ts` must provide the same keys (enforced by the `Dictionary` type).
// Brand names ("Otechi", "Ole", "Namaz Motivasyonu") live in src/config/brand.ts
// and are injected by components — never write them into this file.

export const tr = {
  common: {
    comingSoon: "Yakında",
    learnMore: "İncele",
    backToProducts: "Ürünlere dön",
    draftNotice:
      "Bu metin taslak hâlindedir ve yayın öncesi güncellenecektir.",
  },

  nav: {
    skipToContent: "İçeriğe geç",
    home: "Ana Sayfa",
    products: "Ürünler",
    about: "Hakkımızda",
    contact: "İletişim",
    cta: "Ürünleri Keşfet",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    language: "Dil",
    turkish: "Türkçe",
    english: "İngilizce",
  },

  footer: {
    tagline: "Yazılım ve dijital ürün stüdyosu.",
    productsTitle: "Ürünler",
    companyTitle: "Kurumsal",
    legalTitle: "Yasal",
    rights: "© 2026 Otechi.",
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Şartları",
    kvkk: "KVKK Aydınlatma Metni",
  },

  home: {
    meta: {
      title: "Otechi — yazılım ve dijital ürün stüdyosu",
      description:
        "Otechi; işletmeler, girişimler ve bireyler için modern dijital ürünler ve yazılım çözümleri geliştiren bir teknoloji stüdyosudur.",
    },
    hero: {
      kicker: "Yazılım ve dijital ürün stüdyosu",
      title: "İyi fikirleri, güçlü dijital ürünlere dönüştürüyoruz.",
      subtitle:
        "Otechi; işletmeler, girişimler ve bireyler için modern dijital ürünler ve yazılım çözümleri geliştirir. Fikrin ilk taslağından yayına kadar tasarım, geliştirme ve ürün deneyimini bir bütün olarak ele alırız.",
      ctaPrimary: "Ürünlerimizi Keşfet",
      ctaSecondary: "Bizi Tanıyın",
    },
    what: {
      title: "Ürün odaklı bir teknoloji stüdyosu.",
      intro:
        "Otechi, dijital ürünler ve yazılım çözümleri geliştiren bir teknoloji stüdyosudur.",
      items: [
        {
          title: "Uçtan uca ürün geliştirme",
          body: "Fikrin ilk taslağından yayına kadar tasarım, geliştirme ve ürün deneyimini bir bütün olarak ele alırız.",
        },
        {
          title: "İyi tasarım",
          body: "Sade arayüz, hızlı öğrenme ve gereksiz karmaşadan kaçınma.",
        },
        {
          title: "Uzun vadeli sahiplenme",
          body: "Geliştirdiğimiz ürünleri yayından sonra da uzun vadeli olarak iyileştiririz.",
        },
      ],
    },
    products: {
      title: "Ürünlerimiz",
      subtitle: "Otechi çatısı altında geliştirdiğimiz dijital ürünler.",
      ole: {
        tagline:
          "İşletmeler için dijital sadakat ve kampanya yönetim platformu. QR ile sadakat, kampanya yönetimi ve müşteri iletişimi tek panelde.",
      },
      namaz: {
        tagline: "Beş vakit namaz takibi ve motivasyon uygulaması.",
      },
    },
    approach: {
      title: "Nasıl çalışıyoruz?",
      items: [
        "Önce problemi netleştiririz.",
        "En küçük çalışan çözümü yayınlarız.",
        "Kullanıcı geri bildirimiyle iyileştiririz.",
        "Erişilebilirliği baştan düşünürüz.",
      ],
    },
    aboutStrip: {
      title: "Otechi hakkında",
      body: "Dijital ürünler ve yazılım çözümleri geliştiren bir teknoloji stüdyosuyuz. Ole ve Namaz Motivasyonu geliştirdiğimiz ürünlerden ikisi; farklı fikir ve projeler için de dijital ürün ve yazılım geliştiriyoruz.",
      cta: "Hakkımızda",
    },
    faq: {
      title: "Sıkça sorulan sorular",
      items: [
        {
          q: "Otechi ne tür işler yapıyor?",
          a: "İşletmeler, girişimler ve bireyler için dijital ürünler ve yazılım çözümleri geliştiriyoruz.",
        },
        {
          q: "Şu anda hangi ürünler var?",
          a: "İşletmeler için Ole ve bireyler için Namaz Motivasyonu. Yeni fikirler için geliştirmeye devam ediyoruz.",
        },
        {
          q: "Ole’yi nasıl kullanmaya başlarım?",
          a: "Ole sayfasındaki bilgileri inceleyip oletr.com üzerinden başlayabilirsin.",
        },
        {
          q: "Sizinle nasıl iletişime geçebilirim?",
          a: "İletişim kanallarımız çok yakında sitede yer alacak.",
        },
      ],
    },
    closing: {
      title: "Ürünlerimize göz at.",
      ctaOle: "Ole’yi İncele",
      ctaNamaz: "Namaz Motivasyonu’nu İncele",
    },
  },

  products: {
    meta: {
      title: "Ürünler — Otechi",
      description:
        "Otechi çatısı altında geliştirdiğimiz dijital ürünler: işletmeler için Ole, bireyler için Namaz Motivasyonu.",
    },
    title: "Ürünler",
    intro: "Otechi çatısı altında geliştirdiğimiz dijital ürünler.",
    ole: {
      tagline:
        "İşletmeler için dijital sadakat ve kampanya yönetim platformu.",
      points: [
        "QR kod ile dijital sadakat",
        "Kampanya oluşturma ve yönetme",
        "Çoklu şube yönetimi",
      ],
    },
    namaz: {
      tagline: "Beş vakit namaz takibi ve motivasyon uygulaması.",
      points: ["Beş vakit takibi", "Hatırlatıcılar", "İlerleme ve motivasyon"],
    },
  },

  ole: {
    meta: {
      title: "Ole — işletmeler için dijital sadakat ve kampanya platformu",
      description:
        "Ole; işletmeler için dijital sadakat ve kampanya yönetim platformu. QR ile sadakat, jeton ve ödül sistemi, kampanya yönetimi, çoklu şube ve müşteri bildirimleri tek panelde. Şubat 2026’da kullanıma açıldı.",
    },
    hero: {
      kicker: "Bir Otechi ürünü",
      tagline:
        "İşletmeler için dijital sadakat ve kampanya yönetim platformu. Teknik altyapı kurmadan, yaklaşık 15 dakikada kendi dijital işletme sayfanı oluştur.",
      launched: "Şubat 2026’da kullanıma açıldı.",
      ctaDemo: "Demo İste",
      ctaDownload: "Uygulamayı İndir",
    },
    benefit: {
      title: "Ole ne sağlar?",
      body: "İşletmeler teknik altyapı kurmadan yaklaşık 15 dakikada kendi dijital işletme sayfasını oluşturur; sadakat programını, kampanyalarını ve müşteri iletişimini tek panelden yönetir.",
    },
    features: {
      title: "Öne çıkan özellikler",
      items: [
        {
          title: "QR kod ile dijital sadakat",
          body: "Müşteriler QR okutarak sadakat programına katılır; kartlar dijital olarak takip edilir.",
        },
        {
          title: "Jeton/puan ve ödül sistemi",
          body: "Her ziyarette jeton veya puan; belirlenen eşikte ödül.",
        },
        {
          title: "Kampanya oluşturma ve yönetme",
          body: "İndirim ve döneme özel kampanyaları panelden oluştur ve yönet.",
        },
        {
          title: "Müşterilere bildirim gönderme",
          body: "Kampanya ve duyuruları uygulama üzerinden müşterilere ilet.",
        },
        {
          title: "İşletme sayfası oluşturma",
          body: "Yaklaşık 15 dakikada kendi dijital işletme sayfanı yayına al.",
        },
        {
          title: "Çoklu şube yönetimi",
          body: "Tüm şubeleri tek hesaptan yönet.",
        },
        {
          title: "Ziyaret ve etkileşim takibi",
          body: "Ziyaret sıklığı, geri dönüş ve kampanya performansını panelde gör.",
        },
      ],
    },
    how: {
      title: "Nasıl çalışır?",
      steps: [
        {
          title: "İşletme sayfanı oluştur",
          body: "Yaklaşık 15 dakikada temel bilgileri girip yayına al.",
        },
        {
          title: "Sadakat kuralını ve kampanyanı tanımla",
          body: "Jeton/ödül eşiklerini ve kampanyaları belirle.",
        },
        {
          title: "Müşteriler QR ile katılsın",
          body: "Sen paneli kullan; ziyaret ve ödül takibini Ole yürütsün.",
        },
      ],
    },
    audience: {
      title: "Kimler için?",
      items: [
        "Kafe ve restoranlar",
        "Güzellik merkezleri",
        "Kuaförler",
        "Şarküteriler",
        "Farklı sektörlerden işletmeler",
      ],
    },
    pricing: {
      title: "İş modeli",
      items: [
        "İşletmeler için ücretli abonelik",
        "Müşteriler için ücretsiz kullanım",
        "Komisyon sistemi yok",
      ],
      note: "Fiyatlandırma detayları yakında paylaşılacak.",
    },
    platforms: {
      title: "Platformlar",
      items: [
        "iOS ve Android mobil uygulama (müşteriler için)",
        "Web tabanlı yönetim paneli (işletmeler için)",
      ],
    },
    faq: {
      title: "Sıkça sorulan sorular",
      items: [
        {
          q: "Kurulum ne kadar sürüyor?",
          a: "Temel işletme sayfası yaklaşık 15 dakikada hazırlanabilir.",
        },
        {
          q: "Teknik bilgi gerekiyor mu?",
          a: "Hayır. Ole tarayıcı üzerinden yönetilir; ayrı bir altyapı kurmana gerek yoktur.",
        },
        {
          q: "Birden fazla şubem var, sorun olur mu?",
          a: "Hayır. Çoklu şube yönetimi tek hesap üzerinden yapılır.",
        },
        {
          q: "Müşteriler ödeme yapıyor mu?",
          a: "Hayır. Müşteriler Ole’yi ücretsiz kullanır.",
        },
        {
          q: "Komisyon alıyor musunuz?",
          a: "Hayır. Komisyon sistemi yoktur; işletmeler abonelik öder.",
        },
      ],
    },
    closing: {
      title: "Ole’yi işletmen için değerlendir.",
      body: "Ole hakkında daha fazla bilgi ve başlangıç için oletr.com adresini ziyaret edebilirsin.",
    },
  },

  namaz: {
    meta: {
      title: "Namaz Motivasyonu — beş vakit namaz takibi ve motivasyon",
      description:
        "Namaz Motivasyonu; beş vakit namaz takibi, hatırlatıcılar, ilerleme ve motivasyon için sade bir uygulama.",
    },
    hero: {
      kicker: "Bir Otechi ürünü",
      tagline:
        "Beş vakit namazını takip et, hatırlatıcılarla düzenli kıl, ilerlemeni gör ve motivasyonunu koru.",
      ctaAppStore: "App Store",
      ctaGooglePlay: "Google Play",
    },
    intro: {
      title: "Sıcak, teşvik edici bir yaklaşım",
      body: "Bazen unutuyoruz, bazen motivasyon düşüyor. Namaz Motivasyonu hatırlatır, ilerlemeni gösterir ve seni teşvik eder. Yeniden başlamak her zaman mümkün.",
    },
    features: {
      title: "Neler var?",
      items: [
        {
          title: "Beş vakit takibi",
          body: "Kıldığın vakitleri işaretle, istikrarını gör.",
        },
        {
          title: "Hatırlatıcılar",
          body: "Sana uygun zamanlarda hatırlatıcılar al.",
        },
        {
          title: "İlerleme ve motivasyon",
          body: "İlerlemeni ve serini takip et, kendine hedefler koy.",
        },
      ],
      note: "Özellikler, uygulamanın güncel sürümüne göre değişebilir.",
    },
    how: {
      title: "Nasıl çalışır?",
      steps: [
        {
          title: "Şehrini seç",
          body: "Namaz vakitlerini görmek için konum veya şehir bilgisini gir.",
        },
        {
          title: "Hatırlatıcıları ayarla",
          body: "Vakitlere göre hatırlatıcı sıklığını belirle.",
        },
        {
          title: "Kıldıkça işaretle",
          body: "Her vakti işaretle, istikrar serini büyüt.",
        },
      ],
    },
    privacy: {
      title: "Gizlilik",
      body: "Uygulamanın işlediği veriler ve saklama yöntemi, yayın öncesi gizlilik politikamızda açıkça belirtilecektir.",
    },
    closing: {
      title: "Namaz Motivasyonu yakında mağazalarda.",
      body: "İndirme bağlantıları hazır olduğunda bu sayfada paylaşılacak.",
    },
  },

  about: {
    meta: {
      title: "Hakkımızda — Otechi",
      description:
        "Otechi, işletmeler, girişimler ve bireyler için dijital ürünler ve yazılım çözümleri geliştiren bir teknoloji stüdyosudur.",
    },
    title: "Hakkımızda",
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
      description: "Otechi ile iletişim kanalları çok yakında burada olacak.",
    },
    title: "İletişim",
    body: "İletişim kanallarımız çok yakında burada olacak.",
    secondary: "Bu sırada ürünlerimize göz atabilirsin.",
    cta: "Ürünleri Keşfet",
  },

  legal: {
    lastUpdatedLabel: "Son güncelleme",
    lastUpdatedValue: "Yakında",
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

  showcase: {
    otherProduct: "Diğer Otechi ürünü",
    home: {
      studioTitle: "Fikirden yayına, tek süreçte.",
      studioBody:
        "Tasarım, yazılım geliştirme ve ürün yaklaşımını aynı süreç içinde ele alırız; işletmeler, girişimler ve bireyler için işlevsel, ölçeklenebilir ve iyi tasarlanmış dijital deneyimler kurarız.",
      oleLogoAlt: "Ole logosu",
      namazLogoAlt: "Namaz Motivasyonu görseli",
    },
    ole: {
      artAlt: "Ole jetonu görseli",
      heroShotAlt: "Ole uygulaması — sadakat ekranı",
      homeShotAlt: "Ole uygulaması — ana ekran",
      loyaltyShotAlt: "Ole uygulaması — ödüller ekranı",
      notificationShotAlt: "Ole uygulaması — bildirim ekranı",
      businessShotAlt: "Ole uygulaması — işletme sayfası",
      panelShotAlt: "Ole işletme yönetim paneli",
      flowTitle: "Sadakat, kampanya ve iletişim — tek akışta",
      flow: [
        {
          title: "QR ile dijital sadakat",
          body: "Müşteri işletmenin QR kodunu okutur; jetonlar ve ödüller uygulamada otomatik işlenir.",
        },
        {
          title: "Kampanyalarını duyur",
          body: "Kampanya ve fırsatlar, müşterinin uygulamasında işletme sayfasında görünür.",
        },
        {
          title: "Müşterilere bildirim gönder",
          body: "Yeni kampanya ve hatırlatmaları uygulama bildirimiyle doğrudan müşteriye ilet.",
        },
        {
          title: "Tek panelden yönet",
          body: "QR üretimi, sadakat kuralları, şubeler ve raporlar web yönetim panelinde.",
        },
      ],
      panelTitle: "İşletme yönetim paneli",
      panelBody:
        "QR kod üretimi, kod doğrulama, sadakat programı, kampanyalar, çoklu şube ve raporlar tek web panelinden yönetilir.",
      panelCaption: "Ole işletme yönetim paneli",
      galleryTitle: "Uygulamadan kareler",
      gallery: [
        "Ana ekran",
        "Sadakat ve ödüller",
        "Bildirimler",
        "İşletme sayfası",
      ],
      docsTitle: "Belgeler",
      docsNote:
        "Ole’ye özel sözleşme ve yasal belgeler yakında bu alanda yer alacak.",
      docs: [
        "Gizlilik Politikası",
        "Kullanım Şartları",
        "KVKK Aydınlatma Metni",
        "Abonelik ve Ödeme Koşulları",
      ],
    },
    namaz: {
      artAlt: "Namaz Motivasyonu görseli",
      heroShotAlt: "Namaz Motivasyonu — Bugün ekranı",
      galleryTitle: "Uygulamadan kareler",
      gallery: ["Bugün ekranı", "Grup ekranı"],
      docsTitle: "Yasal Belgeler",
      docsNote: "Bu belgeler yalnızca Türkçe olarak yayımlanmıştır.",
      docs: ["Gizlilik Politikası", "KVKK Aydınlatma Metni", "Kullanıcı Sözleşmesi"],
    },
  },
};

// The English dictionary is type-checked against this shape (same keys,
// same value kinds — wording differs). Literal types are intentionally
// widened to `string` so translations are allowed.
export type Dictionary = typeof tr;
