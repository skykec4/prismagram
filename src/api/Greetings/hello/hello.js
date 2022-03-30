import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default {
  Query: {
    hello: async () => {
      console.log(await prisma.user.findMany());
      const users = await prisma.user.findMany();
      return "hello";
    },
  },
};
