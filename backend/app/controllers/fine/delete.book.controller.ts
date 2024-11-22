import { Request, Response } from "express";
import BookModel from "../../models/book.model";

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const book = BookModel.findById(bookId);

    if (!book) {
      res.send(`Book ${bookId} not found`);
      return;
    }

    await BookModel.findOneAndDelete(book);
    res.send(`Book ${bookId} has been deleted`);
  } catch (err) {
    console.log(err);
  }
};
