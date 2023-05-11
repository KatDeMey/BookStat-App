import { Prisma } from "@prisma/client";
import { sendDataResponse } from "../utils/responses.js";
import {
  createBook,
  getAllBooks,
  // updateBookById,
  // deleteById,
} from "../domain/book.js";

export const create = async (req, res) => {
  const book = {};

  if (req.body.title) {
    book.title = req.body.title;
  } else {
    return sendDataResponse(res, 400, "Please provide a title");
  }

  if (req.body.authorFirstName) {
    book.authorFirstName = req.body.authorFirstName;
  } else {
    return sendDataResponse(res, 400, "Please provide a authorFirstName");
  }
  if (req.body.authorLastName) {
    book.authorLastName = req.body.authorLastName;
  } else {
    return sendDataResponse(res, 400, "Please provide a authorLastName");
  }
  if (req.body.coverUrl) {
    book.coverUrl = req.body.coverUrl;
  } else {
    //TODO: check this can be used/ find another img
    book.coverUrl =
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg03.deviantart.net%2F323e%2Fi%2F2009%2F028%2F8%2F0%2Fclassic_red_book_cover_by_semireal_stock.jpg&f=1&nofb=1&ipt=c870a101338261a09c317afc76f9857273ebf466bb581e76ee56ab03420e13f1&ipo=images";
  }
  if (req.body.numPages) {
    book.numPages = req.body.numPages;
  } else {
    book.numPages = null;
  }
  if (req.body.publisher) {
    book.publisher = req.body.publisher;
  } else {
    return sendDataResponse(res, 400, "Please provide a publisher");
  }
  if (req.body.yearPublished) {
    book.yearPublished = req.body.yearPublished;
  } else {
    book.yearPublished = null;
  }
  if (req.body.ReadStatus) {
    book.ReadStatus = req.body.ReadStatus;
  } else {
    book.ReadStatus = "Not Read";
  }

  try {
    console.log(book);
    const newBook = await createBook(
      book.title,
      book.authorFirstName,
      book.authorLastName,
      book.coverUrl,
      book.numPages,
      book.publisher,
      book.yearPublished,
      book.ReadStatus
    );
    return sendDataResponse(res, 201, newBook);
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.error(e.code, e.message);
      return sendDataResponse(res, 400, "error");
    } else {
      console.log(e);
      return sendDataResponse(res, 400, "error");
    }
  }

  // return sendDataResponse(res, 201, {
  //   data: {
  //     id: createdBook.id,
  //     title: createdBook.title,
  //     authorFirstName: createdBook.authorFirstName,
  //     authorLastName: createdBook.authorLastName,
  //     coverUrl: createdBook.coverUrl,
  //     numPages: createdBook.numPages,
  //     publisher: createdBook.publisher,
  //     yearPublished: createdBook.yearPublished,
  //     ReadStatus: createdBook.ReadStatus,
  //   },
  // });
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
