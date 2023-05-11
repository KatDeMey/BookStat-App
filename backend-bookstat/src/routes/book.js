import { Router } from "express";
const router = Router();

router.post("/", validateAuthentication, create);
router.get("/", validateAuthentication, getAll);
router.post(
  "/:id/comments/:commentId/like",
  validateAuthentication,
  likeComment
);
// router.delete(
//   "/:id/comments/:commentId/like",
//   validateAuthentication,
//   deleteLikeFromComment
// );
// router.post("/:id/comments", validateAuthentication, createComment);
// router.post("/:id/like", validateAuthentication, likePost);
// router.delete("/:id/like", validateAuthentication, deleteLikeFromPost);
// router.get("/:id", validateAuthentication, getById);
// router.delete("/:id", validateAuthentication, validateEditPostAuth, deletePost);
// router.get("/:id/comments", validateAuthentication, getAllComments);
// router.patch("/:id", validateAuthentication, validateEditPostAuth, updateById);
// router.patch(
//   "/:id/comments/:commentId",
//   validateAuthentication,
//   validateEditCommentAuth,
//   editComment
// );
// router.delete(
//   "/:id/comments/:commentId",
//   validateAuthentication,
//   deleteCommentFromPost
// );
// export default router;
