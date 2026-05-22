"use client";

import type { ReviewerDraft } from "@/types/reviewer";
import { Textarea } from "@/components/ui/textarea";

type ReviewerEditorProps = {
  draft: ReviewerDraft;
  onChange?: (draft: ReviewerDraft) => void;
};

export function ReviewerEditor({
  draft,
  onChange,
}: ReviewerEditorProps) {
  return (
    <div className="grid gap-4">
      <input
        className="w-full rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-xl text-white outline-none focus:border-violet-400/40"
        onChange={(event) => onChange?.({ ...draft, title: event.target.value })}
        placeholder="Reviewer title"
        value={draft.title}
      />
      <Textarea
        className="min-h-[420px]"
        onChange={(event) =>
          onChange?.({ ...draft, content: event.target.value })
        }
        placeholder="Write or paste your legal notes here..."
        value={draft.content}
      />
    </div>
  );
}
