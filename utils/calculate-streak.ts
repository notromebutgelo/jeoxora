export function calculateStreak(activityDates: string[]) {
  if (activityDates.length === 0) {
    return 0;
  }

  const normalizedDates = [...new Set(activityDates)]
    .map((value) => new Date(value))
    .sort((left, right) => right.getTime() - left.getTime());

  let streak = 1;

  for (let index = 1; index < normalizedDates.length; index += 1) {
    const previous = normalizedDates[index - 1];
    const current = normalizedDates[index];
    const differenceInDays = Math.round(
      (previous.getTime() - current.getTime()) / (1000 * 60 * 60 * 24),
    );

    if (differenceInDays === 1) {
      streak += 1;
      continue;
    }

    if (differenceInDays > 1) {
      break;
    }
  }

  return streak;
}
