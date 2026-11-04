# Otechi Çerez Politikası — inceleme notu (ARŞİV)

> **Arşiv — güncel değildir.** Otechi Çerez Politikası (TR + EN) hukukçu
> tarafından onaylandı (kullanıcının bildirimi, 5 Kasım 2026) ve sitede
> yayın durumuna alındı: `COOKIE_POLICY_DRAFT = false`
> (`src/config/legalRoutes.ts`); sayfalar indekslenir, sitemap'tedir ve
> "inceleme aşamasındadır" uyarısı göstermez.
>
> Aşağıdaki içerik, onay öncesindeki inceleme sürecinin kaydıdır. "Açık
> konular" ifadesi o tarihteki durumu anlatır; bu dosya bugünkü yayın
> durumunu veya hukuki değerlendirmeyi yansıtmaz. Hukuki değerlendirme
> hukukçunun onayına dayanır, bu nota değil. Teknik dayanak ve "Bakım
> kuralı" bölümleri, metin güncellenirken başvuru kaynağı olarak geçerliliğini
> korur.

Bu dosya siteye yayımlanmaz (`content/` klasörü build'e girmez).

- Sayfalar: `/tr/cerez-politikasi`, `/en/cookie-policy`
- Metin: `src/content/legal/otechi/cookies.ts` (TR + EN)
- Görünüm: `src/views/CookiePolicyView.tsx`
- Yayın durumu (onay öncesi): `COOKIE_POLICY_DRAFT = true`: noindex,
  sitemap dışında, "inceleme aşamasındadır" uyarısı. Onaydan sonra (5 Kasım
  2026) `false`: indekslenir, sitemap'te, uyarı yok.

Metin hukuki değerlendirme içermez; yalnızca aşağıdaki teknik bulgulara
dayanır. Hukuki değerlendirme hukukçunun onayına dayanır, bu nota değil.

## Teknik dayanak (5 Kasım 2026)

Kaynak: sitenin kodu (`src/`), build çıktısı (`out/`), canlı sitenin
(`https://otechi.com`) HTTP yanıtları ve canlı sitede headless Chrome ile
yapılan ölçüm (Chrome DevTools Protocol: çerezler, `localStorage`,
`sessionStorage`, ağ istekleri). Cloudflare panel ayarları kullanıcının
bildirimine dayanır.

| Bulgu | Kanıt |
|---|---|
| Site kodu çerez yazmıyor/okumuyor | `src/` ve `out/` içinde `document.cookie`, `cookies()`, `Set-Cookie` yok. Statik export (`next.config.ts`: `output: "export"`), sunucu kodu yok. |
| Tek tarayıcı depolama kaydı: `otechi-mode` (localStorage) | Yazma/silme: `src/components/frame/ModeToggle.tsx` (açık temada `"light"` yazılır, koyuya dönünce silinir). Okuma: `src/app/layout.tsx` ön-boyama betiği. |
| İkinci kayıt: `otechi-cookie-notice` (localStorage) | İlk girişte gösterilen bilgilendirme bildirimi (`src/components/layout/CookieNotice.tsx`, `[lang]` ve `urunler` layout'larında). "Anladım" ile kapatılınca `"1"` yazılır; silme yok. Bildirim çerez politikası sayfasında gösterilmez. Bilgilendirme amaçlıdır; Kabul/Reddet yok (kullanıcı kararı, 5 Kasım 2026: site çerez kullanmadığı ve Web Analytics Cloudflare tarafından otomatik eklendiği için Reddet işlevsiz olurdu). |
| `sessionStorage`, IndexedDB, service worker yok | `src/` ve `out/` içinde 0 eşleşme. |
| Reklam/takip betiği yok | GA/GTM, piksel, Zaraz, iframe/embed: `src/`, `out/` ve canlı HTML'de 0 eşleşme. |
| Cloudflare Web Analytics açık (Automatic setup) | Kullanıcı bildirimi (panel: etkin, son 24 saatte 10 sayfa görüntüleme / 9 ziyaret). Canlı HTML'de Cloudflare'in eklediği `<script src="https://static.cloudflareinsights.com/beacon.min.js/...">` var. Yalnızca tarayıcı benzeri isteklerde (`Accept: text/html` + sıkıştırma) ekleniyor; ilk taramada bu yüzden görülmemişti. Kodda yok. |
| Web Analytics çerezsiz | Headless Chrome'da `/tr` → `/tr/gizlilik` → `/tr` yüklendi: tüm alan adlarında çerez sayısı 0, `Set-Cookie` başlığı yok, `localStorage`/`sessionStorage` boş. Beacon kaynağında (`beacon.min.js`, 31.8 KB) `cookie`, `localStorage`, `sessionStorage`, `indexedDB` için 0 eşleşme. |
| Web Analytics'in gönderdiği veri | Her sayfa yüklemesinde `POST https://otechi.com/cdn-cgi/rum`: `location` (sayfa adresi), `referrer` (varsa), tarayıcı motoru/sürümü ve işletim sistemi sürümü (`bi`), JS bellek kullanımı (`memory`), yükleme/bağlantı süreleri (`timingsV2`, `firstPaint`), sayfa yüklemesine özgü rastgele `pageloadId` (her yüklemede yeni UUID, saklanmıyor), `siteToken`. Not: bu ölçüm canlı analitiğe 3 sayfa görüntüleme ekledi. |
| Fontlar kendi sunucumuzdan | `next/font/google` build sırasında indirir; `out/` ve canlı HTML'de `fonts.googleapis`/`fonts.gstatic` yok, fontlar `/_next/static/media/` altından. |
| Barındırma: Cloudflare | Canlı yanıtlarda `server: cloudflare`, `cf-ray`. |
| Cloudflare e-posta gizleme betiği | Canlı HTML'de `/cdn-cgi/scripts/.../email-decode.min.js` ve `__cf_email__` var (kodda yok, Cloudflare ekliyor). Betik yanıtında `Set-Cookie` yok. |
| Canlı yanıtlarda çerez yok | `/`, `/tr`, `/tr/gizlilik` için tarayıcı, `curl` ve `python-requests` kullanıcı ajanlarıyla `Set-Cookie` görülmedi. |

## Cloudflare ayarları (kullanıcı tarafından panelden doğrulandı, 5 Kasım 2026)

| Ayar | Durum | Metindeki karşılığı |
|---|---|---|
| Bot Fight Mode | Kapalı | Anılmıyor; yalnızca koşullu genel ifade (6. bölüm) |
| Web Analytics | Açık, Automatic setup | 3. bölüm tablosu ve özet, 4. bölüm |
| Email Address Obfuscation | Açık | 5. bölüm istisnası, 6. bölüm |

## Onay öncesi açık konular (arşiv, 5 Kasım 2026)

1. **Bot Fight Mode kapalı** (kullanıcı bildirimi, 5 Kasım 2026: Security →
   Settings, anahtar kapalı). Metin Bot Fight Mode'dan söz etmiyor; yalnızca
   Cloudflare güvenlik özelliklerinin gerektiğinde teknik çerez
   kullanabileceğini koşullu söylüyor (6. bölüm). Canlı yanıtlarda `__cf_bm`,
   `cf_clearance` veya JS detections betiği görülmedi. Super Bot Fight Mode /
   Bot Management / WAF challenge kuralları ayrıca bildirilmedi; açılırsa 6.
   bölüm ve tablo gözden geçirilmeli.
2. **Cloudflare Web Analytics açık; metne eklendi** (3. bölüm tablosu ve
   özet, 4. bölüm). Çerezsiz çalıştığı teknik olarak doğrulandı (yukarıdaki
   tablo). Açık noktalar:
   - Web Analytics verilerinin Cloudflare'de saklama süresi doğrulanmadı;
     metinde "Cloudflare'in politikalarına tabidir" denildi.
   - Çerezsiz analitik için açık rıza veya itiraz (opt-out) imkânı gerekip
     gerekmediği hukukçu tarafından değerlendirilmeli. Metin onay
     mekanizması olmadığını ve içerik engelleyicilerin betiği
     engelleyebileceğini söylüyor; hukuki nitelendirme yapmıyor.
   - Beacon `static.cloudflareinsights.com` (üçüncü taraf alan adı) üzerinden
     yükleniyor; bu, ziyaretçinin IP adresinin o alan adına da iletilmesi
     demek.
   - Cloudflare'in sunucu tarafında istek verilerinden ürettiği toplu trafik
     istatistikleri ayrıca 6. bölümde anıldı.
3. **Email Address Obfuscation açık** (kullanıcı bildirimi, 5 Kasım 2026:
   Security → Settings → Scrape Shield). Canlı HTML'de de doğrulandı.
   `email-decode.min.js` (1.2 KB) kaynağında `cookie`, `localStorage`,
   `sessionStorage`, `fetch`, `XMLHttpRequest`, `sendBeacon` için 0
   eşleşme; betik yanıtında `Set-Cookie` yok. Betik yalnızca sayfadaki
   şifrelenmiş adresleri tarayıcıda çözüyor. Metinde 6. bölümde ve 5.
   bölümdeki istisnada belirtildi. Özellik kapatılırsa ikisi de
   kaldırılmalı.
4. **Yurt dışına aktarım ve hukuki sebep.** Cloudflare'in teknik bağlantı
   verilerini (IP vb.) işlemesine ilişkin KVKK m. 5/9 değerlendirmesi metne
   eklenmedi (uydurulmadı). Hukukçu değerlendirmeli; gerekirse bu bilgi
   Gizlilik Politikası / KVKK Aydınlatma Metni'nde yer almalı.
5. **Banner/onay gerekliliği.** Sitede çerez yok; `otechi-mode`
   kullanıcının kendi tıklamasıyla oluşturulan bir tercih kaydı; Web
   Analytics çerez ve tarayıcı depolaması kullanmıyor. Ayrı bir çerez
   tercih paneli bu nedenle eklenmedi; ilk girişte yalnızca bilgilendirme
   amaçlı bir bildirim gösteriliyor. Web Analytics için onay gerekirse
   Cloudflare'de "Automatic setup" yerine manuel kurulum seçilip beacon
   onaya bağlanmalı. Web Analytics dâhil bunun yeterli
   olduğu hukukçu tarafından teyit edilmeli (bkz. madde 2).
6. **Şirket Gizlilik Politikası ve KVKK Aydınlatma Metni yer tutucu.**
   `/tr/gizlilik`, `/en/privacy`, `/tr/kvkk`, `/en/kvkk` şu an "Bu bölüm
   hazırlanıyor" içeriyor. Bu yüzden 9. bölümde bu metinlere atıf
   yapılmadı; yalnızca KVKK m. 11 başvuru yolu (info@oletr.com) verildi.
   Sayfanın altındaki "Diğer belgeler" listesi footer gibi bu sayfalara
   bağlantı veriyor. Metinler hazırlandığında 9. bölüme atıf eklenebilir.
   Web Analytics ve Cloudflare işlemesi bu metinlerde de yer almalı.
7. **Veri sorumlusu bilgileri** mevcut Otechi hukuk metinlerinden alındı
   (Oğuzhan Menek, info@oletr.com, Çiğli / İzmir adresi). Şirket unvanı veya
   MERSİS numarası eklenmedi.
8. **Namaz Motivasyonu Gizlilik Politikası §13** web sitesi analitik veya
   benzeri izleme kullanırsa bunun web sitesinde yayımlanacak Çerez
   Politikası'nda açıklanacağını söylüyor. Web Analytics açık olduğu için bu
   koşul artık gerçekleşmiş durumda; bu politika onu karşılıyor. Onaylı metne
   dokunulmadı; o metinden
   bu sayfaya bağlantı verilip verilmeyeceği ayrıca karar gerektirir.

## Bakım kuralı

Siteye çerez, depolama anahtarı, analitik/pazarlama aracı, gömülü içerik veya
yeni bir Cloudflare özelliği eklenirse `cookies.ts` aynı değişiklikte
güncellenmeli; gerekiyorsa önce onay mekanizması eklenmelidir.
