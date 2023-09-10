// db.js (for JavaScript) or db.ts (for TypeScript)

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export { prisma };
