# İz yasal metinleri — inceleme notu (ARŞİV)

> **Arşiv — güncel değildir.** İz'in dört hukuk metni (Gizlilik Politikası,
> KVKK Aydınlatma Metni, Kullanıcı Sözleşmesi, Hesap ve Verileri Silme)
> hukukçu tarafından onaylandı (kullanıcının bildirimi, 2 Kasım 2026) ve
> sitede yayın durumuna alındı: `IZ_LEGAL_DRAFT = false`
> (`src/config/legalRoutes.ts`); sayfalar indekslenir, sitemap'tedir ve
> "inceleme aşamasındadır" uyarısı göstermez.
>
> Aşağıdaki içerik, onay öncesindeki inceleme sürecinin kaydıdır. "Açık
> konular" ve "yayına engel" ifadeleri o tarihteki durumu anlatır; bu dosya
> bugünkü yayın durumunu veya hukuki değerlendirmeyi yansıtmaz. Hukuki
> değerlendirme hukukçunun onayına dayanır, bu nota değil.

Bu dosya siteye yayımlanmaz (`content/` klasörü build'e girmez).

- Sayfalar: `/urunler/iz/gizlilik-politikasi`, `/urunler/iz/kvkk-aydinlatma-metni`,
  `/urunler/iz/kullanici-sozlesmesi`, `/urunler/iz/hesap-silme`
- Metinler: `src/content/legal/iz/privacy.ts`, `src/content/legal/iz/kvkk.ts`,
  `src/content/legal/iz/terms.ts`, `src/app/urunler/iz/hesap-silme/page.tsx`

Doğrulama kaynağı: İz uygulama deposu (`iz-app`, commit `692ceaf` 1 Kasım 2026; hesap silme için `f8e2e15` 2 Kasım 2026),
yalnızca okunarak. Supabase projesine veya canlı kuruluma erişilmedi; kodun
varlığı canlıda çalıştığının kanıtı sayılmadı.

## Onay öncesi açık konular (arşiv, 2 Kasım 2026)

Her madde: eksik olan ne, senden ne gerekiyor, işlem nerede (uygulama /
sağlayıcı hesabı / hukuk metni). Kanıt gelmeden hiçbiri çözülmüş sayılmaz.

### 1. Yurt dışı aktarım dayanağı (KVKK m. 9) — yayına engel

- **Eksik:** Supabase (AWS eu-central-1), Apple (Apple ile giriş, sunucuda
  konuşma tanıma) ve Expo (EAS Update, `app.json` → `u.expo.dev`) için
  kullanılan aktarım aracı belirsiz. Metinler (Gizlilik §9, KVKK §7) yalnızca
  aktarımın "söz konusu olduğunu" söylüyor. Sürekli senkronizasyon arızi
  aktarım istisnasına dayandırılamaz.
- **Senden gereken:**
  1. Her sağlayıcı için KVKK standart sözleşmesi imzalandı mı veya imzalanacak
     mı? İmzalandıysa tarihi ve Kurul'a bildirim tarihi.
  2. İmzalanamayacaksa hangi yol seçilecek: verinin Türkiye'de barındırılması,
     sağlayıcı değişikliği ya da başka bir araç?
- **Bilinenler:** Frankfurt (eu-central-1) bölgesi kullanıcı tarafından
  doğrulandı. Supabase DPA'sı Hizmet Şartları'nın parçası ve AB SCC'lerini
  içeriyor; KVKK'yı adıyla anmıyor. Expo politikası SCC ve EU-U.S. DPF'ye
  dayanıyor, yayımlanmış DPA'sı bulunamadı (bkz. "Sağlayıcı belgeleri").
  Bunlar KVKK m. 9 kapsamında yeterli bir araç olduğunu göstermez; uzman
  hukuki değerlendirme gerekir.
- **İşlem yeri:** Sağlayıcı hesapları (sözleşmeler), Kurul bildirimi, sonra
  hukuk metni (Gizlilik §9, KVKK §7'ye seçilen araç yazılır).

### 2. Özel nitelikli veriler (KVKK m. 6) — yayına engel

- **Eksik:** Serbest not ve günlük içerikleri, ses kayıtları ve fotoğraflar
  sağlık veya inanç verisi içerebilir. Metinler (KVKK §4.4 ve §9, Gizlilik §1 ve
  §3) hangi işleme şartına dayanıldığını söylemiyor; "rıza ayrıca alınır"
  diyor. Uygulamada rıza ekranı ya da rıza kaydı **yok**.
- **Senden gereken kararlar:**
  1. Bu içerikler için açık rızaya mı dayanılacak? Evet ise, rıza
     sözleşmeden ayrı ve isteğe bağlı mı olacak?
  2. Rıza vermeyen kullanıcı ne yapabilecek? Yalnızca cihazda (senkronsuz)
     kullanım mı, hiç kullanmama mı?
  3. Ruh hâli alanı (Huzurlu, Mutlu, Kaygılı…) sağlık verisi sayılacak mı?
  4. Kurul'un özel nitelikli veriler için öngördüğü ek tedbirler (ör. erişim
     kayıtları, şifreleme) kabul edilecek mi? Yerel veritabanı şu an şifresiz.
- **İşlem yeri:** Uygulama (rıza ekranı, rızanın sunucuda tarihiyle kaydı,
  geri alma yolu), hukuk metni (KVKK §4.4 ve §9, Gizlilik §1 ve §3), ayrı bir
  açık rıza metni.

### 3. Apple sunucu tanıması ve Expo için hukuki sebep — yayına engel

- **Karar verildi (2 Kasım 2026):** "Yazıya dökme yalnızca cihazda" varsayılan
  olarak açık kalır; kullanıcı kapatmadıkça sunucu tanımasına geçilmez. Metinler
  zaten böyle (Gizlilik §5, KVKK §5, Sözleşme §8).
- **Hâlâ açık:** Sunucu tanıması (ayar kapatıldığında) ve Expo güncelleme
  kontrolü için KVKK m. 5 şartı ile sağlayıcının rolü (veri işleyen mi, ayrı
  veri sorumlusu mu). Ses özel nitelikli veri içerebileceği için 2. maddeyle
  birlikte değerlendirilmeli. Uzman hukuki değerlendirme.
- **İşlem yeri:** Hukuk metni (KVKK §4 ve §6, Gizlilik §5 ve §8).

### 4. Saklama süreleri (kısmen açık) — yayına engel

Silinen kayıtlar, sürüm geçmişi, hesap silme ve sözleşme kabul kayıtları
tanımlı. Silme izleri (`kalici_silinenler`) için "hesap silinene kadar" ölçütü
kullanıcı tarafından onaylandı (2 Kasım 2026); Gizlilik §10, KVKK §8 ve Sözleşme
§14 bununla uyumlu. Eksik olanlar (metinlerde süre verilmedi):

- **Çıkıştan sonra cihazda kalan veri (`iz-<id>.db` ve dosyalar).** Ölçüt
  kararı bekliyor; metin yalnızca çıkışın veriyi silmediğini söylüyor.
- **Silinen hesap özetleri ve kilit satırları (`silinen_hesaplar`,
  `hesap_silmeleri`).** Şu an süresiz. Süre seçilirse sunucuda temizlik işi
  gerekir (Supabase; bu işin kapsamı dışında).
- **Sağlayıcı yedekleri ve loglar.** Plana bağlı; aşağıdaki "Sağlayıcı
  belgeleri" bölümüne bakın. Projenin planı bilinmeden süre yazılmaz.

### 5. Uygulamada belge bağlantıları ve kabul akışı — kuruldu, etkin değil

- **Durum (iz-app `74d679f`, `eb2c19b`; yalnızca okunarak):** Ayarlar → Hukuki,
  giriş/kayıt ekranında bağlantılar, Kullanıcı Sözleşmesi için önceden
  işaretlenmemiş kabul kutusu, `sozlesme_kabulleri` kaydı. Sunucuda dört belge
  `yayinda=false`, `surum='taslak'`; kabul zorunluluğu kapalı. Bugün kabul
  kaydı toplanmıyor. Cihazda hiçbiri denenmedi (DEVIR-NOTU).
- **Metinlere eklendi (2 Kasım 2026):** Kabul kayıtları (sürüm, sunucu zamanı,
  kaynak, platform, uygulama sürümü, dil) Gizlilik §3.6, §4, §10, §11 ve KVKK
  §3.5, §4.1, §8, §12'de. Amaç: sözleşme kabulünün ve sürümünün takibi. KVKK'da
  §4.1'in mevcut sözleşmenin kurulması/ifası şartı (m. 5/2-c) altına
  konuldu; yeni şart eklenmedi. Hesap silinince kayıtlar da silinir;
  sonrasında saklama süresi veya gerekçe yazılmadı. İfade "kabul ettiğinizde
  kaydedilir" biçiminde; bugün toplanıyormuş gibi yazılmadı.
- **Açık:** Kabul kaydının hesap silindikten sonra kanıt olarak tutulması
  istenirse bu ayrı karar ve uzman hukuki değerlendirme gerektirir (şu an
  istenmedi).
- **Sürüm eşleştirmesi (yayında yapılacak):** Uygulamadaki `surum` değeri,
  kullanıcının kabul ettiği belirli metni göstermeli. Sitedeki "Son
  güncelleme" tarihi son düzenleme tarihidir, yürürlük tarihi değildir;
  yürürlük tarihi henüz belirlenmedi. Yayında, verilen `surum` değerinin
  hangi site commit'indeki `terms.ts` metnine karşılık geldiği kaydedilmeli.
  Biçimlerin birebir aynı olması gerekmez.

### 6. Şifre sıfırlama e-postası (Custom SMTP) — bu tur kapsam dışı, çözülmedi

- **Eksik:** E-postalar şu an yalnızca Supabase ekip üyelerine gidiyor
  (DEVIR-NOTU §10). SMTP sağlayıcısı seçilince bu sağlayıcı yeni bir veri
  işleyen olur. E-posta adresi ona aktarılır; yurt dışındaysa 1. madde de
  kapsar.
- **Senden gereken:** Hangi SMTP sağlayıcısı kullanılacak ve hangi ülkede?
- **İşlem yeri:** Sağlayıcı hesabı (Supabase Auth → SMTP), sonra hukuk metni
  (Gizlilik §8 sağlayıcılar, KVKK §6 ve §7).

### 7. VERBİS — açık

- **Eksik:** VERBİS kaydı veya muafiyeti hakkında bilgi yok. Muafiyet, özel
  nitelikli veri işlemenin ana faaliyet sayılıp sayılmadığına (2. madde)
  bağlı. Veri sorumlusu bilgileri kullanıcı tarafından verildi; yeniden
  sorulmaz.
- **İşlem yeri:** VERBİS (ayrı işlem); uzman hukuki değerlendirme.

### 8. Cihazda henüz denenmeyenler — metne eklemek için (yayına engel değil)

Metinler bunları çalışıyor gibi anlatmıyor. Hukuk belgeleri akışı (bağlantılar,
kabul kutusu, kabul ekranı) da cihazda denenmedi; yalnızca deneme ortamında
yayına alınarak denenmeli.
- **Senden gereken:** Cihaz testi sonucu.
- **İşlem yeri:** Uygulama testi, sonra hukuk metni.

## Sağlayıcı belgeleri (resmî kaynaklar, 2 Kasım 2026'da okundu)

**Supabase**
- DPA: [supabase.com/legal/dpa](https://supabase.com/legal/dpa). Hizmet
  Şartları'nın parçasıdır; ayrı imza gerekmez ("acceptance of the Agreement
  shall have the same effect as signing the SCCs"). AB SCC'leri (2021/914),
  İngiltere ve İsviçre ekleri içerir. Schedule 2 §4, diğer ülkelerin
  mevzuatı için SCC'lerin gerekli değişikliklerle uygulanacağını ve başka bir
  aktarım aracı onaylanırsa ek sözleşme yapılacağını söylüyor. Türkiye/KVKK
  adıyla geçmiyor; bunun KVKK standart sözleşmesi yerine geçip geçmediği
  uzman hukuki değerlendirme konusu (1. madde).
- Sözleşme bitince veriler silinir (DPA §11); yedekler için ayrı silme süresi
  verilmiyor. Alt işleyenler:
  [supabase.com/legal/customer-resources/subprocessor-list](https://supabase.com/legal/customer-resources/subprocessor-list).
- Yedekler ([docs](https://supabase.com/docs/guides/platform/backups),
  [fiyatlandırma](https://supabase.com/pricing)): Free plan otomatik günlük
  yedek yok; Pro 7 gün, Team 14 gün, Enterprise 30 güne kadar/özel. PITR ek
  hizmet (Pro ve üstü).
- Log saklama ([fiyatlandırma](https://supabase.com/pricing)): Free 1 gün,
  Pro 7 gün, Team 28 gün, Enterprise 90 gün.

**Expo (EAS Update)**
- [expo.dev/privacy](https://expo.dev/privacy) (21 Ekim 2025): EAS Update için
  son kullanıcının işletim sistemi ve güncellemenin indirilip indirilmediğini
  anlamak için rastgele belirteçler toplanabilir; IP adresi genel olarak
  otomatik toplanan veriler arasında. Aktarım için "standard contractual
  clauses or other appropriate legal mechanisms" ve EU-U.S. Data Privacy
  Framework. Saklama: "reasonably necessary" süre; somut süre yok.
- Expo için yayımlanmış ayrı bir DPA bulunamadı; Expo'nun veri işleyen mi
  veri sorumlusu mu olduğu politikada belirtilmiyor.
- Alt işleyen listesi: [expo.dev/privacy/subprocessors](https://expo.dev/privacy/subprocessors)
  (7 Ağustos 2023, güncelliği belirsiz).

**Apple (konuşma tanıma)**
- [SFSpeechRecognizer belgesi](https://developer.apple.com/documentation/speech/sfspeechrecognizer):
  sunucu tanıması ağ tabanlı bir hizmettir ("speech recognition is a
  network-based service"); kullanıcıdan "speech recognition using Apple's
  servers" için izin istenmeli. Apple'ın bu sesleri ne kadar sakladığına dair
  geliştirici belgesinde süre yok.

**Hesaba özel olup erişilemeyenler (senden veya panelden):**
- İz Supabase projesinin planı (yedek ve log süresi buna bağlı) ve PITR açık mı.
- Expo hesabında özel bir DPA veya kurumsal sözleşme var mı.
- Apple Developer Program sözleşmesinde konuşma tanıma verisine ilişkin
  hükümler (hesaba bağlı belge).

## Çözülen konular (2 Kasım 2026)

Kaynak: `iz-app` `docs/DEVIR-NOTU.md` → "Hesap silme ve 30 günlük temizlik",
cihaz testleri commit `f8e2e15`. Yalnızca okunarak; Supabase'e erişilmedi.

- **Uygulama içi hesap silme (eski madde 4).** `hesabi-sil` dağıtıldı, Apple
  sırları tanımlı, canlı şemada test edildi. Cihazda denendi (kullanıcı, 2 Kasım
  2026, hepsi başarılı): e-posta hesabında yanlış şifre engellendi, doğru şifreyle
  silindi; ikinci cihaz çevrimdışıyken içerik korundu, bağlanınca silinmeyi
  algılayıp oturumu kapattı ve yerel içeriği temizledi; Apple hesabında iptal
  hesabı korudu, tamamlanınca hesap silindi ve İz Apple ile giriş listesinden
  kalktı. Gizlilik §11, KVKK §12 ve `/urunler/iz/hesap-silme` buna göre yazıldı.
  App Store 5.1.1(v) uygulama içi silme şartı karşılanıyor.
- **30 günlük sunucu temizliği (eski madde 5).** pg_cron `iz_temizlik` her gün
  03:17 UTC; `temizlik` fonksiyonu canlıda deneme hesaplarıyla test edildi
  (31 günlük not ve dosyası silindi, 29 günlük kaldı). Uygulamanın
  `sonSilinenlerAciklama` metni artık sunucu davranışıyla uyumlu. Gizlilik §10,
  KVKK §8 güncellendi.
- **30 günün başlangıcı (2 Kasım 2026).** Süre, silme işlemi sunucuya
  ulaşınca başlar; çevrimdışı silmede eşitlenince başlar (`sunucu_silinme`,
  sunucu tetikleyicisi). Gizlilik §10, KVKK §8, Kullanıcı Sözleşmesi §14 ve
  Hesap Silme sayfası aynı anlamda yazıldı.
- **Apple Standard EULA (2 Kasım 2026).** App Store Connect'te Apple'ın
  standart lisansı kullanılacak. Kullanıcı Sözleşmesi özel EULA'ya
  dönüştürülmedi; §12 bunu açıkça söylüyor.
- **"Ücretsiz" (2 Kasım 2026).** Mevcut sürümün ücretsiz olduğu kullanıcı
  tarafından doğrulanmış ürün kararıdır (Kullanıcı Sözleşmesi §5). Kodda
  uygulama içi satın alma veya abonelik bağımlılığı da yok.

## Ek: cihazda henüz denenmeyenlerin ayrıntısı (Açık konular 8)

DEVIR-NOTU'ya göre yalnızca kodla test edildi; doğrulanınca metinlere
eklenebilir:
- Hesap silindikten sonra planlı bildirimlerin (not hatırlatıcıları, günlük
  hatırlatıcısı) iptali. Metinlerde bildirim iptalinden söz edilmedi.
- Cihazdaki veritabanı, medya ve dikte dosyalarının silindiğinin dosya düzeyinde
  denetimi. Metinler yalnızca cihazdaki kopyanın kaldırıldığını söylüyor (cihaz
  testinde görülen davranış); dosya düzeyinde temizlik ayrıca iddia edilmedi.
- Silme hata mesajlarının tamamı (bağlantı, tamamlanmadı, Apple yapılandırma).
  Metinler yalnızca yarım kalan silmenin başarılı gösterilmediğini ve yeniden
  deneme gerektiğini söylüyor (`tamamlanmadi` yolu sunucu ve kod testleriyle
  doğrulandı).
- Eski hesapsız `iz.db`'nin kaldırılması, aynı cihazdaki etkin olmayan ikinci
  hesabın silinmesi, Son silinenler metinleri, 30 günlük temizliğin cihazdaki
  yansıması (silinme izinin çekilmesi). Metinler tek kayıt temizliği için
  cihazdan kaldırılma iddiası kurmuyor; yalnızca eski kopyanın sunucuya yeniden
  yüklenemediğini söylüyor (canlıda `IZ410` ile doğrulandı).

## Kullanıcı Sözleşmesi (2 Kasım 2026)

Kaynak: kullanıcının ilettiği metin. İz deposu (`iz-app`, yalnızca okunarak) ve
diğer üç İz sayfasıyla karşılaştırıldı.

**Uygulamada kabul akışı o tarihte yoktu**; şimdi kuruldu ama etkin değil (Açık konular 5). Sayfa, kullanıcının sözleşmeyi
uygulamada kabul ettiği şeklinde sunulmadı. Apple EULA: Çözülen konular.

**Diğer sayfalarla farklar:** 30 günün başlangıcı ve "ücretsiz" çözüldü (bkz.
Çözülen konular). Açık rıza: Açık konular 2. Kabul akışı: Açık konular 5.
Apple EULA: Çözülen konular.

**Kodla doğrulananlar:** "Bildirimlerde içeriği gizle" yalnızca hatırlatıcı
bildirimlerinde kullanılıyor, widget'a uygulanmıyor
(`hatirlatici/HatirlaticiYoneticisi.tsx`); `expo-updates` bağımlılığı var
(§12); reklam, analitik veya yapay zekâ SDK'sı yok (§6).

## Kullanıcının verdiği bilgiler

- **Veri sorumlusu bilgileri:** Kullanıcı verdi (Oğuzhan Menek, adres, info@oletr.com). VERBİS: Açık konular 7.
- **Ana veritabanı bölgesi (eu-central-1):** Kullanıcı tarafından doğrulandı.
- **"Ücretsiz":** Kullanıcı tarafından doğrulandı (Çözülen konular).

## Diğer notlar

- Apple ile açılan hesap yalnızca iOS'tan silinebilir (Android'de `apple_kod_yok`).
  Android sürümü yok; çıkarsa Hesap Silme sayfası güncellenmeli.

## Metinlerde yapılan düzeltmeler (kodla karşılaştırma sonucu)

- **"arşivleme bilgileri" çıkarıldı.** Notlarda arşiv alanı yok; Arşiv bir
  filtre ekranı.
- **"uygulama cihaz kimliği" → "kaydı son değiştiren cihazın türü (iPhone veya
  iPad)".** Senkronizasyonda yalnızca `son_cihaz` = 'iPhone' / 'iPad' tutuluyor;
  cihaza özgü kimlik yok.
- **Kamera eklendi.** Kamera izni var (fotoğraf çekme); ilk taslakta geçmiyordu.
- **Ayar adı uygulamadakiyle eşitlendi.** "Bildirim içeriğini gizle" →
  "Bildirimlerde içeriği gizle".
- **"Marka: OTechi" → "Otechi".** Sitenin marka yazımı (`src/config/brand.ts`).
- **Gizlilik §10'a eklendi:** "Hesaptan çıkış yapmak yerel veritabanını ve
  dosyaları silmez". Uygulama metni `cikisOnayMetin` ve per-hesap veritabanı
  bunu doğruluyor.
- **Gizlilik §12'ye eklendi:** Face ID / Touch ID doğrulaması iOS tarafından
  yapılır; uygulama yalnızca sonucu alır.
- **İki metin arasına karşılıklı atıf eklendi.** Gizlilik §13 başvuru yöntemi
  için KVKK'ya, KVKK §15 ayrıntılar için Gizlilik'e yönlendiriyor.
- **İz ürün sayfasındaki silme cümlesi (TR/EN).** 1 Kasım'da e-posta yoluna
  çevrilmişti; 2 Kasım'da uygulama içi silme doğrulandığı için "Ayarlar'dan
  kalıcı olarak silebilirsin; erişemiyorsan info@oletr.com" oldu.

## Kodla doğrulanan ifadeler

- **Cihazda tanıma:** Ayar açıkken cihaz desteklemiyorsa hata verilir, sunucuya
  geçilmez (`requiresOnDeviceRecognition`; `ekranlar/notlar/ses/yaziyaDok.ts`).
- **Dikte kayıtları:** Yalnızca cihazda tutulur, eşitlenmez. Transkript
  yazılınca silinir; hata olursa tekrar için kalır (`veri/sema.ts` 3→4,
  `dikteDosyalari.ts`, `DikteTemizleyici.tsx`).
- **Sesli notlar:** Ek (`tur 'ses'`) olarak eşitlenir.
- **Widget:**
  - Uygulama kilidi başlıkları gizlemez.
  - Günlük kilidi çizim önizlemesini kaldırır.
  - Çıkışta widget verisi boşaltılır (`widget/WidgetEsitleyici.tsx`).
- **Bildirim gövdesi:** Not metni veya transkript olabilir (`hatirlatici/plan.ts`).
  Uzak push kapalı (`enableRemoteNotifications: false`).
- **Üçüncü taraf SDK:** Reklam, analitik veya hata raporlama SDK'sı yok
  (`package.json`).
- **Yerel veritabanı:** SQLCipher veya benzeri şifreleme yok.
- **Profil adı:** Uygulamada düzenlenebilir (`hesap/OturumSaglayici.tsx`
  `adiGuncelle`).
