type PomodoroTimerProps = {
  formattedTime: string;
  mode: string;
  progress: number;
};

export function PomodoroTimer({
  formattedTime,
  mode,
  progress,
}: PomodoroTimerProps) {
  const clamped = Math.max(0, Math.min(100, progress));
  const center = 180;
  const radius = 118;
  const outerGuideRadius = 132;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - clamped / 100);
  const angle = (clamped / 100) * Math.PI * 2 - Math.PI / 2;
  const dotX = center + radius * Math.cos(angle);
  const dotY = center + radius * Math.sin(angle);

  return (
    <div className="relative mx-auto h-[300px] w-full max-w-[360px] sm:h-[360px] sm:max-w-[420px]">
      <div
        aria-hidden="true"
        className="absolute inset-[52px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.24) 0%, rgba(124,58,237,0.08) 46%, transparent 74%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-[32px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 24%, rgba(255,255,255,0) 64%)",
        }}
      />

      <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 360 360">
        <defs>
          <linearGradient id="focus-progress" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#C4B5FD" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>
          <linearGradient id="focus-guide" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(196,181,253,0.55)" />
            <stop offset="100%" stopColor="rgba(109,40,217,0.12)" />
          </linearGradient>
          <filter id="focus-glow">
            <feGaussianBlur result="blur" stdDeviation="4" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="focus-dot-glow">
            <feGaussianBlur result="blur" stdDeviation="5" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle
          cx={center}
          cy={center}
          fill="none"
          r={outerGuideRadius}
          stroke="url(#focus-guide)"
          strokeWidth="1.2"
        />
        <circle
          cx={center}
          cy={center}
          fill="none"
          r={radius}
          stroke="rgba(109, 40, 217, 0.14)"
          strokeWidth="14"
        />
        <circle
          cx={center}
          cy={center}
          fill="none"
          filter="url(#focus-glow)"
          r={radius}
          stroke="url(#focus-progress)"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          strokeWidth="14"
          transform={`rotate(-90 ${center} ${center})`}
        />
        <circle
          cx={dotX}
          cy={dotY}
          fill="rgba(124,58,237,0.24)"
          filter="url(#focus-dot-glow)"
          r="13"
        />
        <circle
          cx={dotX}
          cy={dotY}
          fill="#8B5CF6"
          r="9.5"
          stroke="rgba(196, 181, 253, 0.18)"
          strokeWidth="1.5"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--text-subtle)]">
          {mode}
        </p>
        <p className="mt-5 text-[56px] leading-none text-[color:var(--text)] sm:text-[76px]">
          {formattedTime}
        </p>
        <p className="mt-3 text-[15px] text-[color:var(--text-muted)]">
          Deep Work
        </p>
      </div>
    </div>
  );
}
