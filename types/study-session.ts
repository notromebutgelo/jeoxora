export type StudySessionRecord = {
  id: string;
  startedAt: string;
  endedAt?: string;
  durationMinutes: number;
  focusScore?: number;
  subjectId?: string;
};
