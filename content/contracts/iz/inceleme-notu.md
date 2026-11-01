# İz yasal metinleri — inceleme notu

Bu dosya siteye yayımlanmaz (`content/` klasörü build'e girmez). İz Gizlilik
Politikası ve İz KVKK Aydınlatma Metni'ndeki **editör notları sayfalara
alınmadı**; çözülmemiş konular burada tutulur.

- Sayfalar: `/urunler/iz/gizlilik-politikasi`, `/urunler/iz/kvkk-aydinlatma-metni`,
  `/urunler/iz/kullanici-sozlesmesi`, `/urunler/iz/hesap-silme`
- Metinler: `src/content/legal/iz/privacy.ts`, `src/content/legal/iz/kvkk.ts`,
  `src/content/legal/iz/terms.ts`, `src/app/urunler/iz/hesap-silme/page.tsx`
- Durum: `IZ_LEGAL_DRAFT = true` (`src/config/legalRoutes.ts`). Sayfalar
  `noindex`, sitemap dışında ve üstlerinde "inceleme aşamasındadır" uyarısı var.
  Aşağıdaki **yayına engel** maddeler çözülmeden bayrak `false` yapılmamalı.

Doğrulama kaynağı: İz uygulama deposu (`iz-app`, commit `692ceaf` 1 Kasım 2026; hesap silme için `f8e2e15` 2 Kasım 2026),
yalnızca okunarak. Supabase projesine veya canlı kuruluma erişilmedi; kodun
varlığı canlıda çalıştığının kanıtı sayılmadı.

## Yayına engel konular

1. **Yurt dışı aktarım mekanizması (KVKK m. 9).** Supabase (Frankfurt), Apple ve
   Expo için kullanılan aktarım dayanağı ve güvenceler doğrulanamadı. İmzalı
   standart sözleşme, yeterlilik kararı veya başka bir dayanak olduğuna dair
   belge bulunamadı. Metinler yalnızca aktarımın "söz konusu olduğunu" söylüyor.
   Mekanizma netleşince Gizlilik §9 ve KVKK §7 tamamlanmalı. Sürekli bulut
   senkronizasyonu arızi aktarım istisnasına dayandırılmamalı.
2. **Özel nitelikli veriler (KVKK m. 6).** Serbest günlük ve not içeriklerine
   uygulanacak işleme şartı ve gerekirse ayrı açık rıza akışı belirlenmedi.
   Uygulamada şu an açık rıza akışı **yok**. İki metinde de "ayrıca
   gerçekleştirilir / alınır" deniyor; bu süreç kurulmalı ya da metin buna göre
   düzeltilmeli. (KVKK §9 editör notu.)
3. **Hukuki sebep eşleştirmesi.** Apple sunucularında konuşma tanıma (yalnızca
   "Yazıya dökme yalnızca cihazda" kapalıyken) ve Expo güncelleme kontrolleri
   için hukuki sebep, amaç ve sağlayıcının rolü (veri işleyen / ayrı veri
   sorumlusu) netleştirilmeli. (KVKK §4 editör notu.)
4. **Saklama süreleri (kısmen çözüldü).** Silinen kayıtlar (30 gün + günlük
   temizlik), 30 günden eski sürüm geçmişi ve hesap silme artık metinlerde
   tanımlı. Hâlâ somut süre veya ölçüt yok:
   - Hesaptan çıkıştan sonra cihazda kalan yerel veritabanı (`iz-<id>.db`) ve
     dosyalar.
   - Kalıcı silinen kayıtların izleri (`kalici_silinenler`, yalnızca kimlik ve
     zaman; metinlerde "hesap silinene kadar").
   - Silinen hesapların özetleri (`silinen_hesaplar`, kimliğin SHA-256 özeti)
     ve `hesap_silmeleri` kilit satırları: ne kadar tutulacağı tanımsız.
     Metinlerde süre verilmedi.
   - Teknik kayıtlar (loglar) ve sağlayıcı yedekleri. DEVIR-NOTU: projede
     erişilebilir yedek ve PITR görünmüyor, plan doğrulanmadı; bu "yedek yok"
     anlamına gelmez. Metinlerde süre taahhüt edilmedi.

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

## Cihazda henüz denenmeyenler (metinlerde çalışıyor gibi anlatılmadı)

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

**Uygulamada kabul akışı yok.** İz'de sözleşme, gizlilik politikası veya KVKK
metnine bağlantı ya da "kabul ediyorum" adımı bulunmuyor (`src/dil/*.ts`,
giriş ve kayıt ekranları). Sayfa, kullanıcının sözleşmeyi uygulamada kabul
ettiği şeklinde sunulmadı. Metindeki "Bu sözleşmenin kabulü…" (§13) ve
"mevzuatın gerektirdiği durumlarda ayrıca onay alınır" (§17) ifadeleri bir kabul
ve onay mekanizması varsayıyor. Kayıt ekranına bağlantı ve kabul adımı ayrı bir
uygulama işi.

**Apple Standard EULA.** Bu metin Apple'ın standart lisans sözleşmesinin yerine
geçmiş sayılmadı; App Store Connect'te özel EULA tanımlanıp tanımlanmayacağı
ayrı bir karar. §12 yalnızca mağaza koşullarının da geçerli olduğunu söylüyor.

**Diğer sayfalarla farklar (çözülmedi, karar bekliyor):**
- **30 günün başlangıcı.** Sözleşme §14: "silme işlemi sunucuya ulaştıktan
  sonra". Gizlilik §10, KVKK §8 ve Hesap Silme sayfası: "silindiği andan
  itibaren, sunucu saatine göre". Kod (`sunucu_silinme`, sunucu tetikleyicisi)
  sözleşmedeki ifadeyle uyumlu: çevrimdışı silinen kayıtta süre, silme sunucuya
  ulaşınca başlar. Diğer üç metnin buna göre netleştirilmesi önerilir.
- **Açık rıza.** Sözleşme §13 "ayrı açık rıza gerektiren işlemler ayrıca
  değerlendirilir" diyor; yayına engel madde 2 (özel nitelikli veriler, açık rıza
  akışı yok) açık.
