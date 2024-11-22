import { Request, Response } from "express";
import BookModel from "../../models/book.model";
import { BookCreate } from "../../interface/index.interface";

export const addBook = async (req: Request, res: Response) => {
  try {
    const {
      title,
      language,
      numberOfCopies,
      publisher,
      author,
      availableCopies,
      category,
      coverImage
    } = req.body as BookCreate;

    const newBook = new BookModel({
      title,
      language,
      numberOfCopies,
      publisher,
      author,
      availableCopies,
      category,
      coverImage,
    })

    const book = await newBook.save()
    res.send(book);
  } catch (err) {
    console.log(err);
  }
};
