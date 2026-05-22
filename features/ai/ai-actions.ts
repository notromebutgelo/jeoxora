export type AIAction = {
  description: string;
  id: "summarize" | "explain" | "generate-reviewer" | "generate-flashcards";
  route: string;
  title: string;
};

export const aiActions: AIAction[] = [
  {
    description: "Condense a reviewer into a shorter study summary.",
    id: "summarize",
    route: "/api/ai/summarize",
    title: "Summarize reviewer",
  },
  {
    description: "Explain selected doctrine or legal text.",
    id: "explain",
    route: "/api/ai/explain",
    title: "Explain doctrine",
  },
  {
    description: "Turn raw notes into a polished reviewer.",
    id: "generate-reviewer",
    route: "/api/ai/generate-reviewer",
    title: "Generate reviewer",
  },
  {
    description: "Create flashcards directly from study notes.",
    id: "generate-flashcards",
    route: "/api/ai/generate-flashcards",
    title: "Generate flashcards",
  },
];
