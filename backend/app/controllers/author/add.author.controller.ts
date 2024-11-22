import { Request, Response } from "express";
import BookModel from "../../models/book.model";
import { AuthorCreate } from "../../interface/request/author.request.interface";
import authorModel from "../../models/author.model";

export const addAuthor = async (req: Request, res: Response) => {
  try {
    const newauthor = new authorModel(req.body)

    const author = await newauthor.save()
    res.send(author);
  } catch (err) {
    console.log(err);
  }
};
