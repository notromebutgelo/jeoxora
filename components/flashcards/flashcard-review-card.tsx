import type { FlashcardItem } from "@/types/flashcard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getMasteryLabel } from "@/features/flashcards/mastery-utils";

type FlashcardReviewCardProps = {
  flashcard: FlashcardItem;
  showAnswer?: boolean;
};

export function FlashcardReviewCard({
  flashcard,
  showAnswer = false,
}: FlashcardReviewCardProps) {
  return (
    <Card>
      <CardHeader>
        <Badge>{getMasteryLabel(flashcard.mastery)}</Badge>
        <CardTitle className="mt-4">{flashcard.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-300">
          {showAnswer ? flashcard.answer : "Reveal the answer during review mode."}
        </p>
      </CardContent>
    </Card>
  );
}
