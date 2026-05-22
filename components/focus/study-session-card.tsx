import type { StudySessionRecord } from "@/types/study-session";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDateTime } from "@/utils/format-date";

type StudySessionCardProps = {
  session: StudySessionRecord;
};

export function StudySessionCard({ session }: StudySessionCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Study session</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-300">
          Started {formatDateTime(session.startedAt)}
        </p>
        <p className="mt-2 text-sm text-slate-300">
          Duration {session.durationMinutes} minutes
        </p>
      </CardContent>
    </Card>
  );
}
