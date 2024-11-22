import { Request, Response } from "express";
import bookModel from "../../models/book.model";
import { isValidObjectId } from "mongoose";

export async function getBooks(req: Request, res: Response): Promise<void> {
  try {
    const books = await bookModel.find();
    res.send(books);
  } catch (err) {
    console.log(err);
  }
}

export async function getBook(req: Request, res: Response): Promise<void> {
  try {
    const bookId = req.params.bookId
    if(!isValidObjectId(bookId)) {
      res.send(`${bookId} is not id's format.`)
      return;
    } 

    const book = await bookModel.findOne({
      "_id": bookId
    });

    res.send(book);

  } catch (err) {
    console.log(err);
  }
}
