import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/i18n/getDictionary";
import { cn } from "@/lib/cn";
import type { ProductCapsule } from "@/lib/productCapsules";
import { Capsule } from "@/components/visual/Capsule";

/** Cards linking to the other products (bottom of each product page). */
export function OtherProducts({
  items,
  dict,
  className,
}: {
  items: ProductCapsule[];
  dict: Dictionary;
  className?: string;
}) {
  const copy = dict.home.products.items;
  return (
    <ul className={cn("grid gap-4 md:grid-cols-2", className)}>
      {items.map((item) => (
        <li key={item.key}>
          <Link
            href={item.href}
            className="card group flex h-full flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="flex flex-col items-start gap-4">
              <Capsule color={item.color} icon={item.icon} className="[--h:2.75rem]">
                {item.label}
              </Capsule>
              <span className="text-title text-balance">
                {copy[item.key].title}
              </span>
            </span>
            <span className="inline-flex shrink-0 items-center gap-2 font-semibold">
              <span className="border-b-[1.5px] border-brand pb-0.5">
                {copy[item.key].cta}
              </span>
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
