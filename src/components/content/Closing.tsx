import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import type { CapsuleColor } from "@/components/visual/Capsule";
import type { FieldCapsule } from "@/components/visual/CapsuleField";
import { CapsulePile } from "@/components/visual/CapsulePile";

/**
 * Page-closing section: a rounded grey panel with a large two-line title,
 * the call to action and a pile of product capsules on its bottom edge.
 */
export function Closing({
  lines,
  action,
  capsules,
  capsulesLabel,
  fillers,
}: {
  lines: [string, string];
  action: ReactNode;
  capsules: FieldCapsule[];
  capsulesLabel?: string;
  fillers?: CapsuleColor[];
}) {
  return (
    <section className="section-surface overflow-clip px-(--gutter) pt-[clamp(5rem,11vw,9rem)] text-center">
      <Reveal>
        <h2 className="text-display-l text-balance">
          <span className="block">{lines[0]}</span>
          <span className="block">{lines[1]}</span>
        </h2>
        <div className="mt-[clamp(2rem,4vw,2.75rem)] flex flex-wrap justify-center gap-3">
          {action}
        </div>
      </Reveal>
      <Reveal variant="trigger">
        <CapsulePile
          items={capsules}
          label={capsulesLabel}
          fillers={fillers}
        />
      </Reveal>
    </section>
  );
}
