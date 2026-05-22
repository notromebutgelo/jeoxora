export type AIHistoryType =
  | "SUMMARIZE"
  | "EXPLAIN"
  | "GENERATE_REVIEWER"
  | "GENERATE_FLASHCARDS";

export type AIHistoryItem = {
  id: string;
  type: AIHistoryType;
  prompt: string;
  response: string;
  createdAt: string;
  reviewerId?: string;
};
