import { MoreVertical, Scale } from "lucide-react";

const stats = [
  { label: "New Today", value: "24" },
  { label: "Due Today", value: "18" },
  { label: "Total Cards", value: "532" },
  { label: "Mastery", value: "68%" },
];

const tabs = ["Review", "All Cards", "Decks", "Stats"];
const grades = [
  { color: "text-red-500", label: "Again" },
  { color: "text-amber-500", label: "Hard" },
  { color: "text-emerald-500", label: "Good" },
  { color: "text-sky-500", label: "Easy" },
];

export default function FlashcardsPage() {
  return (
    <section className="jx-card p-5 md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-[34px] leading-tight text-[color:var(--text)]">
            Flashcards
          </h1>
          <div className="mt-4 flex flex-wrap gap-6">
            {tabs.map((tab, index) => (
              <button
                className={index === 0 ? "jx-tab jx-tab-active" : "jx-tab"}
                key={tab}
                type="button"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="jx-input flex h-11 items-center px-4 text-sm font-medium" type="button">
            All Decks
          </button>
          <button
            className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] text-[color:var(--text-muted)]"
            type="button"
          >
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article className="jx-subcard p-4" key={stat.label}>
            <p className="text-xs font-medium text-[color:var(--text-subtle)]">
              {stat.label}
            </p>
            <p className="mt-3 text-[34px] leading-none text-[color:var(--text)]">
              {stat.value}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-4 rounded-[24px] border border-[color:var(--border-strong)] bg-[color:var(--surface-subtle)] px-6 py-8 md:px-8 md:py-10">
        <p className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--text-subtle)]">
          Front
        </p>
        <div className="flex min-h-[290px] flex-col items-center justify-center text-center">
          <h2 className="max-w-[460px] text-[40px] leading-tight text-[color:var(--text)]">
            What are the elements of due process?
          </h2>
          <Scale className="mt-8 h-12 w-12 text-[color:var(--text-subtle)]" />
          <p className="mt-4 text-sm text-[color:var(--text-muted)]">
            Click to reveal answer
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {grades.map((grade) => (
          <button
            className={`rounded-[14px] border border-current/30 px-6 py-3 text-sm font-medium ${grade.color}`}
            key={grade.label}
            type="button"
          >
            {grade.label}
          </button>
        ))}
      </div>
    </section>
  );
}
