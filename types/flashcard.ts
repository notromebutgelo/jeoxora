export type FlashcardItem = {
  id: string;
  question: string;
  answer: string;
  mastery: number;
  reviewerId?: string;
  subjectId?: string;
  source: "MANUAL" | "AI_GENERATED";
};
