type SubjectDistributionChartProps = {
  values: Array<{ name: string; percentage: number }>;
};

export function SubjectDistributionChart({
  values,
}: SubjectDistributionChartProps) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-6">
      <h3 className="text-2xl text-white">Subject distribution</h3>
      <div className="mt-6 grid gap-4">
        {values.map((value) => (
          <div key={value.name}>
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span>{value.name}</span>
              <span>{value.percentage}%</span>
            </div>
            <div className="mt-2 h-3 rounded-full bg-white/[0.05]">
              <div
                className="h-3 rounded-full bg-amber-300/80"
                style={{ width: `${value.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
