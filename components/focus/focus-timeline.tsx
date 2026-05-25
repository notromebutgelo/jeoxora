import { BookOpenText, MoonStar, SunMedium } from "lucide-react";
import { cn } from "@/lib/utils";

type FocusTimelineProps = {
  hours: string[];
  sessions: Array<{
    duration: number;
    label: string;
    startColumn: number;
    tone?: "gold" | "violet";
  }>;
};

const rowIcons = {
  Evening: MoonStar,
  Morning: SunMedium,
  Review: BookOpenText,
} as const;

export function FocusTimeline({ hours, sessions }: FocusTimelineProps) {
  return (
    <div className="overflow-x-auto pb-1">
      <div className="min-w-[760px]">
        <div className="grid grid-cols-[112px_repeat(8,minmax(0,1fr))] items-center gap-2 text-[11px] text-[color:var(--text-subtle)]">
          <span />
          {hours.map((hour) => (
            <span className="text-center" key={hour}>
              {hour}
            </span>
          ))}
        </div>
        <div className="mt-4 space-y-3">
          {sessions.map((session) => {
            const Icon = rowIcons[session.label as keyof typeof rowIcons];

            return (
              <div
                className="grid grid-cols-[112px_repeat(8,minmax(0,1fr))] items-center gap-2"
                key={`${session.label}-${session.startColumn}`}
              >
                <div className="flex items-center gap-3 pr-3 text-sm text-[color:var(--text-muted)]">
                  {Icon ? <Icon className="h-4 w-4" /> : null}
                  <span>{session.label}</span>
                </div>
                <div className="col-span-8 grid grid-cols-8 gap-1.5">
                  {Array.from({ length: 8 }).map((_, index) => {
                    const active =
                      index >= session.startColumn &&
                      index < session.startColumn + session.duration;

                    return (
                      <div
                        className="flex h-12 rounded-[10px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] p-[2px] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
                        key={`${session.label}-${index}`}
                      >
                        <span
                          className={cn(
                            "block h-full w-full rounded-[8px] transition",
                            active ? "opacity-100" : "opacity-0",
                          )}
                          style={
                            active
                              ? {
                                  background:
                                    session.tone === "gold"
                                      ? "linear-gradient(135deg, rgba(212,163,115,0.9) 0%, rgba(248,191,36,0.7) 100%)"
                                      : "linear-gradient(135deg, rgba(109,40,217,0.95) 0%, rgba(196,181,253,0.78) 100%)",
                                  boxShadow:
                                    session.tone === "gold"
                                      ? "0 12px 30px rgba(212,163,115,0.18), inset 0 0 0 1px rgba(255,255,255,0.08)"
                                      : "0 12px 30px rgba(109,40,217,0.22), inset 0 0 0 1px rgba(255,255,255,0.08)",
                                }
                              : undefined
                          }
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
