import dbClient from "../utils/dbClient.js";

export async function createBook(
  title,
  authorFirstName,
  authorLastName,
  coverUrl,
  numPages,
  publisher,
  yearPublished,
  ReadStatus
) {
  return await dbClient.book.create({
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
}

export async function getAllBooks() {
  return await dbClient.book
    .findMany
    // {take: 6}
    ();
}

export async function findById(id) {
  return await dbClient.book.findUnique({
    where: {
      id: id,
    },
  });
}

export async function deleteById(id) {
  return await dbClient.book.delete({
    where: {
      id,
    },
  });
}

// export async function updateBookById(id, content) {
//   return await dbClient.book.update({
//     where: {
//       id,
//     },
//     data: {
//       content,
//     },
//     include: {
//       user: {
//         select: {
//           id: true,
//           role: true,
//         },
//       },
//     },
//   });
// }
