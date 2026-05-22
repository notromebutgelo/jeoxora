"use client";

import { useEffect, useRef, useState } from "react";

type UseAutosaveOptions<T> = {
  delay?: number;
  onSave: (value: T) => Promise<void> | void;
  value: T;
};

export function useAutosave<T>({
  delay = 800,
  onSave,
  value,
}: UseAutosaveOptions<T>) {
  const isFirstRun = useRef(true);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    const timeoutId = window.setTimeout(async () => {
      setIsSaving(true);

      try {
        await onSave(value);
        setLastSavedAt(new Date());
      } finally {
        setIsSaving(false);
      }
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [delay, onSave, value]);

  return {
    isSaving,
    lastSavedAt,
  };
}
