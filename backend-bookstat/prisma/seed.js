// import bcrypt from "bcrypt";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seed() {
  await createUser();
  await createBook(
    "A Man and his Cat vol.1",
    "Umi",
    "Sakurai",
    "https://cdn.thestorygraph.com/6zkq2khxeygh4a3ic8yil2o8z0pd",
    145,
    "Square Enix Manga & Books",
    2020,
    "Read"
  );
  await createBook(
    "The House in the Cerulean Sea",
    "TJ",
    "Klune",
    "https://cdn.thestorygraph.com/v5kdnfpfech11x14nxw2vn6d9yex",
    398,
    "Tor Books",
    2020,
    "To Be Read"
  );
  await createTags()
  process.exit(0);
}

// TODO: encrypt passwords
async function createUser() {
  const password = "Password1!";
  const user = await prisma.user.create({
    data: {
      email: "test@test.com",
      // password: await bcrypt.hash(password, 8),
      password,
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

async function createBook(
  title,
  authorFirstName,
  authorLastName,
  coverUrl,
  numPages,
  publisher,
  yearPublished,
  ReadStatus
) {
  const book = await prisma.book.create({
    data: {
      title,
      authorFirstName,
      authorLastName,
      coverUrl,
      numPages,
      publisher,
      yearPublished,
      ReadStatus,
    },
  });
  console.log("Book created:", book);
  return book;
}

async function createTags() {
  const tags = await prisma.tags.createMany({
    data: [
      {tag: "fiction"},
      {tag: "non-fiction"},
      {tag: "humour"},
      {tag: "lighthearted"},
      {tag: "mystery"},
      {tag: "thriller"},
      {tag: "true-crime"},
      {tag: "lgbtq+"},
      {tag: "romance"},
      {tag: "contemporary"},
      {tag: "historical"},
      {tag: "science-fiction"},
      {tag: "young adult"},
      {tag: "self help"},
      {tag: "psychology"},
      {tag: "memoir"},
    ],
  });

  return tags;
}

// review on book by Frank

//Tag on Book

//Rating on book

seed()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  })
  .finally(() => process.exit(1));
