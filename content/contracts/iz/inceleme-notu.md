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
  "Açık konular" listesinde **yayına engel** işaretli maddeler çözülmeden bayrak
  `false` yapılmamalı.

Doğrulama kaynağı: İz uygulama deposu (`iz-app`, commit `692ceaf` 1 Kasım 2026; hesap silme için `f8e2e15` 2 Kasım 2026),
yalnızca okunarak. Supabase projesine veya canlı kuruluma erişilmedi; kodun
varlığı canlıda çalıştığının kanıtı sayılmadı.

## Açık konular (tek liste, 2 Kasım 2026)

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
  3. Supabase panelinde bölgenin eu-central-1 olduğunu gösteren ekran
     görüntüsü (Project Settings → General). Bölge şu an yalnızca senin
     beyanına dayanıyor.
  4. Supabase'le DPA (veri işleme sözleşmesi) imzalandı mı?
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

- **Eksik:** Hangi KVKK m. 5 şartının uygulandığı ve sağlayıcının rolü
  (veri işleyen mi, ayrı veri sorumlusu mu) metinde yok:
  - "Yazıya dökme yalnızca cihazda" kapalıyken ses Apple'a gider.
  - Expo güncelleme kontrolünde IP adresi ve sürüm bilgisi işlenir.
- **Senden gereken:**
  1. "Yazıya dökme yalnızca cihazda" ayarı varsayılan olarak açık kalacak mı?
     Kalacaksa sunucu tanıması kullanıcının bilerek açtığı bir özellik olur.
  2. Sunucu tanıması "kullanıcının istediği özellik" (m. 5/2-c) olarak mı
     yazılsın, açık rızaya mı bağlansın? Ses özel nitelikli veri içerebileceği
     için 2. maddedeki kararla birlikte verilmeli.
  3. Expo güncelleme kontrolü için meşru menfaat (m. 5/2-f) mi, sözleşmenin
     ifası (m. 5/2-c) mı?
- **İşlem yeri:** Hukuk metni (KVKK §4 ve §6, Gizlilik §5 ve §8). Ayar
  ekranına açıklama gerekiyorsa uygulama.

### 4. Saklama süreleri (kısmen açık) — yayına engel

Silinen kayıtlar, sürüm geçmişi ve hesap silme tanımlı. Eksik olanlar:

- **Çıkıştan sonra cihazda kalan veri (`iz-<id>.db` ve dosyalar).**
  - Karar: Metne "uygulama kaldırılana veya hesap silinene kadar cihazda
    kalır" ölçütü yazılsın mı? Bu, uygulamanın bugünkü davranışı.
  - İşlem yeri: Hukuk metni.
- **Silme izleri (`kalici_silinenler`, yalnızca kimlik ve zaman).**
  - Karar: Metinlerdeki "hesap silinene kadar" ölçütü onaylanıyor mu?
  - İşlem yeri: Hukuk metni (onay yeterli).
- **Silinen hesap özetleri ve kilit satırları (`silinen_hesaplar`,
  `hesap_silmeleri`).**
  - Ne kadar tutulacakları tanımlı değil; şu an süresiz.
  - Karar: Bir süre seçilecek mi (ör. "X ay sonra silinir")? Seçilirse
    sunucuya temizlik işi eklenmeli; bu Supabase işi ve bu görevin
    kapsamı dışında.
  - İşlem yeri: Önce sağlayıcı (Supabase), sonra hukuk metni.
- **Sağlayıcı yedekleri ve loglar.**
  - Gereken bilgi: Supabase planının adı ve bu planın yedek ve log saklama
    süreleri (panelde Database → Backups ve Logs).
  - Süre bilinmeden metin "taahhüt edilmez" demeye devam eder.
  - İşlem yeri: Sağlayıcı hesabı, sonra hukuk metni.

### 5. Uygulamada belge bağlantıları ve kabul akışı — mağaza öncesi

- **Eksik:** Uygulamada Gizlilik Politikası, KVKK ve Kullanıcı Sözleşmesi
  bağlantısı yok. Kayıt ve giriş ekranında kabul adımı da yok. App Store
  5.1.1(i), gizlilik politikasının uygulama içinden kolay erişilebilir olmasını
  istiyor. Sözleşme §13 ve §17 bir kabul ve onay mekanizması varsayıyor.
