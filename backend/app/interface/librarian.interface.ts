import { Document } from "mongoose";
import { IPerson } from "./person.interface";

export type LibrarianPosition = "assitant" | "officer";

export interface ILibrariant extends Document, IPerson {
  position: LibrarianPosition
}
