import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type EmptyStateProps = {
  actionLabel?: string;
  className?: string;
  description: string;
  icon: LucideIcon;
  title: string;
};

export function EmptyState({
  actionLabel,
  className,
  description,
  icon: Icon,
  title,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex min-h-[220px] flex-col items-center justify-center rounded-[16px] border border-dashed border-[color:var(--border)] bg-[color:var(--surface-subtle)] px-6 py-8 text-center",
        className,
      )}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[color:var(--primary-soft)] text-[color:var(--primary)]">
        <Icon className="h-5 w-5" />
      </span>
      <h2 className="mt-5 text-[22px] leading-tight text-[color:var(--text)]">
        {title}
      </h2>
      <p className="mt-3 max-w-sm text-sm leading-6 text-[color:var(--text-muted)]">
        {description}
      </p>
      {actionLabel ? (
        <Button className="mt-5 gap-2" size="sm" type="button">
          {actionLabel}
          <ArrowRight className="h-4 w-4" />
        </Button>
      ) : null}
    </div>
  );
}
