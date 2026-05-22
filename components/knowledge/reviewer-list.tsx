import type { ReviewerSummary } from "@/types/reviewer";
import { ReviewerCard } from "@/components/knowledge/reviewer-card";

type ReviewerListProps = {
  reviewers: ReviewerSummary[];
};

export function ReviewerList({ reviewers }: ReviewerListProps) {
  if (reviewers.length === 0) {
    return (
      <div className="rounded-[1.75rem] border border-dashed border-white/15 bg-white/[0.02] p-8 text-center text-sm text-slate-400">
        No reviewers match the current filters yet.
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {reviewers.map((reviewer) => (
        <ReviewerCard key={reviewer.id} reviewer={reviewer} />
      ))}
    </div>
  );
}
