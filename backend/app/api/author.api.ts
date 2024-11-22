import express from "express";
import {
  addAuthor,
  getAuthor,
  getAuthors,
  updateAuthor,
  deleteAuthor,
} from "../controllers/author/index.author.controller";

const router = express.Router();

router.get("/", getAuthors);
router.post("/", addAuthor);
router.get("/:authorId", getAuthor);
router.put("/:authorId", updateAuthor);
router.delete("/:authorId", deleteAuthor);

export default router;
