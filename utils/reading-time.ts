const WORDS_PER_MINUTE = 200;

export function calculateReadingTime(text: string) {
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));

  return {
    minutes,
    wordCount,
  };
}
