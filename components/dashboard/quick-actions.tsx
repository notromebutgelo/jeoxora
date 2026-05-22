import Link from "next/link";
import type { WorkspaceQuickAction } from "@/features/workspace/workspace-quick-actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type QuickActionsProps = {
  actions: WorkspaceQuickAction[];
};

export function QuickActions({ actions }: QuickActionsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick actions</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        {actions.map((action) => (
          <Link
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-violet-400/30 hover:bg-violet-500/10"
            href={action.href}
            key={action.label}
          >
            <h4 className="text-lg text-white">{action.label}</h4>
            <p className="mt-2 text-sm text-slate-300">{action.description}</p>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
