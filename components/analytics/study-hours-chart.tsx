"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";

type StudyHoursChartProps = {
  className?: string;
  dataKey?: string;
  domain?: [number, number];
  gridLines?: boolean;
  tickValues?: number[];
  values: Array<{ day: string; hours: number }>;
};

const chartConfig = {
  hours: {
    color: "#6D28D9",
    label: "Hours",
  },
} satisfies ChartConfig;

export function StudyHoursChart({
  className,
  dataKey = "hours",
  domain = [0, 7],
  gridLines = true,
  tickValues,
  values,
}: StudyHoursChartProps) {
  return (
    <ChartContainer className={cn("h-[250px] w-full", className)} config={chartConfig}>
      <AreaChart data={values} margin={{ bottom: 6, left: -10, right: 10, top: 10 }}>
        <defs>
          <linearGradient id="study-hours-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--color-hours)" stopOpacity={0.34} />
            <stop offset="55%" stopColor="var(--color-hours)" stopOpacity={0.14} />
            <stop offset="100%" stopColor="var(--color-hours)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid
          stroke="color-mix(in srgb, var(--border) 72%, transparent)"
          strokeDasharray="4 10"
          vertical={false}
        />
        <XAxis
          axisLine={false}
          dataKey="day"
          tickLine={false}
          tickMargin={10}
        />
        <YAxis
          axisLine={false}
          domain={domain}
          hide={!gridLines}
          ticks={tickValues}
          tickFormatter={(value) => `${value}h`}
          tickLine={false}
          width={34}
        />
        <ChartTooltip
          content={<ChartTooltipContent />}
          cursor={{
            stroke: "color-mix(in srgb, var(--primary) 42%, transparent)",
            strokeDasharray: "4 6",
            strokeWidth: 1,
          }}
        />
        <Area
          activeDot={{
            fill: "var(--color-hours)",
            r: 5,
            stroke: "color-mix(in srgb, var(--surface-strong) 86%, transparent)",
            strokeWidth: 3,
          }}
          dataKey={dataKey}
          dot={{
            fill: "var(--color-hours)",
            r: 3,
            stroke: "color-mix(in srgb, var(--surface-strong) 82%, transparent)",
            strokeWidth: 2,
          }}
          fill="url(#study-hours-fill)"
          fillOpacity={1}
          stroke="var(--color-hours)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          type="monotone"
        />
      </AreaChart>
    </ChartContainer>
  );
}
