import type { ReviewerSummary } from "@/types/reviewer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type RecentReviewersCardProps = {
  reviewers: ReviewerSummary[];
};

export function RecentReviewersCard({
  reviewers,
}: RecentReviewersCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent reviewers</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {reviewers.length === 0 ? (
          <p className="text-sm text-slate-400">
            No reviewers yet. Create your first legal digest from the knowledge workspace.
          </p>
        ) : (
          reviewers.map((reviewer) => (
            <article
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-4"
              key={reviewer.id}
            >
              <h4 className="text-lg text-white">{reviewer.title}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {reviewer.excerpt}
              </p>
            </article>
          ))
        )}
      </CardContent>
    </Card>
  );
}
