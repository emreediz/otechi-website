# Ole görselleri

## Orijinaller (bu klasör — DEĞİŞTİRİLMEZ, SİLİNMEZ)

| Dosya | İçerik |
|---|---|
| `ole-logo.png` | "ole" kelime markası |
| `ole-glass-token-1.png`, `ole-glass-token-2.png` | 3B cam Ole jetonu |
| `ole-home-page.PNG` | Uygulama ana ekranı |
| `ole-sadakat-sistemi.PNG` | Ödüller ekranı |
| `ole-işletme-sayfası.PNG` | İşletme sayfası (maskot içerir — sitede kullanılmaz) |
| `ole-bildirim.PNG` | "Seni Özledik" bildirimi (maskot içerir — sitede kullanılmaz) |
| `ole-panel.png` | İşletme paneli (hesap adı, QR ve müşteri kodu içerir — sitede kullanılmaz) |

## `web/` — sitede kullanılan kopyalar

Orijinallerden üretildi (macOS `sips` ya da tarayıcı canvas'ı; ek paket yok).
Maskot, kişisel ad, gerçek görünümlü QR ve müşteri kodu bu kopyalarda yoktur.

| Dosya | Kaynak | İşlem |
|---|---|---|
| `token.webp` (640²) | `ole-glass-token-1.png` | Şeffaf WebP |
| `logo.png` | `ole-logo.png` | Küçültülmüş eski kopya — artık kullanılmıyor |
| `screen-home.jpg` (900×1947) | `ole-home-page.PNG` | Selamlamadaki kullanıcı adı kaldırıldı |
| `screen-loyalty.jpg` (900×1947) | `ole-sadakat-sistemi.PNG` | Küçültüldü |
| `screen-business.jpg` (900×1947) | `ole-işletme-sayfası.PNG` | "Menü" kartındaki maskot kaldırıldı |
| `screen-notification.jpg` (900×1947) | `ole-bildirim.PNG` | "Menü" kartındaki maskot kaldırıldı |
| `screen-campaign.jpg` (900×445) | `ole-işletme-sayfası.PNG` | Kampanya kartı kırpımı |
| `screen-winback.jpg` (900×740) | `ole-bildirim.PNG` | Bildirim kırpımı — artık kullanılmıyor |
| `panel.jpg` (1800×1047) | `ole-panel.png` | Hesap adı kaldırıldı, QR ve müşteri kodu bulanıklaştırıldı |
| `panel-qr-form.jpg` (860×1020) | `ole-panel.png` | "QR Kod Üretimi" formu kırpımı |
| `panel-verify.jpg` (860×714) | `ole-panel.png` | "Kod Doğrulama" kartı kırpımı |
| `nfc.webp` (382×760) | Ole'nin kendi site görseli | Olduğu gibi |
| `token.png` (760²) | `ole-glass-token-1.png` | Eski kopya — artık kullanılmıyor |

Yollar ve boyutlar: `src/config/assets.ts`.
