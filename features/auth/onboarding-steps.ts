export type OnboardingStep = {
  description: string;
  id: string;
  title: string;
};

export const onboardingSteps: OnboardingStep[] = [
  {
    description: "Capture the learner's name, law school, and current study goal.",
    id: "profile",
    title: "Profile",
  },
  {
    description: "Let the learner choose their core legal subjects and priorities.",
    id: "subjects",
    title: "Subjects",
  },
  {
    description: "Configure focus defaults like pomodoro length and reminder tone.",
    id: "focus-preferences",
    title: "Focus Preferences",
  },
];
