import { IBook } from "../book.interface";

export interface BookCreate extends Omit<IBook, "_id" | "status"> {}

export interface BookUpdate extends Omit<IBook, "_id"> {}
