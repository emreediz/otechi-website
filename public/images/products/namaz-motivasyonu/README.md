# Namaz Motivasyonu görselleri

## Orijinaller (bu klasör — DEĞİŞTİRİLMEZ)

| Dosya | İçerik |
|---|---|
| `namaz-motivasyon-logo.png` | 3B neon mihrap — koyu yeşil zemin (hero görseli) |
| `namaz-moivasyon-home-page.png` | App Store görseli — "Her vakit, yeni bir başlangıç" (Bugün ekranı) |
| `namaz-moivasyon-group-page.png` | App Store görseli — "Ekibinle… yarış!" (Grup ekranı) |
| `namaz-motivasyon-statistics-page.png` | Uygulama ekran görüntüsü — İstatistikler (Ekim 2026) |

> Not: bazı dosya adlarında "moivasyon" yazımı orijinalden gelmektedir; değiştirilmedi.

## `web/` — sitede kullanılan optimize kopyalar

| Dosya | Kaynak | İşlem |
|---|---|---|
| `web/art.jpg` | `namaz-motivasyon-logo.png` | 900 px, JPEG |
| `web/screen-today.jpg` | `namaz-moivasyon-home-page.png` | başlık kırpıldı, 900 × 1650 |
| `web/screen-group.jpg` | `namaz-moivasyon-group-page.png` | başlık kırpıldı, 900 × 1650 |
| `web/screen-stats.jpg` | `namaz-motivasyon-statistics-page.png` | alt sekme çubuğu kırpıldı, 900 × 1650 |

Yollar ve boyutlar: `src/config/assets.ts`. Mağaza linkleri: `src/config/namaz.ts`.
