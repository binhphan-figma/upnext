import { Router } from "express";
import {
  applications,
  canTransitionApplicationStatus,
  getApplicationJob,
  type ApplicationStatus
} from "@upnext/domain";
import { AppError } from "../../common/errors";

export const applicationsRouter = Router();

applicationsRouter.get("/", (_request, response) => {
  response.json({
    data: applications.map((application) => ({
      ...application,
      job: getApplicationJob(application)
    }))
  });
});

applicationsRouter.get("/:id/status-transitions", (request, response, next) => {
  try {
    const application = applications.find((item) => item.id === request.params.id);

    if (!application) {
      throw new AppError("Application not found", 404, "APPLICATION_NOT_FOUND");
    }

    const statuses: ApplicationStatus[] = [
      "submitted",
      "under_review",
      "shortlisted",
      "interview_invited",
      "rejected",
      "hired",
      "withdrawn"
    ];

    response.json({
      data: {
        currentStatus: application.status,
        allowedTransitions: statuses.filter((status) =>
          canTransitionApplicationStatus(application.status, status)
        )
      }
    });
  } catch (error) {
    next(error);
  }
});
