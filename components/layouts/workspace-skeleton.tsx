import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type WorkspacePageSkeletonProps = {
  chart?: boolean;
  className?: string;
  sidebar?: boolean;
  titleWidth?: string;
};

export function WorkspacePageSkeleton({
  chart = true,
  className,
  sidebar = true,
  titleWidth = "w-56",
}: WorkspacePageSkeletonProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <section className="px-1 py-2">
        <Skeleton className="h-4 w-24 rounded-[8px]" />
        <Skeleton className={cn("mt-4 h-11 rounded-[12px]", titleWidth)} />
        <div className="mt-5 flex gap-4">
          <Skeleton className="h-8 w-20 rounded-[8px]" />
          <Skeleton className="h-8 w-20 rounded-[8px]" />
          <Skeleton className="h-8 w-20 rounded-[8px]" />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton className="h-[132px] rounded-[16px]" key={index} />
        ))}
      </section>

      <section
        className={cn(
          "grid gap-4",
          sidebar ? "xl:grid-cols-[minmax(0,1fr)_360px]" : "xl:grid-cols-2",
        )}
      >
        <Skeleton className={cn("rounded-[16px]", chart ? "h-[360px]" : "h-[280px]")} />
        <Skeleton className="h-[360px] rounded-[16px]" />
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <Skeleton className="h-[260px] rounded-[16px]" />
        <Skeleton className="h-[260px] rounded-[16px]" />
      </section>
    </div>
  );
}
