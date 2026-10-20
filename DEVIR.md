# Otechi Web Sitesi — Devir Notları

> Hazırlanma tarihi: 2026-10-13. Bu dosya; kod, git geçmişi, GitHub API (salt-okunur) ve canlı siteye yapılan HTTP/DNS sorgularıyla hazırlandı.
> Her bilginin yanında **[Doğrulandı]**, **[Kanıta dayalı çıkarım]** ya da **[Doğrulanmadı]** etiketi var.
> Bu dosyaya şifre, token, API anahtarı veya `.env` değeri yazılmamalıdır.

---

## 1. Özet

- Otechi şirketinin tanıtım sitesi: iki dilli (TR varsayılan, EN), tamamen statik bir Next.js sitesi.
- Ürün sayfaları: **Ole** (Şubat 2026'dan beri canlı) ve **Namaz Motivasyonu**.
- Namaz Motivasyonu için sabit URL'li, yalnızca Türkçe sözleşme sayfaları ve hesap silme sayfası var (mağaza başvuruları için).
- Hosting: **Cloudflare Pages** (`otechi-website` projesi); GitHub `main` dalına yapılan push otomatik yayın tetikliyor (bkz. §5).
- Canlı alan adı: **https://otechi.com** (en son commit `d0bf726` canlıda).

## 2. Repo ve git durumu

| Konu | Değer | Durum |
|---|---|---|
| Uzak repo | `https://github.com/emreediz/otechi-website.git` (`origin`) | [Doğrulandı] |
| Görünürlük | **Public** | [Doğrulandı] |
| Varsayılan dal | `main` (tek dal) | [Doğrulandı] |
| Son commit | `d0bf726` — "Add real contact details to the Contact page" (2026-09-08) | [Doğrulandı] |
| Yerel ↔ uzak | `main` = `origin/main` = `d0bf726`; **gönderilmemiş commit yok** (`git ls-remote` ile teyit edildi) | [Doğrulandı] |
| Commit edilmemiş değişiklik | Yok (bu `DEVIR.md` dışında) | [Doğrulandı] |

Commit geçmişi:

| Commit | Tarih | Açıklama |
|---|---|---|
| `6531cdd` | 2026-09-03 | Create Next App ile ilk iskelet |
| `d3a750f` | 2026-09-04 | Sitenin ana inşası (iki dil, ürün sayfaları, sözleşme sayfaları, sitemap/robots) |
| `9552b91` | 2026-09-04 | Favicon `src/app/icon.svg` ile değiştirildi |
| `6baa47d` | 2026-09-06 | Namaz Motivasyonu hesap/veri silme sayfası |
| `d0bf726` | 2026-09-08 | İletişim sayfasına gerçek telefon ve e-posta eklendi |

## 3. Teknoloji yığını

| Bileşen | Sürüm / not |
|---|---|
| Next.js | `16.3.4` (App Router). **Dikkat:** `AGENTS.md`'ye göre bu sürümde kırıcı değişiklikler var; kod yazmadan önce `node_modules/next/dist/docs/` okunmalı. |
| React / React DOM | `19.2.8` |
| TypeScript | `^5` |
| Tailwind CSS | `^4` (`@tailwindcss/postcss`) |
| İkonlar | `lucide-react` (tek ek çalışma zamanı bağımlılığı) |
| Lint | ESLint 9 + `eslint-config-next` |
| Animasyon | Kütüphane yok; CSS + IntersectionObserver (`src/components/motion/Reveal.tsx`), `prefers-reduced-motion` destekli |
| Yerel ortam (bu makine) | Node `v24.20.0`, npm `11.19.0` |
| Paket yöneticisi | npm (`package-lock.json`) |

Yerel makinede `wrangler` (Cloudflare CLI) **kurulu değil**; Cloudflare tarafı yalnızca panelden yönetiliyor gibi görünüyor.

## 4. Çalıştırma komutları

```bash
npm install       # bağımlılıklar
npm run dev       # geliştirme sunucusu (http://localhost:3000)
npm run build     # statik çıktı → out/
npm run lint      # ESLint
```

- `next.config.ts` → `output: "export"`, `images.unoptimized: true`, `trailingSlash: false`. Sunucu çalışma zamanı yok; `npm run start` statik export ile anlamlı değildir.
- `out/` ve `.next/` git'e dahil değil (`.gitignore`). Yerelde 2026-09-08 tarihli eski bir `out/` mevcut; güncel sayılmamalı.
- Bu devir sırasında build/lint **çalıştırılmadı**.

## 5. Hosting ve yayın (Cloudflare)

### Doğrulananlar

- **Cloudflare Pages Git entegrasyonu aktif.** GitHub'daki `cloudflare-workers-and-pages` uygulaması, `d3a750f`'ten itibaren `main`'e push'lanan **her commit** için "Cloudflare Pages — Deployed successfully" check-run'ı oluşturmuş. Push ile yayın arasındaki süre ~1 dakika. [Doğrulandı]
- Pages proje adı: `otechi-website`; deployment önizleme adresleri `https://<hash>.otechi-website.pages.dev` biçiminde. [Doğrulandı — check-run çıktısı]
- İlk commit `6531cdd` için check-run yok → entegrasyon iskeletten sonra, `d3a750f` öncesinde kurulmuş. [Doğrulandı]
- `otechi.com` DNS'i Cloudflare'de (NS: `phoenix.ns.cloudflare.com`, `alaric.ns.cloudflare.com`), proxy'li. [Doğrulandı]
- `https://otechi.com` → `302` → `/tr` (`public/_redirects` kuralı çalışıyor). `/tr`, `/tr/iletisim`, `/urunler/namaz-motivasyonu/hesap-silme` → `200`. [Doğrulandı]
- Canlı site son commit'i yansıtıyor: iletişim sayfasında yeni telefon/e-posta görünüyor; `sitemap.xml` `lastmod` değeri `d0bf726` yayın saatine denk geliyor. [Doğrulandı]
- Repoda `wrangler.toml`, `.github/workflows` veya başka CI yok; yayın yalnızca Cloudflare'in kendi Git entegrasyonuyla yapılıyor. [Doğrulandı]

**Sonuç:** GitHub `main` dalına push = otomatik production yayını. Push öncesi yerelde `npm run build` ile kontrol yapılması önerilir; hatalı build canlıya gitmez ama check-run başarısız olur.

### Doğrulanamayanlar

- Cloudflare panelindeki **build komutu / çıktı klasörü / Node sürümü / ortam değişkenleri** (muhtemelen `npm run build` + `out`, ama panel görülmedi). [Doğrulanmadı]
- **Production dalı** ayarının `main` olduğu. (Check-run'lar "Preview URL" etiketiyle hash adresi gösteriyor; bu Cloudflare'in her deployment için standart davranışı. Canlı sitenin son commit'i göstermesi `main`'in production olduğunu kuvvetle düşündürüyor.) [Kanıta dayalı çıkarım]
- Diğer dallara push'un önizleme deployment'ı üretip üretmediği. [Doğrulanmadı]
- `otechi-website.pages.dev` kök adresi bu ağdan bağlantı sıfırlama hatası verdi; nedeni bilinmiyor. [Doğrulanmadı]
- **`www.otechi.com` sorunlu görünüyor:** DNS Cloudflare IP'lerine çözülüyor ama `https://www.otechi.com` → **HTTP 523** (origin erişilemez), `http://` → 200. `www` için Pages özel alan adı ya da yönlendirme kuralı eksik/hatalı olabilir. Panelden kontrol edilmeli. [Doğrulanmadı — yalnızca dışarıdan gözlem]

### Bağlı servisler

| Servis | Kullanım |
|---|---|
| GitHub (`emreediz/otechi-website`) | Kaynak kod |
| Cloudflare Pages (`otechi-website`) | Build + hosting |
| Cloudflare DNS (`otechi.com`) | Alan adı / proxy |

Analytics, form servisi, CMS, veritabanı veya harici API entegrasyonu kodda **yok**. `.env` dosyası yok; kod ortam değişkeni kullanmıyor.

## 6. Mimari ve önemli dosyalar

### Yönlendirme

- `src/app/[lang]/...` — iki dilli sayfalar. Slug'lar dile göre farklı; her sayfa klasörü `generateStaticParams` ile yalnızca kendi dilini üretiyor (`src/lib/localePage.ts`: `trParam` / `enParam`).
  - TR: `/tr`, `/tr/urunler`, `/tr/urunler/ole`, `/tr/urunler/namaz-motivasyonu`, `/tr/hakkimizda`, `/tr/iletisim`, `/tr/gizlilik`, `/tr/kullanim-sartlari`, `/tr/kvkk`
  - EN: `/en`, `/en/products`, `/en/products/ole`, `/en/products/namaz-motivasyonu`, `/en/about`, `/en/contact`, `/en/privacy`, `/en/terms`, `/en/kvkk`
- `src/i18n/routes.ts` — tüm sayfa yollarının tek kaynağı. İç linkler `localizedPath()` ile verilmeli, elle yazılmamalı. Dil değiştirici eşdeğer sayfaya geçiyor; yalnızca Türkçe olan Namaz belgelerinde TR aynı sayfada kalır, EN Namaz ürün sayfasına gider.
- `/` → `/tr`: `public/_redirects` (Cloudflare 302) + `src/app/page.tsx` (meta refresh + istemci tarafı yönlendirme, `noindex`).
- `src/app/urunler/namaz-motivasyonu/*` — dil ön eki olmayan, sabit, yalnızca Türkçe sayfalar: `gizlilik-politikasi`, `kvkk-aydinlatma-metni`, `kullanici-sozlesmesi`, `hesap-silme`. Yollar `src/config/legalRoutes.ts` içinde (sitemap ve ürün sayfası butonları buradan okuyor).

### İçerik ve yapılandırma

| Dosya | Görev |
|---|---|
| `src/i18n/dictionaries/tr.ts`, `en.ts` | Tüm arayüz metinleri (tipli sözlükler). Metin bileşenlere gömülmez. |
| `src/config/brand.ts` | Marka/ürün adları: "Otechi", "Ole", "Namaz Motivasyonu" — çevrilmez, büyük/küçük harfi değiştirilmez. |
| `src/config/site.ts` | Site adı ve `url` (`https://otechi.com`, sitemap/canonical için). |
| `src/config/ole.ts` | Bütün Ole linkleri (yalnızca `oletr.com` ana alan adı, mağaza ve panel linkleri) ve Ole fiyatları. Bkz. §11. |
| `src/config/assets.ts` | Sitede kullanılan optimize görsel yolları ve boyutları. |
| `src/content/legal/namaz-motivasyonu/*.ts` | Sözleşme metinleri (`content/contracts/namaz-motivasyonu/*.docx` dosyalarından çıkarılmış). |
| `src/views/*View.tsx` | Sayfa gövdeleri; `src/app` altındaki `page.tsx` dosyaları ince sarmalayıcılar. |
| `src/components/` | `layout/` (Navbar, MobileMenu, Footer, LanguageSwitcher), `content/` (PageIntro, NumberedList, ClosingCta, ContactRows, StoreLinks, StoryRows, Faq), `showcase/` (ProductTiles, IndexList, DragGallery, ScrollFillText), `product/` (Ole: ChapterNav, OlePricing, PricingCalculator), `legal/`, `ui/`, `motion/` (Reveal, PageTransition), `visual/` (ScreenStage). |
| `src/lib/pageMetadata.ts` | Sayfa başına canonical/hreflang/OpenGraph metadata. |
| `src/app/sitemap.ts`, `robots.ts` | Statik `sitemap.xml` ve `robots.txt`. |
| `src/app/globals.css` | Tema değişkenleri (Otechi / Ole / Namaz kimlikleri `data-theme` ile). |
| `public/images/products/*/README.md` | Görsel kaynakları ve web kopyalarında yapılan temizlikler (Türkçe). |

## 7. Mevcut özellikler

- İki dilli site (TR/EN), dile özgü slug'lar, `<html lang>` senkronizasyonu, "içeriğe atla" bağlantısı.
- Ana sayfa, Ürünler, Ole, Namaz Motivasyonu, Hakkımızda, İletişim sayfaları.
- İletişim: tıklanabilir telefon ve e-posta (TR + EN).
- Namaz Motivasyonu: Gizlilik Politikası, KVKK Aydınlatma Metni, Kullanıcı Sözleşmesi (docx'ten birebir aktarılmış — commit mesajına göre kelime kelime doğrulanmış) ve Hesap/Veri Silme sayfası.
- `sitemap.xml` (hreflang alternatifleriyle), `robots.txt`, sayfa bazlı canonical/hreflang.
- Favicon: `src/app/icon.svg`.

## 8. Doğrulanmış teknik kararlar

Kod yorumları ve commit mesajlarından çıkarılmıştır:

1. **Tamamen statik export** (`output: "export"`) — Cloudflare Pages'te sunucu çalışma zamanı olmadan çalışsın diye. Sonuç: Next.js Image Optimization, middleware, API route, ISR yok.
2. **Varsayılan dil Türkçe**; kök adres `/tr`'ye yönlenir.
3. **Yerelleştirilmiş slug'lar** tek bir yol haritasından yönetilir (`src/i18n/routes.ts`).
4. **Marka adları sabit** (`src/config/brand.ts`) — çeviri ya da büyük harfe çevirme yok.
5. **Sözleşme sayfaları sabit, dil ön eksiz URL'lerde** — kaynak belgeler yalnızca Türkçe; URL'ler mağaza başvurularında kullanılabilsin diye değişmemeli.
6. **Orijinal görseller değiştirilmez**; siteye `web/` altındaki `sips` ile küçültülmüş kopyalar konur.
7. **Animasyon kütüphanesi kullanılmaz**; tek ek bağımlılık `lucide-react`.
8. Önceki geliştirme oturumları Claude Code (web) ile yapılmış (commit'lerde `Claude-Session` bağlantısı var). O oturumların notlarına **erişilemedi**. Commit mesajlarında yazmayan geçmiş kararlar burada tahmin edilmemiştir.

## 9. Bilinen sorunlar ve açık noktalar

1. **`www.otechi.com` HTTPS'te 523 veriyor** (bkz. §5). Ziyaretçiler `www` ile gelirse hata görebilir.
2. **Şirket geneli yasal sayfalar taslak:** `/tr/gizlilik`, `/tr/kullanim-sartlari`, `/tr/kvkk` ve EN karşılıkları "Bu metin taslak hâlindedir…" uyarısı ve "Son güncelleme: Yakında" gösteriyor (`src/views/LegalView.tsx`, sözlüklerdeki `legal` bölümü). Canlıda yayında.
3. **Namaz Motivasyonu mağaza butonları** "App Store · Yakında" / "Google Play · Yakında" durumunda (`src/views/NamazView.tsx`). Uygulama mağazada yayındaysa güncellenmeli. [Uygulamanın yayın durumu doğrulanmadı]
4. **Ole fiyatlandırma** alanı "yakında" notu gösteriyor (`src/views/OleView.tsx`).
5. **Eski TODO:** `src/config/site.ts` içinde "production domain henüz kesin değil" yorumu var; `otechi.com` canlıda olduğu için yorum güncelliğini yitirmiş görünüyor.
6. **`public/images/products/ole/README.md` güncel değil:** `web/screen-rewards.jpg` vb. dosyalardan bahsediyor; gerçekte `screen-home`, `screen-loyalty`, `screen-notification`, `screen-business`, `panel.jpg` kullanılıyor (`src/config/assets.ts`).
7. **`README.md` hâlâ Create Next App şablonu** (Vercel'e yönlendiriyor); projeyi anlatmıyor.
8. `public/` ve `content/` altında büyük PNG ve `.docx` dosyaları var (her docx ~1,1 MB, bazı PNG'ler 2–4 MB); depo boyutu gözden geçirilebilir.
9. Otomatik test yok; tek kontrol `npm run lint` ve `npm run build`.

## 10. Sonraki işler (öneri)

1. Cloudflare panelinde: production dalı, build komutu, çıktı klasörü, Node sürümü ve özel alan adlarını (`otechi.com`, `www.otechi.com`) kontrol et; `www` için yönlendirme veya alan adı ekle.
2. Şirket geneli Gizlilik / Kullanım Şartları / KVKK metinlerini kesinleştirip taslak uyarısını kaldır.
3. Namaz Motivasyonu mağaza linklerini ve Ole fiyatlandırma bilgisini netleştir.
4. `site.ts` TODO yorumunu, Ole görsel README'sini ve kök `README.md`'yi güncelle.
5. Eksik görseller (ör. Namaz Motivasyonu hatırlatıcı/ilerleme ekranları) hazır olduğunda `src/config/assets.ts` üzerinden ekle.
6. Push öncesi düzenli olarak `npm run lint && npm run build` çalıştır (push = canlı yayın).

## 11. Yeniden tasarım (Ekim 2026, `redesign/site` dalı)

Bütün site Metalab'den yalnızca tasarım yaklaşımı olarak ilham alan editoryal bir yapıya geçirildi (kod/metin/görsel kopyalanmadı). Route'lar, dil sistemi, yasal metinler ve statik export değişmedi.

- **Tasarım sistemi (`globals.css`):** Poppins (300–700), akışkan tip ölçeği (`text-display-xl/l/m`, `text-heading`, `text-statement`, `text-row`, `text-number`, `text-lead`), `ease-out-expo`, koyu yüzey (`data-surface="dark"`; Ole'de lacivert `#000D26`, Namaz'da `#006B4D`). Temel kurallar `@layer base` içinde. Turuncu dolgulu butonlarda siyah (Ole'de lacivert) metin — beyaz 3,1:1 ile AA'yı geçmiyordu.
- **Hareket:** CSS + IntersectionObserver; kütüphane yok. Sayfa geçişleri React `<ViewTransition>` (`PageTransition`), header sabit. `prefers-reduced-motion` her şeyi kapatır; içerik JS olmadan da görünür.
- **Ürün sayfaları (sade):** Ole ve Namaz Motivasyonu sayfaları kısa tutuldu: hero, kaydırmayla ekranı değişen kısa bir hikâye (`ScrollStory`), Ole'de işletme tarafı için görsel ızgara, kapanış. Fiyat listesi ve hesaplayıcı kaldırıldı.
- **Ole linkleri:** İçerik yeni Ole sitesinin geçici adresinden araştırıldı; o adres sitede hiçbir yerde görünmez. Bütün linkler `src/config/ole.ts` içinde ve `oletr.com` / `panel.oletr.com` / mağaza adreslerine gider. Demo sayfası (`/demo-talep/`) `oletr.com` üzerinde henüz yayında değil (2026-10-20: 404), bu yüzden `NEW_PAGES_LIVE = false` iken ana sayfaya gider. **Yayından önce bu adresi tekrar kontrol edip yayındaysa bayrağı `true` yapın.**
- **Namaz Motivasyonu:** App Store ve Google Play'de yayında; linkler `src/config/namaz.ts`. Uygulamadaki İstatistikler ekranı sayfada kullanılıyor.
- **Görseller:** Ole web kopyalarında maskot, kullanıcı adı, gerçek görünümlü QR ve müşteri kodu temizlendi (orijinaller değişmedi; ayrıntı `public/images/products/ole/README.md`).
- **Yasal sayfalar:** Metinler değişmedi; render edilen metin yeniden tasarım öncesiyle karşılaştırılarak doğrulandı. Belge sayfalarında içindekiler ve "Diğer belgeler", footer'da hesap silme dahil Namaz belgeleri grubu var.
- **404:** `src/app/not-found.tsx` → `out/404.html` (TR + EN).
- **Kullanılmayan türev kopyalar (silinmedi, onay bekliyor):** `public/images/products/ole/web/token.png`, `web/logo.png`, `web/screen-winback.jpg`, `public/images/home/hero/web/hero.png`.
- **Dikkat — orijinaller:** Maskot, kullanıcı adı ve QR içeren Ole orijinalleri (`ole-bildirim.PNG`, `ole-işletme-sayfası.PNG`, `ole-panel.png`, `ole-home-page.PNG`) kurala göre yerinde duruyor; sitede link verilmiyor ama `public/` altında oldukları için URL ile erişilebilirler. Yayınlanmayan bir klasöre taşınmaları ayrıca karar gerektirir.


