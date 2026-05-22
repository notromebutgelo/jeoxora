type StudyHoursChartProps = {
  values: Array<{ day: string; hours: number }>;
};

export function StudyHoursChart({ values }: StudyHoursChartProps) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-6">
      <h3 className="text-2xl text-white">Study hours</h3>
      <div className="mt-6 grid gap-3">
        {values.map((value) => (
          <div className="grid grid-cols-[72px_1fr] items-center gap-3" key={value.day}>
            <span className="text-sm text-slate-400">{value.day}</span>
            <div className="h-3 rounded-full bg-white/[0.05]">
              <div
                className="h-3 rounded-full bg-violet-500"
                style={{ width: `${Math.min(value.hours * 12, 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
