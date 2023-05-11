import { Router } from "express";
const router = Router();
import {
  create,
  getAll,
  getById,
  getByTitle,
  deleteBook,
  updateById,
} from "../controllers/book";

router.post("/", create);
router.get("/", getAll);
router.get("/:id", getById);
router.get("/:title", getByTitle);
router.delete("/:id/:status", deleteBook); //delete from reading list (therefore, need id, and to see if it is in the list)
router.patch("/:id", updateById);

// router.post("/", validateAuthentication, createBook);
// router.get("/", validateAuthentication, getAll);
// router.get("/:id", validateAuthentication, getById);
// router.get("/:title", validateAuthentication, getByTitle);
// router.delete("/:id/:status", validateAuthentication, deleteById); //delete from reading list (therefore, need id, and to see if it is in the list)
// router.patch("/:id", validateAuthentication, updateBook);
