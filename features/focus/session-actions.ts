import type { StudySessionRecord } from "@/types/study-session";

export function completeSession(
  session: StudySessionRecord,
  endedAt = new Date(),
) {
  const startedAt = new Date(session.startedAt);
  const durationMinutes = Math.max(
    0,
    Math.round((endedAt.getTime() - startedAt.getTime()) / (1000 * 60)),
  );

  return {
    ...session,
    durationMinutes,
    endedAt: endedAt.toISOString(),
  };
}
