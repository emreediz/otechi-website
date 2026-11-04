import type { Locale } from "@/i18n/config";
import type { ContractBlock } from "@/components/legal/ContractDocument";

// Otechi Çerez Politikası / Cookie Policy (otechi.com).
// Dayanak: sitenin kaynak kodu, build çıktısı (out/), canlı sitenin HTTP
// yanıtları ve canlı sitede gerçek tarayıcıyla yapılan ölçüm (çerezler,
// tarayıcı depolaması, ağ istekleri, Web Analytics beacon içeriği) — 5 Kasım
// 2026. Cloudflare panel ayarları kullanıcının bildirimine dayanır (5 Kasım
// 2026: Bot Fight Mode kapalı; Web Analytics açık, Automatic setup; Scrape
// Shield → Email Address Obfuscation açık). Hukukçu onayıyla yayında
// (COOKIE_POLICY_DRAFT = false: indekslenir, sitemap'te, uyarı yok). Onay
// öncesi inceleme kaydı: content/contracts/otechi/inceleme-notu.md (arşiv).
//
// Kodda veya Cloudflare ayarlarında bir depolama/çerez/analitik/üçüncü taraf
// betiği eklenir, kaldırılır ya da değişirse bu metin ve tablolar aynı
// değişiklikte güncellenmelidir.

export type CookiePolicyDoc = {
  title: string;
  lastUpdated: string;
  intro: string;
  blocks: ContractBlock[];
};

