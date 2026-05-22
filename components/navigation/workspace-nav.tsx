"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bot,
  BookMarked,
  BriefcaseBusiness,
  CalendarRange,
  ChartNoAxesCombined,
  GraduationCap,
  LayoutDashboard,
  MessageSquareText,
  Settings,
  TimerReset,
} from "lucide-react";
import { BrandMark } from "@/components/navigation/brand-mark";
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

export function WorkspaceNav() {
  const pathname = usePathname();
  const mobileItems = workspaceNavItems.filter(
    (item) => item.href && !item.comingSoon,
  );

  return (
    <>
      <aside className="hidden w-[260px] shrink-0 lg:block">
        <div className="sticky top-3 flex h-[calc(100vh-24px)] flex-col rounded-[24px] border border-[color:var(--border)] bg-[color:var(--sidebar)] px-4 py-5 shadow-[var(--shadow-card)] backdrop-blur-xl">
          <BrandMark compact href="/" />
          <nav className="mt-7 flex-1 space-y-1 overflow-y-auto pr-1">
            {workspaceNavItems.map((item) => {
              const isActive = item.href ? pathname === item.href : false;
              const Icon = navIcons[item.icon];

              if (!item.href) {
                return (
                  <div
                    className="jx-sidebar-item cursor-not-allowed opacity-65"
                    key={item.label}
                  >
                    <Icon className="h-4 w-4" />
                    <div className="flex-1">
                      <p>{item.label}</p>
                    </div>
                    <span className="rounded-full bg-[color:var(--surface-inset)] px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-[color:var(--text-subtle)]">
                      Soon
                    </span>
                  </div>
                );
              }

              return (
                <Link
                  className={cn(
                    "jx-sidebar-item",
                    isActive && "jx-sidebar-item-active",
                  )}
                  href={item.href}
                  key={item.href}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

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
