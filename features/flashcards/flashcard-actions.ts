import type { FlashcardItem } from "@/types/flashcard";

export function getNextFlashcard(
  flashcards: FlashcardItem[],
  currentIndex: number,
) {
  if (flashcards.length === 0) {
    return undefined;
  }

  return flashcards[(currentIndex + 1) % flashcards.length];
}
