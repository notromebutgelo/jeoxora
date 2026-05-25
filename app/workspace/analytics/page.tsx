import {
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Circle,
  Database,
  LayoutGrid,
  MoreHorizontal,
  PieChart,
  TrendingUp,
} from "lucide-react";
import { ReviewSessionsChart } from "@/components/analytics/review-sessions-chart";
import { StudyHeatmap } from "@/components/analytics/study-heatmap";
import { StudyHoursChart } from "@/components/analytics/study-hours-chart";
import { SubjectDistributionChart } from "@/components/analytics/subject-distribution-chart";
import {
  StudyStatsCard,
  type StudyStatsCardData,
} from "@/components/dashboard/study-stats-card";
import { EmptyState } from "@/components/layouts/empty-state";

const statCards: StudyStatsCardData[] = [
  {
    icon: "clock-3",
    label: "Total Study Time",
    sparkline: [{ value: 2 }, { value: 3 }, { value: 3 }, { value: 5 }, { value: 4 }, { value: 6 }],
    trend: "+12% vs last week",
    value: "18h 45m",
  },
  {
    icon: "bar-chart-3",
    label: "Sessions",
    sparkline: [{ value: 2 }, { value: 3 }, { value: 2 }, { value: 3 }, { value: 3 }, { value: 5 }],
    trend: "+8% vs last week",
    value: "24",
  },
  {
    icon: "crosshair",
    label: "Avg. Focus Score",
    sparkline: [{ value: 68 }, { value: 72 }, { value: 74 }, { value: 80 }, { value: 78 }, { value: 82 }],
    trend: "+15% vs last week",
    value: "82%",
  },
  {
    icon: "layers-3",
    label: "Flashcards Reviewed",
    sparkline: [{ value: 5 }, { value: 5 }, { value: 6 }, { value: 7 }, { value: 8 }, { value: 9 }],
    trend: "+20% vs last week",
    value: "532",
  },
];

const studyTrend = [
  { day: "Mon", hours: 1.2 },
  { day: "Tue", hours: 2.2 },
  { day: "Wed", hours: 1.6 },
  { day: "Thu", hours: 2.5 },
  { day: "Fri", hours: 3.4 },
  { day: "Sat", hours: 3.0 },
  { day: "Sun", hours: 2.0 },
];

const heatmapTicks = [
  { column: 1, label: "12 AM" },
  { column: 5, label: "4 AM" },
  { column: 9, label: "8 AM" },
  { column: 13, label: "12 PM" },
  { column: 17, label: "4 PM" },
  { column: 21, label: "8 PM" },
  { column: 25, label: "12 AM" },
];

const heatmapRows = [
  {
    label: "Mon",
    values: [0, 0, 0, 1, 2, 3, 3, 3, 3, 4, 0, 0, 0, 0, 0, 0, 1, 3, 3, 3, 2, 1, 0, 0],
  },
  {
    label: "Tue",
    values: [0, 0, 0, 1, 2, 3, 4, 4, 4, 3, 2, 0, 0, 0, 0, 0, 1, 3, 4, 4, 3, 1, 0, 0],
  },
  {
    label: "Wed",
    values: [0, 0, 0, 1, 2, 3, 4, 4, 4, 4, 3, 0, 0, 0, 0, 0, 1, 3, 4, 4, 3, 2, 0, 0],
  },
  {
    label: "Thu",
    values: [0, 0, 0, 0, 1, 2, 3, 4, 4, 4, 3, 2, 0, 0, 0, 0, 1, 2, 3, 4, 4, 2, 0, 0],
  },
  {
    label: "Fri",
    values: [0, 0, 0, 0, 1, 2, 2, 3, 4, 4, 4, 2, 0, 0, 0, 0, 1, 2, 3, 4, 4, 3, 0, 0],
  },
  {
    label: "Sat",
    values: [0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 2, 1, 0, 0, 0, 0, 1, 2, 3, 3, 3, 2, 0, 0],
  },
  {
    label: "Sun",
    values: [0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 1, 0, 0],
  },
];

const subjectDistribution = [
  { color: "#7C3AED", detail: "7h 30m", label: "Constitutional Law", value: 40 },
  { color: "#D4A373", detail: "3h 45m", label: "Civil Law", value: 20 },
  { color: "#818CF8", detail: "3h 20m", label: "Criminal Law", value: 18 },
  { color: "#8B5CF6", detail: "2h 15m", label: "Evidence", value: 12 },
  { color: "#94A3B8", detail: "1h 55m", label: "Others", value: 10 },
];

const retentionValues = [
  { accuracy: 38, label: "Week 1" },
  { accuracy: 52, label: "Week 2" },
  { accuracy: 66, label: "Week 3" },
  { accuracy: 84, label: "Week 4" },
  { accuracy: 99, label: "Week 5" },
  { accuracy: 114, label: "Week 6" },
];

