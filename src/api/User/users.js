import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default {
  Query: {
    users: async () => {
      const users = await prisma.user.findMany({
        include: {
          following: true,
          followers: true,
        },
      });

      console.log("ooo : ", users);
      return users;
    },
  },
};
