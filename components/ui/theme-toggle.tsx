"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/layouts/theme-provider";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
  compact?: boolean;
};

export function ThemeToggle({ className, compact = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  if (compact) {
    return (
      <button
        aria-label="Toggle theme"
        aria-pressed={isDark}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-[14px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] text-[color:var(--primary)] shadow-[var(--shadow-soft)] transition hover:border-[color:var(--border-strong)]",
          className,
        )}
        onClick={toggleTheme}
        type="button"
      >
        {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </button>
    );
  }

  return (
    <div
      className={cn(
        "rounded-[18px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-3 py-3 shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[color:var(--text)]">
            Appearance
          </p>
          <p className="mt-1 text-xs leading-5 text-[color:var(--text-muted)]">
            Switch between light and dark workspace views.
          </p>
        </div>
        <span className="flex h-9 w-9 items-center justify-center rounded-[14px] bg-[color:var(--primary-soft)] text-[color:var(--primary)]">
          {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </span>
      </div>

      <button
        aria-label="Toggle theme"
        aria-pressed={isDark}
        className="mt-3 flex w-full items-center justify-between rounded-[16px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] px-3 py-2.5 text-left transition hover:border-[color:var(--border-strong)]"
        onClick={toggleTheme}
        type="button"
      >
        <span className="flex items-center gap-2 text-xs font-medium text-[color:var(--text-muted)]">
          <Sun className="h-3.5 w-3.5" />
          Light
        </span>
        <span
          className={cn(
            "relative flex h-7 w-14 items-center rounded-full border transition",
            isDark
              ? "border-violet-400/40 bg-violet-500/30"
              : "border-[color:var(--border)] bg-[color:var(--input)]",
          )}
        >
          <span
            className={cn(
              "absolute h-5 w-5 rounded-full bg-[color:var(--primary)] shadow-lg transition-transform",
              isDark ? "translate-x-8" : "translate-x-1",
            )}
          />
        </span>
        <span className="flex items-center gap-2 text-xs font-medium text-[color:var(--text-muted)]">
          <Moon className="h-3.5 w-3.5" />
          Dark
        </span>
      </button>
    </div>
  );
}
