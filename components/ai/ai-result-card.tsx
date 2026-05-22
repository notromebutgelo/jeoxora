import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type AIResultCardProps = {
  content: string;
  title: string;
};

export function AIResultCard({ content, title }: AIResultCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-wrap text-sm leading-7 text-slate-300">
          {content}
        </p>
      </CardContent>
    </Card>
  );
}
