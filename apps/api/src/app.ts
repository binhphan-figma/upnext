import cors from "cors";
import express from "express";
import helmet from "helmet";
import { errorHandler } from "./common/middleware/error-handler";
import { requestLogger } from "./common/middleware/request-logger";
import { env } from "./config/env";
import { aiRouter } from "./modules/ai/ai.routes";
import { applicationsRouter } from "./modules/applications/applications.routes";
import { authRouter } from "./modules/auth/auth.routes";
import { healthRouter } from "./modules/health/health.routes";
import { jobsRouter } from "./modules/jobs/jobs.routes";

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
  app.use(express.json({ limit: "1mb" }));
  app.use(requestLogger);

  app.use("/health", healthRouter);
  app.use("/auth", authRouter);
  app.use("/ai", aiRouter);
  app.use("/jobs", jobsRouter);
  app.use("/applications", applicationsRouter);

  app.use(errorHandler);

  return app;
}
