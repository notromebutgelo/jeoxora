import type { ReviewerSummary } from "@/types/reviewer";

export function searchReviewers(
  reviewers: ReviewerSummary[],
  query: string,
  selectedTags: string[] = [],
) {
  const normalizedQuery = query.trim().toLowerCase();

  return reviewers.filter((reviewer) => {
    const matchesQuery =
      normalizedQuery.length === 0 ||
      reviewer.title.toLowerCase().includes(normalizedQuery) ||
      reviewer.excerpt.toLowerCase().includes(normalizedQuery);
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => reviewer.tags.includes(tag));

    return matchesQuery && matchesTags;
  });
}
