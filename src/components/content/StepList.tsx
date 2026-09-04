export type Step = {
  title: string;
  body: string;
};

export function StepList({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative grid gap-5 sm:grid-cols-3">
      {/* Connector line behind the badges (desktop only). */}
      <span
        aria-hidden="true"
        className="draw-line absolute left-0 right-0 top-[3.25rem] hidden h-px bg-accent/30 sm:block"
      />
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="stagger-item relative rounded-xl border border-border bg-bg p-6"
        >
          <span
            className="relative inline-flex size-8 items-center justify-center rounded-full bg-accent font-display text-sm font-semibold text-accent-fg"
            aria-hidden="true"
          >
            {i + 1}
          </span>
          <h3 className="mt-4 font-display text-base font-semibold">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-fg-muted">
            {step.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
