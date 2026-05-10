import type { NextFunction, Request, Response } from "express";
import {
  getDemoUserFromAccessToken,
  hasPermission,
  type DemoUser,
  type Permission
} from "@upnext/domain";
import { AppError } from "../../common/errors";

export type AuthenticatedRequest = Request & {
  user: DemoUser;
};

export function authenticate(request: Request, _response: Response, next: NextFunction) {
  try {
    const authorizationHeader = request.header("authorization");
    const accessToken = authorizationHeader?.startsWith("Bearer ")
      ? authorizationHeader.slice("Bearer ".length)
      : undefined;

    if (!accessToken) {
      throw new AppError("Missing bearer token", 401, "AUTH_TOKEN_REQUIRED");
    }

    const user = getDemoUserFromAccessToken(accessToken);

    if (!user) {
      throw new AppError("Invalid bearer token", 401, "AUTH_TOKEN_INVALID");
    }

    (request as AuthenticatedRequest).user = user;
    next();
  } catch (error) {
    next(error);
  }
}

export function requirePermission(permission: Permission) {
  return (request: Request, _response: Response, next: NextFunction) => {
    try {
      const user = (request as Partial<AuthenticatedRequest>).user;

      if (!user) {
        throw new AppError("Authentication required", 401, "AUTH_REQUIRED");
      }

      if (!hasPermission(user.role, permission)) {
        throw new AppError("Permission denied", 403, "PERMISSION_DENIED");
      }

      next();
    } catch (error) {
      next(error);
    }
  };
}
