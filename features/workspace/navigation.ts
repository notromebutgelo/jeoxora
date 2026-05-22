export type WorkspaceNavItem = {
  comingSoon?: boolean;
  description: string;
  href?: string;
  icon:
    | "ai"
    | "analytics"
    | "bar-review"
    | "dashboard"
    | "flashcards"
    | "focus"
    | "knowledge"
    | "planner"
    | "recitation"
    | "settings";
  label: string;
  shortLabel: string;
};

export const workspaceNavItems: WorkspaceNavItem[] = [
  {
    description: "Study overview and activity snapshot.",
    href: "/workspace/dashboard",
    icon: "dashboard",
    label: "Dashboard",
    shortLabel: "Home",
  },
  {
    description: "Subjects, reviewers, tags, and search.",
    href: "/workspace/knowledge",
    icon: "knowledge",
    label: "Knowledge",
    shortLabel: "Notes",
  },
  {
    description: "Manual decks and AI-generated recall cards.",
    href: "/workspace/flashcards",
    icon: "flashcards",
    label: "Flashcards",
    shortLabel: "Cards",
  },
  {
    description: "Pomodoro timer and session tracking.",
    href: "/workspace/focus",
    icon: "focus",
    label: "Focus",
    shortLabel: "Focus",
  },
  {
    description: "Summaries, explanations, and reviewer generation.",
    href: "/workspace/ai-assistant",
    icon: "ai",
    label: "AI Assistant",
    shortLabel: "AI",
  },
  {
    description: "Study trends, streaks, and completion signals.",
    href: "/workspace/analytics",
    icon: "analytics",
    label: "Analytics",
    shortLabel: "Stats",
  },
  {
    comingSoon: true,
    description: "Deferred for a later MVP phase.",
    icon: "planner",
    label: "Planner",
    shortLabel: "Plan",
  },
  {
    comingSoon: true,
    description: "Deferred for a later MVP phase.",
    icon: "recitation",
    label: "Recitation",
    shortLabel: "Recite",
  },
  {
    comingSoon: true,
    description: "Deferred for a later MVP phase.",
    icon: "bar-review",
    label: "Bar Review",
    shortLabel: "Bar",
  },
  {
    description: "Profile, preferences, and integrations.",
    href: "/workspace/settings",
    icon: "settings",
    label: "Settings",
    shortLabel: "Settings",
  },
];
