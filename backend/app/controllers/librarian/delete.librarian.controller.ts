import { Request, Response } from "express";
import LibrarianModel from "../../models/librarian.model";

export const deleteLibrarian = async (req: Request, res: Response) => {
  try {
    const librarianId = req.params.librarianId;
    const librarian = LibrarianModel.findById(librarianId);

    if (!librarian) {
      res.send(`Librarian ${librarianId} not found`);
      return;
    }

    await LibrarianModel.findOneAndDelete(librarian);
    res.send(`Librarian ${librarianId} has been deleted`);
  } catch (err) {
    console.log(err);
  }
};
