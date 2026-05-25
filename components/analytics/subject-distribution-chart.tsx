"use client";

import {
  FileText,
  Gavel,
  MoreHorizontal,
  Scale,
  ShieldCheck,
  ShieldEllipsis,
  Sparkles,
} from "lucide-react";
import { Cell, Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  type ChartConfig,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";

type SubjectDistributionChartProps = {
  className?: string;
  totalLabel: string;
  totalValue: string;
  values: Array<{ color: string; detail?: string; label: string; value: number }>;
};

const subjectMeta = [
  {
    Icon: Scale,
    arc: "144deg",
    badgeClass: "right-0 top-7 lg:-right-2 lg:top-10",
    barClass: "bg-[#7C3AED]",
    iconClass: "from-[#A78BFA] to-[#6D28D9]",
    label: "Constitutional Law",
    leaderClass: "right-[10px] top-[80px] h-10 w-16 border-r border-t",
  },
  {
    Icon: Gavel,
    arc: "72deg",
    badgeClass: "right-4 bottom-14 lg:right-0 lg:bottom-[74px]",
    barClass: "bg-[#F97316]",
    iconClass: "from-[#FDBA74] to-[#F97316]",
    label: "Civil Law",
    leaderClass: "right-[48px] bottom-[88px] h-8 w-14 border-b border-r",
  },
  {
    Icon: ShieldCheck,
    arc: "64.8deg",
    badgeClass: "left-0 top-[45%] lg:-left-2 lg:top-[46%]",
    barClass: "bg-[#3B82F6]",
    iconClass: "from-[#60A5FA] to-[#2563EB]",
    label: "Criminal Law",
    leaderClass: "left-[42px] top-[52%] h-8 w-14 border-b border-l",
  },
  {
    Icon: FileText,
    arc: "43.2deg",
    badgeClass: "left-4 top-10 lg:left-0 lg:top-14",
    barClass: "bg-[#8B5CF6]",
    iconClass: "from-[#C084FC] to-[#7C3AED]",
    label: "Evidence",
    leaderClass: "left-[58px] top-[96px] h-9 w-16 border-b border-l",
  },
  {
    Icon: MoreHorizontal,
    arc: "36deg",
    badgeClass: "bottom-7 left-10 lg:bottom-8 lg:left-14",
    barClass: "bg-[#64748B]",
    iconClass: "from-[#94A3B8] to-[#475569]",
    label: "Others",
    leaderClass: "bottom-[62px] left-[82px] h-8 w-14 border-b border-l",
  },
] as const;

type DonutTooltipPayload = {
  payload?: {
    color: string;
    detail?: string;
    label: string;
    value: number;
  };
};

type DonutTooltipProps = {
  active?: boolean;
  payload?: DonutTooltipPayload[];
};

function DonutTooltip({ active, payload }: DonutTooltipProps) {
  const item = payload?.[0]?.payload;

  if (!active || !item) {
    return null;
  }

  return (
    <div className="rounded-[14px] border border-[color:var(--border)] bg-[color:var(--surface-strong)]/95 px-3 py-2.5 shadow-[var(--shadow-soft)] backdrop-blur-xl">
      <div className="flex items-center gap-2">
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ background: item.color }}
        />
        <p className="text-xs font-medium text-[color:var(--text)]">
          {item.label}
        </p>
      </div>
      <div className="mt-1 flex items-center gap-3 text-xs text-[color:var(--text-muted)]">
        {item.detail ? <span>{item.detail}</span> : null}
        <span>{item.value}%</span>
      </div>
    </div>
  );
}

