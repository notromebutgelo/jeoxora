import { z } from "zod";

export const studySessionSchema = z.object({
  startedAt: z.string().datetime(),
  endedAt: z.string().datetime().optional(),
  durationMinutes: z.number().int().min(0),
  focusScore: z.number().int().min(1).max(10).optional(),
  subjectId: z.string().optional(),
  notes: z.string().max(1000).optional(),
});

export const pomodoroSettingsSchema = z.object({
  focusMinutes: z.number().int().min(15).max(60).default(25),
  shortBreakMinutes: z.number().int().min(3).max(15).default(5),
  longBreakMinutes: z.number().int().min(10).max(30).default(15),
});
