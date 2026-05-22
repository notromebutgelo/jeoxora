import { Play, RotateCcw } from "lucide-react";

const sessionRows = [
  { duration: "25 min", label: "Deep Work", time: "8:00 AM" },
  { duration: "25 min", label: "Deep Work", time: "9:05 AM" },
  { duration: "5 min", label: "Short Break", time: "9:30 AM" },
  { duration: "25 min", label: "Deep Work", time: "9:35 AM" },
];

export default function FocusPage() {
  return (
    <section className="jx-card overflow-hidden p-5 md:p-6">
      <div className="flex flex-wrap items-center gap-6">
        {["Pomodoro", "Sessions", "Ambient", "Stats"].map((tab, index) => (
          <button
            className={index === 0 ? "jx-tab jx-tab-active" : "jx-tab"}
            key={tab}
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-3 xl:grid-cols-[0.85fr_1.2fr_0.8fr]">
        <article className="rounded-[22px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] p-5">
          <h1 className="text-[32px] leading-tight text-[color:var(--text)]">
            Focus Mode
          </h1>
          <div className="mt-5 space-y-4">
            {[
              ["Session Type", "Deep Work"],
              ["Focus Time", "25 min"],
              ["Short Break", "5 min"],
              ["Long Break", "15 min"],
              ["Cycles", "4"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-xs font-medium text-[color:var(--text-subtle)]">
                  {label}
                </p>
                <div className="jx-input mt-2 flex h-11 items-center">{value}</div>
              </div>
            ))}
          </div>
        </article>

        <article className="relative overflow-hidden rounded-[22px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] p-5">
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[radial-gradient(circle_at_bottom,rgba(124,58,237,0.14),transparent_62%)]" />
          <div className="mx-auto flex w-full max-w-[380px] flex-col items-center">
            <div className="relative mt-4 flex h-[280px] w-[280px] items-center justify-center rounded-full border-[10px] border-[color:var(--primary)]/20">
              <div className="absolute inset-[8px] rounded-full border-[4px] border-[color:var(--primary)]" />
              <div className="text-center">
                <p className="text-[58px] leading-none text-[color:var(--text)]">
                  25:00
                </p>
                <p className="mt-3 text-sm text-[color:var(--text-muted)]">
                  Focus Time
                </p>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-4">
              <button
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--primary)] text-white shadow-[0_18px_42px_rgba(109,40,217,0.28)]"
                type="button"
              >
                <Play className="ml-1 h-5 w-5 fill-current" />
              </button>
              <button
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--text-muted)]"
                type="button"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-6 text-center text-sm italic text-[color:var(--text-muted)]">
              &quot;Discipline today, freedom tomorrow.&quot;
            </p>
          </div>
        </article>

        <article className="rounded-[22px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] p-5">
          <h2 className="text-lg text-[color:var(--text)]">Today&apos;s Sessions</h2>
          <div className="mt-5 space-y-3">
            {sessionRows.map((row) => (
              <div
                className="flex items-center justify-between rounded-[16px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 py-3"
                key={`${row.label}-${row.time}`}
              >
                <div>
                  <p className="text-sm font-medium text-[color:var(--text)]">
                    {row.label}
                  </p>
                  <p className="text-xs text-[color:var(--text-muted)]">
                    {row.duration}
                  </p>
                </div>
                <span className="text-xs text-[color:var(--text-subtle)]">
                  {row.time}
                </span>
              </div>
            ))}
          </div>
          <button
            className="mt-4 text-sm font-medium text-[color:var(--primary)]"
            type="button"
          >
            View All Sessions
          </button>
        </article>
      </div>
    </section>
  );
}