export function SubjectDistributionChart({
  className,
  totalLabel,
  totalValue,
  values,
}: SubjectDistributionChartProps) {
  const chartConfig = values.reduce<ChartConfig>((config, value, index) => {
    config[`subject${index}`] = {
      color: value.color,
      label: value.label,
    };

    return config;
  }, {});

  const chartValues = values.map((value, index) => ({
    ...value,
    ...(subjectMeta[index] ?? {}),
    subject: `subject${index}`,
  }));

  return (
    <div className={cn("grid min-w-0 items-center gap-4 md:grid-cols-[minmax(170px,0.82fr)_minmax(250px,1.18fr)]", className)}>
      <div className="relative mx-auto flex w-full max-w-[280px] flex-col items-center md:max-w-none">
        <div className="relative h-[210px] w-full max-w-[260px] md:h-[236px]">
          {chartValues.map((value) => {
            const Icon = value.Icon ?? ShieldEllipsis;

            return (
              <div
                className={cn(
                  "absolute z-30 hidden items-center gap-2 rounded-[12px] border border-[color:var(--border)] bg-[color:var(--surface-strong)]/94 px-2.5 py-1.5 text-xs font-semibold text-[color:var(--text)] shadow-[0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur-xl 2xl:flex",
                  value.badgeClass,
                )}
                key={value.label}
              >
                <Icon className="h-4 w-4" style={{ color: value.color }} />
                {value.value}%
              </div>
            );
          })}

          {chartValues.map((value) => (
            <span
              aria-hidden="true"
              className={cn(
                "absolute z-20 hidden rounded-bl-[12px] border-dashed border-[#64748B]/55 2xl:block",
                value.leaderClass,
              )}
              key={`${value.label}-leader`}
            />
          ))}

          <div className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 md:h-[210px] md:w-[210px]">
            <div
              aria-hidden="true"
              className="absolute inset-[22px] rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(124,58,237,0.3) 0%, rgba(249,115,22,0.13) 42%, transparent 78%)",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-[2px] rounded-full border border-[color:var(--border)]"
              style={{
                background:
                  "radial-gradient(circle at 50% 38%, rgba(255,255,255,0.1), transparent 54%), var(--surface-subtle)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.1), 0 22px 46px rgba(15,23,42,0.15)",
              }}
            />
            <ChartContainer className="relative z-10 h-full w-full" config={chartConfig}>
              <PieChart>
                <ChartTooltip content={<DonutTooltip />} cursor={false} />
                <Pie
                  cornerRadius={9}
                  data={chartValues}
                  dataKey="value"
                  endAngle={-270}
                  innerRadius="61%"
                  nameKey="label"
                  outerRadius="89%"
                  paddingAngle={4}
                  startAngle={90}
                  stroke="color-mix(in srgb, var(--surface-strong) 94%, transparent)"
                  strokeWidth={4}
                >
                  {chartValues.map((value) => (
                    <Cell fill={value.color} key={value.label} />
                  ))}
                </Pie>
              </PieChart>
            </ChartContainer>
            <div className="pointer-events-none absolute inset-[42px] z-20 flex flex-col items-center justify-center rounded-full text-center md:inset-[48px]">
              <p className="text-[22px] font-semibold leading-none text-[color:var(--text)] md:text-[25px]">
                {totalValue}
              </p>
              <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-[color:var(--text-subtle)] md:text-[9px]">
                {totalLabel}
              </p>
              <svg
                aria-hidden="true"
                className="mt-2.5 h-3.5 w-14 text-[color:var(--primary)]"
                fill="none"
                viewBox="0 0 112 32"
              >
                <path
                  d="M2 20C12 20 12 10 22 10C32 10 32 22 42 22C52 22 52 9 62 9C72 9 72 18 82 18C94 18 94 5 110 5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-0 inline-flex max-w-full items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-[color:var(--primary-soft)] px-3 py-1.5 text-[10px] text-[color:var(--text)] shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
          <Sparkles className="h-3 w-3 text-[color:var(--primary)]" />
          <span className="shrink-0 font-semibold">Highest Focus</span>
          <span className="truncate text-[color:var(--text-muted)]">
            Constitutional Law (7h 30m)
          </span>
        </div>
      </div>

      <div className="space-y-2 self-center">
        {chartValues.map((value) => {
          const Icon = value.Icon ?? ShieldEllipsis;

          return (
            <div
              className="flex min-h-[56px] items-center gap-3 rounded-[13px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] px-3 py-2.5 shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
              key={value.label}
            >
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-gradient-to-br text-white shadow-[0_12px_24px_rgba(15,23,42,0.12)]",
                  value.iconClass,
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex min-w-0 items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-[13px] font-semibold text-[color:var(--text)]">
                      {value.label}
                    </p>
                    {value.detail ? (
                      <p className="mt-0.5 text-[11px] text-[color:var(--text-muted)]">
                        {value.detail}
                      </p>
                    ) : null}
                  </div>
                  <span className="shrink-0 rounded-[9px] border border-[color:var(--border)] bg-[color:var(--primary-soft)] px-2 py-0.5 text-[11px] font-semibold text-[color:var(--primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
                    {value.value}%
                  </span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[#E2E8F0]">
                  <div
                    className={cn("h-full rounded-full", value.barClass)}
                    style={{ width: `${value.value * 2.5}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
