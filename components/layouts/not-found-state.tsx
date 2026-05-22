import Link from "next/link";
import { Button } from "@/components/ui/button";

export function NotFoundState() {
  return (
    <main className="px-6 py-10 md:px-10 md:py-14">
      <div className="mx-auto max-w-3xl">
        <section className="jeoxora-shell p-8 md:p-10">
          <span className="jeoxora-pill">404</span>
          <h1 className="mt-6 text-4xl text-white md:text-5xl">
            This page could not be found.
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-300">
            The route may have moved, the link may be outdated, or the page
            has not been built yet in this MVP.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/workspace/dashboard">Go to workspace</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Back to landing</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
