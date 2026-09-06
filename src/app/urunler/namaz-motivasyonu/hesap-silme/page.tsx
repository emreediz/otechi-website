import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/config/brand";
import { NAMAZ_LEGAL } from "@/config/legalRoutes";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const PAGE_TITLE = "Namaz Motivasyonu – Hesap ve Verileri Silme";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description:
    "Namaz Motivasyonu uygulamasında hesabınızı ve hesapla ilişkili verilerinizi kalıcı olarak nasıl sileceğiniz.",
  alternates: { canonical: NAMAZ_LEGAL.accountDeletion },
  robots: { index: true, follow: true },
};

const steps = [
  "Namaz Motivasyonu uygulamasını aç.",
  "Hesabım / Ayarlar ekranına gir.",
  "“Hesabı Sil” seçeneğine dokun.",
  "Onay verdiğinde hesabın ve hesabınla ilişkili veriler kalıcı olarak silinir.",
];

const deletedData = [
  "Profil bilgileri",
  "E-posta ile ilişkili hesap kaydı",
  "Grup üyelikleri",
  "Namaz takip kayıtları",
  "Bildirim ayarları",
  "Push (bildirim) tokenları",
];

export default function Page() {
  return (
    <div data-theme="namaz" data-calm="true" className="bg-bg text-fg">
      <section className="border-b border-border bg-bg-subtle">
        <Container className="py-14 sm:py-20">
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
            {BRAND.products.namaz}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            Hesap ve Verileri Silme
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-fg-muted">
            Namaz Motivasyonu hesabını ve hesabınla ilişkili verileri kalıcı
            olarak silebilirsin. Aşağıda silme adımları ve silinen veriler
            açıklanmıştır.
          </p>
        </Container>
      </section>

      <Section animate={false}>
        <div className="mx-auto max-w-3xl space-y-12">
          <div>
            <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
              Uygulama üzerinden hesap silme
            </h2>
            <ol className="mt-5 list-decimal space-y-3 pl-6 marker:font-semibold marker:text-accent">
              {steps.map((step) => (
                <li key={step} className="leading-relaxed text-fg-muted">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
              Silinen veriler
            </h2>
            <p className="mt-5 leading-relaxed text-fg-muted">
              Hesap silme işlemi tamamlandığında aşağıdaki veriler kalıcı olarak
              silinir:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-accent">
              {deletedData.map((item) => (
                <li key={item} className="leading-relaxed text-fg-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
              Yasal saklama
            </h2>
            <p className="mt-5 leading-relaxed text-fg-muted">
              Yasal veya güvenlik yükümlülüğü nedeniyle tutulması gereken veriler
              varsa, bu veriler yalnızca ilgili yükümlülüğün gerektirdiği süre
              boyunca saklanabilir. Söz konusu süre sona erdiğinde bu veriler de
              silinir, yok edilir veya anonim hâle getirilir.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
              Uygulamaya erişemiyorsanız
            </h2>
            <p className="mt-5 leading-relaxed text-fg-muted">
              Uygulamaya giriş yapamıyorsan hesap silme talebini,{" "}
              <Link
                href={NAMAZ_LEGAL.privacy}
                className="text-accent underline decoration-1 underline-offset-2 hover:opacity-80"
              >
                Gizlilik Politikası
              </Link>{" "}
              sayfasında belirtilen iletişim kanalı üzerinden iletebilirsin.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
