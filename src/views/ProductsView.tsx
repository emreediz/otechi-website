import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { localizedPath } from "@/i18n/routes";
import { BRAND } from "@/config/brand";
import { IMG } from "@/config/assets";
import { PageHero } from "@/components/content/PageHero";
import { Section } from "@/components/ui/Section";
import { ProductCard } from "@/components/content/ProductCard";

export function ProductsView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.products;
  const s = dict.showcase;

  return (
    <>
      <PageHero backdrop="otechi" title={t.title} subtitle={t.intro} />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <ProductCard
            theme="ole"
            name={BRAND.products.ole}
            tagline={t.ole.tagline}
            points={t.ole.points}
            href={localizedPath("productOle", locale)}
            ctaLabel={dict.common.learnMore}
            logoSrc={IMG.ole.logo}
            logoAlt={s.home.oleLogoAlt}
            logoW={IMG.ole.logoW}
            logoH={IMG.ole.logoH}
            mediaVariant="contain-dark"
          />
          <ProductCard
            theme="namaz"
            name={BRAND.products.namaz}
            tagline={t.namaz.tagline}
            points={t.namaz.points}
            href={localizedPath("productNamaz", locale)}
            ctaLabel={dict.common.learnMore}
            logoSrc={IMG.namaz.art}
            logoAlt={s.home.namazLogoAlt}
            logoW={IMG.namaz.artW}
            logoH={IMG.namaz.artH}
            mediaVariant="cover"
          />
        </div>
      </Section>
    </>
  );
}
