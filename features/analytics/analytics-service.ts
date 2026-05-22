import type { FlashcardItem } from "@/types/flashcard";
import type { ReviewerSummary } from "@/types/reviewer";
import type { StudySessionRecord } from "@/types/study-session";
import type { SubjectSummary } from "@/types/subject";

export type AnalyticsSnapshot = {
  flashcardsCompleted: number;
  reviewerCount: number;
  studyHours: number;
  subjectCount: number;
};

export function createAnalyticsSnapshot(input: {
  flashcards: FlashcardItem[];
  reviewers: ReviewerSummary[];
  sessions: StudySessionRecord[];
  subjects: SubjectSummary[];
}): AnalyticsSnapshot {
  const studyMinutes = input.sessions.reduce(
    (total, session) => total + session.durationMinutes,
    0,
  );

  return {
    flashcardsCompleted: input.flashcards.filter((item) => item.mastery >= 4)
      .length,
    reviewerCount: input.reviewers.length,
    studyHours: Number((studyMinutes / 60).toFixed(1)),
    subjectCount: input.subjects.length,
  };
}
