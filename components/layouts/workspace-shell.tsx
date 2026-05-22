import type { ReactNode } from "react";
import { Bell, CalendarDays, Search } from "lucide-react";
import { WorkspaceNav } from "@/components/navigation/workspace-nav";

type WorkspaceShellProps = {
  children: ReactNode;
};

export function WorkspaceShell({ children }: WorkspaceShellProps) {
  return (
    <main className="jx-grid-shell">
      <div className="mx-auto flex max-w-[1440px] gap-3">
        <WorkspaceNav />
        <div className="flex min-h-[calc(100vh-24px)] flex-1 flex-col gap-3">
          <header className="flex h-[72px] items-center justify-between rounded-[24px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 shadow-[var(--shadow-soft)] backdrop-blur-xl md:px-6">
            <label className="relative hidden w-full max-w-[280px] md:block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--text-subtle)]" />
              <input
                className="jx-input h-11 pl-11"
                defaultValue=""
                placeholder="Search anything in Jeoxora..."
              />
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
            </div>
          </header>
          <section className="flex-1 pb-24 lg:pb-0">{children}</section>
        </div>
      </div>
    </main>
  );
}
