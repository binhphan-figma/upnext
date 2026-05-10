import { Router } from "express";
import { getPermissionsForRole } from "@upnext/domain";
import { authenticate, type AuthenticatedRequest } from "./auth.middleware";
import { loginRequestSchema, registerRequestSchema } from "./auth.schemas";
import { authService } from "./auth.service";

export const authRouter = Router();

authRouter.get("/demo-accounts", (_request, response) => {
  response.json({
    data: authService.listDemoAccounts()
  });
});

authRouter.post("/login", (request, response, next) => {
  try {
    const input = loginRequestSchema.parse(request.body);

    response.json({
      data: authService.login(input)
    });
  } catch (error) {
    next(error);
  }
});

authRouter.post("/register", (request, response, next) => {
  try {
    const input = registerRequestSchema.parse(request.body);

    response.status(201).json({
      data: authService.register(input)
    });
  } catch (error) {
    next(error);
  }
});

authRouter.get("/me", authenticate, (request, response) => {
  const { user } = request as AuthenticatedRequest;

  response.json({
    data: {
      user,
      permissions: getPermissionsForRole(user.role)
    }
  });
});
