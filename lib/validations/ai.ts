import { z } from "zod";

export const summarizeSchema = z.object({
  reviewerId: z.string().min(1),
  text: z.string().min(50).max(20000),
});

export const explainSchema = z.object({
  selectedText: z.string().min(10).max(5000),
  context: z.string().max(5000).optional(),
});

export const generateReviewerSchema = z.object({
  notes: z.string().min(100).max(30000),
  subjectId: z.string().optional(),
  title: z.string().min(3).max(120),
});

export const generateFlashcardsSchema = z.object({
  reviewerId: z.string().optional(),
  notes: z.string().min(50).max(20000),
  cardCount: z.number().int().min(1).max(20).default(10),
});
