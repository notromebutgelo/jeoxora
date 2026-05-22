"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { workspaceNavItems } from "@/features/workspace/navigation";
import { cn } from "@/lib/utils";

export function MobileBottomNav() {
  const pathname = usePathname();
  const mobileItems = workspaceNavItems.filter((item) => item.href).slice(0, 4);

  return (
    <nav className="fixed inset-x-4 bottom-4 z-20 rounded-[20px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-2 shadow-[var(--shadow-card)] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-4 gap-2">
        {mobileItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              className={cn(
                "rounded-[14px] px-3 py-3 text-center text-xs font-medium transition",
                isActive
                  ? "bg-[color:var(--primary-soft)] text-[color:var(--primary)]"
                  : "text-[color:var(--text-muted)]",
              )}
              href={item.href!}
              key={item.href}
            >
              {item.shortLabel}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
