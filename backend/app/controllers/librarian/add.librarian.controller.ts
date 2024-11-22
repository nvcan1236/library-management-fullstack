import { Request, Response } from "express";
import LibrarianModel from "../../models/librarian.model";

export const addLibrarian = async (req: Request, res: Response) => {
  try {

    const newLibrarian = new LibrarianModel(req.body)
    const librarian = await newLibrarian.save()
    res.send(librarian);
  } catch (err) {
    console.log(err);
  }
};
