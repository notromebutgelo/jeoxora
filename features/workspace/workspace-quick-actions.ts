export type WorkspaceQuickAction = {
  description: string;
  href: string;
  label: string;
};

export const workspaceQuickActions: WorkspaceQuickAction[] = [
  {
    description: "Create a new reviewer from scratch.",
    href: "/workspace/knowledge",
    label: "New reviewer",
  },
  {
    description: "Start a focused pomodoro session.",
    href: "/workspace/focus",
    label: "Start focus session",
  },
  {
    description: "Generate flashcards from notes.",
    href: "/workspace/ai-assistant",
    label: "Generate flashcards",
  },
];
