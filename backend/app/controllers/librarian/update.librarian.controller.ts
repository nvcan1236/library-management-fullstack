import { Request, Response } from "express";
import LibrarianModel from "../../models/librarian.model";

export const updateLibrarian = async (req: Request, res: Response) => {
  try {
    const librarianId = req.params.librarianId;
    const librarian = await LibrarianModel.findById(librarianId);

    if (!librarian) {
      res.send(`Librarian ${librarianId} not found`);
      return;
    }

    await LibrarianModel.updateOne({
      "_id": librarianId
    }, req.body);
    res.send(`Librarian ${librarianId} has been updated`);
  } catch (err) {
    console.log(err);
  }
};
