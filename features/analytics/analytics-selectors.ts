import type { StudySessionRecord } from "@/types/study-session";

export function getTotalStudyHours(sessions: StudySessionRecord[]) {
  const totalMinutes = sessions.reduce(
    (sum, session) => sum + session.durationMinutes,
    0,
  );

  return Number((totalMinutes / 60).toFixed(1));
}

export function getAverageFocusScore(sessions: StudySessionRecord[]) {
  const scoredSessions = sessions.filter(
    (session) => typeof session.focusScore === "number",
  );

  if (scoredSessions.length === 0) {
    return 0;
  }

  const totalScore = scoredSessions.reduce(
    (sum, session) => sum + (session.focusScore ?? 0),
    0,
  );

  return Number((totalScore / scoredSessions.length).toFixed(1));
}
