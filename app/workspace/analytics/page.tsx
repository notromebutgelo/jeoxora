const statCards = [
  { label: "Total Study Time", trend: "+12% vs last week", value: "18h 45m" },
  { label: "Sessions", trend: "+8% vs last week", value: "24" },
  { label: "Avg. Focus Score", trend: "+15% vs last week", value: "82%" },
  { label: "Flashcards Reviewed", trend: "+20% vs last week", value: "532" },
];

const heatmapRows = ["12 AM", "6 AM", "12 PM", "6 PM", "12 AM"];
const subjectDistribution = [
  { color: "#7C3AED", label: "Con Law", value: "40%" },
  { color: "#8B5CF6", label: "Crim Law", value: "26%" },
  { color: "#A855F7", label: "Evidence", value: "18%" },
  { color: "#F59E0B", label: "Civ Law", value: "10%" },
  { color: "#D4A373", label: "Others", value: "4%" },
];

export default function AnalyticsPage() {
  return (
    <section className="jx-card p-5 md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-[34px] leading-tight text-[color:var(--text)]">
            Analytics
          </h1>
          <div className="mt-4 flex flex-wrap gap-6">
            {["Overview", "Study", "Flashcards", "Focus", "Retention"].map(
              (tab, index) => (
                <button
                  className={index === 0 ? "jx-tab jx-tab-active" : "jx-tab"}
                  key={tab}
                  type="button"
                >
                  {tab}
                </button>
              ),
            )}
          </div>
        </div>
        <button className="jx-input flex h-11 items-center px-4 text-sm font-medium" type="button">
          This Week
        </button>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card) => (
          <article className="jx-subcard p-4" key={card.label}>
            <p className="text-xs font-medium text-[color:var(--text-subtle)]">
              {card.label}
            </p>
            <p className="mt-3 text-[34px] leading-none text-[color:var(--text)]">
              {card.value}
            </p>
            <p className="mt-3 text-xs text-[color:var(--success)]">
              {card.trend}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-4 grid gap-3 xl:grid-cols-[1.2fr_0.85fr]">
        <article className="jx-subcard p-5">
          <h2 className="text-xl text-[color:var(--text)]">Study Heatmap</h2>
          <div className="mt-5 overflow-x-auto">
            <div className="min-w-[520px]">
              <div className="grid grid-cols-[50px_repeat(7,1fr)] gap-2 text-[11px] text-[color:var(--text-subtle)]">
                <span />
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <span className="text-center" key={day}>
                    {day}
                  </span>
                ))}
              </div>
              <div className="mt-3 space-y-2">
                {heatmapRows.map((row, rowIndex) => (
                  <div
                    className="grid grid-cols-[50px_repeat(7,1fr)] gap-2"
                    key={row}
                  >
                    <span className="text-[11px] text-[color:var(--text-subtle)]">
                      {row}
                    </span>
                    {Array.from({ length: 7 }).map((_, columnIndex) => (
                      <span
                        className="h-8 rounded-[10px]"
                        key={`${row}-${columnIndex}`}
                        style={{
                          background:
                            rowIndex === 0
                              ? "color-mix(in srgb, var(--primary) 18%, var(--surface-inset))"
                              : `color-mix(in srgb, var(--primary) ${18 + (rowIndex + columnIndex) * 6}%, var(--surface-inset))`,
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        <article className="jx-subcard p-5">
          <h2 className="text-xl text-[color:var(--text)]">
            Subject Distribution
          </h2>
          <div className="mt-6 flex items-center justify-center">
            <div className="relative flex h-[220px] w-[220px] items-center justify-center rounded-full bg-[conic-gradient(#7c3aed_0_40%,#8b5cf6_40%_66%,#a855f7_66%_84%,#f59e0b_84%_94%,#d4a373_94%_100%)]">
              <div className="flex h-[132px] w-[132px] flex-col items-center justify-center rounded-full bg-[color:var(--surface-strong)]">
                <p className="text-[28px] text-[color:var(--text)]">18h 45m</p>
                <p className="text-xs text-[color:var(--text-muted)]">Total</p>
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            {subjectDistribution.map((item) => (
              <div className="flex items-center justify-between" key={item.label}>
                <div className="flex items-center gap-3">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-[color:var(--text-muted)]">
                    {item.label}
                  </span>
                </div>
                <span className="text-sm font-medium text-[color:var(--text)]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
