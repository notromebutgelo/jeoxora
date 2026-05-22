import { Skeleton } from "@/components/ui/skeleton";

export function LoadingState() {
  return (
    <main className="px-6 py-10 md:px-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        <section className="jeoxora-shell p-8 md:p-10">
          <div className="grid gap-6">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-16 w-full max-w-3xl" />
            <Skeleton className="h-28 w-full" />
            <div className="grid gap-4 md:grid-cols-3">
              <Skeleton className="h-40 w-full" />
              <Skeleton className="h-40 w-full" />
              <Skeleton className="h-40 w-full" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
