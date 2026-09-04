# Namaz Motivasyonu görselleri

## Orijinaller (bu klasör — DEĞİŞTİRİLMEZ)

| Dosya | İçerik |
|---|---|
| `namaz-motivasyon-logo.png` | 3B neon mihrap — koyu yeşil zemin (hero görseli) |
| `namaz-moivasyon-home-page.png` | App Store görseli — "Her vakit, yeni bir başlangıç" (Bugün ekranı) |
| `namaz-moivasyon-group-page.png` | App Store görseli — "Ekibinle… yarış!" (Grup ekranı) |

> Not: bazı dosya adlarında "moivasyon" yazımı orijinalden gelmektedir; değiştirilmedi.

## `web/` — sitede kullanılan optimize kopyalar

`sips` (macOS yerleşik) ile üretildi. App Store görüntülerinin **üst pazarlama başlığı kırpıldı**.

| Dosya | Kaynak | İşlem |
|---|---|---|
| `web/art.jpg` | `namaz-motivasyon-logo.png` | 900 px, JPEG |
| `web/screen-today.jpg` | `namaz-moivasyon-home-page.png` | başlık kırpıldı, 900 px |
| `web/screen-group.jpg` | `namaz-moivasyon-group-page.png` | başlık kırpıldı, 900 px |

## Eksik — yer tutucu gösteriliyor

Şu ekranlar `web/` altına eklenebilir (oran 9:19, başlıksız, ~900 px, JPG):

- `web/screen-reminders.jpg` — hatırlatıcı ayar ekranı
- `web/screen-progress.jpg` — ilerleme / istatistik ekranı

> Dosyalar hazır olduğunda `src/config/assets.ts` içine yol eklenip
> `NamazView` galerisindeki ilgili öğelere `src` verilmesi yeterli.
