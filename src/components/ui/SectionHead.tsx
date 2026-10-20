import { Kicker } from "./Kicker";

/** Kicker + section heading in the editorial `text-heading` size. */
export function SectionHead({
  kicker,
  title,
}: {
  kicker: string;
  title: string;
}) {
  return (
    <div className="max-w-3xl">
      <Kicker>{kicker}</Kicker>
      <h2 className="mt-5 text-heading text-balance">{title}</h2>
    </div>
  );
}
