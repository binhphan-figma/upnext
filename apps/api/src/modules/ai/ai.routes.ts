import { Router } from "express";
import { createMatchExplanation, getJobBySlug } from "@upnext/domain";
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

aiRouter.get("/match-preview/:jobSlug", (request, response, next) => {
  try {
    const job = getJobBySlug(request.params.jobSlug);

    if (!job) {
      throw new AppError("Job not found", 404, "JOB_NOT_FOUND");
    }

    response.json({
      data: createMatchExplanation(job)
    });
  } catch (error) {
    next(error);
  }
});
