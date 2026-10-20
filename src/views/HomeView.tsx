import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath } from "@/i18n/routes";
import { productCapsules, type ProductKey } from "@/lib/productCapsules";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";
import { FaqTabs } from "@/components/content/FaqTabs";
import { Closing } from "@/components/content/Closing";
import {
  CapsuleField,
  type CapsuleSpot,
} from "@/components/visual/CapsuleField";
import { Capsule } from "@/components/visual/Capsule";
import { Playground } from "@/components/showcase/Playground";
import { OleNotification, OleRewardCard } from "@/components/mock/OleMocks";
import { PanelDashboard } from "@/components/mock/PanelMocks";
import { NamazToday, NamazWeek } from "@/components/mock/NamazMocks";

/** Hero capsule spots: Ole, Ole Panel, Namaz Motivasyonu. */
const SPOTS: CapsuleSpot[] = [
  {
    x: "14%", y: "28%", tx: "20%", ty: "21%", mx: "28%", my: "17%",
    r: "-13deg", s: 1.05, d: "0.15s", fo: "-2s", depth: 18,
  },
  {
    x: "86%", y: "34%", tx: "80%", ty: "26%", mx: "72%", my: "23%",
    r: "9deg", s: 1, d: "0.3s", fo: "-5s", depth: 28,
  },
  {
    x: "22%", y: "80%", tx: "50%", ty: "84%", mx: "50%", my: "92%",
    r: "6deg", s: 1, d: "0.45s", fo: "-7s", depth: 22,
  },
];

const THEME: Record<ProductKey, string> = {
  ole: "ole",
  panel: "panel",
  namaz: "namaz",
};

