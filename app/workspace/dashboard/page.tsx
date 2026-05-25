import { CalendarCheck2 } from "lucide-react";
import { StudyHoursChart } from "@/components/analytics/study-hours-chart";
import {
  StudyStatsCard,
  type StudyStatsCardData,
} from "@/components/dashboard/study-stats-card";
import { EmptyState } from "@/components/layouts/empty-state";

const stats: StudyStatsCardData[] = [
  {
    icon: "book-open-text",
    label: "Study Hours",
    sparkline: [{ value: 3 }, { value: 4 }, { value: 5 }, { value: 4 }, { value: 6 }, { value: 7 }],
    trend: "+12% vs last week",
    value: "18h 45m",
  },
  {
    icon: "timer-reset",
    label: "Focus Sessions",
    sparkline: [{ value: 2 }, { value: 3 }, { value: 3 }, { value: 5 }, { value: 4 }, { value: 6 }],
    trend: "+8% vs last week",
    value: "24",
  },
  {
    icon: "graduation-cap",
    label: "Flashcards Reviewed",
    sparkline: [{ value: 4 }, { value: 5 }, { value: 6 }, { value: 8 }, { value: 7 }, { value: 9 }],
    trend: "+20% vs last week",
    value: "532",
  },
  {
    icon: "flame",
    label: "Current Streak",
    sparkline: [{ value: 2 }, { value: 3 }, { value: 3 }, { value: 4 }, { value: 5 }, { value: 6 }],
    trend: "Keep it up!",
    value: "12 days",
  },
];

const studyTrend = [
  { day: "Mon", hours: 1.5 },
  { day: "Tue", hours: 2.3 },
  { day: "Wed", hours: 4.2 },
  { day: "Thu", hours: 3.3 },
  { day: "Fri", hours: 2.8 },
  { day: "Sat", hours: 6.3 },
  { day: "Sun", hours: 5.1 },
];

const tasks = [
  { time: "9:00 AM", title: "Con Law Reading" },
  { time: "11:00 AM", title: "Criminal Law Flashcards" },
  { time: "2:00 PM", title: "Evidence Review" },
  { time: "4:00 PM", title: "Property Law Cases" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <section className="px-1 py-2">
        <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--text-subtle)]">
          Dashboard
        </p>
        <h1 className="mt-3 text-[38px] leading-tight text-[color:var(--text)]">
          Good morning, Lex.
        </h1>
        <p className="mt-2 text-sm text-[color:var(--text-muted)]">
          Ready to continue your legal mastery journey?
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.length > 0 ? (
          stats.map((stat) => (
            <StudyStatsCard
              icon={stat.icon}
              key={stat.label}
              label={stat.label}
              sparkline={stat.sparkline}
              trend={stat.trend}
              value={stat.value}
            />
          ))
        ) : (
          <EmptyState
            actionLabel="Start studying"
            className="sm:col-span-2 xl:col-span-4"
            description="Your study totals will appear here once sessions, reviewers, and flashcards are connected."
            icon={CalendarCheck2}
            title="No study activity yet"
          />
        )}
      </section>

      <section className="grid gap-4 xl:grid-cols-[0.92fr_1.08fr]">
        <article className="jx-card p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-[30px] leading-tight text-[color:var(--text)]">
              Today&apos;s Plan
            </h2>
            <span className="text-xs uppercase tracking-[0.16em] text-[color:var(--text-subtle)]">
              {tasks.length} tasks
            </span>
          </div>
          <div className="mt-6 space-y-3">
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <div
                  className="flex items-center justify-between gap-4 rounded-[16px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] px-4 py-4"
                  key={task.title}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--primary)]" />
                    <span className="truncate text-sm text-[color:var(--text)]">
                      {task.title}
                    </span>
                  </div>
                  <span className="shrink-0 text-xs font-medium text-[color:var(--text-muted)]">
                    {task.time}
                  </span>
                </div>
              ))
            ) : (
              <EmptyState
                actionLabel="Add first task"
                description="Plan readings, reviews, and flashcard drills before your next study block."
                icon={CalendarCheck2}
                title="No plan for today"
              />
            )}
            <button
              className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--primary)]"
              type="button"
            >
              + Add Task
            </button>
          </div>
        </article>

        <article className="jx-card p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-[30px] leading-tight text-[color:var(--text)]">
                Productivity Trend
              </h2>
              <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                This week
              </p>
            </div>
            <span className="rounded-full bg-[color:var(--primary)] px-3 py-1 text-xs font-semibold text-white shadow-[0_14px_32px_rgba(109,40,217,0.24)]">
              6.3 hrs
            </span>
          </div>
          <StudyHoursChart className="mt-6 h-[280px]" values={studyTrend} />
        </article>
      </section>
    </div>
  );
}
