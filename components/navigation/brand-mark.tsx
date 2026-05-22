import Link from "next/link";
import { Scale } from "lucide-react";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
  href?: string;
  showTagline?: boolean;
};

export function BrandMark({
  className,
  compact = false,
  href = "/",
  showTagline = false,
}: BrandMarkProps) {
  const content = (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--primary-soft)] text-[color:var(--primary)]">
        <Scale className="h-5 w-5" strokeWidth={1.8} />
      </span>
      <div className="leading-none">
        <p
          className={cn(
            "font-[var(--font-heading)] tracking-[0.14em] text-[color:var(--text)]",
            compact ? "text-base" : "text-xl",
          )}
        >
          JEOXORA
        </p>
        {showTagline ? (
          <p className="mt-1 text-[11px] font-medium text-[color:var(--muted)]">
            Master Law Intelligently.
          </p>
        ) : null}
      </div>
    </div>
  );

  return (
    <Link aria-label="Jeoxora home" href={href}>
      {content}
    </Link>
  );
}
