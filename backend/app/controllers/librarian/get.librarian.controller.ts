import { Request, Response } from "express";
import librarianModel from "../../models/librarian.model";
import { isValidObjectId } from "mongoose";

export async function getLibrarians(req: Request, res: Response): Promise<void> {
  try {
    const librarians = await librarianModel.find();
    res.send(librarians);
  } catch (err) {
    console.log(err);
  }
}

export async function getLibrarian(req: Request, res: Response): Promise<void> {
  try {
    const librarianId = req.params.librarianId
    if(!isValidObjectId(librarianId)) {
      res.send(`${librarianId} is not id's format.`)
      return;
    } 

    const librarian = await librarianModel.findOne({
      "_id": librarianId
    });

    res.send(librarian);

  } catch (err) {
    console.log(err);
  }
}
