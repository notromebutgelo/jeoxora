import type { ReviewerSummary } from "@/types/reviewer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ReviewerCardProps = {
  reviewer: ReviewerSummary;
};

export function ReviewerCard({ reviewer }: ReviewerCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{reviewer.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-7 text-slate-300">{reviewer.excerpt}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {reviewer.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
