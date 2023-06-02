import { PrismaClient } from "@prisma/client";

import { isProduction } from "utils/common";

declare global {
  // eslint-disable-next-line no-unused-vars
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (isProduction()) {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
