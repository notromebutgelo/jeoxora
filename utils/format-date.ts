const shortDateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
});

const shortDateTimeFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
});

export function formatDate(value: Date | string) {
  const date = value instanceof Date ? value : new Date(value);
  return shortDateFormatter.format(date);
}

export function formatDateTime(value: Date | string) {
  const date = value instanceof Date ? value : new Date(value);
  return shortDateTimeFormatter.format(date);
}
