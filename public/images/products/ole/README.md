# Ole görselleri

## Orijinaller (bu klasör — DEĞİŞTİRİLMEZ)

| Dosya | İçerik |
|---|---|
| `ole-logo.png` | "ole" kelime markası (turuncu, şeffaf) |
| `ole-glass-token-1.png` | 3B Ole jetonu — lacivert zemin (hero görseli) |
| `ole-glass-token-2.png` | 3B jeton — alternatif render |
| `ole-home-page.jpg` | App Store görseli — "İşletmeleri Keşfet" |
| `ole-first-page.jpg` | App Store görseli — "Harcadıkça Kazan" |
| `ole-campaign-page.jpg` | App Store görseli — "Kampanyaları Keşfet" |
| `ole-token-page.jpg` | App Store görseli — "Jetonların Tek Sayfada" (Ödüller) |

## `web/` — sitede kullanılan optimize kopyalar

`sips` (macOS yerleşik) ile üretildi. App Store görüntülerinin **üst pazarlama başlığı kırpıldı**.

| Dosya | Kaynak | İşlem |
|---|---|---|
| `web/token.png` | `ole-glass-token-1.png` | 760 px'e küçültüldü |
| `web/logo.png` | `ole-logo.png` | 640 px'e küçültüldü |
| `web/screen-rewards.jpg` | `ole-token-page.jpg` | başlık kırpıldı, 900 px |
| `web/screen-campaigns.jpg` | `ole-campaign-page.jpg` | başlık kırpıldı, 900 px |
| `web/screen-discover.jpg` | `ole-home-page.jpg` | başlık kırpıldı, 900 px |
| `web/screen-earn.jpg` | `ole-first-page.jpg` | başlık kırpıldı, 900 px |

## Eksik — yer tutucu gösteriliyor (eklenince siteye düşürülür)

Web yönetim paneli görselleri henüz yok. Şu dosyalar `web/` altına eklenmeli
(oran **16:10**, ~1600–2000 px genişlik, JPG):

- `web/panel-overview.jpg` — panel genel bakış
- `web/panel-campaigns.jpg` — kampanya yönetimi
- `web/panel-analytics.jpg` — ziyaret / etkileşim istatistikleri

Opsiyonel ek mobil ekranlar (oran 9:19, başlıksız, ~900 px):

- `web/screen-notification.jpg` — bildirim ekranı
- `web/screen-qr.jpg` — QR okutma ekranı

> Dosyalar hazır olduğunda `src/config/assets.ts` içine yolları ekleyip ilgili
> `ImagePlaceholder` / `BrowserFrame` çağrılarına `src` verilmesi yeterli.
