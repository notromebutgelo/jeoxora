import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  BookMarked,
  Brain,
  Building2,
  Check,
  ChevronDown,
  EllipsisVertical,
  FileQuestion,
  GraduationCap,
  Keyboard,
  Layers3,
  Quote,
  Scale,
  Shield,
} from "lucide-react";
import { MasteryProgressBars } from "@/components/flashcards/mastery-progress-bars";
import { EmptyState } from "@/components/layouts/empty-state";
import { cn } from "@/lib/utils";

type FlashcardStat = {
  icon: LucideIcon;
  label: string;
  points?: number[];
  progress?: number;
  tone: "negative" | "positive";
  trend: string;
  value: string;
};

const tabs = ["Review", "All Cards", "Decks", "Stats"];

const stats: FlashcardStat[] = [
  {
    icon: BookMarked,
    label: "New Today",
    points: [6, 12, 14, 20, 21, 18, 16, 23, 30],
    tone: "positive",
    trend: "6 new from yesterday",
    value: "24",
  },
  {
    icon: Brain,
    label: "Due Today",
    points: [20, 18, 17, 13, 15, 11, 12, 8, 9],
    tone: "negative",
    trend: "2 pending from yesterday",
    value: "18",
  },
  {
    icon: Layers3,
    label: "Total Cards",
    points: [8, 12, 16, 16, 20, 24, 28],
    tone: "positive",
    trend: "32 this week",
    value: "532",
  },
  {
    icon: GraduationCap,
    label: "Mastery",
    progress: 68,
    tone: "positive",
    trend: "5% this week",
    value: "68%",
  },
];

const grades = [
  { className: "border-red-500/50 text-red-400", label: "Again" },
  { className: "border-amber-500/50 text-amber-400", label: "Hard" },
  { className: "border-emerald-500/50 text-emerald-400", label: "Good" },
  { className: "border-violet-500/50 text-violet-400", label: "Easy" },
];

const masteryRows = [
  {
    icon: Building2,
    label: "Constitutional Law",
    progress: 74,
    status: "Strong",
    tone: "violet" as const,
  },
  {
    icon: Scale,
    label: "Criminal Law",
    progress: 61,
    status: "Average",
    tone: "amber" as const,
  },
  {
    icon: Building2,
    label: "Civil Law",
    progress: 52,
    status: "Average",
    tone: "amber" as const,
  },
  {
    icon: FileQuestion,
    label: "Evidence",
    progress: 83,
    status: "Strong",
    tone: "violet" as const,
  },
  {
    icon: Shield,
    label: "Torts",
    progress: 47,
    status: "Weak",
    tone: "red" as const,
  },
];

const upcomingReviews = [
  {
    due: "in 30 min",
    icon: GraduationCap,
    label: "Constitutional Law",
    total: "8 cards due",
    tone: "violet",
  },
  {
    due: "in 2 hours",
    icon: Scale,
    label: "Criminal Law",
    total: "5 cards due",
    tone: "amber",
  },
  {
    due: "in 5 hours",
    icon: FileQuestion,
    label: "Evidence",
    total: "12 cards due",
    tone: "violet",
  },
];

const streakDays = [
  { active: true, id: "mon", label: "M" },
  { active: true, id: "tue", label: "T" },
  { active: true, id: "wed", label: "W" },
  { active: true, id: "thu", label: "T" },
  { active: true, id: "fri", label: "F" },
  { active: true, id: "sat", label: "S" },
  { active: false, id: "sun", label: "S" },
];

function Sparkline({
  id,
  points,
  tone,
}: {
  id: string;
  points: number[];
  tone: FlashcardStat["tone"];
}) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const path = points
    .map((point, index) => {
      const x = (index / Math.max(points.length - 1, 1)) * 100;
      const y = 30 - ((point - min) / range) * 24;
      return `${index === 0 ? "M" : "L"} ${x},${y}`;
    })
    .join(" ");

  return (
    <svg
      aria-hidden="true"
      className="h-10 w-[108px]"
      viewBox="0 0 100 32"
    >
      <defs>
        <linearGradient id={`spark-${id}`} x1="0" x2="1" y1="0" y2="0">
          <stop
            offset="0%"
            stopColor={tone === "negative" ? "#C084FC" : "#7C3AED"}
          />
          <stop
            offset="100%"
            stopColor={tone === "negative" ? "#7C3AED" : "#A78BFA"}
          />
        </linearGradient>
      </defs>
      <path
        d={path}
        fill="none"
        stroke={`url(#spark-${id})`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.6"
      />
    </svg>
  );
}