const tr: CookiePolicyDoc = {
  title: "Çerez Politikası",
  lastUpdated: "5 Kasım 2026",
  intro:
    "Bu politika, otechi.com web sitesinde çerezlerin ve benzer teknolojilerin kullanılıp kullanılmadığını, hangi amaçla kullanıldığını ve tercihlerinizi nasıl yönetebileceğinizi açıklar. Kısaca: Site, tarayıcınıza çerez yerleştirmez. Tema tercihinizi ve çerez bildirimini kapattığınızı hatırlamak için tarayıcınızda çerez olmayan iki kayıt tutar ve toplu ziyaret ölçümü için çerez kullanmayan Cloudflare Web Analytics’i kullanır.",
  blocks: [
    { type: "h2", text: "1. Kapsam ve Veri Sorumlusu" },
    {
      type: "p",
      text: "Bu Çerez Politikası, https://otechi.com adresinde yayımlanan web sitesi (“Site”) için geçerlidir. Otechi mobil uygulamaları bu politikanın kapsamında değildir; uygulamalara ilişkin bilgiler her uygulamanın kendi gizlilik metinlerinde yer alır. Site’den bağlantı verilen diğer web siteleri de bu politikanın kapsamı dışındadır.",
    },
    {
      type: "p",
      text: "Veri sorumlusu:\nAdı Soyadı: Oğuzhan Menek\nMarka: Otechi\nE-posta: info@oletr.com\nAdres: Küçükçiğli Mh. 8711 Sk. No: 49 D: 6, Çiğli / İzmir\nWeb sitesi: https://otechi.com",
    },

    { type: "h2", text: "2. Çerez ve Benzer Teknolojiler" },
    {
      type: "p",
      text: "Çerezler, ziyaret ettiğiniz web sitesi tarafından tarayıcınıza kaydedilen ve sonraki isteklerle birlikte genellikle otomatik olarak sunucuya geri gönderilen küçük metin dosyalarıdır.",
    },
    {
      type: "p",
      text: "Yerel depolama (localStorage), tarayıcının web sitelerine sunduğu ayrı bir depolama alanıdır. Yerel depolama bir çerez değildir: kayıtlar yalnızca cihazınızdaki tarayıcıda tutulur ve isteklerle birlikte sunucuya otomatik olarak gönderilmez. Site’de bu teknoloji kullanıldığı için, şeffaflık amacıyla bu politikada açıklanmaktadır.",
    },
    {
      type: "p",
      text: "Analitik betikleri, sayfa ziyaretleri hakkında ölçüm verisi toplayan küçük programlardır. Bu tür betikler çerez kullanabilir veya çerez kullanmadan çalışabilir; Site’de kullanılan analitik aracı 4. bölümde açıklanmıştır.",
    },

    { type: "h2", text: "3. Site’de Kullanılan Teknolojiler" },
    {
      type: "p",
      text: "Site, kendi kodu veya kullandığı analitik aracı aracılığıyla tarayıcınıza herhangi bir çerez yerleştirmez. Site’de kullanılan teknolojiler aşağıdadır.",
    },
    {
      type: "table",
      caption: "Site’de kullanılan teknolojiler",
      head: ["Ad", "Tür", "Amaç", "Saklama süresi"],
      rows: [
        [
          "otechi-mode",
          "Yerel depolama (localStorage), birinci taraf. Çerez değildir.",
          "Açık veya koyu tema tercihinizi hatırlamak. Yalnızca açık temayı seçtiğinizde “light” değeriyle oluşturulur. Sayfa yüklenirken, tercih edilen temayı uygulamak için tarayıcınızda okunur; Site’ye veya üçüncü kişilere gönderilmez.",
          "Sabit bir süresi yoktur. Varsayılan koyu temaya döndüğünüzde silinir; aksi hâlde siz tarayıcı verilerini silene kadar tarayıcınızda kalır.",
        ],
        [
          "otechi-cookie-notice",
          "Yerel depolama (localStorage), birinci taraf. Çerez değildir.",
          "İlk girişte gösterilen çerez bildirimini “Anladım” ile kapattığınızı hatırlamak; böylece bildirim tekrar gösterilmez. Yalnızca bu düğmeye bastığınızda “1” değeriyle oluşturulur; Site’ye veya üçüncü kişilere gönderilmez.",
          "Sabit bir süresi yoktur. Siz tarayıcı verilerini silene kadar tarayıcınızda kalır; silindiğinde bildirim yeniden gösterilir.",
        ],
        [
          "Cloudflare Web Analytics",
          "Analitik ölçüm betiği (static.cloudflareinsights.com adresinden yüklenir). Çerez kullanmaz; tarayıcınızda kayıt bırakmaz.",
          "Ziyaret ve sayfa görüntüleme sayısı gibi toplu kullanım ölçümleri ile sayfa yükleme performansını ölçmek. Ayrıntılar 4. bölümdedir.",
          "Tarayıcınızda saklanmaz. Ölçüm verileri Cloudflare tarafından işlenir ve saklanır; saklama süresi Cloudflare’in politikalarına tabidir.",
        ],
      ],
    },
    {
      type: "table",
      caption: "Kategorilere göre özet",
      head: ["Kategori", "Site’de kullanımı", "Açıklama"],
      rows: [
        [
          "Zorunlu (teknik) çerezler",
          "Site’nin kendi kodu tarafından kullanılmaz.",
          "Site’nin sunulmasını sağlayan altyapı sağlayıcısına ilişkin bilgiler 6. bölümdedir.",
        ],
        [
          "İşlevsel (tercih)",
          "Yalnızca otechi-mode ve otechi-cookie-notice kayıtları.",
          "Tema tercihini ve çerez bildiriminin kapatıldığını hatırlamak için kullanılır; çerez değil, yerel depolama kayıtlarıdır.",
        ],
        [
          "Analitik ve performans",
          "Cloudflare Web Analytics.",
          "Ziyaret ve sayfa görüntüleme gibi toplu kullanım ölçümleri için kullanılır. Çerez veya tarayıcı depolaması kullanmaz.",
        ],
        [
          "Reklam ve pazarlama",
          "Kullanılmaz.",
          "Reklam pikseli, yeniden hedefleme veya profil oluşturma aracı bulunmaz.",
        ],
        [
          "Üçüncü taraf takip ve sosyal medya",
          "Kullanılmaz.",
          "Reklam veya takip amaçlı üçüncü taraf betik, gömülü video, harita veya sosyal medya eklentisi bulunmaz.",
        ],
      ],
    },

    { type: "h2", text: "4. Analitik Ölçüm: Cloudflare Web Analytics" },
    {
      type: "p",
      text: "Site’de, ziyaret ve sayfa görüntüleme sayısı gibi toplu kullanım ölçümleri ile sayfa yükleme performansını izlemek amacıyla Cloudflare tarafından sunulan Cloudflare Web Analytics kullanılır.",
    },
    {
      type: "p",
      text: "Cloudflare Web Analytics çerez kullanmaz ve tarayıcınızda yerel depolama dâhil herhangi bir kayıt bırakmaz. Ölçüm betiği static.cloudflareinsights.com adresinden yüklenir; ölçüm verileri Site’nin alan adı üzerinden Cloudflare’e gönderilir.",
    },
    { type: "p", text: "Her sayfa yüklemesinde gönderilen bilgiler şunlardır:" },
    {
      type: "ul",
      items: [
        "Görüntülenen sayfanın adresi ve varsa Site’ye geldiğiniz önceki sayfanın adresi (yönlendiren sayfa).",
        "Tarayıcı türü ve sürümü ile işletim sistemi sürümü.",
        "Sayfa yükleme ve bağlantı süreleri ile tarayıcı bellek kullanımı gibi performans ölçümleri.",
        "Yalnızca o sayfa yüklemesine ait rastgele bir tanımlayıcı. Bu tanımlayıcı tarayıcınızda saklanmaz ve her sayfa yüklemesinde yeniden oluşturulur.",
      ],
    },
    {
      type: "p",
      text: "Web Analytics verileri Cloudflare tarafından işlenir ve tarafımıza toplu istatistikler olarak sunulur. Otechi bu verilerle reklam veya pazarlama profili oluşturmaz ve bu verileri reklam amacıyla kullanmaz.",
    },

    { type: "h2", text: "5. Reklam ve Üçüncü Taraf İçerikler" },
    {
      type: "ul",
      items: [
        "Site’de reklam pikseli, yeniden hedefleme aracı veya reklam ya da takip amaçlı üçüncü taraf betik kullanılmaz.",
        "Site’de gömülü video, harita, sosyal medya eklentisi veya üçüncü taraf bir hizmetten yüklenen içerik bulunmaz (4. bölümde açıklanan Cloudflare Web Analytics betiği ve 6. bölümde açıklanan Cloudflare e-posta koruma betiği hariç).",
        "Site’de kullanılan yazı tipi dosyaları Site ile aynı alan adından, kendi sunucumuz üzerinden yüklenir; sayfaları görüntülediğinizde yazı tipleri için üçüncü taraf bir sunucuya istek gönderilmez.",
        "Site’de iletişim formu bulunmaz; bize ulaşmak için verilen e-posta bağlantıları cihazınızdaki e-posta uygulamasını açar.",
      ],
    },

    { type: "h2", text: "6. Altyapı Sağlayıcısı: Cloudflare" },
    {
      type: "p",
      text: "Site, Cloudflare altyapısı üzerinden sunulur. Cloudflare, Site’nin ziyaretçilere iletilmesi, performansı ve güvenliği (örneğin kötüye kullanım ve saldırılara karşı koruma) için teknik altyapı sağlar. Bu hizmetin doğası gereği, Site’ye yapılan her istekte IP adresi, tarayıcı bilgisi, istenen sayfa ve istek zamanı gibi teknik bağlantı bilgileri Cloudflare tarafından işlenir. Cloudflare, hizmetinin bir parçası olarak bu istek verilerinden toplu trafik istatistikleri (örneğin ziyaret sayısı ve ülke dağılımı) üretir; bu istatistikler tarafımızca reklam veya profil oluşturma amacıyla kullanılmaz.",
    },
    {
      type: "p",
      text: "Site’de Cloudflare’in e-posta adresi gizleme özelliği kullanılır. Bu özellik, sayfalardaki e-posta adreslerini otomatik toplayıcılardan (botlardan) gizlemek için adresleri sayfa kodunda şifrelenmiş olarak sunar ve Site ile aynı alan adı üzerinden küçük bir betik ekler. Betik, adresleri yalnızca tarayıcınızda okunabilir hâle getirir; çerez veya tarayıcı depolaması kullanmaz ve herhangi bir veri göndermez.",
    },
    {
      type: "p",
      text: "Cloudflare’in güvenlik özellikleri, şüpheli trafiği ayırt etmek gerektiğinde kendi teknik çerezlerini (örneğin “__cf_bm” veya “cf_clearance”) kullanabilir. Cloudflare’in açıklamalarına göre bu çerezler güvenlik amacıyla kullanılır; tarafımızca reklam veya analitik amacıyla kullanılmaz.",
    },
    {
      type: "p",
      text: "Cloudflare’in kişisel verileri işleme biçimine ilişkin ayrıntılar için: https://www.cloudflare.com/privacypolicy/",
    },

    { type: "h2", text: "7. Dış Bağlantılar" },
    {
      type: "p",
      text: "Site’de App Store, Google Play ve Ole web siteleri gibi dış sitelere bağlantılar bulunur. Bu bağlantılar gömülü içerik değildir; siz tıklayana kadar bu sitelere herhangi bir istek gönderilmez. Bağlantıya tıkladığınızda ilgili sitenin kendi çerez ve gizlilik politikaları geçerli olur.",
    },

    { type: "h2", text: "8. Tercihlerinizi Yönetme" },
    {
      type: "ul",
      items: [
        "Tema tercihinizi Site’deki tema düğmesiyle değiştirebilirsiniz. Varsayılan koyu temaya döndüğünüzde otechi-mode kaydı silinir.",
        "Tarayıcınızın ayarlarından Site’ye ait verileri (yerel depolama dâhil) dilediğiniz zaman silebilir, çerezleri engelleyebilir veya silebilirsiniz. Yerel depolama kullanılamadığında Site çalışmaya devam eder; yalnızca tema tercihiniz hatırlanmaz.",
        "Cloudflare Web Analytics çerez veya tarayıcı depolaması kullanmadığından, tarayıcı verilerini silmek bu ölçümü etkilemez. Tarayıcınızın içerik engelleme ayarları veya eklentileri ölçüm betiğinin yüklenmesini engelleyebilir; bu durumda Site çalışmaya devam eder.",
        "Site’ye ilk girişinizde bu politikaya bağlantı veren, bilgilendirme amaçlı bir çerez bildirimi gösterilir. Bildirimi “Anladım” ile kapattığınızda bu durum otechi-cookie-notice kaydında tutulur; tarayıcı verilerini silerseniz bildirim yeniden gösterilir.",
        "Site şu anda çerez kullanmadığından ayrı bir çerez tercih paneli sunulmamaktadır; ilk girişte gösterilen bildirim yalnızca bilgilendirme amaçlıdır.",
      ],
    },

    { type: "h2", text: "9. Kişisel Verilerin Korunması" },
    {
      type: "p",
      text: "Yerel depolama kayıtları (otechi-mode ve otechi-cookie-notice) yalnızca cihazınızda tutulur ve tarafımıza iletilmez. Web Analytics ve altyapı hizmeti kapsamında işlenen teknik veriler 4. ve 6. bölümlerde açıklanmıştır. 6698 sayılı Kişisel Verilerin Korunması Kanunu’nun 11. maddesi kapsamındaki taleplerinizi info@oletr.com adresine iletebilirsiniz.",
    },

    { type: "h2", text: "10. Değişiklikler" },
    {
      type: "p",
      text: "Site’ye ileride başka analitik, pazarlama veya benzeri araçlar eklenirse ya da mevcut araçların çalışma biçimi değişirse (örneğin çerez kullanmaya başlarsa), bu politika söz konusu değişiklikten önce güncellenir. Mevzuatın gerektirdiği durumlarda bu araçlar yalnızca açık rızanız alındıktan sonra etkinleştirilir. Güncel sürümün tarihi bu sayfanın başında yer alır.",
    },

    { type: "h2", text: "11. İletişim" },
    {
      type: "p",
      text: "Bu politika hakkındaki sorularınız için info@oletr.com adresinden bize ulaşabilirsiniz.",
    },
  ],
};

