import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { tr } from "@/i18n/dictionaries/tr";
import { IZ_LEGAL, IZ_LEGAL_DRAFT } from "@/config/legalRoutes";
import { Container } from "@/components/ui/Container";
import { LegalHeader } from "@/components/legal/LegalHeader";
import { LegalBackLink } from "@/components/legal/NamazBackLink";
import { LegalNotice } from "@/components/legal/LegalNotice";
import { PageTransition } from "@/components/motion/PageTransition";
import { RelatedDocs } from "@/components/legal/RelatedDocs";

// İz – Hesap ve Verileri Silme. Same layout as the Namaz Motivasyonu page.
// Source: İz app repo (docs/DEVIR-NOTU.md "Hesap silme ve 30 günlük temizlik",
// device tests in commit f8e2e15, app copy in src/dil/tr.ts). Only behaviour
// verified on the server or on a device is described. Approved by legal
// counsel; pre-approval review record (archive):
// content/contracts/iz/inceleme-notu.md.

const PAGE_TITLE = "İz – Hesap ve Verileri Silme";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description:
    "İz uygulamasında hesabınızı ve hesapla ilişkili verilerinizi kalıcı olarak nasıl sileceğiniz.",
  alternates: { canonical: IZ_LEGAL.accountDeletion },
  // Indexed unless the İz documents are put back in draft (IZ_LEGAL_DRAFT).
  robots: { index: !IZ_LEGAL_DRAFT, follow: true },
};

const steps = [
  "İz uygulamasını aç ve Ayarlar ekranına gir.",
  "Hesap bölümünde “Hesabı sil” seçeneğine dokun.",
  "Silinecek verileri gözden geçir ve kimliğini yeniden doğrula: e-posta ile açtığın hesapta şifreni gir, Apple ile açtığın hesapta Apple ile onay ver.",
  "Son onayı ver. Silme tamamlandığında uygulama bunu sana bildirir.",
];

const deletedData = [
  "Notların ve hatırlatıcıları",
  "Günlük sayfaların ve sürümleri",
  "Sürüm geçmişi ve “Son silinenler”",
  "Fotoğraflar, çizimler ve ses kayıtları",
  "Profil adın",
  "Hesabın ve giriş bilgilerin",
];

const linkClass =
  "font-medium text-accent underline decoration-1 underline-offset-2 hover:decoration-2";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-fg/10 pt-10">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <div className="mt-5 space-y-4 leading-relaxed text-fg-muted">
        {children}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <PageTransition>
      <div data-theme="iz" data-calm="true" className="bg-bg text-fg">
        <LegalHeader
          eyebrow={<LegalBackLink product="iz" />}
          title="Hesap ve Verileri Silme"
          intro="İz hesabını ve hesabınla ilişkili verileri uygulamanın içinden kalıcı olarak silebilirsin. Aşağıda silme adımları, silinen veriler ve silmenin nasıl işlediği açıklanmıştır."
        />

        <Container className="py-12 sm:py-20">
          <div className="max-w-[68ch]">
            {IZ_LEGAL_DRAFT ? <LegalNotice text={tr.showcase.iz.draftNote} /> : null}

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
                <p className="mt-6 leading-relaxed text-fg-muted">
                  Apple ile açtığın hesap, iPhone veya iPad’indeki İz
                  uygulamasından silinir. Apple onayını tamamlamazsan ya da
                  şifren yanlışsa hesabın silinmez.
                </p>
              </section>

              <section className="border-t border-fg/10 pt-10">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Silinen veriler
                </h2>
                <p className="mt-5 leading-relaxed text-fg-muted">
                  Hesap silme tamamlandığında aşağıdaki veriler sunucudan
                  kalıcı olarak silinir:
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
                <p className="mt-6 leading-relaxed text-fg-muted">
                  Apple ile açtığın hesapta İz’in Apple hesabındaki “Apple ile
                  giriş” yetkisi de iptal edilir.
                </p>
              </section>

              <Section title="Hesap silme kalıcıdır">
                <p>
                  Hesap silmede 30 günlük geri alma süresi yoktur. Silinen
                  hesap ve kayıtlar geri getirilemez.
                </p>
              </Section>

              <Section title="Tek bir not veya günlük sayfasını silmek">
                <p>
                  Hesabını silmeden tek bir notu ya da günlük sayfasını
                  sildiğinde kayıt, Arşiv’deki “Son silinenler” bölümüne
                  taşınır ve 30 gün boyunca geri getirilebilir. Bu süre, silme
                  işleminin sunucuya ulaşmasıyla başlar; çevrimdışıyken
                  sildiğin kayıtlarda işlem sunucuya eşitlendiğinde başlar.
                </p>
                <p>
                  30 gün dolduğunda kayıt, ekleri ve sürüm geçmişiyle birlikte,
                  sunucuda günde bir kez çalışan temizlikte kalıcı olarak
                  silinir.
                </p>
              </Section>

              <Section title="Diğer cihazların">
                <p>
                  Silmeyi yaptığın cihazdaki kopya hemen kaldırılır. Çevrimdışı
                  olan bir cihazındaki kopya o cihazda kalır; cihaz internete
                  bağlanıp İz açıldığında hesabın silindiği algılanır, oturum
                  kapatılır ve cihazdaki içerik temizlenir.
                </p>
              </Section>

              <Section title="Uygulamayı kaldırmak hesabı silmez">
                <p>
                  İz’i cihazından kaldırmak veya hesaptan çıkış yapmak hesabını
                  ve sunucudaki verilerini silmez. Hesabını silmek için
                  yukarıdaki adımları izlemelisin.
                </p>
              </Section>

              <Section title="Silme yarıda kalırsa">
                <p>
                  Bağlantı kesilmesi gibi bir nedenle silme tamamlanamazsa
                  uygulama bunu başarılı olarak göstermez ve sana bildirir. Bu
                  durumda hesabın yeni kayıtların eşitlenmesine kapalı kalır;
                  silmeyi tamamlamak için işlemi yeniden denemelisin.
                </p>
              </Section>

              <Section title="Yedekler ve yasal saklama">
                <p>
                  Diğer cihazların silinmeyi algılayabilmesi için hesap
                  kimliğinden türetilen bir özet değer saklanır; bu değer
                  içerik, e-posta adresi veya ad içermez.
                </p>
                <p>
                  Hizmet sağlayıcıların yedek veya teknik kopyalarında
                  kalabilecek veriler, ilgili sağlayıcının saklama ve silme
                  döngülerine tabidir; bu kopyalar için belirli bir silinme
                  süresi taahhüt edilmez. Yasal veya güvenlik yükümlülüğü
                  nedeniyle tutulması gereken veriler varsa, yalnızca ilgili
                  yükümlülüğün gerektirdiği süre boyunca saklanır.
                </p>
              </Section>

              <Section title="Uygulamaya erişemiyorsan">
                <p>
                  Uygulamaya giriş yapamıyorsan veya silmeyle ilgili bir sorun
                  yaşarsan{" "}
                  <a href="mailto:info@oletr.com" className={linkClass}>
                    info@oletr.com
                  </a>{" "}
                  adresine yazabilirsin. Talebin, gerekli kimlik doğrulaması
                  yapılarak değerlendirilir. Verilerinin nasıl işlendiğini{" "}
                  <Link href={IZ_LEGAL.privacy} className={linkClass}>
                    Gizlilik Politikası
                  </Link>{" "}
                  sayfasında bulabilirsin.
                </p>
              </Section>
            </div>

            <RelatedDocs product="iz" current="accountDeletion" className="mt-20" />
          </div>
        </Container>
      </div>
    </PageTransition>
  );
}
