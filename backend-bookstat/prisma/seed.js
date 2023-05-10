import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

async function seed() {
  const user1 = await createUser(
    "test@test.com",
    "Testpassword1!",
    "Frank",
    "Reeds",
    "Hello, booksta!"
  );
  const user2 = await createUser(
    "profile2@test.com",
    "Testpassword1!",
    "Rick",
    "Sanchez",
    "Hello there!",
    "Author, lover of stories"
  );

}

async function createUser(email, password, firstName, lastName, bio) {
  const user = await prisma.user.create({
    data: {
      email,
      password: await bcrypt.hash(password, 8),
      profile: {
        create: {
          firstName,
          lastName,
          bio,
        },
      },
    },
    include: {
      profile: true,
    },
  });

  console.info(`${firstName} created`, user);

  return user;
}

seed().catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