const productivityHighlights = [
  { label: "Weekly Total", value: "18h 45m" },
  { label: "Daily Avg.", value: "2h 41m" },
  { label: "Best Day", value: "Friday" },
  { label: "Longest Streak", value: "7 days" },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <section className="flex flex-wrap items-end justify-between gap-4 px-1 py-2">
        <div>
          <h1 className="text-[38px] leading-tight text-[color:var(--text)]">
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
        <button
          className="flex h-11 shrink-0 items-center gap-3 rounded-[12px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] px-4 text-sm font-medium text-[color:var(--text)]"
          type="button"
        >
          <CalendarDays className="h-4 w-4 text-[color:var(--text-subtle)]" />
          This Week
          <ChevronDown className="h-4 w-4 text-[color:var(--text-subtle)]" />
        </button>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {statCards.length > 0 ? (
          statCards.map((card) => (
            <StudyStatsCard
              icon={card.icon}
              key={card.label}
              label={card.label}
              sparkline={card.sparkline}
              trend={card.trend}
              value={card.value}
            />
          ))
        ) : (
          <EmptyState
            className="sm:col-span-2 xl:col-span-4"
            description="Study totals and trend metrics will populate after sessions and reviews are stored."
            icon={Database}
            title="No analytics yet"
          />
        )}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.06fr_0.94fr]">
        <article className="jx-card flex min-h-[358px] flex-col p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex min-w-0 items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[color:var(--primary-soft)] text-[color:var(--primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
                <TrendingUp className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-[28px] leading-tight text-[color:var(--text)]">
                  Productivity Trend
                </h2>
                <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                  Study consistency and productivity over the week.
                </p>
              </div>
            </div>
            <button
              className="flex h-11 shrink-0 items-center gap-3 rounded-[12px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] px-4 text-sm font-medium text-[color:var(--text)]"
              type="button"
            >
              Weekly
              <ChevronDown className="h-4 w-4 text-[color:var(--text-subtle)]" />
            </button>
          </div>
          <StudyHoursChart
            className="mt-5 h-[220px]"
            domain={[0, 4]}
            tickValues={[0, 1, 2, 3, 4]}
            values={studyTrend}
          />
          <div className="mt-auto grid grid-cols-2 gap-4 border-t border-[color:var(--border)] pt-4 md:grid-cols-4">
            {productivityHighlights.map((item) => (
              <div key={item.label}>
                <p className="text-[11px] text-[color:var(--text-subtle)]">
                  {item.label}
                </p>
                <p className="mt-1 text-[18px] font-medium text-[color:var(--text)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="jx-card flex min-h-[358px] flex-col p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex min-w-0 items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[color:var(--primary-soft)] text-[color:var(--primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
                <PieChart className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-[28px] leading-tight text-[color:var(--text)]">
                  Subject Distribution
                </h2>
                <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                  Study-hour allocation across core legal subjects.
                </p>
              </div>
            </div>
            <button
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] text-[color:var(--text-subtle)]"
              type="button"
            >
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
          {subjectDistribution.length > 0 ? (
            <SubjectDistributionChart
              className="mt-6"
              totalLabel="Total Focus"
              totalValue="18h 45m"
              values={subjectDistribution}
            />
          ) : (
            <EmptyState
              className="mt-6"
              description="Subject distribution appears once study sessions are linked to subjects."
              icon={PieChart}
              title="No subject distribution"
            />
          )}
          <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-[color:var(--border)] pt-4 text-xs text-[color:var(--text-muted)]">
            <span className="flex items-center gap-2">
              <Circle className="h-2.5 w-2.5 fill-[color:var(--success)] text-[color:var(--success)]" />
              5 Subjects
            </span>
            <span className="flex items-center gap-2">
              <Circle className="h-2.5 w-2.5 fill-[color:var(--text-subtle)] text-[color:var(--text-subtle)]" />
              Updated just now
            </span>
          </div>
        </article>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.06fr_0.94fr]">
        <article className="jx-card min-h-[260px] p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex min-w-0 items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[color:var(--primary-soft)] text-[color:var(--primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
                <LayoutGrid className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-[28px] leading-tight text-[color:var(--text)]">
                  Study Heatmap
                </h2>
                <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                  Daily study activity intensity.
                </p>
              </div>
            </div>
            <button
              className="flex h-11 shrink-0 items-center gap-2 rounded-[12px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] px-4 text-sm font-medium text-[color:var(--text)]"
              type="button"
            >
              View Full
              <ChevronRight className="h-4 w-4 text-[color:var(--text-subtle)]" />
            </button>
          </div>
          {heatmapRows.length > 0 ? (
            <div className="mt-6">
              <StudyHeatmap rows={heatmapRows} tickLabels={heatmapTicks} />
            </div>
          ) : (
            <EmptyState
              className="mt-6"
              description="Daily activity intensity will appear after focus sessions are tracked."
              icon={LayoutGrid}
              title="No heatmap data"
            />
          )}
        </article>

        <article className="jx-card min-h-[260px] p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex min-w-0 items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[color:var(--primary-soft)] text-[color:var(--primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
                <TrendingUp className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-[28px] leading-tight text-[color:var(--text)]">
                  Retention Curve
                </h2>
                <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                  Recall quality across recent review cycles.
                </p>
              </div>
            </div>
            <button
              className="flex h-11 shrink-0 items-center gap-3 rounded-[12px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] px-4 text-sm font-medium text-[color:var(--text)]"
              type="button"
            >
              This Week
              <ChevronDown className="h-4 w-4 text-[color:var(--text-subtle)]" />
            </button>
          </div>
          <ReviewSessionsChart
            className="mt-6 h-[180px]"
            domain={[0, 120]}
            tickValues={[0, 25, 50, 75, 100]}
            values={retentionValues}
          />
        </article>
      </section>
    </div>
  );
}
