import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { IMG } from "@/config/assets";
import { cn } from "@/lib/cn";
import { showcaseItems, type ShowcaseKey } from "@/lib/showcase";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";
import { EDGE, MockStage } from "@/components/case/Case";
import { PanelDashboard } from "@/components/mock/PanelMocks";
import { IzArt } from "@/components/visual/ProductArt";

/**
 * All products (like a work index): a large title, then one card per
 * product — picture, name, tags and one line — the first one full width.
 */
export function ProductsView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.products;
  const s = dict.home.stage;
  const copy = dict.home.products.items;
  const mock = dict.mock;
  const items = showcaseItems(locale);

  const media: Record<ShowcaseKey, ReactNode> = {
    ole: (
      <Image
        src={IMG.photos.ole1.src}
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        className="object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-[1.03]"
      />
    ),
    panel: (
      <MockStage tone="panel" className="transition-transform duration-1000 ease-out-expo group-hover:scale-[1.03]">
        <PanelDashboard copy={mock.panel} campaignLive className="w-[150%] max-w-none shrink-0 scale-[0.62] md:w-[170%] md:scale-[0.55] lg:w-[150%] lg:scale-[0.65]" />
      </MockStage>
    ),
    namaz: (
      <Image
        src={IMG.photos.namaz1.src}
        alt=""
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-[1.03]"
      />
    ),
    iz: (
      <div className="absolute inset-0 transition-transform duration-1000 ease-out-expo group-hover:scale-[1.03]">
        <IzArt copy={mock} layout="landscape" />
      </div>
    ),
  };

  return (
    <PageTransition>
      <header className={cn(EDGE, "pb-14 pt-[clamp(8rem,16vw,13rem)]")}>
        {/* Below 375px the long Turkish word needs a smaller size. */}
        <h1 className="text-display-xl max-[374px]:text-[length:min(3.5rem,14.5vw)]">
          {t.titleLines.map((line) => (
            <span key={line} className="hero-line">
              <span>{line}</span>
            </span>
          ))}
        </h1>
        <p className="hero-rise hero-rise-3 mt-8 max-w-[36ch] text-lead text-fg-soft">
          {t.lead}
        </p>
      </header>

      <Reveal
        variant="trigger"
        className={cn(EDGE, "grid gap-x-3 gap-y-14 pb-[clamp(5rem,11vw,10rem)] md:grid-cols-2")}
      >
        {items.map((item, i) => (
          <article
            key={item.key}
            data-theme={item.key}
            className={cn(
              "stagger-item",
              // First card full width; so is the last one when it would
              // otherwise sit alone in its row.
              (i === 0 || (i === items.length - 1 && items.length % 2 === 0)) &&
                "md:col-span-2",
            )}
          >
            <Link href={item.href} className="group block">
              <div
                className={cn(
                  "relative overflow-hidden rounded-md bg-surface",
                  i === 0 ||
                    (i === items.length - 1 && items.length % 2 === 0)
                    ? "aspect-[4/3] md:aspect-[21/9]"
                    : "aspect-[4/3]",
                )}
              >
                {media[item.key]}
              </div>
              <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h2 className="text-heading">
                  <span className="link-underline">{item.label}</span>
                </h2>
                <p className="text-sm text-fg-soft">{s.tags[item.key]}</p>
              </div>
              <p className="mt-2 max-w-[52ch] text-fg-soft">
                {copy[item.key].body}
              </p>
            </Link>
          </article>
        ))}
      </Reveal>
    </PageTransition>
  );
}
