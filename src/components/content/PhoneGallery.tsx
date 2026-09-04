import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";
import { DeviceFrame } from "@/components/visual/DeviceFrame";

export type PhoneShot = {
  src?: string;
  alt: string;
  caption: string;
  placeholderLabel?: string;
};

/**
 * Row of phone screenshots (App Store style). The grid adapts to the number
 * of items so there are never empty columns — two shots sit larger and
 * centred, three or four fill a four-up row.
 */
export function PhoneGallery({ items }: { items: PhoneShot[] }) {
  const twoUp = items.length <= 2;
  return (
    <Reveal variant="trigger">
      <ul
        className={cn(
          "grid gap-6",
          twoUp
            ? "mx-auto max-w-2xl grid-cols-2"
            : "grid-cols-2 sm:grid-cols-4",
        )}
      >
        {items.map((item) => (
          <li key={item.alt} className="stagger-item">
            <DeviceFrame
              src={item.src}
              alt={item.alt}
              caption={item.caption}
              placeholderLabel={item.placeholderLabel ?? item.caption}
              sizes={
                twoUp
                  ? "(min-width: 640px) 20rem, 44vw"
                  : "(min-width: 640px) 16rem, 44vw"
              }
            />
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
