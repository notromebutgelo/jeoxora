import type { AIHistoryItem } from "@/types/ai-history";

export function sortAiHistory(entries: AIHistoryItem[]) {
  return [...entries].sort(
    (left, right) =>
      new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime(),
  );
}
