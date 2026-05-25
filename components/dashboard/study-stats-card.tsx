"use client";

import {
  BarChart3,
  BookMarked,
  BookOpenCheck,
  BookOpenText,
  Brain,
  BrainCircuit,
  Clock3,
  Crosshair,
  Flame,
  GraduationCap,
  Layers3,
  TimerReset,
  TrendingUp,
} from "lucide-react";
import { Area, AreaChart } from "recharts";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { cn } from "@/lib/utils";

export type StudyStatIconName =
  | "bar-chart-3"
  | "book-marked"
  | "book-open-check"
  | "book-open-text"
  | "brain"
  | "brain-circuit"
  | "clock-3"
  | "crosshair"
  | "flame"
  | "graduation-cap"
  | "layers-3"
  | "timer-reset";

type StudyStatsCardProps = {
  icon: StudyStatIconName;
  label: string;
  sparkline: Array<{ value: number }>;
  trend: string;
  value: string;
};

export type StudyStatsCardData = StudyStatsCardProps;

const chartConfig = {
  value: {
    color: "#6D28D9",
    label: "Value",
  },
} satisfies ChartConfig;

const iconMap = {
  "bar-chart-3": BarChart3,
  "book-marked": BookMarked,
  "book-open-check": BookOpenCheck,
  "book-open-text": BookOpenText,
  brain: Brain,
  "brain-circuit": BrainCircuit,
  "clock-3": Clock3,
  crosshair: Crosshair,
  flame: Flame,
  "graduation-cap": GraduationCap,
  "layers-3": Layers3,
  "timer-reset": TimerReset,
} satisfies Record<StudyStatIconName, typeof BookMarked>;

export function StudyStatsCard({
  icon,
  label,
  sparkline,
  trend,
  value,
}: StudyStatsCardProps) {
  const chartId = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const Icon = iconMap[icon];

  return (
    <article className="jx-card relative flex min-h-[216px] flex-col overflow-hidden rounded-[12px] p-5">
      <div
        aria-hidden="true"
        className="absolute inset-x-6 bottom-0 h-16 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--primary) 20%, transparent) 0%, transparent 72%)",
        }}
      />
      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-5">
          <span className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[color:var(--primary-soft)] text-[color:var(--primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
            <Icon className="h-[18px] w-[18px]" />
          </span>
          <div className="mt-1 h-12 w-[112px] shrink-0">
            <ChartContainer className="h-full w-full" config={chartConfig}>
              <AreaChart data={sparkline} margin={{ bottom: 0, left: 0, right: 0, top: 0 }}>
                <defs>
                  <linearGradient id={`${chartId}-spark-fill`} x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-value)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="var(--color-value)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="value"
                  fill={`url(#${chartId}-spark-fill)`}
                  fillOpacity={1}
                  stroke="var(--color-value)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  type="monotone"
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </div>

        <p className="mt-6 flex min-h-10 max-w-[13rem] items-start text-xs font-medium uppercase leading-5 tracking-[0.16em] text-[color:var(--text-subtle)]">
          {label}
        </p>
        <p className="mt-2 min-h-10 whitespace-nowrap text-[36px] leading-none text-[color:var(--text)]">
          {value}
        </p>
      </div>
      <p className="relative mt-4 flex items-center gap-2 text-xs text-[color:var(--success)]">
        <TrendingUp className="h-3.5 w-3.5" />
        <span className={cn(label === "Current Streak" && "text-[color:var(--warning)]")}>
          {trend}
        </span>
      </p>
    </article>
  );
}
