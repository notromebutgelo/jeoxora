export type ReviewerSummary = {
  id: string;
  title: string;
  excerpt: string;
  subjectId?: string;
  tags: string[];
  updatedAt: string;
};

export type ReviewerDraft = {
  title: string;
  content: string;
  subjectId?: string;
  tags: string[];
};
