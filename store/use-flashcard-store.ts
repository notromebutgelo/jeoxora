"use client";

import { create } from "zustand";
import type { FlashcardItem } from "@/types/flashcard";

type FlashcardState = {
  activeCardIndex: number;
  flashcards: FlashcardItem[];
  setActiveCardIndex: (index: number) => void;
  setFlashcards: (flashcards: FlashcardItem[]) => void;
};

export const useFlashcardStore = create<FlashcardState>((set) => ({
  activeCardIndex: 0,
  flashcards: [],
  setActiveCardIndex: (activeCardIndex) => {
    set({ activeCardIndex });
  },
  setFlashcards: (flashcards) => {
    set({ flashcards });
  },
}));
