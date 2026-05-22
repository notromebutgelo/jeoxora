import type { SubjectSummary } from "@/types/subject";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type SubjectListProps = {
  subjects: SubjectSummary[];
};

export function SubjectList({ subjects }: SubjectListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {subjects.map((subject) => (
        <Card key={subject.id}>
          <CardHeader>
            <CardTitle className="text-xl">{subject.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-6 text-slate-300">
              {subject.description ?? "No description yet."}
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">
              {subject.reviewerCount} reviewers * {subject.flashcardCount} flashcards
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
