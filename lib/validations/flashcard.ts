import { z } from "zod";

export const flashcardSchema = z.object({
  question: z.string().min(5).max(300),
  answer: z.string().min(1).max(600),
  mastery: z.number().int().min(0).max(5).default(0),
  reviewerId: z.string().optional(),
  subjectId: z.string().optional(),
});

export const flashcardReviewSchema = z.object({
  flashcardId: z.string().min(1),
  mastery: z.number().int().min(0).max(5),
});
