import { calculateStreak } from "@/utils/calculate-streak";

export function getStudyStreak(sessionDates: string[]) {
  return calculateStreak(sessionDates);
}
