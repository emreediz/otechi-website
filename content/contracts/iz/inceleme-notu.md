# İz yasal metinleri — inceleme notu

Bu dosya siteye yayımlanmaz (`content/` klasörü build'e girmez). İz Gizlilik
Politikası ve İz KVKK Aydınlatma Metni'ndeki **editör notları sayfalara
alınmadı**; çözülmemiş konular burada tutulur.

- Sayfalar: `/urunler/iz/gizlilik-politikasi`, `/urunler/iz/kvkk-aydinlatma-metni`
- Metinler: `src/content/legal/iz/privacy.ts`, `src/content/legal/iz/kvkk.ts`
- Durum: `IZ_LEGAL_DRAFT = true` (`src/config/legalRoutes.ts`). Sayfalar
  `noindex`, sitemap dışında ve üstlerinde "inceleme aşamasındadır" uyarısı var.
  Aşağıdaki **yayına engel** maddeler çözülmeden bayrak `false` yapılmamalı.

Doğrulama kaynağı: İz uygulama deposu (`iz-app`, commit `692ceaf`, 1 Kasım 2026),
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
4. **Uygulama içi hesap silme çalışmıyor.** Kodda Ayarlar → Hesap → "Hesabı sil"
   akışı ve `hesabi-sil` Edge Function'ı var. Ancak `docs/DEVIR-NOTU.md` §11'e
   göre:
   - Fonksiyon **dağıtılmamış**.
   - Apple jeton iptali için gereken sırlar (`APPLE_TEAM_ID`, `APPLE_CLIENT_ID`,
     `APPLE_KEY_ID`, `APPLE_PRIVATE_KEY`) tanımlanmamış.
   - Akış cihazda **denenmemiş**.

   Bu yüzden metinlerde yalnızca e-posta ile talep yolu anlatıldı. Uygulama
   içindeki düğme şu an "Hesap silme hizmeti henüz kurulmadı" hatası verir.
   App Store yönergesi 5.1.1(v) uygulama içi silmeyi zorunlu tutar; e-posta yolu
   bunun yerine geçmez. Akış uçtan uca çalışır hâle gelince adımlar Gizlilik
   §11'e, KVKK §12'ye ve ayrı Hesap Silme sayfasına eklenmeli.
5. **30 günlük sunucu temizliği kapalı.** `eski_silinenleri_temizle` fonksiyonu
   uygulanmış (migration `20261031090000`), ancak pg_cron zamanlaması **kapalı**
   (DEVIR-NOTU §11). Sonuç olarak şunlar sunucuda süresiz kalır:
   - Silindi olarak işaretlenen kayıtlar.
   - 30 günden eski `kayit_gecmisi` sürümleri.
   - Silinen eklerin depodaki dosyaları.

   Metinlerde 30 gün sözü verilmedi. Ancak **uygulamanın kendi metni**
   (`sonSilinenlerAciklama`) "30 gün burada durur, sonra kalıcı olarak silinir"
   diyor ve sunucu tarafında bu doğru değil. Ayrıca depo dosyalarının SQL ile
   silinmesi engellenirse temizlik yalnızca kayıtları siler (DEVIR-NOTU, "Bilinen
   sınırlar").
6. **Saklama süreleri.** Şunlar için somut süre veya süreyi belirleyen ölçüt yok:
   - Normal kayıtlar, Son Silinenler, sürüm geçmişi (`kayit_gecmisi`,
     `gunluk_surumleri`) ve medya.
   - Hesaptan çıkıştan sonra cihazda kalan yerel veritabanı (`iz-<id>.db`) ve
     dosyalar.
   - Teknik kayıtlar ve sağlayıcı yedekleri.

   Supabase'de erişilebilir yedek görünmemesi yedek olmadığı anlamına gelmez;
   sağlayıcı yedek süreleri doğrulanmadı. (Gizlilik §10, KVKK §8 editör notları.)

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
- Kullanıcı Sözleşmesi ve Hesap Silme sayfaları henüz yok. Metinleri gelince
  `IZ_LEGAL` içine eklenmeli; ilgili bağlantılar (ürün sayfası, footer, "Diğer
  belgeler") yalnızca var olan belgeleri gösteriyor.

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
- **İz ürün sayfasındaki ifade düzeltildi (TR/EN).** "Hesabını uygulamanın
  içinden silebilirsin" yerine "silme taleplerini info@oletr.com adresine
  iletebilirsin" yazıldı.

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
