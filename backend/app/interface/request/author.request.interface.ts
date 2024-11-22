import { ObjectId } from "mongoose";
import { IAuthor } from "../author.interface";

export interface AuthorCreate extends Omit<IAuthor, "_id"> {}

export interface AuthorUpdate extends Omit<IAuthor, "_id"> {}
