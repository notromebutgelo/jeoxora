import { Flame, Plus, TrendingUp } from "lucide-react";

const stats = [
  { label: "Study Hours", trend: "+12% vs last week", value: "18h 45m" },
  { label: "Focus Sessions", trend: "+8% vs last week", value: "24" },
  { label: "Flashcards Reviewed", trend: "+20% vs last week", value: "532" },
  { label: "Current Streak", trend: "Keep it up!", value: "12 days" },
];

const tasks = [
  { time: "9:00 AM", title: "Con Law Reading" },
  { time: "11:00 AM", title: "Criminal Law Flashcards" },
  { time: "2:00 PM", title: "Evidence Review" },
  { time: "4:00 PM", title: "Property Law Cases" },
];

const chartHeights = [28, 42, 61, 47, 38, 74, 58];

export default function DashboardPage() {
  return (
    <div className="grid gap-3">
      <section className="jx-card p-5 md:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[color:var(--text-subtle)]">
              Dashboard
            </p>
            <h1 className="mt-3 text-[36px] leading-tight text-[color:var(--text)]">
              Good morning, Lex.
            </h1>
            <p className="mt-2 text-sm text-[color:var(--text-muted)]">
              Ready to continue your legal mastery journey?
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 xl:grid-cols-4">
          {stats.map((stat) => (
            <article className="jx-subcard p-4" key={stat.label}>
              <p className="text-xs font-medium text-[color:var(--text-subtle)]">
                {stat.label}
              </p>
              <p className="mt-3 text-[32px] leading-none text-[color:var(--text)]">
                {stat.value}
              </p>
              <p className="mt-3 flex items-center gap-2 text-xs text-[color:var(--success)]">
                <TrendingUp className="h-3.5 w-3.5" />
                {stat.trend}
                {stat.label === "Current Streak" ? <Flame className="h-4 w-4 text-orange-400" /> : null}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-3 grid gap-3 xl:grid-cols-[0.95fr_1.25fr]">
          <article className="jx-subcard p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-xl text-[color:var(--text)]">Today&apos;s Plan</h2>
              <span className="text-xs text-[color:var(--text-subtle)]">
                4 tasks
              </span>
            </div>
            <div className="mt-5 space-y-3">
              {tasks.map((task) => (
                <div
                  className="flex items-center justify-between rounded-[16px] border border-[color:var(--border)] bg-[color:var(--surface-inset)] px-4 py-3"
                  key={task.title}
                >
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--primary)]" />
                    <span className="text-sm text-[color:var(--text)]">
                      {task.title}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-[color:var(--text-muted)]">
                    {task.time}
                  </span>
                </div>
              ))}
              <button
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--primary)]"
                type="button"
              >
                <Plus className="h-4 w-4" />
                Add Task
              </button>
            </div>
          </article>

          <article className="jx-subcard p-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl text-[color:var(--text)]">
                  Study Overview
                </h2>
                <p className="text-xs text-[color:var(--text-subtle)]">
                  This week
                </p>
              </div>
              <span className="rounded-full bg-[color:var(--primary)] px-3 py-1 text-xs font-semibold text-white">
                6.3 hrs
              </span>
            </div>
            <div className="mt-8 flex h-[230px] items-end gap-4">
              {chartHeights.map((height, index) => (
                <div className="flex flex-1 flex-col items-center gap-3" key={height}>
                  <div className="flex h-[180px] w-full items-end rounded-[18px] bg-[color:var(--surface-inset)] px-2 pb-2">
                    <div
                      className="w-full rounded-full bg-gradient-to-t from-[color:var(--primary)] to-violet-300/80"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                  <span className="text-xs text-[color:var(--text-subtle)]">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
