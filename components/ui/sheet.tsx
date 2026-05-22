import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SheetProps = {
  children: ReactNode;
  onOpenChange?: (open: boolean) => void;
  open: boolean;
  side?: "left" | "right";
};

export function Sheet({
  children,
  onOpenChange,
  open,
  side = "right",
}: SheetProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70">
      <button
        aria-label="Close sheet"
        className="absolute inset-0 h-full w-full"
        onClick={() => onOpenChange?.(false)}
        type="button"
      />
      <aside
        className={cn(
          "absolute top-0 h-full w-full max-w-md border-white/10 bg-slate-950/95 p-6 shadow-2xl backdrop-blur",
          side === "right" ? "right-0 border-l" : "left-0 border-r",
        )}
      >
        {children}
      </aside>
    </div>
  );
}
