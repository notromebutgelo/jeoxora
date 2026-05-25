import { cn } from "@/lib/utils";

type SubjectDistributionChartProps = {
  className?: string;
  totalLabel: string;
  totalValue: string;
  values: Array<{ color: string; detail?: string; label: string; value: number }>;
};

const GAP_PERCENT = 1.3;

function buildConicGradient(values: SubjectDistributionChartProps["values"]) {
  let cursor = 0;

  const stops = values.flatMap((item) => {
    const start = cursor;
    const end = cursor + item.value;
    const solidEnd = Math.max(start, end - GAP_PERCENT);

    cursor = end;

    return [
      `${item.color} ${start}% ${solidEnd}%`,
      `rgba(17, 24, 39, 0.58) ${solidEnd}% ${end}%`,
    ];
  });

  return `conic-gradient(from 218deg, ${stops.join(", ")})`;
}

export function SubjectDistributionChart({
  className,
  totalLabel,
  totalValue,
  values,
}: SubjectDistributionChartProps) {
  const donutBackground = buildConicGradient(values);

  return (
    <div className={cn("grid min-w-0 gap-6 lg:grid-cols-[240px_1fr] 2xl:grid-cols-[260px_1fr]", className)}>
      <div className="relative mx-auto h-[220px] w-[220px] sm:h-[240px] sm:w-[240px] 2xl:h-[260px] 2xl:w-[260px]">
        <div
          aria-hidden="true"
          className="absolute inset-[26px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.28) 0%, rgba(124,58,237,0.08) 42%, transparent 76%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-[14px] rounded-full border border-[color:var(--border)]"
          style={{
            background:
              "radial-gradient(circle at 50% 38%, rgba(255,255,255,0.05), transparent 52%), var(--surface-subtle)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.04), 0 22px 44px rgba(10,15,35,0.14)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-[28px] rounded-full"
          style={{
            background: donutBackground,
            boxShadow:
              "inset 0 0 0 1px rgba(255,255,255,0.04), 0 18px 40px rgba(109,40,217,0.14)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-[64px] rounded-full border border-[color:var(--border)] sm:inset-[70px] 2xl:inset-[74px]"
          style={{
            background:
              "radial-gradient(circle at 50% 28%, rgba(255,255,255,0.08), transparent 42%), color-mix(in srgb, var(--surface) 88%, transparent)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.05), 0 14px 34px rgba(6,8,20,0.12)",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-[28px] leading-none text-[color:var(--text)] sm:text-[32px]">
            {totalValue}
          </p>
          <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--text-subtle)]">
            {totalLabel}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {values.map((value) => (
          <div
            className="flex items-center justify-between gap-3 rounded-[14px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            key={value.label}
          >
            <div className="flex min-w-0 items-center gap-3">
              <span
                className="h-3.5 w-3.5 rounded-full"
                style={{
                  background: value.color,
                  boxShadow: `0 0 18px ${value.color}44`,
                }}
              />
              <div className="min-w-0">
                <p className="truncate text-sm text-[color:var(--text)]">{value.label}</p>
                {value.detail ? (
                  <p className="mt-1 text-xs text-[color:var(--text-muted)]">
                    {value.detail}
                  </p>
                ) : null}
              </div>
            </div>
            <span className="shrink-0 rounded-[10px] border border-[color:var(--border)] bg-[rgba(255,255,255,0.03)] px-3 py-1.5 text-sm font-semibold text-[color:var(--text)] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              {value.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
