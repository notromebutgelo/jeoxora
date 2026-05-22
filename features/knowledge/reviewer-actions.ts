import type { ReviewerDraft, ReviewerSummary } from "@/types/reviewer";

export function buildReviewerSummary(
  reviewer: ReviewerDraft,
  id = crypto.randomUUID(),
): ReviewerSummary {
  return {
    excerpt: reviewer.content.slice(0, 140),
    id,
    subjectId: reviewer.subjectId,
    tags: reviewer.tags,
    title: reviewer.title,
    updatedAt: new Date().toISOString(),
  };
}
