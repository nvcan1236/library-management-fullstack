import bookRouter from "./book.api";
import authorRouter from "./author.api";
import memberRouter from "./member.api";
import publisherRouter from "./publisher.api";
import librarianRouter from "./librarian.api";
import loanRouter from "./loan.api";
import express from "express";

const router = express.Router();

router.use("/book", bookRouter);
router.use("/member", memberRouter);
router.use("/librarian", librarianRouter);
router.use("/author", authorRouter);
router.use("/publisher", publisherRouter);
router.use("/loan", loanRouter);

export default router;
