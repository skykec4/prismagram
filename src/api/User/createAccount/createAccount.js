import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { username, email, firstName = "", lastName = "", bio = "" } = args;
      console.log(username, email);
      const user = await prisma.user.create({
        data: {
          username,
          email,
          firstName,
          lastName,
          bio,
        },
      });

      console.log(user);

      return user;
    },
  },
};
