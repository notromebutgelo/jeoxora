import { z } from "zod";

export const uploadMetadataSchema = z.object({
  fileName: z.string().min(1).max(255),
  mimeType: z.string().min(1).max(120),
  sizeBytes: z.number().int().positive().max(10 * 1024 * 1024),
  reviewerId: z.string().optional(),
});
