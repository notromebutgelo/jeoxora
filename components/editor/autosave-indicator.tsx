import { formatDateTime } from "@/utils/format-date";

type AutosaveIndicatorProps = {
  isSaving: boolean;
  lastSavedAt?: Date | null;
};

export function AutosaveIndicator({
  isSaving,
  lastSavedAt,
}: AutosaveIndicatorProps) {
  if (isSaving) {
    return <p className="text-sm text-amber-100">Saving changes...</p>;
  }

  if (!lastSavedAt) {
    return <p className="text-sm text-slate-400">Changes not saved yet.</p>;
  }

  return (
    <p className="text-sm text-slate-400">
      Last saved {formatDateTime(lastSavedAt)}
    </p>
  );
}
