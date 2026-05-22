import Link from "next/link";
import { Button } from "@/components/ui/button";

type ErrorStateProps = {
  description: string;
  onRetry?: () => void;
  title: string;
};

export function ErrorState({
  description,
  onRetry,
  title,
}: ErrorStateProps) {
  return (
    <main className="px-6 py-10 md:px-10 md:py-14">
      <div className="mx-auto max-w-3xl">
        <section className="jeoxora-shell p-8 md:p-10">
          <span className="jeoxora-pill">Application Error</span>
          <h1 className="mt-6 text-4xl text-white md:text-5xl">{title}</h1>
          <p className="mt-4 text-base leading-8 text-slate-300">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {onRetry ? (
              <Button onClick={onRetry} type="button">
                Try again
              </Button>
            ) : null}
            <Button asChild variant="outline">
              <Link href="/">Return home</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
