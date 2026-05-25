import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Coffee,
  Play,
  Repeat2,
  RotateCcw,
  Scale,
  SlidersHorizontal,
} from "lucide-react";
import { FocusTimeline } from "@/components/focus/focus-timeline";
import { PomodoroTimer } from "@/components/focus/pomodoro-timer";

const sessionRows = [
  { complete: true, duration: "25 min", label: "Deep Work", time: "8:00 AM", tone: "violet" },
  { complete: true, duration: "25 min", label: "Deep Work", time: "9:05 AM", tone: "violet" },
  { complete: true, duration: "5 min", label: "Short Break", time: "9:30 AM", tone: "gold" },
  { complete: false, duration: "25 min", label: "Deep Work", time: "9:35 AM", tone: "violet" },
];

const timelineSessions = [
  { duration: 2, label: "Morning", startColumn: 0 as const },
  { duration: 1, label: "Review", startColumn: 3 as const, tone: "gold" as const },
  { duration: 2, label: "Evening", startColumn: 5 as const },
];

const setupRows = [
  { icon: BriefcaseBusiness, label: "Session Type", value: "Deep Work" },
  { icon: Clock3, label: "Focus Time", value: "25 min" },
  { icon: Coffee, label: "Short Break", value: "5 min" },
  { icon: Coffee, label: "Long Break", value: "15 min" },
  { icon: Repeat2, label: "Cycles", value: "4" },
] as const;

export default function FocusPage() {
  return (
    <div className="space-y-4">
      <section className="flex flex-wrap items-end justify-between gap-4 px-1 py-2">
        <div>
          <h1 className="text-[38px] leading-tight text-[color:var(--text)]">
            Focus Mode
          </h1>
          <div className="mt-4 flex flex-wrap gap-6">
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
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[0.82fr_1.1fr_0.88fr]">
        <article className="jx-card p-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-[28px] leading-tight text-[color:var(--text)]">
              Session Setup
            </h2>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] text-[color:var(--text-muted)]"
              type="button"
            >
              <SlidersHorizontal className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {setupRows.map(({ icon: Icon, label, value }) => (
              <div
                className="rounded-[18px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] px-4 py-3"
                key={label}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[rgba(109,40,217,0.12)] text-[color:var(--primary)]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[color:var(--text-subtle)]">
                      {label}
                    </p>
                    <div className="mt-1 flex items-center justify-between gap-3">
                      <span className="text-[15px] text-[color:var(--text)]">
                        {value}
                      </span>
                      <ChevronDown className="h-4 w-4 text-[color:var(--text-subtle)]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="jx-card relative overflow-hidden p-6">
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[radial-gradient(circle_at_bottom,rgba(124,58,237,0.18),transparent_62%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.07),transparent_65%)]" />
          <PomodoroTimer formattedTime="25:00" mode="Focus Session" progress={72} />
          <div className="relative -mt-2 flex items-center justify-center gap-4">
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
          <p className="relative mt-5 text-center text-sm italic text-[color:var(--text-muted)]">
            &quot;Discipline today, freedom tomorrow.&quot;
          </p>
          <div className="relative mx-auto mt-4 flex w-full max-w-[210px] items-center justify-center gap-4 text-[color:var(--text-subtle)]">
            <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent,rgba(124,58,237,0.35))]" />
            <Scale className="h-4 w-4" />
            <span className="h-px flex-1 bg-[linear-gradient(90deg,rgba(124,58,237,0.35),transparent)]" />
          </div>
        </article>

        <article className="jx-card p-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-[28px] leading-tight text-[color:var(--text)]">
              Today&apos;s Sessions
            </h2>
            <CalendarDays className="h-5 w-5 text-[color:var(--text-subtle)]" />
          </div>
          <div className="mt-6 space-y-3">
            {sessionRows.map((row) => (
              <div
                className="flex items-center justify-between rounded-[18px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] px-4 py-4"
                key={`${row.label}-${row.time}`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-[12px]"
                    style={{
                      background:
                        row.tone === "gold"
                          ? "rgba(212,163,115,0.12)"
                          : "rgba(109,40,217,0.12)",
                      color: row.tone === "gold" ? "#D4A373" : "var(--primary)",
                    }}
                  >
                    {row.tone === "gold" ? (
                      <Coffee className="h-4 w-4" />
                    ) : (
                      <BriefcaseBusiness className="h-4 w-4" />
                    )}
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-[color:var(--text)]">
                      {row.label}
                    </p>
                    <p className="text-xs text-[color:var(--text-muted)]">
                      {row.duration}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-[color:var(--text-subtle)]">
                    {row.time}
                  </span>
                  <span
                    className="flex h-5 w-5 items-center justify-center rounded-full border"
                    style={{
                      borderColor: row.complete ? "rgba(124,58,237,0.3)" : "var(--border-strong)",
                      background: row.complete ? "rgba(109,40,217,0.95)" : "transparent",
                    }}
                  >
                    {row.complete ? <Check className="h-3 w-3 text-white" /> : null}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button
            className="mt-6 flex h-11 w-full items-center justify-center gap-3 rounded-[16px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] text-[15px] text-[color:var(--text-muted)] transition hover:border-[color:var(--border-strong)] hover:text-[color:var(--text)]"
            type="button"
          >
            View All Sessions
            <ArrowRight className="h-4 w-4" />
          </button>
        </article>
      </section>

      <section className="jx-card p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-[28px] leading-tight text-[color:var(--text)]">
              Weekly Focus Timeline
            </h2>
            <p className="mt-2 text-sm text-[color:var(--text-muted)]">
              Productivity peaks and study blocks from 8 AM to 11 PM
            </p>
          </div>
          <button
            className="flex h-11 shrink-0 items-center gap-3 rounded-[12px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] px-4 text-sm font-medium text-[color:var(--text)]"
            type="button"
          >
            Deep Work
            <ChevronDown className="h-4 w-4 text-[color:var(--text-subtle)]" />
          </button>
        </div>
        <div className="mt-6">
          <FocusTimeline
            hours={["8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM"]}
            sessions={timelineSessions}
          />
        </div>
      </section>
    </div>
  );
}
