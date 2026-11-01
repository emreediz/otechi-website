import type { ContractBlock } from "@/components/legal/ContractDocument";

// İz Gizlilik Politikası.
// Kaynak: kullanıcının ilettiği taslak (1 Kasım 2026). İz uygulama deposuyla
// karşılaştırılarak düzeltildi; editör notları sayfaya alınmadı. Çözülmemiş
// konular: content/contracts/iz/inceleme-notu.md (yayına engel; sayfa bu
// yüzden IZ_LEGAL_DRAFT ile noindex ve sitemap dışında).

export const title = "İZ GİZLİLİK POLİTİKASI";
export const lastUpdated = "2 Kasım 2026";

export const blocks: ContractBlock[] = [
  { type: "h2", text: "1. Genel Bilgilendirme" },
  {
    type: "p",
    text: "İz (“Uygulama”), kullanıcıların yazılı ve sesli not oluşturmasına, günlük tutmasına, fotoğraf ve çizim eklemesine, konuşmalarını metne dönüştürmesine ve hatırlatıcılar kullanmasına olanak sağlayan ücretsiz bir kişisel not ve günlük uygulamasıdır.",
  },
  {
    type: "p",
    text: "Bu Gizlilik Politikası; Uygulama kapsamında hangi kişisel verilerin işlendiğini, bunların kullanım amaçlarını, saklandığı ortamları, hizmet sağlayıcılarla paylaşımını ve kullanıcı haklarını açıklar.",
  },
  {
    type: "p",
    text: "Bu metin bir açık rıza beyanı değildir. Açık rıza gerektiren veri işleme faaliyetlerinde gerekli bilgilendirme ve rıza işlemleri ayrıca gerçekleştirilir. Cihaz üzerinden verilen erişim izinleri (ör. mikrofon, fotoğraf, bildirim), KVKK kapsamında açık rıza yerine geçmez.",
  },

  { type: "h2", text: "2. Veri Sorumlusu" },
  {
    type: "p",
    text: "6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında veri sorumlusu:",
  },
  {
    type: "p",
    text: "Adı Soyadı: Oğuzhan Menek\nUygulama: İz\nMarka: Otechi\nWeb Sitesi: https://otechi.com\nE-posta: info@oletr.com\nAdres: Küçükçiğli Mh. 8711 Sk. No: 49 D: 6, Çiğli / İzmir",
  },

  { type: "h2", text: "3. İşlenen Kişisel Veriler" },
  { type: "h3", text: "3.1. Hesap ve profil bilgileri" },
  {
    type: "p",
    text: "E-posta adresi, kullanıcı hesap kimliği, profil adı, giriş yöntemi ve oturumun yürütülmesi için gerekli kimlik doğrulama bilgileri işlenir.",
  },
  {
    type: "p",
    text: "Apple ile giriş yaptığınızda Apple tarafından paylaşılan hesap kimliği, varsa adınız ve paylaşmayı tercih ettiğiniz gerçek veya gizlenmiş e-posta adresiniz kullanılabilir.",
  },
  {
    type: "p",
    text: "E-posta ve şifreyle giriş işlemleri Supabase Auth altyapısı üzerinden yürütülür.",
  },
  { type: "h3", text: "3.2. Not ve günlük içerikleri" },
  { type: "p", text: "Kullanımınıza bağlı olarak aşağıdaki bilgiler işlenir:" },
  {
    type: "ul",
    items: [
      "Not ve günlük başlıkları ile metinleri.",
      "Günlük tarihleri ve seçilen ruh hâlleri.",
      "Etiketler, yapılacak listeleri ve sabitleme bilgileri.",
      "Oluşturulma, düzenlenme ve silinme zamanları.",
      "Hatırlatma tarihleri, saatleri ve tekrar tercihleri.",
      "Senkronizasyon çakışmalarında korunan içerik sürümleri ve değişiklik geçmişi.",
    ],
  },
  {
    type: "p",
    text: "Notlar ve günlükler serbest metin alanlarıdır. Eklediğiniz içerikler sağlık, inanç veya başka özel nitelikli kişisel veriler içerebilir. Yalnızca içeriğin kullanıcı tarafından yazılmış olması genel bir açık rıza olarak kabul edilmez. Bu tür verilerin işlenmesinde ilgili mevzuatın öngördüğü şartlar ayrıca dikkate alınır.",
  },
  { type: "h3", text: "3.3. Fotoğraf, çizim ve ses dosyaları" },
  {
    type: "p",
    text: "İlgili özellikleri kullandığınızda çektiğiniz veya seçtiğiniz fotoğraflar ve açıklamaları, oluşturduğunuz çizimler, sesli not kayıtları ve bunlarla ilişkili dosya bilgileri işlenir.",
  },
  {
    type: "p",
    text: "Kamera, yalnızca fotoğraf çekmeyi seçtiğinizde; fotoğraf erişimi ise fotoğraf ekleme amacıyla ve işletim sisteminin sağladığı izin veya seçim mekanizmasıyla kullanılır. Mikrofon, kullanıcı ses kaydı veya dikte işlemini başlattığında kullanılır.",
  },
  { type: "h3", text: "3.4. Transkriptler" },
  {
    type: "p",
    text: "Sesli notlardan veya dikte kayıtlarından oluşturulan metinler, ilgili not ya da günlüğün içeriğinin parçası olarak işlenir.",
  },
  { type: "h3", text: "3.5. Teknik bilgiler ve tercihler" },
  {
    type: "p",
    text: "Senkronizasyon kayıtlarında, kaydı son değiştiren cihazın türü (iPhone veya iPad) tutulur; bu bilgi cihaza özgü bir tanımlayıcı değildir. Dil ve tema tercihleri, bildirim ve kilit ayarları, oturum bilgileri ve hizmetin güvenli çalışması için gerekli bağlantı ve işlem kayıtları işlenebilir.",
  },

  { type: "h2", text: "4. Verilerin Kullanım Amaçları" },
  { type: "p", text: "Kişisel veriler aşağıdaki amaçlarla işlenir:" },
  {
    type: "ul",
    items: [
      "Hesap oluşturmak ve güvenli giriş sağlamak.",
      "Not, günlük, çizim, fotoğraf ve ses özelliklerini sunmak.",
      "Konuşmayı metne dönüştürmek.",
      "İçerikleri cihazda saklamak ve aynı hesaba bağlı cihazlar arasında senkronize etmek.",
      "Çevrimdışı değişiklikleri ve çakışan sürümleri yönetmek.",
      "Hatırlatıcıları ve widget özelliklerini sunmak.",
      "Kullanıcı taleplerini yanıtlamak.",
      "Yetkisiz erişimi ve kötüye kullanımı önlemek.",
      "Yasal yükümlülükleri yerine getirmek.",
    ],
  },

  { type: "h2", text: "5. Ses Kaydı ve Konuşmanın Metne Dönüştürülmesi" },
  {
    type: "p",
    text: "“Yazıya dökme yalnızca cihazda” tercihi varsayılan olarak açıktır.",
  },
  {
    type: "p",
    text: "Bu tercih açıkken, desteklenen cihaz ve dillerde konuşma tanıma cihaz üzerinde gerçekleştirilir. Cihaz üzerinde tanıma kullanılamıyorsa işlem sunucu tabanlı tanımaya otomatik olarak geçirilmez; kullanıcıya bilgi verilir.",
  },
  {
    type: "p",
    text: "Bu tercih kapatıldığında, iOS konuşma tanıma hizmeti kapsamında ses kayıtları işlenmek üzere Apple sunucularına gönderilebilir. Bu durumda Apple’ın ilgili hizmet koşulları ve gizlilik açıklamaları da uygulanır.",
  },
  {
    type: "p",
    text: "Yazılı nota veya günlüğe konuşarak metin eklemek için oluşturulan geçici dikte kayıtları Supabase’e senkronize edilmez. Transkript güvenle kaydedildikten sonra geçici kayıt silinir. İşlem başarısız olursa yeniden deneme amacıyla cihazda tutulabilir.",
  },
  {
    type: "p",
    text: "Doğrudan sesli not olarak oluşturulan kayıtlar ise ses dosyası ve transkriptleriyle birlikte hesaba bağlı bulut depolamaya senkronize edilir. “Yazıya dökme yalnızca cihazda” tercihinin açık olması, sesli not dosyasının buluta senkronizasyonunu kapatmaz.",
  },

  { type: "h2", text: "6. Cihazda Saklama ve Bulut Senkronizasyonu" },
  {
    type: "p",
    text: "İçerikler, çevrimdışı kullanım için cihazdaki yerel veritabanında ve uygulamanın dosya alanında saklanır. Her hesap için cihazda ayrı bir yerel veritabanı kullanılır.",
  },
  {
    type: "p",
    text: "Hesabınıza bağlı senkronizasyon kapsamında notlar, günlükler, içerik sürümleri, profil bilgileri ve ilgili ekler Supabase altyapısına aktarılır.",
  },
  {
    type: "p",
    text: "İz projesinin ana veritabanı bölgesi AWS eu-central-1, Frankfurt, Almanya’dır. Bu bölge bilgisi, kullanılan bütün sağlayıcıların kimlik doğrulama, ağ, destek veya teknik kayıt işlemlerinin yalnızca Almanya’da yürütüldüğü anlamına gelmez.",
  },
  {
    type: "p",
    text: "İçerikler diğer kullanıcılara açık olarak yayımlanmaz. Bulut dosyaları özel depolama alanında, kullanıcı hesabına bağlı erişim kurallarıyla tutulur.",
  },

  { type: "h2", text: "7. Widget’lar ve Bildirimler" },
  {
    type: "p",
    text: "Widget’ların çalışması için sınırlı bilgiler cihazda uygulama ile widget arasında paylaşılan alana yazılır. Bunlar not başlıklarını veya kısa içerik önizlemelerini, tarihleri, hatırlatıcıları, günlük yazma durumunu ve son çizimin önizlemesini içerebilir.",
  },
  {
    type: "p",
    text: "Mevcut sürümde uygulama kilidi, widget’lardaki not başlıklarını kendiliğinden gizlemez. Günlük kilidi açıkken çizim önizlemesi widget’a sunulmaz. Hesaptan çıkıldığında paylaşılan widget verileri ve çizim önizlemesi temizlenir.",
  },
  {
    type: "p",
    text: "Not hatırlatıcıları ve günlük yazma bildirimleri cihaz üzerinde yerel olarak planlanır. Bu bildirimler için uzak push bildirim hizmeti kullanılmaz.",
  },
  {
    type: "p",
    text: "Bildirimlerde not metni veya transkriptin kısa bir bölümü görünebilir. “Bildirimlerde içeriği gizle” tercihi bildirim önizlemelerini sınırlar; widget içeriklerine uygulanmaz. Kilit ekranındaki görünürlük ayrıca cihaz ayarlarından yönetilebilir.",
  },

  { type: "h2", text: "8. Hizmet Sağlayıcılar ve Veri Paylaşımı" },
  {
    type: "p",
    text: "Hizmetin sunulması kapsamında aşağıdaki sağlayıcılardan yararlanılır:",
  },
  {
    type: "ul",
    items: [
      "Supabase: Hesap yönetimi, veritabanı, senkronizasyon ve dosya depolama.",
      "Apple: Apple ile giriş ve kullanıcının tercihlerine bağlı konuşma tanıma.",
      "Expo: Uygulama güncellemelerinin kontrolü ve dağıtımı için teknik altyapı. Güncelleme kontrolleri sırasında IP adresi ve uygulama sürümü gibi teknik bilgiler işlenebilir.",
    ],
  },
  {
    type: "p",
    text: "Mevcut sürümde reklam, kullanıcı davranış analitiği veya üçüncü taraf hata raporlama SDK’sı kullanılmamaktadır.",
  },
  {
    type: "p",
    text: "Kişisel veriler, hukuken geçerli taleplerin yerine getirilmesi için yetkili kurumlara da açıklanabilir.",
  },

  { type: "h2", text: "9. İşlemenin Hukuki Sebepleri ve Yurt Dışı Aktarım" },
  {
    type: "p",
    text: "Hesap ve temel uygulama hizmetleri için gerekli veriler, ilgili olduğu ölçüde sözleşmenin kurulması veya ifası; güvenlik, hakların korunması ve yasal yükümlülükler için gerekli veriler ise KVKK’da öngörülen uygulanabilir işleme şartları kapsamında işlenir.",
  },
  {
    type: "p",
    text: "Açık rıza veya özel nitelikli kişisel verilere ilişkin ek şart gerektiren işlemler ayrıca değerlendirilir.",
  },
  {
    type: "p",
    text: "Supabase’in Frankfurt bölgesinde kullanılması ve diğer uluslararası sağlayıcılardan yararlanılması nedeniyle yurt dışına veri aktarımı söz konusudur.",
  },

  { type: "h2", text: "10. Saklama, Silme ve Yedekler" },
  {
    type: "p",
    text: "Hesap bilgileri ve kullanıcı içerikleri, hesabın aktif olduğu ve hizmetin sunulması için gerekli süre boyunca saklanır.",
  },
  {
    type: "p",
    text: "Tek bir not veya günlük sayfası silindiğinde kayıt, Arşiv’deki “Son silinenler” bölümüne taşınır ve silindiği andan itibaren, sunucu saatine göre 30 gün boyunca geri getirilebilir.",
  },
  {
    type: "p",
    text: "30 günlük süre dolduğunda kayıt, ekleri (fotoğraf, çizim ve ses kayıtları) ve sürüm geçmişiyle birlikte, sunucuda günde bir kez çalışan temizliğin süre dolduktan sonraki ilk çalışmasında kalıcı olarak silinir. Temizlik tamamlanamazsa sonraki çalışmada yeniden denenir.",
  },
  {
    type: "p",
    text: "Not ve günlüklerin önceki sürümleri (düzenleme geçmişi) 30 gün boyunca tutulur; daha eski sürümler aynı temizlikle silinir.",
  },
  {
    type: "p",
    text: "Kalıcı olarak silinen bir kaydın içeriği tutulmaz. Silmenin cihazlara aktarılabilmesi için yalnızca kaydın kimliği ve silinme zamanı, hesap silinene kadar saklanır. Bu sayede uzun süre çevrimdışı kalan bir cihaz, kalıcı olarak silinmiş bir kaydın eski kopyasını sunucuya yeniden yükleyemez. Çevrimdışı cihazlardaki kopyaların güncellenmesi, cihazın yeniden bağlantı kurmasına bağlıdır.",
  },
  {
    type: "p",
    text: "Hesaptan çıkış yapmak, o hesaba ait yerel veritabanını ve dosyaları cihazdan silmez; aynı hesapla yeniden giriş yapıldığında bu kopyalar kullanılır.",
  },
  {
    type: "p",
    text: "Dikte amacıyla oluşturulan geçici ses dosyaları, transkript ilgili nota veya günlüğe güvenle kaydedildikten sonra silinir. Başarısız işlemlerde yeniden deneme için tutulan geçici kayıtlar, ilgili işlem kaldırılana veya tamamlanana kadar cihazda kalabilir.",
  },
  {
    type: "p",
    text: "Yasal saklama gerektiren bilgiler yalnızca ilgili amaç ve süreyle sınırlı tutulur.",
  },
  {
    type: "p",
    text: "Hizmet sağlayıcıların yedek veya teknik kopyalarında kalabilecek veriler, ilgili sağlayıcının saklama ve silme döngülerine tabidir. Bu kopyalar için belirli bir silinme süresi taahhüt edilmez.",
  },
  {
    type: "p",
    text: "Uygulama, silinen veya kaybolan içeriklerin her koşulda geri getirilebileceği garantisini vermez.",
  },

  { type: "h2", text: "11. Hesap Silme ve Başvurular" },
  {
    type: "p",
    text: "Kullanıcılar hesaplarını uygulama içinden, Ayarlar ekranının Hesap bölümündeki “Hesabı sil” seçeneğiyle silebilir. E-posta ile açılan hesaplarda şifrenin yeniden girilmesi, Apple ile açılan hesaplarda Apple ile yeniden onay verilmesi ve ardından son onay istenir. Apple ile açılan hesaplar iPhone veya iPad’deki İz uygulamasından silinir; Apple onayı tamamlanmazsa hesap silinmez.",
  },
  {
    type: "p",
    text: "Hesap silme kalıcıdır ve geri alınamaz. Tek tek silinen kayıtlar için geçerli 30 günlük geri getirme süresi hesap silmede uygulanmaz.",
  },
  {
    type: "p",
    text: "Hesap silindiğinde aşağıdaki veriler sunucudan kalıcı olarak silinir:",
  },
  {
    type: "ul",
    items: [
      "Notlar ve hatırlatıcıları.",
      "Günlük sayfaları ve sürümleri.",
      "Sürüm geçmişi ve “Son silinenler”deki kayıtlar.",
      "Fotoğraflar, çizimler ve ses kayıtları.",
      "Profil adı.",
      "Hesap ve giriş bilgileri.",
    ],
  },
  {
    type: "p",
    text: "Apple ile açılan hesaplarda İz’in Apple hesabındaki “Apple ile giriş” yetkisi de iptal edilir.",
  },
  {
    type: "p",
    text: "Silme işleminin yapıldığı cihazdaki yerel kopya kaldırılır. Diğer cihazlardaki kopyalar, bu cihazlar internete bağlanıp İz açıldığında silinmenin algılanmasıyla kaldırılır; o zamana kadar çevrimdışı cihazda kalır.",
  },
  {
    type: "p",
    text: "Silme işlemi yarıda kalırsa uygulama işlemi tamamlanmış göstermez. Bu durumda hesap yeni kayıtların eşitlenmesine kapalı kalır ve silmenin yeniden denenmesi gerekir.",
  },
  {
    type: "p",
    text: "Diğer cihazların silinmeyi algılayabilmesi için hesap kimliğinden türetilen bir özet değer saklanır. Bu değer içerik, e-posta adresi veya ad içermez.",
  },
  {
    type: "p",
    text: "Adımların ayrıntısı İz Hesap ve Verileri Silme sayfasında yer alır. Uygulamaya erişilemiyorsa veya silmeyle ilgili bir sorun yaşanırsa hesap ve kişisel veri silme talepleri info@oletr.com adresine iletilebilir. Talepler, gerekli kimlik doğrulaması yapılarak ilgili mevzuat kapsamında değerlendirilir.",
  },
  {
    type: "p",
    text: "Uygulamayı cihazdan kaldırmak, hesabı ve sunucudaki verileri silmez.",
  },

  { type: "h2", text: "12. Güvenlik" },
  {
    type: "p",
    text: "Kullanıcı bazlı erişim kuralları, özel dosya depolama, hesaplara ayrılmış yerel veritabanları ve HTTPS bağlantıları gibi önlemler uygulanır.",
  },
  {
    type: "p",
    text: "İz, mevcut sürümde uçtan uca şifreleme sunmaz. Uygulama ve günlük kilitleri erişim kontrolü sağlar; bunlar yerel veritabanının ayrıca şifrelendiği anlamına gelmez. Face ID veya Touch ID doğrulaması iOS tarafından yapılır; Uygulama yalnızca doğrulamanın sonucunu alır.",
  },
  {
    type: "p",
    text: "İnternet üzerinden veri aktarımı ve dijital saklama için mutlak güvenlik garantisi verilemez.",
  },

  { type: "h2", text: "13. Kullanıcı Hakları" },
  {
    type: "p",
    text: "KVKK’nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:",
  },
  {
    type: "ul",
    items: [
      "Kişisel verilerinizin işlenip işlenmediğini öğrenme.",
      "İşlenmişse buna ilişkin bilgi isteme.",
      "İşleme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme.",
      "Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme.",
      "Eksik veya yanlış işlenmişse düzeltilmesini isteme.",
      "Kanunda öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme.",
      "Düzeltme, silme veya yok etme işlemlerinin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme.",
      "Yalnızca otomatik sistemlerle analiz sonucu aleyhinize bir sonuç ortaya çıkmasına itiraz etme.",
      "Kanuna aykırı işleme nedeniyle zararınızın giderilmesini talep etme.",
    ],
  },
  {
    type: "p",
    text: "Başvurularınızı info@oletr.com üzerinden iletebilirsiniz. Başvurunun niteliğine göre kimliğinizin doğrulanması ve mevzuattaki başvuru usullerinin izlenmesi istenebilir. Başvuru yöntemine ilişkin ayrıntılar İz KVKK Aydınlatma Metni’nde yer alır.",
  },

  { type: "h2", text: "14. Çocukların Gizliliği" },
  {
    type: "p",
    text: "İz, çocuklara özel olarak tasarlanmış bir uygulama değildir. Bununla birlikte uygulama, farklı yaş gruplarındaki kullanıcılar tarafından kullanılabilir.",
  },
  {
    type: "p",
    text: "13 yaşın altındaki kullanıcıların uygulamayı ebeveynlerinin veya yasal temsilcilerinin bilgisi ve gözetimi altında kullanması gerekir.",
  },
  {
    type: "p",
    text: "Bir ebeveyn veya yasal temsilci olarak çocuğunuzun izniniz veya bilginiz dışında uygulama üzerinden kişisel veri paylaştığını düşünüyorsanız, info@oletr.com adresinden bizimle iletişime geçebilirsiniz.",
  },
  {
    type: "p",
    text: "Böyle bir durum tespit edildiğinde, ilgili veriler yürürlükteki mevzuata uygun şekilde incelenir ve gerekli görülmesi hâlinde silinir veya anonim hâle getirilir.",
  },

  { type: "h2", text: "15. Değişiklikler ve İletişim" },
  {
    type: "p",
    text: "Bu politika, uygulama özellikleri, hizmet sağlayıcılar veya veri işleme süreçleri değiştiğinde güncellenebilir. Önemli değişiklikler uygun uygulama içi veya web kanallarıyla duyurulur.",
  },
  {
    type: "p",
    text: "Yeni bir rıza gerektiren değişiklikler, yalnızca metnin yayımlanmasıyla rıza alınmış sayılarak uygulanmaz.",
  },
  {
    type: "p",
    text: "Veri sorumlusu: Oğuzhan Menek\nE-posta: info@oletr.com\nAdres: Küçükçiğli Mh. 8711 Sk. No: 49 D: 6, Çiğli / İzmir\nWeb sitesi: https://otechi.com",
  },
];
