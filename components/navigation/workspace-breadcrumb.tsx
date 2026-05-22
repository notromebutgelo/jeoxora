"use client";

import { usePathname } from "next/navigation";

export function WorkspaceBreadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <p className="mt-2 text-sm text-slate-400">
      {segments.length === 0 ? "Home" : segments.join(" / ")}
    </p>
  );
}
