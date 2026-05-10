import {
  createDemoAccessToken,
  demoUsers,
  getDemoUserByEmail,
  getPermissionsForRole,
  type AuthSession,
  type DemoUser
} from "@upnext/domain";
import { AppError } from "../../common/errors";
import type { LoginRequest, RegisterRequest } from "./auth.schemas";

export class AuthService {
  listDemoAccounts(): DemoUser[] {
    return demoUsers;
  }

  login(input: LoginRequest): AuthSession {
    const user = getDemoUserByEmail(input.email);

    if (!user || input.password !== user.passwordHint) {
      throw new AppError("Invalid demo credentials", 401, "INVALID_CREDENTIALS");
    }

    return {
      accessToken: createDemoAccessToken(user),
      user,
      permissions: getPermissionsForRole(user.role)
    };
  }

  register(input: RegisterRequest): AuthSession {
    const existingUser = getDemoUserByEmail(input.email);

    if (existingUser) {
      throw new AppError("Email already exists in demo users", 409, "EMAIL_ALREADY_EXISTS");
    }

    const user: DemoUser = {
      id: `demo-${input.role}-${Date.now()}`,
      email: input.email.toLowerCase(),
      name: input.name,
      role: input.role,
      passwordHint: "Use hashed passwords in production",
      avatarInitials: input.name
        .split(" ")
        .slice(0, 2)
        .map((part) => part[0])
        .join("")
        .toUpperCase(),
      onboardingTasks:
        input.role === "candidate"
          ? ["Complete profile basics", "Upload CV and confirm AI consent", "Apply to one job"]
          : ["Create company profile", "Publish first job post", "Review applicant pipeline"],
      dashboardPath: input.role === "candidate" ? "/candidate" : "/recruiter"
    };

    return {
      accessToken: createDemoAccessToken(user),
      user,
      permissions: getPermissionsForRole(user.role)
    };
  }
}

export const authService = new AuthService();
