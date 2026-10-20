// Turkish copy. This file is the source of truth for the dictionary shape;
// `en.ts` must provide the same keys (enforced by the `Dictionary` type).
// Brand names ("Otechi", "Ole", "Namaz Motivasyonu") live in src/config/brand.ts
// and are injected by components — never write them into this file.

export const tr = {
  common: {
    comingSoon: "Yakında",
    learnMore: "İncele",
    // Screen-reader suffix for links that open in a new tab.
    newTab: "(yeni sekmede açılır)",
    backToProducts: "Ürünlere dön",
    draftNotice:
      "Bu metin taslak hâlindedir ve yayın öncesi güncellenecektir.",
    // Closing call to action (links to the Contact page).
    cta: {
      kicker: "Bir fikriniz mi var?",
      title: "Birlikte üretelim.",
    },
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
    mainNav: "Ana menü",
    menu: "Menü",
    close: "Kapat",
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
      title: "İyi fikirleri, güçlü dijital ürünlere dönüştürüyoruz.",
      subtitle:
        "Otechi; işletmeler, girişimler ve bireyler için modern dijital ürünler ve yazılım çözümleri geliştirir. Fikrin ilk taslağından yayına kadar tasarım, geliştirme ve ürün deneyimini bir bütün olarak ele alırız.",
      ctaPrimary: "Ürünlerimizi Keşfet",
      ctaSecondary: "Bizi Tanıyın",
      // Must appear verbatim inside `title`; it is set in the accent colour.
      highlight: "dijital ürünlere",
      scroll: "Kaydırın",
    },
    what: {
      kicker: "Stüdyo",
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
      oleCategory: "Sadakat ve kampanya platformu",
      namazCategory: "Namaz takibi ve motivasyon",
      explore: "Keşfet",
    },
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
    gallery: {
      kicker: "Ürünlerin dünyasından",
      title: "Gerçek insanlar, gündelik anlar.",
      hint: "Sürükleyerek keşfedin",
      label: "Görsel galerisi",
      prev: "Önceki görseller",
      next: "Sonraki görseller",
      items: {
        ole1: "Kafede müşterisini karşılayan işletme sahibi",
        ole2: "Bir kafede sohbet eden arkadaş grubu",
        ole3: "Kafesinin tezgâhında gülümseyen işletme sahibi",
        ole4: "Dükkân kapısında müşterisine kahve uzatan çalışan",
        namaz1: "Gün batımında seccadesinde namaz kılan bir adam",
        namaz2: "Bir caminin avlusunda sohbet eden üç arkadaş",
        namaz3: "Seccadesini seren genç bir kadın",
        namaz4: "Akşam ezanı vaktinde camiye yürüyen bir adam",
        oleLoyalty: "Uygulamanın sadakat ve ödüller ekranı",
        olePanel: "İşletme yönetim paneli",
        namazToday: "Uygulamanın Bugün ekranı",
        namazGroup: "Uygulamanın grup ekranı",
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
          a: "Bize telefon veya e-posta ile ulaşabilirsiniz; tüm iletişim bilgilerimiz İletişim sayfasında.",
          contactLink: "İletişim sayfasına git",
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
    detailsKicker: "Ayrıntılar",
    detailsTitle: "Ürünlere yakından bakış.",
    factLabels: {
      platform: "Platform",
      audience: "Kimin için",
      status: "Durum",
    },
    ole: {
      tagline:
        "İşletmeler için dijital sadakat ve kampanya yönetim platformu.",
      points: [
        "QR kod ile dijital sadakat",
        "Kampanya oluşturma ve yönetme",
        "Çoklu şube yönetimi",
      ],
      facts: {
        platform: "iOS · Android · Web paneli",
        audience: "İşletmeler ve müşterileri",
        status: "Şubat 2026’dan beri yayında",
      },
    },
    namaz: {
      tagline: "Beş vakit namaz takibi ve motivasyon uygulaması.",
      points: ["Beş vakit takibi", "Hatırlatıcılar", "İlerleme ve motivasyon"],
      facts: {
        platform: "iOS · Android",
        audience: "Bireyler",
        status: "Yakında",
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
      statement: "İlk ziyaretten müdavimliğe.",
      lead: "Müşterilerini ödüllendir. Kampanyalarını duyur. Yeniden gelmeleri için bir sebep ver.",
      ctaDemo: "Demo talep et",
      ctaPricing: "Fiyatları gör",
      panelLogin: "Panel girişi",
      ctaAppStore: "App Store",
      ctaGooglePlay: "Google Play",
    },
    facts: {
      platformLabel: "Platform",
      platform: "iOS · Android · Web paneli",
      modelLabel: "İş modeli",
      model: "Abonelik, komisyon yok",
      customersLabel: "Müşteriler için",
      customers: "Ücretsiz",
      statusLabel: "Durum",
      status: "Şubat 2026’dan beri yayında",
    },
    chapters: {
      label: "Sayfa bölümleri",
      how: "Nasıl çalışır",
      features: "Özellikler",
      panel: "Panel",
      integrations: "Entegrasyonlar",
      pricing: "Fiyatlandırma",
      faq: "SSS",
    },
    // In-page anchor ids (also the URL fragments).
    anchors: {
      how: "nasil-calisir",
      features: "ozellikler",
      panel: "panel",
      integrations: "entegrasyonlar",
      pricing: "fiyatlandirma",
      faq: "sss",
    },
    sides: {
      statement: "Bir tarafta müşterin. Diğer tarafta kontrol sende.",
      business: {
        title: "İşletme",
        items: [
          "Ödülünü ve hedef jeton sayısını belirle",
          "Panelde QR üret, müşterine jeton kazandır",
          "Ödül ve kampanya kullanımını 6 haneli kodla doğrula",
          "Hoş geldin, doğum günü, öğrenci ve genel kampanyalar yayınla",
          "Manuel bildirim ve otomatik hatırlatma gönder",
          "Şubelerini, işlem geçmişini ve raporlarını tek panelden izle",
        ],
      },
      customer: {
        title: "Müşteri",
        items: [
          "Ole uygulamasını ücretsiz indirir",
          "QR’ı okutur ya da Ole NFC’ye yaklaştırır, jeton kazanır",
          "Hedefe ulaşınca “Ödülü Al” ile ödülünü kullanır",
          "Kampanyaları keşfeder, 6 haneli kodla kullanır",
          "İşletmeleri semt ya da adla bulur",
        ],
      },
    },
    how: {
      kicker: "Nasıl çalışır",
      title: "Dört adımda sadakat döngüsü.",
      steps: [
        {
          title: "Ödülünü belirle",
          body: "Bir ödül ve hedef jeton sayısı seç; örneğin 5 jetonda bir kahve ikramı.",
        },
        {
          title: "QR ile jeton kazandır",
          body: "Panelde harcama tutarı ya da ürün/jeton sayısıyla tek kullanımlık bir QR üret. Müşterin okutur, jetonları hesabına geçer.",
        },
        {
          title: "Kodla doğrula",
          body: "Hedefe ulaşan müşterin uygulamada “Ödülü Al”a dokunur ve 6 haneli bir kod oluşur. Personelin kodu panelde doğrular, ödülü verir.",
        },
        {
          title: "Yeniden davet et",
          body: "Bir süredir uğramayan müşterilerine otomatik hatırlatma gider; kampanyalarını manuel bildirimlerle duyurursun.",
        },
      ],
      nfcNote:
        "QR yerine Ole NFC: müşterin telefonunu yaklaştırır, jeton kazanır ya da ödülünü kullanır. Donanım isteğe bağlıdır.",
    },
    features: {
      kicker: "Özellikler",
      title: "Sadakat için gereken her şey, tek yerde.",
      items: {
        loyalty: {
          name: "Sadakat ve ödüller",
          kind: "İşletme · Müşteri",
          desc: "Hedef jeton sayısına ulaşan müşteriye ödül.",
        },
        qr: {
          name: "QR ile jeton",
          kind: "İşletme paneli",
          desc: "Her işlem için tek kullanımlık QR kod.",
        },
        code: {
          name: "6 haneli kodla doğrulama",
          kind: "İşletme paneli",
          desc: "Ödül ve kampanya kullanımını kodla onayla.",
        },
        campaigns: {
          name: "Kampanyalar",
          kind: "Hoş geldin · Doğum günü · Öğrenci · Genel",
          desc: "Koşul ve geçerlilik süresi belirle; yayına al ya da durdur.",
        },
        notifications: {
          name: "Bildirimler",
          kind: "Manuel · Otomatik",
          desc: "Yalnızca izin veren ve hedefe uyan müşterilere; gönderimler limitlere tabidir.",
        },
        branches: {
          name: "Çoklu şube",
          kind: "İşletme paneli",
          desc: "Tüm şubelerini tek hesaptan yönet.",
        },
        reports: {
          name: "İşlem geçmişi ve raporlar",
          kind: "İşletme paneli",
          desc: "Jeton ve ödül hareketleri, kampanya kullanımı.",
        },
        businessPage: {
          name: "Uygulamada işletme sayfası",
          kind: "Müşteri uygulaması",
          desc: "Ayrı bir mobil uygulamaya gerek yok; müşterilerin seni Ole’de bulur.",
        },
        nfc: {
          name: "Ole NFC",
          kind: "İsteğe bağlı donanım",
          desc: "Yaklaştır, kazan, kullan. DNA çip ve kopyalamaya karşı koruma.",
        },
        pos: {
          name: "Kasa entegrasyonu",
          kind: "Simpra · Roxpos",
          desc: "Hesap kapanınca jetonlar otomatik yüklenir.",
        },
      },
    },
    panel: {
      kicker: "İşletme paneli",
      title: "Tüm şubelerini tek hesaptan yönet.",
      body: "QR kod üretimi, kod doğrulama, sadakat programı, kampanyalar, bildirimler ve raporlar web tabanlı panelde. Şubelerin işlemleri panelden takip edilir.",
      menu: [
        "İşlem Geçmişi",
        "İşletme Yönetimi",
        "Sadakat Program Yönetimi",
        "Kampanya Yönetimi",
        "Bildirimler",
        "Kullanıcı Puan Takibi",
        "Raporlar",
      ],
      menuTitle: "Paneldeki modüller",
    },
    integrations: {
      kicker: "Entegrasyonlar",
      title: "Kasa sisteminle birlikte çalışır.",
      body: "Entegrasyonla panele girmen gerekmez; jetonlar hesap kapanınca otomatik yüklenir.",
      partners: [
        { name: "Simpra", status: "Entegre" },
        { name: "Roxpos", status: "Entegrasyon aşamasında" },
      ],
      steps: [
        { body: "Müşterin, Ole uygulamasındaki kişisel QR’ını gösterir." },
        { body: "Personelin kasadaki QR okuyucuyla okutur; müşteri adisyonla eşleşir." },
        { body: "Hesap kapanınca jetonlar otomatik olarak yüklenir." },
      ],
      cta: "Entegrasyon talep et",
    },
    sectors: {
      kicker: "Kimler için",
      title: "Müdavimi olan her işletme için.",
      items: [
        "Kafe",
        "Restoran",
        "Fırın & Pastane",
        "Kuaför & Güzellik",
        "Perakende",
        "Çok şubeli işletmeler",
      ],
    },
    pricing: {
      kicker: "Fiyatlandırma",
      title: "Tek paket, sade fiyat.",
      plan: {
        name: "Sınırsız Paket",
        period: "Yıllık",
        unit: "+ KDV / şube başına",
        included: [
          "Jeton ve ödül programı",
          "QR kod ile jeton kazandırma",
          "6 haneli kod ile ödül doğrulama",
          "Hoş geldin, doğum günü, öğrenci ve genel kampanyalar",
          "Manuel ve otomatik bildirimler",
          "İşletme paneli, işlem geçmişi ve raporlar",
          "Ole müşteri uygulamasında işletme sayfası",
        ],
      },
      cta: "Demo talep et",
      nfc: {
        label: "İsteğe bağlı ek",
        name: "Ole NFC Donanımı",
        period: "Tek seferlik",
        unit: "+ KDV",
        lead: "Panele girmeden günlük işlemlerini saniyeler içinde tamamla.",
        benefits: [
          "Jeton kazandırma ve ödül kullanımı",
          "Panele girmeden hızlı işlem",
          "DNA çip teknolojisi",
          "Kopyalamaya karşı koruma için tasarlanmış güvenlik altyapısı",
        ],
        note: "Donanım zorunlu değildir. Ole panelini NFC donanımı olmadan da QR kod ve 6 haneli kodla rahatça ve hızlıca kullanabilirsin.",
      },
      calculator: {
        // {price} is replaced with the yearly plan price.
        title: "{price} işletmende nasıl karşılık bulabilir?",
        question: "Bir yılda kaç müşterin Ole’ye katılacak?",
        help: "Toplam müşteri sayını değil, Ole uygulamasıyla sadakat programına katılacak müşteri sayısını seç.",
        unit: "Ole kullanıcısı / yıl",
        yearly: "Yıllık tahmini ek ciro",
        monthly: "Aylık ortalama karşılığı:",
        returningLabel: "Birden çok gelmesi beklenen müşteri sayısı",
        returningUnit: "müşteri",
        audienceLabel: "Bildirimle kendini yeniden hatırlat",
        audienceUnit: "kişilik potansiyel kitle",
        audienceNote: "Uygunluk ve bildirim izinlerine bağlıdır.",
        disclaimer:
          "Örnek senaryodur, sonuç garantisi değildir. Ole kullanıcılarının ilk ziyareti dışındaki tekrar ziyaretlerinden hesaplanır. Ciro kâr değildir; gösterilen tutardan abonelik ve işletme maliyetleri düşülmemiştir. Tutarlar KDV hariçtir.",
        // Spoken by screen readers after the slider stops.
        live: "{members} Ole kullanıcısı için yıllık tahmini ek ciro {yearly}, aylık ortalama {monthly}.",
      },
      source: "Fiyatlar KDV hariçtir; güncel fiyat ve koşullar Ole tarafından belirlenir:",
      sourceLink: "oletr.com",
    },
    gallery: {
      kicker: "Sahada",
      title: "Gündelik ziyaretler, kalıcı müşteriler.",
    },
    onboarding: {
      kicker: "Başlarken",
      title: "Ole ekibi başlangıçta sana yardımcı olur.",
      steps: [
        { title: "Formu gönder", body: "Demo talep formunu doldur." },
        {
          title: "Seninle iletişime geçelim",
          body: "Ole ekibi işletmeni tanımak için sana ulaşır.",
        },
        {
          title: "Kurguyu birlikte planlayalım",
          body: "Ödül, kampanya ve bildirim kurgun işletmene göre hazırlanır.",
        },
      ],
    },
    faq: {
      title: "Sıkça sorulan sorular",
      items: [
        {
          q: "Teknik bilgi gerekiyor mu?",
          a: "Hayır. Ole paneli tarayıcı üzerinden kullanılır; ayrı bir altyapı kurmana gerek yoktur. Başlangıçta Ole ekibi sana yardımcı olur.",
        },
        {
          q: "İşletmem için ayrı bir mobil uygulama gerekir mi?",
          a: "Hayır. İşletmen, Ole müşteri uygulamasında kendi işletme sayfasıyla yer alır.",
        },
        {
          q: "Birden fazla şubem var, sorun olur mu?",
          a: "Hayır. Tüm şubelerini tek hesaptan yönetirsin; fiyatlandırma şube başınadır.",
        },
        {
          q: "NFC donanımı zorunlu mu?",
          a: "Hayır. Ole’yi NFC donanımı olmadan da QR kod ve 6 haneli kodla kullanabilirsin.",
        },
        {
          q: "Kasa sistemimle birlikte çalışır mı?",
          a: "Simpra ile entegre çalışır; Roxpos entegrasyonu ise entegrasyon aşamasındadır. Diğer sistemler için entegrasyon talebinde bulunabilirsin.",
        },
        {
          q: "Müşteriler ödeme yapıyor mu?",
          a: "Hayır. Ole uygulaması müşteriler için ücretsizdir.",
        },
        {
          q: "Komisyon alıyor musunuz?",
          a: "Hayır. Ole satışlarından komisyon almaz; işletmeler yıllık abonelik öder.",
        },
      ],
    },
    docs: {
      title: "Ole belgeleri ve destek",
      cookies: "Çerez Politikası",
      kvkk: "KVKK Müşteri Aydınlatma Metni",
      membership: "Üyelik Sözleşmesi",
      support: "Destek merkezi",
    },
    closing: {
      kicker: "Başlayalım",
      title: "Ole’yi işletmende dene.",
      supportLabel: "Ole destek",
    },
    alt: {
      stage: "Ole uygulaması ana ekranı",
      loyalty: "Ole uygulaması — ödüller ekranı",
      qrForm: "Ole işletme paneli — QR kod üretimi formu",
      verify: "Ole işletme paneli — 6 haneli kod doğrulama",
      winback: "Ole bildirimi — “Seni Özledik!” hatırlatması",
      campaign: "Ole uygulaması — hoş geldin kampanyası kartı",
      business: "Ole uygulaması — işletme sayfası",
      nfc: "Ole NFC donanımı",
      panel: "Ole işletme paneli",
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
      statement: "Yeniden başlamak her zaman mümkün.",
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
        {
          title: "Gruplar ve odalar",
          body: "Grup ya da oda oluştur veya davet koduyla bir gruba katıl, arkadaşlarınla birlikte motive ol. Grupta görünen adın ve ilerlemen grup üyelerince görülebilir.",
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
      body: "Uygulamanın hangi verileri hangi amaçlarla işlediği ve nasıl sakladığı; Gizlilik Politikası, KVKK Aydınlatma Metni ve Kullanıcı Sözleşmesi’nde açıklanmıştır. Hesabını ve verilerini dilediğin zaman silebilirsin.",
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
    cta: "Ürünleri Keşfet",
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
    },
    namaz: {
      artAlt: "Namaz Motivasyonu görseli",
      heroShotAlt: "Namaz Motivasyonu — Bugün ekranı",
      galleryTitle: "Uygulamadan kareler",
      gallery: { today: "Bugün ekranı", group: "Grup ekranı" },
      groupShotAlt: "Namaz Motivasyonu — grup ekranı",
      dayTitle: "Bir günün içinde.",
      docsTitle: "Yasal Belgeler",
      docsNote: "Bu belgeler yalnızca Türkçe olarak yayımlanmıştır.",
      docs: {
        privacy: "Gizlilik Politikası",
        kvkk: "KVKK Aydınlatma Metni",
        terms: "Kullanıcı Sözleşmesi",
        accountDeletion: "Hesap ve Verileri Silme",
      },
    },
  },
};

// The English dictionary is type-checked against this shape (same keys,
// same value kinds — wording differs). Literal types are intentionally
// widened to `string` so translations are allowed.
export type Dictionary = typeof tr;