const en: CookiePolicyDoc = {
  title: "Cookie Policy",
  lastUpdated: "5 November 2026",
  intro:
    "This policy explains whether the otechi.com website uses cookies and similar technologies, what for, and how you can manage your choices. In short: the Site does not place any cookies in your browser. It keeps two non-cookie entries in your browser to remember your theme preference and that you have closed the cookie notice, and uses Cloudflare Web Analytics, which does not use cookies, for aggregate visit measurement.",
  blocks: [
    { type: "h2", text: "1. Scope and Data Controller" },
    {
      type: "p",
      text: "This Cookie Policy applies to the website published at https://otechi.com (the “Site”). Otechi’s mobile apps are not covered by this policy; information about them is set out in each app’s own privacy documents. Other websites linked from the Site are also outside its scope.",
    },
    {
      type: "p",
      text: "Data controller:\nName: Oğuzhan Menek\nBrand: Otechi\nEmail: info@oletr.com\nAddress: Küçükçiğli Mh. 8711 Sk. No: 49 D: 6, Çiğli / İzmir\nWebsite: https://otechi.com",
    },

    { type: "h2", text: "2. Cookies and Similar Technologies" },
    {
      type: "p",
      text: "Cookies are small text files that a website saves in your browser and that are usually sent back to its server automatically with later requests.",
    },
    {
      type: "p",
      text: "Local storage (localStorage) is a separate storage area that browsers make available to websites. Local storage is not a cookie: entries stay in the browser on your device and are not sent to the server automatically with requests. Because the Site uses this technology, it is described in this policy for transparency.",
    },
    {
      type: "p",
      text: "Analytics scripts are small programs that collect measurement data about page visits. Such scripts may or may not use cookies; the analytics tool used on the Site is described in section 4.",
    },

    { type: "h2", text: "3. Technologies Used on the Site" },
    {
      type: "p",
      text: "Neither the Site’s own code nor the analytics tool it uses places any cookies in your browser. The technologies used on the Site are listed below.",
    },
    {
      type: "table",
      caption: "Technologies used on the Site",
      head: ["Name", "Type", "Purpose", "Retention"],
      rows: [
        [
          "otechi-mode",
          "Local storage (localStorage), first-party. Not a cookie.",
          "Remembers your light or dark theme preference. Created with the value “light” only when you choose the light theme. Read in your browser when a page loads, to apply your preferred theme; it is not sent to the Site or to third parties.",
          "No fixed period. Deleted when you switch back to the default dark theme; otherwise it stays in your browser until you clear your browser data.",
        ],
        [
          "otechi-cookie-notice",
          "Local storage (localStorage), first-party. Not a cookie.",
          "Remembers that you closed the cookie notice shown on your first visit with “Got it”, so that it is not shown again. Created with the value “1” only when you press that button; it is not sent to the Site or to third parties.",
          "No fixed period. It stays in your browser until you clear your browser data; once cleared, the notice is shown again.",
        ],
        [
          "Cloudflare Web Analytics",
          "Analytics measurement script (loaded from static.cloudflareinsights.com). Does not use cookies; leaves no entry in your browser.",
          "Measures aggregate usage, such as the number of visits and page views, and page load performance. See section 4 for details.",
          "Not stored in your browser. Measurement data is processed and stored by Cloudflare; retention is subject to Cloudflare’s policies.",
        ],
      ],
    },
    {
      type: "table",
      caption: "Summary by category",
      head: ["Category", "Use on the Site", "Details"],
      rows: [
        [
          "Strictly necessary (technical) cookies",
          "Not used by the Site’s own code.",
          "Information about the infrastructure provider that serves the Site is in section 6.",
        ],
        [
          "Functional (preferences)",
          "Only the otechi-mode and otechi-cookie-notice entries.",
          "Used to remember the theme preference and that the cookie notice was closed; local storage entries, not cookies.",
        ],
        [
          "Analytics and performance",
          "Cloudflare Web Analytics.",
          "Used for aggregate usage measurement such as visits and page views. Does not use cookies or browser storage.",
        ],
        [
          "Advertising and marketing",
          "Not used.",
          "There are no advertising pixels, retargeting or profiling tools.",
        ],
        [
          "Third-party tracking and social media",
          "Not used.",
          "There are no third-party advertising or tracking scripts, embedded videos, maps or social media plugins.",
        ],
      ],
    },

    { type: "h2", text: "4. Analytics: Cloudflare Web Analytics" },
    {
      type: "p",
      text: "The Site uses Cloudflare Web Analytics, provided by Cloudflare, to measure aggregate usage, such as the number of visits and page views, and to monitor page load performance.",
    },
    {
      type: "p",
      text: "Cloudflare Web Analytics does not use cookies and leaves no entry in your browser, including in local storage. The measurement script is loaded from static.cloudflareinsights.com; the measurement data is sent to Cloudflare through the Site’s own domain.",
    },
    { type: "p", text: "The following information is sent on each page load:" },
    {
      type: "ul",
      items: [
        "The address of the page viewed and, if any, the address of the page you came from (the referrer).",
        "Browser type and version, and operating system version.",
        "Performance measurements such as page load and connection times and browser memory usage.",
        "A random identifier for that page load only. This identifier is not stored in your browser and is generated anew on every page load.",
      ],
    },
    {
      type: "p",
      text: "Web Analytics data is processed by Cloudflare and made available to us as aggregate statistics. Otechi does not build advertising or marketing profiles from this data and does not use it for advertising.",
    },

    { type: "h2", text: "5. Advertising and Third-Party Content" },
    {
      type: "ul",
      items: [
        "The Site does not use advertising pixels, retargeting tools or third-party advertising or tracking scripts.",
        "The Site has no embedded videos, maps, social media plugins or content loaded from a third-party service (other than the Cloudflare Web Analytics script described in section 4 and the Cloudflare email-protection script described in section 6).",
        "The font files used on the Site are loaded from our own server, on the same domain as the Site; viewing a page sends no font request to a third-party server.",
        "The Site has no contact form; the email links provided open the email app on your device.",
      ],
    },

    { type: "h2", text: "6. Infrastructure Provider: Cloudflare" },
    {
      type: "p",
      text: "The Site is served through Cloudflare’s infrastructure. Cloudflare provides the technical infrastructure for delivering the Site to visitors, for its performance and for its security (for example, protection against abuse and attacks). By the nature of this service, technical connection data such as your IP address, browser information, the page requested and the time of the request is processed by Cloudflare for every request to the Site. As part of its service, Cloudflare produces aggregate traffic statistics (for example, number of visits and distribution by country) from this request data; we do not use these statistics for advertising or profiling.",
    },
    {
      type: "p",
      text: "The Site uses Cloudflare’s email address obfuscation feature. To hide the email addresses on its pages from automated harvesters (bots), this feature serves the addresses in encoded form in the page code and adds a small script from the Site’s own domain. The script only makes the addresses readable in your browser; it does not use cookies or browser storage and does not send any data.",
    },
    {
      type: "p",
      text: "Where it is necessary to distinguish suspicious traffic, Cloudflare’s security features may use their own technical cookies (for example “__cf_bm” or “cf_clearance”). According to Cloudflare, these cookies are used for security purposes; we do not use them for advertising or analytics.",
    },
    {
      type: "p",
      text: "For details of how Cloudflare processes personal data, see: https://www.cloudflare.com/privacypolicy/",
    },

    { type: "h2", text: "7. External Links" },
    {
      type: "p",
      text: "The Site links to external websites such as the App Store, Google Play and the Ole websites. These links are not embedded content; no request is sent to those sites until you click. Once you click a link, that site’s own cookie and privacy policies apply.",
    },

    { type: "h2", text: "8. Managing Your Choices" },
    {
      type: "ul",
      items: [
        "You can change your theme with the theme button on the Site. Switching back to the default dark theme deletes the otechi-mode entry.",
        "In your browser settings you can delete the Site’s data (including local storage) at any time, and block or delete cookies. If local storage is unavailable, the Site keeps working; only your theme preference is not remembered.",
        "Because Cloudflare Web Analytics does not use cookies or browser storage, clearing your browser data does not affect this measurement. Your browser’s content-blocking settings or extensions may prevent the measurement script from loading; the Site keeps working if they do.",
        "On your first visit, an informational cookie notice linking to this policy is shown. When you close it with “Got it”, this is kept in the otechi-cookie-notice entry; if you clear your browser data, the notice is shown again.",
        "Because the Site does not currently use cookies, no separate cookie preferences panel is offered; the notice shown on your first visit is for information only.",
      ],
    },

    { type: "h2", text: "9. Data Protection" },
    {
      type: "p",
      text: "The local storage entries (otechi-mode and otechi-cookie-notice) stay on your device and are not sent to us. The technical data processed for Web Analytics and the infrastructure service is described in sections 4 and 6. You can send requests under Article 11 of the Turkish Personal Data Protection Law No. 6698 (KVKK) to info@oletr.com.",
    },

    { type: "h2", text: "10. Changes" },
    {
      type: "p",
      text: "If other analytics, marketing or similar tools are added to the Site in the future, or if the way the current tools work changes (for example, if they start using cookies), this policy will be updated before that change. Where the law requires it, such tools will be activated only after your explicit consent has been obtained. The date of the current version is shown at the top of this page.",
    },

    { type: "h2", text: "11. Contact" },
    {
      type: "p",
      text: "If you have any questions about this policy, contact us at info@oletr.com.",
    },
  ],
};

export const cookiePolicy: Record<Locale, CookiePolicyDoc> = { tr, en };
