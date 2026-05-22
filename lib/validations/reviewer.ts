import { z } from "zod";

export const reviewerSchema = z.object({
  title: z.string().min(3).max(120),
  content: z.string().min(20),
  subjectId: z.string().optional(),
  tags: z.array(z.string().min(1).max(30)).max(10).default([]),
});

export const reviewerSearchSchema = z.object({
  query: z.string().max(120).default(""),
  subjectId: z.string().optional(),
  tags: z.array(z.string()).default([]),
});
