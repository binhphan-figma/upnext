import type { CvFeedbackRequest, CvFeedbackResponse } from "./ai.schemas";

const promptVersion = "cv-feedback-v1";

export class AiService {
  generateCvFeedback(input: CvFeedbackRequest): CvFeedbackResponse {
    const targetRole = input.targetRole ?? "junior software developer";

    return {
      summary: `This mock analysis prepares the CV for a ${targetRole} role. Replace this service with a structured-output AI provider after auth, billing, logging, and privacy consent are implemented.`,
      strengths: [
        "CV content is long enough for initial analysis.",
        "The candidate provided consent before AI processing."
      ],
      improvements: [
        "Add measurable project outcomes.",
        "Group technical skills by category.",
        "Include links to GitHub, portfolio, or deployed demos."
      ],
      missingSignals: [
        "Testing experience is not clearly evidenced.",
        "Team collaboration and code review experience may need stronger examples."
      ],
      suggestedKeywords: ["TypeScript", "React", "REST API", "PostgreSQL", "Git workflow"],
      confidence: "low",
      limitations: [
        "Mock provider is used in development.",
        "AI feedback must not be treated as a hiring decision."
      ],
      promptVersion
    };
  }
}

export const aiService = new AiService();
