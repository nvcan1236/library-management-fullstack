import { Request, Response } from "express";
import authorModel from "../../models/author.model";
import { isValidObjectId } from "mongoose";

export async function getAuthors(req: Request, res: Response): Promise<void> {
  try {
    const authors = await authorModel.find();
    res.send(authors);
  } catch (err) {
    console.log(err);
  }
}

export async function getAuthor(req: Request, res: Response): Promise<void> {
  try {
    const authorId = req.params.authorId
    if(!isValidObjectId(authorId)) {
      res.send(`${authorId} is not id's format.`)
      return;
    } 

    const author = await authorModel.findOne({
      "_id": authorId
    });

    res.send(author);

  } catch (err) {
    console.log(err);
  }
}