function FlashcardStatCard({ stat }: { stat: FlashcardStat }) {
  const Icon = stat.icon;
  const TrendIcon = stat.tone === "negative" ? ArrowDownRight : ArrowUpRight;

  return (
    <article className="relative min-h-[220px] rounded-[16px] border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0)_100%)] p-5 shadow-[var(--shadow-soft)] xl:min-h-[252px]">
      <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[color:var(--primary-soft)] text-[color:var(--primary)]">
        <Icon className="h-5 w-5" />
      </span>

      <div className="absolute right-5 top-5 flex h-[84px] w-[108px] items-start justify-end">
        {stat.points ? (
          <Sparkline
            id={stat.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
            points={stat.points}
            tone={stat.tone}
          />
        ) : (
          <div className="relative flex h-[76px] w-[76px] items-center justify-center">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(var(--primary) 0 ${stat.progress}%, color-mix(in srgb, var(--surface-inset) 92%, transparent) ${stat.progress}% 100%)`,
              }}
            />
            <div className="absolute inset-[8px] rounded-full bg-[color:var(--surface-strong)]" />
          </div>
        )}
      </div>

      <div className="mt-7">
        <p className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--text-subtle)]">
          {stat.label}
        </p>
        <p className="mt-4 text-[38px] leading-none text-[color:var(--text)]">
          {stat.value}
        </p>
        <p
          className={cn(
            "mt-4 flex items-center gap-2 text-sm font-medium",
            stat.tone === "negative" ? "text-red-400" : "text-emerald-400",
          )}
        >
          <TrendIcon className="h-4 w-4" />
          {stat.trend}
        </p>
      </div>
    </article>
  );
}

export default function FlashcardsPage() {
  return (
    <div className="space-y-4">
      <section className="flex flex-wrap items-start justify-between gap-4 px-1 py-2">
        <div>
          <h1 className="text-[36px] leading-none text-[color:var(--text)] sm:text-[42px]">
            Flashcards
          </h1>
          <div className="mt-4 flex flex-wrap gap-8">
            {tabs.map((tab, index) => (
              <button
                className={cn(
                  "pb-2 text-sm font-medium text-[color:var(--text-muted)] transition",
                  index === 0 &&
                    "border-b-2 border-[color:var(--primary)] text-[color:var(--primary)]",
                )}
                key={tab}
                type="button"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="flex h-11 items-center gap-2 rounded-[12px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 text-sm font-medium text-[color:var(--text)]"
            type="button"
          >
            <Layers3 className="h-4 w-4 text-[color:var(--primary)]" />
            All Decks
            <ChevronDown className="h-4 w-4 text-[color:var(--text-subtle)]" />
          </button>
          <button
            className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] text-[color:var(--text-muted)]"
            type="button"
          >
            <EllipsisVertical className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.length > 0 ? (
          stats.map((stat) => (
            <FlashcardStatCard key={stat.label} stat={stat} />
          ))
        ) : (
          <EmptyState
            actionLabel="Create flashcard"
            className="sm:col-span-2 xl:col-span-4"
            description="New cards, due cards, and mastery metrics will appear after you build your first deck."
            icon={BookMarked}
            title="No flashcards yet"
          />
        )}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.12fr_0.88fr]">
        <article className="rounded-[16px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] shadow-[var(--shadow-soft)]">
          <div className="border-b border-[color:var(--border)] px-5 py-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--primary)]">
              Review Card
            </p>
          </div>
          <div className="p-5">
            <div className="rounded-[14px] border border-[color:var(--border-strong)] bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.12)_0%,rgba(12,16,32,0)_48%),linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0)_100%)] px-4 py-6 shadow-[0_18px_38px_rgba(109,40,217,0.1)] sm:px-6 sm:py-7">
              <div className="flex items-start justify-between gap-4">
                <Quote className="h-7 w-7 text-[color:var(--primary)]" />
                <div className="flex items-center gap-2 text-[color:var(--text-muted)]">
                  <button
                    className="flex h-9 w-9 items-center justify-center rounded-[12px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)]"
                    type="button"
                  >
                    <Bookmark className="h-4 w-4" />
                  </button>
                  <button
                    className="flex h-9 w-9 items-center justify-center rounded-[12px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)]"
                    type="button"
                  >
                    <EllipsisVertical className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mx-auto mt-6 flex min-h-[220px] max-w-[620px] flex-col items-center justify-center text-center sm:min-h-[250px]">
                <h2 className="max-w-[560px] text-[32px] leading-[1.12] text-[color:var(--text)] sm:text-[44px] xl:text-[54px]">
                  What are the elements of due process?
                </h2>
                <Scale className="mt-8 h-12 w-12 text-amber-400" strokeWidth={1.7} />
                <p className="mt-4 text-base text-[color:var(--text-muted)]">
                  Click to reveal answer
                </p>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
                {grades.map((grade) => (
                  <button
                    className={cn(
                      "min-w-[106px] rounded-[12px] border px-6 py-3 text-sm font-medium transition",
                      grade.className,
                    )}
                    key={grade.label}
                    type="button"
                  >
                    {grade.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[color:var(--border)] pt-4">
              <div className="flex items-center gap-2 text-sm text-[color:var(--text-muted)]">
                <Keyboard className="h-4 w-4" />
                Keyboard Shortcuts
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-[color:var(--text-muted)]">
                  12 / 24
                </span>
                <div className="h-2 w-[160px] rounded-full bg-[color:var(--surface-inset)]">
                  <div className="h-2 w-1/2 rounded-full bg-[color:var(--primary)]" />
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="rounded-[16px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-5 shadow-[var(--shadow-soft)]">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--primary)]">
              Mastery by Subject
            </p>
            <button
              className="flex h-10 items-center gap-2 rounded-[12px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] px-4 text-sm font-medium text-[color:var(--text-muted)]"
              type="button"
            >
              View Analytics
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          {masteryRows.length > 0 ? (
            <div className="mt-6">
              <MasteryProgressBars items={masteryRows} />
            </div>
          ) : (
            <EmptyState
              className="mt-6"
              description="Subject mastery will appear as you review and rate flashcards."
              icon={GraduationCap}
              title="No mastery data yet"
            />
          )}
          <button
            className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-[14px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] text-sm font-medium text-[color:var(--text-muted)]"
            type="button"
          >
            View All Subjects
            <ArrowRight className="h-4 w-4" />
          </button>
        </article>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.12fr_0.88fr]">
        <article className="rounded-[16px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-5 shadow-[var(--shadow-soft)]">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--primary)]">
              Upcoming Reviews
            </p>
            <button
              className="flex h-10 items-center gap-2 rounded-[12px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] px-4 text-sm font-medium text-[color:var(--text-muted)]"
              type="button"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          {upcomingReviews.length > 0 ? (
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {upcomingReviews.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    className="rounded-[16px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] px-4 py-4"
                    key={item.label}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-[12px]",
                          item.tone === "amber"
                            ? "bg-amber-500/12 text-amber-300"
                            : "bg-violet-500/12 text-violet-300",
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-[color:var(--text)]">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm text-[color:var(--text-muted)]">
                          {item.total}
                        </p>
                        <p
                          className={cn(
                            "mt-1 text-sm font-medium",
                            item.tone === "amber"
                              ? "text-amber-400"
                              : "text-violet-400",
                          )}
                        >
                          {item.due}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <EmptyState
              actionLabel="Add review card"
              className="mt-5"
              description="Upcoming reviews will be scheduled once cards have due dates."
              icon={FileQuestion}
              title="No upcoming reviews"
            />
          )}
        </article>

        <article className="relative overflow-hidden rounded-[16px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-5 shadow-[var(--shadow-soft)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] md:block"
          >
            <div
              className="absolute right-[10%] top-1/2 h-[84%] w-[78%] -translate-y-1/2 rounded-full"
              style={{
                border: "1px solid color-mix(in srgb, var(--primary) 26%, transparent)",
                boxShadow:
                  "0 0 0 1px color-mix(in srgb, var(--primary) 12%, transparent) inset, 0 0 56px color-mix(in srgb, var(--primary) 18%, transparent)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 16%, rgba(0,0,0,0.88) 34%, #000 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 16%, rgba(0,0,0,0.88) 34%, #000 100%)",
              }}
            >
              <Image
                alt=""
                className="scale-[1.05] object-cover object-[center_26%] opacity-60 saturate-[0.9] contrast-105"
                fill
                sizes="(min-width: 1280px) 24vw, 40vw"
                src="/bglanding.png"
              />
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 38% 42%, color-mix(in srgb, var(--primary) 14%, transparent) 0%, transparent 28%), linear-gradient(90deg, color-mix(in srgb, var(--surface-strong) 98%, transparent) 0%, color-mix(in srgb, var(--surface-strong) 72%, transparent) 24%, transparent 64%), linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 100%)",
              }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-24"
              style={{
                background:
                  "linear-gradient(to top, color-mix(in srgb, var(--surface-strong) 94%, transparent) 0%, transparent 100%)",
              }}
            />
          </div>
          <div className="relative max-w-none md:max-w-[62%]">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--primary)]">
              Daily Streak
            </p>
            <div className="mt-5 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-[42px] leading-none text-[color:var(--text)]">
                  12 <span className="text-[28px]">days</span>
                </p>
                <p className="mt-3 text-sm text-[color:var(--text-muted)]">
                  Keep it up! You&apos;re on fire.
                </p>
              </div>
              <div className="flex flex-wrap items-end gap-4">
                {streakDays.map((day) => (
                  <div className="flex flex-col items-center gap-3" key={day.id}>
                    <span className="text-xs font-medium text-[color:var(--text-muted)]">
                      {day.label}
                    </span>
                    <span
                      className={cn(
                        "flex h-7 w-7 items-center justify-center rounded-full border",
                        day.active
                          ? "border-[color:var(--primary)] bg-[color:var(--primary)] text-white"
                          : "border-[color:var(--border)] text-[color:var(--text-subtle)]",
                      )}
                    >
                      {day.active ? <Check className="h-3.5 w-3.5" /> : null}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
