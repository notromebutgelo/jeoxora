import type { SubjectSummary } from "@/types/subject";

export function sortSubjectsByName(subjects: SubjectSummary[]) {
  return [...subjects].sort((left, right) =>
    left.name.localeCompare(right.name),
  );
}
