import { Request, Response } from "express";
import AuthorModel from "../../models/author.model";

export const updateAuthor = async (req: Request, res: Response) => {
  try {
    const authorId = req.params.authorId;
    const author = await AuthorModel.findById(authorId);

    if (!author) {
      res.send(`Author ${authorId} not found`);
      return;
    }

    await AuthorModel.updateOne({
      "_id": authorId
    }, req.body);
    res.send(`Author ${authorId} has been updated`);
  } catch (err) {
    console.log(err);
  }
};
