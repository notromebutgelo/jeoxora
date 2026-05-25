"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "@/lib/utils";

export type ChartConfig = Record<
  string,
  {
    color?: string;
    label?: React.ReactNode;
  }
>;

type ChartContextValue = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextValue | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("Chart components must be used inside a ChartContainer.");
  }

  return context;
}

type ChartContainerProps = React.ComponentProps<"div"> & {
  config: ChartConfig;
};

export function ChartContainer({
  children,
  className,
  config,
  style,
  ...props
}: ChartContainerProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const chartStyles = React.useMemo(() => {
    return Object.entries(config).reduce<Record<string, string>>((acc, [key, value]) => {
      if (value.color) {
        acc[`--color-${key}`] = value.color;
      }

      return acc;
    }, {});
  }, [config]);

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        className={cn(
          "h-full min-h-0 w-full min-w-0 text-xs text-[color:var(--text-muted)] [&_.recharts-layer]:outline-none [&_.recharts-sector]:outline-none",
          className,
        )}
        style={{ ...(chartStyles as React.CSSProperties), ...style }}
        {...props}
      >
        {mounted ? (
          <RechartsPrimitive.ResponsiveContainer height="100%" minHeight={0} minWidth={0} width="100%">
            {children}
          </RechartsPrimitive.ResponsiveContainer>
        ) : (
          <div className="h-full min-h-0 w-full min-w-0" />
        )}
      </div>
    </ChartContext.Provider>
  );
}

export const ChartTooltip = RechartsPrimitive.Tooltip;

type ChartTooltipContentProps = React.ComponentProps<"div"> & {
  active?: boolean;
  hideLabel?: boolean;
  label?: React.ReactNode;
  payload?: Array<{
    color?: string;
    dataKey?: string;
    name?: string;
    payload?: Record<string, unknown>;
    value?: number | string;
  }>;
};

export function ChartTooltipContent({
  active,
  className,
  hideLabel = false,
  label,
  payload,
}: ChartTooltipContentProps) {
  const { config } = useChart();

  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "min-w-[148px] rounded-[18px] border border-[color:var(--border)] bg-[color:var(--surface-strong)]/96 px-3 py-2.5 shadow-[var(--shadow-soft)] backdrop-blur-xl",
        className,
      )}
    >
      {!hideLabel ? (
        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[color:var(--text-subtle)]">
          {label}
        </p>
      ) : null}
      <div className="space-y-1.5">
        {payload.map((item, index) => {
          const key = item.dataKey ?? item.name ?? `${index}`;
          const itemConfig = config[key] ?? {};

          return (
            <div className="flex items-center justify-between gap-3" key={key}>
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{
                    background:
                      item.color ?? `var(--color-${item.dataKey ?? item.name ?? ""})`,
                  }}
                />
                <span className="text-xs text-[color:var(--text-muted)]">
                  {itemConfig.label ?? item.name ?? item.dataKey}
                </span>
              </div>
              <span className="text-sm font-semibold text-[color:var(--text)]">
                {item.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
