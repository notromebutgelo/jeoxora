"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/layouts/theme-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-5 right-5 z-50 hidden md:block">
      <button
        aria-label="Toggle theme"
        className="jx-floating-toggle"
        onClick={toggleTheme}
        type="button"
      >
        <span className="flex items-center gap-2 text-[11px] font-medium text-[color:var(--muted)]">
          <Sun className="h-3.5 w-3.5" />
          Light
        </span>
        <span
          className={cn(
            "relative flex h-7 w-14 items-center rounded-full border transition",
            theme === "dark"
              ? "border-violet-400/40 bg-violet-500/30"
              : "border-[color:var(--border)] bg-[color:var(--input)]",
          )}
        >
          <span
            className={cn(
              "absolute h-5 w-5 rounded-full bg-[color:var(--primary)] shadow-lg transition-transform",
              theme === "dark" ? "translate-x-8" : "translate-x-1",
            )}
          />
        </span>
        <span className="flex items-center gap-2 text-[11px] font-medium text-[color:var(--muted)]">
          <Moon className="h-3.5 w-3.5" />
          Dark
        </span>
      </button>
    </div>
  );
}
