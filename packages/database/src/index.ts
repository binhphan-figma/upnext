import { PrismaClient } from "@prisma/client";

export const createPrismaClient = () => new PrismaClient();

export type UpNextDatabaseClient = ReturnType<typeof createPrismaClient>;
