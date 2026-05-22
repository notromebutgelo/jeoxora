import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-inset)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[color:var(--primary)]",
        className,
      )}
      {...props}
    />
  );
}
