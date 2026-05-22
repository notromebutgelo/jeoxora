"use client";

import type { FlashcardItem } from "@/types/flashcard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FlashcardFormProps = {
  onSubmit?: (card: Pick<FlashcardItem, "answer" | "question">) => void;
};

export function FlashcardForm({ onSubmit }: FlashcardFormProps) {
  return (
    <form
      className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-slate-950/50 p-6"
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        onSubmit?.({
          answer: String(formData.get("answer") ?? ""),
          question: String(formData.get("question") ?? ""),
        });
      }}
    >
      <Input name="question" placeholder="Question" />
      <Textarea name="answer" placeholder="Answer" />
      <Button type="submit">Save flashcard</Button>
    </form>
  );
}
