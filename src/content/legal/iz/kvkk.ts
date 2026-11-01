import type { ContractBlock } from "@/components/legal/ContractDocument";

// İz KVKK Aydınlatma Metni.
// Kaynak: kullanıcının ilettiği metin (1 Kasım 2026). İz uygulama deposu ve
// İz Gizlilik Politikası ile karşılaştırılarak düzeltildi; editör notları
// sayfaya alınmadı. Çözülmemiş konular: content/contracts/iz/inceleme-notu.md
// (yayına engel; sayfa bu yüzden IZ_LEGAL_DRAFT ile noindex ve sitemap dışında).

export const title = "İZ KVKK AYDINLATMA METNİ";
export const lastUpdated = "2 Kasım 2026";

export const blocks: ContractBlock[] = [
  { type: "h2", text: "1. Veri Sorumlusunun Kimliği" },
  {
    type: "p",
    text: "Bu Aydınlatma Metni, İz mobil uygulaması (“Uygulama”) kapsamında kişisel verilerin işlenmesine ilişkin olarak 6698 sayılı Kişisel Verilerin Korunması Kanunu’nun (“KVKK”) 10. maddesi uyarınca hazırlanmıştır.",
  },
  {
    type: "p",
    text: "Veri sorumlusu:\nAdı Soyadı: Oğuzhan Menek\nUygulama: İz\nMarka: Otechi\nE-posta: info@oletr.com\nAdres: Küçükçiğli Mh. 8711 Sk. No: 49 D: 6, Çiğli / İzmir\nWeb sitesi: https://otechi.com",
  },
  {
    type: "p",
    text: "Bu metin bilgilendirme amacı taşır. Tek başına açık rıza beyanı değildir.",
  },

  { type: "h2", text: "2. Kişisel Verilerin Elde Edilme Yöntemleri" },
  { type: "p", text: "Kişisel verileriniz;" },
  {
    type: "ul",
    items: [
      "Hesap oluşturmanız, giriş yapmanız ve profil adınızı düzenlemeniz,",
      "Apple ile giriş yöntemini kullanmanız,",
      "Not ve günlük yazmanız,",
      "Ruh hâli, etiket, yapılacak listesi ve hatırlatıcı eklemeniz,",
      "Fotoğraf çekmeniz veya seçmeniz, çizim oluşturmanız ve ses kaydetmeniz,",
      "Konuşmayı metne dönüştürme özelliğini kullanmanız,",
      "İçeriklerinizin cihazlar arasında senkronize edilmesi,",
      "Widget ve bildirim özelliklerini kullanmanız,",
      "Uygulama tercihlerinizi değiştirmeniz,",
      "Destek veya kişisel veri başvurusu iletmeniz",
    ],
  },
  { type: "p", text: "sırasında elde edilir." },
  {
    type: "p",
    text: "Veriler ağırlıklı olarak mobil uygulama, kimlik doğrulama ve senkronizasyon altyapıları üzerinden tamamen veya kısmen otomatik yollarla toplanır. Destek ve başvuru yazışmaları ise veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla da işlenebilir.",
  },
  {
    type: "p",
    text: "Apple ile girişte paylaşılmasına izin verdiğiniz hesap bilgileri Apple üzerinden elde edilebilir.",
  },

  { type: "h2", text: "3. İşlenen Kişisel Veri Kategorileri" },
  { type: "h3", text: "3.1. Hesap ve iletişim bilgileri" },
  {
    type: "ul",
    items: [
      "Profil adı.",
      "E-posta adresi.",
      "Kullanıcı hesap kimliği.",
      "Apple ile girişte sağlanan hesap kimliği ve varsa ad bilgisi.",
      "Kimlik doğrulama ve oturum bilgileri.",
    ],
  },
  { type: "h3", text: "3.2. Kullanıcı içerikleri" },
  {
    type: "ul",
    items: [
      "Not ve günlük başlıkları ile metinleri.",
      "Günlük tarihleri ve seçilen ruh hâlleri.",
      "Fotoğraflar, fotoğraf açıklamaları ve çizimler.",
      "Sesli not kayıtları ve transkriptler.",
      "Dikte işlemleri sırasında oluşturulan geçici ses dosyaları.",
    ],
  },
  { type: "h3", text: "3.3. İşlem ve tercih bilgileri" },
  {
    type: "ul",
    items: [
      "Etiketler, yapılacak listeleri ve sabitleme bilgileri.",
      "Hatırlatma zamanları ve tekrar tercihleri.",
      "Dil, tema, bildirim ve gizlilik tercihleri.",
      "Oluşturulma, düzenlenme ve silinme zamanları.",
      "Senkronizasyon ve çakışma sürümlerine ilişkin bilgiler.",
      "Widget’ta gösterilen sınırlı önizlemeler ve tamamlama işlemleri.",
    ],
  },
  { type: "h3", text: "3.4. İşlem güvenliği ve teknik bilgiler" },
  {
    type: "ul",
    items: [
      "Oturum ve erişim kayıtları.",
      "Senkronizasyon kayıtlarında tutulan, kaydı son değiştiren cihazın türü (iPhone veya iPad); bu bilgi cihaza özgü bir tanımlayıcı değildir.",
      "Hizmet sağlayıcıların bağlantı ve güncelleme işlemlerinde işlediği IP adresi ve uygulama sürümü gibi teknik bilgiler.",
      "Destek ve kişisel veri başvurularının değerlendirilmesi için gerekli yazışmalar.",
    ],
  },

  { type: "h3", text: "3.5. Sözleşme kabul bilgileri" },
  {
    type: "p",
    text: "Kullanıcı Sözleşmesi’ni uygulamada kabul ettiğinizde hesabınızla ilişkili olarak kaydedilen bilgiler:",
  },
  {
    type: "ul",
    items: [
      "Kabul edilen sözleşme sürümü.",
      "Kabulün sunucu saatine göre zamanı.",
      "Kabulün kaynağı (kayıt, Apple ile giriş, mevcut hesapta ilk kabul veya sözleşme güncellemesi).",
      "Platform, uygulama sürümü ve uygulama dili.",
    ],
  },
  {
    type: "p",
    text: "Gizlilik Politikası ve bu Aydınlatma Metni bilgilendirme amaçlıdır; bu metinlere verilen bağlantıların açılması kabul veya açık rıza olarak kaydedilmez.",
  },

  { type: "h2", text: "4. İşleme Amaçları ve Hukuki Sebepleri" },
  {
    type: "p",
    text: "Kişisel veriler, ilgili faaliyetin gerektirdiği kapsamla sınırlı olarak aşağıdaki amaç ve hukuki sebeplerle işlenir.",
  },
  { type: "h3", text: "4.1. Hesap ve temel uygulama hizmetleri" },
  {
    type: "p",
    text: "Hesap, profil ve iletişim bilgileri; hesap oluşturma, kimlik doğrulama, oturum yönetimi ve kullanıcı desteğinin sağlanması amacıyla işlenir.",
  },
  {
    type: "p",
    text: "Notlar, günlükler, ek dosyalar, içerik sürümleri ve işlem tercihleri; kullanıcının istediği içerik oluşturma, düzenleme, saklama, senkronizasyon, çakışma yönetimi, hatırlatıcı ve widget işlevlerinin sunulması amacıyla işlenir.",
  },
  {
    type: "p",
    text: "Sözleşme kabul bilgileri, Kullanıcı Sözleşmesi’nin kabul edildiğinin ve kabul edilen sürümün takibi amacıyla işlenir.",
  },
  {
    type: "p",
    text: "Özel nitelikli kişisel veriler saklı kalmak üzere, bu işlemlerde hizmet sözleşmesinin kurulması veya ifasıyla doğrudan ilgili ve gerekli olan veriler için KVKK’nın 5. maddesinin 2. fıkrasının (c) bendi esas alınır.",
  },
  { type: "h3", text: "4.2. Güvenlik ve kötüye kullanımın önlenmesi" },
  {
    type: "p",
    text: "Gerekli hesap, erişim ve teknik bilgiler; oturum güvenliği, yetkisiz erişimin önlenmesi ve hizmetin güvenli işletilmesi için işlenir.",
  },
  {
    type: "p",
    text: "İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, gerekli ve ölçülü işlemlerde KVKK’nın 5. maddesinin 2. fıkrasının (f) bendinde düzenlenen meşru menfaat şartı esas alınır. Bu sebep, her türlü teknik verinin sınırsız toplanmasına dayanak oluşturmaz.",
  },
  { type: "h3", text: "4.3. Hukuki yükümlülükler ve başvurular" },
  {
    type: "p",
    text: "Başvuru ve iletişim bilgileri ile gerekli işlem kayıtları; kişisel veri başvurularının yanıtlanması ve ilgili yasal yükümlülüklerin yerine getirilmesi amacıyla KVKK’nın 5. maddesinin 2. fıkrasının (ç) bendi kapsamında işlenir.",
  },
  {
    type: "p",
    text: "Bir hakkın tesisi, kullanılması veya korunması için zorunlu kayıtlar, aynı fıkranın (e) bendi kapsamında işlenebilir.",
  },
  { type: "h3", text: "4.4. Açık rıza gerektiren işlemler" },
  {
    type: "p",
    text: "Başka bir uygulanabilir işleme şartı bulunmayan ve açık rıza gerektiren faaliyetler için ayrıca, belirli ve bilgilendirmeye dayalı bir rıza süreci yürütülmesi gerekir.",
  },
  {
    type: "p",
    text: "Kamera, mikrofon, fotoğraf, konuşma tanıma ve bildirim özelliklerinin işletim sistemi izinleri, tek başına tüm veri işleme faaliyetlerine verilmiş açık rıza olarak değerlendirilmez.",
  },

  { type: "h2", text: "5. Ses Kaydı ve Konuşma Tanıma" },
  {
    type: "p",
    text: "Dikte ve sesli not işlemlerinde mikrofon, kullanıcı ilgili işlemi başlattığında kullanılır.",
  },
  {
    type: "p",
    text: "“Yazıya dökme yalnızca cihazda” tercihi varsayılan olarak açıktır. Desteklenen cihaz ve dillerde tanıma cihaz üzerinde gerçekleştirilir. Cihazda tanıma desteklenmiyorsa sunucu tabanlı tanımaya otomatik geçiş yapılmaz; kullanıcıya bilgi verilir.",
  },
  {
    type: "p",
    text: "Kullanıcı bu tercihi kapattığında, iOS konuşma tanıma hizmeti kapsamında ses Apple sunucularında işlenebilir.",
  },
  {
    type: "p",
    text: "Geçici dikte sesleri Supabase’e senkronize edilmez; başarılı transkript kaydının ardından temizlenir. Başarısız işlemlerde yeniden deneme amacıyla cihazda tutulabilir.",
  },
  {
    type: "p",
    text: "Doğrudan sesli not olarak oluşturulan ses dosyaları ve transkriptler ise hesaba bağlı bulut depolamaya senkronize edilir. “Yazıya dökme yalnızca cihazda” tercihi bu senkronizasyonu kapatmaz.",
  },
  {
    type: "p",
    text: "Ses kayıtları, yalnızca ses içermeleri nedeniyle otomatik olarak biyometrik veri kabul edilmez. Mevcut uygulamada sesle kimlik tespiti veya doğrulaması yapılmaz.",
  },

  { type: "h2", text: "6. Kişisel Verilerin Aktarılabileceği Taraflar" },
  { type: "h3", text: "6.1. Supabase" },
  {
    type: "p",
    text: "Hesap ve kimlik doğrulama hizmetleri, profil, not, günlük, sürüm geçmişi ve ek dosyaların saklanması ve senkronizasyonu amacıyla kullanılır.",
  },
  { type: "h3", text: "6.2. Apple" },
  {
    type: "p",
    text: "Apple ile girişte kimlik doğrulama için; kullanıcının “Yazıya dökme yalnızca cihazda” tercihini kapattığı durumlarda ise konuşmanın metne dönüştürülmesi için gerekli bilgiler Apple tarafından işlenebilir.",
  },
  { type: "h3", text: "6.3. Expo" },
  {
    type: "p",
    text: "Uygulama güncellemelerinin kontrolü ve dağıtımı sırasında gerekli teknik bağlantı ve sürüm bilgileri işlenebilir. Not ve günlük içerikleri bu güncelleme hizmetinin amacı kapsamında aktarılmaz.",
  },
  { type: "h3", text: "6.4. Yetkili kurum ve kuruluşlar" },
  {
    type: "p",
    text: "Kanunen yetkili kurum ve kuruluşların hukuken geçerli talepleri kapsamında gerekli veriler açıklanabilir.",
  },
  {
    type: "p",
    text: "İz’de kullanıcı içeriklerini diğer kullanıcılarla paylaşan bir grup veya herkese açık içerik akışı bulunmamaktadır. Mevcut sürümde reklam, kullanıcı davranış analitiği veya üçüncü taraf hata raporlama SDK’sı kullanılmamaktadır.",
  },
  {
    type: "p",
    text: "Not ve günlük hatırlatıcıları cihazda yerel olarak planlanır; bu özellik için uzak push bildirim hizmeti kullanılmaz.",
  },

  { type: "h2", text: "7. Yurt Dışına Veri Aktarımı" },
  {
    type: "p",
    text: "İz projesinin ana veritabanı bölgesi AWS eu-central-1, Frankfurt, Almanya’dır. Hesap ve içerik verilerinin Supabase’e senkronizasyonu yurt dışına veri aktarımı içerir.",
  },
  {
    type: "p",
    text: "Apple ve Expo hizmetleri de ilgili işlemlere bağlı olarak Türkiye dışında veri işlenmesine neden olabilir. Ana veritabanı bölgesinin Frankfurt olması, bütün sağlayıcı işlemlerinin yalnızca Almanya’da gerçekleştiği anlamına gelmez.",
  },

  { type: "h2", text: "8. Saklama ve Silme" },
  {
    type: "p",
    text: "Hesap bilgileri ve kullanıcı içerikleri, hizmetin sunulması için gerekli süre boyunca saklanır.",
  },
  {
    type: "p",
    text: "Tek bir not veya günlük sayfasını sildiğinizde kayıt “Son silinenler” bölümüne taşınır ve 30 gün boyunca geri getirilebilir. Bu süre, silme işleminin sunucuya ulaşmasıyla başlar; çevrimdışı yaptığınız silmelerde işlem sunucuya eşitlendiğinde başlar. Süre dolduğunda kayıt, ekleri ve sürüm geçmişiyle birlikte, sunucuda günde bir kez çalışan temizliğin süre dolduktan sonraki ilk çalışmasında kalıcı olarak silinir. Önceki sürümler (düzenleme geçmişi) 30 gün boyunca tutulur.",
  },
  {
    type: "p",
    text: "Kalıcı olarak silinen kayıtların içeriği tutulmaz; silmenin cihazlara aktarılabilmesi için yalnızca kaydın kimliği ve silinme zamanı, hesap silinene kadar saklanır.",
  },
  {
    type: "p",
    text: "Sözleşme kabul bilgileri hesap süresince saklanır ve hesap silindiğinde silinir.",
  },
  {
    type: "p",
    text: "Çevrimdışı cihazlardaki kopyaların güncellenmesi veya temizlenmesi, cihazın yeniden bağlantı kurmasına bağlıdır. Hesaptan çıkış yapmak, o hesaba ait yerel veritabanını ve dosyaları cihazdan silmez.",
  },
  {
    type: "p",
    text: "Geçici dikte kayıtları, transkript başarıyla kaydedildiğinde temizlenir. Yeniden deneme bekleyen kayıtlar da saklama ve silme değerlendirmesine dahildir.",
  },
  {
    type: "p",
    text: "Yasal saklama gerektiren kayıtlar, ilgili amaç ve süreyle sınırlı olarak tutulur.",
  },
  {
    type: "p",
    text: "Hizmet sağlayıcıların yedek veya teknik kopyalarında kalabilecek veriler, ilgili sağlayıcının saklama ve silme döngülerine tabidir; bu kopyalar için belirli bir silinme süresi taahhüt edilmez.",
  },

  { type: "h2", text: "9. Özel Nitelikli Kişisel Veriler" },
  {
    type: "p",
    text: "Not, günlük, ses, fotoğraf ve çizim içerikleri; kullanıcının eklediği bilgilere bağlı olarak sağlık, dinî inanç veya KVKK’nın 6. maddesinde sayılan diğer özel nitelikli verileri içerebilir.",
  },
  {
    type: "p",
    text: "Bu içeriklerin kişisel hesaba kaydedilmesi, kamuya alenileştirme anlamına gelmez. Uygulamayı kullanmak veya bu metni okumak da bu verilerin işlenmesine yönelik genel bir açık rıza oluşturmaz.",
  },
  {
    type: "p",
    text: "Özel nitelikli verilerin işlenmesi için KVKK’nın 6. maddesindeki uygulanabilir şartın sağlanması ve gerekli ek güvenlik tedbirlerinin alınması gerekir.",
  },

  { type: "h2", text: "10. Güvenlik ve Cihazdaki Önizlemeler" },
  {
    type: "p",
    text: "Kullanıcı bazlı erişim kuralları, özel dosya depolama, hesaplara ayrılmış yerel veritabanları ve HTTPS bağlantıları kullanılır.",
  },
  {
    type: "p",
    text: "Mevcut sürüm uçtan uca şifreleme sunmaz. Uygulama ve günlük kilitleri erişim kontrolü sağlar; yerel veritabanının ayrıca şifrelendiği anlamına gelmez.",
  },
  {
    type: "p",
    text: "Widget’lar için not başlıkları veya kısa önizlemeler, hatırlatıcı bilgileri ve son çizim önizlemesi cihazdaki paylaşılan uygulama alanında tutulabilir.",
  },
  {
    type: "p",
    text: "Mevcut sürümde uygulama kilidi widget’taki not başlıklarını kendiliğinden gizlemez. Günlük kilidi çizim önizlemesini gizler. “Bildirimlerde içeriği gizle” tercihi widget’lara uygulanmaz. Hesaptan çıkıldığında widget verileri ve çizim önizlemesi temizlenir.",
  },

  { type: "h2", text: "11. İlgili Kişinin Hakları" },
  {
    type: "p",
    text: "KVKK’nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:",
  },
  {
    type: "ul",
    items: [
      "Kişisel verilerinizin işlenip işlenmediğini öğrenme.",
      "İşlenmişse buna ilişkin bilgi isteme.",
      "İşleme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme.",
      "Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme.",
      "Eksik veya yanlış işlenmişse düzeltilmesini isteme.",
      "KVKK’nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme.",
      "Düzeltme, silme veya yok etme işlemlerinin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme.",
      "Yalnızca otomatik sistemlerle analiz sonucu aleyhinize bir sonuç ortaya çıkmasına itiraz etme.",
      "Kanuna aykırı işleme nedeniyle zararınızın giderilmesini talep etme.",
    ],
  },

  { type: "h2", text: "12. Hesap ve Veri Silme Talepleri" },
  {
    type: "p",
    text: "Hesabınızı uygulama içinden, Ayarlar ekranının Hesap bölümündeki “Hesabı sil” seçeneğiyle silebilirsiniz. E-posta ile açtığınız hesapta şifrenizi yeniden girmeniz, Apple ile açtığınız hesapta Apple ile yeniden onay vermeniz ve ardından son onayı vermeniz istenir. Apple ile açılan hesapta İz’in “Apple ile giriş” yetkisi de iptal edilir.",
  },
  {
    type: "p",
    text: "Hesap silme kalıcıdır ve geri alınamaz; tek tek silinen kayıtlar için geçerli 30 günlük geri getirme süresi uygulanmaz. Notlarınız ve hatırlatıcıları, günlük sayfalarınız, sürüm geçmişi ve “Son silinenler”deki kayıtlar, fotoğraf, çizim ve ses kayıtlarınız, profil adınız, sözleşme kabul kayıtlarınız ile hesap ve giriş bilgileriniz sunucudan silinir.",
  },
  {
    type: "p",
    text: "Diğer cihazlarınızdaki kopyalar, bu cihazlar internete bağlanıp İz açıldığında kaldırılır. Silme işlemi yarıda kalırsa tamamlanmış gösterilmez ve yeniden denenmesi gerekir. Ayrıntılar İz Hesap ve Verileri Silme sayfasında yer alır.",
  },
  {
    type: "p",
    text: "Uygulamaya erişemiyorsanız veya silmeyle ilgili bir sorun yaşarsanız taleplerinizi info@oletr.com adresine iletebilirsiniz.",
  },
  {
    type: "p",
    text: "Uygulamayı cihazdan kaldırmak, sunucudaki hesabı ve içerikleri silmez.",
  },

  { type: "h2", text: "13. Başvuru Yöntemi" },
  {
    type: "p",
    text: "KVKK kapsamındaki başvurularınızı, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ’deki yöntemlere uygun olarak aşağıdaki adrese yazılı şekilde iletebilirsiniz:",
  },
  {
    type: "p",
    text: "Oğuzhan Menek\nKüçükçiğli Mh. 8711 Sk. No: 49 D: 6, Çiğli / İzmir",
  },
  {
    type: "p",
    text: "Veri sorumlusuna daha önce bildirdiğiniz ve sistemde kayıtlı bulunan e-posta adresiniz üzerinden info@oletr.com adresine başvurabilirsiniz. Diğer iletişim taleplerinde, başvurunun niteliğine göre kimlik ve yetki doğrulaması istenebilir.",
  },
  {
    type: "p",
    text: "Başvurunuzda mevzuatın gerektirdiği kimlik ve iletişim bilgileriyle talebinizin açık açıklamasına yer veriniz. Talebinizle ilgili belgeleri gerektiği ölçüde ekleyebilirsiniz. Gereksiz kişisel veri veya kimlik belgesi göndermeyiniz.",
  },
  {
    type: "p",
    text: "Başvurular, niteliğine göre en kısa sürede ve en geç otuz gün içinde sonuçlandırılır. İşlemin ayrıca maliyet gerektirmesi hâlinde mevzuatta belirlenen tarife uygulanabilir.",
  },

  { type: "h2", text: "14. Güncellemeler" },
  {
    type: "p",
    text: "Bu metin, veri işleme faaliyetlerinde veya hizmet sağlayıcılarda değişiklik olması hâlinde güncellenebilir.",
  },
  {
    type: "p",
    text: "Yeni bir işleme amacı ortaya çıktığında ilgili bilgilendirme, bu amaçla işleme başlamadan önce yapılır. Açık rıza gerektiren yeni işlemler için rıza ayrıca alınır.",
  },

  { type: "h2", text: "15. Metnin Niteliği ve İletişim" },
  {
    type: "p",
    text: "Bu metin bir aydınlatma metnidir; kullanıcı sözleşmesi veya açık rıza formu değildir. Kişisel verilerin işlenmesine ilişkin ayrıntılı açıklamalar İz Gizlilik Politikası’nda da yer alır.",
  },
  {
    type: "p",
    text: "Kişisel verilerinizin işlenmesine ilişkin sorularınız için info@oletr.com adresinden bizimle iletişime geçebilirsiniz.",
  },
];
