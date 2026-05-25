"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bot,
  BookMarked,
  BriefcaseBusiness,
  CalendarRange,
  ChartNoAxesCombined,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  LayoutDashboard,
  MessageSquareText,
  Settings,
  TimerReset,
} from "lucide-react";
import { BrandMark } from "@/components/navigation/brand-mark";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { workspaceNavItems } from "@/features/workspace/navigation";
import { cn } from "@/lib/utils";

const navIcons = {
  ai: Bot,
  analytics: ChartNoAxesCombined,
  "bar-review": BriefcaseBusiness,
  dashboard: LayoutDashboard,
  flashcards: GraduationCap,
  focus: TimerReset,
  knowledge: BookMarked,
  planner: CalendarRange,
  recitation: MessageSquareText,
  settings: Settings,
} as const;

const NAV_STORAGE_KEY = "jeoxora-workspace-nav-collapsed";

export function WorkspaceNav() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const mobileItems = workspaceNavItems.filter(
    (item) => item.href && !item.comingSoon,
  );

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(NAV_STORAGE_KEY);
      setCollapsed(stored === "true");
    } catch {}
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(NAV_STORAGE_KEY, String(collapsed));
    } catch {}
  }, [collapsed]);

  return (
    <>
      <aside
        className={cn(
          "hidden shrink-0 transition-[width] duration-300 ease-out lg:block",
          collapsed ? "w-[92px]" : "w-[280px]",
        )}
      >
        <div
          className={cn(
            "sticky top-2 flex h-[calc(100vh-16px)] flex-col border border-[color:var(--border)] bg-[color:var(--sidebar)] shadow-[var(--shadow-card)] backdrop-blur-xl transition-[padding,border-radius] duration-300 ease-out",
            collapsed ? "rounded-[16px] px-3 py-4" : "rounded-[18px] px-4 py-5",
          )}
        >
          <div
            className={cn(
              "flex items-start",
              collapsed ? "justify-center" : "justify-between gap-3",
            )}
          >
            <BrandMark
              className={cn(collapsed && "justify-center")}
              compact
              href="/"
              iconOnly={collapsed}
              showTagline={!collapsed}
            />
            {!collapsed ? (
              <button
                aria-label="Collapse sidebar"
                className="flex h-9 w-9 items-center justify-center rounded-[12px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] text-[color:var(--text-muted)] transition hover:border-[color:var(--border-strong)] hover:text-[color:var(--text)]"
                onClick={() => setCollapsed(true)}
                type="button"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            ) : null}
          </div>

          {collapsed ? (
            <button
              aria-label="Expand sidebar"
              className="mt-4 flex h-9 w-9 self-center items-center justify-center rounded-[12px] border border-[color:var(--border)] bg-[color:var(--surface-subtle)] text-[color:var(--text-muted)] transition hover:border-[color:var(--border-strong)] hover:text-[color:var(--text)]"
              onClick={() => setCollapsed(false)}
              type="button"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : null}

          <nav className={cn("mt-6 flex-1 space-y-1 overflow-y-auto", collapsed ? "pr-0" : "pr-1")}>
            {workspaceNavItems.map((item) => {
              const isActive = item.href ? pathname === item.href : false;
              const Icon = navIcons[item.icon];

              if (!item.href) {
                return (
                  <div
                    className={cn(
                      "jx-sidebar-item cursor-not-allowed opacity-65",
                      collapsed && "justify-center px-0",
                    )}
                    key={item.label}
                    title={item.label}
                  >
                    <Icon className="h-4 w-4" />
                    {!collapsed ? (
                      <>
                        <div className="flex-1">
                          <p>{item.label}</p>
                        </div>
                        <span className="rounded-full bg-[color:var(--surface-inset)] px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-[color:var(--text-subtle)]">
                          Soon
                        </span>
                      </>
                    ) : null}
                  </div>
                );
              }

              return (
                <Link
                  className={cn(
                    "jx-sidebar-item relative",
                    isActive &&
                      "border-[color:var(--border-strong)] bg-[linear-gradient(90deg,rgba(109,40,217,0.18)_0%,rgba(109,40,217,0.08)_100%)] text-[color:var(--primary)] shadow-[0_16px_30px_rgba(109,40,217,0.16)]",
                    collapsed && "justify-center px-0",
                  )}
                  href={item.href}
                  key={item.href}
                  title={item.label}
                >
                  <Icon className="h-4 w-4" />
                  {!collapsed ? <span>{item.label}</span> : null}
                  {isActive && !collapsed ? (
                    <ChevronRight className="ml-auto h-4 w-4" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          {collapsed ? (
            <div className="mt-4 flex flex-col items-center gap-3">
              <ThemeToggle compact />
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-strong)] font-semibold text-[color:var(--primary)] shadow-[var(--shadow-soft)]"
                type="button"
              >
                LA
              </button>
            </div>
          ) : (
            <>
              <div className="mt-4 flex items-center justify-between rounded-[16px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-3 py-2.5 shadow-[var(--shadow-soft)]">
                <p className="text-sm font-semibold text-[color:var(--text)]">
                  Theme
                </p>
                <ThemeToggle compact />
              </div>

              <div className="mt-4 rounded-[18px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-3 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--primary-soft)] font-semibold text-[color:var(--primary)]">
                    LA
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[color:var(--text)]">
                      Lex Aurelius
                    </p>
                    <p className="text-xs text-[color:var(--text-muted)]">
                      2nd Year Law Student
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </aside>

      <nav className="fixed inset-x-4 bottom-4 z-30 rounded-[20px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-2 shadow-[var(--shadow-card)] backdrop-blur-xl lg:hidden">
        <div className="grid grid-cols-5 gap-1">
          {mobileItems.slice(0, 5).map((item) => {
            const isActive = pathname === item.href;
            const Icon = navIcons[item.icon];

            return (
              <Link
                className={cn(
                  "flex flex-col items-center gap-1 rounded-[14px] px-2 py-3 text-[11px] font-medium transition",
                  isActive
                    ? "bg-[color:var(--primary-soft)] text-[color:var(--primary)]"
                    : "text-[color:var(--text-muted)]",
                )}
                href={item.href!}
                key={item.href}
              >
                <Icon className="h-4 w-4" />
                {item.shortLabel}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
