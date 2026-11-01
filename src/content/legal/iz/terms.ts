import type { ContractBlock } from "@/components/legal/ContractDocument";

// İz Kullanıcı Sözleşmesi.
// Kaynak: kullanıcının ilettiği metin (2 Kasım 2026). İz uygulama deposu ve
// diğer İz hukuk sayfalarıyla karşılaştırılarak dil ve tutarlılık bakımından
// düzenlendi; yeni özellik, garanti veya süre eklenmedi. Uygulamada sözleşme
// kabul akışı yok; bu sayfa kabul edildiği şeklinde sunulmaz. Açık konular:
// content/contracts/iz/inceleme-notu.md (sayfa IZ_LEGAL_DRAFT ile noindex).

export const title = "İZ KULLANICI SÖZLEŞMESİ";
export const lastUpdated = "2 Kasım 2026";

export const blocks: ContractBlock[] = [
  { type: "h2", text: "1. Taraflar ve Sözleşmenin Konusu" },
  {
    type: "p",
    text: "Bu Kullanıcı Sözleşmesi, İz uygulamasının kullanımına ilişkin koşulları düzenler.",
  },
  {
    type: "p",
    text: "İz, Otechi markası altında Oğuzhan Menek tarafından sunulmaktadır.",
  },
  {
    type: "p",
    text: "Hizmet sağlayıcı:\nOğuzhan Menek\nKüçükçiğli Mh. 8711 Sk. No: 49 D: 6, Çiğli / İzmir\nE-posta: info@oletr.com",
  },
  {
    type: "p",
    text: "Bu metinde “İz” veya “uygulama” İz uygulamasını, “kullanıcı” ise uygulamayı kullanan kişiyi ifade eder.",
  },

  { type: "h2", text: "2. Uygulamanın Kapsamı" },
  {
    type: "p",
    text: "İz; kişisel notlar oluşturma, günlük tutma, ruh hâli kaydetme, fotoğraf ve çizim ekleme, sesli not oluşturma, desteklenen koşullarda konuşmayı yazıya dönüştürme, hatırlatıcı ayarlama ve widget kullanma özellikleri sunar.",
  },
  {
    type: "p",
    text: "Özelliklerin kullanılabilirliği; uygulama sürümüne, cihaza, işletim sistemine, verilen izinlere ve internet bağlantısına göre değişebilir.",
  },
  {
    type: "p",
    text: "İz kişisel kayıt ve düzenleme amacı taşır. Sağlık hizmeti, psikolojik değerlendirme, teşhis, tedavi veya acil durum hizmeti sunmaz. Ruh hâli kayıtları tıbbi değerlendirme niteliğinde değildir.",
  },

  { type: "h2", text: "3. Kullanım Koşulları ve Ehliyet" },
  {
    type: "p",
    text: "Kullanıcı, uygulamayı yürürlükteki mevzuata ve bu sözleşmeye uygun şekilde kullanmalıdır.",
  },
  {
    type: "p",
    text: "İz, çocuklara özel olarak tasarlanmış bir uygulama değildir; bununla birlikte farklı yaş gruplarındaki kullanıcılar tarafından kullanılabilir.",
  },
  {
    type: "p",
    text: "13 yaşın altındaki kullanıcıların uygulamayı ebeveynlerinin veya yasal temsilcilerinin bilgisi ve gözetimi altında kullanması gerekir. Kullanıcının yaşı ve hukuki işlem ehliyeti nedeniyle gerekli olan yasal temsilci izinleri ayrıca alınmalıdır.",
  },
  {
    type: "p",
    text: "Bir ebeveyn veya yasal temsilci, çocuğunun bilgisi veya izni dışında kişisel veri paylaştığını düşünüyorsa info@oletr.com adresinden bizimle iletişime geçebilir. Bildirim, uygulanabilir mevzuat ve Gizlilik Politikası doğrultusunda değerlendirilir.",
  },

  { type: "h2", text: "4. Hesap ve Hesap Güvenliği" },
  {
    type: "p",
    text: "Bazı özellikleri kullanmak için hesap oluşturulması ve oturum açılması gerekir. Uygulamanın sunduğu seçeneklere göre e-posta ve şifre ya da Apple ile giriş kullanılabilir.",
  },
  {
    type: "p",
    text: "Kullanıcı, giriş bilgilerinin gizliliğini korumak için makul önlemleri almalı ve hesabına yetkisiz erişildiğini düşündüğünde bizimle iletişime geçmelidir.",
  },
  {
    type: "p",
    text: "Kullanıcı, kendisine ait olmayan hesaplara erişmeye veya başkalarının giriş bilgilerini kullanmaya çalışmamalıdır.",
  },
  {
    type: "p",
    text: "Hesapta gerçekleşen her işlem, koşullar incelenmeden otomatik olarak kullanıcının sorumluluğunda kabul edilmez. Yetkisiz erişim bildirimleri somut olayın koşullarına göre değerlendirilir.",
  },

  { type: "h2", text: "5. Ücretsiz Kullanım" },
  {
    type: "p",
    text: "İz’in mevcut sürümü ücretsiz olarak sunulmaktadır.",
  },
  {
    type: "p",
    text: "Gelecekte ücretli bir özellik veya hizmet sunulması hâlinde bunun kapsamı, fiyatı ve ödeme koşulları ayrıca açıklanır. Kullanıcının gerekli onayı alınmadan kendisinden ücret tahsil edilmez.",
  },
  {
    type: "p",
    text: "Bu sözleşme tek başına bir abonelik veya ödeme yükümlülüğü oluşturmaz.",
  },

  { type: "h2", text: "6. Kullanıcı İçerikleri ve Fikrî Haklar" },
  {
    type: "p",
    text: "Kullanıcının oluşturduğu notlar, günlükler, çizimler, fotoğraflar, ses kayıtları ve diğer içerikler üzerindeki haklar kullanıcıya veya ilgili hak sahibine aittir.",
  },
  {
    type: "p",
    text: "Kullanıcı, eklediği içerikleri uygulamada kullanmak için gerekli hak ve izinlere sahip olmalıdır. Özellikle başkalarına ait fotoğraflar, ses kayıtları ve kişisel veriler bakımından ilgili kişilerin haklarına ve mevzuata uyulmalıdır.",
  },
  {
    type: "p",
    text: "Kullanıcı, içeriklerinin yalnızca talep ettiği hizmetlerin sunulması için gerekli ölçüde saklanmasına, senkronize edilmesine, görüntülenmesine, teknik olarak işlenmesine ve seçtiği özellikler kapsamında dönüştürülmesine izin verir. Bu izin, içeriklerin mülkiyetini devretmez.",
  },
  {
    type: "p",
    text: "Bu sözleşme, kullanıcı içeriklerinin reklam, tanıtım, satış veya yapay zekâ modeli eğitimi amacıyla kullanılmasına izin vermez.",
  },
  {
    type: "p",
    text: "Uygulamanın yazılımı, arayüzü, logosu ve kullanıcıya ait olmayan diğer unsurları üzerindeki haklar ilgili hak sahiplerine aittir. Kullanıcıya, uygulamayı bu koşullar kapsamında kişisel amaçlarla kullanma hakkı tanınır.",
  },

  { type: "h2", text: "7. Cihazda Saklama ve Senkronizasyon" },
  {
    type: "p",
    text: "İz, bazı verileri cihaz üzerinde saklar ve hesapla ilişkili içerikleri desteklenen senkronizasyon hizmetleri aracılığıyla cihazlar arasında eşitleyebilir.",
  },
  {
    type: "p",
    text: "Çevrimdışı yapılan değişikliklerin diğer cihazlara yansıması için internet bağlantısı ve başarılı bir senkronizasyon gerekir. Bağlantı sorunları, eşzamanlı düzenlemeler veya teknik arızalar nedeniyle gecikmeler ve kayıt çakışmaları oluşabilir.",
  },
  {
    type: "p",
    text: "Senkronizasyon, bağımsız ve kesintisiz bir yedekleme hizmeti olarak değerlendirilmemelidir. Önemli içeriklerin ayrıca korunması önerilir. Bu öneri, hizmet sağlayıcının kanundan doğan yükümlülüklerini ortadan kaldırmaz.",
  },

  { type: "h2", text: "8. Ses Kaydı ve Yazıya Dönüştürme" },
  {
    type: "p",
    text: "Ses kaydı ve konuşmayı yazıya dönüştürme özellikleri, gerekli cihaz izinlerine ve işletim sisteminin desteğine bağlıdır.",
  },
  {
    type: "p",
    text: "Yazıya dönüştürme sonuçları hatalı veya eksik olabilir. Kullanıcı, oluşturulan metni kullanmadan önce kontrol etmelidir.",
  },
  {
    type: "p",
    text: "“Yazıya dökme yalnızca cihazda” ayarı açıkken cihaz, cihaz üzerinde tanımayı desteklemiyorsa işlem gerçekleştirilemeyebilir. Bu ayar kapatıldığında konuşma tanıma için Apple’ın sunucu hizmetleri kullanılabilir.",
  },
  {
    type: "p",
    text: "Bu ayar, sesli notların hesap senkronizasyonu kapsamında saklanmasından ayrıdır. Ses dosyalarının ve transkriptlerin işlenmesine ilişkin ayrıntılar Gizlilik Politikası’nda açıklanır.",
  },

  { type: "h2", text: "9. Hatırlatıcılar ve Bildirimler" },
  {
    type: "p",
    text: "Not hatırlatıcıları ve günlük hatırlatıcısı bildirimleri, cihazın bildirim izinlerine ve işletim sistemi koşullarına bağlıdır.",
  },
  {
    type: "p",
    text: "Bildirimler; cihaz ayarları, odak modları, pil yönetimi ve teknik nedenlerle gecikebilir veya gösterilmeyebilir. İz, bildirimlerin tam zamanında teslim edileceğini garanti eden bir hizmet değildir.",
  },
  {
    type: "p",
    text: "Hatırlatıcılar, kritik sağlık veya güvenlik kararlarının tek dayanağı olarak kullanılmamalıdır.",
  },

  { type: "h2", text: "10. Widget’lar ve Kilit Özellikleri" },
  {
    type: "p",
    text: "Kullanıcının eklediği widget’lar; not başlıkları veya içerikten üretilen kısa adlar, hatırlatıcılar ve son çizim gibi bilgileri ana ekranda gösterebilir.",
  },
  {
    type: "p",
    text: "Uygulama kilidinin açık olması, widget içeriğini kendiliğinden gizlemez. Günlük kilidi açıkken çizim önizlemesi widget’a aktarılmaz.",
  },
  {
    type: "p",
    text: "“Bildirimlerde içeriği gizle” ayarı widget’lara uygulanmaz. Kullanıcı, cihazını başkalarıyla paylaşırken ana ekran ve widget görünürlüğünü de dikkate almalıdır.",
  },

  { type: "h2", text: "11. Yasaklanan Kullanımlar" },
  { type: "p", text: "Kullanıcı;" },
  {
    type: "ul",
    items: [
      "Başkalarının hesaplarına veya verilerine yetkisiz erişmeye,",
      "Hizmetin güvenliğini veya çalışmasını bozmaya,",
      "Zararlı yazılım yüklemeye veya güvenlik önlemlerini aşmaya,",
      "Uygulamayı üçüncü kişilerin haklarını ihlal eden amaçlarla kullanmaya,",
      "Hizmet altyapısını kötüye kullanmaya",
    ],
  },
  { type: "p", text: "yönelik faaliyetlerde bulunmamalıdır." },
  {
    type: "p",
    text: "Yazılımın incelenmesi ve kullanılması bakımından emredici mevzuatın tanıdığı haklar saklıdır.",
  },

  { type: "h2", text: "12. Üçüncü Taraf Hizmetler" },
  {
    type: "p",
    text: "İz; hesap yönetimi, veri saklama ve senkronizasyon için Supabase; Apple ile giriş ve desteklenen konuşma tanıma işlemleri için Apple; uygulama güncelleme altyapısı için Expo gibi hizmetlerden yararlanabilir.",
  },
  {
    type: "p",
    text: "Bu hizmetlerin erişilebilirliği ve teknik koşulları, uygulamanın bazı işlevlerini etkileyebilir. Kişisel veri işleme faaliyetleri Gizlilik Politikası ve KVKK Aydınlatma Metni’nde açıklanır.",
  },
  {
    type: "p",
    text: "Uygulamanın edinildiği mağazanın uygulanabilir kullanım ve lisans koşulları da kendi kapsamları içinde geçerlidir. App Store’dan edinilen İz için Apple’ın standart lisans sözleşmesi (Licensed Application End User License Agreement) geçerlidir. Bu Kullanıcı Sözleşmesi, App Store için özel bir lisans sözleşmesi olarak kullanılmaz; Apple’ın lisans koşullarına ek olarak İz hizmetinin kullanım koşullarını düzenler.",
  },

  { type: "h2", text: "13. Gizlilik ve Kişisel Veriler" },
  {
    type: "p",
    text: "Kişisel verilerin işlenmesine ilişkin bilgiler aşağıdaki metinlerde yer alır; bu metinlere sayfanın sonundaki bağlantılardan ulaşabilirsiniz:",
  },
  {
    type: "ul",
    items: ["İz Gizlilik Politikası", "İz KVKK Aydınlatma Metni"],
  },
  {
    type: "p",
    text: "Bu sözleşmenin kabulü, kişisel verilerle ilgili her işlem için toplu veya sınırsız açık rıza verildiği anlamına gelmez. Ayrı bir hukuki dayanak veya açık rıza gerektiren işlemler ayrıca değerlendirilir.",
  },
  {
    type: "p",
    text: "İz uçtan uca şifreleme sunduğunu taahhüt etmez. Kilit özellikleri ve veri güvenliği önlemlerinin kapsamı Gizlilik Politikası’nda açıklanır.",
  },

  { type: "h2", text: "14. Kayıtların Silinmesi" },
  {
    type: "p",
    text: "Silinen notlar ve günlük sayfaları “Son silinenler” bölümüne taşınır ve silme işlemi sunucuya ulaştıktan sonra 30 gün boyunca geri getirilebilir.",
  },
  {
    type: "p",
    text: "Bu süre dolduktan sonra kayıtlar, sunucuda günde bir kez çalışan temizlik işlemiyle kalıcı olarak silinir. Çevrimdışı kullanım, senkronizasyon veya teknik aksaklıklar işlemin tamamlanma zamanını etkileyebilir.",
  },
  {
    type: "p",
    text: "Eski çevrimdışı kopyaların silinen içeriği yeniden oluşturmasını önlemek için içerik barındırmayan sınırlı teknik silinme izleri (kaydın kimliği ve silinme zamanı) hesap silinene kadar tutulur. Ayrıntılar Gizlilik Politikası’nda açıklanır.",
  },

  { type: "h2", text: "15. Hesabın Silinmesi" },
  {
    type: "p",
    text: "Kullanıcı, hesabının silinmesini uygulamanın Ayarlar bölümündeki “Hesabı sil” seçeneğiyle başlatabilir. İşlem sırasında şifre veya Apple ile yeniden doğrulama istenebilir.",
  },
  {
    type: "p",
    text: "Hesap silme işlemi tamamlandığında hesap ve ilişkili içerikler sunucudan kalıcı olarak silinir. Hesap silme, tek tek silinen kayıtlar için sunulan 30 günlük geri getirme süresinden farklıdır ve geri alınamaz.",
  },
  {
    type: "p",
    text: "Teknik bir hata nedeniyle tamamlanamayan işlem için yeniden deneme gerekebilir. Silme sürecine alınmış hesabın kullanımı sınırlandırılabilir.",
  },
  {
    type: "p",
    text: "Çevrimdışı olan diğer cihazlar, bağlantı kurup hesabın silindiğini doğruladıklarında yerel temizliği gerçekleştirebilir.",
  },
  {
    type: "p",
    text: "Uygulamayı cihazdan kaldırmak veya hesaptan çıkış yapmak, sunucudaki hesabı silmez.",
  },
  {
    type: "p",
    text: "Ayrıntılar İz Hesap ve Verileri Silme sayfasında açıklanır.",
  },

  { type: "h2", text: "16. Hizmetin İşletilmesi ve Sorumluluk" },
  {
    type: "p",
    text: "İz’in makul özenle işletilmesi ve teknik sorunların giderilmesi amaçlanır. Bununla birlikte kesintisiz çalışma, her cihazla uyumluluk veya her durumda hatasız sonuç garanti edilmez.",
  },
  {
    type: "p",
    text: "Bakım, güvenlik veya teknik gereklilikler nedeniyle özelliklerde değişiklik yapılabilir ya da hizmete geçici olarak ara verilebilir. Önemli değişikliklerde ve hizmetin sona erdirilmesi durumunda, mümkün ve uygun olduğu ölçüde önceden bilgilendirme yapılır.",
  },
  {
    type: "p",
    text: "Hizmetin güvenliğini tehdit eden veya hukuka aykırı kullanım durumlarında gerekli ve ölçülü erişim sınırlamaları uygulanabilir. Hukuken ve teknik olarak mümkün olduğunda kullanıcıya bilgi ve iletişim yolu sunulur.",
  },
  {
    type: "p",
    text: "Bu sözleşme, hizmet sağlayıcının kastından, ağır kusurundan veya emredici mevzuat gereği sınırlandırılamayan sorumluluğundan doğan yükümlülüklerini ortadan kaldırmaz. Kullanıcının tüketici sıfatından doğan hakları saklıdır.",
  },

  { type: "h2", text: "17. Sözleşme Değişiklikleri" },
  {
    type: "p",
    text: "Sözleşme; hizmetteki veya mevzuattaki değişiklikler nedeniyle güncellenebilir. Güncel metinde son güncelleme tarihi belirtilir.",
  },
  {
    type: "p",
    text: "Kullanıcının hak ve yükümlülüklerini önemli ölçüde etkileyen değişiklikler için uygun bilgilendirme yapılır; mevzuatın gerektirdiği durumlarda ayrıca onay alınır.",
  },
  {
    type: "p",
    text: "Değişiklikler, kullanıcının doğmuş haklarını geriye dönük olarak ortadan kaldıracak şekilde uygulanmaz.",
  },

  { type: "h2", text: "18. Uygulanacak Hukuk ve Başvuru Yolları" },
  {
    type: "p",
    text: "Bu sözleşmeye, uygulanabilir emredici hükümler saklı kalmak üzere Türkiye Cumhuriyeti hukuku uygulanır.",
  },
  {
    type: "p",
    text: "Kullanıcının tüketici hakem heyetlerine, tüketici mahkemelerine ve diğer yetkili mercilere başvurma hakları saklıdır. Yetkili merci, yürürlükteki mevzuata göre belirlenir.",
  },

  { type: "h2", text: "19. İletişim" },
  {
    type: "p",
    text: "Uygulama ve bu sözleşme hakkındaki sorularınız için:",
  },
  {
    type: "p",
    text: "Oğuzhan Menek\nKüçükçiğli Mh. 8711 Sk. No: 49 D: 6, Çiğli / İzmir\nE-posta: info@oletr.com",
  },
];
