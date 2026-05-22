import type { AIAction } from "@/features/ai/ai-actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type AIActionPanelProps = {
  actions: AIAction[];
};

export function AIActionPanel({ actions }: AIActionPanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI study actions</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        {actions.map((action) => (
          <div
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-4"
            key={action.id}
          >
            <h4 className="text-lg text-white">{action.title}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {action.description}
            </p>
            <Button className="mt-4" size="sm">
              Run action
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
