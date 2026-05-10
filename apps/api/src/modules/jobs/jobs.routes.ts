import { Router } from "express";
import { createMatchExplanation, getJobBySlug, jobs } from "@upnext/domain";
import { AppError } from "../../common/errors";

export const jobsRouter = Router();

jobsRouter.get("/", (_request, response) => {
  response.json({
    data: jobs.map((job) => ({
      id: job.id,
      slug: job.slug,
      title: job.title,
      company: job.company,
      location: job.location,
      level: job.level,
      workMode: job.workMode,
      salary: job.salary,
      skills: job.skills,
      matchScore: job.matchScore
    }))
  });
});

jobsRouter.get("/:slug", (request, response, next) => {
  try {
    const job = getJobBySlug(request.params.slug);

    if (!job) {
      throw new AppError("Job not found", 404, "JOB_NOT_FOUND");
    }

    response.json({
      data: {
        job,
        matchPreview: createMatchExplanation(job)
      }
    });
  } catch (error) {
    next(error);
  }
});
