import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

async function seed() {
const user = await createUser();
     process.exit(0);
}

async function createUser() {
  const password = "Password1!";
  const user = await prisma.user.create({
    data: {
      email: "test@test.com",
      password: await bcrypt.hash(password, 8),
      profile: {
        create: {
          firstName: "Frank",
          lastName: "Reeds",
          bio: "Hello, booksta!",
        },
      },
    },
    include: {
      profile: true,
    },
  });

   console.log("user created", user);

  return user;
}

seed()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  })
  .finally(() => process.exit(1));