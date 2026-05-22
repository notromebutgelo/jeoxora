import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type StudyStatsCardProps = {
  label: string;
  trend?: string;
  value: string;
};

export function StudyStatsCard({
  label,
  trend,
  value,
}: StudyStatsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl text-white">{value}</p>
        {trend ? <p className="mt-2 text-sm text-emerald-300">{trend}</p> : null}
      </CardContent>
    </Card>
  );
}
