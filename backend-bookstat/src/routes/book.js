import { Router } from 'express';
import {
  create,
  // getById,
  getAll,
  // updateById,
  // getByTitle,
  // deleteBook,
} from "../controllers/book.js";
// import {
//   validateAuthentication,
//   validateIdOrRole,
// } from "../middleware/auth.js";

const router = Router();


router.post("/", create);
router.get("/", getAll);

export default router;




// router.get("/:id", getById);
// router.get("/:title", getByTitle);
// router.delete("/:id/:status", deleteBook); //delete from reading list (therefore, need id, and to see if it is in the list)
// router.patch("/:id", updateById);