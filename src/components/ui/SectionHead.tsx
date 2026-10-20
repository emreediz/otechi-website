import { Kicker } from "./Kicker";

/** Optional kicker + section heading in the editorial `text-heading` size. */
export function SectionHead({
  kicker,
  title,
}: {
  kicker?: string;
  title: string;
}) {
  return (
    <div className="max-w-3xl">
      {kicker ? <Kicker className="mb-5">{kicker}</Kicker> : null}
      <h2 className="text-heading text-balance">{title}</h2>
    </div>
  );
}
