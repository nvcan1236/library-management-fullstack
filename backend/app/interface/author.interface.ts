import { Document } from "mongoose";
import { IPerson } from "./person.interface";

export interface IAuthor extends Document, IPerson {
}
