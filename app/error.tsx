"use client";

import { ErrorState } from "@/components/layouts/error-state";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <ErrorState
      description={
        error.digest
          ? `An unexpected issue occurred while loading this part of Jeoxora. Reference: ${error.digest}`
          : "An unexpected issue occurred while loading this part of Jeoxora."
      }
      onRetry={reset}
      title="Something went wrong."
    />
  );
}
