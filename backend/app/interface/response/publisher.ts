import { ObjectId } from "mongoose";
import { IBook } from "../book.interface";

export interface BookCreate extends Omit<IBook, "_id"> {}

export interface BookUpdate extends Omit<IBook, "_id"> {}
