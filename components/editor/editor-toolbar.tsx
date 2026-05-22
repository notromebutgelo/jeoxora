import { Button } from "@/components/ui/button";

export function EditorToolbar() {
  return (
    <div className="flex flex-wrap gap-3 rounded-[1.75rem] border border-white/10 bg-slate-950/50 p-4">
      <Button size="sm" variant="outline">
        Heading
      </Button>
      <Button size="sm" variant="outline">
        Bullet list
      </Button>
      <Button size="sm" variant="outline">
        Highlight
      </Button>
      <Button size="sm">Ask AI</Button>
    </div>
  );
}
