import { Request, Response } from "express";
import BookModel from "../../models/book.model";

export const updateBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const book = await BookModel.findById(bookId);

    if (!book) {
      res.send(`Book ${bookId} not found`);
      return;
    }

    await BookModel.updateOne({
      "_id": bookId
    }, req.body);
    res.send(`Book ${bookId} has been updated`);
  } catch (err) {
    console.log(err);
  }
};
