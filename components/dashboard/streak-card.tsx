import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type StreakCardProps = {
  days: number;
};

export function StreakCard({ days }: StreakCardProps) {
  return (
    <Card>
      <CardHeader>
        <Badge>Consistency</Badge>
        <CardTitle className="mt-4">Current streak</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl text-white">{days} days</p>
        <p className="mt-2 text-sm text-slate-300">
          Keep momentum with one meaningful study block each day.
        </p>
      </CardContent>
    </Card>
  );
}
