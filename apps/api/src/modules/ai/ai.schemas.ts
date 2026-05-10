import { z } from "zod";

export const cvFeedbackRequestSchema = z.object({
  cvText: z.string().min(200).max(30_000),
  targetRole: z.string().min(2).max(120).optional(),
  consentConfirmed: z.literal(true)
});

export const cvFeedbackResponseSchema = z.object({
  summary: z.string(),
  strengths: z.array(z.string()),
  improvements: z.array(z.string()),
  missingSignals: z.array(z.string()),
  suggestedKeywords: z.array(z.string()),
  confidence: z.enum(["low", "medium", "high"]),
  limitations: z.array(z.string()),
  promptVersion: z.string()
});

export type CvFeedbackRequest = z.infer<typeof cvFeedbackRequestSchema>;
export type CvFeedbackResponse = z.infer<typeof cvFeedbackResponseSchema>;
