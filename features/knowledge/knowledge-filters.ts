type KnowledgeFilters = {
  query: string;
  subjectId?: string;
  tags: string[];
};

export const defaultKnowledgeFilters: KnowledgeFilters = {
  query: "",
  subjectId: undefined,
  tags: [],
};
