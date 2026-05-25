"use client";

import { Area, AreaChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";

type ReviewSessionsChartProps = {
  className?: string;
  domain?: [number, number];
  tickValues?: number[];
  values: Array<{ accuracy: number; label: string }>;
};

const chartConfig = {
  accuracy: {
    color: "#8B5CF6",
    label: "Retention",
  },
} satisfies ChartConfig;

export function ReviewSessionsChart({
  className,
  domain = [50, 100],
  tickValues,
  values,
}: ReviewSessionsChartProps) {
  return (
    <ChartContainer className={cn("h-[240px] w-full", className)} config={chartConfig}>
      <AreaChart data={values} margin={{ bottom: 6, left: -6, right: 10, top: 8 }}>
        <defs>
          <linearGradient id="retention-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--color-accuracy)" stopOpacity={0.32} />
            <stop offset="100%" stopColor="var(--color-accuracy)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid
          stroke="color-mix(in srgb, var(--border) 72%, transparent)"
          strokeDasharray="4 10"
          vertical={false}
        />
        <XAxis
          axisLine={false}
          dataKey="label"
          tickLine={false}
          tickMargin={10}
        />
        <YAxis
          axisLine={false}
          domain={domain}
          ticks={tickValues}
          tickFormatter={(value) => `${value}%`}
          tickLine={false}
          width={36}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          activeDot={{
            fill: "var(--color-accuracy)",
            r: 5,
            stroke: "color-mix(in srgb, var(--surface-strong) 86%, transparent)",
            strokeWidth: 3,
          }}
          dataKey="accuracy"
          dot={{
            fill: "var(--color-accuracy)",
            r: 3.5,
            stroke: "color-mix(in srgb, var(--surface-strong) 82%, transparent)",
            strokeWidth: 2,
          }}
          fill="url(#retention-fill)"
          fillOpacity={1}
          stroke="var(--color-accuracy)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          type="monotone"
        >
          <LabelList
            className="fill-[color:var(--text-muted)] text-[10px]"
            dataKey="accuracy"
            formatter={(value) => (typeof value === "number" ? `${value}%` : value)}
            offset={10}
            position="top"
          />
        </Area>
      </AreaChart>
    </ChartContainer>
  );
}
