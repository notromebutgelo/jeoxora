import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type AnalyticsSummaryCardProps = {
  label: string;
  value: string;
};

export function AnalyticsSummaryCard({
  label,
  value,
}: AnalyticsSummaryCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl text-white">{value}</p>
      </CardContent>
    </Card>
  );
}
