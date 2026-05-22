"use client";

import { ErrorState } from "@/components/layouts/error-state";

type GlobalErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalErrorPage({
  error,
  reset,
}: GlobalErrorPageProps) {
  return (
    <html lang="en">
      <body>
        <ErrorState
          description={
            error.digest
              ? `A global application error occurred. Reference: ${error.digest}`
              : "A global application error occurred while rendering Jeoxora."
          }
          onRetry={reset}
          title="Jeoxora hit an application error."
        />
      </body>
    </html>
  );
}
