import { Router } from "express";
import { AppError } from "../../common/errors";
import { cvFeedbackRequestSchema } from "./ai.schemas";
import { aiService } from "./ai.service";

export const aiRouter = Router();

aiRouter.post("/cv-feedback", (request, response, next) => {
  try {
    const parsed = cvFeedbackRequestSchema.safeParse(request.body);

    if (!parsed.success) {
      throw new AppError("Invalid CV feedback request", 400, "VALIDATION_ERROR");
    }

    const feedback = aiService.generateCvFeedback(parsed.data);
    response.json({ data: feedback });
  } catch (error) {
    next(error);
  }
});
