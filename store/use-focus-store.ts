"use client";

import { create } from "zustand";
import type { StudySessionRecord } from "@/types/study-session";

type FocusState = {
  currentSession?: StudySessionRecord;
  dailyStreak: number;
  isTimerRunning: boolean;
  setCurrentSession: (session?: StudySessionRecord) => void;
  setDailyStreak: (streak: number) => void;
  setTimerRunning: (isRunning: boolean) => void;
};

export const useFocusStore = create<FocusState>((set) => ({
  currentSession: undefined,
  dailyStreak: 0,
  isTimerRunning: false,
  setCurrentSession: (currentSession) => {
    set({ currentSession });
  },
  setDailyStreak: (dailyStreak) => {
    set({ dailyStreak });
  },
  setTimerRunning: (isTimerRunning) => {
    set({ isTimerRunning });
  },
}));
