import type { Metadata } from "next";
import Link from "next/link";
import { NAMAZ_LEGAL } from "@/config/legalRoutes";
import { Container } from "@/components/ui/Container";
import { LegalHeader } from "@/components/legal/LegalHeader";
import { NamazBackLink } from "@/components/legal/NamazBackLink";
import { RelatedDocs } from "@/components/legal/RelatedDocs";

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
      <LegalHeader
        eyebrow={<NamazBackLink />}
        title="Hesap ve Verileri Silme"
        intro="Namaz Motivasyonu hesabını ve hesabınla ilişkili verileri kalıcı olarak silebilirsin. Aşağıda silme adımları ve silinen veriler açıklanmıştır."
      />

      <Container className="py-12 sm:py-20">
        <div className="max-w-[68ch]">
          {/* Verbatim page text (compared by the legal-integrity check). */}
          <div data-legal-part className="space-y-16">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Uygulama üzerinden hesap silme
              </h2>
              <ol
                role="list"
                className="mt-8 border-t border-fg/15 [counter-reset:step]"
              >
                {steps.map((step) => (
                  <li
                    key={step}
                    className="grid grid-cols-[3.25rem_1fr] items-baseline gap-3 border-b border-fg/15 py-5 leading-relaxed text-fg-muted [counter-increment:step] before:text-3xl before:font-light before:tabular-nums before:text-accent before:content-[counter(step,decimal-leading-zero)]"
                  >
                    {step}
                  </li>
                ))}
              </ol>
            </section>

            <section className="border-t border-fg/10 pt-10">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Silinen veriler
              </h2>
              <p className="mt-5 leading-relaxed text-fg-muted">
                Hesap silme işlemi tamamlandığında aşağıdaki veriler kalıcı
                olarak silinir:
              </p>
              <ul className="mt-6 grid border-t border-fg/15 sm:grid-cols-2 sm:gap-x-8">
                {deletedData.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-b border-fg/15 py-3 leading-relaxed text-fg"
                  >
                    <span
                      aria-hidden="true"
                      className="size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="border-t border-fg/10 pt-10">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Yasal saklama
              </h2>
              <p className="mt-5 leading-relaxed text-fg-muted">
                Yasal veya güvenlik yükümlülüğü nedeniyle tutulması gereken
                veriler varsa, bu veriler yalnızca ilgili yükümlülüğün
                gerektirdiği süre boyunca saklanabilir. Söz konusu süre sona
                erdiğinde bu veriler de silinir, yok edilir veya anonim hâle
                getirilir.
              </p>
            </section>

            <section className="border-t border-fg/10 pt-10">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Uygulamaya erişemiyorsanız
              </h2>
              <p className="mt-5 leading-relaxed text-fg-muted">
                Uygulamaya giriş yapamıyorsan hesap silme talebini,{" "}
                <Link
                  href={NAMAZ_LEGAL.privacy}
                  className="font-medium text-accent underline decoration-1 underline-offset-2 hover:decoration-2"
                >
                  Gizlilik Politikası
                </Link>{" "}
                sayfasında belirtilen iletişim kanalı üzerinden iletebilirsin.
              </p>
            </section>
          </div>

          <RelatedDocs current="accountDeletion" className="mt-20" />
        </div>
      </Container>
    </div>
  );
}
