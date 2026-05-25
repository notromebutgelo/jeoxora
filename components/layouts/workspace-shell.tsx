import type { ReactNode } from "react";
import { Bell, CalendarDays, ChevronDown, Search } from "lucide-react";
import { WorkspaceNav } from "@/components/navigation/workspace-nav";

type WorkspaceShellProps = {
  children: ReactNode;
};

export function WorkspaceShell({ children }: WorkspaceShellProps) {
  return (
    <main className="jx-grid-shell">
      <div className="flex w-full min-w-0 gap-3 xl:gap-4">
        <WorkspaceNav />
        <div className="flex min-h-[calc(100vh-16px)] min-w-0 flex-1 flex-col gap-3">
          <header className="flex h-[68px] min-w-0 items-center justify-between rounded-[16px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 shadow-[var(--shadow-soft)] backdrop-blur-xl md:px-5 xl:px-6">
            <label className="relative hidden w-full max-w-[520px] md:block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--text-subtle)]" />
              <input
                className="jx-input h-11 rounded-[16px] pl-11 pr-20"
                defaultValue=""
                placeholder="Search anything in Jeoxora..."
              />
              <span className="pointer-events-none absolute right-3 top-1/2 flex h-7 min-w-10 -translate-y-1/2 items-center justify-center rounded-[10px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] px-2 text-[11px] font-medium text-[color:var(--text-subtle)]">
                K
              </span>
            </label>
            <div className="ml-auto flex items-center gap-2">
              <button
                className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] text-[color:var(--text-muted)]"
                type="button"
              >
                <CalendarDays className="h-4 w-4" />
              </button>
              <button
                className="relative flex h-11 w-11 items-center justify-center rounded-[14px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] text-[color:var(--text-muted)]"
                type="button"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[color:var(--danger)]" />
              </button>
              <button
                className="flex h-11 items-center gap-2 rounded-[14px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] px-3 text-[color:var(--text-muted)]"
                type="button"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--primary)] text-xs font-semibold text-white">
                  LA
                </span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </header>
          <section className="min-w-0 flex-1 pb-24 xl:pb-0">{children}</section>
        </div>
      </div>
    </main>
  );
}
