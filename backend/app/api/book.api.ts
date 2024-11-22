import express from "express";
import {
  addBook,
  getBook,
  getBooks,
  updateBook,deleteBook
} from "../controllers/book/index.book.controller";

const router = express.Router();

router.get("/", getBooks);
router.post("/", addBook);
router.get("/:bookId", getBook);
router.put("/:bookId", updateBook);
router.delete("/:bookId", deleteBook);

export default router;
