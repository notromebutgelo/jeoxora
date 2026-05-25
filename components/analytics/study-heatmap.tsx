type StudyHeatmapProps = {
  rows: Array<{ label: string; values: number[] }>;
  tickLabels: Array<{ column: number; label: string }>;
};

const heatmapTokens = [
  {
    background: "rgba(24,31,49,0.74)",
    border: "rgba(148,163,184,0.08)",
    shadow: "inset 0 1px 0 rgba(255,255,255,0.02)",
  },
  {
    background: "linear-gradient(145deg, rgba(55,65,81,0.56), rgba(45,55,72,0.46))",
    border: "rgba(124,58,237,0.08)",
    shadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
  },
  {
    background: "linear-gradient(145deg, rgba(76,29,149,0.92), rgba(91,33,182,0.74))",
    border: "rgba(124,58,237,0.14)",
    shadow: "0 8px 16px rgba(76,29,149,0.14), inset 0 1px 0 rgba(255,255,255,0.04)",
  },
  {
    background: "linear-gradient(145deg, rgba(91,33,182,0.96), rgba(124,58,237,0.84))",
    border: "rgba(139,92,246,0.2)",
    shadow: "0 10px 18px rgba(91,33,182,0.18), inset 0 1px 0 rgba(255,255,255,0.05)",
  },
  {
    background: "linear-gradient(145deg, rgba(124,58,237,0.96), rgba(196,181,253,0.84))",
    border: "rgba(196,181,253,0.22)",
    shadow: "0 12px 22px rgba(124,58,237,0.2), inset 0 1px 0 rgba(255,255,255,0.07)",
  },
] as const;

function getCellToken(value: number) {
  return heatmapTokens[value] ?? heatmapTokens[0];
}

export function StudyHeatmap({ rows, tickLabels }: StudyHeatmapProps) {
  const totalColumns = Math.max(...rows.map((row) => row.values.length), 0);
  const labelColumns = Math.max(...tickLabels.map((tick) => tick.column), totalColumns);

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[690px]">
        <div
          className="grid items-center gap-x-[7px] gap-y-3 text-[11px] text-[color:var(--text-subtle)]"
          style={{
            gridTemplateColumns: `52px repeat(${labelColumns}, 18px)`,
          }}
        >
          <span />
          {tickLabels.map((tick) => (
            <span
              className="whitespace-nowrap text-center"
              key={`${tick.label}-${tick.column}`}
              style={{
                gridColumnStart: tick.column + 1,
              }}
            >
              {tick.label}
            </span>
          ))}
        </div>

        <div className="mt-4 space-y-[6px]">
          {rows.map((row) => (
            <div
              className="grid items-center gap-x-[7px] gap-y-[6px]"
              key={row.label}
              style={{
                gridTemplateColumns: `52px repeat(${totalColumns}, 18px)`,
              }}
            >
              <span className="text-[12px] text-[color:var(--text-muted)]">
                {row.label}
              </span>
              {row.values.map((value, index) => (
                <span
                  className="h-[18px] w-[18px] rounded-[4px] border transition-transform duration-200 hover:-translate-y-[1px]"
                  key={`${row.label}-${index}`}
                  style={{
                    background: getCellToken(value).background,
                    borderColor: getCellToken(value).border,
                    boxShadow: getCellToken(value).shadow,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-3 text-[11px] text-[color:var(--text-subtle)]">
          <span>Less</span>
          <div className="flex items-center gap-[7px]">
            {heatmapTokens.map((token, index) => (
              <span
                className="h-[12px] w-[12px] rounded-[3px] border"
                key={`${token.border}-${index}`}
                style={{
                  background: token.background,
                  borderColor: token.border,
                  boxShadow: token.shadow,
                }}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
