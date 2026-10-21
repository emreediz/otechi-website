import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { cn } from "@/lib/cn";
import { GLASS, showcaseItems, type ShowcaseKey } from "@/lib/showcase";
import { PageTransition } from "@/components/motion/PageTransition";
import {
  HomeStage,
  StageLink,
  type StageSlide,
} from "@/components/stage/HomeStage";
import {
  ArtBackdrop,
  NamazArt,
  OleArt,
  PanelArt,
} from "@/components/visual/ProductArt";

const rise = (i: number) => ({ "--i": i }) as CSSProperties;

/** The glass logo, huge and slowly turning, drifting with the pointer. */
function GlassBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div
        className="absolute left-1/2 top-[46%] w-[175vw] -translate-x-[30%] -translate-y-1/2 md:top-1/2 md:w-[max(135svh,92vw)] md:-translate-x-[38%]"
      >
        <div className="[translate:calc(var(--px,0)*-22px)_calc(var(--py,0)*-14px)] transition-[translate] duration-1000 ease-out-expo">
          <div className="stage-media">
            <div className="glass-breathe">
              <Image
                src={GLASS.src}
                alt=""
                width={GLASS.w}
                height={GLASS.h}
                sizes="140vw"
                priority
                className="glass-spin w-full brightness-[0.62] contrast-[1.08]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,transparent_35%,rgb(0_0_0/0.7)_100%),linear-gradient(to_top,rgb(0_0_0/0.7),transparent_55%)]" />
    </div>
  );
}

/** Ole Panel's backdrop: a dark grid with faint, oversized chart bars. */
function GridBackdrop() {
  const bars = [0.38, 0.52, 0.44, 0.66, 0.58, 0.86, 0.72, 0.5, 0.62];
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-[#04060c]">
      <div className="stage-media absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.05)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute inset-x-[8%] bottom-0 flex h-[70%] items-end gap-[2.5%] opacity-60">
        {bars.map((v, i) => (
          <span
            key={i}
            className={
              i === 5
                ? "flex-1 rounded-t-xl bg-gradient-to-t from-brand/10 to-brand/60"
                : "flex-1 rounded-t-xl bg-gradient-to-t from-[#5b7cfa]/5 to-[#5b7cfa]/25"
            }
            style={{ height: `${v * 100}%` }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgb(0_0_0/0.85),transparent_60%),radial-gradient(60%_50%_at_70%_20%,rgb(91_124_250/0.25),transparent_70%)]" />
    </div>
  );
}

export function HomeView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.home;
  const s = t.stage;
  const mock = dict.mock;
  const items = showcaseItems(locale);

  const backgrounds: Record<ShowcaseKey, ReactNode> = {
    ole: <ArtBackdrop kind="ole" />,
    panel: <GridBackdrop />,
    namaz: <ArtBackdrop kind="namaz" />,
  };

  const previews: Record<ShowcaseKey, ReactNode> = {
    ole: <OleArt copy={mock} layout="landscape" />,
    panel: <PanelArt copy={mock} layout="landscape" />,
    namaz: <NamazArt copy={mock} layout="landscape" />,
  };

  const productSlides: StageSlide[] = items.map((item, i) => {
    const copy = t.products.items[item.key];
    const flip = i % 2 === 1;
    return {
      key: item.key,
      label: item.label,
      href: item.href,
      background: backgrounds[item.key],
      content: (
        <div className="absolute inset-0" data-theme={item.key}>
          <p
            className="stage-rise absolute left-4 top-[15%] hidden text-sm text-fg-muted md:block md:left-[26%] md:top-[20%]"
            style={rise(0)}
          >
            {s.tags[item.key]}
          </p>
          <div
            className={
              flip
                ? "stage-rise absolute right-4 top-[13%] aspect-[4/3] w-[62vw] overflow-hidden rounded-md shadow-lg md:left-[44%] md:right-auto md:top-[12%] md:aspect-[16/10] md:w-[36vw] md:max-w-[38rem]"
                : "stage-rise absolute right-4 top-[13%] aspect-[4/3] w-[62vw] overflow-hidden rounded-md shadow-lg md:right-[5vw] md:top-[12%] md:aspect-[16/10] md:w-[38vw] md:max-w-[40rem]"
            }
            style={rise(1)}
          >
            {previews[item.key]}
          </div>
          <h2
            className={cn(
              "stage-rise absolute left-4 top-[45%]",
              item.label.length > 12 ? "text-display-l" : "text-display-xl",
              flip ? "md:left-[38%] md:top-[60%]" : "md:left-[8%] md:top-[62%]",
            )}
            style={rise(2)}
          >
            <Link href={item.href}>{item.label}</Link>
          </h2>
          <div
            className={cn(
              "stage-rise absolute bottom-[calc(12.75rem+env(safe-area-inset-bottom))] left-4 right-4 max-w-[22rem] text-sm leading-relaxed text-fg-muted md:left-auto md:max-w-[17rem]",
              flip
                ? "md:bottom-[9%] md:right-[6vw]"
                : "md:bottom-auto md:right-[4vw] md:top-[calc(12%+min(38vw,40rem)*0.625+1.5rem)]",
            )}
            style={rise(3)}
          >
            <p>{copy.body}</p>
            <div className="mt-2 text-fg">
              <StageLink href={item.href}>{s.open}</StageLink>
            </div>
          </div>
        </div>
      ),
    };
  });

  return (
    <PageTransition>
      <HomeStage
        label={s.label}
        introBackground={<GlassBackdrop />}
        intro={
          <div className="absolute inset-0">
            <p
              className="stage-rise absolute left-4 right-4 top-[15%] max-w-[22rem] text-[0.95rem] leading-relaxed md:left-auto md:right-[9vw] md:top-[24%] md:text-base"
              style={rise(1)}
            >
              {t.hero.lead}
            </p>
            <h1 className="absolute left-4 top-[34%] text-display-xl md:left-[30%] md:top-auto md:bottom-[17%]">
              <span className="stage-rise block" style={rise(2)}>
                {t.hero.titleLines[0]}
              </span>
              <span className="stage-rise block pl-[0.9em]" style={rise(3)}>
                {t.hero.titleLines[1]}
              </span>
            </h1>
          </div>
        }
        slides={productSlides}
      />
    </PageTransition>
  );
}
