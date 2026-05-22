export type WorkspaceMetric = {
  label: string;
  value: string;
};

export const starterWorkspaceMetrics: WorkspaceMetric[] = [
  { label: "Study hours", value: "0h" },
  { label: "Review sessions", value: "0" },
  { label: "Flashcards completed", value: "0" },
];