- **"Ücretsiz" (§5).** Kullanıcıdan alınan bilgi; mağaza fiyatı depoda yok.

**Kodla doğrulananlar:** "Bildirimlerde içeriği gizle" yalnızca hatırlatıcı
bildirimlerinde kullanılıyor, widget'a uygulanmıyor
(`hatirlatici/HatirlaticiYoneticisi.tsx`); `expo-updates` bağımlılığı var
(§12); reklam, analitik veya yapay zekâ SDK'sı yok (§6).

## Kullanıcıdan alınan ve depoda doğrulanamayan bilgiler

- **Veri sorumlusu bilgileri:** Oğuzhan Menek, info@oletr.com ve adres. Kullanıcı
  metinde verdi; Namaz Motivasyonu belgeleriyle aynı. İz deposunda geçmiyor.
- **Ana veritabanı bölgesi:** AWS eu-central-1 (Frankfurt). İz deposunda bölge
  bilgisi yok; bağlı proje ref'i `ubexcyssqiswfvrgrwco`. Supabase'e işlem
  yapılmaması istendiği için panelden kontrol edilmedi.
- **"Ücretsiz":** Kodda uygulama içi satın alma veya abonelik bağımlılığı yok.
  Mağaza fiyatı depo dışında.

## Diğer notlar (yayına engel değil)

- Uygulamanın Ayarlar ekranında Gizlilik Politikası veya KVKK metnine bağlantı
  yok.
- Şifre sıfırlama e-postaları Custom SMTP kurulana kadar yalnızca Supabase ekip
  üyelerine ulaşıyor (DEVIR-NOTU §10). Genel kullanıma açılmadan önce
  tamamlanmalı.
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
