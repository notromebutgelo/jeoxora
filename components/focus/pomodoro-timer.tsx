type PomodoroTimerProps = {
  formattedTime: string;
  mode: string;
};

export function PomodoroTimer({
  formattedTime,
  mode,
}: PomodoroTimerProps) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-8 text-center shadow-xl">
      <p className="text-xs uppercase tracking-[0.3em] text-violet-200/70">
        {mode}
      </p>
      <p className="mt-4 text-6xl text-white">{formattedTime}</p>
    </div>
  );
}
