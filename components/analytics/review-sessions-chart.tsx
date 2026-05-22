type ReviewSessionsChartProps = {
  values: Array<{ label: string; sessions: number }>;
};

export function ReviewSessionsChart({
  values,
}: ReviewSessionsChartProps) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-6">
      <h3 className="text-2xl text-white">Review sessions</h3>
      <div className="mt-6 grid gap-4">
        {values.map((value) => (
          <div className="flex items-center justify-between" key={value.label}>
            <span className="text-sm text-slate-300">{value.label}</span>
            <span className="text-sm text-white">{value.sessions}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