export function HomeView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.home;
  const mock = dict.mock;
  const capsules = productCapsules(locale);
  const contactHref = localizedPath("contact", locale);

  const visuals: Record<ProductKey, ReactNode> = {
    ole: (
      <div className="relative grid w-full max-w-[22rem] gap-4">
        <OleRewardCard copy={mock.ole} filled={3} />
        <OleNotification
          copy={mock.ole}
          className="justify-self-end sm:-mr-10"
        />
      </div>
    ),
    panel: <PanelDashboard copy={mock.panel} className="w-full" />,
    namaz: (
      <div className="flex w-full items-start justify-center gap-4">
        <NamazToday
          copy={mock.namaz}
          done={[true, true, true, false, false]}
        />
        <NamazWeek copy={mock.namaz} className="hidden sm:block" />
      </div>
    ),
  };

  return (
    <PageTransition>
      {/* ------------------------------------------------ Hero */}
      <section className="relative isolate -mt-24 grid min-h-[clamp(40rem,100svh,58rem)] place-items-center overflow-clip px-(--gutter) pb-40 pt-56 min-[720px]:pb-32 min-[720px]:pt-48 min-[1100px]:py-36">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(42%_30%_at_50%_72%,rgb(253_94_0/0.07),transparent)]"
        />
        <CapsuleField
          items={capsules}
          spots={SPOTS}
          label={t.hero.capsulesLabel}
        />
        <div className="pointer-events-none relative z-[2] max-w-[68.75rem] text-center">
          <h1 className="text-display-xl">
            {t.hero.titleLines.map((line) => (
              <span key={line} className="hero-line">
                <span>{line}</span>
              </span>
            ))}
          </h1>
          <p className="hero-rise hero-rise-3 mx-auto mt-[clamp(1.25rem,2.6vw,2rem)] max-w-[34ch] text-lead text-fg-muted">
            {t.hero.lead}
          </p>
          <div className="hero-rise hero-rise-4 pointer-events-auto mt-[clamp(1.75rem,3vw,2.5rem)] flex flex-wrap justify-center gap-3">
            <Button href={localizedPath("products", locale)} size="lg">
              {t.hero.ctaPrimary}
            </Button>
            <Button
              href={localizedPath("about", locale)}
              variant="secondary"
              size="lg"
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Statement */}
      <section className="pb-[clamp(5rem,11vw,9.5rem)] pt-6">
        <Container>
          <Reveal className="mx-auto max-w-4xl text-center">
            <Image
              src="/images/brand/otechi-mark.svg"
              alt=""
              width={56}
              height={56}
              className="mx-auto size-12 sm:size-14"
            />
            <p className="mt-6 text-statement text-balance">
              {t.intro.statement}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------ Products */}
      <section className="section-surface py-[clamp(5rem,11vw,9.5rem)]">
        <Container>
          <Reveal>
            <SectionHead
              kicker={t.products.kicker}
              title={t.products.title}
              titleMuted={t.products.titleMuted}
              lead={t.products.lead}
            />
          </Reveal>

          <div className="mt-[clamp(3rem,6vw,5rem)] grid gap-[clamp(4rem,8vw,7rem)]">
            {capsules.map((product, i) => {
              const copy = t.products.items[product.key];
              const flip = i % 2 === 1;
              return (
                <Reveal key={product.key}>
                  <div data-theme={THEME[product.key]}>
                    <h3 className="group-head mb-6">{product.label}</h3>
                    <div className="grid gap-[clamp(0.75rem,1.6vw,1.25rem)] lg:grid-cols-12">
                      <article
                        className={
                          flip
                            ? "card flex flex-col lg:order-2 lg:col-span-5"
                            : "card flex flex-col lg:col-span-5"
                        }
                      >
                        <Capsule
                          color={product.color}
                          icon={product.icon}
                          className="self-start [--h:2.75rem]"
                        >
                          {product.label}
                        </Capsule>
                        <p className="mt-8 text-sm font-medium text-fg-soft">
                          {copy.label}
                        </p>
                        <p className="mt-2 text-title-l text-balance">
                          {copy.title}
                        </p>
                        <p className="mt-4 max-w-[40ch] text-fg-soft">
                          {copy.body}
                        </p>
                        <Link
                          href={product.href}
                          className="group mt-auto inline-flex min-h-11 items-center gap-2 self-start pt-8 font-semibold"
                        >
                          <span className="border-b-[1.5px] border-accent pb-0.5">
                            {copy.cta}
                          </span>
                          <ArrowRight
                            className="size-4 text-accent-ink transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </Link>
                      </article>
                      <div
                        className={
                          flip
                            ? "card grid min-h-[22rem] place-items-center bg-[radial-gradient(70%_60%_at_50%_100%,var(--accent-soft),#fff)] lg:order-1 lg:col-span-7"
                            : "card grid min-h-[22rem] place-items-center bg-[radial-gradient(70%_60%_at_50%_100%,var(--accent-soft),#fff)] lg:col-span-7"
                        }
                      >
                        {visuals[product.key]}
                        <p className="sr-only">{mock.caption}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <p className="mt-8 text-center text-xs text-fg-faint">
            {mock.caption}
          </p>
        </Container>
      </section>

      {/* ------------------------------------------------ Playground */}
      <section className="py-[clamp(5rem,11vw,9.5rem)]">
        <Container>
          <Reveal>
            <SectionHead
              kicker={t.playground.kicker}
              title={t.playground.title}
              titleMuted={t.playground.titleMuted}
              lead={t.playground.lead}
            />
          </Reveal>
          <Reveal className="mt-[clamp(2rem,4vw,3rem)]">
            <Playground copy={t.playground} mock={mock} />
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------ Approach */}
      <section className="pb-[clamp(5rem,11vw,9.5rem)]">
        <Container>
          <Reveal>
            <SectionHead
              kicker={t.approach.kicker}
              title={t.approach.title}
              align="start"
            />
          </Reveal>
          <Reveal
            variant="trigger"
            className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5"
          >
            {t.approach.items.map((item, i) => (
              <div key={item} className="card stagger-item flex flex-col">
                <span className="text-sm font-semibold tabular-nums text-accent-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-10 text-title text-balance">{item}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------ FAQ */}
      <section className="pb-[clamp(5rem,11vw,9.5rem)]">
        <Container className="grid items-start gap-[clamp(2rem,5vw,5rem)] lg:grid-cols-[1fr_2fr]">
          <Reveal className="lg:sticky lg:top-28">
            <Kicker>{t.faq.kicker}</Kicker>
            <h2 className="mt-5 text-heading">{t.faq.title}</h2>
            <p className="mt-4 max-w-[30ch] text-lead text-fg-soft">
              {t.faq.body}
            </p>
            <Link
              href={contactHref}
              className="group mt-7 inline-flex items-center gap-2 border-b-[1.5px] border-brand pb-[3px] font-semibold transition-[gap] hover:gap-3"
            >
              {t.faq.ask}
              <ArrowRight className="size-4 text-accent-ink" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal>
            <FaqTabs
              tabs={t.faq.tabs.map((tab) => ({
                label: tab.label,
                items: tab.items.map((item) => ({
                  q: item.q,
                  a: item.a,
                  link:
                    "contactLink" in item && item.contactLink
                      ? { href: contactHref, label: item.contactLink }
                      : undefined,
                })),
              }))}
            />
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------ Closing */}
      <Closing
        lines={[dict.common.cta.kicker, dict.common.cta.title]}
        action={
          <Button href={contactHref} size="lg">
            {dict.nav.cta}
          </Button>
        }
        capsules={capsules}
        capsulesLabel={t.hero.capsulesLabel}
      />
    </PageTransition>
  );
}
