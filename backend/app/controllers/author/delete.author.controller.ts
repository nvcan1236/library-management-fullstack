import { Request, Response } from "express";
import authorModel from "../../models/author.model";

export const deleteAuthor = async (req: Request, res: Response) => {
  try {
    const authorId = req.params.authorId;
    const author = authorModel.findById(authorId);

    if (!author) {
      res.send(`Author ${authorId} not found`);
      return;
    }

    await authorModel.findOneAndDelete(author);
    res.send(`Author ${authorId} has been deleted`);
  } catch (err) {
    console.log(err);
  }
};
