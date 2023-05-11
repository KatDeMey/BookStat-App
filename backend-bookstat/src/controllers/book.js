import { Prisma } from "@prisma/client";
import { sendDataResponse } from "../utils/responses.js";
import {
  createBook,
  getAllBooks,
  // updateBookById,
  // deleteById,
} from "../domain/book.js";

export const create = async (req, res) => {
  const { content } = req.body;
  if (!content) {
    return sendDataResponse(res, 400, { error: "Must provide content" });
  }

  const createdBook = await createBook(content);
  return sendDataResponse(res, 201, {
    data: {
      id: createdBook.id,
      title: createdBook.title,
      authorFirstName: createdBook.authorFirstName,
      authorLastName: createdBook.authorLastName,
      coverUrl: createdBook.coverUrl,
      numPages: createdBook.numPages,
      publisher: createdBook.publisher,
      yearPublished: createdBook.yearPublished,
      ReadStatus: createdBook.ReadStatus,
    },
  });
};

export const getAll = async (req, res) => {
  const books = await getAllBooks();
  return sendDataResponse(res, 200, { books });
};

// export const getById = async (req, res) => {
// };

// export const getByTitle = async (req, res) => {};

// export const deleteBook = async (req, res) => {};

// export const updateById = async (req, res) => {};
