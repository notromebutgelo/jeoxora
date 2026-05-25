import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type MasteryProgressBarsProps = {
  items: Array<{
    icon: LucideIcon;
    label: string;
    progress: number;
    status: string;
    tone: "amber" | "red" | "violet";
  }>;
};

function getSegmentTone(tone: MasteryProgressBarsProps["items"][number]["tone"]) {
  if (tone === "red") {
    return "bg-gradient-to-r from-violet-400 to-fuchsia-500";
  }

  if (tone === "amber") {
    return "bg-gradient-to-r from-amber-400 to-orange-400";
  }

  return "bg-gradient-to-r from-violet-400 to-violet-500";
}

function getStatusTone(tone: MasteryProgressBarsProps["items"][number]["tone"]) {
  if (tone === "red") {
    return "text-red-400";
  }

  if (tone === "amber") {
    return "text-amber-400";
  }

  return "text-emerald-400";
}

function getBadgeTone(tone: MasteryProgressBarsProps["items"][number]["tone"]) {
  if (tone === "red") {
    return "bg-violet-500/12 text-violet-300";
  }

  if (tone === "amber") {
    return "bg-amber-500/12 text-amber-300";
  }

  return "bg-violet-500/12 text-violet-300";
}

export function MasteryProgressBars({ items }: MasteryProgressBarsProps) {
  return (
    <div className="space-y-5">
      {items.map((item) => {
        const filledSegments = Math.max(1, Math.round(item.progress / 12.5));
        const Icon = item.icon;

        return (
          <div className="flex items-center gap-4" key={item.label}>
            <span
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-[14px]",
                getBadgeTone(item.tone),
              )}
            >
              <Icon className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-[color:var(--text)]">
                  {item.label}
                </span>
                <span className="text-sm font-semibold text-[color:var(--text)]">
                  {item.progress}%
                </span>
              </div>
              <div className="mt-3 flex items-center gap-4">
                <div className="grid flex-1 grid-cols-8 gap-1.5">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <span
                      className={cn(
                        "h-[8px] rounded-full bg-[color:var(--surface-inset)]",
                        index < filledSegments && getSegmentTone(item.tone),
                      )}
                      key={`${item.label}-${index}`}
                    />
                  ))}
                </div>
                <span
                  className={cn(
                    "w-14 text-right text-xs font-medium",
                    getStatusTone(item.tone),
                  )}
                >
                  {item.status}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
