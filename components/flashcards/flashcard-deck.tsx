import type { FlashcardItem } from "@/types/flashcard";
import { FlashcardReviewCard } from "@/components/flashcards/flashcard-review-card";

type FlashcardDeckProps = {
  flashcards: FlashcardItem[];
};

export function FlashcardDeck({ flashcards }: FlashcardDeckProps) {
  return (
    <div className="grid gap-4">
      {flashcards.map((flashcard) => (
        <FlashcardReviewCard flashcard={flashcard} key={flashcard.id} />
      ))}
    </div>
  );
}
