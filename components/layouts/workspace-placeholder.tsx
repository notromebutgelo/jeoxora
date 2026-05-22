type WorkspaceStat = {
  label: string;
  value: string;
};

type WorkspacePlaceholderProps = {
  description: string;
  disclaimer?: string;
  eyebrow: string;
  highlights: string[];
  stats: WorkspaceStat[];
  title: string;
};

export function WorkspacePlaceholder({
  description,
  disclaimer,
  eyebrow,
  highlights,
  stats,
  title,
}: WorkspacePlaceholderProps) {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
      <section className="jeoxora-panel">
        <span className="jeoxora-pill">{eyebrow}</span>
        <h1 className="mt-6 text-4xl text-white md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
          {description}
        </p>
        {disclaimer ? (
          <p className="mt-6 rounded-2xl border border-amber-300/15 bg-amber-100/5 p-4 text-sm leading-6 text-amber-100/90">
            {disclaimer}
          </p>
        ) : null}
      </section>
      <section className="jeoxora-panel">
        <p className="text-xs uppercase tracking-[0.3em] text-violet-200/70">
          Snapshot
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
          {stats.map((stat) => (
            <article
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-4"
              key={stat.label}
            >
              <p className="text-sm text-slate-400">{stat.label}</p>
              <p className="mt-2 text-2xl text-white">{stat.value}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="jeoxora-panel xl:col-span-2">
        <p className="text-xs uppercase tracking-[0.3em] text-violet-200/70">
          Next build targets
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
              key={item}
            >
              <h2 className="text-2xl text-white">{item}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                This section is scaffolded and ready for the first production
                iteration.
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
