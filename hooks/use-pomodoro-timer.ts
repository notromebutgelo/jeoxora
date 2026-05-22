"use client";

import { useEffect, useMemo, useState } from "react";

type PomodoroMode = "focus" | "short-break" | "long-break";

const MODE_DURATION_SECONDS: Record<PomodoroMode, number> = {
  focus: 25 * 60,
  "short-break": 5 * 60,
  "long-break": 15 * 60,
};

export function usePomodoroTimer(initialMode: PomodoroMode = "focus") {
  const [mode, setMode] = useState<PomodoroMode>(initialMode);
  const [remainingSeconds, setRemainingSeconds] = useState(
    MODE_DURATION_SECONDS[initialMode],
  );
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setRemainingSeconds((current) => {
        if (current <= 1) {
          window.clearInterval(intervalId);
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isRunning]);

  const formattedTime = useMemo(() => {
    const minutes = Math.floor(remainingSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (remainingSeconds % 60).toString().padStart(2, "0");

    return `${minutes}:${seconds}`;
  }, [remainingSeconds]);

  const selectMode = (nextMode: PomodoroMode) => {
    setMode(nextMode);
    setRemainingSeconds(MODE_DURATION_SECONDS[nextMode]);
    setIsRunning(false);
  };

  const reset = () => {
    setRemainingSeconds(MODE_DURATION_SECONDS[mode]);
    setIsRunning(false);
  };

  return {
    formattedTime,
    isRunning,
    mode,
    remainingSeconds,
    reset,
    selectMode,
    setIsRunning,
  };
}