- **Senden gereken:**
  1. Kabul nasıl olacak?
     - (a) Kayıtta işaret kutusu,
     - (b) "Devam ederek … kabul edersin" metni,
     - (c) yalnızca Ayarlar'da bağlantı.
  2. Kabul, Apple ile giriş akışında da istenecek mi?
  3. Kabul edilen sürüm (tarih) sunucuda saklanacak mı?
  4. Bağlantılar hangi adreslere gidecek? Sayfalar henüz yayında değil.
- **İşlem yeri:** Uygulama (Ayarlar bağlantıları, kayıt ekranı, gerekirse
  kabul kaydı) ve App Store Connect (Privacy Policy URL).

### 6. Apple Standard EULA mı, özel EULA mı — mağaza öncesi

- **Eksik:** App Store Connect'te hangi lisansın kullanılacağı belirlenmedi.
  Kullanıcı Sözleşmesi Apple EULA'sının yerine geçmiş sayılmadı.
- **Senden gereken:** Standard EULA kalacak mı? Kalacaksa sözleşme bunu
  tamamlayıcı metin olarak kalır. Yoksa Kullanıcı Sözleşmesi özel EULA olarak
  mı girilecek?
- **İşlem yeri:** App Store Connect. Özel EULA seçilirse hukuk metninde §12
  güncellenir.

### 7. Şifre sıfırlama e-postası (Custom SMTP) — genel kullanıma açılmadan önce

- **Eksik:** E-postalar şu an yalnızca Supabase ekip üyelerine gidiyor
  (DEVIR-NOTU §10). SMTP sağlayıcısı seçilince bu sağlayıcı yeni bir veri
  işleyen olur. E-posta adresi ona aktarılır; yurt dışındaysa 1. madde de
  kapsar.
- **Senden gereken:** Hangi SMTP sağlayıcısı kullanılacak ve hangi ülkede?
- **İşlem yeri:** Sağlayıcı hesabı (Supabase Auth → SMTP), sonra hukuk metni
  (Gizlilik §8 sağlayıcılar, KVKK §6 ve §7).

### 8. Veri sorumlusu bilgileri ve VERBİS — doğrulama

- **Eksik:** Oğuzhan Menek, adres ve info@oletr.com senin metninde verildi;
  İz deposunda geçmiyor. VERBİS kaydı veya muafiyeti hakkında bilgi yok.
- **Senden gereken:**
  1. İz'i sunan kişi gerçekten Oğuzhan Menek mi (şahıs olarak)? Adres güncel
     mi?
  2. VERBİS'te kayıt var mı? Muafiyet değerlendirmesinde özel nitelikli
     veri işlemenin ana faaliyet sayılıp sayılmadığı 2. maddedeki karara
     bağlı.
- **İşlem yeri:** Hukuk metni (Gizlilik §2, KVKK §1, Sözleşme §1 ve §19).
  VERBİS ayrı bir işlem.

### 9. Cihazda henüz denenmeyenler — metne eklemek için (yayına engel değil)

Metinler bunları çalışıyor gibi anlatmıyor. Cihazda doğrulanırsa eklenebilir.
- **Senden gereken:** Cihaz testi sonucu.
- **İşlem yeri:** Uygulama testi, sonra hukuk metni.

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
- **"Ücretsiz" (2 Kasım 2026).** Mevcut sürümün ücretsiz olduğu kullanıcı
  tarafından doğrulanmış ürün kararıdır (Kullanıcı Sözleşmesi §5). Kodda
  uygulama içi satın alma veya abonelik bağımlılığı da yok.

## Ek: cihazda henüz denenmeyenlerin ayrıntısı (Açık konular 9)

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

**Uygulamada kabul akışı yok** (Açık konular 5). Sayfa, kullanıcının sözleşmeyi
uygulamada kabul ettiği şeklinde sunulmadı. Apple EULA: Açık konular 6.

**Diğer sayfalarla farklar:** 30 günün başlangıcı ve "ücretsiz" çözüldü (bkz.
Çözülen konular). Açık rıza: Açık konular 2. Kabul akışı: Açık konular 5.
Apple EULA: Açık konular 6.

**Kodla doğrulananlar:** "Bildirimlerde içeriği gizle" yalnızca hatırlatıcı
bildirimlerinde kullanılıyor, widget'a uygulanmıyor
(`hatirlatici/HatirlaticiYoneticisi.tsx`); `expo-updates` bağımlılığı var
(§12); reklam, analitik veya yapay zekâ SDK'sı yok (§6).

## Kullanıcının verdiği bilgiler

- **Veri sorumlusu bilgileri:** Açık konular 8.
- **Ana veritabanı bölgesi (eu-central-1):** Açık konular 1.3.
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
